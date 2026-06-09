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

export class NetworkCombatHost {
    private server: net.Server | null = null;
    private clientSocket: net.Socket | null = null;
    private myPokemon: NetworkPokemonData | null = null;
    private playerPokemonIndex: number = 0;
    private myMoveIndex: number | null = null;
    private opponentMoveIndex: number | null = null;
    private opponentMoveResolver: ((index: number | null) => void) | null = null;
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
            this.opponentMoveIndex = msg.moveIndex;
            this.trySubmitMoves();
        } else if (msg.type === 'forfeit') {
            this.forfeitHandled = true;
            void this.webview.postMessage({ command: 'pvp-opponent-forfeited' });
            this.dispose();
        }
    }

    /** Called from the extension when the local (host) player picks a move. */
    onLocalMove(moveIndex: number) {
        this.myMoveIndex = moveIndex;
        this.trySubmitMoves();
    }

    private trySubmitMoves() {
        if (this.myMoveIndex === null || this.opponentMoveIndex === null) { return; }

        const p1Move = this.myMoveIndex + 1;
        const p2Move = this.opponentMoveIndex + 1;
        this.showdown.writeCommand(`>p1 move ${p1Move}`);
        this.showdown.writeCommand(`>p2 move ${p2Move}`);

        // Tell the client what move the host made so its NetworkEnemyController can resolve
        if (this.clientSocket && !this.clientSocket.destroyed) {
            sendMsg(this.clientSocket, { type: 'move', moveIndex: this.myMoveIndex });
        }

        // Resolve the host's pending enemy-move promise (client's move index is the enemy)
        const resolvedOpponentMove = this.opponentMoveIndex;
        this.myMoveIndex = null;
        this.opponentMoveIndex = null;

        void this.webview.postMessage({ command: 'pvp-opponent-move', moveIndex: resolvedOpponentMove });
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
            // Host's move choice — resolves client's NetworkEnemyController
            void this.webview.postMessage({ command: 'pvp-opponent-move', moveIndex: msg.moveIndex });
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
