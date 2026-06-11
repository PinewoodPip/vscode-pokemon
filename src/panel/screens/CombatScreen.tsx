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
        <div className="combat-overlay w-full h-full flex flex-col pointer-events-auto">
            <div id="combatUI" className="flex flex-col flex-1 min-h-0 w-full p-[5px] relative">
                <div id="combatArena" className="flex justify-between mb-[5px] p-5 relative rounded">
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
                    <div className="flex px-[6px] pb-[6px] gap-[6px]">
                        <button
                            className="party-btn flex-1 px-[10px] py-[5px] rounded-md"
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
