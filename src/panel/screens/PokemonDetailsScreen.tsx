import * as React from 'react';
import { useDetailsStore } from '../stores/detailsStore';
import { getAllLearnableMoves, LEARNSETS } from '../../common/learnsets-data';
import { ALL_MOVES, PokemonMove } from '../../common/move-data';
import { PokemonStat } from '../../combat/combat';

const STAT_LABELS: Record<PokemonStat, string> = {
    hp: 'HP',
    attack: 'Atk',
    defense: 'Def',
    sp_atk: 'Sp.Atk',
    sp_def: 'Sp.Def',
    speed: 'Speed',
};

const STAT_ORDER: PokemonStat[] = [
    PokemonStat.hp,
    PokemonStat.attack,
    PokemonStat.defense,
    PokemonStat.sp_atk,
    PokemonStat.sp_def,
    PokemonStat.speed,
];

function MoveCard({
    move,
    selected,
    onClick,
}: {
    move: PokemonMove | null;
    selected: boolean;
    onClick: () => void;
}): React.ReactElement {
    if (!move) {
        return (
            <button
                className="details-move-card flex flex-col items-start gap-[2px] px-[8px] py-[5px] rounded-md w-full text-left cursor-pointer opacity-40"
                onClick={onClick}
            >
                <span className="text-[10px] font-bold">—</span>
            </button>
        );
    }

    const pwrStr = move.pwr > 0 ? String(move.pwr) : '—';
    const accStr = move.acc !== null ? `${move.acc}%` : '—';

    return (
        <button
            className={`details-move-card flex flex-col items-start gap-[2px] px-[8px] py-[5px] rounded-md w-full text-left type-${move.type} cursor-pointer${selected ? ' details-move-selected' : ''}`}
            onClick={onClick}
        >
            <span className="move-btn-name text-[10px] font-bold leading-tight">{move.name}</span>
            <div className="grid grid-cols-2 w-full text-[8px] opacity-[0.85] gap-x-[4px] gap-y-[1px]">
                <span className={`tooltip-move tooltip-move-${move.type} justify-self-start`}>{move.type.toUpperCase()}</span>
                <span className="justify-self-end">Pwr {pwrStr}</span>
                <span className="opacity-70 capitalize">{move.category}</span>
                <span className="justify-self-end">Acc {accStr}</span>
            </div>
        </button>
    );
}

function MoveListItem({
    move,
    learnSource,
    onClick,
}: {
    move: PokemonMove;
    learnSource: number | 'Evo.' | 'Rem.';
    onClick: () => void;
}): React.ReactElement {
    const pwrStr = move.pwr > 0 ? String(move.pwr) : '—';
    const accStr = move.acc !== null ? `${move.acc}%` : '—';
    const sourceLabel = typeof learnSource === 'number' ? `Lv${learnSource}` : learnSource;

    return (
        <button
            className={`details-move-list-item flex items-center gap-[6px] px-[8px] py-[5px] w-full text-left type-${move.type} cursor-pointer`}
            onClick={onClick}
        >
            <span className={`tooltip-move tooltip-move-${move.type} shrink-0`}>{move.type.toUpperCase()}</span>
            <span className="move-btn-name text-[10px] font-bold flex-1 text-left">{move.name}</span>
            <span className="text-[8px] opacity-70 shrink-0">{sourceLabel}</span>
            <span className="text-[8px] opacity-70 shrink-0">Pwr {pwrStr}</span>
            <span className="text-[8px] opacity-70 shrink-0">Acc {accStr}</span>
        </button>
    );
}

export function PokemonDetailsScreen(): React.ReactElement | null {
    const { visible, pokemon, callbacks, hide, updateMoveIds } = useDetailsStore();
    const [selectedSlot, setSelectedSlot] = React.useState<number | null>(null);
    const [changeMode, setChangeMode] = React.useState(false);

    React.useEffect(() => {
        if (!visible) {
            setSelectedSlot(null);
            setChangeMode(false);
        }
    }, [visible]);

    if (!visible || !pokemon || !callbacks) { return null; }

    const displayName = pokemon.name !== pokemon.speciesName
        ? `${pokemon.name} (${pokemon.speciesName})`
        : pokemon.name;

    const spriteUrl = `${pokemon.basePokemonUri}/${pokemon.generation}/${pokemon.type}/${pokemon.color}_idle_8fps.gif`;

    const moves: (PokemonMove | null)[] = Array.from({ length: 4 }, (_, i) => {
        const id = pokemon.currentMoveIds[i];
        return id ? (ALL_MOVES[id] ?? null) : null;
    });

    const allLearnable = getAllLearnableMoves(pokemon.speciesId, pokemon.level);
    const learnLevelMap = getLearnLevelMap(pokemon.speciesId, pokemon.level);

    function handleClose() {
        hide();
        callbacks?.onClose();
    }

    function handleMoveCardClick(slotIndex: number) {
        if (changeMode) { return; }
        if (selectedSlot === null) {
            setSelectedSlot(slotIndex);
        } else if (selectedSlot === slotIndex) {
            setSelectedSlot(null);
        } else {
            // Swap the two slots
            const newIds = [...pokemon!.currentMoveIds];
            const tmp = newIds[selectedSlot];
            newIds[selectedSlot] = newIds[slotIndex];
            newIds[slotIndex] = tmp;
            updateMoveIds(newIds);
            callbacks?.onUpdateMoves(pokemon!.name, newIds);
            setSelectedSlot(null);
        }
    }

    function handlePickMove(move: PokemonMove) {
        if (selectedSlot === null) { return; }
        const newIds = [...pokemon!.currentMoveIds];
        // If the move is already in another slot, swap instead of duplicating
        const existingSlot = newIds.indexOf(move.id);
        if (existingSlot !== -1 && existingSlot !== selectedSlot) {
            newIds[existingSlot] = newIds[selectedSlot];
        }
        newIds[selectedSlot] = move.id;
        updateMoveIds(newIds);
        callbacks?.onUpdateMoves(pokemon!.name, newIds);
        setSelectedSlot(null);
        setChangeMode(false);
    }

    const instructionText = changeMode
        ? `Select a move to replace ${moves[selectedSlot!]?.name ?? '—'}`
        : selectedSlot !== null
            ? 'Click another move to swap, or "Change" to replace'
            : 'Click a move to select it';

    return (
        <div className="box-overlay w-full h-full flex flex-col">
            <div className="box-menubar flex items-center justify-center relative px-3 py-[10px] shrink-0">
                {changeMode && (
                    <button
                        className="box-exit-btn absolute left-3 top-1/2 -translate-y-1/2 px-[10px] py-1 w-auto cursor-pointer text-[10px]"
                        onClick={() => setChangeMode(false)}
                    >
                        ← Back
                    </button>
                )}
                <div className="box-title text-[13px] text-center">Summary</div>
                <button className="box-exit-btn absolute right-3 px-[10px] py-1 w-auto cursor-pointer" onClick={handleClose}>✕</button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Left sidebar: sprite + name + IVs */}
                <div className="box-sidebar w-[160px] shrink-0 flex flex-col overflow-hidden p-[10px] gap-[6px]">
                    <div className="flex justify-center">
                        <img
                            className="w-16 h-16"
                            style={{ imageRendering: 'pixelated' }}
                            src={spriteUrl}
                            alt={pokemon.name}
                        />
                    </div>
                    <div>
                        <div className="tooltip-name text-[11px] font-bold leading-tight">{displayName}</div>
                        <div className="tooltip-stat text-[9px] mt-[2px]">Level {pokemon.level}</div>
                        <div className="tooltip-type text-[9px] mt-[1px]">{pokemon.type}</div>
                    </div>
                    <div className="mt-[4px]">
                        <div className="box-party-label text-[8px] pb-[4px]">IVs</div>
                        {STAT_ORDER.map(stat => (
                            <div key={stat} className="flex justify-between text-[9px] py-[1px]">
                                <span className="opacity-60">{STAT_LABELS[stat]}</span>
                                <span className="font-bold">{pokemon.ivs[stat]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right content: move grid or move picker list */}
                <div className="flex-1 overflow-hidden flex flex-col p-[10px] gap-[8px]">
                    <div className="box-party-label text-[8px] my-2">{instructionText}</div>

                    {!changeMode ? (
                        <>
                            <div className="grid grid-cols-2 gap-[6px]">
                                {moves.map((move, i) => (
                                    <MoveCard
                                        key={i}
                                        move={move}
                                        selected={selectedSlot === i}
                                        onClick={() => handleMoveCardClick(i)}
                                    />
                                ))}
                            </div>
                            {selectedSlot !== null && (
                                <button
                                    className="box-exit-btn px-[12px] py-[5px] mt-2 w-auto self-start cursor-pointer text-[10px]"
                                    onClick={() => setChangeMode(true)}
                                >
                                    Change
                                </button>
                            )}
                        </>
                    ) : (
                        <div className="flex-1 overflow-y-auto flex flex-col gap-[2px]">
                            {allLearnable.map(move => (
                                <MoveListItem
                                    key={move.id}
                                    move={move}
                                    learnSource={learnLevelMap[move.id] ?? 1}
                                    onClick={() => handlePickMove(move)}
                                />
                            ))}
                            {allLearnable.length === 0 && (
                                <div className="text-[9px] text-center py-4 opacity-60">No moves available</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/** Returns a map of move ID → learn source for all learnable moves (including Evo. and Rem. moves). */
function getLearnLevelMap(speciesId: string, level: number): Record<string, number | 'Evo.' | 'Rem.'> {
    const learnset = LEARNSETS[speciesId];
    if (!learnset) { return {}; }
    const result: Record<string, number | 'Evo.' | 'Rem.'> = {};
    for (const [moveId, moveSource] of Object.entries(learnset.moves)) {
        if (moveSource === 'Evo.' || moveSource === 'Rem.') {
            result[moveId] = moveSource;
        } else if (level >= (moveSource as number)) {
            result[moveId] = moveSource as number;
        }
    }
    return result;
}
