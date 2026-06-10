import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { LobbyScreen } from './screens/LobbyScreen';
import { CombatScreen } from './screens/CombatScreen';

export function mountReactScreens(): void {
    const lobbyContainer = document.getElementById('lobbyContainer');
    if (lobbyContainer) {
        ReactDOM.createRoot(lobbyContainer).render(<LobbyScreen />);
    }

    const combatContainer = document.getElementById('combatContainer');
    if (combatContainer) {
        ReactDOM.createRoot(combatContainer).render(<CombatScreen />);
    }
}
