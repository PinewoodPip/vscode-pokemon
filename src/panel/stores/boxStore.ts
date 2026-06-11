import { create } from 'zustand';
import { PokemonType } from '../../common/types';
import { PokemonStat } from '../../combat/combat';

export const PARTY_SIZE = 6;

export interface BoxPokemonEntry {
    name: string;
    type: PokemonType;
    generation: string;
    color: string;
    speciesName: string;
    level: number;
    ivs: Record<PokemonStat, number>;
    currentMoveIds: string[];
}

export interface BoxCallbacks {
    onSwapPokemon: (name1: string, name2: string) => void;
    onStorePartyMember: (name: string) => void;
    onAddToParty: (name: string) => void;
    onSummary: (name: string) => void;
    onUpdateMoves: (name: string, moveIds: string[]) => void;
    onClose: () => void;
}

interface BoxState {
    visible: boolean;
    party: BoxPokemonEntry[];
    stored: BoxPokemonEntry[];
    selectedName: string | null;
    basePokemonUri: string;
    callbacks: BoxCallbacks | null;

    show: (party: BoxPokemonEntry[], stored: BoxPokemonEntry[], basePokemonUri: string, callbacks: BoxCallbacks) => void;
    hide: () => void;
    setSelected: (name: string | null) => void;
    refresh: (party: BoxPokemonEntry[], stored: BoxPokemonEntry[]) => void;
}

export const useBoxStore = create<BoxState>((set) => ({
    visible: false,
    party: [],
    stored: [],
    selectedName: null,
    basePokemonUri: '',
    callbacks: null,

    show: (party, stored, basePokemonUri, callbacks) =>
        set({ visible: true, party, stored, basePokemonUri, callbacks, selectedName: null }),
    hide: () => set({ visible: false, selectedName: null }),
    setSelected: (name) => set({ selectedName: name }),
    refresh: (party, stored) => set({ party, stored, selectedName: null }),
}));
