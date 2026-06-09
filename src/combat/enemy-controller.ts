import { PokemonMove } from "../common/move-data";

export interface EnemyController {
    selectMove(enemyMoves: PokemonMove[], enemyMovePP: number[]): Promise<number | null>;
    dispose(): void;
}
