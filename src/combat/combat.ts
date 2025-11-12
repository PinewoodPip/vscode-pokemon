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
    /** Level used in combat. May be different from the source pokemon's level in cases where the combat was level-scaled. */
    level: number;

    constructor(pokemon: Pokemon | null, name: string, type: PokemonType, color: PokemonColor, generation: string, originalSpriteSize: number, config: PokemonConfig, currentHp: number, maxHp: number, level: number) {
        this.pokemon = pokemon;
        this.name = name;
        this.type = type;
        this.color = color;
        this.generation = generation;
        this.originalSpriteSize = originalSpriteSize;
        this.config = config;
        this.currentHp = currentHp;
        this.maxHp = maxHp;
        this.level = level;
    }

    getXPGain(defeatedPokemon: CombatPokemon): number {
        const isTrainerBattle = false;
        const trainerMultiplier = isTrainerBattle ? 1.5 : 1;
        const a = trainerMultiplier;

        const baseExperienceYield = defeatedPokemon.config.experience_yield;
        const b = baseExperienceYield;

        const hasLuckyEgg = false;
        const luckyEggMultiplier = hasLuckyEgg ? 1.5 : 1;
        const e = luckyEggMultiplier;

        const hasAffection = false; // TODO use happiness stat for this
        const affectionMultiplier = hasAffection ? 4915/4096 : 1; // Roughly 1.2 in the games
        const f = affectionMultiplier;

        const enemyLevel = defeatedPokemon.level;
        const L = enemyLevel;

        const attackerLevel = this.level;
        const Lp = attackerLevel;

        const p = 1; // TODO! other boosts
        const s = 1; // TODO! XP share

        const isFromOriginalTrainer = true;
        const isFromForeignLanguage = false;
        let originalTrainerMultiplier = 1;
        if (!isFromOriginalTrainer && isFromForeignLanguage) {
            originalTrainerMultiplier = 1.7;
        } else if (!isFromOriginalTrainer) {
            originalTrainerMultiplier = 1.5;
        }
        const t = originalTrainerMultiplier;

        const v = 1; // TODO ! bonus for unevolved pokemon past their evolution level
        
        const factor1 = b * L / 5;
        const factor2 = 1 / s;
        const factor3 = ((2 * L + 10) / (L + Lp + 10)) + 1;
        const factor4 = t;
        const factor5 = e;
        const factor6 = v;
        const factor7 = f;
        const factor8 = p;
        return factor1 * factor2 * factor3 * factor4 * factor5 * factor6 * factor7 * factor8;
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
