import * as React from 'react';
import { PokemonMove } from '../../../common/move-data';

interface Props {
    moves: PokemonMove[];
    pp: number[];
    enabled: boolean;
    visible: boolean;
    waiting: boolean;
    onMoveSelected: (index: number) => void;
}

export function MoveGrid({ moves, pp, enabled, visible, waiting, onMoveSelected }: Props): React.ReactElement {
    if (!visible) {
        return <div id="moveGrid" className="grid grid-cols-2 gap-[6px] p-[6px] mb-[6px]" style={{ display: 'none' }} />;
    }

    return (
        <div id="moveGrid" className="grid grid-cols-2 gap-[6px] p-[6px] mb-[6px] relative">
            {moves.map((move, i) => (
                <button
                    key={i}
                    id={`moveBtn${i}`}
                    className={`move-btn flex flex-col items-start gap-[3px] px-[10px] py-[6px] rounded-md w-full text-left type-${move.type}`}
                    disabled={!enabled || pp[i] <= 0}
                    onClick={() => onMoveSelected(i)}
                >
                    <span className="move-btn-name text-[11px] font-bold">{move.name}</span>
                    <div className="flex justify-between items-center w-full text-[9px] opacity-[0.85]">
                        <span className={`tooltip-move tooltip-move-${move.type}`}>{move.type.toUpperCase()}</span>
                        <span className="text-[9px]" id={`movePP${i}`}>{`PP ${pp[i]}/${move.pp}`}</span>
                    </div>
                </button>
            ))}
            {waiting && (
                <div className="waiting-overlay absolute inset-0 flex items-center justify-center text-[10px] z-10 pointer-events-none">Waiting for opponent...</div>
            )}
        </div>
    );
}
