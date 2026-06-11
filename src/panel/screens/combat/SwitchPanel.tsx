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
        <div className="switch-panel-overlay">
            <div className="switch-panel">
                <div className="switch-panel-title">
                    {switchIsForced ? 'Choose a Pokémon!' : 'Switch Pokémon'}
                </div>
                <div className="switch-grid">
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
                                className={`switch-slot-btn${isActive ? ' switch-slot-active' : ''}${isFainted ? ' switch-slot-fainted' : ''}`}
                                disabled={isDisabled}
                                onClick={() => onSwitchSelected?.(i)}
                                title={isActive ? 'Already in battle' : isFainted ? 'Fainted' : ''}
                            >
                                <img className="switch-slot-sprite" src={spriteUrl} alt={pokemon.name} />
                                <div className="switch-slot-info">
                                    <div className="switch-slot-name">{pokemon.name}</div>
                                    <div className="switch-slot-level">Lv {pokemon.level}</div>
                                    <div className="switch-slot-hp-bar">
                                        <div className={`switch-slot-hp-fill${hpClass}`} style={{ width: `${hpPct * 100}%` }} />
                                    </div>
                                    <div className="switch-slot-hp-text">{isFainted ? 'Fainted' : isActive ? 'Active' : `${pokemon.currentHp}/${pokemon.maxHp}`}</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
                {!switchIsForced && (
                    <button className="switch-panel-cancel" onClick={() => setSwitchPanel(false, false)}>Cancel</button>
                )}
            </div>
        </div>
    );
}
