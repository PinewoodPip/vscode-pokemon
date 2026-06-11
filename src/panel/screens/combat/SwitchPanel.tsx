import * as React from 'react';
import { useCombatStore } from '../../stores/combatStore';

export function SwitchPanel(): React.ReactElement | null {
    const {
        playerParty, activePlayerIndex,
        showSwitchPanel, switchIsForced,
        basePokemonUri, onSwitchSelected,
        setSwitchPanel,
    } = useCombatStore();

    if (!showSwitchPanel) { return null; }

    return (
        <div className="switch-panel-overlay absolute inset-0 flex justify-center items-center z-20">
            <div className="switch-panel flex flex-col gap-[10px] w-[90%] max-w-[320px] rounded-lg p-3">
                <div className="switch-panel-title text-xs font-bold text-center">
                    {switchIsForced ? 'Choose a Pokémon!' : 'Switch Pokémon'}
                </div>
                <div className="grid grid-cols-2 gap-[6px]">
                    {playerParty.map((pokemon, i) => {
                        const isActive = i === activePlayerIndex;
                        const isFainted = pokemon.currentHp <= 0;
                        const isDisabled = isActive || isFainted;
                        const spriteUrl = `${basePokemonUri}/${pokemon.generation}/${pokemon.type}/${pokemon.color}_idle_8fps.gif`;
                        const hpPct = pokemon.maxHp > 0 ? pokemon.currentHp / pokemon.maxHp : 0;
                        const hpClass = hpPct > 0.5 ? '' : hpPct > 0.2 ? ' low' : ' critical';

                        return (
                            <button
                                key={i}
                                className={`switch-slot-btn flex items-center gap-[6px] px-[7px] py-[5px] rounded-md cursor-pointer text-left min-w-0${isActive ? ' switch-slot-active' : ''}${isFainted ? ' switch-slot-fainted' : ''}`}
                                disabled={isDisabled}
                                onClick={() => onSwitchSelected?.(i)}
                                title={isActive ? 'Already in battle' : isFainted ? 'Fainted' : ''}
                            >
                                <img className="switch-slot-sprite w-8 h-8 object-contain shrink-0" src={spriteUrl} alt={pokemon.name} />
                                <div className="flex flex-col gap-[2px] min-w-0 flex-1">
                                    <div className="text-[9px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">{pokemon.name}</div>
                                    <div className="text-[8px] opacity-75">Lv {pokemon.level}</div>
                                    <div className="switch-slot-hp-bar w-full h-1 rounded-sm overflow-hidden">
                                        <div className={`switch-slot-hp-fill h-full${hpClass}`} style={{ width: `${hpPct * 100}%` }} />
                                    </div>
                                    <div className="text-[8px] opacity-75 whitespace-nowrap">{isFainted ? 'Fainted' : isActive ? 'Active' : `${pokemon.currentHp}/${pokemon.maxHp}`}</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
                {!switchIsForced && (
                    <button className="switch-panel-cancel p-[5px] rounded w-full cursor-pointer" onClick={() => setSwitchPanel(false, false)}>Cancel</button>
                )}
            </div>
        </div>
    );
}
