import { ABREVIATION_TO_STAT } from "./combat";
import { log } from "../common/util";
import type { CombatUIManager } from "./ui";

const STATUS_ACRONYM_TO_STRING: Record<string, string> = {
    brn: 'burned',
    par: 'paralyzed',
    slp: 'sleeping',
    frz: 'frozen',
    psn: 'poisoned',
    tox: 'badly poisoned',
    confusion: 'confused',
    flinched: 'flinched',
    trapped: 'trapped',
    trapper: 'trapping',
    partiallytrapped: 'partially trapped',
    lockedmove: 'locked into a move',
    twoturnmove: 'in a two-turn move',
    choicelock: 'locked by Choice item',
    mustrecharge: 'tired and must recharge',
    futuremove: 'preparing a future move',
    healreplacement: 'healing replacement',
    stall: 'protecting itself',
    gem: 'powered up by a Gem',
};

export abstract class MessageHandler {
    abstract readonly pattern: RegExp;
    
    canHandle(line: string): boolean {
        return this.pattern.test(line);
    }
    
    abstract handle(line: string, uiManager: CombatUIManager): void;
}

export class FaintingHandler extends MessageHandler {
    readonly pattern = /^\|-damage\|p(\d)a: ([^|]+)\|0 fnt\|?(\[from\] \w+)?$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemonName = match[2];
        const cause = match[3];

        uiManager.addCombatLog(`${pokemonName} fainted${cause ? ` due to ${cause}` : ''}!`, 'info');

        const pokemonEl = uiManager.getCombatPokemonElement(playerIndex);
        pokemonEl.currentHp = 0;
        uiManager.updateUI();
    }
}

export class GenericFaintHandler extends MessageHandler {
    readonly pattern = /^\|faint\|p(\d)a: ([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemonName = match[2];
        uiManager.addCombatLog(`${pokemonName} fainted!`, 'info');
    }
}

export class SkillFailureHandler extends MessageHandler {
    readonly pattern = /^\|-fail\|p(\d)a: ([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemonName = match[2];
        uiManager.addCombatLog(`${pokemonName} failed to use their move!`, 'info');
    }
}

export class CriticalHitHandler extends MessageHandler {
    readonly pattern = /^\|-crit\|p(\d)a: ([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemonName = match[2];
        uiManager.addCombatLog(`${pokemonName} landed a critical hit!`, 'info');
    }
}

export class DamageHandler extends MessageHandler {
    readonly pattern = /^\|-damage\|p(\d)a: ([^|]+)\|(\d+)\/(\d+)( \w+)?\|?(\[[\w]+\] \w+)?/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemonName = match[2];
        const remainingHP = parseInt(match[3]);
        const totalHP = parseInt(match[4]);
        const status = match[5];
        const cause = match[6];

        if (cause) {
            uiManager.addCombatLog(`${pokemonName} was reduced to ${remainingHP}/${totalHP} HP${cause ? ` due to ${cause}` : ''}!`, 'info');
        }

        const pokemonEl = uiManager.getCombatPokemonElement(playerIndex);
        const previousHP = pokemonEl.currentHp;
        pokemonEl.currentHp = remainingHP;
        pokemonEl.maxHp = totalHP;
        const damage = previousHP - remainingHP;
        const combatSectionEl = uiManager.getCombatSectionElement(playerIndex);
        uiManager.showDamageOverhead(combatSectionEl, damage);
        uiManager.updateUI();
    }
}

export class HealingHandler extends MessageHandler {
    readonly pattern = /^\|-heal\|p(\d)a: ([^|]+)\|(\d+)\/(\d+)\|([^|]+)\|([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemonName = match[2];
        const remainingHP = parseInt(match[3]);
        const totalHP = parseInt(match[4]);
        const source = match[5];
        const target = match[6];

        const pokemonEl = uiManager.getCombatPokemonElement(playerIndex);
        const previousHP = pokemonEl.currentHp;
        pokemonEl.currentHp = remainingHP;
        pokemonEl.maxHp = totalHP;
        const healing = remainingHP - previousHP;
        const combatSectionEl = uiManager.getCombatSectionElement(playerIndex);
        uiManager.showHealOverhead(combatSectionEl, healing);
        uiManager.addCombatLog(`${pokemonName} healed ${healing} HP from using ${source} on ${target}`, 'info');
        uiManager.updateUI();
    }
}

export class ResistanceHandler extends MessageHandler {
    readonly pattern = /^\|-resisted\|p(\d)a: ([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemonName = match[2];
        uiManager.addCombatLog(`It's not very effective on ${pokemonName}... `, 'info');
    }
}

export class TurnCounterHandler extends MessageHandler {
    readonly pattern = /^\|turn\|(\d+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        uiManager.combat.turn = parseInt(match[1]);
        uiManager.updateTurnCounter();
    }
}

export class StartChargedMoveHandler extends MessageHandler {
    readonly pattern = /^\|-start\|p(\d)a: ([^|]+)\|([^|]+)\|([^|+]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemon = match[2];
        const move = match[3];
        const details = match[4];
        uiManager.addCombatLog(`${pokemon} started ${move} ${details}!`, 'info');
    }
}

export class StatusApplicationHandler extends MessageHandler {
    readonly pattern = /^\|-status\|p(\d)a: ([^|]+)\|([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemon = match[2];
        const status = match[3];
        uiManager.addCombatLog(`${pokemon} is ${STATUS_ACRONYM_TO_STRING[status] ?? status}!`, 'info');
        const combatPokemon = uiManager.getCombatPokemonElement(playerIndex);
        combatPokemon.addStatus(status);
    }
}

export class StatusRemovalHandler extends MessageHandler {
    readonly pattern = /^\|-curestatus\|p(\d)a: ([^|]+)\|([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemon = match[2];
        const status = match[3];
        uiManager.addCombatLog(`${pokemon} is no longer ${STATUS_ACRONYM_TO_STRING[status] ?? status}!`, 'info');
        const combatPokemon = uiManager.getCombatPokemonElement(playerIndex);
        combatPokemon.removeStatus(status);
    }
}

export class StatusImmunityHandler extends MessageHandler {
    readonly pattern = /^\|cant\|p(\d)a: ([^|]+)\|(\w+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemon = match[2];
        const status = match[3];
        const statusName = STATUS_ACRONYM_TO_STRING[status] ?? status;
        uiManager.addCombatLog(`${pokemon} cannot be ${statusName}!`, 'info');
    }
}

export class EndChargedMoveHandler extends MessageHandler {
    readonly pattern = /^\|-end\|p(\d)a: ([^|]+)\|([^|]+)\|([^|+]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemon = match[2];
        const move = match[3];
        const details = match[4];
        uiManager.addCombatLog(`${pokemon} ended ${move} ${details}!`, 'info');
    }
}

export class ChargeMovesHandler extends MessageHandler {
    readonly pattern = /^\|move\|p(\d)a: ([^|]+)\|(\w+)\|\|(\[\w+\])/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemon = match[2];
        const move = match[3];
        const chargeInfo = match[4];
        uiManager.addCombatLog(`${pokemon} is ${chargeInfo} using ${move}!`, 'info');
    }
}

export class UsedMoveHandler extends MessageHandler {
    readonly pattern = /^\|move\|p(\d)a: ([^|]+)\|([^|]+)\|p(\d)a: ([^|]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const userPokemon = match[2];
        const move = match[3];
        const targetPlayerPokemon = match[5];
        uiManager.addCombatLog(`${userPokemon} used ${move} on ${targetPlayerPokemon}!`, 'info');
    }
}

export class StatDecreaseHandler extends MessageHandler {
    readonly pattern = /^\|-unboost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemon = match[2];
        const stat = match[3];
        const amount = match[4];
        uiManager.addCombatLog(`${pokemon}'s ${stat} fell by ${amount}!`, 'info');

        const statEnum = ABREVIATION_TO_STAT[stat];
        const combatPokemon = uiManager.getCombatPokemonElement(playerIndex);
        combatPokemon.addBoost(statEnum, -parseInt(amount));
        uiManager.updateUI();
    }
}

export class StatIncreaseHandler extends MessageHandler {
    readonly pattern = /^\|-boost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemon = match[2];
        const stat = match[3];
        const amount = match[4];
        uiManager.addCombatLog(`${pokemon}'s ${stat} rose by ${amount}!`, 'info');

        const statEnum = ABREVIATION_TO_STAT[stat];
        const combatPokemon = uiManager.getCombatPokemonElement(playerIndex);
        combatPokemon.addBoost(statEnum, parseInt(amount));
        uiManager.updateUI();
    }
}

export class SetBoostHandler extends MessageHandler {
    readonly pattern = /^\|-setboost\|p(\d)a: ([^|]+)\|([^|]+)\|([1-9]+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemon = match[2];
        const stat = match[3];
        const amount = match[4];
        uiManager.addCombatLog(`${pokemon}'s ${stat} rose by ${amount}!`, 'info');

        const statEnum = ABREVIATION_TO_STAT[stat];
        const combatPokemon = uiManager.getCombatPokemonElement(playerIndex);
        combatPokemon.setBoost(statEnum, parseInt(amount));
        uiManager.updateUI();
    }
}

export class MiscEffectHandler extends MessageHandler {
    readonly pattern = /^\|-activate\|p(\d)a: ([^|]+)\|(.+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const pokemon = match[2];
        const effect = match[3];
        uiManager.addCombatLog(`${pokemon} activated ${effect}!`, 'info');
    }
}

export class SwitchHandler extends MessageHandler {
    readonly pattern = /^\|switch\|p(\d)a: ([^|]+)\|[^|]+\|(\d+)\/(\d+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const playerIndex = parseInt(match[1]);
        const pokemonName = match[2];
        const hp = parseInt(match[3]);
        const maxHp = parseInt(match[4]);
        uiManager.addCombatLog(`${playerIndex === 1 ? 'Your' : 'Enemy'} ${pokemonName} switched in with ${hp}/${maxHp} HP!`, 'info');

        const pokemonEl = uiManager.getCombatPokemonElement(playerIndex);
        pokemonEl.currentHp = hp;
        pokemonEl.maxHp = maxHp;
    }
}

export class VictoryHandler extends MessageHandler {
    readonly pattern = /^\|win\|(.+)$/;

    handle(line: string, uiManager: CombatUIManager): void {
        const match = line.match(this.pattern);
        if (!match) return;

        const winner = match[1];
        const playerWon = winner === 'Player';
        uiManager.endCombat(playerWon);
    }
}

export const MESSAGE_HANDLERS: MessageHandler[] = [
    new FaintingHandler(),
    new GenericFaintHandler(),
    new SkillFailureHandler(),
    new CriticalHitHandler(),
    new DamageHandler(),
    new HealingHandler(),
    new ResistanceHandler(),
    new TurnCounterHandler(),
    new StartChargedMoveHandler(),
    new StatusApplicationHandler(),
    new StatusRemovalHandler(),
    new StatusImmunityHandler(),
    new EndChargedMoveHandler(),
    new ChargeMovesHandler(),
    new UsedMoveHandler(),
    new StatDecreaseHandler(),
    new StatIncreaseHandler(),
    new SetBoostHandler(),
    new MiscEffectHandler(),
    new SwitchHandler(),
    new VictoryHandler(),
];
