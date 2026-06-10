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
        <div id="combatLog" ref={logRef}>
            {entries.map((entry) =>
                entry.isDivider ? (
                    <div key={entry.id} className="combat-log-turn-divider">
                        <span>{entry.text}</span>
                    </div>
                ) : (
                    <div key={entry.id} className={`combat-log-entry ${entry.className}`.trim()}>
                        {entry.text}
                    </div>
                )
            )}
        </div>
    );
}
