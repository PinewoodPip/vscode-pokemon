import * as React from 'react';
import { CombatPokemonStat, ABREVIATION_TO_STAT } from '../../../combat/combat';

interface Props {
    statModifierStages: Record<CombatPokemonStat, number>;
}

const STAT_TO_ABBREVIATION: Record<string, string> = Object.fromEntries(
    Object.entries(ABREVIATION_TO_STAT).map(([abbr, stat]) => [stat, abbr.toUpperCase()])
);

export function StatModifierBadges({ statModifierStages }: Props): React.ReactElement {
    const entries = Object.entries(statModifierStages).filter(([, stage]) => stage !== 0);

    return (
        <div className="flex gap-1 mt-1 justify-center flex-wrap">
            {entries.map(([stat, stage]) => {
                const abbr = STAT_TO_ABBREVIATION[stat] ?? stat.toUpperCase();
                const sign = stage > 0 ? '+' : '';
                return (
                    <div key={stat} className={`stat-modifier-badge inline-flex items-center justify-center px-1 py-[1px] rounded-sm text-[8px] font-bold uppercase tracking-[0.3px] text-white ${stage > 0 ? 'positive' : 'negative'}`}>
                        {`${abbr} ${sign}${stage}`}
                    </div>
                );
            })}
        </div>
    );
}
