// This script will be run within the webview itself
import { randomName } from '../common/names';
import {
    PokemonSize,
    PokemonColor,
    PokemonType,
    ColorThemeKind,
    WebviewMessage,
    PokemonProgression,
} from '../common/types';
import { Combat, CombatPokemon } from "../combat/combat";
import { ALL_THEMES, Theme } from './themes';
import { IPokemonType } from './states';
import {
    createPokemon,
    PokemonCollection,
    PokemonElement,
    IPokemonCollection,
    availableColors,
    InvalidPokemonException,
} from './pokemon-collection';
import {
    dynamicThrowOff,
    dynamicThrowOn,
    setupBallThrowing,
    throwAndChase,
} from './pokeball';
import { PokemonElementState, PokemonPanelState } from './states';
import { getRandomPokemonConfig, POKEMON_DATA, getRandomPokemonByTypes } from '../common/pokemon-data';
import { clamp, log, logError, sanitizeName } from '../common/util';
import { PhysicsEntityManager, Berry } from './entity';
import { Pokemon, PokemonNeedsState } from './pokemon';
import { getMoves } from '../common/learnsets-data';
import { CombatUIManager } from '../combat/ui';
import { VscodeStateApi } from '../common/vscode-api';

/* This is how the VS Code API can be invoked from the panel */
declare global {
    function acquireVsCodeApi(): VscodeStateApi;
}

export var allPokemon: IPokemonCollection = new PokemonCollection();
var pokemonCounter: number;
var lastMouseX: number | undefined;
var physicsEntityManager: PhysicsEntityManager;

var combat: Combat | null = null;
var combatUIManager: CombatUIManager | null = null;

// Tooltip management
export interface TooltipLine {
    text: string;
    className?: string;
}

class PokemonTooltip {
    private tooltipElement: HTMLElement | null = null;
    private hideTimeout: number | null = null;

    constructor() {
    }

    show(content: string | TooltipLine[]) {
        this.tooltipElement = document.getElementById('pokemonTooltip');
        if (!this.tooltipElement) {
            return;
        }
        
        // Clear existing content
        this.tooltipElement.innerHTML = '';
        
        if (typeof content === 'string') {
            // Simple text content
            this.tooltipElement.textContent = content;
        } else {
            // Structured content with classes
            content.forEach((line) => {
                const lineElement = document.createElement('div');
                lineElement.textContent = line.text;
                if (line.className) {
                    lineElement.className = line.className;
                }
                this.tooltipElement?.appendChild(lineElement);
            });
        }
        
        // Clear any existing hide timeout
        if (this.hideTimeout !== null) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        
        // Show the tooltip
        this.tooltipElement.classList.add('visible');
    }

    hide() {
        if (!this.tooltipElement) {
            return;
        }
        
        // Add a small delay before hiding to prevent flicker
        this.hideTimeout = window.setTimeout(() => {
            this.tooltipElement?.classList.remove('visible');
        }, 100);
    }
}

const pokemonTooltip = new PokemonTooltip();

function calculateFloor(size: PokemonSize, theme: Theme): number {
    switch (theme) {
        case Theme.forest:
            switch (size) {
                case PokemonSize.small:
                    return 30;
                case PokemonSize.medium:
                    return 40;
                case PokemonSize.large:
                    return 65;
                case PokemonSize.nano:
                default:
                    return 23;
            }
        case Theme.castle:
            switch (size) {
                case PokemonSize.small:
                    return 60;
                case PokemonSize.medium:
                    return 80;
                case PokemonSize.large:
                    return 120;
                case PokemonSize.nano:
                default:
                    return 45;
            }
        case Theme.beach:
            switch (size) {
                case PokemonSize.small:
                    return 60;
                case PokemonSize.medium:
                    return 80;
                case PokemonSize.large:
                    return 120;
                case PokemonSize.nano:
                default:
                    return 45;
            }
        case Theme.blackAndWhiteRoute:
            switch (size) {
                case PokemonSize.small:
                    return 20;
                case PokemonSize.medium:
                    return 20;
                case PokemonSize.large:
                    return 20;
                case PokemonSize.nano:
                default:
                    return 20;
            }
        default:
            switch (size) {
                case PokemonSize.small:
                    return 40;
                case PokemonSize.medium:
                    return 50;
                case PokemonSize.large:
                    return 75;
                case PokemonSize.nano:
                default:
                    return 30;
            }
    }
    return 0;
}

function getMoveTypeClass(type: string): string {
    return `tooltip-move tooltip-move-${type.toLowerCase()}`;
}

function handleMouseOver(e: MouseEvent) {
    const isShiftPressed = e.shiftKey;
    var el = e.currentTarget as HTMLDivElement;
    allPokemon.pokemonCollection.forEach((element) => {
        if (element.collision === el) {
            if (!element.pokemon.canSwipe) {
                return;
            }
            element.pokemon.swipe();

            // Show tooltip with styled lines
            const pokemon = element.pokemon as Pokemon;
            const nameLabel = pokemon.name !== pokemon.config.name ? `${pokemon.name} (${pokemon.config.name})` : pokemon.name; // If nickname is same as species type, show only species name
            const speciesID = sanitizeName(pokemon.config.name);
            const moves = getMoves(speciesID, 25); // TODO set level
            const tooltipContent: TooltipLine[] = [
                { text: nameLabel, className: 'tooltip-name' },
                { text: `Level ${pokemon.progression.level}`, className: 'tooltip-stat' },
                { text: `Type: ${pokemon.config.types.join(", ")}`, className: 'tooltip-type' },
                { text: `Hunger: ${pokemon.needs.hunger}/100`, className: 'tooltip-stat' },
                { text: `Happiness: ${pokemon.needs.happiness}/100`, className: 'tooltip-stat' },
            ];

            // Show moves if Shift is pressed
            if (isShiftPressed && moves.length > 0) {
                tooltipContent.push({ text: 'Moves:', className: 'tooltip-stat' });
                moves.forEach(move => {
                    tooltipContent.push({
                        text: move.name,
                        className: getMoveTypeClass(move.type),
                    });
                });
            }

            pokemonTooltip.show(tooltipContent);
        }
    });
}

function handleMouseOut() {
    pokemonTooltip.hide();
}

function startAnimations(
    collision: HTMLDivElement,
    pokemon: IPokemonType,
    stateApi?: VscodeStateApi,
) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }

    collision.addEventListener('mouseover', handleMouseOver);
    collision.addEventListener('mouseout', handleMouseOut);

    // Interval for updating pokemon
    setInterval(() => {
        var updates = allPokemon.seekNewFriends();
        updates.forEach((message) => {
            stateApi?.postMessage({
                text: message,
                command: 'info',
            });
        });
        pokemon.update();
        saveState(stateApi);
    }, 100);
}

function addPokemonToPanel(
    pokemonType: PokemonType,
    basePokemonUri: string,
    gen: string,
    originalSpriteSize: number,
    pokemonColor: PokemonColor,
    pokemonSize: PokemonSize,
    left: number,
    bottom: number,
    floor: number,
    name: string,
    stateApi?: VscodeStateApi,
    incrementCounter: boolean = true,
    needs: PokemonNeedsState | undefined = undefined,
): PokemonElement {
    var pokemonSpriteElement: HTMLImageElement = document.createElement('img');
    pokemonSpriteElement.className = 'pokemon';
    (document.getElementById('pokemonContainer') as HTMLDivElement).appendChild(
        pokemonSpriteElement,
    );

    var collisionElement: HTMLDivElement = document.createElement('div');
    collisionElement.className = 'collision';
    (document.getElementById('pokemonContainer') as HTMLDivElement).appendChild(
        collisionElement,
    );

    var speechBubbleElement: HTMLImageElement = document.createElement('img');
    speechBubbleElement.className = `bubble bubble-${pokemonSize} b-${originalSpriteSize}`;
    speechBubbleElement.src = `${basePokemonUri}/heart.png`;
    (document.getElementById('pokemonContainer') as HTMLDivElement).appendChild(
        speechBubbleElement,
    );

    const root = `${basePokemonUri}/${gen}/${pokemonType}/${pokemonColor}`;
    log(`Creating new pokemon : ${pokemonType}, ${root}, ${pokemonColor}, ${pokemonSize}, ${name}, ${originalSpriteSize}`);
    try {
        if (!availableColors(pokemonType).includes(pokemonColor)) {
            throw new InvalidPokemonException('Invalid color for pokemon type');
        }
        var newPokemon = createPokemon(
            pokemonType,
            pokemonSpriteElement,
            collisionElement,
            speechBubbleElement,
            pokemonSize,
            left,
            bottom,
            root,
            floor,
            name,
            gen,
            originalSpriteSize,
            needs,
        );
        if (incrementCounter) {
            pokemonCounter++;
        }
        startAnimations(collisionElement, newPokemon, stateApi);
    } catch (e: any) {
        // Remove elements
        pokemonSpriteElement.remove();
        collisionElement.remove();
        speechBubbleElement.remove();
        throw e;
    }

    return new PokemonElement(
        pokemonSpriteElement,
        collisionElement,
        speechBubbleElement,
        newPokemon,
        pokemonColor,
        pokemonType,
        gen,
        originalSpriteSize,
    );
}

export function saveState(stateApi?: VscodeStateApi) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = new PokemonPanelState();
    state.pokemonStates = new Array();

    allPokemon.pokemonCollection.forEach((pokemonItem) => {
        state.pokemonStates?.push({
            pokemonName: pokemonItem.pokemon.name,
            pokemonColor: pokemonItem.color,
            pokemonType: pokemonItem.type,
            pokemonState: pokemonItem.pokemon.getState(),
            pokemonGeneration: pokemonItem.generation,
            originalSpriteSize: pokemonItem.originalSpriteSize,
            pokemonFriend: pokemonItem.pokemon.friend?.name ?? undefined,
            elLeft: pokemonItem.el.style.left,
            elBottom: pokemonItem.el.style.bottom,
            needs: pokemonItem.pokemon.needs.serialize(),
            progression: pokemonItem.pokemon.progression.serialize(),
        });
    });
    state.pokemonCounter = pokemonCounter;
    stateApi?.setState(state);
}

function recoverState(
    basePokemonUri: string,
    gen: string,
    pokemonSize: PokemonSize,
    floor: number,
    stateApi?: VscodeStateApi,
) {
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    var state = stateApi?.getState();
    if (!state) {
        pokemonCounter = 1;
    } else {
        if (state.pokemonCounter === undefined || isNaN(state.pokemonCounter)) {
            pokemonCounter = 1;
        } else {
            pokemonCounter = state.pokemonCounter ?? 1;
        }
    }

    var recoveryMap: Map<IPokemonType, PokemonElementState> = new Map();
    state?.pokemonStates?.forEach((p) => {
        try {
            var newPokemon = addPokemonToPanel(
                p.pokemonType ?? 'bulbasaur',
                basePokemonUri,
                p.pokemonGeneration ?? 'gen1',
                p.originalSpriteSize ?? 32,
                p.pokemonColor ?? PokemonColor.default,
                pokemonSize,
                parseInt(p.elLeft ?? '0'),
                parseInt(p.elBottom ?? '0'),
                floor,
                p.pokemonName ?? randomName(p.pokemonType ?? 'bulbasaur'),
                stateApi,
                false,
                p.needs,
            );
            newPokemon.pokemon.progression = PokemonProgression.deserialize(p.progression);
            allPokemon.push(newPokemon);
            recoveryMap.set(newPokemon.pokemon, p);
        } catch (InvalidPokemonException) {
            log(
                'State had invalid pokemon (' + p.pokemonType + '), discarding.',
            );
        }
    });
    recoveryMap.forEach((state, pokemon) => {
        // Recover previous state.
        if (state.pokemonState !== undefined) {
            pokemon.recoverState(state.pokemonState);
        }

        // Resolve friend relationships
        var friend = undefined;
        if (state.pokemonFriend) {
            friend = allPokemon.locate(state.pokemonFriend);
            if (friend) {
                pokemon.recoverFriend(friend.pokemon);
            }
        }
    });
}

function randomStartPosition(): number {
    return Math.floor(Math.random() * (window.innerWidth * 0.7));
}

let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;

function initCanvas() {
    canvas = document.getElementById('pokemonCanvas') as HTMLCanvasElement;
    if (!canvas) {
        log('Canvas not ready');
        return;
    }
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
        log('Canvas context not ready');
        return;
    }
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// It cannot access the main VS Code APIs directly.
export function pokemonPanelApp(
    basePokemonUri: string,
    theme: Theme,
    themeKind: ColorThemeKind,
    pokemonColor: PokemonColor,
    pokemonSize: PokemonSize,
    pokemonType: PokemonType,
    throwBallWithMouse: boolean,
    gen: string,
    originalSpriteSize: number,
    stateApi?: VscodeStateApi,
) {
    var floor = 0;
    if (!stateApi) {
        stateApi = acquireVsCodeApi();
    }
    // Apply Theme backgrounds
    const foregroundEl = document.getElementById('foreground');
    if (theme !== Theme.none) {
        var themeKindStr = '';
        switch (themeKind) {
            case ColorThemeKind.dark:
                themeKindStr = 'dark';
                break;
            case ColorThemeKind.light:
                themeKindStr = 'light';
                break;
            case ColorThemeKind.highContrast:
            default:
                themeKindStr = 'light';
                break;
        }

        const themeConfig = ALL_THEMES.find(t => t.id === theme);
        const DEFAULT_BACKGROUND_WIDTH = '550px';

        if (themeConfig?.hasDarkAndSizeVariants) {
            document.body.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/background-${themeKindStr}-${pokemonSize}.png')`;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            foregroundEl!.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/foreground-${themeKindStr}-${pokemonSize}.png')`;
        } else {
            document.body.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/background.png')`;
            document.body.style.backgroundSize = themeConfig?.backgroundSizeOverride || DEFAULT_BACKGROUND_WIDTH; // Tileset-based backgrounds are built for this default size
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            foregroundEl!.style.backgroundImage = `url('${basePokemonUri}/backgrounds/${theme}/foreground.png')`;
            foregroundEl!.style.backgroundSize = themeConfig?.backgroundSizeOverride || DEFAULT_BACKGROUND_WIDTH;
        }

        floor = calculateFloor(pokemonSize, theme); // Themes have pokemonCollection at a specified height from the ground
    } else {
        document.body.style.backgroundImage = '';
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        foregroundEl!.style.backgroundImage = '';
    }

    log(`Starting pokemon session: color=${pokemonColor}, baseUri=${basePokemonUri}, type=${pokemonType}, throwBallWithMouse=${throwBallWithMouse}`);

    // New session
    var state = stateApi?.getState();
    if (!state) {
        log('No state, starting a new session.');
        pokemonCounter = 1;
        allPokemon.push(
            addPokemonToPanel(
                pokemonType,
                basePokemonUri,
                gen,
                originalSpriteSize,
                pokemonColor,
                pokemonSize,
                randomStartPosition(),
                floor,
                floor,
                randomName(pokemonType),
                stateApi,
            ),
        );
        saveState(stateApi);
    } else {
        log(`Recovering state - ${state}`);
        recoverState(basePokemonUri, gen, pokemonSize, floor, stateApi);
    }

    initCanvas();

    // Hide combat UI
    const combatContainer = document.getElementById('combatContainer') as HTMLDivElement;
    combatContainer.style.display = 'none';
    
    // Initialize physics entity manager
    const canvas = document.getElementById('pokemonCanvas') as HTMLCanvasElement;
    physicsEntityManager = new PhysicsEntityManager(canvas);
    
    setupBallThrowing(pokemonSize, floor, basePokemonUri, physicsEntityManager);

    if (throwBallWithMouse) {
        dynamicThrowOn(allPokemon);
    } else {
        dynamicThrowOff();
    }

    function startCombat() {
        // Pick random pokemon from user's collection
        if (allPokemon.pokemonCollection.length === 0) {
            stateApi?.postMessage({
                command: 'info',
                text: 'You need at least one Pokemon to start combat!',
            });
            return;
        }

        const playerPokemonEl = allPokemon.pokemonCollection[Math.floor(Math.random() * allPokemon.pokemonCollection.length)];
        
        // Pick random enemy pokemon from current theme
        const currentTheme = getConfiguredTheme();
        const themeConfig = ALL_THEMES.find(t => t.id === currentTheme);
        
        let enemyPokemonType: PokemonType;
        let enemyPokemonConfig;
        
        if (themeConfig && themeConfig.autoSpawnTypes.length > 0) {
            const result = getRandomPokemonByTypes(themeConfig.autoSpawnTypes);
            if (result) {
                [enemyPokemonType, enemyPokemonConfig] = result;
            } else {
                [enemyPokemonType, enemyPokemonConfig] = getRandomPokemonConfig();
            }
        } else {
            [enemyPokemonType, enemyPokemonConfig] = getRandomPokemonConfig();
        }

        // Initialize combat pokemon
        const playerPokemon = new CombatPokemon(
            playerPokemonEl.pokemon as Pokemon,
            playerPokemonEl.pokemon.name,
            playerPokemonEl.type,
            playerPokemonEl.color,
            playerPokemonEl.generation,
            playerPokemonEl.originalSpriteSize,
            POKEMON_DATA[playerPokemonEl.type],
            POKEMON_DATA[playerPokemonEl.type].stats.hp,
            POKEMON_DATA[playerPokemonEl.type].stats.hp,
        );

        const enemyPokemon = new CombatPokemon(
            null,
            enemyPokemonConfig.name,
            enemyPokemonType,
            enemyPokemonConfig.possibleColors[0],
            `gen${enemyPokemonConfig.generation}`,
            enemyPokemonConfig.originalSpriteSize ?? 32,
            enemyPokemonConfig,
            enemyPokemonConfig.stats.hp,
            enemyPokemonConfig.stats.hp,
        );

        combat = new Combat(playerPokemon, enemyPokemon);
        combatUIManager = new CombatUIManager(stateApi!, basePokemonUri, combat); // StateAPI should always be set by this point
        combatUIManager.start();
    }

    function getConfiguredTheme(): Theme {
        // Extract from initial params - we'll use the theme passed to the function
        return theme;
    }

    // Handle messages sent from the extension to the webview
    window.addEventListener('message', (event): void => {
        const message = event.data; // The json data that the extension sent
        const combatUI = combatUIManager;
        switch (message.command) {
            case 'showdown-output':
                log('Showdown: ' + message.text);
                combatUI?.parseShowdownOutput(message.text);
                break;

            case 'showdown-error':
                logError('Showdown error: ' + message.text);
                combatUI?.addCombatLog(message.text, 'damage');
                break;

            case 'showdown-message':
                log('Showdown IPC: ' + message.text);
                break;

            case 'showdown-exit':
                log('Showdown exited: ' + message.text);
                break;

            case 'start-combat':
                startCombat();
                break;

            case 'spawn-pokemon':
                allPokemon.push(
                    addPokemonToPanel(
                        message.type,
                        basePokemonUri,
                        message.generation,
                        message.originalSpriteSize,
                        message.color,
                        pokemonSize,
                        randomStartPosition(),
                        floor,
                        floor,
                        message.name ?? randomName(message.type),
                        stateApi,
                    ),
                );
                saveState(stateApi);
                break;

            case 'throw-ball':
                throwAndChase(allPokemon);
                break;

            case 'spawn-random-pokemon':
                var [randomPokemonType, randomPokemonConfig] = getRandomPokemonConfig();
                allPokemon.push(
                    addPokemonToPanel(
                        randomPokemonType,
                        basePokemonUri,
                        randomPokemonConfig.generation.toString(),
                        randomPokemonConfig.originalSpriteSize ?? 32,
                        PokemonColor.default,
                        pokemonSize,
                        randomStartPosition(),
                        floor,
                        floor,
                        randomName(randomPokemonConfig.name),
                        stateApi,
                    ),
                );
                saveState(stateApi);
                break;

            case 'list-pokemon':
                var pokemonCollection = allPokemon.pokemonCollection;
                stateApi?.postMessage({
                    command: 'list-pokemon',
                    text: pokemonCollection
                        .map(
                            (pokemon) => `${pokemon.type},${pokemon.pokemon.name},${pokemon.color}`,
                        )
                        .join('\n'),
                });
                break;

            case 'roll-call':
                var pokemonCollection = allPokemon.pokemonCollection;
                // go through every single
                // pokemon and then print out their name
                pokemonCollection.forEach((pokemon) => {
                    stateApi?.postMessage({
                        command: 'info',
                        text: `${pokemon.pokemon.emoji} ${pokemon.pokemon.name} (${pokemon.color} ${pokemon.type}): ${pokemon.pokemon.hello}`,
                    });
                });
                break;

            case 'throw-berry':
                var berryId = message.berry;
                // Spawn berry at random position near top with random velocity
                const startX = Math.random() * window.innerWidth;
                const startY = floor + 25;
                const velocityX = (Math.random() - 0.5) * 20;
                const velocityY = Math.random() * 5 + 5;
                
                const berry = new Berry(berryId, basePokemonUri, floor, startX, startY, velocityX, velocityY);
                physicsEntityManager.addEntity(berry);

                // Make hungry pokemon that like the berry chase it
                allPokemon.pokemonCollection.forEach((pokeEl) => {
                    if (pokeEl.pokemon.needs.isHungry() && pokeEl.pokemon.likesBerry(berry.foodConfig) && !pokeEl.pokemon.isChasingEntity()) {
                        pokeEl.pokemon.showBubble('hungry.png', 2000);
                        pokeEl.pokemon.chaseEntity(berry, canvas, (entity) => {
                            const berry = entity as Berry;
                            pokeEl.pokemon.needs.feed(berry.foodConfig.hungerRestored);
                        });
                    }
                });
                break;

            case 'delete-pokemon':
                var pokemon = allPokemon.locate(message.name);
                if (pokemon) {
                    allPokemon.remove(message.name);
                    saveState(stateApi);
                    stateApi?.postMessage({
                        command: 'info',
                        text: '👋 Removed pokemon ' + message.name,
                    });
                    pokemonCounter--;
                } else {
                    stateApi?.postMessage({
                        command: 'error',
                        text: `Could not find pokemon ${message.name}`,
                    });
                }
                break;
            case 'reset-pokemon':
                allPokemon.reset();
                pokemonCounter = 0;
                saveState(stateApi);
                break;
            case 'reset-pokemon-position':
                const panelRect = document.getElementById('pokemonContainer')?.getBoundingClientRect();

                // Calculate teleport position - mouse position or panel center
                let targetX = lastMouseX !== undefined ? lastMouseX : 
                               (panelRect ? (panelRect.left + panelRect.right) / 2 : window.innerWidth / 2);
                // Clamp position to panel bounds - necessary in case the panel was resized since the last time mouse pos was updated
                if (panelRect) {
                    targetX = clamp(targetX, panelRect.left, panelRect.right);
                }

                // Teleport all pokemon
                allPokemon.pokemonCollection.forEach((pokemonElement) => {
                    pokemonElement.pokemon.positionLeft(targetX);
                });

                saveState(stateApi);
                break;
            case 'pause-pokemon':
                pokemonCounter = 1;
                saveState(stateApi);
                break;
        }
    });
}
window.addEventListener('resize', function () {
    initCanvas();
});

// Track mouse position for reset-pokemon-position command
window.addEventListener('mousemove', function (e) {
    lastMouseX = e.clientX;
});
