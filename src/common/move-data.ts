import { PokemonCombatType } from "./types";

/** Note: statistics are for display only, actual logic & values are handled by Showdown. */
export interface PokemonMove {
    id: string,
    type: PokemonCombatType;
    category: 'physical' | 'special' | 'status';
    pwr: number;
    /** `null` for moves that always land. */
    acc: number | null;
    pp: number;
}

export const ALL_MOVES: { [key: string]: PokemonMove } = {
  "tackle": {
    "id": "tackle",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
},
  "growl": {
    "id": "growl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 40
},
  "vinewhip": {
    "id": "vinewhip",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 45,
    "acc": 100,
    "pp": 25
},
  "growth": {
    "id": "growth",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "leechseed": {
    "id": "leechseed",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 10
},
  "razorleaf": {
    "id": "razorleaf",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 55,
    "acc": 95,
    "pp": 25
},
  "poisonpowder": {
    "id": "poisonpowder",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 35
},
  "sleeppowder": {
    "id": "sleeppowder",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 15
},
  "seedbomb": {
    "id": "seedbomb",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "takedown": {
    "id": "takedown",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 90,
    "acc": 85,
    "pp": 20
},
  "sweetscent": {
    "id": "sweetscent",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "synthesis": {
    "id": "synthesis",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "worryseed": {
    "id": "worryseed",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "powerwhip": {
    "id": "powerwhip",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
},
  "solarbeam": {
    "id": "solarbeam",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "petaldance": {
    "id": "petaldance",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "petalblizzard": {
    "id": "petalblizzard",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "scratch": {
    "id": "scratch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
},
  "ember": {
    "id": "ember",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
},
  "smokescreen": {
    "id": "smokescreen",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "dragonbreath": {
    "id": "dragonbreath",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "firefang": {
    "id": "firefang",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
},
  "slash": {
    "id": "slash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "flamethrower": {
    "id": "flamethrower",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "scaryface": {
    "id": "scaryface",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "firespin": {
    "id": "firespin",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 35,
    "acc": 85,
    "pp": 15
},
  "inferno": {
    "id": "inferno",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 50,
    "pp": 5
},
  "flareblitz": {
    "id": "flareblitz",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
},
  "dragonclaw": {
    "id": "dragonclaw",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "heatwave": {
    "id": "heatwave",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 95,
    "acc": 90,
    "pp": 10
},
  "airslash": {
    "id": "airslash",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 75,
    "acc": 95,
    "pp": 15
},
  "tailwhip": {
    "id": "tailwhip",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
},
  "watergun": {
    "id": "watergun",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
},
  "withdraw": {
    "id": "withdraw",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
},
  "rapidspin": {
    "id": "rapidspin",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 40
},
  "bite": {
    "id": "bite",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
},
  "waterpulse": {
    "id": "waterpulse",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "protect": {
    "id": "protect",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "raindance": {
    "id": "raindance",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "aquatail": {
    "id": "aquatail",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
},
  "shellsmash": {
    "id": "shellsmash",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "irondefense": {
    "id": "irondefense",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "hydropump": {
    "id": "hydropump",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 80,
    "pp": 5
},
  "wavecrash": {
    "id": "wavecrash",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "flashcannon": {
    "id": "flashcannon",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "stringshot": {
    "id": "stringshot",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": 95,
    "pp": 40
},
  "bugbite": {
    "id": "bugbite",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "harden": {
    "id": "harden",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "gust": {
    "id": "gust",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 35
},
  "supersonic": {
    "id": "supersonic",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 55,
    "pp": 20
},
  "confusion": {
    "id": "confusion",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 25
},
  "stunspore": {
    "id": "stunspore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 30
},
  "psybeam": {
    "id": "psybeam",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "whirlwind": {
    "id": "whirlwind",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "safeguard": {
    "id": "safeguard",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 25
},
  "bugbuzz": {
    "id": "bugbuzz",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "tailwind": {
    "id": "tailwind",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "ragepowder": {
    "id": "ragepowder",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "quiverdance": {
    "id": "quiverdance",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "quickattack": {
    "id": "quickattack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "focusenergy": {
    "id": "focusenergy",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "laserfocus": {
    "id": "laserfocus",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "assurance": {
    "id": "assurance",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "crunch": {
    "id": "crunch",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "suckerpunch": {
    "id": "suckerpunch",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 5
},
  "superfang": {
    "id": "superfang",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 90,
    "pp": 10
},
  "doubleedge": {
    "id": "doubleedge",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
},
  "endeavor": {
    "id": "endeavor",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
},
  "swordsdance": {
    "id": "swordsdance",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "peck": {
    "id": "peck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 35,
    "acc": 100,
    "pp": 35
},
  "leer": {
    "id": "leer",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
},
  "furyattack": {
    "id": "furyattack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 85,
    "pp": 20
},
  "aerialace": {
    "id": "aerialace",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": null,
    "pp": 20
},
  "wingattack": {
    "id": "wingattack",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 35
},
  "agility": {
    "id": "agility",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "roost": {
    "id": "roost",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "drillpeck": {
    "id": "drillpeck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
},
  "drillrun": {
    "id": "drillrun",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 80,
    "acc": 95,
    "pp": 10
},
  "pluck": {
    "id": "pluck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "wrap": {
    "id": "wrap",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 90,
    "pp": 20
},
  "poisonsting": {
    "id": "poisonsting",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 15,
    "acc": 100,
    "pp": 35
},
  "glare": {
    "id": "glare",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
},
  "screech": {
    "id": "screech",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 40
},
  "acid": {
    "id": "acid",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "stockpile": {
    "id": "stockpile",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "swallow": {
    "id": "swallow",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "spitup": {
    "id": "spitup",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "acidspray": {
    "id": "acidspray",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "sludgebomb": {
    "id": "sludgebomb",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "gastroacid": {
    "id": "gastroacid",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "belch": {
    "id": "belch",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 120,
    "acc": 90,
    "pp": 10
},
  "haze": {
    "id": "haze",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "coil": {
    "id": "coil",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "gunkshot": {
    "id": "gunkshot",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 120,
    "acc": 80,
    "pp": 5
},
  "icefang": {
    "id": "icefang",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
},
  "thunderfang": {
    "id": "thunderfang",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
},
  "playnice": {
    "id": "playnice",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "sweetkiss": {
    "id": "sweetkiss",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 10
},
  "nuzzle": {
    "id": "nuzzle",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 20,
    "acc": 100,
    "pp": 20
},
  "nastyplot": {
    "id": "nastyplot",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "charm": {
    "id": "charm",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "thundershock": {
    "id": "thundershock",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "thunderwave": {
    "id": "thunderwave",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 20
},
  "doubleteam": {
    "id": "doubleteam",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "electroball": {
    "id": "electroball",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "feint": {
    "id": "feint",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 10
},
  "spark": {
    "id": "spark",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "irontail": {
    "id": "irontail",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 75,
    "pp": 15
},
  "discharge": {
    "id": "discharge",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "thunderbolt": {
    "id": "thunderbolt",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "lightscreen": {
    "id": "lightscreen",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "thunder": {
    "id": "thunder",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 10
},
  "thunderpunch": {
    "id": "thunderpunch",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
},
  "psychic": {
    "id": "psychic",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "defensecurl": {
    "id": "defensecurl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
},
  "sandattack": {
    "id": "sandattack",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "rollout": {
    "id": "rollout",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 30,
    "acc": 90,
    "pp": 20
},
  "furycutter": {
    "id": "furycutter",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 40,
    "acc": 95,
    "pp": 20
},
  "bulldoze": {
    "id": "bulldoze",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "swift": {
    "id": "swift",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
},
  "furyswipes": {
    "id": "furyswipes",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 18,
    "acc": 80,
    "pp": 15
},
  "dig": {
    "id": "dig",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "gyroball": {
    "id": "gyroball",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
},
  "sandstorm": {
    "id": "sandstorm",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "earthquake": {
    "id": "earthquake",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 10
},
  "mist": {
    "id": "mist",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "powdersnow": {
    "id": "powdersnow",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
},
  "metalclaw": {
    "id": "metalclaw",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 50,
    "acc": 95,
    "pp": 35
},
  "ironhead": {
    "id": "ironhead",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "snowscape": {
    "id": "snowscape",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "blizzard": {
    "id": "blizzard",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 5
},
  "crushclaw": {
    "id": "crushclaw",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 75,
    "acc": 95,
    "pp": 10
},
  "sandtomb": {
    "id": "sandtomb",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 35,
    "acc": 85,
    "pp": 15
},
  "iciclecrash": {
    "id": "iciclecrash",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 85,
    "acc": 90,
    "pp": 10
},
  "metalburst": {
    "id": "metalburst",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "iciclespear": {
    "id": "iciclespear",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 30
},
  "toxicspikes": {
    "id": "toxicspikes",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "doublekick": {
    "id": "doublekick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 30
},
  "helpinghand": {
    "id": "helpinghand",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "toxic": {
    "id": "toxic",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 10
},
  "flatter": {
    "id": "flatter",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "earthpower": {
    "id": "earthpower",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "superpower": {
    "id": "superpower",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "sludgewavebdsp": {
    "id": "sludgewavebdsp",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 10
},
  "hornattack": {
    "id": "hornattack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 25
},
  "poisonjab": {
    "id": "poisonjab",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
},
  "megahorn": {
    "id": "megahorn",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
},
  "sing": {
    "id": "sing",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 55,
    "pp": 15
},
  "disarmingvoice": {
    "id": "disarmingvoice",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 40,
    "acc": null,
    "pp": 15
},
  "splash": {
    "id": "splash",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
},
  "pound": {
    "id": "pound",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
},
  "copycat": {
    "id": "copycat",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "storedpower": {
    "id": "storedpower",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 10
},
  "encore": {
    "id": "encore",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 5
},
  "afteryou": {
    "id": "afteryou",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "lifedew": {
    "id": "lifedew",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "metronome": {
    "id": "metronome",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "moonlight": {
    "id": "moonlight",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "gravity": {
    "id": "gravity",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "meteormash": {
    "id": "meteormash",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
},
  "followme": {
    "id": "followme",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "cosmicpower": {
    "id": "cosmicpower",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "moonblast": {
    "id": "moonblast",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 15
},
  "healingwish": {
    "id": "healingwish",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "disable": {
    "id": "disable",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "spite": {
    "id": "spite",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "incinerate": {
    "id": "incinerate",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "confuseray": {
    "id": "confuseray",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "willowisp": {
    "id": "willowisp",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 15
},
  "extrasensory": {
    "id": "extrasensory",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 20
},
  "imprison": {
    "id": "imprison",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "fireblast": {
    "id": "fireblast",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 110,
    "acc": 85,
    "pp": 5
},
  "iceshard": {
    "id": "iceshard",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "icywind": {
    "id": "icywind",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
},
  "aurorabeam": {
    "id": "aurorabeam",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "icebeam": {
    "id": "icebeam",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "auroraveil": {
    "id": "auroraveil",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "freezedry": {
    "id": "freezedry",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "dazzlinggleam": {
    "id": "dazzlinggleam",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "echoedvoice": {
    "id": "echoedvoice",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 15
},
  "covet": {
    "id": "covet",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
},
  "round": {
    "id": "round",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "rest": {
    "id": "rest",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "bodyslam": {
    "id": "bodyslam",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 15
},
  "mimic": {
    "id": "mimic",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "hypervoice": {
    "id": "hypervoice",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "playrough": {
    "id": "playrough",
    "type": PokemonCombatType.fairy,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
},
  "absorb": {
    "id": "absorb",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 25
},
  "astonish": {
    "id": "astonish",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 15
},
  "meanlook": {
    "id": "meanlook",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "poisonfang": {
    "id": "poisonfang",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 15
},
  "quickguard": {
    "id": "quickguard",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "aircutter": {
    "id": "aircutter",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 60,
    "acc": 95,
    "pp": 25
},
  "venoshock": {
    "id": "venoshock",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
},
  "leechlife": {
    "id": "leechlife",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "megadrain": {
    "id": "megadrain",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 15
},
  "gigadrain": {
    "id": "gigadrain",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "grassyterrain": {
    "id": "grassyterrain",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "spore": {
    "id": "spore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "aromatherapy": {
    "id": "aromatherapy",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "xscissor": {
    "id": "xscissor",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "crosspoison": {
    "id": "crosspoison",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "zenheadbutt": {
    "id": "zenheadbutt",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 80,
    "acc": 90,
    "pp": 15
},
  "mudslap": {
    "id": "mudslap",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 10
},
  "fissure": {
    "id": "fissure",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
},
  "nightslash": {
    "id": "nightslash",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
},
  "triattack": {
    "id": "triattack",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "fakeout": {
    "id": "fakeout",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 10
},
  "payday": {
    "id": "payday",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "taunt": {
    "id": "taunt",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "honeclaws": {
    "id": "honeclaws",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "swagger": {
    "id": "swagger",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 15
},
  "metalsound": {
    "id": "metalsound",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 40
},
  "thrash": {
    "id": "thrash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "switcheroo": {
    "id": "switcheroo",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "powergem": {
    "id": "powergem",
    "type": PokemonCombatType.rock,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 20
},
  "quash": {
    "id": "quash",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "soak": {
    "id": "soak",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "psychup": {
    "id": "psychup",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "amnesia": {
    "id": "amnesia",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "wonderroom": {
    "id": "wonderroom",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "aquajet": {
    "id": "aquajet",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "lowkick": {
    "id": "lowkick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "seismictoss": {
    "id": "seismictoss",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "crosschop": {
    "id": "crosschop",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 80,
    "pp": 5
},
  "closecombat": {
    "id": "closecombat",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "stompingtantrum": {
    "id": "stompingtantrum",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "outrage": {
    "id": "outrage",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "finalgambit": {
    "id": "finalgambit",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 5
},
  "fling": {
    "id": "fling",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "ragefist": {
    "id": "ragefist",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "howl": {
    "id": "howl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
},
  "flamewheel": {
    "id": "flamewheel",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
},
  "retaliate": {
    "id": "retaliate",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 5
},
  "roar": {
    "id": "roar",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "reversal": {
    "id": "reversal",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "rockslide": {
    "id": "rockslide",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 75,
    "acc": 90,
    "pp": 10
},
  "extremespeed": {
    "id": "extremespeed",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 5
},
  "rockthrow": {
    "id": "rockthrow",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 50,
    "acc": 90,
    "pp": 15
},
  "ragingfury": {
    "id": "ragingfury",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "hypnosis": {
    "id": "hypnosis",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 60,
    "pp": 20
},
  "mudshot": {
    "id": "mudshot",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
},
  "bubblebeam": {
    "id": "bubblebeam",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "bellydrum": {
    "id": "bellydrum",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "circlethrow": {
    "id": "circlethrow",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 90,
    "pp": 10
},
  "dynamicpunch": {
    "id": "dynamicpunch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 50,
    "pp": 5
},
  "knockoff": {
    "id": "knockoff",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "slam": {
    "id": "slam",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 75,
    "pp": 20
},
  "leafstorm": {
    "id": "leafstorm",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
},
  "leafblade": {
    "id": "leafblade",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "hex": {
    "id": "hex",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
},
  "acidarmor": {
    "id": "acidarmor",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "surf": {
    "id": "surf",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "sludgewave": {
    "id": "sludgewave",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 10
},
  "reflecttype": {
    "id": "reflecttype",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "rockpolish": {
    "id": "rockpolish",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "smackdown": {
    "id": "smackdown",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 15
},
  "selfdestruct": {
    "id": "selfdestruct",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 200,
    "acc": 100,
    "pp": 5
},
  "stealthrock": {
    "id": "stealthrock",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "rockblast": {
    "id": "rockblast",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 10
},
  "explosion": {
    "id": "explosion",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 250,
    "acc": 100,
    "pp": 5
},
  "stoneedge": {
    "id": "stoneedge",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 100,
    "acc": 80,
    "pp": 5
},
  "charge": {
    "id": "charge",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "heavyslam": {
    "id": "heavyslam",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "flamecharge": {
    "id": "flamecharge",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 20
},
  "stomp": {
    "id": "stomp",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "fairywind": {
    "id": "fairywind",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "healpulse": {
    "id": "healpulse",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "smartstrike": {
    "id": "smartstrike",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
},
  "psychocut": {
    "id": "psychocut",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "curse": {
    "id": "curse",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "yawn": {
    "id": "yawn",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "headbutt": {
    "id": "headbutt",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
},
  "slackoff": {
    "id": "slackoff",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "futuresight": {
    "id": "futuresight",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "shellsidearm": {
    "id": "shellsidearm",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "magnetrise": {
    "id": "magnetrise",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "lockon": {
    "id": "lockon",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "zapcannon": {
    "id": "zapcannon",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 120,
    "acc": 50,
    "pp": 5
},
  "electricterrain": {
    "id": "electricterrain",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "cut": {
    "id": "cut",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 50,
    "acc": 95,
    "pp": 30
},
  "falseswipe": {
    "id": "falseswipe",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
},
  "bravebird": {
    "id": "bravebird",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
},
  "rocksmash": {
    "id": "rocksmash",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 15
},
  "brutalswing": {
    "id": "brutalswing",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "detect": {
    "id": "detect",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "defog": {
    "id": "defog",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "brickbreak": {
    "id": "brickbreak",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
},
  "doublehit": {
    "id": "doublehit",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 35,
    "acc": 90,
    "pp": 10
},
  "uproar": {
    "id": "uproar",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "acupressure": {
    "id": "acupressure",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "aquaring": {
    "id": "aquaring",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "brine": {
    "id": "brine",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
},
  "dive": {
    "id": "dive",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "sheercold": {
    "id": "sheercold",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 0,
    "acc": 30,
    "pp": 5
},
  "poisongas": {
    "id": "poisongas",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 40
},
  "sludge": {
    "id": "sludge",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "minimize": {
    "id": "minimize",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "memento": {
    "id": "memento",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "whirlpool": {
    "id": "whirlpool",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 35,
    "acc": 85,
    "pp": 15
},
  "razorshell": {
    "id": "razorshell",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 75,
    "acc": 95,
    "pp": 10
},
  "spikes": {
    "id": "spikes",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "lick": {
    "id": "lick",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 30
},
  "payback": {
    "id": "payback",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "nightshade": {
    "id": "nightshade",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "darkpulse": {
    "id": "darkpulse",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "shadowball": {
    "id": "shadowball",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "destinybond": {
    "id": "destinybond",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "dreameater": {
    "id": "dreameater",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 15
},
  "shadowpunch": {
    "id": "shadowpunch",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 60,
    "acc": null,
    "pp": 20
},
  "perishsong": {
    "id": "perishsong",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "psyshock": {
    "id": "psyshock",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "flail": {
    "id": "flail",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "crabhammer": {
    "id": "crabhammer",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
},
  "guillotine": {
    "id": "guillotine",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
},
  "wideguard": {
    "id": "wideguard",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "hammerarm": {
    "id": "hammerarm",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
},
  "eerieimpulse": {
    "id": "eerieimpulse",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "chargebeam": {
    "id": "chargebeam",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 50,
    "acc": 90,
    "pp": 10
},
  "mirrorcoat": {
    "id": "mirrorcoat",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "bulletseed": {
    "id": "bulletseed",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 30
},
  "energyball": {
    "id": "energyball",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "magneticflux": {
    "id": "magneticflux",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "chloroblast": {
    "id": "chloroblast",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 150,
    "acc": 95,
    "pp": 5
},
  "reflect": {
    "id": "reflect",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "woodhammer": {
    "id": "woodhammer",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
},
  "dragonhammer": {
    "id": "dragonhammer",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "bonerush": {
    "id": "bonerush",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 10
},
  "bonemerang": {
    "id": "bonemerang",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 50,
    "acc": 90,
    "pp": 10
},
  "shadowbone": {
    "id": "shadowbone",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "lowsweep": {
    "id": "lowsweep",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "endure": {
    "id": "endure",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "blazekick": {
    "id": "blazekick",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 85,
    "acc": 90,
    "pp": 10
},
  "megakick": {
    "id": "megakick",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 75,
    "pp": 5
},
  "highjumpkick": {
    "id": "highjumpkick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 130,
    "acc": 90,
    "pp": 10
},
  "axekick": {
    "id": "axekick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 90,
    "pp": 10
},
  "drainpunch": {
    "id": "drainpunch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "machpunch": {
    "id": "machpunch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "vacuumwave": {
    "id": "vacuumwave",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "bulletpunch": {
    "id": "bulletpunch",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "icepunch": {
    "id": "icepunch",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
},
  "firepunch": {
    "id": "firepunch",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
},
  "megapunch": {
    "id": "megapunch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 85,
    "pp": 20
},
  "counter": {
    "id": "counter",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "focuspunch": {
    "id": "focuspunch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 150,
    "acc": 100,
    "pp": 20
},
  "smog": {
    "id": "smog",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 30,
    "acc": 70,
    "pp": 20
},
  "clearsmog": {
    "id": "clearsmog",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 50,
    "acc": null,
    "pp": 15
},
  "strangesteam": {
    "id": "strangesteam",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 90,
    "acc": 95,
    "pp": 10
},
  "aromaticmist": {
    "id": "aromaticmist",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "mistyterrain": {
    "id": "mistyterrain",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "horndrill": {
    "id": "horndrill",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
},
  "softboiled": {
    "id": "softboiled",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "lastresort": {
    "id": "lastresort",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 140,
    "acc": 100,
    "pp": 5
},
  "bind": {
    "id": "bind",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 85,
    "pp": 20
},
  "ancientpower": {
    "id": "ancientpower",
    "type": PokemonCombatType.rock,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 5
},
  "tickle": {
    "id": "tickle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "ingrain": {
    "id": "ingrain",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "twister": {
    "id": "twister",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "dragonpulse": {
    "id": "dragonpulse",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "dragondance": {
    "id": "dragondance",
    "type": PokemonCombatType.dragon,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "waterfall": {
    "id": "waterfall",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "powerswap": {
    "id": "powerswap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "guardswap": {
    "id": "guardswap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "batonpass": {
    "id": "batonpass",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
},
  "roleplay": {
    "id": "roleplay",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "recycle": {
    "id": "recycle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "teeterdance": {
    "id": "teeterdance",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "allyswitch": {
    "id": "allyswitch",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "faketears": {
    "id": "faketears",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "lovelykiss": {
    "id": "lovelykiss",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 10
},
  "shockwave": {
    "id": "shockwave",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
},
  "gigaimpact": {
    "id": "gigaimpact",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 150,
    "acc": 90,
    "pp": 5
},
  "lavaplume": {
    "id": "lavaplume",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "sunnyday": {
    "id": "sunnyday",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "hyperbeam": {
    "id": "hyperbeam",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 150,
    "acc": 90,
    "pp": 5
},
  "workup": {
    "id": "workup",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "ragingbull": {
    "id": "ragingbull",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "hurricane": {
    "id": "hurricane",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 10
},
  "transform": {
    "id": "transform",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "babydolleyes": {
    "id": "babydolleyes",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
},
  "muddywater": {
    "id": "muddywater",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 85,
    "pp": 10
},
  "pinmissile": {
    "id": "pinmissile",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 25,
    "acc": 95,
    "pp": 20
},
  "conversion": {
    "id": "conversion",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "conversion2": {
    "id": "conversion2",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
},
  "recover": {
    "id": "recover",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "liquidation": {
    "id": "liquidation",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "block": {
    "id": "block",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "snore": {
    "id": "snore",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 15
},
  "sleeptalk": {
    "id": "sleeptalk",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "highhorsepower": {
    "id": "highhorsepower",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 95,
    "acc": 95,
    "pp": 10
},
  "freezingglare": {
    "id": "freezingglare",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "trickroom": {
    "id": "trickroom",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "thunderouskick": {
    "id": "thunderouskick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "bulkup": {
    "id": "bulkup",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "overheat": {
    "id": "overheat",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
},
  "skyattack": {
    "id": "skyattack",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 140,
    "acc": 90,
    "pp": 5
},
  "fierywrath": {
    "id": "fierywrath",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "dragontail": {
    "id": "dragontail",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 60,
    "acc": 90,
    "pp": 10
},
  "dragonrush": {
    "id": "dragonrush",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 100,
    "acc": 75,
    "pp": 10
},
  "aurasphere": {
    "id": "aurasphere",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 80,
    "acc": null,
    "pp": 20
},
  "psystrike": {
    "id": "psystrike",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 10
},
  "magicalleaf": {
    "id": "magicalleaf",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
},
  "eruption": {
    "id": "eruption",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "infernalparade": {
    "id": "infernalparade",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "strugglebug": {
    "id": "strugglebug",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 20
},
  "infestation": {
    "id": "infestation",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 20
},
  "shadowsneak": {
    "id": "shadowsneak",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
},
  "stickyweb": {
    "id": "stickyweb",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "toxicthread": {
    "id": "toxicthread",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "fellstinger": {
    "id": "fellstinger",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 25
},
  "wish": {
    "id": "wish",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "teleport": {
    "id": "teleport",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "psychoshift": {
    "id": "psychoshift",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "cottonspore": {
    "id": "cottonspore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 40
},
  "cottonguard": {
    "id": "cottonguard",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "bounce": {
    "id": "bounce",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 85,
    "acc": 85,
    "pp": 5
},
  "rocktomb": {
    "id": "rocktomb",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 60,
    "acc": 95,
    "pp": 15
},
  "tearfullook": {
    "id": "tearfullook",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "headsmash": {
    "id": "headsmash",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 150,
    "acc": 80,
    "pp": 5
},
  "acrobatics": {
    "id": "acrobatics",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 55,
    "acc": 100,
    "pp": 15
},
  "uturn": {
    "id": "uturn",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "poisontail": {
    "id": "poisontail",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 25
},
  "morningsun": {
    "id": "morningsun",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "snarl": {
    "id": "snarl",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
},
  "foulplay": {
    "id": "foulplay",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 95,
    "acc": 100,
    "pp": 15
},
  "torment": {
    "id": "torment",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "chillyreception": {
    "id": "chillyreception",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "eeriespell": {
    "id": "eeriespell",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 5
},
  "painsplit": {
    "id": "painsplit",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "hiddenpower": {
    "id": "hiddenpower",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "twinbeam": {
    "id": "twinbeam",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 10
},
  "hyperdrill": {
    "id": "hyperdrill",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "barbbarrage": {
    "id": "barbbarrage",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "powersplit": {
    "id": "powersplit",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "guardsplit": {
    "id": "guardsplit",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "powertrick": {
    "id": "powertrick",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "armthrust": {
    "id": "armthrust",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 15,
    "acc": 100,
    "pp": 20
},
  "throatchop": {
    "id": "throatchop",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "beatup": {
    "id": "beatup",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "strengthsap": {
    "id": "strengthsap",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "grudge": {
    "id": "grudge",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "octazooka": {
    "id": "octazooka",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 85,
    "pp": 10
},
  "present": {
    "id": "present",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 90,
    "pp": 15
},
  "steelwing": {
    "id": "steelwing",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 25
},
  "comeuppance": {
    "id": "comeuppance",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "calmmind": {
    "id": "calmmind",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "sketch": {
    "id": "sketch",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 1
},
  "triplekick": {
    "id": "triplekick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 10,
    "acc": 90,
    "pp": 10
},
  "healbell": {
    "id": "healbell",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "milkdrink": {
    "id": "milkdrink",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "sacredfire": {
    "id": "sacredfire",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 5
},
  "weatherball": {
    "id": "weatherball",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "aeroblast": {
    "id": "aeroblast",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 100,
    "acc": 95,
    "pp": 5
},
  "leafage": {
    "id": "leafage",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
},
  "shedtail": {
    "id": "shedtail",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "featherdance": {
    "id": "featherdance",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "thief": {
    "id": "thief",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
},
  "attract": {
    "id": "attract",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "drainingkiss": {
    "id": "drainingkiss",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "mysticalfire": {
    "id": "mysticalfire",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "forcepalm": {
    "id": "forcepalm",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "mindreader": {
    "id": "mindreader",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "shadowclaw": {
    "id": "shadowclaw",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
},
  "phantomforce": {
    "id": "phantomforce",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "boomburst": {
    "id": "boomburst",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 10
},
  "headlongrush": {
    "id": "headlongrush",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "facade": {
    "id": "facade",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "entrainment": {
    "id": "entrainment",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "tailglow": {
    "id": "tailglow",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "waterspout": {
    "id": "waterspout",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "nobleroar": {
    "id": "nobleroar",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
},
  "powertrip": {
    "id": "powertrip",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 20,
    "acc": 100,
    "pp": 10
},
  "spikyshield": {
    "id": "spikyshield",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "magicroom": {
    "id": "magicroom",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "hail": {
    "id": "hail",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "substitute": {
    "id": "substitute",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "trick": {
    "id": "trick",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "frostbreath": {
    "id": "frostbreath",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 60,
    "acc": 90,
    "pp": 10
},
  "dualwingbeat": {
    "id": "dualwingbeat",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 40,
    "acc": 90,
    "pp": 10
},
  "fly": {
    "id": "fly",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 90,
    "acc": 95,
    "pp": 15
},
  "mistball": {
    "id": "mistball",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 5
},
  "lusterpurge": {
    "id": "lusterpurge",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 5
},
  "simplebeam": {
    "id": "simplebeam",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "originpulse": {
    "id": "originpulse",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 85,
    "pp": 10
},
  "precipiceblades": {
    "id": "precipiceblades",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
},
  "dragonascent": {
    "id": "dragonascent",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "doomdesire": {
    "id": "doomdesire",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 5
},
  "skillswap": {
    "id": "skillswap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "psychoboost": {
    "id": "psychoboost",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 140,
    "acc": 90,
    "pp": 5
},
  "voltswitch": {
    "id": "voltswitch",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "wildcharge": {
    "id": "wildcharge",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "lunge": {
    "id": "lunge",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "attackorder": {
    "id": "attackorder",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "defendorder": {
    "id": "defendorder",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "flowershield": {
    "id": "flowershield",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "chatter": {
    "id": "chatter",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "confide": {
    "id": "confide",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "partingshot": {
    "id": "partingshot",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "grassknot": {
    "id": "grassknot",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "leaftornado": {
    "id": "leaftornado",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 65,
    "acc": 90,
    "pp": 10
},
  "rockwrecker": {
    "id": "rockwrecker",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 150,
    "acc": 90,
    "pp": 5
},
  "aquacutter": {
    "id": "aquacutter",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "sacredsword": {
    "id": "sacredsword",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "expandingforce": {
    "id": "expandingforce",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "mysticalpower": {
    "id": "mysticalpower",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 70,
    "acc": 90,
    "pp": 10
},
  "roaroftime": {
    "id": "roaroftime",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 150,
    "acc": 90,
    "pp": 5
},
  "spacialrend": {
    "id": "spacialrend",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 100,
    "acc": 95,
    "pp": 5
},
  "magmastorm": {
    "id": "magmastorm",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 75,
    "pp": 5
},
  "bodypress": {
    "id": "bodypress",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "crushgrip": {
    "id": "crushgrip",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
},
  "shadowforce": {
    "id": "shadowforce",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "lunardance": {
    "id": "lunardance",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "lunarblessing": {
    "id": "lunarblessing",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "takeheart": {
    "id": "takeheart",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "heartswap": {
    "id": "heartswap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "darkvoid": {
    "id": "darkvoid",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 50,
    "pp": 10
},
  "seedflare": {
    "id": "seedflare",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 85,
    "pp": 5
},
  "judgment": {
    "id": "judgment",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 10
},
  "vcreate": {
    "id": "vcreate",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 180,
    "acc": 95,
    "pp": 5
},
  "searingshot": {
    "id": "searingshot",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "heatcrash": {
    "id": "heatcrash",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "ceaselessedge": {
    "id": "ceaselessedge",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 65,
    "acc": 90,
    "pp": 15
},
  "magiccoat": {
    "id": "magiccoat",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "psychicterrain": {
    "id": "psychicterrain",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "revenge": {
    "id": "revenge",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "stormthrow": {
    "id": "stormthrow",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "vitalthrow": {
    "id": "vitalthrow",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
},
  "solarblade": {
    "id": "solarblade",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 125,
    "acc": 100,
    "pp": 10
},
  "victorydance": {
    "id": "victorydance",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "avalanche": {
    "id": "avalanche",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
},
  "craftyshield": {
    "id": "craftyshield",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "nightdaze": {
    "id": "nightdaze",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 85,
    "acc": 95,
    "pp": 10
},
  "bittermalice": {
    "id": "bittermalice",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "tailslap": {
    "id": "tailslap",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 25,
    "acc": 85,
    "pp": 10
},
  "hornleech": {
    "id": "hornleech",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "electroweb": {
    "id": "electroweb",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
},
  "visegrip": {
    "id": "visegrip",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 55,
    "acc": 100,
    "pp": 30
},
  "autotomize": {
    "id": "autotomize",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "geargrind": {
    "id": "geargrind",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 50,
    "acc": 85,
    "pp": 15
},
  "shiftgear": {
    "id": "shiftgear",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "gearup": {
    "id": "gearup",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "breakingswipe": {
    "id": "breakingswipe",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "watershuriken": {
    "id": "watershuriken",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 15,
    "acc": 100,
    "pp": 20
},
  "headcharge": {
    "id": "headcharge",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
},
  "esperwing": {
    "id": "esperwing",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "firelash": {
    "id": "firelash",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "fierydance": {
    "id": "fierydance",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "bleakwindstorm": {
    "id": "bleakwindstorm",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
},
  "wildboltstorm": {
    "id": "wildboltstorm",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
},
  "fusionflare": {
    "id": "fusionflare",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "blueflare": {
    "id": "blueflare",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 85,
    "pp": 5
},
  "fusionbolt": {
    "id": "fusionbolt",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "boltstrike": {
    "id": "boltstrike",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 130,
    "acc": 85,
    "pp": 5
},
  "sandsearstorm": {
    "id": "sandsearstorm",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
},
  "glaciate": {
    "id": "glaciate",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 65,
    "acc": 95,
    "pp": 10
},
  "iceburn": {
    "id": "iceburn",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 140,
    "acc": 90,
    "pp": 5
},
  "freezeshock": {
    "id": "freezeshock",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 140,
    "acc": 90,
    "pp": 5
},
  "secretsword": {
    "id": "secretsword",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "relicsong": {
    "id": "relicsong",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
},
  "technoblast": {
    "id": "technoblast",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "topsyturvy": {
    "id": "topsyturvy",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "flyingpress": {
    "id": "flyingpress",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 10
},
  "paraboliccharge": {
    "id": "paraboliccharge",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
},
  "shelter": {
    "id": "shelter",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "fairylock": {
    "id": "fairylock",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "branchpoke": {
    "id": "branchpoke",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
},
  "forestscurse": {
    "id": "forestscurse",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "mountaingale": {
    "id": "mountaingale",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 100,
    "acc": 85,
    "pp": 10
},
  "diamondstorm": {
    "id": "diamondstorm",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 5
},
  "hyperspacehole": {
    "id": "hyperspacehole",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": null,
    "pp": 5
},
  "hyperspacefury": {
    "id": "hyperspacefury",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 100,
    "acc": null,
    "pp": 5
},
  "steameruption": {
    "id": "steameruption",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 95,
    "pp": 5
},
  "scald": {
    "id": "scald",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "spiritshackle": {
    "id": "spiritshackle",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "triplearrows": {
    "id": "triplearrows",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "darkestlariat": {
    "id": "darkestlariat",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "sparklingaria": {
    "id": "sparklingaria",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "beakblast": {
    "id": "beakblast",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 15
},
  "icehammer": {
    "id": "icehammer",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
},
  "revelationdance": {
    "id": "revelationdance",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "pollenpuff": {
    "id": "pollenpuff",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
},
  "accelerock": {
    "id": "accelerock",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "banefulbunker": {
    "id": "banefulbunker",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "strength": {
    "id": "strength",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "tropkick": {
    "id": "tropkick",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
},
  "floralhealing": {
    "id": "floralhealing",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "instruct": {
    "id": "instruct",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "firstimpression": {
    "id": "firstimpression",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "shoreup": {
    "id": "shoreup",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "purify": {
    "id": "purify",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "multiattack": {
    "id": "multiattack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
},
  "shelltrap": {
    "id": "shelltrap",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "zingzap": {
    "id": "zingzap",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "psychicfangs": {
    "id": "psychicfangs",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "anchorshot": {
    "id": "anchorshot",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
},
  "clangingscales": {
    "id": "clangingscales",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 110,
    "acc": 100,
    "pp": 5
},
  "clangoroussoul": {
    "id": "clangoroussoul",
    "type": PokemonCombatType.dragon,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "naturesmadness": {
    "id": "naturesmadness",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 0,
    "acc": 90,
    "pp": 10
},
  "skullbash": {
    "id": "skullbash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 130,
    "acc": 100,
    "pp": 10
},
  "sunsteelstrike": {
    "id": "sunsteelstrike",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "moongeistbeam": {
    "id": "moongeistbeam",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "venomdrench": {
    "id": "venomdrench",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "poweruppunch": {
    "id": "poweruppunch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
},
  "speedswap": {
    "id": "speedswap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "photongeyser": {
    "id": "photongeyser",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "prismaticlaser": {
    "id": "prismaticlaser",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 160,
    "acc": 100,
    "pp": 10
},
  "fleurcannon": {
    "id": "fleurcannon",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
},
  "spectralthief": {
    "id": "spectralthief",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "mindblown": {
    "id": "mindblown",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "plasmafists": {
    "id": "plasmafists",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 15
},
  "doubleironbash": {
    "id": "doubleironbash",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 5
},
  "drumbeating": {
    "id": "drumbeating",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "pyroball": {
    "id": "pyroball",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 90,
    "pp": 5
},
  "courtchange": {
    "id": "courtchange",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "snipeshot": {
    "id": "snipeshot",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "stuffcheeks": {
    "id": "stuffcheeks",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "jawlock": {
    "id": "jawlock",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "electrify": {
    "id": "electrify",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
},
  "tarshot": {
    "id": "tarshot",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "gravapple": {
    "id": "gravapple",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "appleacid": {
    "id": "appleacid",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "overdrive": {
    "id": "overdrive",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "burnup": {
    "id": "burnup",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 100,
    "pp": 5
},
  "submission": {
    "id": "submission",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 80,
    "acc": 80,
    "pp": 20
},
  "octolock": {
    "id": "octolock",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
},
  "teatime": {
    "id": "teatime",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "magicpowder": {
    "id": "magicpowder",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
},
  "falsesurrender": {
    "id": "falsesurrender",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": null,
    "pp": 10
},
  "spiritbreak": {
    "id": "spiritbreak",
    "type": PokemonCombatType.fairy,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
},
  "obstruct": {
    "id": "obstruct",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "meteorassault": {
    "id": "meteorassault",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "decorate": {
    "id": "decorate",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "noretreat": {
    "id": "noretreat",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
},
  "aurawheel": {
    "id": "aurawheel",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 110,
    "acc": 100,
    "pp": 10
},
  "boltbeak": {
    "id": "boltbeak",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "fishiousrend": {
    "id": "fishiousrend",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
},
  "dragondarts": {
    "id": "dragondarts",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "dynamaxcannon": {
    "id": "dynamaxcannon",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "wickedblow": {
    "id": "wickedblow",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 5
},
  "surgingstrikes": {
    "id": "surgingstrikes",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 5
},
  "junglehealing": {
    "id": "junglehealing",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "thundercage": {
    "id": "thundercage",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 90,
    "pp": 15
},
  "dragonenergy": {
    "id": "dragonenergy",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
},
  "glaciallance": {
    "id": "glaciallance",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "astralbarrage": {
    "id": "astralbarrage",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "psyshieldbash": {
    "id": "psyshieldbash",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 10
},
  "stoneaxe": {
    "id": "stoneaxe",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 65,
    "acc": 90,
    "pp": 15
},
  "bloodmoon": {
    "id": "bloodmoon",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 5
},
  "direclaw": {
    "id": "direclaw",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "springtidestorm": {
    "id": "springtidestorm",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 5
},
  "flowertrick": {
    "id": "flowertrick",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
},
  "torchsong": {
    "id": "torchsong",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "aquastep": {
    "id": "aquastep",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "skittersmack": {
    "id": "skittersmack",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 10
},
  "silktrap": {
    "id": "silktrap",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "revivalblessing": {
    "id": "revivalblessing",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 1
},
  "doubleshock": {
    "id": "doubleshock",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "populationbomb": {
    "id": "populationbomb",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 20,
    "acc": 90,
    "pp": 10
},
  "tidyup": {
    "id": "tidyup",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "terrainpulse": {
    "id": "terrainpulse",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "saltcure": {
    "id": "saltcure",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 15
},
  "armorcannon": {
    "id": "armorcannon",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "bitterblade": {
    "id": "bitterblade",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
},
  "doodle": {
    "id": "doodle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
},
  "spicyextract": {
    "id": "spicyextract",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
},
  "luminacrash": {
    "id": "luminacrash",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "gigatonhammer": {
    "id": "gigatonhammer",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 160,
    "acc": 100,
    "pp": 5
},
  "tripledive": {
    "id": "tripledive",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 30,
    "acc": 95,
    "pp": 10
},
  "jetpunch": {
    "id": "jetpunch",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 15
},
  "flipturn": {
    "id": "flipturn",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
},
  "spinout": {
    "id": "spinout",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "mortalspin": {
    "id": "mortalspin",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 15
},
  "lastrespects": {
    "id": "lastrespects",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
},
  "icespinner": {
    "id": "icespinner",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "filletaway": {
    "id": "filletaway",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "orderup": {
    "id": "orderup",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
},
  "kowtowcleave": {
    "id": "kowtowcleave",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 85,
    "acc": null,
    "pp": 10
},
  "steelroller": {
    "id": "steelroller",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 130,
    "acc": 100,
    "pp": 5
},
  "glaiverush": {
    "id": "glaiverush",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "makeitrain": {
    "id": "makeitrain",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "ruination": {
    "id": "ruination",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 0,
    "acc": 90,
    "pp": 10
},
  "scaleshot": {
    "id": "scaleshot",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 20
},
  "collisioncourse": {
    "id": "collisioncourse",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "electrodrift": {
    "id": "electrodrift",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
},
  "hydrosteam": {
    "id": "hydrosteam",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "psyblade": {
    "id": "psyblade",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
},
  "syrupbomb": {
    "id": "syrupbomb",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 60,
    "acc": 85,
    "pp": 10
},
  "matchagotcha": {
    "id": "matchagotcha",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 80,
    "acc": 90,
    "pp": 15
},
  "ivycudgel": {
    "id": "ivycudgel",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 10
},
  "electroshot": {
    "id": "electroshot",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 130,
    "acc": 100,
    "pp": 10
},
  "ficklebeam": {
    "id": "ficklebeam",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 5
},
  "burningbulwark": {
    "id": "burningbulwark",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
},
  "thunderclap": {
    "id": "thunderclap",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 5
},
  "risingvoltage": {
    "id": "risingvoltage",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
},
  "mightycleave": {
    "id": "mightycleave",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 95,
    "acc": 100,
    "pp": 5
},
  "tachyoncutter": {
    "id": "tachyoncutter",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 50,
    "acc": null,
    "pp": 10
},
  "terastarstorm": {
    "id": "terastarstorm",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
},
  "malignantchain": {
    "id": "malignantchain",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
}
};
