import { PokemonType, PokemonColor, PokemonConfig } from "../common/types";

/** A pokemon participating in a combat. */
export class CombatPokemon {
    name: string;
    type: PokemonType;
    color: PokemonColor;
    generation: string;
    originalSpriteSize: number;
    config: PokemonConfig;
    currentHp: number;
    maxHp: number;
    statuses: string[] = [];

    constructor(name: string, type: PokemonType, color: PokemonColor, generation: string, originalSpriteSize: number, config: PokemonConfig, currentHp: number, maxHp: number) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.generation = generation;
        this.originalSpriteSize = originalSpriteSize;
        this.config = config;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
    }

    addStatus(status: string) {
        if (!this.statuses.includes(status)) {
            this.statuses.push(status);
        }
    }

    removeStatus(status: string) {
        const index = this.statuses.indexOf(status);
        if (index !== -1) {
            this.statuses.splice(index, 1);
        }
    }
}