import { PokemonMove } from "../common/move-data";
import { EnemyController } from "./enemy-controller";

export class NetworkEnemyController implements EnemyController {
    private pendingResolver: ((index: number | null) => void) | null = null;

    selectMove(_enemyMoves: PokemonMove[], _enemyMovePP: number[]): Promise<number | null> {
        return new Promise((resolve) => {
            this.pendingResolver = resolve;
        });
    }

    /** Called by main.ts when a 'pvp-opponent-move' message arrives from the extension. */
    onOpponentMoveReceived(moveIndex: number): void {
        this.pendingResolver?.(moveIndex);
        this.pendingResolver = null;
    }

    dispose(): void {
        // Unblock any in-flight selectMove() on battle end or disconnect
        this.pendingResolver?.(null);
        this.pendingResolver = null;
    }
}
