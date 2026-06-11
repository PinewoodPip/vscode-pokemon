import * as React from 'react';
import { CombatantState } from '../../stores/combatStore';
import { combatRefs } from '../../stores/combatRefs';
import { HPBar } from './HPBar';
import { StatusBadges } from './StatusBadges';
import { StatModifierBadges } from './StatModifierBadges';

interface Props {
    id: 'playerPokemonSection' | 'enemyPokemonSection';
    side: 'player' | 'enemy';
    combatant: CombatantState;
    moveBadge: string | null;
    flipSprite?: boolean;
}

export function PokemonSection({ id, side, combatant, moveBadge, flipSprite }: Props): React.ReactElement {
    const sectionRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (side === 'player') {
            combatRefs.playerSectionEl = sectionRef.current;
        } else {
            combatRefs.enemySectionEl = sectionRef.current;
        }
        return () => {
            if (side === 'player') { combatRefs.playerSectionEl = null; }
            else { combatRefs.enemySectionEl = null; }
        };
    }, [side]);

    return (
        <div id={id} className="flex-1 flex flex-col items-center gap-[5px] relative" ref={sectionRef}>
            <div className="w-full max-w-[250px]">
                <div className="pokemon-name text-sm font-bold mb-[3px] text-center">{combatant.name}</div>
                <HPBar currentHp={combatant.currentHp} maxHp={combatant.maxHp} />
                <StatusBadges statuses={combatant.statuses} />
                <StatModifierBadges statModifierStages={combatant.statModifierStages} />
            </div>
            <img
                className={`combat-sprite w-12 h-12 object-contain${flipSprite ? ' flip-x' : ''}`}
                src={combatant.spriteUri}
                alt={combatant.name}
            />
            {moveBadge && <div className="move-badge">{moveBadge}</div>}
        </div>
    );
}
