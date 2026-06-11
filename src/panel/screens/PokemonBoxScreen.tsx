import * as React from 'react';
import { useBoxStore, BoxPokemonEntry, PARTY_SIZE } from '../stores/boxStore';

function PokemonInfoPanel({ entry }: { entry: BoxPokemonEntry | null }): React.ReactElement {
    if (!entry) {
        return <div className="box-info-empty text-[9px] text-center pt-2">Left-click to swap Pokémon,<br/>right-click to quick-swap</div>;
    }
    const displayName = entry.name !== entry.speciesName
        ? `${entry.name} (${entry.speciesName})`
        : entry.name;
    return (
        <div className="box-info-content">
            <div className="tooltip-name text-[11px] font-bold mb-1">{displayName}</div>
            <div className="tooltip-stat text-[9px] mt-[2px]">Level {entry.level}</div>
            <div className="tooltip-type text-[9px] mt-[2px]">{entry.type}</div>
        </div>
    );
}

export function PokemonBoxScreen(): React.ReactElement | null {
    const { visible, party, stored, selectedName, basePokemonUri, callbacks, hide, setSelected } = useBoxStore();
    const [hoveredName, setHoveredName] = React.useState<string | null>(null);

    React.useEffect(() => {
        const pokemonContainer = document.getElementById('pokemonContainer');
        const foreground = document.getElementById('foreground');
        if (pokemonContainer) { pokemonContainer.style.visibility = visible ? 'hidden' : ''; }
        if (foreground) { foreground.style.visibility = visible ? 'hidden' : ''; }
    }, [visible]);

    if (!visible || !callbacks) { return null; }

    const allEntries = [...party, ...stored];
    const infoEntry = allEntries.find(e => e.name === (hoveredName ?? selectedName)) ?? null;

    function getSpriteUrl(entry: BoxPokemonEntry): string {
        return `${basePokemonUri}/${entry.generation}/${entry.type}/${entry.color}_idle_8fps.gif`;
    }

    function handleClose() {
        hide();
        callbacks?.onClose();
    }

    function handlePokemonClick(entry: BoxPokemonEntry) {
        if (selectedName === null) {
            setSelected(entry.name);
        } else if (selectedName === entry.name) {
            setSelected(null);
        } else {
            callbacks?.onSwapPokemon(selectedName, entry.name);
        }
    }

    function handlePartyRightClick(e: React.MouseEvent, entry: BoxPokemonEntry) {
        e.preventDefault();
        callbacks?.onStorePartyMember(entry.name);
    }

    function handleStoredRightClick(e: React.MouseEvent, entry: BoxPokemonEntry) {
        e.preventDefault();
        if (party.length < PARTY_SIZE) {
            callbacks?.onAddToParty(entry.name);
        }
    }

    return (
        <div className="box-overlay w-full h-full flex flex-col">
            <div className="box-menubar flex items-center justify-center relative px-3 py-[10px] shrink-0">
                <div className="box-title text-[13px] text-center">Boxes</div>
                <button className="box-exit-btn absolute right-3 top-1/2 -translate-y-1/2 px-[10px] py-1 w-auto cursor-pointer" onClick={handleClose}>✕</button>
            </div>
            <div className="flex flex-1 overflow-hidden">
                <div className="box-sidebar w-[180px] shrink-0 flex flex-col overflow-hidden">
                    <div className="box-info-panel p-[10px] min-h-[100px] shrink-0">
                        <PokemonInfoPanel entry={infoEntry} />
                    </div>
                    <div className="box-party-label text-[9px] pt-[6px] px-[10px] pb-1 shrink-0">Party ({party.length}/{PARTY_SIZE})</div>
                    <div className="flex-1 overflow-y-auto px-[6px] py-1 flex flex-col gap-1">
                        {party.map(entry => (
                            <button
                                key={entry.name}
                                className={`box-party-btn flex items-center gap-1 px-[6px] py-1 w-full text-left text-[9px] cursor-pointer${selectedName === entry.name ? ' box-selected' : ''}`}
                                onClick={() => handlePokemonClick(entry)}
                                onContextMenu={(e) => handlePartyRightClick(e, entry)}
                                onMouseEnter={() => setHoveredName(entry.name)}
                                onMouseLeave={() => setHoveredName(null)}
                            >
                                <img className="box-party-sprite w-6 h-6 shrink-0" src={getSpriteUrl(entry)} alt={entry.name} />
                                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{entry.name}</span>
                                <span className="box-party-level shrink-0 text-[8px]">Lv {entry.level}</span>
                            </button>
                        ))}
                        {party.length === 0 && (
                            <div className="box-party-empty text-[9px] text-center py-2">No active Pokémon</div>
                        )}
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto p-[10px]">
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2 content-start">
                        {stored.map(entry => (
                            <button
                                key={entry.name}
                                className={`box-grid-btn flex flex-col items-center gap-[2px] px-1 pt-[6px] pb-1 w-full text-[8px] cursor-pointer${selectedName === entry.name ? ' box-selected' : ''}`}
                                onClick={() => handlePokemonClick(entry)}
                                onContextMenu={(e) => handleStoredRightClick(e, entry)}
                                onMouseEnter={() => setHoveredName(entry.name)}
                                onMouseLeave={() => setHoveredName(null)}
                            >
                                <img className="box-grid-sprite w-10 h-10" src={getSpriteUrl(entry)} alt={entry.name} />
                                <div className="w-full text-center overflow-hidden text-ellipsis whitespace-nowrap text-[8px]">{entry.name}</div>
                                <div className="box-grid-level text-[7px]">Lv {entry.level}</div>
                            </button>
                        ))}
                        {stored.length === 0 && (
                            <div className="box-grid-empty text-[9px] text-center py-4 col-span-full">No Pokémon in storage</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
