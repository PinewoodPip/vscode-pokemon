import { PokemonType, PokemonColor, PokemonConfig } from "../common/types";
import { log } from "../common/util";
import { Pokemon } from "../panel/pokemon";

export enum CombatPokemonStat {
    hp = 'hp',
    attack = 'attack',
    defense = 'defense',
    sp_atk = 'sp_atk',
    sp_def = 'sp_def',
    speed = 'speed',
    accuracy = 'accuracy',
    evasion = 'evasion',
}

export const ABREVIATION_TO_STAT: Record<string, CombatPokemonStat> = {
    'hp': CombatPokemonStat.hp,
    'atk': CombatPokemonStat.attack,
    'def': CombatPokemonStat.defense,
    'spa': CombatPokemonStat.sp_atk,
    'spd': CombatPokemonStat.sp_def,
    'spe': CombatPokemonStat.speed,
    'accuracy': CombatPokemonStat.accuracy, // Not abbreviated by Showdown.
    'evasion': CombatPokemonStat.evasion,
};

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
    statModifierStages: Record<CombatPokemonStat, number> = {
        [CombatPokemonStat.hp]: 0,
        [CombatPokemonStat.attack]: 0,
        [CombatPokemonStat.defense]: 0,
        [CombatPokemonStat.sp_atk]: 0,
        [CombatPokemonStat.sp_def]: 0,
        [CombatPokemonStat.speed]: 0,
        [CombatPokemonStat.accuracy]: 0,
        [CombatPokemonStat.evasion]: 0,
    };
    /** Ref to the correspoding pokemon wandering in the panel; null for enemy pokemon. */
    pokemon: Pokemon | null;

    constructor(pokemon: Pokemon | null, name: string, type: PokemonType, color: PokemonColor, generation: string, originalSpriteSize: number, config: PokemonConfig, currentHp: number, maxHp: number) {
        this.pokemon = pokemon;
        this.name = name;
        this.type = type;
        this.color = color;
        this.generation = generation;
        this.originalSpriteSize = originalSpriteSize;
        this.config = config;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
    }

    addBoost(stat: CombatPokemonStat, stage: number) {
        const currentStage = this.statModifierStages[stat] || 0;
        this.statModifierStages[stat] = currentStage + stage;
    }

    setBoost(stat: CombatPokemonStat, stage: number) {
        this.statModifierStages[stat] = stage;
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

/** Manages the state of a combat session. */
export class Combat {
    player: CombatPokemon;
    enemy: CombatPokemon;
    interval: number | null = null;
    turn: number = 0;

    constructor(player: CombatPokemon, enemy: CombatPokemon) {
        this.player = player;
        this.enemy = enemy;
        this.interval = null;
        this.turn = 0;
    }
}
