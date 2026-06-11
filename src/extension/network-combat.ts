import * as net from 'net';
import * as vscode from 'vscode';
import { NetworkMessage, NetworkPokemonData } from '../common/network-types';

export const DEFAULT_PVP_PORT = 25252;

interface ShowdownInterface {
    writeCommand(command: string): void;
    onData: ((text: string) => void) | null;
}

/** Buffers newline-delimited JSON from a TCP socket and emits parsed messages. */
class LineFramer {
    private buffer = '';
    onMessage: (msg: NetworkMessage) => void = () => {};

    feed(chunk: string) {
        this.buffer += chunk;
        const lines = this.buffer.split('\n');
        this.buffer = lines.pop()!;
        for (const line of lines) {
            if (line.trim()) {
                try { this.onMessage(JSON.parse(line)); }
                catch { /* malformed line, ignore */ }
            }
        }
    }
}

function sendMsg(socket: net.Socket, msg: NetworkMessage) {
    socket.write(JSON.stringify(msg) + '\n');
}

type PlayerAction = { type: 'move'; index: number } | { type: 'switch'; index: number };

function actionToShowdownCmd(side: 'p1' | 'p2', action: PlayerAction): string {
    return action.type === 'move'
        ? `>${side} move ${action.index + 1}`
        : `>${side} switch ${action.index + 1}`;
}

export class NetworkCombatHost {
    private server: net.Server | null = null;
    private clientSocket: net.Socket | null = null;
    private myPokemon: NetworkPokemonData | null = null;
    private playerPokemonIndex: number = 0;
    private myAction: PlayerAction | null = null;
    private opponentAction: PlayerAction | null = null;
    private forfeitHandled = false;

    constructor(
        private readonly webview: vscode.Webview,
        private readonly showdown: ShowdownInterface,
    ) {}

    setMyPokemon(pokemon: NetworkPokemonData, playerPokemonIndex: number) {
        this.myPokemon = pokemon;
        this.playerPokemonIndex = playerPokemonIndex;
    }

    async listen(port: number = DEFAULT_PVP_PORT): Promise<number> {
        return new Promise((resolve, reject) => {
            this.server = net.createServer((socket) => {
                this.clientSocket = socket;
                this.handleClientConnected(socket);
            });
            this.server.on('error', reject);
            this.server.listen(port, '0.0.0.0', () => {
                const addr = this.server!.address() as net.AddressInfo;
                resolve(addr.port);
            });
        });
    }

    private handleClientConnected(socket: net.Socket) {
        const framer = new LineFramer();
        framer.onMessage = (msg) => this.handleNetworkMessage(msg);
        socket.on('data', (chunk) => framer.feed(chunk.toString('utf8')));
        socket.on('error', () => this.handleDisconnect());
        socket.on('close', () => this.handleDisconnect());

        sendMsg(socket, { type: 'hello', pokemon: this.myPokemon! });

        // Relay Showdown output to client
        this.showdown.onData = (text) => {
            if (this.clientSocket && !this.clientSocket.destroyed) {
                sendMsg(this.clientSocket, { type: 'showdown', text });
            }
        };
    }

    private handleNetworkMessage(msg: NetworkMessage) {
        if (msg.type === 'hello') {
            void this.webview.postMessage({
                command: 'start-pvp-combat',
                role: 'host',
                opponentPokemon: msg.pokemon,
                localPlayerSide: 'p1',
                playerPokemonIndex: this.playerPokemonIndex,
            });
        } else if (msg.type === 'move') {
            this.opponentAction = { type: 'move', index: msg.moveIndex };
            this.trySubmitActions();
        } else if (msg.type === 'switch') {
            this.opponentAction = { type: 'switch', index: msg.partyIndex };
            this.trySubmitActions();
        } else if (msg.type === 'forced-switch') {
            // Client's pokemon fainted; submit p2 switch immediately, no pairing needed
            this.showdown.writeCommand(`>p2 switch ${msg.partyIndex + 1}`);
        } else if (msg.type === 'forfeit') {
            this.forfeitHandled = true;
            void this.webview.postMessage({ command: 'pvp-opponent-forfeited' });
            this.dispose();
        }
    }

    /** Called from the extension when the local (host) player uses a move. */
    onLocalMove(moveIndex: number) {
        this.myAction = { type: 'move', index: moveIndex };
        this.trySubmitActions();
    }

    /** Called from the extension when the local (host) player voluntarily switches. */
    onLocalSwitch(partyIndex: number) {
        this.myAction = { type: 'switch', index: partyIndex };
        this.trySubmitActions();
    }

    /** Called from the extension when the host player's pokemon fainted and they pick a replacement.
     *  No opponent action is needed — submit directly to Showdown. */
    onLocalForcedSwitch(partyIndex: number) {
        this.showdown.writeCommand(`>p1 switch ${partyIndex + 1}`);
    }

    private trySubmitActions() {
        if (!this.myAction || !this.opponentAction) { return; }

        const p1 = this.myAction;
        const p2 = this.opponentAction;
        this.myAction = null;
        this.opponentAction = null;

        this.showdown.writeCommand(actionToShowdownCmd('p1', p1));
        this.showdown.writeCommand(actionToShowdownCmd('p2', p2));

        // Tell client what the host (p1) did so their NetworkEnemyController resolves
        if (this.clientSocket && !this.clientSocket.destroyed) {
            const clientMsg: NetworkMessage = p1.type === 'move'
                ? { type: 'move', moveIndex: p1.index }
                : { type: 'switch', partyIndex: p1.index };
            sendMsg(this.clientSocket, clientMsg);
        }

        // Tell host's webview what the client (p2) did so their NetworkEnemyController resolves
        if (p2.type === 'move') {
            void this.webview.postMessage({ command: 'pvp-opponent-move', moveIndex: p2.index });
        } else {
            void this.webview.postMessage({ command: 'pvp-opponent-switch', partyIndex: p2.index });
        }
    }

    forfeit() {
        if (this.clientSocket && !this.clientSocket.destroyed) {
            sendMsg(this.clientSocket, { type: 'forfeit' });
        }
        this.forfeitHandled = true;
        this.dispose();
    }

    private handleDisconnect() {
        if (this.forfeitHandled) { return; }
        void vscode.window.showWarningMessage('PvP: opponent disconnected.');
        void this.webview.postMessage({ command: 'pvp-disconnected' });
    }

    dispose() {
        this.showdown.onData = null;
        this.clientSocket?.destroy();
        this.server?.close();
        this.clientSocket = null;
        this.server = null;
    }
}

export class NetworkCombatClient {
    private socket: net.Socket | null = null;
    private framer = new LineFramer();
    private myPokemon: NetworkPokemonData | null = null;
    private playerPokemonIndex: number = 0;
    private forfeitHandled = false;

    constructor(private readonly webview: vscode.Webview) {}

    setMyPokemon(pokemon: NetworkPokemonData, playerPokemonIndex: number) {
        this.myPokemon = pokemon;
        this.playerPokemonIndex = playerPokemonIndex;
    }

    connect(host: string, port: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.socket = net.createConnection({ host, port }, () => {
                sendMsg(this.socket!, { type: 'hello', pokemon: this.myPokemon! });
                resolve();
            });
            this.framer.onMessage = (msg) => this.handleNetworkMessage(msg);
            this.socket.on('data', (chunk) => this.framer.feed(chunk.toString('utf8')));
            this.socket.on('error', (err) => {
                reject(err);
            });
            this.socket.on('close', () => {
                if (this.forfeitHandled) { return; }
                void vscode.window.showWarningMessage('PvP: disconnected from host.');
                void this.webview.postMessage({ command: 'pvp-disconnected' });
            });
        });
    }

    private handleNetworkMessage(msg: NetworkMessage) {
        if (msg.type === 'hello') {
            void this.webview.postMessage({
                command: 'start-pvp-combat',
                role: 'client',
                opponentPokemon: msg.pokemon,
                localPlayerSide: 'p2',
                playerPokemonIndex: this.playerPokemonIndex,
            });
        } else if (msg.type === 'showdown') {
            // Relay host's Showdown output to the webview as if it were local
            void this.webview.postMessage({ command: 'showdown-output', text: msg.text });
        } else if (msg.type === 'move') {
            // Host's move — resolves client's NetworkEnemyController
            void this.webview.postMessage({ command: 'pvp-opponent-move', moveIndex: msg.moveIndex });
        } else if (msg.type === 'switch') {
            // Host voluntarily switched — resolves client's NetworkEnemyController
            void this.webview.postMessage({ command: 'pvp-opponent-switch', partyIndex: msg.partyIndex });
        } else if (msg.type === 'forfeit') {
            this.forfeitHandled = true;
            void this.webview.postMessage({ command: 'pvp-opponent-forfeited' });
            this.dispose();
        }
    }

    sendMove(moveIndex: number) {
        if (this.socket && !this.socket.destroyed) {
            sendMsg(this.socket, { type: 'move', moveIndex });
        }
    }

    sendSwitch(partyIndex: number) {
        if (this.socket && !this.socket.destroyed) {
            sendMsg(this.socket, { type: 'switch', partyIndex });
        }
    }

    sendForcedSwitch(partyIndex: number) {
        if (this.socket && !this.socket.destroyed) {
            sendMsg(this.socket, { type: 'forced-switch', partyIndex });
        }
    }

    forfeit() {
        if (this.socket && !this.socket.destroyed) {
            sendMsg(this.socket, { type: 'forfeit' });
        }
        this.forfeitHandled = true;
        this.dispose();
    }

    dispose() {
        this.socket?.destroy();
        this.socket = null;
    }
}
