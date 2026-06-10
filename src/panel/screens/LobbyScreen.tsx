import * as React from 'react';
import { useLobbyStore } from '../stores/lobbyStore';
import { getVscodeApi } from '../vscode';

export function LobbyScreen(): React.ReactElement | null {
    const { visible, status, ip, port, hide } = useLobbyStore();
    const hasAddress = ip !== undefined && port !== undefined;
    const address = hasAddress ? `${ip}:${port}` : '';
    const [copyLabel, setCopyLabel] = React.useState('Copy IP:Port');

    // Keep pokemon layer hidden while lobby is open
    React.useEffect(() => {
        const pokemonContainer = document.getElementById('pokemonContainer');
        const foreground = document.getElementById('foreground');
        if (pokemonContainer) { pokemonContainer.style.visibility = visible ? 'hidden' : ''; }
        if (foreground) { foreground.style.visibility = visible ? 'hidden' : ''; }
    }, [visible]);

    if (!visible) { return null; }

    function handleCancel() {
        hide();
        getVscodeApi().postMessage({ command: 'pvp-cancel', text: '' });
    }

    function handleCopy() {
        navigator.clipboard.writeText(address).then(() => {
            setCopyLabel('Copied!');
            setTimeout(() => setCopyLabel('Copy IP:Port'), 1500);
        });
    }

    return (
        <div className="lobby-overlay">
            <div id="lobbyUI">
                <div className="lobby-header">{status}</div>
                {hasAddress && (
                    <div className="lobby-details">
                        {`Your IP: ${ip}\nPort: ${port}\nShare this with your opponent.`}
                    </div>
                )}
                {hasAddress && (
                    <button className="lobby-copy-btn" onClick={handleCopy}>
                        {copyLabel}
                    </button>
                )}
                <button className="lobby-cancel-btn" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
