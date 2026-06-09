import { log } from "../common/util";
import { ABREVIATION_TO_STAT, Combat, CombatPokemon, CombatPokemonStat, POKEMON_STAT_ORDER, PokemonStat } from "./combat";
import { getMoves } from "../common/learnsets-data";
import { PokemonMove } from "../common/move-data";
import { capitalizeString, randomIntegerInRange } from "../common/util";
import { VscodeStateApi } from "../common/vscode-api";
import { MESSAGE_HANDLERS } from "./message-handlers";
import { EnemyController } from "./enemy-controller";
import { NetworkPokemonData } from "../common/network-types";

interface ParticipantWidgets {
    nameEl: HTMLElement;
    hpFill: HTMLElement;
    hpText: HTMLElement;
    statusBadges: HTMLElement;
    statModifierBadges: HTMLElement;
    pokemonSprite: HTMLImageElement;
}

export class CombatUIManager {
    private readonly TURN_INTERVAL = 1750;
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

    private moveGrid: HTMLElement;
    private moveButtons: HTMLButtonElement[] = [];
    private playerMoves: PokemonMove[] = [];
    private playerMovePP: number[] = [];
    private enemyMoves: PokemonMove[] = [];
    private enemyMovePP: number[] = [];
    private enemyController: EnemyController;
    private waitingOverlay: HTMLElement | null = null;
    /** PvP only: called with the local player's move index before awaiting the opponent. */
    private onLocalMoveSelected: ((moveIndex: number) => void) | undefined;
    /** False for the PvP client, which does not run or send commands to Showdown. */
    private startsShowdown: boolean;
    /** Which Showdown player index (p1/p2) the local player is. Used to map Showdown output to the correct UI side. */
    public playerSide: 'p1' | 'p2';

    constructor(
        statApi: VscodeStateApi,
        baseMediaUri: string,
        combat: Combat,
        enemyController: EnemyController,
        onLocalMoveSelected?: (moveIndex: number) => void,
        startsShowdown: boolean = true,
        playerSide: 'p1' | 'p2' = 'p1',
    ) {
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
        
        this.moveGrid = document.getElementById('moveGrid')!;
        this.moveButtons = [0, 1, 2, 3].map(i =>
            document.getElementById(`moveBtn${i}`) as HTMLButtonElement
        );

        if (!this.combatContainer || !this.pokemonContainer || !this.foreground || !this.combatLog || !this.turnCounter || !this.moveGrid || this.moveButtons.some(b => !b)) {
            throw new Error('CombatUIManager: Missing required DOM elements');
        }
            
        this.combatContainer.style.display = 'none';
        this.pokemonContainer.style.display = 'block';
        this.foreground.style.display = 'block';
        this.enemyController = enemyController;
        this.onLocalMoveSelected = onLocalMoveSelected;
        this.startsShowdown = startsShowdown;
        this.playerSide = playerSide;
    }

    start(pvpOpponentData?: NetworkPokemonData) {
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

        const playerLevel = playerPokemon.pokemon!.progression.level;
        const enemyLevel = enemyPokemon.level;
        const playerMoves = getMoves(playerPokemon.type, playerLevel);
        const enemyMoves = getMoves(enemyPokemon.type, enemyLevel);
        this.enemyMoves = enemyMoves;
        this.enemyMovePP = enemyMoves.map(m => m.pp);

        if (this.startsShowdown) {
            const playerMoveIDs = playerMoves.map(m => m.id);
            const enemyMoveIDs = pvpOpponentData ? pvpOpponentData.moveIds : enemyMoves.map(m => m.id);
            const playerIVs = POKEMON_STAT_ORDER.map(stat => playerPokemon.pokemon!.progression.ivs[stat]);
            const playerEVs = POKEMON_STAT_ORDER.map(stat => playerPokemon.pokemon!.progression.evs[stat]);
            const enemyIVs = pvpOpponentData ? pvpOpponentData.ivs : POKEMON_STAT_ORDER.map(() => randomIntegerInRange(0, 31));
            const enemyEVs = pvpOpponentData ? pvpOpponentData.evs : POKEMON_STAT_ORDER.map(() => randomIntegerInRange(0, 100));

            log('[combat] Sending combat start command');
            this.sendShowdownCommand(`>start {"formatid":"gen7ou"}
>player p1 {"name":"Player","team":"${capitalizeString(playerPokemon.config.name)}|||noability|${playerMoveIDs.join(',')}|Modest|${playerIVs.join(',')}||${playerEVs.join(',')}||${playerLevel}|"}
>player p2 {"name":"Enemy","team":"${capitalizeString(enemyPokemon.config.name)}|||noability|${enemyMoveIDs.join(',')}|Modest|${enemyIVs.join(',')}||${enemyEVs.join(',')}||${enemyLevel}|"}
>p1 team 1
>p2 team 1`);
        }

        this.initializeMoveGrid(playerMoves);
    }

    private initializeMoveGrid(moves: PokemonMove[]) {
        this.playerMoves = moves;
        this.playerMovePP = moves.map(m => m.pp);

        this.moveButtons.forEach((btn, i) => {
            if (i >= moves.length) {
                btn.style.display = 'none';
                return;
            }
            const move = moves[i];
            btn.className = `move-btn type-${move.type}`;
            btn.innerHTML = `
                <span class="move-btn-name">${move.name}</span>
                <div class="move-btn-footer">
                    <span class="tooltip-move tooltip-move-${move.type}">${move.type.toUpperCase()}</span>
                    <span class="move-btn-pp" id="movePP${i}">PP ${move.pp}/${move.pp}</span>
                </div>`;
            btn.disabled = false;
            btn.onclick = () => this.onMoveSelected(i);
        });

        this.moveGrid.style.display = 'grid';
    }

    private async onMoveSelected(moveIndex: number) {
        this.setMovesEnabled(false);

        this.playerMovePP[moveIndex]--;
        const ppEl = document.getElementById(`movePP${moveIndex}`);
        if (ppEl) {
            ppEl.textContent = `PP ${this.playerMovePP[moveIndex]}/${this.playerMoves[moveIndex].pp}`;
        }

        // PvP: report local move to extension before waiting for opponent
        this.onLocalMoveSelected?.(moveIndex);

        this.showWaitingForOpponent(true);
        const enemyMove = await this.enemyController.selectMove(this.enemyMoves, this.enemyMovePP);
        this.showWaitingForOpponent(false);

        if (enemyMove !== null) { this.enemyMovePP[enemyMove]--; }

        // In AI mode: send moves to Showdown directly
        // In PvP mode moves are submitted to Showdown by the host's NetworkCombatHost.trySubmitMoves() instead
        if (!this.onLocalMoveSelected) {
            const playerMove = moveIndex + 1;
            this.sendShowdownCommand(`>p1 move ${playerMove}`);
            this.sendShowdownCommand(`>p2 move ${enemyMove !== null ? enemyMove + 1 : 1}`);
        }

        this.updateUI();

        setTimeout(() => this.setMovesEnabled(true), this.TURN_INTERVAL);
    }

    private showWaitingForOpponent(show: boolean) {
        if (show) {
            if (this.waitingOverlay) { return; }
            const overlay = document.createElement('div');
            overlay.className = 'waiting-overlay';
            overlay.textContent = 'Waiting for opponent...';
            this.moveGrid.appendChild(overlay);
            this.waitingOverlay = overlay;
        } else {
            this.waitingOverlay?.remove();
            this.waitingOverlay = null;
        }
    }

    private setMovesEnabled(enabled: boolean) {
        this.moveButtons.forEach((btn, i) => {
            if (btn.style.display === 'none') {
                return;
            }
            btn.disabled = !enabled || this.playerMovePP[i] <= 0;
        });
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
        this.moveGrid.style.display = 'none';
        this.setMovesEnabled(false);
        const playerPokemon = this.combat.player;
        const enemyPokemon = this.combat.enemy;

        if (playerWon) {
            // Add XP
            const previousLevel = playerPokemon.pokemon!.progression.level;
            const xpGained = playerPokemon.getXPGain(enemyPokemon);
            playerPokemon.pokemon!.progression.addXP(xpGained);

            // Add EVs
            const evYields = enemyPokemon.config.ev_yields;
            for (const stat in evYields) {
                const evGain = evYields[stat as keyof typeof evYields] || 0;
                playerPokemon.pokemon!.progression.addEVs(stat as PokemonStat, evGain);
            }

            // Show notification
            this.stateApi.postMessage({
                command: 'info',
                text: `${playerPokemon.name} gained ${Math.floor(xpGained)} XP!`,
            });

            // Show level-up notification
            const newLevel = playerPokemon.pokemon!.progression.level;
            if (newLevel > previousLevel) {
                this.stateApi.postMessage({
                    command: 'info',
                    text: `${playerPokemon.name} leveled up to level ${newLevel}!`,
                });
            }

            // Add happiness
            playerPokemon.pokemon!.needs.addHappiness(Combat.HAPPINESS_ON_VICTORY);
        }

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

        this.enemyController.dispose();

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

    /** Local player forfeited. Counts as a loss with no XP. */
    forfeitCombat() {
        this.addCombatLog('You forfeited.', 'damage');
        this.endCombat(false);
    }

    /** Exit combat immediately due to an external abort (disconnect, cancel). No XP awarded. */
    abortCombat(reason: string) {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
            this.combatInterval = null;
        }
        this.moveGrid.style.display = 'none';
        this.setMovesEnabled(false);
        this.enemyController.dispose();
        this.addCombatLog(reason, 'damage');
        this.stateApi.postMessage({ command: 'showdown-stop', text: 'End of combat: terminate Showdown process' });
        setTimeout(() => {
            this.combatContainer.style.display = 'none';
            this.pokemonContainer.style.display = 'block';
            this.foreground.style.display = 'block';
            this.clearCombatLog();
        }, 2000);
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

            // Try each message handler
            let handled = false;
            for (const handler of MESSAGE_HANDLERS) {
                const match = handler.canHandleMessage(line);
                if (match) {
                    handler.handle(match, this);
                    handled = true;
                    break;
                }
            }

            // Log unhandled lines
            if (!handled) {
                const trimmedLine = line.trim();
                if (trimmedLine && !IGNORED_LINES.some((regex) => regex.test(trimmedLine))) {
                    log(`Unhandled Showdown output: ${trimmedLine}`);
                }
            }
        });
    }

    addCombatLogDivider(label: string) {
        const divider = document.createElement('div');
        divider.className = 'combat-log-turn-divider';
        const span = document.createElement('span');
        span.textContent = label;
        divider.appendChild(span);
        this.combatLog.appendChild(divider);
        this.combatLog.scrollTop = this.combatLog.scrollHeight;
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

    showMoveBadge(pokemonSection: HTMLElement, moveName: string) {
        const moveBadgeEl = document.createElement('div');
        moveBadgeEl.className = 'move-badge';
        moveBadgeEl.textContent = moveName;
        pokemonSection.appendChild(moveBadgeEl);
        setTimeout(() => {
            moveBadgeEl.remove();
        }, 2000);
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
        const isLocalPlayer = this.playerSide === 'p1' ? index === 1 : index === 2;
        const pokemon = isLocalPlayer ? this.combat.player : this.combat.enemy;
        if (!pokemon) {
            throw new Error(`No combat pokemon for player index ${index}`);
        }
        return pokemon;
    }

    getCombatSectionElement(index: number): HTMLElement {
        // Local player is always on the left
        const isLocalPlayer = this.playerSide === 'p1' ? index === 1 : index === 2;
        const sectionId = isLocalPlayer ? 'playerPokemonSection' : 'enemyPokemonSection';
        const element = document.getElementById(sectionId);
        if (!element) {
            throw new Error(`No combat section element for player index ${index}`);
        }
        return element;
    }
}