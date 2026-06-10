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
        return <div id="moveGrid" className="move-grid" style={{ display: 'none' }} />;
    }

    return (
        <div id="moveGrid" className="move-grid" style={{ position: 'relative' }}>
            {moves.map((move, i) => (
                <button
                    key={i}
                    id={`moveBtn${i}`}
                    className={`move-btn type-${move.type}`}
                    disabled={!enabled || pp[i] <= 0}
                    onClick={() => onMoveSelected(i)}
                >
                    <span className="move-btn-name">{move.name}</span>
                    <div className="move-btn-footer">
                        <span className={`tooltip-move tooltip-move-${move.type}`}>{move.type.toUpperCase()}</span>
                        <span className="move-btn-pp" id={`movePP${i}`}>{`PP ${pp[i]}/${move.pp}`}</span>
                    </div>
                </button>
            ))}
            {waiting && (
                <div className="waiting-overlay">Waiting for opponent...</div>
            )}
        </div>
    );
}
