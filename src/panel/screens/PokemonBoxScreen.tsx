import * as React from 'react';
import { useBoxStore, BoxPokemonEntry, PARTY_SIZE } from '../stores/boxStore';

function PokemonInfoPanel({ entry }: { entry: BoxPokemonEntry | null }): React.ReactElement {
    if (!entry) {
        return <div className="box-info-empty">Left-click to swap Pokémon,<br/>right-click to quick-swap</div>;
    }
    const displayName = entry.name !== entry.speciesName
        ? `${entry.name} (${entry.speciesName})`
        : entry.name;
    return (
        <div className="box-info-content">
            <div className="tooltip-name">{displayName}</div>
            <div className="tooltip-stat">Level {entry.level}</div>
            <div className="tooltip-type">{entry.type}</div>
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
        <div className="box-overlay">
            <div className="box-menubar">
                <div className="box-title">Boxes</div>
                <button className="box-exit-btn" onClick={handleClose}>✕</button>
            </div>
            <div className="box-content">
                <div className="box-sidebar">
                    <div className="box-info-panel">
                        <PokemonInfoPanel entry={infoEntry} />
                    </div>
                    <div className="box-party-label">Party ({party.length}/{PARTY_SIZE})</div>
                    <div className="box-party-list">
                        {party.map(entry => (
                            <button
                                key={entry.name}
                                className={`box-party-btn${selectedName === entry.name ? ' box-selected' : ''}`}
                                onClick={() => handlePokemonClick(entry)}
                                onContextMenu={(e) => handlePartyRightClick(e, entry)}
                                onMouseEnter={() => setHoveredName(entry.name)}
                                onMouseLeave={() => setHoveredName(null)}
                            >
                                <img className="box-party-sprite" src={getSpriteUrl(entry)} alt={entry.name} />
                                <span className="box-party-name">{entry.name}</span>
                                <span className="box-party-level">Lv {entry.level}</span>
                            </button>
                        ))}
                        {party.length === 0 && (
                            <div className="box-party-empty">No active Pokémon</div>
                        )}
                    </div>
                </div>
                <div className="box-grid-area">
                    <div className="box-grid">
                        {stored.map(entry => (
                            <button
                                key={entry.name}
                                className={`box-grid-btn${selectedName === entry.name ? ' box-selected' : ''}`}
                                onClick={() => handlePokemonClick(entry)}
                                onContextMenu={(e) => handleStoredRightClick(e, entry)}
                                onMouseEnter={() => setHoveredName(entry.name)}
                                onMouseLeave={() => setHoveredName(null)}
                            >
                                <img className="box-grid-sprite" src={getSpriteUrl(entry)} alt={entry.name} />
                                <div className="box-grid-name">{entry.name}</div>
                                <div className="box-grid-level">Lv {entry.level}</div>
                            </button>
                        ))}
                        {stored.length === 0 && (
                            <div className="box-grid-empty">No Pokémon in storage</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
