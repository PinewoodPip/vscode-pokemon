import * as React from 'react';

interface Props {
    statuses: string[];
}

export function StatusBadges({ statuses }: Props): React.ReactElement {
    return (
        <div className="status-badges">
            {statuses.map((status) => (
                <div key={status} className={`status-badge ${status}`}>
                    {status.toUpperCase()}
                </div>
            ))}
        </div>
    );
}
