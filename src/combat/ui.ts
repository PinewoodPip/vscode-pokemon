import { log } from "../common/util";
import { ABREVIATION_TO_STAT, Combat, CombatPokemon, CombatPokemonStat } from "./combat";
import { getMoves } from "../common/learnsets-data";
import { capitalizeString, randomIntegerInRange } from "../common/util";
import { VscodeStateApi } from "../common/vscode-api";

const STATUS_ACRONYM_TO_STRING: Record<string, string> = {
    brn: 'burned',
    par: 'paralyzed',
    slp: 'sleeping',
    frz: 'frozen',
    psn: 'poisoned',
    tox: 'badly poisoned',
    confusion: 'confused',
    flinched: 'flinched',
    trapped: 'trapped',
    trapper: 'trapping',
    partiallytrapped: 'partially trapped',
    lockedmove: 'locked into a move',
    twoturnmove: 'in a two-turn move',
    choicelock: 'locked by Choice item',
    mustrecharge: 'tired and must recharge', // Definitely not what the games show for this, TODO?
    futuremove: 'preparing a future move',
    healreplacement: 'healing replacement', // ?
    stall: 'protecting itself', // Protect, Detect, Endure counter
    gem: 'powered up by a Gem', // ?
}

interface ParticipantWidgets {
    nameEl: HTMLElement;
    hpFill: HTMLElement;
    hpText: HTMLElement;
    statusBadges: HTMLElement;
    statModifierBadges: HTMLElement;
    pokemonSprite: HTMLImageElement;
}

export class CombatUIManager {
    private readonly TURN_INTERVAL = 3000;
    private readonly CRITICAL_HP_THRESHOLD = 25; // As percentage.
    private readonly LOW_HP_THRESHOLD = 50; // As percentage.

    combatContainer: HTMLElement;
    pokemonContainer: HTMLElement;
    combatLog: HTMLElement;
    turnCounter: HTMLElement;
    foreground: HTMLElement;
    combat: Combat;
    basePokemonUri: string;
    combatInterval: number | null = null;
    stateApi: VscodeStateApi;

    playerWidgets: ParticipantWidgets;
    enemyWidgets: ParticipantWidgets;

    constructor(statApi: VscodeStateApi, baseMediaUri: string, combat: Combat) {
        this.stateApi = statApi;
        this.basePokemonUri = baseMediaUri;
        this.combat = combat;
        this.combatContainer = document.getElementById('combatContainer')!;
        this.pokemonContainer = document.getElementById('pokemonContainer')!;
        this.foreground = document.getElementById('foreground')!;
        this.combatLog = document.getElementById('combatLog')!;
        this.turnCounter = document.getElementById('turnCounter')!;
        
        // Player pokemon widgets
        this.playerWidgets = {
            nameEl: document.getElementById('playerName')!,
            hpFill: document.getElementById('playerHpFill')!,
            hpText: document.getElementById('playerHpText')!,
            statusBadges: document.getElementById('playerStatusBadges')!,
            statModifierBadges: document.getElementById('playerStatModifiers')!,
            pokemonSprite: document.getElementById('playerSprite')! as HTMLImageElement,
        };
        this.enemyWidgets = {
            nameEl: document.getElementById('enemyName')!,
            hpFill: document.getElementById('enemyHpFill')!,
            hpText: document.getElementById('enemyHpText')!,
            statusBadges: document.getElementById('enemyStatusBadges')!,
            statModifierBadges: document.getElementById('enemyStatModifiers')!,
            pokemonSprite: document.getElementById('enemySprite')! as HTMLImageElement,
        };

        // Ensure all fields in widgets are non-null using for-loops
        for (const widget of [this.playerWidgets, this.enemyWidgets]) {
            for (const key in widget) {
                if (!widget[key as keyof ParticipantWidgets]) {
                    throw new Error(`CombatUIManager: Missing widget element: ${key}`);
                }
            }
        }
        
        if (!this.combatContainer || !this.pokemonContainer || !this.foreground || !this.combatLog || !this.turnCounter) {
            throw new Error('CombatUIManager: Missing required DOM elements');
        }
            
        this.combatContainer.style.display = 'none';
        this.pokemonContainer.style.display = 'block';
        this.foreground.style.display = 'block';
    }

    start() {
        const combat = this.combat;
        const playerPokemon = combat.player;
        const enemyPokemon = combat.enemy;

        // Show combat UI, hide pokemon container
        this.combatContainer.style.display = 'flex';
        this.pokemonContainer.style.display = 'none';
        this.foreground.style.display = 'none';

        this.updateUI();
        this.updateTurnCounter();

        // Send start messages
        this.addCombatLog(`A wild ${this.combat.enemy.name} appeared!`, 'info');
        this.addCombatLog(`Go! ${this.combat.player.name}!`, 'info');

        // TODO move to combat class
        const playerLevel = 25; // TODO
        const enemyLevel = 25;
        const playerMoveIDs = getMoves(playerPokemon.type, playerLevel).map(m => m.id);
        const enemyMoveIDs = getMoves(enemyPokemon.type, enemyLevel).map(m => m.id);
        log('[combat] Sending combat start command');
        this.sendShowdownCommand(`>start {"formatid":"gen7ou"}
>player p1 {"name":"Player","team":"${capitalizeString(playerPokemon.config.name)}|||noability|${playerMoveIDs.join(',')}|Modest|252,,,252,4,||,,,30,30,||${playerLevel}|"}
>player p2 {"name":"Enemy","team":"${capitalizeString(enemyPokemon.config.name)}|||noability|${enemyMoveIDs.join(',')}|Modest|252,,,4,,252||||${enemyLevel}|"}
>p1 team 1
>p2 team 1`);

        // Execute combat turns periodically
        // TODO move to Combat class
        this.combatInterval = window.setInterval(() => {
            this.executeCombatTurn();
        }, this.TURN_INTERVAL);
    }
    
    executeCombatTurn() {
        // Pick moves randomly
        const player1Move = randomIntegerInRange(1, 4);
        const player2Move = randomIntegerInRange(1, 4);
        this.sendShowdownCommand(`>p1 move ${player1Move}`);
        this.sendShowdownCommand(`>p2 move ${player2Move}`);

        this.updateUI();
    }

    updateWidgets(widgets: ParticipantWidgets, pokemon: CombatPokemon) {
        widgets.nameEl.textContent = pokemon.name;

        // Update HP
        const hpPercent = (pokemon.currentHp / pokemon.maxHp) * 100;
        widgets.hpFill.style.width = `${hpPercent}%`;
        widgets.hpFill.className = 'hp-fill';
        // Highlight low-HP states
        if (hpPercent < this.CRITICAL_HP_THRESHOLD) {
            widgets.hpFill.classList.add('critical');
        } else if (hpPercent < this.LOW_HP_THRESHOLD) {
            widgets.hpFill.classList.add('low');
        }
        widgets.hpText.textContent = `HP: ${pokemon.currentHp}/${pokemon.maxHp}`;

        // Update statuses
        this.renderStatusBadges(widgets.statusBadges, pokemon.statuses);

        // Update stat modifiers
        this.renderStatModifierBadges(widgets.statModifierBadges, pokemon.statModifierStages);

        // Update sprites
        const pokemonSprite = widgets.pokemonSprite;
        pokemonSprite.src = `${this.basePokemonUri}/${pokemon.generation}/${pokemon.type}/default_walk_8fps.gif`;
    }

    updateUI() {
        log('Updating combat UI');
        const combat = this.combat;
        const playerWidgets = this.playerWidgets;
        const enemyWidgets = this.enemyWidgets;

        // Update widgets
        this.updateWidgets(playerWidgets, combat.player);
        this.updateWidgets(enemyWidgets, combat.enemy);
    }

    updateTurnCounter() {
        this.turnCounter.textContent = `Turn ${this.combat.turn}`;
    }
    
    endCombat(playerWon: boolean) {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
            this.combatInterval = null;
        }
        const playerPokemon = this.combat.player;
        const enemyPokemon = this.combat.enemy;

        // Show victory/defeat message
        const message = playerWon 
            ? `Victory! ${playerPokemon?.name} defeated ${enemyPokemon?.name}!`
            : `${playerPokemon?.name} fainted! ${enemyPokemon?.name} won!`;
        this.addCombatLog(message, 'info');
        this.stateApi.postMessage({
            command: 'info',
            text: message,
        });
        // Ask the extension to stop the Showdown process
        this.stateApi.postMessage({
            command: 'showdown-stop',
            text: 'End of combat: terminate Showdown process'
        });
        
        // Hide combat UI after a delay
        setTimeout(() => {
            const combatContainer = this.combatContainer;
            const pokemonContainer = this.pokemonContainer;
            const foreground = this.foreground;
            combatContainer.style.display = 'none';
            pokemonContainer.style.display = 'block';
            foreground.style.display = 'block';
            
            // Clear combat log
            this.clearCombatLog();
        }, 3000);
    }

    parseShowdownOutput(output: string) {
        const IGNORED_LINES = [
            /^update$/,
            /^gametype/,
            /^player/,
            /^\|t:/,
            /^\|upkeep/, // Weather effects ticking
            /^\|request/, // Prompting players for input(?)
            /^tier/,
            /^rule/,
            /^clearpoke/,
            /^teampreview/,
            /^poke/,
            /^\|$/,
            // Used by the "request" message
            /^p1$/,
            /^p2$/,
        ];
        const lines = output.split('\n');
        let linesToParseBeforeIgnore = -1;
        lines.forEach((line) => {
            if (linesToParseBeforeIgnore > 0) {
                linesToParseBeforeIgnore--;
                if (linesToParseBeforeIgnore === 0) {
                    linesToParseBeforeIgnore = -1;
                    return; // Ignore this line
                }
            }
            // Check for secret/public information split
            // Should be checked *after* the early return,
            // as the public information comes after the secret one.
            // ie. when we receive a |split message, we want to process the next line but ignore the one after it.
            if (line.startsWith('|split')) {
                linesToParseBeforeIgnore  = 2; // For simplicity, we use only secret information (ie. show all details of the game state)
                return;
            }

            // Parse line
            let match;
            // Fainting hits
            if (match = line.match(/^\|-damage\|p(\d)a: ([^|]+)\|0 fnt\|?(\[from\] \w+)?$/)) {
                const playerIndex = parseInt(match[1]);
                const pokemonName = match[2];
                const cause = match[3]; // TODO parse further; has a [from] prefix
                this.addCombatLog(`${pokemonName} fainted${cause ? ` due to ${cause}` : ''}!`, 'info');

                // Set HP to 0
                const pokemonEl = this.getCombatPokemonElement(playerIndex);
                pokemonEl.currentHp = 0;
                this.updateUI();
            }
            // Generic faint message
            else if (match = line.match(/^\|faint\|p(\d)a: ([^|]+)$/)){
                const _playerIndex = parseInt(match[1]);
                const pokemonName = match[2];
                this.addCombatLog(`${pokemonName} fainted!`, 'info');
            }
            // Skill failure
            else if (match = line.match(/^\|-fail\|p(\d)a: ([^|]+)$/)) {
                const _playerIndex = parseInt(match[1]);
                const pokemonName = match[2];
                this.addCombatLog(`${pokemonName} failed to use their move!`, 'info');
            }
            // Critical hits
            else if (match = line.match(/^\|-crit\|p(\d)a: ([^|]+)$/)) {
                const _playerIndex = parseInt(match[1]);
                const pokemonName = match[2];
                this.addCombatLog(`${pokemonName} landed a critical hit!`, 'info');
            }
            // Damage lines
            else if (match = line.match(/^\|-damage\|p(\d)a: ([^|]+)\|(\d+)\/(\d+)( \w+)?\|?(\[[\w]+\] \w+)?/)) {
                const playerIndex = parseInt(match[1]);
                const pokemonName = match[2];
                const remainingHP = parseInt(match[3]);
                const totalHP = parseInt(match[4]);
                const status = match[5];
                const cause = match[6]; // TODO parse further; has a [from] prefix

                this.addCombatLog(`${pokemonName} was reduced to ${remainingHP}/${totalHP} HP${cause ? ` due to ${cause}` : ''}!`, 'info'); // TODO calc damage

                if (status) {
                    // TODO show status
                }

                // Calculate and display damage
                const pokemonEl = this.getCombatPokemonElement(playerIndex);
                let previousHP = totalHP;
                previousHP = pokemonEl.currentHp;
                pokemonEl.currentHp = remainingHP;
                pokemonEl.maxHp = totalHP;
                const damage = previousHP - remainingHP;
                const combatSectionEl = this.getCombatSectionElement(playerIndex);
                this.showDamageOverhead(combatSectionEl, damage);
                this.updateUI();
            }
            // Healing
            else if (match = line.match(/^\|-heal\|p(\d)a: ([^|]+)\|(\d+)\/(\d+)\|([^|]+)\|([^|]+)$/)) {
                const playerIndex = match[1];
                const pokemonName = match[2];
                const remainingHP = parseInt(match[3]);
                const totalHP = parseInt(match[4]);
                const source = match[5];
                const target = match[6];

                // Calculate and display healing
                const pokemonEl = this.getCombatPokemonElement(parseInt(playerIndex));
                let previousHP = totalHP;
                previousHP = pokemonEl.currentHp;
                pokemonEl.currentHp = remainingHP;
                pokemonEl.maxHp = totalHP;
                const healing = remainingHP - previousHP;
                const combatSectionEl = this.getCombatSectionElement(parseInt(playerIndex));
                this.showHealOverhead(combatSectionEl, healing);
                this.addCombatLog(`${pokemonName} healed ${healing} HP from using ${source} on ${target}`, 'info');

                this.updateUI();
            }
            // "Not very effective" message
            else if (match = line.match(/^\|-resisted\|p(\d)a: ([^|]+)$/)) {
                const _playerIndex = match[1];
                const pokemonName = match[2];
                this.addCombatLog(`It's not very effective on ${pokemonName}... `, 'info');
            }
            // Turn counter
            else if (match = line.match(/^\|turn\|(\d+)$/)) {
                this.combat.turn = parseInt(match[1]);
                this.updateTurnCounter()
            }
            // Starting charged moves
            else if (match = line.match(/^\|-start\|p(\d)a: ([^|]+)\|([^|]+)\|([^|+]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const move = match[3];
                const details = match[4]; // TODO parse further; ex. [of] p1a: Hippopotas
                this.addCombatLog(`${pokemon} started ${move} ${details}!`, 'info');
            }
            // Status applications
            else if (match = line.match(/^\|-status\|p(\d)a: ([^|]+)\|([^|]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const status = match[3];
                this.addCombatLog(`${pokemon} is ${STATUS_ACRONYM_TO_STRING[status] ?? status}!`, 'info');
                const combatPokemon = this.getCombatPokemonElement(parseInt(_playerIndex));
                combatPokemon.addStatus(status);
            }
            // Status removals
            else if (match = line.match(/^\|-curestatus\|p(\d)a: ([^|]+)\|([^|]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const status = match[3];
                this.addCombatLog(`${pokemon} is no longer ${STATUS_ACRONYM_TO_STRING[status] ?? status}!`, 'info');
                const combatPokemon = this.getCombatPokemonElement(parseInt(_playerIndex));
                combatPokemon.removeStatus(status);
            }
            // Status immunities
            else if (match = line.match(/^\|cant\|p(\d)a: ([^|]+)\|(\w+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const status = match[3];
                const statusName = STATUS_ACRONYM_TO_STRING[status] ?? status;
                this.addCombatLog(`${pokemon} cannot be ${statusName}!`, 'info');
            }
            // Ending charged moves
            else if (match = line.match(/^\|-end\|p(\d)a: ([^|]+)\|([^|]+)\|([^|+]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const move = match[3];
                const details = match[4]; // TODO parse further; ex. [of] p1a: Hippopotasu
                this.addCombatLog(`${pokemon} ended ${move} ${details}!`, 'info');
            }
            // Charging moves
            else if (match = line.match(/^\|move\|p(\d)a: ([^|]+)\|(\w+)\|\|(\[\w+\])/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const move = match[3];
                const chargeInfo = match[4];
                this.addCombatLog(`${pokemon} is ${chargeInfo} using ${move}!`, 'info');
            }
            // Used moves
            else if (match = line.match(/^\|move\|p(\d)a: ([^|]+)\|([^|]+)\|p(\d)a: ([^|]+)$/)) {
                const _playerIndex = match[1];
                const userPokemon = match[2];
                const move = match[3];
                const _targetPlayerIndex = match[4];
                const targetPlayerPokemon = match[5];
                this.addCombatLog(`${userPokemon} used ${move} on ${targetPlayerPokemon}!`, 'info');
            }
            // Stat decreases (unboost)
            else if (match = line.match(/^\|-unboost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const stat = match[3];
                const amount = match[4];
                this.addCombatLog(`${pokemon}'s ${stat} fell by ${amount}!`, 'info');

                // Update stat modifiers
                const statEnum = ABREVIATION_TO_STAT[stat];
                const combatPokemon = this.getCombatPokemonElement(parseInt(_playerIndex));
                combatPokemon.addBoost(statEnum, -parseInt(amount));
            }
            // Stat increases (boost)
            else if (match = line.match(/^\|-boost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/)) {
                log(match);
                const _playerIndex = match[1];
                const pokemon = match[2];
                const stat = match[3];
                const amount = match[4];
                this.addCombatLog(`${pokemon}'s ${stat} rose by ${amount}!`, 'info');
                
                // Update stat modifiers
                const statEnum = ABREVIATION_TO_STAT[stat];
                const combatPokemon = this.getCombatPokemonElement(parseInt(_playerIndex));
                combatPokemon.addBoost(statEnum, parseInt(amount));
            }
            // Setting stats to specific stages
            else if (match = line.match(/^\|-setboost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const stat = match[3];
                const amount = match[4];
                this.addCombatLog(`${pokemon}'s ${stat} rose by ${amount}!`, 'info');
                
                // Update stat modifiers
                const statEnum = ABREVIATION_TO_STAT[stat];
                const combatPokemon = this.getCombatPokemonElement(parseInt(_playerIndex));
                combatPokemon.setBoost(statEnum, parseInt(amount));
            }
            // Miscellaneous effects (ex. struggle)
            else if (match = line.match(/^\|-activate\|p(\d)a: ([^|]+)\|(.+)$/)) {
                const _playerIndex = match[1];
                const pokemon = match[2];
                const effect = match[3];
                this.addCombatLog(`${pokemon} activated ${effect}!`, 'info');
            }
            // Switching in pokemon
            else if (match = line.match(/^\|switch\|p(\d)a: ([^|]+)\|[^|]+\|(\d+)\/(\d+)$/)) {
                const playerIndex = match[1];
                const pokemonName = match[2];
                const hp = match[3];
                const maxHp = match[4];
                this.addCombatLog(`${playerIndex === '1' ? 'Your' : 'Enemy'} ${pokemonName} switched in with ${hp}/${maxHp} HP!`, 'info');

                // Update HPs
                const pokemonEl = this.getCombatPokemonElement(parseInt(playerIndex));
                pokemonEl.currentHp = parseInt(hp);
                pokemonEl.maxHp = parseInt(maxHp);
            }
            // Victory/defeat
            else if (match = line.match(/^\|win\|(.+)$/)) {
                const winner = match[1];
                const playerWon = (winner === 'Player');
                this.endCombat(playerWon);
            }
            else {
                const trimmedLine = line.trim();
                if (trimmedLine && !IGNORED_LINES.some((regex) => regex.test(trimmedLine))) {
                    log(`Unhandled Showdown output: ${trimmedLine}`);
                }
            }
        });
    }

    addCombatLog(message: string, className: string = '') {
        const logEl = this.combatLog;
        const entry = document.createElement('div');
        entry.className = `combat-log-entry ${className}`;
        entry.textContent = message;
        logEl.appendChild(entry);
        logEl.scrollTop = logEl.scrollHeight;
        log(`[Combat Log] ${message}`);
    }

    showOverhead(pokemonSection: HTMLElement, label: string, classNames: string[]) {
        const floatingDamageEl = document.createElement('div');
        floatingDamageEl.className = `overhead ${classNames.join(' ')}`;
        floatingDamageEl.textContent = label;
        
        // Position the damage text at the center of the pokemon sprite
        const sprite = pokemonSection.querySelector('.combat-sprite') as HTMLImageElement;
        if (sprite) {
            const rect = sprite.getBoundingClientRect();
            floatingDamageEl.style.left = `${rect.left + rect.width / 2}px`;
            floatingDamageEl.style.top = `${rect.top}px`;
        }
        
        document.body.appendChild(floatingDamageEl);
        
        // Remove element after animation completes
        setTimeout(() => {
            floatingDamageEl.remove();
        }, 1000);
    }

    showDamageOverhead(pokemonSection: HTMLElement, damage: number) {
        this.showOverhead(pokemonSection, `${damage}`, ['damage']);
    }

    showHealOverhead(pokemonSection: HTMLElement, healAmount: number) {
        this.showOverhead(pokemonSection, `+${healAmount}`, ['heal']);
    }

    clearCombatLog() {
        this.combatLog.innerHTML = '';
    }

    renderStatusBadges(container: HTMLElement, statuses: string[]) {
        container.innerHTML = '';
        statuses.forEach(status => {
            const badge = document.createElement('div');
            badge.className = `status-badge ${status}`;
            badge.textContent = status.toUpperCase();
            container.appendChild(badge);
        });
    }

    renderStatModifierBadges(container: HTMLElement, statModifiers: Record<CombatPokemonStat, number>) {
        container.innerHTML = '';
        Object.entries(statModifiers).forEach(([stat, stage]) => {
            if (stage === 0) {
                return; // Skip stats with 0 modifier
            }
            const badge = document.createElement('div');
            const abbreviation = Object.entries(ABREVIATION_TO_STAT)
                .find(([_, value]) => value === stat)?.[0]
                .toUpperCase() || stat;
            const sign = stage > 0 ? '+' : '';
            badge.className = `stat-modifier-badge ${stage > 0 ? 'positive' : 'negative'}`;
            badge.textContent = `${abbreviation} ${sign}${stage}`;
            container.appendChild(badge);
        });
    }
    
    sendShowdownCommand(command: string) {
        this.stateApi?.postMessage({
            command: 'showdown-input',
            text: command,
        });
    }

    getCombatPokemonElement(index: number): CombatPokemon {
        const pokemon = index === 1 ? this.combat.player : this.combat.enemy;
        if (!pokemon) {
            throw new Error(`No combat pokemon for player index ${index}`);
        }
        return pokemon;
    }

    getCombatSectionElement(index: number): HTMLElement {
        const sectionId = index === 1 ? 'playerPokemonSection' : 'enemyPokemonSection';
        const element = document.getElementById(sectionId);
        if (!element) {
            throw new Error(`No combat section element for player index ${index}`);
        }
        return element;
    }
}