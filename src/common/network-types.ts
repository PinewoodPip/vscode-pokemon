/** Per-pokemon data for one party member exchanged during a PvP handshake. */
export interface NetworkPartyMemberData {
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

/** Serializable party data exchanged during a PvP battle handshake.
 *  The party is pre-ordered: index 0 is always the lead pokemon. */
export interface NetworkPokemonData {
    party: NetworkPartyMemberData[];
    /** GitHub username of the player, if authenticated. */
    username?: string;
}

/** Newline-delimited JSON messages sent over the TCP connection. */
export type NetworkMessage =
    | { type: 'hello'; pokemon: NetworkPokemonData }
    | { type: 'move'; moveIndex: number }
    /** Voluntary switch: player chose to switch instead of using a move. */
    | { type: 'switch'; partyIndex: number }
    /** Forced switch: player's active pokemon fainted, they picked a replacement. */
    | { type: 'forced-switch'; partyIndex: number }
    | { type: 'showdown'; text: string }
    | { type: 'forfeit' };
