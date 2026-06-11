import * as React from 'react';
import { LogEntry } from '../../stores/combatStore';

interface Props {
    entries: LogEntry[];
}

export function CombatLog({ entries }: Props): React.ReactElement {
    const logRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [entries]);

    return (
        <div id="combatLog" className="flex-1 min-h-0 overflow-y-auto rounded p-[10px] mb-[15px] text-xs" ref={logRef}>
            {entries.map((entry) =>
                entry.isDivider ? (
                    <div key={entry.id} className="combat-log-turn-divider flex items-center gap-2 my-2 opacity-40">
                        <span>{entry.text}</span>
                    </div>
                ) : (
                    <div key={entry.id} className={`combat-log-entry mb-[5px] py-[3px] ${entry.className}`.trim()}>
                        {entry.text}
                    </div>
                )
            )}
        </div>
    );
}
