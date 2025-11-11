import * as vscode from 'vscode';
import { ColorThemeKind } from 'vscode';
import {
    PokemonSize,
    PokemonColor,
    PokemonType,
    ExtPosition,
    WebviewMessage,
    ALL_COLORS,
    ALL_SCALES,
    PokemonGeneration,
    PokemonConfig,
    PokemonProgression,
} from '../common/types';
import { randomName } from '../common/names';
import * as localize from '../common/localize';
import { availableColors, normalizeColor } from '../panel/pokemon-collection';
import { getDefaultPokemon, getPokemonByGeneration, getRandomPokemonConfig, getRandomPokemonByTypes, POKEMON_DATA } from '../common/pokemon-data';
import { ALL_THEMES, Theme } from '../panel/themes';
import { ALL_FOOD } from '../panel/food';

const DEFAULT_COLOR = PokemonColor.default;
const AFK_THRESHOLD = 5 * 60; // Threshold for deeming the user AFK, in seconds.

import * as cp from 'child_process';
import { log, logError } from '../common/util';
import { PokemonSpecification, storeCollectionAsMemento as saveExtensionState } from '../common/persistence';
import { getThrowWithMouseConfiguration, getConfigurationPosition, getConfiguredTheme, getConfiguredThemeKind, getConfiguredSize } from '../common/settings';

export class ShowdownBattleProcess {
    private process: cp.ChildProcess | null = null;
    private webview: vscode.Webview | undefined;

    constructor(webview?: vscode.Webview) {
        this.webview = webview;
    }

    start(extensionPath: string, showdownPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            const spawnCmd = 'node';
            const spawnArgs = [showdownPath, 'simulate-battle'];
            
            log('Starting Showdown process');

            this.process = cp.spawn(spawnCmd, spawnArgs, {
                cwd: extensionPath,
                stdio: ['pipe', 'pipe', 'pipe'] // IPC messages are not used by showdown.
            });

            // Read stdout and forward to webview
            this.process.stdout?.on('data', (data: Buffer) => {
                const output = data.toString();
                void this.webview?.postMessage({
                    command: 'showdown-output',
                    text: output
                });
            });

            // Read stderr and forward to webview
            this.process.stderr?.on('data', (data: Buffer) => {
                const error = data.toString();
                logError(`Showdown stderr: ${error}`);
                
                // Forward to webview
                void this.webview?.postMessage({
                    command: 'showdown-error',
                    text: error
                });
            });

            this.process.on('error', reject);
            this.process.on('exit', (code) => {
                log(`Process exited with code: ${code}`);
                void this.webview?.postMessage({
                    command: 'showdown-exit',
                    text: `Process exited with code: ${code}`
                });
                this.process = null;
            });

            resolve();
        });
    }

    // Write to stdin
    writeCommand(command: string): void {
        if (this.process?.stdin) {
            this.process.stdin.write(command + '\n');
        }
    }

    // Send IPC message (if using fork)
    sendMessage(command: string): void {
        this.process?.send({ command });
    }

    stop(): void {
        this.process?.kill();
    }
}

var combatProcess: ShowdownBattleProcess | null = null;

class PokemonQuickPickItem implements vscode.QuickPickItem {
    constructor(
        public readonly name_: string,
        public readonly type: string,
        public readonly color: string,
    ) {
        this.name = name_;
        this.label = name_;
        this.description = `${color} ${type}`;
    }

    name: string;
    label: string;
    kind?: vscode.QuickPickItemKind | undefined;
    description?: string | undefined;
    detail?: string | undefined;
    picked?: boolean | undefined;
    alwaysShow?: boolean | undefined;
    buttons?: readonly vscode.QuickInputButton[] | undefined;
}

let webviewViewProvider: PokemonWebviewViewProvider;

function updatePanelThrowWithMouse(): void {
    const panel = getPokemonPanel();
    if (panel !== undefined) {
        panel.setThrowWithMouse(getThrowWithMouseConfiguration());
    }
}

async function updateExtensionPositionContext() {
    await vscode.commands.executeCommand(
        'setContext',
        'vscode-pokemon.position',
        getConfigurationPosition(),
    );
}

let spawnPokemonStatusBar: vscode.StatusBarItem;

// Auto-spawn variables
let autoSpawnTimer: NodeJS.Timeout | undefined;
let afkCheckTimer: NodeJS.Timeout | undefined;
let lastActivityTime: number = Date.now();
let isTimerPaused: boolean = false;
let pausedSpawnTimerRemainingTime: number = 0; // Time remaining on the spawn timer before it was paused.
let spawnScheduledTime: number = 0; // Time at which the next random spawn can occur.

interface IPokemonInfo {
    type: PokemonType;
    name: string;
    color: PokemonColor;
}

async function handleRemovePokemonMessage(
    this: vscode.ExtensionContext,
    message: WebviewMessage,
) {
    var pokemonList: IPokemonInfo[] = Array();
    switch (message.command) {
        case 'list-pokemon':
            message.text.split('\n').forEach((pokemon) => {
                if (!pokemon) {
                    return;
                }
                var parts = pokemon.split(',');
                pokemonList.push({
                    type: parts[0] as PokemonType,
                    name: parts[1],
                    color: parts[2] as PokemonColor,
                });
            });
            break;
        default:
            return;
    }
    if (!pokemonList) {
        return;
    }
    if (!pokemonList.length) {
        await vscode.window.showErrorMessage(
            vscode.l10n.t('There are no pokemon to remove.'),
        );
        return;
    }
    await vscode.window
        .showQuickPick<PokemonQuickPickItem>(
            pokemonList.map((val) => {
                return new PokemonQuickPickItem(val.name, val.type, val.color);
            }),
            {
                placeHolder: vscode.l10n.t('Select the pokemon to remove.'),
            },
        )
        .then(async (pokemon: PokemonQuickPickItem | undefined) => {
            if (pokemon) {
                const panel = getPokemonPanel();
                if (panel !== undefined) {
                    panel.deletePokemon(pokemon.name);
                    const collection = pokemonList
                        .filter((item) => {
                            return item.name !== pokemon.name;
                        })
                        .map<PokemonSpecification>((item) => {
                            return new PokemonSpecification(
                                item.color,
                                item.type,
                                PokemonSize.medium,
                                item.name,
                            );
                        });
                    await storeCollectionAsMemento(this, collection);
                }
            }
        });
}

function getPokemonPanel(): IPokemonPanel | undefined {
    if (
        getConfigurationPosition() === ExtPosition.explorer &&
        webviewViewProvider
    ) {
        return webviewViewProvider;
    } else if (PokemonPanel.currentPanel) {
        return PokemonPanel.currentPanel;
    } else {
        return undefined;
    }
}

function getWebview(): vscode.Webview | undefined {
    if (
        getConfigurationPosition() === ExtPosition.explorer &&
        webviewViewProvider
    ) {
        return webviewViewProvider.getWebview();
    } else if (PokemonPanel.currentPanel) {
        return PokemonPanel.currentPanel.getWebview();
    }
}

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.start', async () => {
            if (
                getConfigurationPosition() === ExtPosition.explorer &&
                webviewViewProvider
            ) {
                await vscode.commands.executeCommand('pokemonView.focus');
            } else {
                const spec = PokemonSpecification.fromConfiguration();
                PokemonPanel.createOrShow(
                    context.extensionUri,
                    spec.color,
                    spec.type,
                    spec.size,
                    spec.generation,
                    spec.originalSpriteSize,
                    getConfiguredTheme(),
                    getConfiguredThemeKind(),
                    getThrowWithMouseConfiguration(),
                );

                if (PokemonPanel.currentPanel) {
                    var collection = PokemonSpecification.collectionFromMemento(
                        context,
                        getConfiguredSize(),
                    );
                    collection.forEach((item) => {
                        PokemonPanel.currentPanel?.spawnPokemon(item);
                    });
                    // Store the collection in the memento, incase any of the null values (e.g. name) have been set
                    await saveExtensionState(context, collection);
                }
            }
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.start-combat', async () => {
            const panel = getPokemonPanel();
            if (getConfigurationPosition() === ExtPosition.explorer && webviewViewProvider) {
                await vscode.commands.executeCommand('pokemonView.focus');
            }
            if (combatProcess) {
                await vscode.window.showInformationMessage("You're already in combat!");
                return;
            }
            if (panel) {
                panel.startCombat();
                
                // Get webview and start Showdown process
                const webview = getWebview();
                if (webview) {
                    combatProcess = new ShowdownBattleProcess(webview);
                    console.log('Starting Showdown battle process...');
                    const showdownPathSetting = vscode.workspace.getConfiguration('vscode-pokemon').get<string>('showdownPath', '').trim();

                    try {
                        if (!showdownPathSetting) {
                            throw new Error('Could not resolve pokemon-showdown from node_modules');
                        }
                        await combatProcess.start(context.extensionPath, showdownPathSetting);

                    } catch (e) {
                        // Show error notification
                        await vscode.window.showErrorMessage('Failed to start Pokemon Showdown battle process. Double-check that the pokemon-showdown node module is installed and that your showdownPath setting is correct.');
                    }
                }
            } else {
                await vscode.window.showInformationMessage(
                    vscode.l10n.t('Please start the Pokemon panel first using the "Start Pokemon" command.'),
                );
            }
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.throw-ball', () => {
            const panel = getPokemonPanel();
            if (panel !== undefined) {
                panel.throwBall();
            }
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.throw-berry', async () => {
            const panel = getPokemonPanel();
            if (panel !== undefined) {
                const berryOptions = ALL_FOOD.map(food => ({
                    label: food.name,
                    value: food.id,
                    // description: `Restores ${food.hungerRestored} hunger`, // Unnecessary unless we make them restore less than full hunger.
                    detail: `Enjoyed by Pokemon of types ${food.enjoyedByTypes.join(', ')}`
                }));

                const selectedBerry = await vscode.window.showQuickPick(
                    berryOptions,
                    {
                        placeHolder: 'Select a berry to throw',
                    }
                );

                if (selectedBerry) {
                    panel.throwBerry(selectedBerry.value);
                }
            }
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.change-theme', async () => {
            // Create QuickPick items
            const currentTheme = getConfiguredTheme();
            const themes = ALL_THEMES;
            const themeOptions = themes.map(theme => ({
                label: theme.id === currentTheme ? `$(check) ${theme.id}` : theme.id,
                value: theme.id,
                description: theme.id === currentTheme ? 'Current' : undefined
            }));
            const selectedTheme = await vscode.window.showQuickPick(
                themeOptions,
                {
                    placeHolder: 'Select a background theme',
                }
            );
            
            // Set new theme
            if (selectedTheme) {
                await vscode.workspace.getConfiguration('vscode-pokemon').update(
                    'theme',
                    selectedTheme.value,
                    vscode.ConfigurationTarget.Global
                );
            }
        }),
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.reset-pokemon-position', () => {
            // The webview will use the mouse position directly
            console.log('Sending reset-pokemon-position command');
            void getWebview()?.postMessage({
                command: 'reset-pokemon-position'
            });
        }),
    );

    spawnPokemonStatusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100,
    );
    spawnPokemonStatusBar.command = 'vscode-pokemon.spawn-pokemon';
    context.subscriptions.push(spawnPokemonStatusBar);

    // Helper function to update AFK status and resume spawn timer if paused
    const updateActivity = () => {
        lastActivityTime = Date.now();
        // Resume spawn timer if it was paused
        if (isTimerPaused) {
            isTimerPaused = false;
            setupAutoSpawn(context);
        }
    };

    // Track user activity for auto-spawn
    const vscActivityListener = () => {
        updateActivity();
    };
    context.subscriptions.push(
        // Typing in documents
        vscode.workspace.onDidChangeTextDocument(vscActivityListener),
        // Switching files
        vscode.window.onDidChangeActiveTextEditor(vscActivityListener),
        // Changing selection (cursor movement)
        vscode.window.onDidChangeTextEditorSelection(vscActivityListener),
        // Scrolling viewport
        vscode.window.onDidChangeTextEditorVisibleRanges(vscActivityListener),
        // Switching visible text editors (ex. split view)
        vscode.window.onDidChangeVisibleTextEditors(vscActivityListener)
    );

    updateStatusBar();

    const spec = PokemonSpecification.fromConfiguration();
    webviewViewProvider = new PokemonWebviewViewProvider(
        context.extensionUri,
        spec.color,
        spec.type,
        spec.size,
        spec.generation,
        spec.originalSpriteSize,
        getConfiguredTheme(),
        getConfiguredThemeKind(),
        getThrowWithMouseConfiguration(),
    );
    updateExtensionPositionContext().catch((e) => {
        console.error(e);
    });

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            PokemonWebviewViewProvider.viewType,
            webviewViewProvider,
        ),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.delete-pokemon', async () => {
            const panel = getPokemonPanel();
            if (panel !== undefined) {
                panel.listPokemon();
                getWebview()?.onDidReceiveMessage(
                    handleRemovePokemonMessage,
                    context,
                );
            } else {
                await createPokemonPlayground(context);
            }
        }),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.roll-call', async () => {
            const panel = getPokemonPanel();
            if (panel !== undefined) {
                panel.rollCall();
            } else {
                await createPokemonPlayground(context);
            }
        }),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            'vscode-pokemon.export-pokemon-list',
            async () => {
                const pokemonCollection = PokemonSpecification.collectionFromMemento(
                    context,
                    getConfiguredSize(),
                );
                const pokemonJson = JSON.stringify(pokemonCollection, null, 2);
                const fileName = `pokemonCollection-${Date.now()}.json`;
                if (!vscode.workspace.workspaceFolders) {
                    await vscode.window.showErrorMessage(
                        vscode.l10n.t(
                            'You must have a folder or workspace open to export pokemonCollection.',
                        ),
                    );
                    return;
                }
                const filePath = vscode.Uri.joinPath(
                    vscode.workspace.workspaceFolders[0].uri,
                    fileName,
                );
                const newUri = vscode.Uri.file(fileName).with({
                    scheme: 'untitled',
                    path: filePath.fsPath,
                });
                await vscode.workspace
                    .openTextDocument(newUri)
                    .then(async (doc) => {
                        await vscode.window
                            .showTextDocument(doc)
                            .then(async (editor) => {
                                await editor.edit((edit) => {
                                    edit.insert(
                                        new vscode.Position(0, 0),
                                        pokemonJson,
                                    );
                                });
                            });
                    });
            },
        ),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            'vscode-pokemon.import-pokemon-list',
            async () => {
                const options: vscode.OpenDialogOptions = {
                    canSelectMany: false,
                    openLabel: 'Open pokemonCollection.json',
                    filters: {
                        json: ['json'],
                    },
                };
                const fileUri = await vscode.window.showOpenDialog(options);

                if (fileUri && fileUri[0]) {
                    console.log('Selected file: ' + fileUri[0].fsPath);
                    try {
                        const fileContents = await vscode.workspace.fs.readFile(
                            fileUri[0],
                        );
                        const pokemonToLoad = JSON.parse(
                            String.fromCharCode.apply(
                                null,
                                Array.from(fileContents),
                            ),
                        );

                        // load the pokemon into the collection
                        var collection = PokemonSpecification.collectionFromMemento(
                            context,
                            getConfiguredSize(),
                        );
                        // fetch just the pokemon types
                        const panel = getPokemonPanel();
                        for (let i = 0; i < pokemonToLoad.length; i++) {
                            const pokemon = pokemonToLoad[i];
                            const pokemonSpec = new PokemonSpecification(
                                normalizeColor(pokemon.color, pokemon.type),
                                pokemon.type,
                                pokemon.size,
                                pokemon.name,
                            );
                            collection.push(pokemonSpec);
                            if (panel !== undefined) {
                                panel.spawnPokemon(pokemonSpec);
                            }
                        }
                        await saveExtensionState(context, collection);
                    } catch (e: any) {
                        await vscode.window.showErrorMessage(
                            vscode.l10n.t(
                                'Failed to import pokemon: {0}',
                                e?.message,
                            ),
                        );
                    }
                }
            },
        ),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.spawn-pokemon', async () => {
            const panel = getPokemonPanel();
            if (getConfigurationPosition() === ExtPosition.explorer && webviewViewProvider) {
                await vscode.commands.executeCommand('pokemonView.focus');
            }
            if (panel) {
                // First, select a generation
                const generations = Object.values(PokemonGeneration)
                    .filter(gen => typeof gen === 'number')
                    .map(gen => ({
                        label: `Generation ${gen}`,
                        value: gen as PokemonGeneration,
                        description: `Gen ${gen} Pokémon`
                    }));

                const selectedGeneration = await vscode.window.showQuickPick(
                    generations,
                    {
                        placeHolder: vscode.l10n.t('Select a generation'),
                    }
                );

                if (!selectedGeneration) {
                    console.log('Cancelled Spawning Pokemon - No Generation Selected');
                    return;
                }

                // Get Pokémon from selected generation
                const pokemonInGeneration = getPokemonByGeneration(selectedGeneration.value);
                const pokemonOptions = pokemonInGeneration.map(type => ({
                    label: POKEMON_DATA[type].name,
                    value: type,
                    description: `#${POKEMON_DATA[type].id.toString().padStart(4, '0')}`
                }));

                const selectedPokemonType = await vscode.window.showQuickPick(
                    pokemonOptions,
                    {
                        placeHolder: vscode.l10n.t('Select a Pokémon'),
                    }
                );

                if (!selectedPokemonType) {
                    console.log('Cancelled Spawning Pokemon - No Pokémon Selected');
                    return;
                }

                // Rest of the existing code
                var pokemonColor: PokemonColor = DEFAULT_COLOR;
                const possibleColors = availableColors(selectedPokemonType.value);

                if (possibleColors.length > 1) {
                    var selectedColor = await vscode.window.showQuickPick(
                        localize.stringListAsQuickPickItemList<PokemonColor>(
                            possibleColors,
                        ),
                        {
                            placeHolder: vscode.l10n.t('Select a color'),
                        },
                    );
                    if (!selectedColor) {
                        console.log('Cancelled Spawning Pokemon - No Color Selected');
                        return;
                    }
                    pokemonColor = selectedColor.value;
                } else {
                    pokemonColor = possibleColors[0];
                }

                const name = await vscode.window.showInputBox({
                    placeHolder: vscode.l10n.t('Leave blank for a random name'),
                    prompt: vscode.l10n.t('Name your Pokémon'),
                    value: randomName(selectedPokemonType.value),
                });

                const spec = new PokemonSpecification(
                    pokemonColor,
                    selectedPokemonType.value,
                    getConfiguredSize(),
                    name,
                );

                panel.spawnPokemon(spec);
                var collection = PokemonSpecification.collectionFromMemento(
                    context,
                    getConfiguredSize(),
                );
                collection.push(spec);
                await saveExtensionState(context, collection);
            } else {
                await createPokemonPlayground(context);
                await vscode.window.showInformationMessage(
                    vscode.l10n.t(
                        "A Pokemon Playground has been created. You can now use the 'Spawn Additional Pokemon' Command to add more Pokemon.",
                    ),
                );
            }
        }),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('vscode-pokemon.spawn-random-pokemon', async () => {
            const panel = getPokemonPanel();
            if (getConfigurationPosition() === ExtPosition.explorer && webviewViewProvider) {
                await vscode.commands.executeCommand('pokemonView.focus');
            }
            if (panel) {
                var [randomPokemonType, randomPokemonConfig] = getRandomPokemonConfig();
                const spec = new PokemonSpecification(
                    randomPokemonConfig.possibleColors[0],
                    randomPokemonType,
                    getConfiguredSize(),
                    randomPokemonConfig.name,
                );

                panel.spawnPokemon(spec);
                var collection = PokemonSpecification.collectionFromMemento(
                    context,
                    getConfiguredSize(),
                );
                collection.push(spec);
                await saveExtensionState(context, collection);

            } else {
                await createPokemonPlayground(context);
                await vscode.window.showInformationMessage(
                    vscode.l10n.t(
                        "A Pokemon Playground has been created. You can now use the 'Remove All Pokemon' Command to remove all Pokemon.",
                    ),
                );
            }
        }));

    context.subscriptions.push(
        vscode.commands.registerCommand(
            'vscode-pokemon.remove-all-pokemon',
            async () => {
                const panel = getPokemonPanel();
                if (panel !== undefined) {
                    panel.resetPokemon();
                    await saveExtensionState(context, []);
                } else {
                    await createPokemonPlayground(context);
                    await vscode.window.showInformationMessage(
                        vscode.l10n.t(
                            "A Pokemon Playground has been created. You can now use the 'Remove All Pokemon' Command to remove all Pokemon.",
                        ),
                    );
                }
            },
        ),
    );

    // Listening to configuration changes
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration(
            (e: vscode.ConfigurationChangeEvent): void => {
                if (
                    e.affectsConfiguration('vscode-pokemon.pokemonColor') ||
                    e.affectsConfiguration('vscode-pokemon.pokemonType') ||
                    e.affectsConfiguration('vscode-pokemon.pokemonSize') ||
                    e.affectsConfiguration('vscode-pokemon.theme') ||
                    e.affectsConfiguration('workbench.colorTheme')
                ) {
                    const spec = PokemonSpecification.fromConfiguration();
                    const panel = getPokemonPanel();
                    if (panel) {
                        panel.updatePokemonColor(spec.color);
                        panel.updatePokemonSize(spec.size);
                        panel.updatePokemonType(spec.type);
                        panel.updateTheme(
                            getConfiguredTheme(),
                            getConfiguredThemeKind(),
                        );
                        panel.update();
                    }
                }

                if (e.affectsConfiguration('vscode-pokemon.position')) {
                    void updateExtensionPositionContext();
                }

                if (e.affectsConfiguration('vscode-pokemon.throwBallWithMouse')) {
                    updatePanelThrowWithMouse();
                }
            },
        ),
    );

    if (vscode.window.registerWebviewPanelSerializer) {
        // Make sure we register a serializer in activation event
        vscode.window.registerWebviewPanelSerializer(PokemonPanel.viewType, {
            async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel) {
                // Reset the webview options so we use latest uri for `localResourceRoots`.
                webviewPanel.webview.options = getWebviewOptions(
                    context.extensionUri,
                );
                const spec = PokemonSpecification.fromConfiguration();
                PokemonPanel.revive(
                    webviewPanel,
                    context.extensionUri,
                    spec.color,
                    spec.type,
                    spec.size,
                    spec.generation,
                    spec.originalSpriteSize,
                    getConfiguredTheme(),
                    getConfiguredThemeKind(),
                    getThrowWithMouseConfiguration(),
                );
            },
        });
    }

    // Auto-spawn setup
    setupAutoSpawn(context);
    // Listen for configuration changes to auto-spawn settings
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e: vscode.ConfigurationChangeEvent) => {
            if (e.affectsConfiguration('vscode-pokemon.autoSpawn') || 
                e.affectsConfiguration('vscode-pokemon.autoSpawnInterval')) {
                setupAutoSpawn(context);
            }
        })
    );
}

function setupAutoSpawn(context: vscode.ExtensionContext): void {
    // Clear existing timers if any (ex. when changing the settings while extension is running)
    if (autoSpawnTimer) {
        clearTimeout(autoSpawnTimer);
        autoSpawnTimer = undefined;
    }
    if (afkCheckTimer) {
        clearTimeout(afkCheckTimer);
        afkCheckTimer = undefined;
    }

    const autoSpawnEnabled = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<boolean>('autoSpawn', false);

    const autoSpawnIntervalSeconds = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<number>('autoSpawnInterval', 2700);

    if (autoSpawnEnabled && !isTimerPaused) {
        const scheduleNextSpawn = (useRemainingTime: boolean = false) => {
            let intervalToUse: number;
            
            if (useRemainingTime && pausedSpawnTimerRemainingTime > 0) {
                // Resume with remaining time
                intervalToUse = pausedSpawnTimerRemainingTime;
                pausedSpawnTimerRemainingTime = 0;
            } else {
                // Calculate new randomized interval
                const variance = 0.2;
                const randomFactor = 1 + (Math.random() * variance * 2 - variance); // +/- variance
                intervalToUse = autoSpawnIntervalSeconds * 1000 * randomFactor;
            }

            spawnScheduledTime = Date.now() + intervalToUse;

            autoSpawnTimer = setTimeout(async () => {
                const panel = getPokemonPanel();
                if (panel) {
                    // Get current theme
                    const currentTheme = getConfiguredTheme();
                    const themeConfig = ALL_THEMES.find(t => t.id === currentTheme);
                    
                    let pokemonType: PokemonType;
                    let pokemonConfig: PokemonConfig;
                    
                    // Pick a random pokemon from the theme's spawnable types
                    if (themeConfig && themeConfig.autoSpawnTypes.length > 0) {
                        const result = getRandomPokemonByTypes(themeConfig.autoSpawnTypes);
                        if (result) {
                            [pokemonType, pokemonConfig] = result;
                        } else {
                            // Fallback to random
                            [pokemonType, pokemonConfig] = getRandomPokemonConfig();
                        }
                    } else {
                        // Fallback for themes with no types set: pick randomly
                        [pokemonType, pokemonConfig] = getRandomPokemonConfig();
                    }
                    
                    const spec = new PokemonSpecification(
                        pokemonConfig.possibleColors[0], // TODO shiny chance, once those are implemented
                        pokemonType,
                        getConfiguredSize(),
                        randomName(pokemonConfig.name)
                    );
                    panel.spawnPokemon(spec);
                    
                    // Show notification
                    void vscode.window.showInformationMessage(
                        `A wild ${pokemonConfig.name} appeared!`
                    );
                    
                    // Update memento
                    const collection = PokemonSpecification.collectionFromMemento(
                        context,
                        getConfiguredSize(),
                    );
                    collection.push(spec);
                    await saveExtensionState(context, collection);
                }
                
                // Start new spawn timer if not paused
                if (!isTimerPaused) {
                    scheduleNextSpawn(false);
                }
            }, intervalToUse);
        };

        // Start inactivity checker
        const checkAFK = () => {
            const timeSinceLastActivity = Date.now() - lastActivityTime;
            
            if (timeSinceLastActivity >= AFK_THRESHOLD * 1000 && !isTimerPaused) {
                // Calculate remaining time before pausing
                pausedSpawnTimerRemainingTime = Math.max(0, spawnScheduledTime - Date.now());
                
                // Pause the spawn timer
                isTimerPaused = true;
                if (autoSpawnTimer) {
                    clearTimeout(autoSpawnTimer);
                    autoSpawnTimer = undefined;
                }
            }
            
            // Re-schedule the inactivity check
            afkCheckTimer = setTimeout(checkAFK, 30000);
        };

        // Check if resuming with remaining time
        const isResuming = pausedSpawnTimerRemainingTime > 0;
        
        // Start the first spawn
        scheduleNextSpawn(isResuming);
        
        // Track whether the user is actively using VSC
        checkAFK();

        // Clear timers
        context.subscriptions.push({
            dispose: () => {
                if (autoSpawnTimer) {
                    clearTimeout(autoSpawnTimer);
                    autoSpawnTimer = undefined;
                }
                if (afkCheckTimer) {
                    clearTimeout(afkCheckTimer);
                    afkCheckTimer = undefined;
                }
            }
        });
    }
}

function updateStatusBar(): void {
    spawnPokemonStatusBar.text = `$(squirrel)`;
    spawnPokemonStatusBar.tooltip = vscode.l10n.t('Spawn Pokemon');
    spawnPokemonStatusBar.show();
}

export function spawnPokemonDeactivate() {
    spawnPokemonStatusBar.dispose();
    if (autoSpawnTimer) {
        clearTimeout(autoSpawnTimer);
        autoSpawnTimer = undefined;
    }
    if (afkCheckTimer) {
        clearTimeout(afkCheckTimer);
        afkCheckTimer = undefined;
    }
}

function getWebviewOptions(
    extensionUri: vscode.Uri,
): vscode.WebviewOptions & vscode.WebviewPanelOptions {
    return {
        // Enable javascript in the webview
        enableScripts: true,
        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
    };
}

interface IPokemonPanel {
    throwBall(): void;
    throwBerry(berryId: string): void;
    resetPokemon(): void;
    spawnPokemon(spec: PokemonSpecification): void;
    deletePokemon(pokemonName: string): void;
    listPokemon(): void;
    rollCall(): void;
    themeKind(): vscode.ColorThemeKind;
    throwBallWithMouse(): boolean;
    updatePokemonColor(newColor: PokemonColor): void;
    updatePokemonType(newType: PokemonType): void;
    updatePokemonSize(newSize: PokemonSize): void;
    updateTheme(newTheme: Theme, themeKind: vscode.ColorThemeKind): void;
    update(): void;
    setThrowWithMouse(newThrowWithMouse: boolean): void;
    startCombat(): void;
}

class PokemonWebviewContainer implements IPokemonPanel {
    protected _extensionUri: vscode.Uri;
    protected _disposables: vscode.Disposable[] = [];
    protected _pokemonColor: PokemonColor;
    protected _pokemonType: PokemonType;
    protected _pokemonSize: PokemonSize;
    protected _pokemonGeneration: string;
    protected _pokemonOriginalSpriteSize: number;
    protected _theme: Theme;
    protected _themeKind: vscode.ColorThemeKind;
    protected _throwBallWithMouse: boolean;

    constructor(
        extensionUri: vscode.Uri,
        color: PokemonColor,
        type: PokemonType,
        size: PokemonSize,
        generation: string,
        originalSpriteSize: number,
        theme: Theme,
        themeKind: ColorThemeKind,
        throwBallWithMouse: boolean,
    ) {
        this._extensionUri = extensionUri;
        this._pokemonColor = color;
        this._pokemonType = type;
        this._pokemonSize = size;
        this._pokemonGeneration = generation;
        this._pokemonOriginalSpriteSize = originalSpriteSize;
        this._theme = theme;
        this._themeKind = themeKind;
        this._throwBallWithMouse = throwBallWithMouse;
    }

    public pokemonColor(): PokemonColor {
        return normalizeColor(this._pokemonColor, this._pokemonType);
    }

    public pokemonType(): PokemonType {
        return this._pokemonType;
    }

    public pokemonSize(): PokemonSize {
        return this._pokemonSize;
    }

    public pokemonGeneration(): string {
        return this._pokemonGeneration;
    }

    public pokemonOriginalSpriteSize(): number {
        return this._pokemonOriginalSpriteSize;
    }

    public theme(): Theme {
        return this._theme;
    }

    public themeKind(): vscode.ColorThemeKind {
        return this._themeKind;
    }

    public throwBallWithMouse(): boolean {
        return this._throwBallWithMouse;
    }

    public updatePokemonColor(newColor: PokemonColor) {
        this._pokemonColor = newColor;
    }

    public updatePokemonType(newType: PokemonType) {
        this._pokemonType = newType;
    }

    public updatePokemonSize(newSize: PokemonSize) {
        this._pokemonSize = newSize;
    }

    public updatePokemonGeneration(newGeneration: string) {
        this._pokemonGeneration = newGeneration;
    }

    public updateTheme(newTheme: Theme, themeKind: vscode.ColorThemeKind) {
        this._theme = newTheme;
        this._themeKind = themeKind;
    }

    public setThrowWithMouse(newThrowWithMouse: boolean): void {
        this._throwBallWithMouse = newThrowWithMouse;
        void this.getWebview().postMessage({
            command: 'throw-with-mouse',
            enabled: newThrowWithMouse,
        });
    }

    public throwBall() {
        void this.getWebview().postMessage({
            command: 'throw-ball',
        });
    }

    public startCombat() {
        void this.getWebview().postMessage({
            command: 'start-combat',
        });
    }

    public throwBerry(berryId: string) {
        void this.getWebview().postMessage({
            command: 'throw-berry',
            berry: berryId,
        });
    }

    public resetPokemon(): void {
        void this.getWebview().postMessage({
            command: 'reset-pokemon',
        });
    }

    public spawnPokemon(spec: PokemonSpecification) {
        void this.getWebview().postMessage({
            command: 'spawn-pokemon',
            type: spec.type,
            color: spec.color,
            name: spec.name,
            generation: spec.generation,
            originalSpriteSize: spec.originalSpriteSize,
        });
        void this.getWebview().postMessage({
            command: 'set-size',
            size: spec.size,
        });
    }

    public listPokemon() {
        void this.getWebview().postMessage({ command: 'list-pokemon' });
    }

    public rollCall(): void {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }

    public deletePokemon(pokemonName: string) {
        void this.getWebview().postMessage({
            command: 'delete-pokemon',
            name: pokemonName,
        });
    }

    protected getWebview(): vscode.Webview {
        throw new Error('Not implemented');
    }

    protected _update() {
        const webview = this.getWebview();
        webview.html = this._getHtmlForWebview(webview);
    }

    public update() { }

    protected _getHtmlForWebview(webview: vscode.Webview) {
        // Local path to main script run in the webview
        const scriptPathOnDisk = vscode.Uri.joinPath(
            this._extensionUri,
            'media',
            'main-bundle.js',
        );

        // And the uri we use to load this script in the webview
        const scriptUri = webview.asWebviewUri(scriptPathOnDisk);

        // Local path to css styles
        const styleResetPath = vscode.Uri.joinPath(
            this._extensionUri,
            'media',
            'reset.css',
        );
        const stylesPathMainPath = vscode.Uri.joinPath(
            this._extensionUri,
            'media',
            'pokemon.css',
        );
        const silkScreenFontPath = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri,
                'media',
                'Silkscreen-Regular.ttf',
            ),
        );
        const moveTypesCSSUri = webview.asWebviewUri(
            vscode.Uri.joinPath(
                this._extensionUri,
                'media',
                'move-types.css',
            ),
        );

        // Uri to load styles into webview
        const stylesResetUri = webview.asWebviewUri(styleResetPath);
        const stylesMainUri = webview.asWebviewUri(stylesPathMainPath);

        // Get path to resource on disk
        const basePokemonUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, 'media'),
        );

        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();

        // Load HTML template and replace placeholders
        const htmlTemplatePath = vscode.Uri.joinPath(this._extensionUri, 'src', 'extension', 'webview-body.html');
        const html = require('fs').readFileSync(htmlTemplatePath.fsPath, 'utf-8')
            .replace(/{nonce}/g, nonce)
            .replace(/{cspSource}/g, webview.cspSource)
            .replace(/{stylesResetUri}/g, stylesResetUri.toString())
            .replace(/{stylesMainUri}/g, stylesMainUri.toString())
            .replace(/{moveTypesCSSUri}/g, moveTypesCSSUri.toString())
            .replace(/{silkScreenFontPath}/g, silkScreenFontPath.toString())
            .replace(/{scriptUri}/g, scriptUri.toString())
            .replace(/{basePokemonUri}/g, basePokemonUri.toString())
            .replace(/{theme}/g, this.theme())
            .replace(/{themeKind}/g, this.themeKind().toString())
            .replace(/{pokemonColor}/g, this.pokemonColor())
            .replace(/{pokemonSize}/g, this.pokemonSize())
            .replace(/{pokemonType}/g, this.pokemonType())
            .replace(/{throwBallWithMouse}/g, this.throwBallWithMouse().toString())
            .replace(/{pokemonGeneration}/g, this.pokemonGeneration())
            .replace(/{pokemonOriginalSpriteSize}/g, this.pokemonOriginalSpriteSize().toString());

        return html;
    }
}

function handleWebviewMessage(message: WebviewMessage) {
    switch (message.command) {
        case 'alert':
            void vscode.window.showErrorMessage(message.text);
            return;
        case 'info':
            void vscode.window.showInformationMessage(message.text);
            return;
        // In handleWebviewMessage function
        case 'showdown-input':
            // console.log('Writing combat input from webview');
            if (combatProcess) {
                combatProcess.writeCommand(message.text);
            }
            break;
        case 'showdown-stop':
            // Gracefully terminate the Showdown battle process
            if (combatProcess) {
                combatProcess.stop();
                combatProcess = null;
            }
            break;
    }
}

/**
 * Manages pokemon coding webview panels
 */
class PokemonPanel extends PokemonWebviewContainer implements IPokemonPanel {
    /**
     * Track the currently panel. Only allow a single panel to exist at a time.
     */
    public static currentPanel: PokemonPanel | undefined;

    public static readonly viewType = 'pokemonCoding';

    private readonly _panel: vscode.WebviewPanel;

    public static createOrShow(
        extensionUri: vscode.Uri,
        pokemonColor: PokemonColor,
        pokemonType: PokemonType,
        pokemonSize: PokemonSize,
        pokemonGeneration: string,
        pokemonOriginalSpriteSize: number,
        theme: Theme,
        themeKind: ColorThemeKind,
        throwBallWithMouse: boolean,
    ) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        if (PokemonPanel.currentPanel) {
            if (
                pokemonColor === PokemonPanel.currentPanel.pokemonColor() &&
                pokemonType === PokemonPanel.currentPanel.pokemonType() &&
                pokemonSize === PokemonPanel.currentPanel.pokemonSize() &&
                pokemonGeneration === PokemonPanel.currentPanel.pokemonGeneration()
            ) {
                PokemonPanel.currentPanel._panel.reveal(column);
                return;
            } else {
                PokemonPanel.currentPanel.updatePokemonColor(pokemonColor);
                PokemonPanel.currentPanel.updatePokemonType(pokemonType);
                PokemonPanel.currentPanel.updatePokemonSize(pokemonSize);
                PokemonPanel.currentPanel.update();
            }
        }

        // Otherwise, create a new panel.
        const panel = vscode.window.createWebviewPanel(
            PokemonPanel.viewType,
            vscode.l10n.t('Pokemon Panel'),
            vscode.ViewColumn.Two,
            getWebviewOptions(extensionUri),
        );

        PokemonPanel.currentPanel = new PokemonPanel(
            panel,
            extensionUri,
            pokemonColor,
            pokemonType,
            pokemonSize,
            pokemonGeneration,
            pokemonOriginalSpriteSize,
            theme,
            themeKind,
            throwBallWithMouse,
        );
    }

    public resetPokemon() {
        void this.getWebview().postMessage({ command: 'reset-pokemon' });
    }

    public listPokemon() {
        void this.getWebview().postMessage({ command: 'list-pokemon' });
    }

    public rollCall(): void {
        void this.getWebview().postMessage({ command: 'roll-call' });
    }

    public deletePokemon(pokemonName: string): void {
        void this.getWebview().postMessage({
            command: 'delete-pokemon',
            name: pokemonName,
        });
    }

    public static revive(
        panel: vscode.WebviewPanel,
        extensionUri: vscode.Uri,
        pokemonColor: PokemonColor,
        pokemonType: PokemonType,
        pokemonSize: PokemonSize,
        pokemonGeneration: string,
        pokemonOriginalSpriteSize: number,
        theme: Theme,
        themeKind: ColorThemeKind,
        throwBallWithMouse: boolean,
    ) {
        PokemonPanel.currentPanel = new PokemonPanel(
            panel,
            extensionUri,
            pokemonColor,
            pokemonType,
            pokemonSize,
            pokemonGeneration,
            pokemonOriginalSpriteSize,
            theme,
            themeKind,
            throwBallWithMouse,
        );
    }

    private constructor(
        panel: vscode.WebviewPanel,
        extensionUri: vscode.Uri,
        color: PokemonColor,
        type: PokemonType,
        size: PokemonSize,
        generation: string,
        originalSpriteSize: number,
        theme: Theme,
        themeKind: ColorThemeKind,
        throwBallWithMouse: boolean,
    ) {
        super(
            extensionUri,
            color,
            type,
            size,
            generation,
            originalSpriteSize,
            theme,
            themeKind,
            throwBallWithMouse,
        );

        this._panel = panel;

        // Set the webview's initial html content
        this._update();

        // Listen for when the panel is disposed
        // This happens when the user closes the panel or when the panel is closed programmatically
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // Update the content based on view changes
        this._panel.onDidChangeViewState(
            () => {
                this.update();
            },
            null,
            this._disposables,
        );

        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(
            handleWebviewMessage,
            null,
            this._disposables,
        );
    }

    public dispose() {
        PokemonPanel.currentPanel = undefined;

        // Clean up our resources
        this._panel.dispose();

        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }

    public update() {
        if (this._panel.visible) {
            this._update();
        }
    }

    getWebview(): vscode.Webview {
        return this._panel.webview;
    }
}

class PokemonWebviewViewProvider extends PokemonWebviewContainer {
    public static readonly viewType = 'pokemonView';

    private _webviewView?: vscode.WebviewView;

    resolveWebviewView(webviewView: vscode.WebviewView): void | Thenable<void> {
        this._webviewView = webviewView;

        webviewView.webview.options = getWebviewOptions(this._extensionUri);
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

        webviewView.webview.onDidReceiveMessage(
            handleWebviewMessage,
            null,
            this._disposables,
        );
    }

    update() {
        this._update();
    }

    getWebview(): vscode.Webview {
        if (this._webviewView === undefined) {
            throw new Error(
                vscode.l10n.t(
                    'Panel not active, make sure the pokemon view is visible before running this command.',
                ),
            );
        } else {
            return this._webviewView.webview;
        }
    }
}

function getNonce() {
    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function createPokemonPlayground(context: vscode.ExtensionContext) {
    const spec = PokemonSpecification.fromConfiguration();
    PokemonPanel.createOrShow(
        context.extensionUri,
        spec.color,
        spec.type,
        spec.size,
        spec.generation,
        spec.originalSpriteSize,
        getConfiguredTheme(),
        getConfiguredThemeKind(),
        getThrowWithMouseConfiguration(),
    );
    if (PokemonPanel.currentPanel) {
        var collection = PokemonSpecification.collectionFromMemento(
            context,
            getConfiguredSize(),
        );
        collection.forEach((item) => {
            PokemonPanel.currentPanel?.spawnPokemon(item);
        });
        await saveExtensionState(context, collection);
    } else {
        var collection = PokemonSpecification.collectionFromMemento(
            context,
            getConfiguredSize(),
        );
        collection.push(spec);
        await saveExtensionState(context, collection);
    }
}
