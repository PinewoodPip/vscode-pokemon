import * as React from 'react';

interface Props {
    currentHp: number;
    maxHp: number;
    criticalThreshold?: number;
    lowThreshold?: number;
}

export function HPBar({ currentHp, maxHp, criticalThreshold = 25, lowThreshold = 50 }: Props): React.ReactElement {
    const hpPercent = maxHp > 0 ? (currentHp / maxHp) * 100 : 0;
    const fillClass = hpPercent < criticalThreshold ? 'hp-fill critical'
        : hpPercent < lowThreshold ? 'hp-fill low'
        : 'hp-fill';

    return (
        <div className="hp-bar-container">
            <div className="hp-bar">
                <div className={fillClass} style={{ width: `${hpPercent}%` }} />
            </div>
            <div className="hp-text">{`HP: ${currentHp}/${maxHp}`}</div>
        </div>
    );
}
