/** Serializable pokemon data exchanged during a PvP battle handshake. */
export interface NetworkPokemonData {
    type: string;
    color: string;
    generation: string;
    originalSpriteSize: number;
    name: string;
    level: number;
    /** Showdown move IDs in learnset order */
    moveIds: string[];
    /** IVs in POKEMON_STAT_ORDER (hp, atk, def, sp_atk, sp_def, spe) */
    ivs: number[];
    /** EVs in POKEMON_STAT_ORDER */
    evs: number[];
    maxHp: number;
}

/** Newline-delimited JSON messages sent over the TCP connection. */
export type NetworkMessage =
    | { type: 'hello'; pokemon: NetworkPokemonData }
    | { type: 'move'; moveIndex: number }
    | { type: 'showdown'; text: string }
    | { type: 'forfeit' };
