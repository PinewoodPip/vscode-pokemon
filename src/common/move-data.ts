import { PokemonCombatType } from "./types";

/** Note: statistics are for display only, actual logic & values are handled by Showdown. */
export interface PokemonMove {
    id: string,
    name: string,
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
    "name": "Tackle",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
  },
  "growl": {
    "id": "growl",
    "name": "Growl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 40
  },
  "vinewhip": {
    "id": "vinewhip",
    "name": "Vine Whip",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 45,
    "acc": 100,
    "pp": 25
  },
  "growth": {
    "id": "growth",
    "name": "Growth",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "leechseed": {
    "id": "leechseed",
    "name": "Leech Seed",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 10
  },
  "razorleaf": {
    "id": "razorleaf",
    "name": "Razor Leaf",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 55,
    "acc": 95,
    "pp": 25
  },
  "poisonpowder": {
    "id": "poisonpowder",
    "name": "Poison Powder",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 35
  },
  "sleeppowder": {
    "id": "sleeppowder",
    "name": "Sleep Powder",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 15
  },
  "seedbomb": {
    "id": "seedbomb",
    "name": "Seed Bomb",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "takedown": {
    "id": "takedown",
    "name": "Take Down",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 90,
    "acc": 85,
    "pp": 20
  },
  "sweetscent": {
    "id": "sweetscent",
    "name": "Sweet Scent",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "synthesis": {
    "id": "synthesis",
    "name": "Synthesis",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "worryseed": {
    "id": "worryseed",
    "name": "Worry Seed",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "powerwhip": {
    "id": "powerwhip",
    "name": "Power Whip",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
  },
  "solarbeam": {
    "id": "solarbeam",
    "name": "Solar Beam",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "petaldance": {
    "id": "petaldance",
    "name": "Petal Dance",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "petalblizzard": {
    "id": "petalblizzard",
    "name": "Petal Blizzard",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "scratch": {
    "id": "scratch",
    "name": "Scratch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
  },
  "ember": {
    "id": "ember",
    "name": "Ember",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
  },
  "smokescreen": {
    "id": "smokescreen",
    "name": "Smokescreen",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "dragonbreath": {
    "id": "dragonbreath",
    "name": "Dragon Breath",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "firefang": {
    "id": "firefang",
    "name": "Fire Fang",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
  },
  "slash": {
    "id": "slash",
    "name": "Slash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "flamethrower": {
    "id": "flamethrower",
    "name": "Flamethrower",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "scaryface": {
    "id": "scaryface",
    "name": "Scary Face",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "firespin": {
    "id": "firespin",
    "name": "Fire Spin",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 35,
    "acc": 85,
    "pp": 15
  },
  "inferno": {
    "id": "inferno",
    "name": "Inferno",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 50,
    "pp": 5
  },
  "flareblitz": {
    "id": "flareblitz",
    "name": "Flare Blitz",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
  },
  "dragonclaw": {
    "id": "dragonclaw",
    "name": "Dragon Claw",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "heatwave": {
    "id": "heatwave",
    "name": "Heat Wave",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 95,
    "acc": 90,
    "pp": 10
  },
  "airslash": {
    "id": "airslash",
    "name": "Air Slash",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 75,
    "acc": 95,
    "pp": 15
  },
  "tailwhip": {
    "id": "tailwhip",
    "name": "Tail Whip",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
  },
  "watergun": {
    "id": "watergun",
    "name": "Water Gun",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
  },
  "withdraw": {
    "id": "withdraw",
    "name": "Withdraw",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "rapidspin": {
    "id": "rapidspin",
    "name": "Rapid Spin",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 40
  },
  "bite": {
    "id": "bite",
    "name": "Bite",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
  },
  "waterpulse": {
    "id": "waterpulse",
    "name": "Water Pulse",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "protect": {
    "id": "protect",
    "name": "Protect",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "raindance": {
    "id": "raindance",
    "name": "Rain Dance",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "aquatail": {
    "id": "aquatail",
    "name": "Aqua Tail",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
  },
  "shellsmash": {
    "id": "shellsmash",
    "name": "Shell Smash",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "irondefense": {
    "id": "irondefense",
    "name": "Iron Defense",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "hydropump": {
    "id": "hydropump",
    "name": "Hydro Pump",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 80,
    "pp": 5
  },
  "wavecrash": {
    "id": "wavecrash",
    "name": "Wave Crash",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "flashcannon": {
    "id": "flashcannon",
    "name": "Flash Cannon",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "stringshot": {
    "id": "stringshot",
    "name": "String Shot",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": 95,
    "pp": 40
  },
  "bugbite": {
    "id": "bugbite",
    "name": "Bug Bite",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "harden": {
    "id": "harden",
    "name": "Harden",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "gust": {
    "id": "gust",
    "name": "Gust",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 35
  },
  "supersonic": {
    "id": "supersonic",
    "name": "Supersonic",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 55,
    "pp": 20
  },
  "confusion": {
    "id": "confusion",
    "name": "Confusion",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 25
  },
  "stunspore": {
    "id": "stunspore",
    "name": "Stun Spore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 30
  },
  "psybeam": {
    "id": "psybeam",
    "name": "Psybeam",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "whirlwind": {
    "id": "whirlwind",
    "name": "Whirlwind",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "safeguard": {
    "id": "safeguard",
    "name": "Safeguard",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 25
  },
  "bugbuzz": {
    "id": "bugbuzz",
    "name": "Bug Buzz",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "tailwind": {
    "id": "tailwind",
    "name": "Tailwind",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "ragepowder": {
    "id": "ragepowder",
    "name": "Rage Powder",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "quiverdance": {
    "id": "quiverdance",
    "name": "Quiver Dance",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "poisonsting": {
    "id": "poisonsting",
    "name": "Poison Sting",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 15,
    "acc": 100,
    "pp": 35
  },
  "twineedle": {
    "id": "twineedle",
    "name": "Twineedle",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 20
  },
  "furyattack": {
    "id": "furyattack",
    "name": "Fury Attack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 85,
    "pp": 20
  },
  "rage": {
    "id": "rage",
    "name": "Rage",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 20,
    "acc": 100,
    "pp": 20
  },
  "pursuit": {
    "id": "pursuit",
    "name": "Pursuit",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "focusenergy": {
    "id": "focusenergy",
    "name": "Focus Energy",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "venoshock": {
    "id": "venoshock",
    "name": "Venoshock",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
  },
  "assurance": {
    "id": "assurance",
    "name": "Assurance",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "toxicspikes": {
    "id": "toxicspikes",
    "name": "Toxic Spikes",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "pinmissile": {
    "id": "pinmissile",
    "name": "Pin Missile",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 25,
    "acc": 95,
    "pp": 20
  },
  "poisonjab": {
    "id": "poisonjab",
    "name": "Poison Jab",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
  },
  "agility": {
    "id": "agility",
    "name": "Agility",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "endeavor": {
    "id": "endeavor",
    "name": "Endeavor",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
  },
  "fellstinger": {
    "id": "fellstinger",
    "name": "Fell Stinger",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 25
  },
  "peck": {
    "id": "peck",
    "name": "Peck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 35,
    "acc": 100,
    "pp": 35
  },
  "outrage": {
    "id": "outrage",
    "name": "Outrage",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "sandattack": {
    "id": "sandattack",
    "name": "Sand Attack",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "quickattack": {
    "id": "quickattack",
    "name": "Quick Attack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "twister": {
    "id": "twister",
    "name": "Twister",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "featherdance": {
    "id": "featherdance",
    "name": "Feather Dance",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "wingattack": {
    "id": "wingattack",
    "name": "Wing Attack",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 35
  },
  "roost": {
    "id": "roost",
    "name": "Roost",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "mirrormove": {
    "id": "mirrormove",
    "name": "Mirror Move",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "hurricane": {
    "id": "hurricane",
    "name": "Hurricane",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 10
  },
  "razorwind": {
    "id": "razorwind",
    "name": "Razor Wind",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "skyattack": {
    "id": "skyattack",
    "name": "Sky Attack",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 140,
    "acc": 90,
    "pp": 5
  },
  "laserfocus": {
    "id": "laserfocus",
    "name": "Laser Focus",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "crunch": {
    "id": "crunch",
    "name": "Crunch",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "suckerpunch": {
    "id": "suckerpunch",
    "name": "Sucker Punch",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 5
  },
  "superfang": {
    "id": "superfang",
    "name": "Super Fang",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 90,
    "pp": 10
  },
  "doubleedge": {
    "id": "doubleedge",
    "name": "Double-Edge",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
  },
  "swordsdance": {
    "id": "swordsdance",
    "name": "Swords Dance",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "leer": {
    "id": "leer",
    "name": "Leer",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
  },
  "aerialace": {
    "id": "aerialace",
    "name": "Aerial Ace",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "drillpeck": {
    "id": "drillpeck",
    "name": "Drill Peck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
  },
  "drillrun": {
    "id": "drillrun",
    "name": "Drill Run",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 80,
    "acc": 95,
    "pp": 10
  },
  "pluck": {
    "id": "pluck",
    "name": "Pluck",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "wrap": {
    "id": "wrap",
    "name": "Wrap",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 90,
    "pp": 20
  },
  "glare": {
    "id": "glare",
    "name": "Glare",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
  },
  "screech": {
    "id": "screech",
    "name": "Screech",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 40
  },
  "acid": {
    "id": "acid",
    "name": "Acid",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "stockpile": {
    "id": "stockpile",
    "name": "Stockpile",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "swallow": {
    "id": "swallow",
    "name": "Swallow",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "spitup": {
    "id": "spitup",
    "name": "Spit Up",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "acidspray": {
    "id": "acidspray",
    "name": "Acid Spray",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "sludgebomb": {
    "id": "sludgebomb",
    "name": "Sludge Bomb",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "gastroacid": {
    "id": "gastroacid",
    "name": "Gastro Acid",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "belch": {
    "id": "belch",
    "name": "Belch",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 120,
    "acc": 90,
    "pp": 10
  },
  "haze": {
    "id": "haze",
    "name": "Haze",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "coil": {
    "id": "coil",
    "name": "Coil",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "gunkshot": {
    "id": "gunkshot",
    "name": "Gunk Shot",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 120,
    "acc": 80,
    "pp": 5
  },
  "icefang": {
    "id": "icefang",
    "name": "Ice Fang",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
  },
  "thunderfang": {
    "id": "thunderfang",
    "name": "Thunder Fang",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 65,
    "acc": 95,
    "pp": 15
  },
  "playnice": {
    "id": "playnice",
    "name": "Play Nice",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "sweetkiss": {
    "id": "sweetkiss",
    "name": "Sweet Kiss",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 10
  },
  "nuzzle": {
    "id": "nuzzle",
    "name": "Nuzzle",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 20,
    "acc": 100,
    "pp": 20
  },
  "nastyplot": {
    "id": "nastyplot",
    "name": "Nasty Plot",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "charm": {
    "id": "charm",
    "name": "Charm",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "thundershock": {
    "id": "thundershock",
    "name": "Thunder Shock",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "thunderwave": {
    "id": "thunderwave",
    "name": "Thunder Wave",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 20
  },
  "doubleteam": {
    "id": "doubleteam",
    "name": "Double Team",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "electroball": {
    "id": "electroball",
    "name": "Electro Ball",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "feint": {
    "id": "feint",
    "name": "Feint",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 10
  },
  "spark": {
    "id": "spark",
    "name": "Spark",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "irontail": {
    "id": "irontail",
    "name": "Iron Tail",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 75,
    "pp": 15
  },
  "discharge": {
    "id": "discharge",
    "name": "Discharge",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "thunderbolt": {
    "id": "thunderbolt",
    "name": "Thunderbolt",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "lightscreen": {
    "id": "lightscreen",
    "name": "Light Screen",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "thunder": {
    "id": "thunder",
    "name": "Thunder",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 10
  },
  "thunderpunch": {
    "id": "thunderpunch",
    "name": "Thunder Punch",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
  },
  "psychic": {
    "id": "psychic",
    "name": "Psychic",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "defensecurl": {
    "id": "defensecurl",
    "name": "Defense Curl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "rollout": {
    "id": "rollout",
    "name": "Rollout",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 30,
    "acc": 90,
    "pp": 20
  },
  "furycutter": {
    "id": "furycutter",
    "name": "Fury Cutter",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 40,
    "acc": 95,
    "pp": 20
  },
  "bulldoze": {
    "id": "bulldoze",
    "name": "Bulldoze",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "swift": {
    "id": "swift",
    "name": "Swift",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "furyswipes": {
    "id": "furyswipes",
    "name": "Fury Swipes",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 18,
    "acc": 80,
    "pp": 15
  },
  "dig": {
    "id": "dig",
    "name": "Dig",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "gyroball": {
    "id": "gyroball",
    "name": "Gyro Ball",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
  },
  "sandstorm": {
    "id": "sandstorm",
    "name": "Sandstorm",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "earthquake": {
    "id": "earthquake",
    "name": "Earthquake",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 10
  },
  "mist": {
    "id": "mist",
    "name": "Mist",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "powdersnow": {
    "id": "powdersnow",
    "name": "Powder Snow",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 25
  },
  "metalclaw": {
    "id": "metalclaw",
    "name": "Metal Claw",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 50,
    "acc": 95,
    "pp": 35
  },
  "ironhead": {
    "id": "ironhead",
    "name": "Iron Head",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "snowscape": {
    "id": "snowscape",
    "name": "Snowscape",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "blizzard": {
    "id": "blizzard",
    "name": "Blizzard",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 110,
    "acc": 70,
    "pp": 5
  },
  "crushclaw": {
    "id": "crushclaw",
    "name": "Crush Claw",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 75,
    "acc": 95,
    "pp": 10
  },
  "sandtomb": {
    "id": "sandtomb",
    "name": "Sand Tomb",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 35,
    "acc": 85,
    "pp": 15
  },
  "iciclecrash": {
    "id": "iciclecrash",
    "name": "Icicle Crash",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 85,
    "acc": 90,
    "pp": 10
  },
  "metalburst": {
    "id": "metalburst",
    "name": "Metal Burst",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "iciclespear": {
    "id": "iciclespear",
    "name": "Icicle Spear",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 30
  },
  "doublekick": {
    "id": "doublekick",
    "name": "Double Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 30
  },
  "helpinghand": {
    "id": "helpinghand",
    "name": "Helping Hand",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "toxic": {
    "id": "toxic",
    "name": "Toxic",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 10
  },
  "flatter": {
    "id": "flatter",
    "name": "Flatter",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "earthpower": {
    "id": "earthpower",
    "name": "Earth Power",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "superpower": {
    "id": "superpower",
    "name": "Superpower",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "sludgewavebdsp": {
    "id": "sludgewavebdsp",
    "name": "Sludge WaveBDSP",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 10
  },
  "hornattack": {
    "id": "hornattack",
    "name": "Horn Attack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 25
  },
  "megahorn": {
    "id": "megahorn",
    "name": "Megahorn",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
  },
  "sing": {
    "id": "sing",
    "name": "Sing",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 55,
    "pp": 15
  },
  "disarmingvoice": {
    "id": "disarmingvoice",
    "name": "Disarming Voice",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 40,
    "acc": null,
    "pp": 15
  },
  "splash": {
    "id": "splash",
    "name": "Splash",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "pound": {
    "id": "pound",
    "name": "Pound",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 35
  },
  "copycat": {
    "id": "copycat",
    "name": "Copycat",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "storedpower": {
    "id": "storedpower",
    "name": "Stored Power",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 10
  },
  "encore": {
    "id": "encore",
    "name": "Encore",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 5
  },
  "afteryou": {
    "id": "afteryou",
    "name": "After You",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "lifedew": {
    "id": "lifedew",
    "name": "Life Dew",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "metronome": {
    "id": "metronome",
    "name": "Metronome",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "moonlight": {
    "id": "moonlight",
    "name": "Moonlight",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "gravity": {
    "id": "gravity",
    "name": "Gravity",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "meteormash": {
    "id": "meteormash",
    "name": "Meteor Mash",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
  },
  "followme": {
    "id": "followme",
    "name": "Follow Me",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "cosmicpower": {
    "id": "cosmicpower",
    "name": "Cosmic Power",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "moonblast": {
    "id": "moonblast",
    "name": "Moonblast",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 15
  },
  "healingwish": {
    "id": "healingwish",
    "name": "Healing Wish",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "disable": {
    "id": "disable",
    "name": "Disable",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "spite": {
    "id": "spite",
    "name": "Spite",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "incinerate": {
    "id": "incinerate",
    "name": "Incinerate",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "confuseray": {
    "id": "confuseray",
    "name": "Confuse Ray",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "willowisp": {
    "id": "willowisp",
    "name": "Will-O-Wisp",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 15
  },
  "extrasensory": {
    "id": "extrasensory",
    "name": "Extrasensory",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 20
  },
  "imprison": {
    "id": "imprison",
    "name": "Imprison",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "fireblast": {
    "id": "fireblast",
    "name": "Fire Blast",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 110,
    "acc": 85,
    "pp": 5
  },
  "iceshard": {
    "id": "iceshard",
    "name": "Ice Shard",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "icywind": {
    "id": "icywind",
    "name": "Icy Wind",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
  },
  "aurorabeam": {
    "id": "aurorabeam",
    "name": "Aurora Beam",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "icebeam": {
    "id": "icebeam",
    "name": "Ice Beam",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "auroraveil": {
    "id": "auroraveil",
    "name": "Aurora Veil",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "freezedry": {
    "id": "freezedry",
    "name": "Freeze-Dry",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "dazzlinggleam": {
    "id": "dazzlinggleam",
    "name": "Dazzling Gleam",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "echoedvoice": {
    "id": "echoedvoice",
    "name": "Echoed Voice",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 15
  },
  "covet": {
    "id": "covet",
    "name": "Covet",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
  },
  "round": {
    "id": "round",
    "name": "Round",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "rest": {
    "id": "rest",
    "name": "Rest",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "bodyslam": {
    "id": "bodyslam",
    "name": "Body Slam",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 15
  },
  "mimic": {
    "id": "mimic",
    "name": "Mimic",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "hypervoice": {
    "id": "hypervoice",
    "name": "Hyper Voice",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "playrough": {
    "id": "playrough",
    "name": "Play Rough",
    "type": PokemonCombatType.fairy,
    "category": "physical",
    "pwr": 90,
    "acc": 90,
    "pp": 10
  },
  "absorb": {
    "id": "absorb",
    "name": "Absorb",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 25
  },
  "astonish": {
    "id": "astonish",
    "name": "Astonish",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 15
  },
  "meanlook": {
    "id": "meanlook",
    "name": "Mean Look",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "poisonfang": {
    "id": "poisonfang",
    "name": "Poison Fang",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 15
  },
  "quickguard": {
    "id": "quickguard",
    "name": "Quick Guard",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "aircutter": {
    "id": "aircutter",
    "name": "Air Cutter",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 60,
    "acc": 95,
    "pp": 25
  },
  "leechlife": {
    "id": "leechlife",
    "name": "Leech Life",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "megadrain": {
    "id": "megadrain",
    "name": "Mega Drain",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 15
  },
  "gigadrain": {
    "id": "gigadrain",
    "name": "Giga Drain",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "grassyterrain": {
    "id": "grassyterrain",
    "name": "Grassy Terrain",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "spore": {
    "id": "spore",
    "name": "Spore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "aromatherapy": {
    "id": "aromatherapy",
    "name": "Aromatherapy",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "xscissor": {
    "id": "xscissor",
    "name": "X-Scissor",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "crosspoison": {
    "id": "crosspoison",
    "name": "Cross Poison",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "zenheadbutt": {
    "id": "zenheadbutt",
    "name": "Zen Headbutt",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 80,
    "acc": 90,
    "pp": 15
  },
  "mudslap": {
    "id": "mudslap",
    "name": "Mud-Slap",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 10
  },
  "fissure": {
    "id": "fissure",
    "name": "Fissure",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
  },
  "nightslash": {
    "id": "nightslash",
    "name": "Night Slash",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
  },
  "triattack": {
    "id": "triattack",
    "name": "Tri Attack",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "fakeout": {
    "id": "fakeout",
    "name": "Fake Out",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 10
  },
  "payday": {
    "id": "payday",
    "name": "Pay Day",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "taunt": {
    "id": "taunt",
    "name": "Taunt",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "honeclaws": {
    "id": "honeclaws",
    "name": "Hone Claws",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "swagger": {
    "id": "swagger",
    "name": "Swagger",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 15
  },
  "metalsound": {
    "id": "metalsound",
    "name": "Metal Sound",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": 85,
    "pp": 40
  },
  "thrash": {
    "id": "thrash",
    "name": "Thrash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "switcheroo": {
    "id": "switcheroo",
    "name": "Switcheroo",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "powergem": {
    "id": "powergem",
    "name": "Power Gem",
    "type": PokemonCombatType.rock,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 20
  },
  "quash": {
    "id": "quash",
    "name": "Quash",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "soak": {
    "id": "soak",
    "name": "Soak",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "psychup": {
    "id": "psychup",
    "name": "Psych Up",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "amnesia": {
    "id": "amnesia",
    "name": "Amnesia",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "wonderroom": {
    "id": "wonderroom",
    "name": "Wonder Room",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "aquajet": {
    "id": "aquajet",
    "name": "Aqua Jet",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "lowkick": {
    "id": "lowkick",
    "name": "Low Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "seismictoss": {
    "id": "seismictoss",
    "name": "Seismic Toss",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "crosschop": {
    "id": "crosschop",
    "name": "Cross Chop",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 80,
    "pp": 5
  },
  "closecombat": {
    "id": "closecombat",
    "name": "Close Combat",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "stompingtantrum": {
    "id": "stompingtantrum",
    "name": "Stomping Tantrum",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "finalgambit": {
    "id": "finalgambit",
    "name": "Final Gambit",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 5
  },
  "fling": {
    "id": "fling",
    "name": "Fling",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "ragefist": {
    "id": "ragefist",
    "name": "Rage Fist",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "howl": {
    "id": "howl",
    "name": "Howl",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "flamewheel": {
    "id": "flamewheel",
    "name": "Flame Wheel",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
  },
  "retaliate": {
    "id": "retaliate",
    "name": "Retaliate",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 5
  },
  "roar": {
    "id": "roar",
    "name": "Roar",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "reversal": {
    "id": "reversal",
    "name": "Reversal",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "rockslide": {
    "id": "rockslide",
    "name": "Rock Slide",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 75,
    "acc": 90,
    "pp": 10
  },
  "extremespeed": {
    "id": "extremespeed",
    "name": "Extreme Speed",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 5
  },
  "rockthrow": {
    "id": "rockthrow",
    "name": "Rock Throw",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 50,
    "acc": 90,
    "pp": 15
  },
  "ragingfury": {
    "id": "ragingfury",
    "name": "Raging Fury",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "hypnosis": {
    "id": "hypnosis",
    "name": "Hypnosis",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 60,
    "pp": 20
  },
  "mudshot": {
    "id": "mudshot",
    "name": "Mud Shot",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
  },
  "bubblebeam": {
    "id": "bubblebeam",
    "name": "Bubble Beam",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "bellydrum": {
    "id": "bellydrum",
    "name": "Belly Drum",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "circlethrow": {
    "id": "circlethrow",
    "name": "Circle Throw",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 90,
    "pp": 10
  },
  "dynamicpunch": {
    "id": "dynamicpunch",
    "name": "Dynamic Punch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 50,
    "pp": 5
  },
  "teleport": {
    "id": "teleport",
    "name": "Teleport",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "kinesis": {
    "id": "kinesis",
    "name": "Kinesis",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 80,
    "pp": 15
  },
  "miracleeye": {
    "id": "miracleeye",
    "name": "Miracle Eye",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "reflect": {
    "id": "reflect",
    "name": "Reflect",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "psychocut": {
    "id": "psychocut",
    "name": "Psycho Cut",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "recover": {
    "id": "recover",
    "name": "Recover",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "telekinesis": {
    "id": "telekinesis",
    "name": "Telekinesis",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "allyswitch": {
    "id": "allyswitch",
    "name": "Ally Switch",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "roleplay": {
    "id": "roleplay",
    "name": "Role Play",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "futuresight": {
    "id": "futuresight",
    "name": "Future Sight",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "trick": {
    "id": "trick",
    "name": "Trick",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "flash": {
    "id": "flash",
    "name": "Flash",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "nightshade": {
    "id": "nightshade",
    "name": "Night Shade",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "substitute": {
    "id": "substitute",
    "name": "Substitute",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "calmmind": {
    "id": "calmmind",
    "name": "Calm Mind",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "barrier": {
    "id": "barrier",
    "name": "Barrier",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "karatechop": {
    "id": "karatechop",
    "name": "Karate Chop",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 25
  },
  "foresight": {
    "id": "foresight",
    "name": "Foresight",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "lowsweep": {
    "id": "lowsweep",
    "name": "Low Sweep",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "revenge": {
    "id": "revenge",
    "name": "Revenge",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "knockoff": {
    "id": "knockoff",
    "name": "Knock Off",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "vitalthrow": {
    "id": "vitalthrow",
    "name": "Vital Throw",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
  },
  "wakeupslap": {
    "id": "wakeupslap",
    "name": "Wake-Up Slap",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 10
  },
  "dualchop": {
    "id": "dualchop",
    "name": "Dual Chop",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 40,
    "acc": 90,
    "pp": 15
  },
  "submission": {
    "id": "submission",
    "name": "Submission",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 80,
    "acc": 80,
    "pp": 20
  },
  "bulkup": {
    "id": "bulkup",
    "name": "Bulk Up",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "bide": {
    "id": "bide",
    "name": "Bide",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "brickbreak": {
    "id": "brickbreak",
    "name": "Brick Break",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
  },
  "strength": {
    "id": "strength",
    "name": "Strength",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "wideguard": {
    "id": "wideguard",
    "name": "Wide Guard",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "counter": {
    "id": "counter",
    "name": "Counter",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "slam": {
    "id": "slam",
    "name": "Slam",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 75,
    "pp": 20
  },
  "leafstorm": {
    "id": "leafstorm",
    "name": "Leaf Storm",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
  },
  "leafblade": {
    "id": "leafblade",
    "name": "Leaf Blade",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "hex": {
    "id": "hex",
    "name": "Hex",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
  },
  "acidarmor": {
    "id": "acidarmor",
    "name": "Acid Armor",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "surf": {
    "id": "surf",
    "name": "Surf",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "sludgewave": {
    "id": "sludgewave",
    "name": "Sludge Wave",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 10
  },
  "reflecttype": {
    "id": "reflecttype",
    "name": "Reflect Type",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "rockpolish": {
    "id": "rockpolish",
    "name": "Rock Polish",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "smackdown": {
    "id": "smackdown",
    "name": "Smack Down",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 15
  },
  "selfdestruct": {
    "id": "selfdestruct",
    "name": "Self-Destruct",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 200,
    "acc": 100,
    "pp": 5
  },
  "stealthrock": {
    "id": "stealthrock",
    "name": "Stealth Rock",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "rockblast": {
    "id": "rockblast",
    "name": "Rock Blast",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 10
  },
  "explosion": {
    "id": "explosion",
    "name": "Explosion",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 250,
    "acc": 100,
    "pp": 5
  },
  "stoneedge": {
    "id": "stoneedge",
    "name": "Stone Edge",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 100,
    "acc": 80,
    "pp": 5
  },
  "charge": {
    "id": "charge",
    "name": "Charge",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "heavyslam": {
    "id": "heavyslam",
    "name": "Heavy Slam",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "flamecharge": {
    "id": "flamecharge",
    "name": "Flame Charge",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 20
  },
  "stomp": {
    "id": "stomp",
    "name": "Stomp",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "fairywind": {
    "id": "fairywind",
    "name": "Fairy Wind",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "healpulse": {
    "id": "healpulse",
    "name": "Heal Pulse",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "smartstrike": {
    "id": "smartstrike",
    "name": "Smart Strike",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
  },
  "curse": {
    "id": "curse",
    "name": "Curse",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "yawn": {
    "id": "yawn",
    "name": "Yawn",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "headbutt": {
    "id": "headbutt",
    "name": "Headbutt",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
  },
  "slackoff": {
    "id": "slackoff",
    "name": "Slack Off",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "shellsidearm": {
    "id": "shellsidearm",
    "name": "Shell Side Arm",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "magnetrise": {
    "id": "magnetrise",
    "name": "Magnet Rise",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "lockon": {
    "id": "lockon",
    "name": "Lock-On",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "zapcannon": {
    "id": "zapcannon",
    "name": "Zap Cannon",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 120,
    "acc": 50,
    "pp": 5
  },
  "electricterrain": {
    "id": "electricterrain",
    "name": "Electric Terrain",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "cut": {
    "id": "cut",
    "name": "Cut",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 50,
    "acc": 95,
    "pp": 30
  },
  "falseswipe": {
    "id": "falseswipe",
    "name": "False Swipe",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
  },
  "bravebird": {
    "id": "bravebird",
    "name": "Brave Bird",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
  },
  "rocksmash": {
    "id": "rocksmash",
    "name": "Rock Smash",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 15
  },
  "brutalswing": {
    "id": "brutalswing",
    "name": "Brutal Swing",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "detect": {
    "id": "detect",
    "name": "Detect",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "defog": {
    "id": "defog",
    "name": "Defog",
    "type": PokemonCombatType.flying,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "doublehit": {
    "id": "doublehit",
    "name": "Double Hit",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 35,
    "acc": 90,
    "pp": 10
  },
  "uproar": {
    "id": "uproar",
    "name": "Uproar",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "acupressure": {
    "id": "acupressure",
    "name": "Acupressure",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "aquaring": {
    "id": "aquaring",
    "name": "Aqua Ring",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "brine": {
    "id": "brine",
    "name": "Brine",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 10
  },
  "dive": {
    "id": "dive",
    "name": "Dive",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "sheercold": {
    "id": "sheercold",
    "name": "Sheer Cold",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 0,
    "acc": 30,
    "pp": 5
  },
  "poisongas": {
    "id": "poisongas",
    "name": "Poison Gas",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 90,
    "pp": 40
  },
  "sludge": {
    "id": "sludge",
    "name": "Sludge",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "minimize": {
    "id": "minimize",
    "name": "Minimize",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "memento": {
    "id": "memento",
    "name": "Memento",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "whirlpool": {
    "id": "whirlpool",
    "name": "Whirlpool",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 35,
    "acc": 85,
    "pp": 15
  },
  "razorshell": {
    "id": "razorshell",
    "name": "Razor Shell",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 75,
    "acc": 95,
    "pp": 10
  },
  "spikes": {
    "id": "spikes",
    "name": "Spikes",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "lick": {
    "id": "lick",
    "name": "Lick",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 30
  },
  "payback": {
    "id": "payback",
    "name": "Payback",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "darkpulse": {
    "id": "darkpulse",
    "name": "Dark Pulse",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "shadowball": {
    "id": "shadowball",
    "name": "Shadow Ball",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "destinybond": {
    "id": "destinybond",
    "name": "Destiny Bond",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "dreameater": {
    "id": "dreameater",
    "name": "Dream Eater",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 15
  },
  "shadowpunch": {
    "id": "shadowpunch",
    "name": "Shadow Punch",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "perishsong": {
    "id": "perishsong",
    "name": "Perish Song",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "mudsport": {
    "id": "mudsport",
    "name": "Mud Sport",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "bind": {
    "id": "bind",
    "name": "Bind",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 85,
    "pp": 20
  },
  "rocktomb": {
    "id": "rocktomb",
    "name": "Rock Tomb",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 60,
    "acc": 95,
    "pp": 15
  },
  "psyshock": {
    "id": "psyshock",
    "name": "Psyshock",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "flail": {
    "id": "flail",
    "name": "Flail",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "crabhammer": {
    "id": "crabhammer",
    "name": "Crabhammer",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
  },
  "guillotine": {
    "id": "guillotine",
    "name": "Guillotine",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
  },
  "hammerarm": {
    "id": "hammerarm",
    "name": "Hammer Arm",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
  },
  "eerieimpulse": {
    "id": "eerieimpulse",
    "name": "Eerie Impulse",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "chargebeam": {
    "id": "chargebeam",
    "name": "Charge Beam",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 50,
    "acc": 90,
    "pp": 10
  },
  "mirrorcoat": {
    "id": "mirrorcoat",
    "name": "Mirror Coat",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "bulletseed": {
    "id": "bulletseed",
    "name": "Bullet Seed",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 30
  },
  "energyball": {
    "id": "energyball",
    "name": "Energy Ball",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "magneticflux": {
    "id": "magneticflux",
    "name": "Magnetic Flux",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "chloroblast": {
    "id": "chloroblast",
    "name": "Chloroblast",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 150,
    "acc": 95,
    "pp": 5
  },
  "woodhammer": {
    "id": "woodhammer",
    "name": "Wood Hammer",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
  },
  "dragonhammer": {
    "id": "dragonhammer",
    "name": "Dragon Hammer",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "bonerush": {
    "id": "bonerush",
    "name": "Bone Rush",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 10
  },
  "bonemerang": {
    "id": "bonemerang",
    "name": "Bonemerang",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 50,
    "acc": 90,
    "pp": 10
  },
  "shadowbone": {
    "id": "shadowbone",
    "name": "Shadow Bone",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "endure": {
    "id": "endure",
    "name": "Endure",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "blazekick": {
    "id": "blazekick",
    "name": "Blaze Kick",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 85,
    "acc": 90,
    "pp": 10
  },
  "megakick": {
    "id": "megakick",
    "name": "Mega Kick",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 75,
    "pp": 5
  },
  "highjumpkick": {
    "id": "highjumpkick",
    "name": "High Jump Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 130,
    "acc": 90,
    "pp": 10
  },
  "axekick": {
    "id": "axekick",
    "name": "Axe Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 120,
    "acc": 90,
    "pp": 10
  },
  "drainpunch": {
    "id": "drainpunch",
    "name": "Drain Punch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "machpunch": {
    "id": "machpunch",
    "name": "Mach Punch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "vacuumwave": {
    "id": "vacuumwave",
    "name": "Vacuum Wave",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "bulletpunch": {
    "id": "bulletpunch",
    "name": "Bullet Punch",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "icepunch": {
    "id": "icepunch",
    "name": "Ice Punch",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
  },
  "firepunch": {
    "id": "firepunch",
    "name": "Fire Punch",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
  },
  "megapunch": {
    "id": "megapunch",
    "name": "Mega Punch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 85,
    "pp": 20
  },
  "focuspunch": {
    "id": "focuspunch",
    "name": "Focus Punch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 150,
    "acc": 100,
    "pp": 20
  },
  "smog": {
    "id": "smog",
    "name": "Smog",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 30,
    "acc": 70,
    "pp": 20
  },
  "clearsmog": {
    "id": "clearsmog",
    "name": "Clear Smog",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 50,
    "acc": null,
    "pp": 15
  },
  "strangesteam": {
    "id": "strangesteam",
    "name": "Strange Steam",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 90,
    "acc": 95,
    "pp": 10
  },
  "aromaticmist": {
    "id": "aromaticmist",
    "name": "Aromatic Mist",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "mistyterrain": {
    "id": "mistyterrain",
    "name": "Misty Terrain",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "horndrill": {
    "id": "horndrill",
    "name": "Horn Drill",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 30,
    "pp": 5
  },
  "softboiled": {
    "id": "softboiled",
    "name": "Soft-Boiled",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "lastresort": {
    "id": "lastresort",
    "name": "Last Resort",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 140,
    "acc": 100,
    "pp": 5
  },
  "ancientpower": {
    "id": "ancientpower",
    "name": "Ancient Power",
    "type": PokemonCombatType.rock,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 5
  },
  "tickle": {
    "id": "tickle",
    "name": "Tickle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "ingrain": {
    "id": "ingrain",
    "name": "Ingrain",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "cometpunch": {
    "id": "cometpunch",
    "name": "Comet Punch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 18,
    "acc": 85,
    "pp": 15
  },
  "chipaway": {
    "id": "chipaway",
    "name": "Chip Away",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "dizzypunch": {
    "id": "dizzypunch",
    "name": "Dizzy Punch",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 10
  },
  "dragonpulse": {
    "id": "dragonpulse",
    "name": "Dragon Pulse",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "dragondance": {
    "id": "dragondance",
    "name": "Dragon Dance",
    "type": PokemonCombatType.dragon,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "waterfall": {
    "id": "waterfall",
    "name": "Waterfall",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "psywave": {
    "id": "psywave",
    "name": "Psywave",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "camouflage": {
    "id": "camouflage",
    "name": "Camouflage",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "spotlight": {
    "id": "spotlight",
    "name": "Spotlight",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "powerswap": {
    "id": "powerswap",
    "name": "Power Swap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "guardswap": {
    "id": "guardswap",
    "name": "Guard Swap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "batonpass": {
    "id": "batonpass",
    "name": "Baton Pass",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "recycle": {
    "id": "recycle",
    "name": "Recycle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "teeterdance": {
    "id": "teeterdance",
    "name": "Teeter Dance",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "faketears": {
    "id": "faketears",
    "name": "Fake Tears",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "lovelykiss": {
    "id": "lovelykiss",
    "name": "Lovely Kiss",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 75,
    "pp": 10
  },
  "shockwave": {
    "id": "shockwave",
    "name": "Shock Wave",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "gigaimpact": {
    "id": "gigaimpact",
    "name": "Giga Impact",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 150,
    "acc": 90,
    "pp": 5
  },
  "lavaplume": {
    "id": "lavaplume",
    "name": "Lava Plume",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "sunnyday": {
    "id": "sunnyday",
    "name": "Sunny Day",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "hyperbeam": {
    "id": "hyperbeam",
    "name": "Hyper Beam",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 150,
    "acc": 90,
    "pp": 5
  },
  "vicegrip": {
    "id": "vicegrip",
    "name": "Vice Grip",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 55,
    "acc": 100,
    "pp": 30
  },
  "stormthrow": {
    "id": "stormthrow",
    "name": "Storm Throw",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "workup": {
    "id": "workup",
    "name": "Work Up",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "ragingbull": {
    "id": "ragingbull",
    "name": "Raging Bull",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "transform": {
    "id": "transform",
    "name": "Transform",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "babydolleyes": {
    "id": "babydolleyes",
    "name": "Baby-Doll Eyes",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
  },
  "muddywater": {
    "id": "muddywater",
    "name": "Muddy Water",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 85,
    "pp": 10
  },
  "conversion": {
    "id": "conversion",
    "name": "Conversion",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "conversion2": {
    "id": "conversion2",
    "name": "Conversion 2",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 30
  },
  "liquidation": {
    "id": "liquidation",
    "name": "Liquidation",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "skydrop": {
    "id": "skydrop",
    "name": "Sky Drop",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "fly": {
    "id": "fly",
    "name": "Fly",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 90,
    "acc": 95,
    "pp": 15
  },
  "block": {
    "id": "block",
    "name": "Block",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "snore": {
    "id": "snore",
    "name": "Snore",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 15
  },
  "sleeptalk": {
    "id": "sleeptalk",
    "name": "Sleep Talk",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "highhorsepower": {
    "id": "highhorsepower",
    "name": "High Horsepower",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 95,
    "acc": 95,
    "pp": 10
  },
  "freezingglare": {
    "id": "freezingglare",
    "name": "Freezing Glare",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "trickroom": {
    "id": "trickroom",
    "name": "Trick Room",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "thunderouskick": {
    "id": "thunderouskick",
    "name": "Thunderous Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "overheat": {
    "id": "overheat",
    "name": "Overheat",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
  },
  "fierywrath": {
    "id": "fierywrath",
    "name": "Fiery Wrath",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "dragontail": {
    "id": "dragontail",
    "name": "Dragon Tail",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 60,
    "acc": 90,
    "pp": 10
  },
  "dragonrush": {
    "id": "dragonrush",
    "name": "Dragon Rush",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 100,
    "acc": 75,
    "pp": 10
  },
  "aurasphere": {
    "id": "aurasphere",
    "name": "Aura Sphere",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 80,
    "acc": null,
    "pp": 20
  },
  "psystrike": {
    "id": "psystrike",
    "name": "Psystrike",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 10
  },
  "magicalleaf": {
    "id": "magicalleaf",
    "name": "Magical Leaf",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "eruption": {
    "id": "eruption",
    "name": "Eruption",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "infernalparade": {
    "id": "infernalparade",
    "name": "Infernal Parade",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "strugglebug": {
    "id": "strugglebug",
    "name": "Struggle Bug",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 20
  },
  "infestation": {
    "id": "infestation",
    "name": "Infestation",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 20,
    "acc": 100,
    "pp": 20
  },
  "shadowsneak": {
    "id": "shadowsneak",
    "name": "Shadow Sneak",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 30
  },
  "stickyweb": {
    "id": "stickyweb",
    "name": "Sticky Web",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "toxicthread": {
    "id": "toxicthread",
    "name": "Toxic Thread",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "wish": {
    "id": "wish",
    "name": "Wish",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "psychoshift": {
    "id": "psychoshift",
    "name": "Psycho Shift",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "cottonspore": {
    "id": "cottonspore",
    "name": "Cotton Spore",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 40
  },
  "cottonguard": {
    "id": "cottonguard",
    "name": "Cotton Guard",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "bounce": {
    "id": "bounce",
    "name": "Bounce",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 85,
    "acc": 85,
    "pp": 5
  },
  "tearfullook": {
    "id": "tearfullook",
    "name": "Tearful Look",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "headsmash": {
    "id": "headsmash",
    "name": "Head Smash",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 150,
    "acc": 80,
    "pp": 5
  },
  "acrobatics": {
    "id": "acrobatics",
    "name": "Acrobatics",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 55,
    "acc": 100,
    "pp": 15
  },
  "uturn": {
    "id": "uturn",
    "name": "U-turn",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "poisontail": {
    "id": "poisontail",
    "name": "Poison Tail",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 25
  },
  "morningsun": {
    "id": "morningsun",
    "name": "Morning Sun",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "snarl": {
    "id": "snarl",
    "name": "Snarl",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
  },
  "foulplay": {
    "id": "foulplay",
    "name": "Foul Play",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 95,
    "acc": 100,
    "pp": 15
  },
  "torment": {
    "id": "torment",
    "name": "Torment",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "chillyreception": {
    "id": "chillyreception",
    "name": "Chilly Reception",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "eeriespell": {
    "id": "eeriespell",
    "name": "Eerie Spell",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 5
  },
  "painsplit": {
    "id": "painsplit",
    "name": "Pain Split",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "hiddenpower": {
    "id": "hiddenpower",
    "name": "Hidden Power",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "twinbeam": {
    "id": "twinbeam",
    "name": "Twin Beam",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 40,
    "acc": 100,
    "pp": 10
  },
  "hyperdrill": {
    "id": "hyperdrill",
    "name": "Hyper Drill",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "autotomize": {
    "id": "autotomize",
    "name": "Autotomize",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "barbbarrage": {
    "id": "barbbarrage",
    "name": "Barb Barrage",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "powersplit": {
    "id": "powersplit",
    "name": "Power Split",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "guardsplit": {
    "id": "guardsplit",
    "name": "Guard Split",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "powertrick": {
    "id": "powertrick",
    "name": "Power Trick",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "armthrust": {
    "id": "armthrust",
    "name": "Arm Thrust",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 15,
    "acc": 100,
    "pp": 20
  },
  "throatchop": {
    "id": "throatchop",
    "name": "Throat Chop",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "beatup": {
    "id": "beatup",
    "name": "Beat Up",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "strengthsap": {
    "id": "strengthsap",
    "name": "Strength Sap",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "grudge": {
    "id": "grudge",
    "name": "Grudge",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "octazooka": {
    "id": "octazooka",
    "name": "Octazooka",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 65,
    "acc": 85,
    "pp": 10
  },
  "present": {
    "id": "present",
    "name": "Present",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 90,
    "pp": 15
  },
  "steelwing": {
    "id": "steelwing",
    "name": "Steel Wing",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 25
  },
  "comeuppance": {
    "id": "comeuppance",
    "name": "Comeuppance",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "sketch": {
    "id": "sketch",
    "name": "Sketch",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 1
  },
  "triplekick": {
    "id": "triplekick",
    "name": "Triple Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 10,
    "acc": 90,
    "pp": 10
  },
  "healbell": {
    "id": "healbell",
    "name": "Heal Bell",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "milkdrink": {
    "id": "milkdrink",
    "name": "Milk Drink",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "sacredfire": {
    "id": "sacredfire",
    "name": "Sacred Fire",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 5
  },
  "weatherball": {
    "id": "weatherball",
    "name": "Weather Ball",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "aeroblast": {
    "id": "aeroblast",
    "name": "Aeroblast",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 100,
    "acc": 95,
    "pp": 5
  },
  "leafage": {
    "id": "leafage",
    "name": "Leafage",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
  },
  "shedtail": {
    "id": "shedtail",
    "name": "Shed Tail",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "thief": {
    "id": "thief",
    "name": "Thief",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 25
  },
  "attract": {
    "id": "attract",
    "name": "Attract",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "drainingkiss": {
    "id": "drainingkiss",
    "name": "Draining Kiss",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "mysticalfire": {
    "id": "mysticalfire",
    "name": "Mystical Fire",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "forcepalm": {
    "id": "forcepalm",
    "name": "Force Palm",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "mindreader": {
    "id": "mindreader",
    "name": "Mind Reader",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "shadowclaw": {
    "id": "shadowclaw",
    "name": "Shadow Claw",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
  },
  "phantomforce": {
    "id": "phantomforce",
    "name": "Phantom Force",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "boomburst": {
    "id": "boomburst",
    "name": "Boomburst",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 10
  },
  "headlongrush": {
    "id": "headlongrush",
    "name": "Headlong Rush",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "facade": {
    "id": "facade",
    "name": "Facade",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "feintattack": {
    "id": "feintattack",
    "name": "Feint Attack",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 60,
    "acc": null,
    "pp": 20
  },
  "odorsleuth": {
    "id": "odorsleuth",
    "name": "Odor Sleuth",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 40
  },
  "wildcharge": {
    "id": "wildcharge",
    "name": "Wild Charge",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "entrainment": {
    "id": "entrainment",
    "name": "Entrainment",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "tailglow": {
    "id": "tailglow",
    "name": "Tail Glow",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "grasswhistle": {
    "id": "grasswhistle",
    "name": "Grass Whistle",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 55,
    "pp": 15
  },
  "skullbash": {
    "id": "skullbash",
    "name": "Skull Bash",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 130,
    "acc": 100,
    "pp": 10
  },
  "waterspout": {
    "id": "waterspout",
    "name": "Water Spout",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "nobleroar": {
    "id": "nobleroar",
    "name": "Noble Roar",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 30
  },
  "powertrip": {
    "id": "powertrip",
    "name": "Power Trip",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 20,
    "acc": 100,
    "pp": 10
  },
  "spikyshield": {
    "id": "spikyshield",
    "name": "Spiky Shield",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "magicroom": {
    "id": "magicroom",
    "name": "Magic Room",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "hail": {
    "id": "hail",
    "name": "Hail",
    "type": PokemonCombatType.ice,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "mefirst": {
    "id": "mefirst",
    "name": "Me First",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "frostbreath": {
    "id": "frostbreath",
    "name": "Frost Breath",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 60,
    "acc": 90,
    "pp": 10
  },
  "dualwingbeat": {
    "id": "dualwingbeat",
    "name": "Dual Wingbeat",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 40,
    "acc": 90,
    "pp": 10
  },
  "mistball": {
    "id": "mistball",
    "name": "Mist Ball",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 5
  },
  "lusterpurge": {
    "id": "lusterpurge",
    "name": "Luster Purge",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 95,
    "acc": 100,
    "pp": 5
  },
  "simplebeam": {
    "id": "simplebeam",
    "name": "Simple Beam",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "originpulse": {
    "id": "originpulse",
    "name": "Origin Pulse",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 85,
    "pp": 10
  },
  "precipiceblades": {
    "id": "precipiceblades",
    "name": "Precipice Blades",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 120,
    "acc": 85,
    "pp": 10
  },
  "dragonascent": {
    "id": "dragonascent",
    "name": "Dragon Ascent",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "doomdesire": {
    "id": "doomdesire",
    "name": "Doom Desire",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 5
  },
  "skillswap": {
    "id": "skillswap",
    "name": "Skill Swap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "psychoboost": {
    "id": "psychoboost",
    "name": "Psycho Boost",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 140,
    "acc": 90,
    "pp": 5
  },
  "voltswitch": {
    "id": "voltswitch",
    "name": "Volt Switch",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "watersport": {
    "id": "watersport",
    "name": "Water Sport",
    "type": PokemonCombatType.water,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "venomdrench": {
    "id": "venomdrench",
    "name": "Venom Drench",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "lunge": {
    "id": "lunge",
    "name": "Lunge",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "attackorder": {
    "id": "attackorder",
    "name": "Attack Order",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "defendorder": {
    "id": "defendorder",
    "name": "Defend Order",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "flowershield": {
    "id": "flowershield",
    "name": "Flower Shield",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "frustration": {
    "id": "frustration",
    "name": "Frustration",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "jumpkick": {
    "id": "jumpkick",
    "name": "Jump Kick",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 10
  },
  "return": {
    "id": "return",
    "name": "Return",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "rototiller": {
    "id": "rototiller",
    "name": "Rototiller",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "magiccoat": {
    "id": "magiccoat",
    "name": "Magic Coat",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "chatter": {
    "id": "chatter",
    "name": "Chatter",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "confide": {
    "id": "confide",
    "name": "Confide",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "partingshot": {
    "id": "partingshot",
    "name": "Parting Shot",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "grassknot": {
    "id": "grassknot",
    "name": "Grass Knot",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "leaftornado": {
    "id": "leaftornado",
    "name": "Leaf Tornado",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 65,
    "acc": 90,
    "pp": 10
  },
  "rockwrecker": {
    "id": "rockwrecker",
    "name": "Rock Wrecker",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 150,
    "acc": 90,
    "pp": 5
  },
  "aquacutter": {
    "id": "aquacutter",
    "name": "Aqua Cutter",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "sacredsword": {
    "id": "sacredsword",
    "name": "Sacred Sword",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "expandingforce": {
    "id": "expandingforce",
    "name": "Expanding Force",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "mysticalpower": {
    "id": "mysticalpower",
    "name": "Mystical Power",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 70,
    "acc": 90,
    "pp": 10
  },
  "roaroftime": {
    "id": "roaroftime",
    "name": "Roar of Time",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 150,
    "acc": 90,
    "pp": 5
  },
  "spacialrend": {
    "id": "spacialrend",
    "name": "Spacial Rend",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 100,
    "acc": 95,
    "pp": 5
  },
  "magmastorm": {
    "id": "magmastorm",
    "name": "Magma Storm",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 75,
    "pp": 5
  },
  "bodypress": {
    "id": "bodypress",
    "name": "Body Press",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "crushgrip": {
    "id": "crushgrip",
    "name": "Crush Grip",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 5
  },
  "shadowforce": {
    "id": "shadowforce",
    "name": "Shadow Force",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "lunardance": {
    "id": "lunardance",
    "name": "Lunar Dance",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "lunarblessing": {
    "id": "lunarblessing",
    "name": "Lunar Blessing",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "takeheart": {
    "id": "takeheart",
    "name": "Take Heart",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "heartswap": {
    "id": "heartswap",
    "name": "Heart Swap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "darkvoid": {
    "id": "darkvoid",
    "name": "Dark Void",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 50,
    "pp": 10
  },
  "seedflare": {
    "id": "seedflare",
    "name": "Seed Flare",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 120,
    "acc": 85,
    "pp": 5
  },
  "judgment": {
    "id": "judgment",
    "name": "Judgment",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 10
  },
  "vcreate": {
    "id": "vcreate",
    "name": "V-create",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 180,
    "acc": 95,
    "pp": 5
  },
  "searingshot": {
    "id": "searingshot",
    "name": "Searing Shot",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "heatcrash": {
    "id": "heatcrash",
    "name": "Heat Crash",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "ceaselessedge": {
    "id": "ceaselessedge",
    "name": "Ceaseless Edge",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 65,
    "acc": 90,
    "pp": 15
  },
  "hyperfang": {
    "id": "hyperfang",
    "name": "Hyper Fang",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 80,
    "acc": 90,
    "pp": 15
  },
  "naturalgift": {
    "id": "naturalgift",
    "name": "Natural Gift",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "flameburst": {
    "id": "flameburst",
    "name": "Flame Burst",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 15
  },
  "scald": {
    "id": "scald",
    "name": "Scald",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "psychicterrain": {
    "id": "psychicterrain",
    "name": "Psychic Terrain",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "refresh": {
    "id": "refresh",
    "name": "Refresh",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "doubleslap": {
    "id": "doubleslap",
    "name": "Double Slap",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 15,
    "acc": 85,
    "pp": 10
  },
  "secretpower": {
    "id": "secretpower",
    "name": "Secret Power",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "steamroller": {
    "id": "steamroller",
    "name": "Steamroller",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "rockclimb": {
    "id": "rockclimb",
    "name": "Rock Climb",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 90,
    "acc": 85,
    "pp": 20
  },
  "solarblade": {
    "id": "solarblade",
    "name": "Solar Blade",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 125,
    "acc": 100,
    "pp": 10
  },
  "victorydance": {
    "id": "victorydance",
    "name": "Victory Dance",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "avalanche": {
    "id": "avalanche",
    "name": "Avalanche",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 10
  },
  "craftyshield": {
    "id": "craftyshield",
    "name": "Crafty Shield",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "nightdaze": {
    "id": "nightdaze",
    "name": "Night Daze",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 85,
    "acc": 95,
    "pp": 10
  },
  "bittermalice": {
    "id": "bittermalice",
    "name": "Bitter Malice",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "tailslap": {
    "id": "tailslap",
    "name": "Tail Slap",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 25,
    "acc": 85,
    "pp": 10
  },
  "mirrorshot": {
    "id": "mirrorshot",
    "name": "Mirror Shot",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 65,
    "acc": 85,
    "pp": 10
  },
  "hornleech": {
    "id": "hornleech",
    "name": "Horn Leech",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "electroweb": {
    "id": "electroweb",
    "name": "Electroweb",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 55,
    "acc": 95,
    "pp": 15
  },
  "visegrip": {
    "id": "visegrip",
    "name": "Vise Grip",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 55,
    "acc": 100,
    "pp": 30
  },
  "geargrind": {
    "id": "geargrind",
    "name": "Gear Grind",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 50,
    "acc": 85,
    "pp": 15
  },
  "shiftgear": {
    "id": "shiftgear",
    "name": "Shift Gear",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "gearup": {
    "id": "gearup",
    "name": "Gear Up",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "breakingswipe": {
    "id": "breakingswipe",
    "name": "Breaking Swipe",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "watershuriken": {
    "id": "watershuriken",
    "name": "Water Shuriken",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 15,
    "acc": 100,
    "pp": 20
  },
  "mudbomb": {
    "id": "mudbomb",
    "name": "Mud Bomb",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 65,
    "acc": 85,
    "pp": 10
  },
  "headcharge": {
    "id": "headcharge",
    "name": "Head Charge",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 15
  },
  "esperwing": {
    "id": "esperwing",
    "name": "Esper Wing",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "firelash": {
    "id": "firelash",
    "name": "Fire Lash",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "fierydance": {
    "id": "fierydance",
    "name": "Fiery Dance",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "bleakwindstorm": {
    "id": "bleakwindstorm",
    "name": "Bleakwind Storm",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
  },
  "wildboltstorm": {
    "id": "wildboltstorm",
    "name": "Wildbolt Storm",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
  },
  "fusionflare": {
    "id": "fusionflare",
    "name": "Fusion Flare",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "blueflare": {
    "id": "blueflare",
    "name": "Blue Flare",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 85,
    "pp": 5
  },
  "fusionbolt": {
    "id": "fusionbolt",
    "name": "Fusion Bolt",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "boltstrike": {
    "id": "boltstrike",
    "name": "Bolt Strike",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 130,
    "acc": 85,
    "pp": 5
  },
  "sandsearstorm": {
    "id": "sandsearstorm",
    "name": "Sandsear Storm",
    "type": PokemonCombatType.ground,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 10
  },
  "glaciate": {
    "id": "glaciate",
    "name": "Glaciate",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 65,
    "acc": 95,
    "pp": 10
  },
  "iceburn": {
    "id": "iceburn",
    "name": "Ice Burn",
    "type": PokemonCombatType.ice,
    "category": "special",
    "pwr": 140,
    "acc": 90,
    "pp": 5
  },
  "freezeshock": {
    "id": "freezeshock",
    "name": "Freeze Shock",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 140,
    "acc": 90,
    "pp": 5
  },
  "secretsword": {
    "id": "secretsword",
    "name": "Secret Sword",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "relicsong": {
    "id": "relicsong",
    "name": "Relic Song",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 75,
    "acc": 100,
    "pp": 10
  },
  "technoblast": {
    "id": "technoblast",
    "name": "Techno Blast",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "skyuppercut": {
    "id": "skyuppercut",
    "name": "Sky Uppercut",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 85,
    "acc": 90,
    "pp": 15
  },
  "kingsshield": {
    "id": "kingsshield",
    "name": "King's Shield",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "topsyturvy": {
    "id": "topsyturvy",
    "name": "Topsy-Turvy",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "clamp": {
    "id": "clamp",
    "name": "Clamp",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 35,
    "acc": 85,
    "pp": 15
  },
  "paraboliccharge": {
    "id": "paraboliccharge",
    "name": "Parabolic Charge",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 65,
    "acc": 100,
    "pp": 20
  },
  "electrify": {
    "id": "electrify",
    "name": "Electrify",
    "type": PokemonCombatType.electric,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "naturepower": {
    "id": "naturepower",
    "name": "Nature Power",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "flyingpress": {
    "id": "flyingpress",
    "name": "Flying Press",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 10
  },
  "shelter": {
    "id": "shelter",
    "name": "Shelter",
    "type": PokemonCombatType.steel,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "fairylock": {
    "id": "fairylock",
    "name": "Fairy Lock",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "branchpoke": {
    "id": "branchpoke",
    "name": "Branch Poke",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 40
  },
  "forestscurse": {
    "id": "forestscurse",
    "name": "Forest's Curse",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "trickortreat": {
    "id": "trickortreat",
    "name": "Trick-or-Treat",
    "type": PokemonCombatType.ghost,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "mountaingale": {
    "id": "mountaingale",
    "name": "Mountain Gale",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 100,
    "acc": 85,
    "pp": 10
  },
  "geomancy": {
    "id": "geomancy",
    "name": "Geomancy",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "oblivionwing": {
    "id": "oblivionwing",
    "name": "Oblivion Wing",
    "type": PokemonCombatType.flying,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "focusblast": {
    "id": "focusblast",
    "name": "Focus Blast",
    "type": PokemonCombatType.fighting,
    "category": "special",
    "pwr": 120,
    "acc": 70,
    "pp": 5
  },
  "landswrath": {
    "id": "landswrath",
    "name": "Land's Wrath",
    "type": PokemonCombatType.ground,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "diamondstorm": {
    "id": "diamondstorm",
    "name": "Diamond Storm",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 100,
    "acc": 95,
    "pp": 5
  },
  "hyperspacehole": {
    "id": "hyperspacehole",
    "name": "Hyperspace Hole",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": null,
    "pp": 5
  },
  "hyperspacefury": {
    "id": "hyperspacefury",
    "name": "Hyperspace Fury",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 100,
    "acc": null,
    "pp": 5
  },
  "steameruption": {
    "id": "steameruption",
    "name": "Steam Eruption",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 110,
    "acc": 95,
    "pp": 5
  },
  "spiritshackle": {
    "id": "spiritshackle",
    "name": "Spirit Shackle",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "triplearrows": {
    "id": "triplearrows",
    "name": "Triple Arrows",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "darkestlariat": {
    "id": "darkestlariat",
    "name": "Darkest Lariat",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "sparklingaria": {
    "id": "sparklingaria",
    "name": "Sparkling Aria",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "beakblast": {
    "id": "beakblast",
    "name": "Beak Blast",
    "type": PokemonCombatType.flying,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 15
  },
  "icehammer": {
    "id": "icehammer",
    "name": "Ice Hammer",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 100,
    "acc": 90,
    "pp": 10
  },
  "revelationdance": {
    "id": "revelationdance",
    "name": "Revelation Dance",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "pollenpuff": {
    "id": "pollenpuff",
    "name": "Pollen Puff",
    "type": PokemonCombatType.bug,
    "category": "special",
    "pwr": 90,
    "acc": 100,
    "pp": 15
  },
  "accelerock": {
    "id": "accelerock",
    "name": "Accelerock",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "banefulbunker": {
    "id": "banefulbunker",
    "name": "Baneful Bunker",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "tropkick": {
    "id": "tropkick",
    "name": "Trop Kick",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 70,
    "acc": 100,
    "pp": 15
  },
  "floralhealing": {
    "id": "floralhealing",
    "name": "Floral Healing",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "instruct": {
    "id": "instruct",
    "name": "Instruct",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "firstimpression": {
    "id": "firstimpression",
    "name": "First Impression",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "shoreup": {
    "id": "shoreup",
    "name": "Shore Up",
    "type": PokemonCombatType.ground,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "purify": {
    "id": "purify",
    "name": "Purify",
    "type": PokemonCombatType.poison,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 20
  },
  "multiattack": {
    "id": "multiattack",
    "name": "Multi-Attack",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 10
  },
  "shelltrap": {
    "id": "shelltrap",
    "name": "Shell Trap",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "zingzap": {
    "id": "zingzap",
    "name": "Zing Zap",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "psychicfangs": {
    "id": "psychicfangs",
    "name": "Psychic Fangs",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "dragonrage": {
    "id": "dragonrage",
    "name": "Dragon Rage",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "anchorshot": {
    "id": "anchorshot",
    "name": "Anchor Shot",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 20
  },
  "clangingscales": {
    "id": "clangingscales",
    "name": "Clanging Scales",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 110,
    "acc": 100,
    "pp": 5
  },
  "clangoroussoul": {
    "id": "clangoroussoul",
    "name": "Clangorous Soul",
    "type": PokemonCombatType.dragon,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "naturesmadness": {
    "id": "naturesmadness",
    "name": "Nature's Madness",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 0,
    "acc": 90,
    "pp": 10
  },
  "sunsteelstrike": {
    "id": "sunsteelstrike",
    "name": "Sunsteel Strike",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "moongeistbeam": {
    "id": "moongeistbeam",
    "name": "Moongeist Beam",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "poweruppunch": {
    "id": "poweruppunch",
    "name": "Power-Up Punch",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 20
  },
  "speedswap": {
    "id": "speedswap",
    "name": "Speed Swap",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "photongeyser": {
    "id": "photongeyser",
    "name": "Photon Geyser",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "prismaticlaser": {
    "id": "prismaticlaser",
    "name": "Prismatic Laser",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 160,
    "acc": 100,
    "pp": 10
  },
  "fleurcannon": {
    "id": "fleurcannon",
    "name": "Fleur Cannon",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 130,
    "acc": 90,
    "pp": 5
  },
  "spectralthief": {
    "id": "spectralthief",
    "name": "Spectral Thief",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "mindblown": {
    "id": "mindblown",
    "name": "Mind Blown",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "plasmafists": {
    "id": "plasmafists",
    "name": "Plasma Fists",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 15
  },
  "doubleironbash": {
    "id": "doubleironbash",
    "name": "Double Iron Bash",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 5
  },
  "drumbeating": {
    "id": "drumbeating",
    "name": "Drum Beating",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "pyroball": {
    "id": "pyroball",
    "name": "Pyro Ball",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 120,
    "acc": 90,
    "pp": 5
  },
  "courtchange": {
    "id": "courtchange",
    "name": "Court Change",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "snipeshot": {
    "id": "snipeshot",
    "name": "Snipe Shot",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "stuffcheeks": {
    "id": "stuffcheeks",
    "name": "Stuff Cheeks",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "jawlock": {
    "id": "jawlock",
    "name": "Jaw Lock",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "tarshot": {
    "id": "tarshot",
    "name": "Tar Shot",
    "type": PokemonCombatType.rock,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "gravapple": {
    "id": "gravapple",
    "name": "Grav Apple",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "appleacid": {
    "id": "appleacid",
    "name": "Apple Acid",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "overdrive": {
    "id": "overdrive",
    "name": "Overdrive",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "burnup": {
    "id": "burnup",
    "name": "Burn Up",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 130,
    "acc": 100,
    "pp": 5
  },
  "octolock": {
    "id": "octolock",
    "name": "Octolock",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 15
  },
  "teatime": {
    "id": "teatime",
    "name": "Teatime",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "magicpowder": {
    "id": "magicpowder",
    "name": "Magic Powder",
    "type": PokemonCombatType.psychic,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 20
  },
  "falsesurrender": {
    "id": "falsesurrender",
    "name": "False Surrender",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 80,
    "acc": null,
    "pp": 10
  },
  "spiritbreak": {
    "id": "spiritbreak",
    "name": "Spirit Break",
    "type": PokemonCombatType.fairy,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 15
  },
  "obstruct": {
    "id": "obstruct",
    "name": "Obstruct",
    "type": PokemonCombatType.dark,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "meteorassault": {
    "id": "meteorassault",
    "name": "Meteor Assault",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "decorate": {
    "id": "decorate",
    "name": "Decorate",
    "type": PokemonCombatType.fairy,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "noretreat": {
    "id": "noretreat",
    "name": "No Retreat",
    "type": PokemonCombatType.fighting,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 5
  },
  "aurawheel": {
    "id": "aurawheel",
    "name": "Aura Wheel",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 110,
    "acc": 100,
    "pp": 10
  },
  "boltbeak": {
    "id": "boltbeak",
    "name": "Bolt Beak",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "fishiousrend": {
    "id": "fishiousrend",
    "name": "Fishious Rend",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 85,
    "acc": 100,
    "pp": 10
  },
  "dragondarts": {
    "id": "dragondarts",
    "name": "Dragon Darts",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "dynamaxcannon": {
    "id": "dynamaxcannon",
    "name": "Dynamax Cannon",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "wickedblow": {
    "id": "wickedblow",
    "name": "Wicked Blow",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 75,
    "acc": 100,
    "pp": 5
  },
  "surgingstrikes": {
    "id": "surgingstrikes",
    "name": "Surging Strikes",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 25,
    "acc": 100,
    "pp": 5
  },
  "junglehealing": {
    "id": "junglehealing",
    "name": "Jungle Healing",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "thundercage": {
    "id": "thundercage",
    "name": "Thunder Cage",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 80,
    "acc": 90,
    "pp": 15
  },
  "dragonenergy": {
    "id": "dragonenergy",
    "name": "Dragon Energy",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 150,
    "acc": 100,
    "pp": 5
  },
  "glaciallance": {
    "id": "glaciallance",
    "name": "Glacial Lance",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "astralbarrage": {
    "id": "astralbarrage",
    "name": "Astral Barrage",
    "type": PokemonCombatType.ghost,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "psyshieldbash": {
    "id": "psyshieldbash",
    "name": "Psyshield Bash",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 10
  },
  "stoneaxe": {
    "id": "stoneaxe",
    "name": "Stone Axe",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 65,
    "acc": 90,
    "pp": 15
  },
  "bloodmoon": {
    "id": "bloodmoon",
    "name": "Blood Moon",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 140,
    "acc": 100,
    "pp": 5
  },
  "direclaw": {
    "id": "direclaw",
    "name": "Dire Claw",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "springtidestorm": {
    "id": "springtidestorm",
    "name": "Springtide Storm",
    "type": PokemonCombatType.fairy,
    "category": "special",
    "pwr": 100,
    "acc": 80,
    "pp": 5
  },
  "flowertrick": {
    "id": "flowertrick",
    "name": "Flower Trick",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 70,
    "acc": null,
    "pp": 10
  },
  "torchsong": {
    "id": "torchsong",
    "name": "Torch Song",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "aquastep": {
    "id": "aquastep",
    "name": "Aqua Step",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "skittersmack": {
    "id": "skittersmack",
    "name": "Skitter Smack",
    "type": PokemonCombatType.bug,
    "category": "physical",
    "pwr": 70,
    "acc": 90,
    "pp": 10
  },
  "silktrap": {
    "id": "silktrap",
    "name": "Silk Trap",
    "type": PokemonCombatType.bug,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "revivalblessing": {
    "id": "revivalblessing",
    "name": "Revival Blessing",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 1
  },
  "doubleshock": {
    "id": "doubleshock",
    "name": "Double Shock",
    "type": PokemonCombatType.electric,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "populationbomb": {
    "id": "populationbomb",
    "name": "Population Bomb",
    "type": PokemonCombatType.normal,
    "category": "physical",
    "pwr": 20,
    "acc": 90,
    "pp": 10
  },
  "tidyup": {
    "id": "tidyup",
    "name": "Tidy Up",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "terrainpulse": {
    "id": "terrainpulse",
    "name": "Terrain Pulse",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "saltcure": {
    "id": "saltcure",
    "name": "Salt Cure",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 40,
    "acc": 100,
    "pp": 15
  },
  "armorcannon": {
    "id": "armorcannon",
    "name": "Armor Cannon",
    "type": PokemonCombatType.fire,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "bitterblade": {
    "id": "bitterblade",
    "name": "Bitter Blade",
    "type": PokemonCombatType.fire,
    "category": "physical",
    "pwr": 90,
    "acc": 100,
    "pp": 10
  },
  "doodle": {
    "id": "doodle",
    "name": "Doodle",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": 100,
    "pp": 10
  },
  "spicyextract": {
    "id": "spicyextract",
    "name": "Spicy Extract",
    "type": PokemonCombatType.grass,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 15
  },
  "luminacrash": {
    "id": "luminacrash",
    "name": "Lumina Crash",
    "type": PokemonCombatType.psychic,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "gigatonhammer": {
    "id": "gigatonhammer",
    "name": "Gigaton Hammer",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 160,
    "acc": 100,
    "pp": 5
  },
  "tripledive": {
    "id": "tripledive",
    "name": "Triple Dive",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 30,
    "acc": 95,
    "pp": 10
  },
  "jetpunch": {
    "id": "jetpunch",
    "name": "Jet Punch",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 15
  },
  "flipturn": {
    "id": "flipturn",
    "name": "Flip Turn",
    "type": PokemonCombatType.water,
    "category": "physical",
    "pwr": 60,
    "acc": 100,
    "pp": 20
  },
  "spinout": {
    "id": "spinout",
    "name": "Spin Out",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "mortalspin": {
    "id": "mortalspin",
    "name": "Mortal Spin",
    "type": PokemonCombatType.poison,
    "category": "physical",
    "pwr": 30,
    "acc": 100,
    "pp": 15
  },
  "lastrespects": {
    "id": "lastrespects",
    "name": "Last Respects",
    "type": PokemonCombatType.ghost,
    "category": "physical",
    "pwr": 50,
    "acc": 100,
    "pp": 10
  },
  "icespinner": {
    "id": "icespinner",
    "name": "Ice Spinner",
    "type": PokemonCombatType.ice,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "filletaway": {
    "id": "filletaway",
    "name": "Fillet Away",
    "type": PokemonCombatType.normal,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "orderup": {
    "id": "orderup",
    "name": "Order Up",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 10
  },
  "kowtowcleave": {
    "id": "kowtowcleave",
    "name": "Kowtow Cleave",
    "type": PokemonCombatType.dark,
    "category": "physical",
    "pwr": 85,
    "acc": null,
    "pp": 10
  },
  "steelroller": {
    "id": "steelroller",
    "name": "Steel Roller",
    "type": PokemonCombatType.steel,
    "category": "physical",
    "pwr": 130,
    "acc": 100,
    "pp": 5
  },
  "glaiverush": {
    "id": "glaiverush",
    "name": "Glaive Rush",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "makeitrain": {
    "id": "makeitrain",
    "name": "Make It Rain",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "ruination": {
    "id": "ruination",
    "name": "Ruination",
    "type": PokemonCombatType.dark,
    "category": "special",
    "pwr": 0,
    "acc": 90,
    "pp": 10
  },
  "scaleshot": {
    "id": "scaleshot",
    "name": "Scale Shot",
    "type": PokemonCombatType.dragon,
    "category": "physical",
    "pwr": 25,
    "acc": 90,
    "pp": 20
  },
  "collisioncourse": {
    "id": "collisioncourse",
    "name": "Collision Course",
    "type": PokemonCombatType.fighting,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "electrodrift": {
    "id": "electrodrift",
    "name": "Electro Drift",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
  },
  "hydrosteam": {
    "id": "hydrosteam",
    "name": "Hydro Steam",
    "type": PokemonCombatType.water,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "psyblade": {
    "id": "psyblade",
    "name": "Psyblade",
    "type": PokemonCombatType.psychic,
    "category": "physical",
    "pwr": 80,
    "acc": 100,
    "pp": 15
  },
  "syrupbomb": {
    "id": "syrupbomb",
    "name": "Syrup Bomb",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 60,
    "acc": 85,
    "pp": 10
  },
  "matchagotcha": {
    "id": "matchagotcha",
    "name": "Matcha Gotcha",
    "type": PokemonCombatType.grass,
    "category": "special",
    "pwr": 80,
    "acc": 90,
    "pp": 15
  },
  "ivycudgel": {
    "id": "ivycudgel",
    "name": "Ivy Cudgel",
    "type": PokemonCombatType.grass,
    "category": "physical",
    "pwr": 100,
    "acc": 100,
    "pp": 10
  },
  "electroshot": {
    "id": "electroshot",
    "name": "Electro Shot",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 130,
    "acc": 100,
    "pp": 10
  },
  "ficklebeam": {
    "id": "ficklebeam",
    "name": "Fickle Beam",
    "type": PokemonCombatType.dragon,
    "category": "special",
    "pwr": 80,
    "acc": 100,
    "pp": 5
  },
  "burningbulwark": {
    "id": "burningbulwark",
    "name": "Burning Bulwark",
    "type": PokemonCombatType.fire,
    "category": "status",
    "pwr": 0,
    "acc": null,
    "pp": 10
  },
  "thunderclap": {
    "id": "thunderclap",
    "name": "Thunderclap",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 5
  },
  "risingvoltage": {
    "id": "risingvoltage",
    "name": "Rising Voltage",
    "type": PokemonCombatType.electric,
    "category": "special",
    "pwr": 70,
    "acc": 100,
    "pp": 20
  },
  "mightycleave": {
    "id": "mightycleave",
    "name": "Mighty Cleave",
    "type": PokemonCombatType.rock,
    "category": "physical",
    "pwr": 95,
    "acc": 100,
    "pp": 5
  },
  "tachyoncutter": {
    "id": "tachyoncutter",
    "name": "Tachyon Cutter",
    "type": PokemonCombatType.steel,
    "category": "special",
    "pwr": 50,
    "acc": null,
    "pp": 10
  },
  "terastarstorm": {
    "id": "terastarstorm",
    "name": "Tera Starstorm",
    "type": PokemonCombatType.normal,
    "category": "special",
    "pwr": 120,
    "acc": 100,
    "pp": 5
  },
  "malignantchain": {
    "id": "malignantchain",
    "name": "Malignant Chain",
    "type": PokemonCombatType.poison,
    "category": "special",
    "pwr": 100,
    "acc": 100,
    "pp": 5
}
};
