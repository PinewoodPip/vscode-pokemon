import * as vscode from 'vscode';
import { POKEMON_DATA } from "./pokemon-data";
import { log } from './util';
import { ExperienceGroup, XP_TABLE } from './xp-tables';

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

export interface PokemonProgressionState {
    level: number;
    experience: number;
}

const EXTRA_POKEMON_KEY = 'vscode-pokemon.extra-pokemon';
const EXTRA_POKEMON_KEY_LEVELS = EXTRA_POKEMON_KEY + '.progression.levels';
const EXTRA_POKEMON_KEY_EXPERIENCE = EXTRA_POKEMON_KEY + '.progression.experience';
export class PokemonProgression implements PokemonProgressionState {
    level: number;
    experience: number;
    experience_group: ExperienceGroup;

    constructor(level: number = 1, experience: number = 0, experience_group: ExperienceGroup = ExperienceGroup.medium_fast) {
        this.level = level;
        this.experience = experience;
        this.experience_group = experience_group;
    }

    addXP(amount: number) {
        this.experience += amount;
        this.level = this.getLevelForXP(this.experience);
    }

    levelUp() {
        this.level += 1;
        this.experience -= this.getXPForNextLevel(); // Reset experience on level up.
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
        };
    }

    static deserialize(data: PokemonProgressionState): PokemonProgression {
        return new PokemonProgression(data.level, data.experience);
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