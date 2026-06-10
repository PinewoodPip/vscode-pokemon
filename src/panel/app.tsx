import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { LobbyScreen } from './screens/LobbyScreen';

export function mountReactScreens(): void {
    const lobbyContainer = document.getElementById('lobbyContainer');
    if (lobbyContainer) {
        ReactDOM.createRoot(lobbyContainer).render(<LobbyScreen />);
    }
}
