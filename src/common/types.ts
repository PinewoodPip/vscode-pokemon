import * as vscode from 'vscode';
import { POKEMON_DATA } from "./pokemon-data";
import { log } from './util';

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

    constructor(level: number = 1, experience: number = 0) {
        this.level = level;
        this.experience = experience;
    }

    addXP(amount: number) {
        this.experience += amount;
        while (this.experience >= this.getXPForNextLevel()) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level += 1;
        this.experience -= this.getXPForNextLevel(); // Reset experience on level up.
    }

    getXPForNextLevel(): number {
        return 100 * this.level; // TODO
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