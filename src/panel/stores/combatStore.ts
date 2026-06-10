import { create } from 'zustand';
import { PokemonMove } from '../../common/move-data';
import { CombatPokemonStat } from '../../combat/combat';
import { PokemonType, PokemonColor } from '../../common/types';

export interface CombatantState {
    name: string;
    type: PokemonType;
    color: PokemonColor;
    generation: string;
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
    turn: number;
    moves: PokemonMove[];
    playerMovePP: number[];
    logEntries: LogEntry[];
    moveGridVisible: boolean;
    movesEnabled: boolean;
    waiting: boolean;
    playerMoveBadge: string | null;
    enemyMoveBadge: string | null;

    show: () => void;
    hide: () => void;
    setCombatants: (player: CombatantState, enemy: CombatantState) => void;
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
    /** Registered by CombatUIManager; called by the React move buttons. */
    onMoveSelected: ((index: number) => void) | null;
    setOnMoveSelected: (fn: (index: number) => void) => void;
}

let logIdCounter = 0;

export const useCombatStore = create<CombatState>((set) => ({
    visible: false,
    player: null,
    enemy: null,
    turn: 1,
    moves: [],
    playerMovePP: [],
    logEntries: [],
    moveGridVisible: false,
    movesEnabled: false,
    waiting: false,
    playerMoveBadge: null,
    enemyMoveBadge: null,
    onMoveSelected: null,

    show: () => set({ visible: true }),
    hide: () => set({ visible: false, logEntries: [], moveGridVisible: false }),
    setCombatants: (player, enemy) => set({ player, enemy }),
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
    setOnMoveSelected: (fn) => set({ onMoveSelected: fn }),
}));
