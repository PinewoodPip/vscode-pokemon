import { log } from "../common/util";
import { ABREVIATION_TO_STAT, Combat, CombatPokemon, CombatPokemonStat, POKEMON_STAT_ORDER, PokemonStat } from "./combat";
import { getMoves } from "../common/learnsets-data";
import { PokemonMove } from "../common/move-data";
import { capitalizeString, randomIntegerInRange } from "../common/util";
import { VscodeStateApi } from "../common/vscode-api";
import { MESSAGE_HANDLERS } from "./message-handlers";
import { EnemyController } from "./enemy-controller";
import { NetworkPokemonData } from "../common/network-types";
import { useCombatStore, CombatantState } from "../panel/stores/combatStore";
import { combatRefs } from "../panel/stores/combatRefs";

export class CombatUIManager {
    private readonly TURN_INTERVAL = 1750;

    combat: Combat;
    basePokemonUri: string;
    combatInterval: number | null = null;
    stateApi: VscodeStateApi;

    private playerMoves: PokemonMove[] = [];
    private playerMovePP: number[] = [];
    private enemyMoves: PokemonMove[] = [];
    private enemyMovePP: number[] = [];
    private enemyController: EnemyController;
    private onLocalMoveSelected: ((moveIndex: number) => void) | undefined;
    private startsShowdown: boolean;
    public playerSide: 'p1' | 'p2';
    public opponentName: string;

    constructor(
        statApi: VscodeStateApi,
        baseMediaUri: string,
        combat: Combat,
        enemyController: EnemyController,
        onLocalMoveSelected?: (moveIndex: number) => void,
        startsShowdown: boolean = true,
        playerSide: 'p1' | 'p2' = 'p1',
        opponentName: string = 'Enemy',
    ) {
        this.stateApi = statApi;
        this.basePokemonUri = baseMediaUri;
        this.combat = combat;
        this.enemyController = enemyController;
        this.onLocalMoveSelected = onLocalMoveSelected;
        this.startsShowdown = startsShowdown;
        this.playerSide = playerSide;
        this.opponentName = opponentName;
    }

    /** Returns a display label for the opponent suitable as a noun/possessive prefix.
     *  e.g. "Enemy" or "Alice's" when a GitHub username is known. */
    getOpponentLabel(): string {
        return this.opponentName !== 'Enemy' ? `${this.opponentName}'s` : 'Enemy';
    }

    private snapshotCombatant(p: CombatPokemon): CombatantState {
        return {
            name: p.name,
            type: p.type,
            color: p.color,
            generation: p.generation,
            currentHp: p.currentHp,
            maxHp: p.maxHp,
            statuses: [...p.statuses],
            statModifierStages: { ...p.statModifierStages } as Record<CombatPokemonStat, number>,
            spriteUri: `${this.basePokemonUri}/${p.generation}/${p.type}/default_walk_8fps.gif`,
        };
    }

    start(pvpOpponentData?: NetworkPokemonData) {
        const combat = this.combat;
        const playerPokemon = combat.player;
        const enemyPokemon = combat.enemy;

        const store = useCombatStore.getState();
        store.show();
        store.setCombatants(this.snapshotCombatant(playerPokemon), this.snapshotCombatant(enemyPokemon));
        store.setTurn(combat.turn);

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
        const store = useCombatStore.getState();
        store.setMoves(moves, [...this.playerMovePP]);
        store.setOnMoveSelected((i) => this.onMoveSelected(i));
    }

    private async onMoveSelected(moveIndex: number) {
        const store = useCombatStore.getState();
        store.setMovesEnabled(false);

        this.playerMovePP[moveIndex]--;
        store.setPlayerPP([...this.playerMovePP]);

        // PvP: report local move to extension before waiting for opponent
        this.onLocalMoveSelected?.(moveIndex);

        store.setWaiting(true);
        const enemyMove = await this.enemyController.selectMove(this.enemyMoves, this.enemyMovePP);
        store.setWaiting(false);

        if (enemyMove !== null) { this.enemyMovePP[enemyMove]--; }

        // In AI mode: send moves to Showdown directly
        // In PvP mode moves are submitted to Showdown by the host's NetworkCombatHost.trySubmitMoves() instead
        if (!this.onLocalMoveSelected) {
            const playerMove = moveIndex + 1;
            this.sendShowdownCommand(`>p1 move ${playerMove}`);
            this.sendShowdownCommand(`>p2 move ${enemyMove !== null ? enemyMove + 1 : 1}`);
        }

        this.updateUI();

        setTimeout(() => useCombatStore.getState().setMovesEnabled(true), this.TURN_INTERVAL);
    }

    updateWidgets(_widgets: unknown, pokemon: CombatPokemon) {
        // Kept for compatibility — updateUI() handles both combatants at once
        void _widgets;
        void pokemon;
    }

    updateUI() {
        log('Updating combat UI');
        const store = useCombatStore.getState();
        store.setCombatants(
            this.snapshotCombatant(this.combat.player),
            this.snapshotCombatant(this.combat.enemy),
        );
    }

    updateTurnCounter() {
        useCombatStore.getState().setTurn(this.combat.turn);
    }

    endCombat(playerWon: boolean) {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
            this.combatInterval = null;
        }
        const store = useCombatStore.getState();
        store.setMoveGridVisible(false);
        store.setMovesEnabled(false);

        const playerPokemon = this.combat.player;
        const enemyPokemon = this.combat.enemy;

        if (playerWon) {
            const previousLevel = playerPokemon.pokemon!.progression.level;
            const xpGained = playerPokemon.getXPGain(enemyPokemon);
            playerPokemon.pokemon!.progression.addXP(xpGained);

            const evYields = enemyPokemon.config.ev_yields;
            for (const stat in evYields) {
                const evGain = evYields[stat as keyof typeof evYields] || 0;
                playerPokemon.pokemon!.progression.addEVs(stat as PokemonStat, evGain);
            }

            this.stateApi.postMessage({ command: 'info', text: `${playerPokemon.name} gained ${Math.floor(xpGained)} XP!` });

            const newLevel = playerPokemon.pokemon!.progression.level;
            if (newLevel > previousLevel) {
                this.stateApi.postMessage({ command: 'info', text: `${playerPokemon.name} leveled up to level ${newLevel}!` });
            }

            playerPokemon.pokemon!.needs.addHappiness(Combat.HAPPINESS_ON_VICTORY);
        }

        const message = playerWon
            ? `Victory! ${playerPokemon?.name} defeated ${enemyPokemon?.name}!`
            : `${playerPokemon?.name} fainted! ${enemyPokemon?.name} won!`;
        this.addCombatLog(message, 'info');
        this.stateApi.postMessage({ command: 'info', text: message });
        this.stateApi.postMessage({ command: 'showdown-stop', text: 'End of combat: terminate Showdown process' });

        this.enemyController.dispose();

        setTimeout(() => {
            useCombatStore.getState().hide();
        }, 3000);
    }

    forfeitCombat() {
        this.addCombatLog('You forfeited.', 'damage');
        this.endCombat(false);
    }

    abortCombat(reason: string) {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
            this.combatInterval = null;
        }
        const store = useCombatStore.getState();
        store.setMoveGridVisible(false);
        store.setMovesEnabled(false);
        this.enemyController.dispose();
        this.addCombatLog(reason, 'damage');
        this.stateApi.postMessage({ command: 'showdown-stop', text: 'End of combat: terminate Showdown process' });
        setTimeout(() => useCombatStore.getState().hide(), 2000);
    }

    parseShowdownOutput(output: string) {
        const IGNORED_LINES = [
            /^update$/,
            /^gametype/,
            /^player/,
            /^\|t:/,
            /^\|upkeep/,
            /^\|request/,
            /^tier/,
            /^rule/,
            /^clearpoke/,
            /^teampreview/,
            /^poke/,
            /^\|$/,
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
                    return;
                }
            }
            if (line.startsWith('|split')) {
                linesToParseBeforeIgnore = 2;
                return;
            }

            let handled = false;
            for (const handler of MESSAGE_HANDLERS) {
                const match = handler.canHandleMessage(line);
                if (match) {
                    handler.handle(match, this);
                    handled = true;
                    break;
                }
            }

            if (!handled) {
                const trimmedLine = line.trim();
                if (trimmedLine && !IGNORED_LINES.some((regex) => regex.test(trimmedLine))) {
                    log(`Unhandled Showdown output: ${trimmedLine}`);
                }
            }
        });
    }

    addCombatLogDivider(label: string) {
        useCombatStore.getState().appendLogDivider(label);
    }

    addCombatLog(message: string, className: string = '') {
        useCombatStore.getState().appendLog(message, className);
        log(`[Combat Log] ${message}`);
    }

    showOverhead(pokemonSection: HTMLElement, label: string, classNames: string[]) {
        const floatingEl = document.createElement('div');
        floatingEl.className = `overhead ${classNames.join(' ')}`;
        floatingEl.textContent = label;

        const sprite = pokemonSection.querySelector('.combat-sprite') as HTMLImageElement;
        if (sprite) {
            const rect = sprite.getBoundingClientRect();
            floatingEl.style.left = `${rect.left + rect.width / 2}px`;
            floatingEl.style.top = `${rect.top}px`;
        }

        document.body.appendChild(floatingEl);
        setTimeout(() => floatingEl.remove(), 1000);
    }

    showDamageOverhead(pokemonSection: HTMLElement, damage: number) {
        this.showOverhead(pokemonSection, `${damage}`, ['damage']);
    }

    showHealOverhead(pokemonSection: HTMLElement, healAmount: number) {
        this.showOverhead(pokemonSection, `+${healAmount}`, ['heal']);
    }

    showMoveBadge(pokemonSection: HTMLElement, moveName: string) {
        const side = pokemonSection.id === 'playerPokemonSection' ? 'player' : 'enemy';
        const store = useCombatStore.getState();
        store.setMoveBadge(side, moveName);
        setTimeout(() => store.clearMoveBadge(side), 2000);
    }

    clearCombatLog() {
        useCombatStore.getState().clearLog();
    }

    renderStatusBadges(_container: HTMLElement, _statuses: string[]) {
        // No-op: React re-renders PokemonSection when store updates
    }

    renderStatModifierBadges(_container: HTMLElement, _statModifiers: Record<CombatPokemonStat, number>) {
        // No-op: React re-renders PokemonSection when store updates
    }

    sendShowdownCommand(command: string) {
        this.stateApi?.postMessage({ command: 'showdown-input', text: command });
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
        const isLocalPlayer = this.playerSide === 'p1' ? index === 1 : index === 2;
        const el = isLocalPlayer ? combatRefs.playerSectionEl : combatRefs.enemySectionEl;
        if (!el) {
            throw new Error(`No combat section ref for player index ${index}`);
        }
        return el;
    }
}
