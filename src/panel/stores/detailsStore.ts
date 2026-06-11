import { create } from 'zustand';
import { PokemonType } from '../../common/types';
import { PokemonStat } from '../../combat/combat';

export interface DetailsPokemonData {
    name: string;
    speciesName: string;
    /** Species ID used for learnset lookup (same as PokemonType). */
    speciesId: string;
    type: PokemonType;
    generation: string;
    color: string;
    level: number;
    ivs: Record<PokemonStat, number>;
    currentMoveIds: string[];
    basePokemonUri: string;
}

export interface DetailsCallbacks {
    onUpdateMoves: (name: string, moveIds: string[]) => void;
    onClose: () => void;
}

interface DetailsState {
    visible: boolean;
    pokemon: DetailsPokemonData | null;
    callbacks: DetailsCallbacks | null;

    show: (pokemon: DetailsPokemonData, callbacks: DetailsCallbacks) => void;
    hide: () => void;
    updateMoveIds: (moveIds: string[]) => void;
}

export const useDetailsStore = create<DetailsState>((set) => ({
    visible: false,
    pokemon: null,
    callbacks: null,

    show: (pokemon, callbacks) => set({ visible: true, pokemon, callbacks }),
    hide: () => set({ visible: false, pokemon: null, callbacks: null }),
    updateMoveIds: (moveIds) => set(state =>
        state.pokemon ? { pokemon: { ...state.pokemon, currentMoveIds: moveIds } } : {}
    ),
}));
