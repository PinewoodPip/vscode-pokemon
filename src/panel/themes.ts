import { PokemonCombatType } from "../common/types";

export const enum Theme {
    none = 'none',
    forest = 'forest',
    castle = 'castle',
    beach = 'beach',
    blackAndWhiteRoute = 'black-and-white-route',
    grassyRoute = 'grassy-route',
    seasideGazebo = 'seaside-gazebo',
    cabin = 'cabin',
    hauntedWoods = 'haunted-woods',
    coastalCave = 'coastal-cave',
}

export interface ThemeConfig {
    id: Theme;
    autoSpawnTypes: PokemonCombatType[]; // Types of pokemon that can spawn in this theme when using auto-spawn.
    backgroundSizeOverride?: string; // Override for background size CSS property.
    hasDarkAndSizeVariants?: boolean; // Whether this theme has a dark and size variants - used to denote legacy themes.
}

export const ALL_THEMES: ThemeConfig[] = [
    {
        id: Theme.none,
        autoSpawnTypes: [],
    },
    {
        id: Theme.forest,
        autoSpawnTypes: [PokemonCombatType.grass, PokemonCombatType.bug, PokemonCombatType.poison],
        hasDarkAndSizeVariants: true
    },
    {
        id: Theme.castle,
        autoSpawnTypes: [PokemonCombatType.fighting, PokemonCombatType.steel, PokemonCombatType.fire], // TODO remove fire once more fitting BGs exist for it
        hasDarkAndSizeVariants: true
    },
    {
        id: Theme.beach,
        autoSpawnTypes: [PokemonCombatType.water, PokemonCombatType.rock, PokemonCombatType.ground, PokemonCombatType.electric], // TODO remove electric once more fitting BGs exist for it
        hasDarkAndSizeVariants: true
    },
    {
        id: Theme.blackAndWhiteRoute,
        autoSpawnTypes: [PokemonCombatType.normal, PokemonCombatType.flying],
        hasDarkAndSizeVariants: true
    },
    {
        id: Theme.grassyRoute,
        autoSpawnTypes: [PokemonCombatType.grass, PokemonCombatType.bug, PokemonCombatType.poison],
        backgroundSizeOverride: '720px'
    },
    {
        id: Theme.seasideGazebo,
        autoSpawnTypes: [PokemonCombatType.water, PokemonCombatType.rock, PokemonCombatType.ground, PokemonCombatType.ice, PokemonCombatType.dragon], // TODO remove dragon, ice once more fitting BGs exist for them
        backgroundSizeOverride: '720px'
    },
    {
        id: Theme.cabin,
        autoSpawnTypes: [PokemonCombatType.normal, PokemonCombatType.fairy]
    },
    {
        id: Theme.hauntedWoods,
        autoSpawnTypes: [PokemonCombatType.psychic, PokemonCombatType.ghost, PokemonCombatType.dark]
    },
    {
        id: Theme.coastalCave,
        autoSpawnTypes: [PokemonCombatType.rock, PokemonCombatType.ground],
        backgroundSizeOverride: '320px'
    },
];

// Check that all pokemon types have at least one theme where they can spawn
const allTypes = Object.values(PokemonCombatType);
for (const type of allTypes) {
    const hasTheme = ALL_THEMES.some(theme => theme.autoSpawnTypes.includes(type));
    if (!hasTheme) {
        console.warn(`No theme exists that can spawn Pokemon type: ${type}`);
    }
}