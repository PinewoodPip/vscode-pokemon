import { create } from 'zustand';
import { PokemonMove } from '../../common/move-data';
import { CombatPokemonStat } from '../../combat/combat';
import { PokemonType, PokemonColor } from '../../common/types';

export interface CombatantState {
    name: string;
    type: PokemonType;
    color: PokemonColor;
    generation: string;
    level: number;
    currentHp: number;
    maxHp: number;
    statuses: string[];
    statModifierStages: Record<CombatPokemonStat, number>;
    spriteUri: string;
}

export interface LogEntry {
    id: number;
    text: string;
    className: string;
    isDivider: boolean;
}

interface CombatState {
    visible: boolean;
    player: CombatantState | null;
    enemy: CombatantState | null;
    /** Full player party snapshots (for switch panel). */
    playerParty: CombatantState[];
    /** Index into playerParty of the currently active pokemon. */
    activePlayerIndex: number;
    turn: number;
    moves: PokemonMove[];
    playerMovePP: number[];
    logEntries: LogEntry[];
    moveGridVisible: boolean;
    movesEnabled: boolean;
    waiting: boolean;
    playerMoveBadge: string | null;
    enemyMoveBadge: string | null;
    /** Whether the party switch panel is open. */
    showSwitchPanel: boolean;
    /** If true the switch panel cannot be dismissed — player must pick a replacement. */
    switchIsForced: boolean;
    /** Base URI for pokemon sprites, used by the switch panel. */
    basePokemonUri: string;

    show: () => void;
    hide: () => void;
    setCombatants: (player: CombatantState, enemy: CombatantState) => void;
    setParty: (party: CombatantState[], activeIndex: number) => void;
    updatePartyMember: (index: number, state: CombatantState) => void;
    setActivePlayerIndex: (index: number) => void;
    setTurn: (turn: number) => void;
    setMoves: (moves: PokemonMove[], pp: number[]) => void;
    setPlayerPP: (pp: number[]) => void;
    setMoveGridVisible: (visible: boolean) => void;
    setMovesEnabled: (enabled: boolean) => void;
    setWaiting: (waiting: boolean) => void;
    appendLog: (text: string, className: string) => void;
    appendLogDivider: (label: string) => void;
    clearLog: () => void;
    setMoveBadge: (side: 'player' | 'enemy', name: string) => void;
    clearMoveBadge: (side: 'player' | 'enemy') => void;
    setSwitchPanel: (visible: boolean, forced: boolean) => void;
    setBasePokemonUri: (uri: string) => void;
    /** Registered by CombatUIManager; called by the React move buttons. */
    onMoveSelected: ((index: number) => void) | null;
    setOnMoveSelected: (fn: (index: number) => void) => void;
    /** Registered by CombatUIManager; called by the React switch panel. */
    onSwitchSelected: ((partyIndex: number) => void) | null;
    setOnSwitchSelected: (fn: (partyIndex: number) => void) => void;
}

let logIdCounter = 0;

export const useCombatStore = create<CombatState>((set) => ({
    visible: false,
    player: null,
    enemy: null,
    playerParty: [],
    activePlayerIndex: 0,
    turn: 1,
    moves: [],
    playerMovePP: [],
    logEntries: [],
    moveGridVisible: false,
    movesEnabled: false,
    waiting: false,
    playerMoveBadge: null,
    enemyMoveBadge: null,
    showSwitchPanel: false,
    switchIsForced: false,
    basePokemonUri: '',
    onMoveSelected: null,
    onSwitchSelected: null,

    show: () => set({ visible: true }),
    hide: () => set({
        visible: false,
        logEntries: [],
        moveGridVisible: false,
        playerParty: [],
        showSwitchPanel: false,
        switchIsForced: false,
    }),
    setCombatants: (player, enemy) => set({ player, enemy }),
    setParty: (party, activeIndex) => set({ playerParty: party, activePlayerIndex: activeIndex }),
    updatePartyMember: (index, state) =>
        set((s) => {
            const updated = [...s.playerParty];
            updated[index] = state;
            return { playerParty: updated };
        }),
    setActivePlayerIndex: (index) => set({ activePlayerIndex: index }),
    setTurn: (turn) => set({ turn }),
    setMoves: (moves, pp) => set({ moves, playerMovePP: pp, moveGridVisible: true, movesEnabled: true }),
    setPlayerPP: (pp) => set({ playerMovePP: pp }),
    setMoveGridVisible: (visible) => set({ moveGridVisible: visible }),
    setMovesEnabled: (enabled) => set({ movesEnabled: enabled }),
    setWaiting: (waiting) => set({ waiting }),
    appendLog: (text, className) =>
        set((s) => ({ logEntries: [...s.logEntries, { id: ++logIdCounter, text, className, isDivider: false }] })),
    appendLogDivider: (label) =>
        set((s) => ({ logEntries: [...s.logEntries, { id: ++logIdCounter, text: label, className: '', isDivider: true }] })),
    clearLog: () => set({ logEntries: [] }),
    setMoveBadge: (side, name) =>
        side === 'player' ? set({ playerMoveBadge: name }) : set({ enemyMoveBadge: name }),
    clearMoveBadge: (side) =>
        side === 'player' ? set({ playerMoveBadge: null }) : set({ enemyMoveBadge: null }),
    setSwitchPanel: (visible, forced) => set({ showSwitchPanel: visible, switchIsForced: forced }),
    setBasePokemonUri: (uri) => set({ basePokemonUri: uri }),
    setOnMoveSelected: (fn) => set({ onMoveSelected: fn }),
    setOnSwitchSelected: (fn) => set({ onSwitchSelected: fn }),
}));
