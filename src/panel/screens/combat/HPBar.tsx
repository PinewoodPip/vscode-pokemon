import * as React from 'react';

interface Props {
    currentHp: number;
    maxHp: number;
    criticalThreshold?: number;
    lowThreshold?: number;
}

export function HPBar({ currentHp, maxHp, criticalThreshold = 25, lowThreshold = 50 }: Props): React.ReactElement {
    const hpPercent = maxHp > 0 ? (currentHp / maxHp) * 100 : 0;
    const hpClass = hpPercent < criticalThreshold ? ' critical' : hpPercent < lowThreshold ? ' low' : '';

    return (
        <div className="mt-[5px]">
            <div className="hp-bar w-full h-[10px] rounded overflow-hidden relative">
                <div className={`hp-fill h-full${hpClass}`} style={{ width: `${hpPercent}%` }} />
            </div>
            <div className="hp-text text-[10px] text-center mt-[3px]">{`HP: ${currentHp}/${maxHp}`}</div>
        </div>
    );
}
