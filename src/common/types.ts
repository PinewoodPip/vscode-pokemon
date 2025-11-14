import * as vscode from 'vscode';
import { POKEMON_DATA } from "./pokemon-data";
import { log, randomIntegerInRange } from './util';
import { ExperienceGroup, XP_TABLE } from './xp-tables';
import { CombatPokemonStat, PokemonStat } from '../combat/combat';

export const enum PokemonColor {
    default = 'default',
    shiny = 'shiny',
    null = 'null',
}

export enum PokemonGeneration {
    Gen1 = 1,
    Gen2 = 2,
    Gen3 = 3,
    Gen4 = 4,
    Gen5 = 5,
    Gen6 = 6,
    Gen7 = 7,
}

export type PokemonTypeString = string & keyof typeof POKEMON_DATA;

export type PokemonType = PokemonTypeString;

export enum PokemonCombatType {
    normal = 'normal',
    fighting = 'fighting',
    flying = 'flying',
    poison = 'poison',
    ground = 'ground',
    rock = 'rock',
    bug = 'bug',
    ghost = 'ghost',
    steel = 'steel',
    fire = 'fire',
    water = 'water',
    grass = 'grass',
    electric = 'electric',
    psychic = 'psychic',
    ice = 'ice',
    dragon = 'dragon',
    dark = 'dark',
    fairy = 'fairy',
}

export abstract class PokemonProgressionState {
    level: number = 0;
    experience: number = 0;
    /** Individual Values */
    ivs: Record<PokemonStat, number> = {
        hp: 0,
        attack: 0,
        defense: 0,
        sp_atk: 0,
        sp_def: 0,
        speed: 0,
    }
    /** Effort Values */
    evs: Record<PokemonStat, number> = {
        hp: 0,
        attack: 0,
        defense: 0,
        sp_atk: 0,
        sp_def: 0,
        speed: 0,
    };
}

export class PokemonProgression extends PokemonProgressionState {
    private readonly MAX_EV_PER_STAT = 255;
    private readonly MAX_TOTAL_EV = 510;

    experience_group: ExperienceGroup;

    constructor(level: number = 1, experience: number = 0, experience_group: ExperienceGroup = ExperienceGroup.medium_fast) {
        super();
        this.level = level;
        this.experience = experience;
        this.experience_group = experience_group;
        
        // Roll random IVs
        this.ivs = {
            hp: randomIntegerInRange(0, 31),
            attack: randomIntegerInRange(0, 31),
            defense: randomIntegerInRange(0, 31),
            sp_atk: randomIntegerInRange(0, 31),
            sp_def: randomIntegerInRange(0, 31),
            speed: randomIntegerInRange(0, 31),
        };

        this.evs = {
            hp: 0,
            attack: 0,
            defense: 0,
            sp_atk: 0,
            sp_def: 0,
            speed: 0,
        };
    }

    addXP(amount: number) {
        this.experience += amount;
        this.level = this.getLevelForXP(this.experience);
    }

    levelUp() {
        this.level += 1;
        this.experience -= this.getXPForNextLevel(); // Reset experience on level up.
    }
    
    addEVs(stat: PokemonStat, evGain: number) {
        const totalEVs = Object.values(this.evs).reduce((a, b) => a + b, 0);
        // Prevent overshooting total EV limit
        if (totalEVs + evGain > this.MAX_TOTAL_EV) {
            evGain = this.MAX_TOTAL_EV - totalEVs;
        }
        // Prevent overshooting per-stat limit
        if (this.evs[stat as keyof typeof this.evs] + evGain > this.MAX_EV_PER_STAT) {
            evGain = this.MAX_EV_PER_STAT - this.evs[stat as keyof typeof this.evs];
        }
        this.evs[stat as keyof typeof this.evs] += evGain;
    }

    getLevelForXP(xp: number): number {
        let level = 0;
        // TODO create reverse lookup table to optimize
        while (xp >= this.getXPForLevel(level + 1)) {
            level += 1;
        }
        return level;
    }

    /** Returns the amount of experience required for a pokemon to be at a given level. */
    getXPForLevel(level: number): number {
        return XP_TABLE[this.experience_group][level];
    }

    getXPForNextLevel(): number {
        return this.getXPForLevel(this.level + 1);
    }

    serialize(): PokemonProgressionState {
        return {
            level: this.level,
            experience: this.experience,
            ivs: this.ivs,
            evs: this.evs,
        };
    }

    static deserialize(data: PokemonProgressionState): PokemonProgression {
        const prog = new PokemonProgression(data.level, data.experience);
        if (data.ivs) {
            prog.ivs = data.ivs;
        }
        if (data.evs) {
            prog.evs = data.evs;
        }
        return prog;
    }
}

export interface PokemonConfig {
    id: number;
    name: string;
    generation: PokemonGeneration;
    cry: string;
    possibleColors: PokemonColor[];
    originalSpriteSize?: number,
    types: PokemonCombatType[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        sp_attack: number;
        sp_defense: number;
        speed: number;
    };
    experience_group: ExperienceGroup;
    experience_yield: number;
    ev_yields: { [key in PokemonStat]?: number};
}

export const enum PokemonSpeed {
    still = 0,
    verySlow = 1,
    slow = 2,
    normal = 3,
    fast = 4,
    veryFast = 5,
}

export const enum PokemonSize {
    nano = 'nano',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export const enum ExtPosition {
    panel = 'panel',
    explorer = 'explorer',
}

export const enum ColorThemeKind {
    light = 1,
    dark = 2,
    highContrast = 3,
}

export class WebviewMessage {
    text: string;
    command: string;
    data?: any; // Payload

    constructor(text: string, command: string) {
        this.text = text;
        this.command = command;
    }
}

export const ALL_COLORS = [
    PokemonColor.default,
];
export const ALL_SCALES = [
    PokemonSize.nano,
    PokemonSize.small,
    PokemonSize.medium,
    PokemonSize.large,
];