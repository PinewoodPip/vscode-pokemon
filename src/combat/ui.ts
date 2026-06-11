import { log } from "../common/util";
import { ABREVIATION_TO_STAT, Combat, CombatPokemon, CombatPokemonStat, POKEMON_STAT_ORDER, PokemonStat } from "./combat";
import { getMoves } from "../common/learnsets-data";
import { ALL_MOVES, PokemonMove } from "../common/move-data";
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

    /** Moves and PP per party member (index-aligned with combat.playerParty). */
    private playerPartyMoves: PokemonMove[][] = [];
    private playerPartyPP: number[][] = [];

    /** Moves/PP for the currently active player pokemon (views into the above arrays). */
    private playerMoves: PokemonMove[] = [];
    private playerMovePP: number[] = [];

    private enemyMoves: PokemonMove[] = [];
    private enemyMovePP: number[] = [];
    private enemyController: EnemyController;
    private onLocalMoveSelected: ((moveIndex: number) => void) | undefined;
    private onLocalSwitchSelected: ((partyIndex: number, forced: boolean) => void) | undefined;
    private startsShowdown: boolean;
    public playerSide: 'p1' | 'p2';
    public opponentName: string;

    /** Set to true when the switch panel was opened because the active pokemon fainted. */
    private afterForcedSwitch: boolean = false;

    /** Team order strings stored during start(), sent in response to |teampreview|. */
    private playerTeamOrder: string = '';
    private enemyTeamOrder: string = '';

    constructor(
        statApi: VscodeStateApi,
        baseMediaUri: string,
        combat: Combat,
        enemyController: EnemyController,
        onLocalMoveSelected?: (moveIndex: number) => void,
        onLocalSwitchSelected?: (partyIndex: number, forced: boolean) => void,
        startsShowdown: boolean = true,
        playerSide: 'p1' | 'p2' = 'p1',
        opponentName: string = 'Enemy',
    ) {
        this.stateApi = statApi;
        this.basePokemonUri = baseMediaUri;
        this.combat = combat;
        this.enemyController = enemyController;
        this.onLocalMoveSelected = onLocalMoveSelected;
        this.onLocalSwitchSelected = onLocalSwitchSelected;
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
            level: p.level,
            currentHp: p.currentHp,
            maxHp: p.maxHp,
            statuses: [...p.statuses],
            statModifierStages: { ...p.statModifierStages } as Record<CombatPokemonStat, number>,
            spriteUri: `${this.basePokemonUri}/${p.generation}/${p.type}/default_walk_8fps.gif`,
        };
    }

    private snapshotParty(party: CombatPokemon[]): CombatantState[] {
        return party.map(p => this.snapshotCombatant(p));
    }

    start(pvpOpponentData?: NetworkPokemonData) {
        const combat = this.combat;
        const playerPokemon = combat.player;
        const enemyPokemon = combat.enemy;

        const store = useCombatStore.getState();
        store.setBasePokemonUri(this.basePokemonUri);
        store.show();
        store.setCombatants(this.snapshotCombatant(playerPokemon), this.snapshotCombatant(enemyPokemon));
        store.setParty(this.snapshotParty(combat.playerParty), combat.activePlayerIndex);
        store.setTurn(combat.turn);

        this.addCombatLog(`A wild ${this.combat.enemy.name} appeared!`, 'info');
        this.addCombatLog(`Go! ${this.combat.player.name}!`, 'info');

        // Build per-party-member move data
        this.playerPartyMoves = [];
        this.playerPartyPP = [];
        for (const partyMember of combat.playerParty) {
            const customIds = partyMember.pokemon?.progression.customMoveIds;
            const moves: PokemonMove[] = customIds
                ? customIds.map(id => ALL_MOVES[id]).filter(Boolean) as PokemonMove[]
                : getMoves(partyMember.type, partyMember.level);
            this.playerPartyMoves.push(moves);
            this.playerPartyPP.push(moves.map(m => m.pp));
        }
        this.playerMoves = this.playerPartyMoves[combat.activePlayerIndex];
        this.playerMovePP = [...this.playerPartyPP[combat.activePlayerIndex]];

        const enemyLevel = enemyPokemon.level;
        const enemyMoves = getMoves(enemyPokemon.type, enemyLevel);
        this.enemyMoves = enemyMoves;
        this.enemyMovePP = enemyMoves.map(m => m.pp);

        if (this.startsShowdown) {
            // Build packed team string for the full player party (pokemon separated by ']')
            const playerTeamParts = combat.playerParty.map((p, i) => {
                const moveIDs = this.playerPartyMoves[i].map(m => m.id);
                const ivs = p.pokemon
                    ? POKEMON_STAT_ORDER.map(stat => p.pokemon!.progression.ivs[stat])
                    : POKEMON_STAT_ORDER.map(() => 31);
                const evs = p.pokemon
                    ? POKEMON_STAT_ORDER.map(stat => p.pokemon!.progression.evs[stat])
                    : POKEMON_STAT_ORDER.map(() => 0);
                return `${capitalizeString(p.config.name)}|||noability|${moveIDs.join(',')}|Modest|${ivs.join(',')}||${evs.join(',')}||${p.level}|`;
            });
            const playerTeamString = playerTeamParts.join(']');
            // Showdown parses team order as individual characters (split('')), so no spaces
            this.playerTeamOrder = combat.playerParty.map((_, i) => i + 1).join('');

            // Build enemy team: use per-member PvP data when available, otherwise random stats
            const enemyTeamParts = combat.enemyParty.map((p, i) => {
                const pvpMember = pvpOpponentData?.party[i];
                const mIds = pvpMember ? pvpMember.moveIds : (i === 0 ? enemyMoves.map(m => m.id) : getMoves(p.type, p.level).map(m => m.id));
                const ivs = pvpMember ? pvpMember.ivs : POKEMON_STAT_ORDER.map(() => randomIntegerInRange(0, 31));
                const evs = pvpMember ? pvpMember.evs : POKEMON_STAT_ORDER.map(() => randomIntegerInRange(0, 100));
                return `${capitalizeString(p.config.name)}|||noability|${mIds.join(',')}|Modest|${ivs.join(',')}||${evs.join(',')}||${p.level}|`;
            });
            const enemyTeamString = enemyTeamParts.join(']');
            this.enemyTeamOrder = combat.enemyParty.map((_, i) => i + 1).join('');

            log('[combat] Sending combat start command');
            // Team order is NOT sent here — it is sent in response to |teampreview| via TeamPreviewHandler
            this.sendShowdownCommand(`>start {"formatid":"gen7ou"}
>player p1 {"name":"Player","team":"${playerTeamString}"}
>player p2 {"name":"Enemy","team":"${enemyTeamString}"}`);
        }

        this.initializeMoveGrid();
        // Disable moves until Showdown confirms |turn|1 (after teampreview completes)
        store.setMovesEnabled(false);
        store.setOnSwitchSelected((i) => this.onSwitchSelected(i));
    }

    private initializeMoveGrid() {
        const store = useCombatStore.getState();
        store.setMoves(this.playerMoves, [...this.playerMovePP]);
        store.setOnMoveSelected((i) => this.onMoveSelected(i));
    }

    private async onMoveSelected(moveIndex: number) {
        const store = useCombatStore.getState();
        store.setMovesEnabled(false);

        this.playerMovePP[moveIndex]--;
        this.playerPartyPP[this.combat.activePlayerIndex][moveIndex]--;
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

    /** Called when the player selects a pokemon from the switch panel. */
    async onSwitchSelected(partyIndex: number) {
        const store = useCombatStore.getState();
        store.setSwitchPanel(false, false);
        store.setMovesEnabled(false);

        if (this.afterForcedSwitch) {
            // After a faint: just send the switch, no enemy action needed this sub-turn
            this.afterForcedSwitch = false;
            // Save fainted pokemon's remaining PP before switching
            this.playerPartyPP[this.combat.activePlayerIndex] = [...this.playerMovePP];
            if (this.onLocalSwitchSelected) {
                // PvP mode: tell host/network about the forced switch
                this.onLocalSwitchSelected(partyIndex, true);
            } else {
                this.sendShowdownCommand(`>p1 switch ${partyIndex + 1}`);
            }
            // The SwitchHandler message will fire and call onPokemonSwitchedIn,
            // which re-enables moves and updates the UI.
        } else {
            // Voluntary switch: counts as the player's action for this turn
            // In PvP mode, report the switch before waiting so the host can pair it with the opponent's action
            this.onLocalSwitchSelected?.(partyIndex, false);

            store.setWaiting(true);
            const enemyMove = await this.enemyController.selectMove(this.enemyMoves, this.enemyMovePP);
            store.setWaiting(false);

            if (enemyMove !== null) { this.enemyMovePP[enemyMove]--; }

            this.playerPartyPP[this.combat.activePlayerIndex] = [...this.playerMovePP];

            if (!this.onLocalSwitchSelected) {
                this.sendShowdownCommand(`>p1 switch ${partyIndex + 1}`);
                this.sendShowdownCommand(`>p2 move ${enemyMove !== null ? enemyMove + 1 : 1}`);
            }

            this.updateUI();
            // SwitchHandler fires during TURN_INTERVAL and calls onPokemonSwitchedIn.
            // Move re-enable happens there after a forced, but for voluntary we set a timer.
            setTimeout(() => useCombatStore.getState().setMovesEnabled(true), this.TURN_INTERVAL);
        }
    }

    /**
     * Called by SwitchHandler when Showdown confirms a pokemon has switched in.
     * Finds the pokemon in the party by name, activates it, and reloads moves.
     */
    onPokemonSwitchedIn(playerSideIndex: number, pokemonName: string, hp: number, maxHp: number) {
        const combat = this.combat;
        const isLocalPlayer = this.playerSide === 'p1' ? playerSideIndex === 1 : playerSideIndex === 2;
        const party = isLocalPlayer ? combat.playerParty : combat.enemyParty;

        // Match by species name (what we put in the Showdown team string)
        const idx = party.findIndex(p =>
            capitalizeString(p.config.name) === pokemonName ||
            p.name === pokemonName
        );

        const targetIdx = idx !== -1 ? idx : (isLocalPlayer ? combat.activePlayerIndex : combat.activeEnemyIndex);
        const pokemon = party[targetIdx];
        pokemon.currentHp = hp;
        pokemon.maxHp = maxHp;
        // Reset stat boosts on switch-in (standard Pokemon mechanic)
        for (const stat of Object.keys(pokemon.statModifierStages) as CombatPokemonStat[]) {
            pokemon.statModifierStages[stat] = 0;
        }

        if (isLocalPlayer) {
            combat.activePlayerIndex = targetIdx;
            this.playerMoves = this.playerPartyMoves[targetIdx];
            this.playerMovePP = [...this.playerPartyPP[targetIdx]];

            const store = useCombatStore.getState();
            store.setMoves(this.playerMoves, [...this.playerMovePP]);
            store.setActivePlayerIndex(targetIdx);
            store.updatePartyMember(targetIdx, this.snapshotCombatant(pokemon));

            if (this.afterForcedSwitch) {
                // Already cleared in onSwitchSelected but guard here too
                this.afterForcedSwitch = false;
                store.setMovesEnabled(true);
            }
        } else {
            combat.activeEnemyIndex = targetIdx;
            // Refresh enemy move pool for the new active pokemon
            this.enemyMoves = getMoves(party[targetIdx].type, party[targetIdx].level);
            this.enemyMovePP = this.enemyMoves.map(m => m.pp);
        }

        this.updateUI();
    }

    /**
     * Called by GenericFaintHandler when the local player's active pokemon faints.
     * Shows the forced switch panel if there are surviving party members.
     */
    onLocalPokemonFainted() {
        const survivors = this.combat.playerParty.filter(p => p.currentHp > 0);
        if (survivors.length === 0) {
            // No survivors — Showdown will send |win|Enemy shortly
            return;
        }
        this.afterForcedSwitch = true;
        const store = useCombatStore.getState();
        store.setMovesEnabled(false);
        store.setSwitchPanel(true, true);
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
        // Keep party snapshots in sync (HP may have changed)
        store.setParty(
            this.snapshotParty(this.combat.playerParty),
            this.combat.activePlayerIndex,
        );
    }

    updateTurnCounter() {
        const store = useCombatStore.getState();
        store.setTurn(this.combat.turn);
        // Enable moves on the first turn (teampreview has completed by this point)
        if (this.combat.turn === 1) {
            store.setMovesEnabled(true);
        }
    }

    endCombat(playerWon: boolean) {
        if (this.combatInterval) {
            clearInterval(this.combatInterval);
            this.combatInterval = null;
        }
        const store = useCombatStore.getState();
        store.setMoveGridVisible(false);
        store.setMovesEnabled(false);
        store.setSwitchPanel(false, false);

        const playerPokemon = this.combat.player;
        const enemyPokemon = this.combat.enemy;

        if (playerWon) {
            // Award XP/EVs to all non-fainted party members
            for (const partyMember of this.combat.playerParty) {
                if (partyMember.currentHp <= 0 || !partyMember.pokemon) { continue; }

                const previousLevel = partyMember.pokemon.progression.level;
                const xpGained = partyMember.getXPGain(enemyPokemon);
                partyMember.pokemon.progression.addXP(xpGained);

                const evYields = enemyPokemon.config.ev_yields;
                for (const stat in evYields) {
                    const evGain = evYields[stat as keyof typeof evYields] || 0;
                    partyMember.pokemon.progression.addEVs(stat as PokemonStat, evGain);
                }

                this.stateApi.postMessage({ command: 'info', text: `${partyMember.name} gained ${Math.floor(xpGained)} XP!` });

                const newLevel = partyMember.pokemon.progression.level;
                if (newLevel > previousLevel) {
                    this.stateApi.postMessage({ command: 'info', text: `${partyMember.name} leveled up to level ${newLevel}!` });
                }

                partyMember.pokemon.needs.addHappiness(Combat.HAPPINESS_ON_VICTORY);
            }
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
        store.setSwitchPanel(false, false);
        this.enemyController.dispose();
        this.addCombatLog(reason, 'damage');
        this.stateApi.postMessage({ command: 'showdown-stop', text: 'End of combat: terminate Showdown process' });
        setTimeout(() => useCombatStore.getState().hide(), 2000);
    }

    parseShowdownOutput(output: string) {
        const IGNORED_LINES = [
            /^update$/,
            /^sideupdate$/,
            /^gametype/,
            /^player/,
            /^\|t:/,
            /^\|upkeep/,
            /^\|request/,
            /^tier/,
            /^rule/,
            /^\|clearpoke/,
            /^\|poke\|/,
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

    /** Called by TeamPreviewHandler when Showdown sends |teampreview|. */
    sendTeamPreviewResponse() {
        if (this.startsShowdown) {
            this.sendShowdownCommand(`>p1 team ${this.playerTeamOrder}`);
            this.sendShowdownCommand(`>p2 team ${this.enemyTeamOrder}`);
        }
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
