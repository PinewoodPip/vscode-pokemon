import * as React from 'react';

interface Props {
    statuses: string[];
}

export function StatusBadges({ statuses }: Props): React.ReactElement {
    return (
        <div className="flex gap-1 mt-[5px] justify-center flex-wrap">
            {statuses.map((status) => (
                <div key={status} className={`status-badge inline-flex items-center justify-center px-[6px] py-[2px] rounded text-[9px] font-bold uppercase tracking-[0.5px] text-white ${status}`}>
                    {status.toUpperCase()}
                </div>
            ))}
        </div>
    );
}
