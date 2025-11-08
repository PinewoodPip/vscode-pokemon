import { PokemonCombatType } from "../common/types";

export interface PokemonFoodConfig {
    id: string;
    name: string;
    hungerRestored: number;
    spritePath: string; // Relative to media folder.
    enjoyedByTypes: PokemonCombatType[];
}

export const ALL_FOOD: PokemonFoodConfig[] = [
    {
        id: "cherri_berry",
        name: "Cherri Berry",
        hungerRestored: 100,
        spritePath: "/food/cherri_berry.png",
        enjoyedByTypes: [PokemonCombatType.grass, PokemonCombatType.fairy],
    },
    {
        id: "chesto_berry",
        name: "Chesto Berry",
        hungerRestored: 100,
        spritePath: "/food/chesto_berry.png",
        enjoyedByTypes: [PokemonCombatType.normal, PokemonCombatType.water, PokemonCombatType.dark],
    },
    {
        id: "pecha_berry",
        name: "Pecha Berry",
        hungerRestored: 100,
        spritePath: "/food/pecha_berry.png",
        enjoyedByTypes: [PokemonCombatType.bug, PokemonCombatType.poison],
    },
    {
        id: "rawst_berry",
        name: "Rawst Berry",
        hungerRestored: 100,
        spritePath: "/food/rawst_berry.png",
        enjoyedByTypes: [PokemonCombatType.normal, PokemonCombatType.fire],
    },
    {
        id: "aspear_berry",
        name: "Aspear Berry",
        hungerRestored: 100,
        spritePath: "/food/aspear_berry.png",
        enjoyedByTypes: [PokemonCombatType.water, PokemonCombatType.ice, PokemonCombatType.electric, PokemonCombatType.ground],
    },
    {
        id: "leppa_berry",
        name: "Leppa Berry",
        hungerRestored: 100,
        spritePath: "/food/leppa_berry.png",
        enjoyedByTypes: [PokemonCombatType.normal],
    },
    {
        id: "oran_berry",
        name: "Oran Berry",
        hungerRestored: 100,
        spritePath: "/food/oran_berry.png",
        enjoyedByTypes: [PokemonCombatType.normal, PokemonCombatType.flying],
    },
    {
        id: "persim_berry",
        name: "Persim Berry",
        hungerRestored: 100,
        spritePath: "/food/persim_berry.png",
        enjoyedByTypes: [PokemonCombatType.psychic, PokemonCombatType.ghost, PokemonCombatType.dragon],
    },
    {
        id: "lum_berry",
        name: "Lum Berry",
        hungerRestored: 100,
        spritePath: "/food/lum_berry.png",
        enjoyedByTypes: [PokemonCombatType.normal, PokemonCombatType.fighting, PokemonCombatType.rock, PokemonCombatType.steel],
    }
];
