// This script will be run within the webview itself
import { randomName } from '../common/names';
import {
    PokemonSize,
    PokemonColor,
    PokemonType,
    ColorThemeKind,
    WebviewMessage,
    CombatPokemon,
} from '../common/types';
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
import { clamp, log, logError } from '../common/util';
import { PhysicsEntityManager, Berry } from './entity';
import { Pokemon, PokemonNeedsState } from './pokemon';

/* This is how the VS Code API can be invoked from the panel */
declare global {
    interface VscodeStateApi {
        getState(): PokemonPanelState | undefined; // API is actually Any, but we want it to be typed.
        setState(state: PokemonPanelState): void;
        postMessage(message: WebviewMessage): void;
    }
    function acquireVsCodeApi(): VscodeStateApi;
}

export var allPokemon: IPokemonCollection = new PokemonCollection();
var pokemonCounter: number;
var lastMouseX: number | undefined;
var physicsEntityManager: PhysicsEntityManager;

// Combat state
let combatActive = false;
let playerPokemon: CombatPokemon | null = null;
let enemyPokemon: CombatPokemon | null = null;
let combatInterval: number | null = null;

// Tooltip management
export interface TooltipLine {
    text: string;
    className?: string;
}

class PokemonTooltip {
    private tooltipElement: HTMLElement | null = null;
    private hideTimeout: number | null = null;

    constructor() {
        this.tooltipElement = document.getElementById('pokemonTooltip');
    }

    show(content: string | TooltipLine[]) {
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


function handleMouseOver(e: MouseEvent) {
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
            const tooltipContent: TooltipLine[] = [
                { text: nameLabel, className: 'tooltip-name' },
                { text: `Type: ${pokemon.config.types.join(", ")}`, className: 'tooltip-type' },
                { text: `Hunger: ${pokemon.needs.hunger}/100`, className: 'tooltip-stat' },
                { text: `Happiness: ${pokemon.needs.happiness}/100`, className: 'tooltip-stat' }
            ];
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

    function updateCombatUI() {
        if (!playerPokemon || !enemyPokemon) {
            return;
        }
        log('Updating combat UI');

        // Update player info
        const playerNameEl = document.getElementById('playerName');
        const playerHpFill = document.getElementById('playerHpFill');
        const playerHpText = document.getElementById('playerHpText');
        if (playerNameEl) {
            playerNameEl.textContent = playerPokemon.name;
        }
        if (playerHpFill) {
            const hpPercent = (playerPokemon.currentHp / playerPokemon.maxHp) * 100;
            playerHpFill.style.width = `${hpPercent}%`;
            playerHpFill.className = 'hp-fill';
            if (hpPercent < 25) {
                playerHpFill.classList.add('critical');
            } else if (hpPercent < 50) {
                playerHpFill.classList.add('low');
            }
        }
        if (playerHpText) {
            playerHpText.textContent = `HP: ${playerPokemon.currentHp}/${playerPokemon.maxHp}`;
        }

        // Update enemy info
        const enemyNameEl = document.getElementById('enemyName');
        const enemyHpFill = document.getElementById('enemyHpFill');
        const enemyHpText = document.getElementById('enemyHpText');
        if (enemyNameEl) {
            enemyNameEl.textContent = enemyPokemon.name;
        }
        if (enemyHpFill) {
            const hpPercent = (enemyPokemon.currentHp / enemyPokemon.maxHp) * 100;
            enemyHpFill.style.width = `${hpPercent}%`;
            enemyHpFill.className = 'hp-fill';
            if (hpPercent < 25) {
                enemyHpFill.classList.add('critical');
            } else if (hpPercent < 50) {
                enemyHpFill.classList.add('low');
            }
        }
        if (enemyHpText) {
            enemyHpText.textContent = `HP: ${enemyPokemon.currentHp}/${enemyPokemon.maxHp}`;
        }

        // Update sprites
        const playerSprite = document.getElementById('playerSprite') as HTMLImageElement;
        const enemySprite = document.getElementById('enemySprite') as HTMLImageElement;
        if (playerSprite) {
            playerSprite.src = `${basePokemonUri}/${playerPokemon.generation}/${playerPokemon.type}/default_walk_8fps.gif`;
        }
        if (enemySprite) {
            enemySprite.src = `${basePokemonUri}/${enemyPokemon.generation}/${enemyPokemon.type}/default_walk_8fps.gif`;
        }
    }

    function addCombatLog(message: string, className: string = '') {
        const logEl = document.getElementById('combatLog');
        if (logEl) {
            const entry = document.createElement('div');
            entry.className = `combat-log-entry ${className}`;
            entry.textContent = message;
            logEl.appendChild(entry);
            logEl.scrollTop = logEl.scrollHeight;
        }
        log(`[Combat Log] ${message}`);
    }

    function endCombat(playerWon: boolean) {
        combatActive = false;
        if (combatInterval) {
            clearInterval(combatInterval);
            combatInterval = null;
        }

        // Show victory/defeat message
        const message = playerWon 
            ? `Victory! ${playerPokemon?.name} defeated ${enemyPokemon?.name}!`
            : `${playerPokemon?.name} fainted! ${enemyPokemon?.name} won!`;
        addCombatLog(message, 'info');
        stateApi?.postMessage({
            command: 'info',
            text: message,
        });
        // Ask the extension to stop the Showdown process
        stateApi?.postMessage({
            command: 'showdown-stop',
            text: 'End of combat: terminate Showdown process'
        });
        
        // Hide combat UI after a delay
        setTimeout(() => {
            const combatContainer = document.getElementById('combatContainer');
            const pokemonContainer = document.getElementById('pokemonContainer');
            const foreground = document.getElementById('foreground');
            if (combatContainer) {
                combatContainer.style.display = 'none';
            }
            if (pokemonContainer) {
                pokemonContainer.style.display = 'block';
            }
            if (foreground) {
                foreground.style.display = 'block';
            }
            
            // Clear combat log
            const logEl = document.getElementById('combatLog');
            if (logEl) {
                logEl.innerHTML = '';
            }
        }, 3000);
    }

    function executeCombatTurn() {
        if (!playerPokemon || !enemyPokemon || !combatActive) {
            return;
        }

        function randomIntegerInRange(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const player1Move = randomIntegerInRange(1, 4);
        const player2Move = randomIntegerInRange(1, 4);
        sendShowdownCommand(`>p1 move ${player1Move}`);
        sendShowdownCommand(`>p2 move ${player2Move}`);

        updateCombatUI();
    }

    function sendShowdownCommand(command: string) {
        stateApi?.postMessage({
            command: 'showdown-input',
            text: command,
        });
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
        playerPokemon = {
            name: playerPokemonEl.pokemon.name,
            type: playerPokemonEl.type,
            color: playerPokemonEl.color,
            generation: playerPokemonEl.generation,
            originalSpriteSize: playerPokemonEl.originalSpriteSize,
            config: POKEMON_DATA[playerPokemonEl.type],
            currentHp: POKEMON_DATA[playerPokemonEl.type].stats.hp,
            maxHp: POKEMON_DATA[playerPokemonEl.type].stats.hp,
        };

        enemyPokemon = {
            name: enemyPokemonConfig.name,
            type: enemyPokemonType,
            color: enemyPokemonConfig.possibleColors[0],
            generation: `gen${enemyPokemonConfig.generation}`,
            originalSpriteSize: enemyPokemonConfig.originalSpriteSize ?? 32,
            config: enemyPokemonConfig,
            currentHp: enemyPokemonConfig.stats.hp,
            maxHp: enemyPokemonConfig.stats.hp,
        };

        combatActive = true;

        // Show combat UI, hide pokemon container
        const combatContainer = document.getElementById('combatContainer');
        const pokemonContainer = document.getElementById('pokemonContainer');
        const foreground = document.getElementById('foreground');
        if (combatContainer) {
            combatContainer.style.display = 'flex';
        }
        if (pokemonContainer) {
            pokemonContainer.style.display = 'none';
        }
        if (foreground) {
            foreground.style.display = 'none';
        }

        updateCombatUI();
        addCombatLog(`A wild ${enemyPokemon.name} appeared!`, 'info');
        addCombatLog(`Go! ${playerPokemon.name}!`, 'info');

        // Start combat turns
        combatInterval = window.setInterval(() => {
            executeCombatTurn();
        }, 3000);

        function capitalizeString(s: string): string {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }

        const playerLevel = 25; // TODO
        const enemyLevel = 25;
        log('[combat] Sending combat start command');
        sendShowdownCommand(`>start {"formatid":"gen7ou"}
>player p1 {"name":"Player","team":"${capitalizeString(playerPokemon.config.name)}|||pressure|tackle,leer,aircutter,surf|Modest|252,,,252,4,||,,,30,30,||${playerLevel}|"}
>player p2 {"name":"Enemy","team":"${capitalizeString(enemyPokemon.config.name)}|||swiftswim|surf,gigadrain,tackle,leer|Modest|252,,,4,,252||||${enemyLevel}|"}
>p1 team 1
>p2 team 1`);
    }

    function parseShowdownOutput(output: string) {
        const IGNORED_LINES = [
            /^update$/,
            /^gametype/,
            /^player/,
            /^\|t:/,
            /^tier/,
            /^rule/,
            /^clearpoke/,
            /^teampreview/,
            /^poke/,
            /^\|$/,
        ];
        const lines = output.split('\n');
        lines.forEach((line) => {
            let match;
            // Fainting
            if (match = line.match(/^\|-damage\|p(\d)a: ([^|]+)\|0 fnt$/)) {
                const playerIndex = match[1];
                const pokemon = match[2];
                addCombatLog(`${pokemon} fainted!`, 'info');

                // Set HP to 0
                // TODO handle ending combat by the "win" message instead.
                if (playerIndex === '1' && playerPokemon) {
                    playerPokemon.currentHp = 0;
                    updateCombatUI();
                    endCombat(false);
                } else if (playerIndex === '2' && enemyPokemon) {
                    enemyPokemon.currentHp = 0;
                    updateCombatUI();
                    endCombat(true);
                }
            }
            // Damage lines
            else if (match = line.match(/^\|-damage\|p(\d)a: ([^|]+)\|(\d+)\/(\d+)$/)) {
                log(match);
                const playerIndex = match[1];
                const pokemon = match[2];
                const remainingHP = match[3];
                const totalHP = parseInt(match[4]);
                if (totalHP !== 100) { // TODO handle this properly
                    addCombatLog(`${pokemon} was reduced to ${remainingHP}/${totalHP} HP!`, 'info'); // TODO calc damage

                    // Update HPs
                    if (playerIndex === '1' && playerPokemon) {
                        playerPokemon.currentHp = parseInt(remainingHP);
                        playerPokemon.maxHp = totalHP;
                    } else if (playerIndex === '2' && enemyPokemon) {
                        enemyPokemon.currentHp = parseInt(remainingHP);
                        enemyPokemon.maxHp = totalHP;
                    }
                    updateCombatUI();
                }
            }
            // Used moves
            else if (match = line.match(/^\|move\|p(\d)a: ([^|]+)\|([^|]+)\|p(\d)a: ([^|]+)$/)) {
                log(match);
                const playerIndex = match[1];
                const userPokemon = match[2];
                const move = match[3];
                const targetPlayerIndex = match[4];
                const targetPlayerPokemon = match[5];
                addCombatLog(`${userPokemon} used ${move} on ${targetPlayerPokemon}!`, 'info');
            }
            // Stat decreases (unboost)
            else if (match = line.match(/^\|-unboost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/)) {
                log(match);
                const playerIndex = match[1];
                const pokemon = match[2];
                const stat = match[3];
                const amount = match[4];
                addCombatLog(`${pokemon}'s ${stat} fell by ${amount}!`, 'info');
            }
            // Stat increases (boost)
            else if (match = line.match(/^\|-boost\|p(\d)a: ([^|]+)\|([^|]+)\|[1-9]+$/)) {
                log(match);
                const playerIndex = match[1];
                const pokemon = match[2];
                const stat = match[3];
                const amount = match[4];
                addCombatLog(`${pokemon}'s ${stat} rose by ${amount}!`, 'info');
            }
            // Switching in pokemon
            else if (match = line.match(/^\|switch\|p(\d)a: ([^|]+)\|[^|]+\|(\d+)\/(\d+)$/)) {
                log(match);
                const playerIndex = match[1];
                const pokemon = match[2];
                const hp = match[3];
                const maxHp = match[4];
                addCombatLog(`${playerIndex === '1' ? 'Your' : 'Enemy'} ${pokemon} switched in with ${hp}/${maxHp} HP!`, 'info');

                // Update HPs
                if (playerIndex === '1' && playerPokemon) {
                    playerPokemon.currentHp = parseInt(hp);
                    playerPokemon.maxHp = parseInt(maxHp);
                } else if (playerIndex === '2' && enemyPokemon) {
                    enemyPokemon.currentHp = parseInt(hp);
                    enemyPokemon.maxHp = parseInt(maxHp);
                }
            } else {
                const trimmedLine = line.trim();
                if (trimmedLine && !IGNORED_LINES.some((regex) => regex.test(trimmedLine))) {
                    log(`Unhandled Showdown output: ${trimmedLine}`);
                }
            }
        });
    }

    function getConfiguredTheme(): Theme {
        // Extract from initial params - we'll use the theme passed to the function
        return theme;
    }

    // Setup exit combat button
    const exitCombatBtn = document.getElementById('exitCombatBtn');
    if (exitCombatBtn) {
        exitCombatBtn.addEventListener('click', () => {
            if (combatInterval) {
                clearInterval(combatInterval);
                combatInterval = null;
            }
            combatActive = false;
            // Ensure the Showdown process is stopped when exiting early
            stateApi?.postMessage({
                command: 'showdown-stop',
                text: 'User exited combat: terminate Showdown process'
            });
            
            const combatContainer = document.getElementById('combatContainer');
            const pokemonContainer = document.getElementById('pokemonContainer');
            const foreground = document.getElementById('foreground');
            if (combatContainer) {
                combatContainer.style.display = 'none';
            }
            if (pokemonContainer) {
                pokemonContainer.style.display = 'block';
            }
            if (foreground) {
                foreground.style.display = 'block';
            }
            
            // Clear combat log
            const logEl = document.getElementById('combatLog');
            if (logEl) {
                logEl.innerHTML = '';
            }
        });
    }

    // Handle messages sent from the extension to the webview
    window.addEventListener('message', (event): void => {
        const message = event.data; // The json data that the extension sent
        switch (message.command) {
            case 'showdown-output':
                log('Showdown: ' + message.text);
                parseShowdownOutput(message.text);
                // addCombatLog(message.text, 'info');
                break;

            case 'showdown-error':
                logError('Showdown error: ' + message.text);
                addCombatLog(message.text, 'damage');
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
