import { PokemonMove } from "../common/move-data";
import { randomIntegerInRange } from "../common/util";
import { EnemyController } from "./enemy-controller";

export class AiEnemyController implements EnemyController {
    selectMove(enemyMoves: PokemonMove[], enemyMovePP: number[]): Promise<number | null> {
        const valid = enemyMovePP
            .map((pp, i) => ({ pp, i }))
            .filter(({ pp, i }) => i < enemyMoves.length && pp > 0)
            .map(({ i }) => i);
        if (valid.length === 0) { return Promise.resolve(null); }
        return Promise.resolve(valid[randomIntegerInRange(0, valid.length - 1)]);
    }

    dispose(): void {}
}
