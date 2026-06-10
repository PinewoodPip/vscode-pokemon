import { create } from 'zustand';

export interface TooltipLine {
    text: string;
    className?: string;
}

interface PokemonScreenState {
    tooltipContent: TooltipLine[] | string | null;
    showTooltip: (content: TooltipLine[] | string) => void;
    hideTooltip: () => void;
}

export const usePokemonStore = create<PokemonScreenState>((set) => ({
    tooltipContent: null,
    showTooltip: (content) => set({ tooltipContent: content }),
    hideTooltip: () => set({ tooltipContent: null }),
}));
