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
        <div className="lobby-overlay w-full h-full flex items-center justify-center pointer-events-auto">
            <div id="lobbyUI" className="flex flex-col items-center gap-4 p-8">
                <div className="lobby-header text-sm text-center">{status}</div>
                {hasAddress && (
                    <div className="lobby-details text-[10px] text-center">
                        {`Your IP: ${ip}\nPort: ${port}\nShare this with your opponent.`}
                    </div>
                )}
                {hasAddress && (
                    <button className="lobby-copy-btn text-[10px] px-6 py-2 w-auto cursor-pointer" onClick={handleCopy}>
                        {copyLabel}
                    </button>
                )}
                <button className="lobby-cancel-btn text-[10px] px-6 py-2 w-auto cursor-pointer mt-2" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
