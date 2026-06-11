import * as React from 'react';
import { useCombatStore } from '../stores/combatStore';
import { PokemonSection } from './combat/PokemonSection';
import { CombatLog } from './combat/CombatLog';
import { MoveGrid } from './combat/MoveGrid';
import { SwitchPanel } from './combat/SwitchPanel';

export function CombatScreen(): React.ReactElement | null {
    const {
        visible, player, enemy, turn, moves, playerMovePP,
        logEntries, moveGridVisible, movesEnabled, waiting,
        playerMoveBadge, enemyMoveBadge, onMoveSelected,
        playerParty, showSwitchPanel, setSwitchPanel,
    } = useCombatStore();

    // Keep pokemon layer hidden while combat is active
    React.useEffect(() => {
        const pokemonContainer = document.getElementById('pokemonContainer');
        const foreground = document.getElementById('foreground');
        if (pokemonContainer) { pokemonContainer.style.display = visible ? 'none' : 'block'; }
        if (foreground) { foreground.style.display = visible ? 'none' : 'block'; }
    }, [visible]);

    if (!visible || !player || !enemy) { return null; }

    const canSwitch = moveGridVisible && movesEnabled && playerParty.length > 1 && !showSwitchPanel;

    return (
        <div className="combat-overlay">
            <div id="combatUI">
                <div id="combatArena">
                    <PokemonSection
                        id="playerPokemonSection"
                        side="player"
                        combatant={player}
                        moveBadge={playerMoveBadge}
                    />
                    <PokemonSection
                        id="enemyPokemonSection"
                        side="enemy"
                        combatant={enemy}
                        moveBadge={enemyMoveBadge}
                        flipSprite
                    />
                    <div id="turnCounter" className="turn-counter">{`Turn ${turn}`}</div>
                </div>
                <CombatLog entries={logEntries} />
                <MoveGrid
                    moves={moves}
                    pp={playerMovePP}
                    enabled={movesEnabled}
                    visible={moveGridVisible}
                    waiting={waiting}
                    onMoveSelected={(i) => onMoveSelected?.(i)}
                />
                {moveGridVisible && playerParty.length > 1 && (
                    <div className="combat-action-bar">
                        <button
                            className="party-btn"
                            disabled={!canSwitch}
                            onClick={() => setSwitchPanel(true, false)}
                        >
                            Party ({playerParty.filter(p => p.currentHp > 0).length}/{playerParty.length})
                        </button>
                    </div>
                )}
                <SwitchPanel />
            </div>
        </div>
    );
}
