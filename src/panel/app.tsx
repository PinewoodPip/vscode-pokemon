import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { LobbyScreen } from './screens/LobbyScreen';
import { CombatScreen } from './screens/CombatScreen';
import { PokemonTooltip } from './screens/PokemonTooltip';
import { PokemonBoxScreen } from './screens/PokemonBoxScreen';

export function mountReactScreens(): void {
    const lobbyContainer = document.getElementById('lobbyContainer');
    if (lobbyContainer) {
        ReactDOM.createRoot(lobbyContainer).render(<LobbyScreen />);
    }

    const combatContainer = document.getElementById('combatContainer');
    if (combatContainer) {
        ReactDOM.createRoot(combatContainer).render(<CombatScreen />);
    }

    const tooltipContainer = document.getElementById('pokemonTooltip');
    if (tooltipContainer) {
        ReactDOM.createRoot(tooltipContainer).render(<PokemonTooltip />);
    }

    const boxContainer = document.getElementById('boxContainer');
    if (boxContainer) {
        ReactDOM.createRoot(boxContainer).render(<PokemonBoxScreen />);
    }
}
