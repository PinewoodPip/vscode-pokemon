import { PokemonColor, PokemonConfig, PokemonGeneration, PokemonType } from "./types";

export const POKEMON_DATA: { [key: string]: PokemonConfig } = {
  bulbasaur: {
    id: 1,
    name: 'Bulbasaur',
    generation: PokemonGeneration.Gen1,
    cry: 'Bulbasaur!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 45, attack: 49, defense: 49, sp_attack: 65, sp_defense: 65, speed: 45 }
  },
  ivysaur: {
    id: 2,
    name: 'Ivysaur',
    generation: PokemonGeneration.Gen1,
    cry: 'Ivysaur!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 60, attack: 62, defense: 63, sp_attack: 80, sp_defense: 80, speed: 60 }
  },
  venusaur: {
    id: 3,
    name: 'Venusaur',
    generation: PokemonGeneration.Gen1,
    cry: 'Venusaur!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 80, attack: 100, defense: 123, sp_attack: 122, sp_defense: 120, speed: 80 }
  },
  charmander: {
    id: 4,
    name: 'Charmander',
    generation: PokemonGeneration.Gen1,
    cry: 'Charmander!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 39, attack: 52, defense: 43, sp_attack: 60, sp_defense: 50, speed: 65 }
  },
  charmeleon: {
    id: 5,
    name: 'Charmeleon',
    generation: PokemonGeneration.Gen1,
    cry: 'Charmeleon!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 58, attack: 64, defense: 58, sp_attack: 80, sp_defense: 65, speed: 80 }
  },
  charizard: {
    id: 6,
    name: 'Charizard',
    generation: PokemonGeneration.Gen1,
    cry: 'Charizard!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Flying"],
    stats: { hp: 78, attack: 104, defense: 78, sp_attack: 159, sp_defense: 115, speed: 100 }
  },
  squirtle: {
    id: 7,
    name: 'Squirtle',
    generation: PokemonGeneration.Gen1,
    cry: 'Squritle!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 44, attack: 48, defense: 65, sp_attack: 50, sp_defense: 64, speed: 43 }
  },
  wartortle: {
    id: 8,
    name: 'Wartortle',
    generation: PokemonGeneration.Gen1,
    cry: 'Wartortle!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 59, attack: 63, defense: 80, sp_attack: 65, sp_defense: 80, speed: 58 }
  },
  blastoise: {
    id: 9,
    name: 'Blastoise',
    generation: PokemonGeneration.Gen1,
    cry: 'Blastoise!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 79, attack: 103, defense: 120, sp_attack: 135, sp_defense: 115, speed: 78 }
  },
  caterpie: {
    id: 10,
    name: 'Caterpie',
    generation: PokemonGeneration.Gen1,
    cry: 'Caterpie!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 45, attack: 30, defense: 35, sp_attack: 20, sp_defense: 20, speed: 45 }
  },
  metapod: {
    id: 11,
    name: 'Metapod',
    generation: PokemonGeneration.Gen1,
    cry: 'Metapod!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 20, defense: 55, sp_attack: 25, sp_defense: 25, speed: 30 }
  },
  butterfree: {
    id: 12,
    name: 'Butterfree',
    generation: PokemonGeneration.Gen1,
    cry: 'Butterfree!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 60, attack: 45, defense: 50, sp_attack: 90, sp_defense: 80, speed: 70 }
  },
  weedle: {
    id: 13,
    name: 'Weedle',
    generation: PokemonGeneration.Gen1,
    cry: 'Weedle!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 40, attack: 35, defense: 30, sp_attack: 20, sp_defense: 20, speed: 50 }
  },
  kakuna: {
    id: 14,
    name: 'Kakuna',
    generation: PokemonGeneration.Gen1,
    cry: 'Kakuna!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 45, attack: 25, defense: 50, sp_attack: 25, sp_defense: 25, speed: 35 }
  },
  beedrill: {
    id: 15,
    name: 'Beedrill',
    generation: PokemonGeneration.Gen1,
    cry: 'Beedrill!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 65, attack: 150, defense: 40, sp_attack: 15, sp_defense: 80, speed: 145 }
  },
  pidgey: {
    id: 16,
    name: 'Pidgey',
    generation: PokemonGeneration.Gen1,
    cry: 'Pidgey!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 40, attack: 45, defense: 40, sp_attack: 35, sp_defense: 35, speed: 56 }
  },
  pidgeotto: {
    id: 17,
    name: 'Pidgeotto',
    generation: PokemonGeneration.Gen1,
    cry: 'Pidgeotto!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 63, attack: 60, defense: 55, sp_attack: 50, sp_defense: 50, speed: 71 }
  },
  pidgeot: {
    id: 18,
    name: 'Pidgeot',
    generation: PokemonGeneration.Gen1,
    cry: 'Pidgeot!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 83, attack: 80, defense: 80, sp_attack: 135, sp_defense: 80, speed: 121 }
  },
  rattata: {
    id: 19,
    name: 'Rattata',
    generation: PokemonGeneration.Gen1,
    cry: 'Rattata!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Normal"],
    stats: { hp: 30, attack: 56, defense: 35, sp_attack: 25, sp_defense: 35, speed: 72 }
  },
  raticate: {
    id: 20,
    name: 'Raticate',
    generation: PokemonGeneration.Gen1,
    cry: 'Raticate!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Normal"],
    stats: { hp: 75, attack: 71, defense: 70, sp_attack: 40, sp_defense: 80, speed: 77 }
  },
  spearow: {
    id: 21,
    name: 'Spearow',
    generation: PokemonGeneration.Gen1,
    cry: 'Spearow!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 40, attack: 60, defense: 30, sp_attack: 31, sp_defense: 31, speed: 70 }
  },
  fearow: {
    id: 22,
    name: 'Fearow',
    generation: PokemonGeneration.Gen1,
    cry: 'Fearow!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 65, attack: 90, defense: 65, sp_attack: 61, sp_defense: 61, speed: 100 }
  },
  ekans: {
    id: 23,
    name: 'Ekans',
    generation: PokemonGeneration.Gen1,
    cry: 'Ekans!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 35, attack: 60, defense: 44, sp_attack: 40, sp_defense: 54, speed: 55 }
  },
  arbok: {
    id: 24,
    name: 'Arbok',
    generation: PokemonGeneration.Gen1,
    cry: 'Arbok!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 60, attack: 95, defense: 69, sp_attack: 65, sp_defense: 79, speed: 80 }
  },
  pikachu: {
    id: 25,
    name: 'Pikachu',
    generation: PokemonGeneration.Gen1,
    cry: 'Pikachu!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 45, attack: 80, defense: 50, sp_attack: 75, sp_defense: 60, speed: 120 }
  },
  raichu: {
    id: 26,
    name: 'Raichu',
    generation: PokemonGeneration.Gen1,
    cry: 'Raichu!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Psychic"],
    stats: { hp: 60, attack: 85, defense: 50, sp_attack: 95, sp_defense: 85, speed: 110 }
  },
  sandshrew: {
    id: 27,
    name: 'Sandshrew',
    generation: PokemonGeneration.Gen1,
    cry: 'Sandshrew!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Steel"],
    stats: { hp: 50, attack: 75, defense: 90, sp_attack: 10, sp_defense: 35, speed: 40 }
  },
  sandslash: {
    id: 28,
    name: 'Sandslash',
    generation: PokemonGeneration.Gen1,
    cry: 'Sandslash!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Steel"],
    stats: { hp: 75, attack: 100, defense: 120, sp_attack: 25, sp_defense: 65, speed: 65 }
  },
  nidoran_female: {
    id: 29,
    name: 'Nidoran♀',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidoran!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 55, attack: 47, defense: 52, sp_attack: 40, sp_defense: 40, speed: 41 }
  },
  nidorina: {
    id: 30,
    name: 'Nidorina',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidorina!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 70, attack: 62, defense: 67, sp_attack: 55, sp_defense: 55, speed: 56 }
  },
  nidoqueen: {
    id: 31,
    name: 'Nidoqueen',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidoqueen!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Ground"],
    stats: { hp: 90, attack: 92, defense: 87, sp_attack: 75, sp_defense: 85, speed: 76 }
  },
  nidoran_male: {
    id: 32,
    name: 'Nidoran♂',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidoran!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 46, attack: 57, defense: 40, sp_attack: 40, sp_defense: 40, speed: 50 }
  },
  nidorino: {
    id: 33,
    name: 'Nidorino',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidorino!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 61, attack: 72, defense: 57, sp_attack: 55, sp_defense: 55, speed: 65 }
  },
  nidoking: {
    id: 34,
    name: 'Nidoking',
    generation: PokemonGeneration.Gen1,
    cry: 'Nidoking!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Ground"],
    stats: { hp: 81, attack: 102, defense: 77, sp_attack: 85, sp_defense: 75, speed: 85 }
  },
  clefairy: {
    id: 35,
    name: 'Clefairy',
    generation: PokemonGeneration.Gen1,
    cry: 'Clefairy!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 70, attack: 45, defense: 48, sp_attack: 60, sp_defense: 65, speed: 35 }
  },
  clefable: {
    id: 36,
    name: 'Clefable',
    generation: PokemonGeneration.Gen1,
    cry: 'Clefable!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 95, attack: 70, defense: 73, sp_attack: 95, sp_defense: 90, speed: 60 }
  },
  vulpix: {
    id: 37,
    name: 'Vulpix',
    generation: PokemonGeneration.Gen1,
    cry: 'Vulpix!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 38, attack: 41, defense: 40, sp_attack: 50, sp_defense: 65, speed: 65 }
  },
  ninetales: {
    id: 38,
    name: 'Ninetales',
    generation: PokemonGeneration.Gen1,
    cry: 'Ninetales!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Fairy"],
    stats: { hp: 73, attack: 67, defense: 75, sp_attack: 81, sp_defense: 100, speed: 109 }
  },
  jigglypuff: {
    id: 39,
    name: 'Jigglypuff',
    generation: PokemonGeneration.Gen1,
    cry: 'Jigglypuff!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fairy"],
    stats: { hp: 115, attack: 45, defense: 20, sp_attack: 45, sp_defense: 25, speed: 20 }
  },
  wigglytuff: {
    id: 40,
    name: 'Wigglytuff',
    generation: PokemonGeneration.Gen1,
    cry: 'Wigglytuff!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fairy"],
    stats: { hp: 140, attack: 70, defense: 45, sp_attack: 85, sp_defense: 50, speed: 45 }
  },
  zubat: {
    id: 41,
    name: 'Zubat',
    generation: PokemonGeneration.Gen1,
    cry: 'Zubat!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Flying"],
    stats: { hp: 40, attack: 45, defense: 35, sp_attack: 30, sp_defense: 40, speed: 55 }
  },
  golbat: {
    id: 42,
    name: 'Golbat',
    generation: PokemonGeneration.Gen1,
    cry: 'Golbat!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Flying"],
    stats: { hp: 75, attack: 80, defense: 70, sp_attack: 65, sp_defense: 75, speed: 90 }
  },
  oddish: {
    id: 43,
    name: 'Oddish',
    generation: PokemonGeneration.Gen1,
    cry: 'Oddish!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 45, attack: 50, defense: 55, sp_attack: 75, sp_defense: 65, speed: 30 }
  },
  gloom: {
    id: 44,
    name: 'Gloom',
    generation: PokemonGeneration.Gen1,
    cry: 'Gloom!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 60, attack: 65, defense: 70, sp_attack: 85, sp_defense: 75, speed: 40 }
  },
  vileplume: {
    id: 45,
    name: 'Vileplume',
    generation: PokemonGeneration.Gen1,
    cry: 'Vileplume!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 75, attack: 80, defense: 85, sp_attack: 110, sp_defense: 90, speed: 50 }
  },
  paras: {
    id: 46,
    name: 'Paras',
    generation: PokemonGeneration.Gen1,
    cry: 'Paras!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Grass"],
    stats: { hp: 35, attack: 70, defense: 55, sp_attack: 45, sp_defense: 55, speed: 25 }
  },
  parasect: {
    id: 47,
    name: 'Parasect',
    generation: PokemonGeneration.Gen1,
    cry: 'Parasect!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Grass"],
    stats: { hp: 60, attack: 95, defense: 80, sp_attack: 60, sp_defense: 80, speed: 30 }
  },
  venonat: {
    id: 48,
    name: 'Venonat',
    generation: PokemonGeneration.Gen1,
    cry: 'Venonat!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 60, attack: 55, defense: 50, sp_attack: 40, sp_defense: 55, speed: 45 }
  },
  venomoth: {
    id: 49,
    name: 'Venomoth',
    generation: PokemonGeneration.Gen1,
    cry: 'Venomoth!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 70, attack: 65, defense: 60, sp_attack: 90, sp_defense: 75, speed: 90 }
  },
  diglett: {
    id: 50,
    name: 'Diglett',
    generation: PokemonGeneration.Gen1,
    cry: 'Diglett!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Steel"],
    stats: { hp: 10, attack: 55, defense: 30, sp_attack: 35, sp_defense: 45, speed: 90 }
  },
  dugtrio: {
    id: 51,
    name: 'Dugtrio',
    generation: PokemonGeneration.Gen1,
    cry: 'Dugtrio!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Steel"],
    stats: { hp: 35, attack: 100, defense: 60, sp_attack: 50, sp_defense: 70, speed: 110 }
  },
  meowth: {
    id: 52,
    name: 'Meowth',
    generation: PokemonGeneration.Gen1,
    cry: 'Meowth!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 50, attack: 65, defense: 55, sp_attack: 40, sp_defense: 40, speed: 40 }
  },
  persian: {
    id: 53,
    name: 'Persian',
    generation: PokemonGeneration.Gen1,
    cry: 'Persian!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 65, attack: 60, defense: 60, sp_attack: 75, sp_defense: 65, speed: 115 }
  },
  psyduck: {
    id: 54,
    name: 'Psyduck',
    generation: PokemonGeneration.Gen1,
    cry: 'Psyduck!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 52, defense: 48, sp_attack: 65, sp_defense: 50, speed: 55 }
  },
  golduck: {
    id: 55,
    name: 'Golduck',
    generation: PokemonGeneration.Gen1,
    cry: 'Golduck!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 80, attack: 82, defense: 78, sp_attack: 95, sp_defense: 80, speed: 85 }
  },
  mankey: {
    id: 56,
    name: 'Mankey',
    generation: PokemonGeneration.Gen1,
    cry: 'Mankey!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 40, attack: 80, defense: 35, sp_attack: 35, sp_defense: 45, speed: 70 }
  },
  primeape: {
    id: 57,
    name: 'Primeape',
    generation: PokemonGeneration.Gen1,
    cry: 'Primeape!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 65, attack: 105, defense: 60, sp_attack: 60, sp_defense: 70, speed: 95 }
  },
  growlithe: {
    id: 58,
    name: 'Growlithe',
    generation: PokemonGeneration.Gen1,
    cry: 'Growlithe!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Rock"],
    stats: { hp: 60, attack: 75, defense: 45, sp_attack: 65, sp_defense: 50, speed: 55 }
  },
  arcanine: {
    id: 59,
    name: 'Arcanine',
    generation: PokemonGeneration.Gen1,
    cry: 'Arcanine!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Rock"],
    stats: { hp: 95, attack: 115, defense: 80, sp_attack: 95, sp_defense: 80, speed: 90 }
  },
  poliwag: {
    id: 60,
    name: 'Poliwag',
    generation: PokemonGeneration.Gen1,
    cry: 'Poliwag!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 40, attack: 50, defense: 40, sp_attack: 40, sp_defense: 40, speed: 90 }
  },
  poliwhirl: {
    id: 61,
    name: 'Poliwhirl',
    generation: PokemonGeneration.Gen1,
    cry: 'Poliwhirl!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 65, attack: 65, defense: 65, sp_attack: 50, sp_defense: 50, speed: 90 }
  },
  poliwrath: {
    id: 62,
    name: 'Poliwrath',
    generation: PokemonGeneration.Gen1,
    cry: 'Poliwrath!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fighting"],
    stats: { hp: 90, attack: 95, defense: 95, sp_attack: 70, sp_defense: 90, speed: 70 }
  },
  abra: {
    id: 63,
    name: 'Abra',
    generation: PokemonGeneration.Gen1,
    cry: 'Abra!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 25, attack: 20, defense: 15, sp_attack: 105, sp_defense: 55, speed: 90 }
  },
  kadabra: {
    id: 64,
    name: 'Kadabra',
    generation: PokemonGeneration.Gen1,
    cry: 'Kadabra!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 40, attack: 35, defense: 30, sp_attack: 120, sp_defense: 70, speed: 105 }
  },
  alakazam: {
    id: 65,
    name: 'Alakazam',
    generation: PokemonGeneration.Gen1,
    cry: 'Alakazam!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 55, attack: 50, defense: 65, sp_attack: 175, sp_defense: 105, speed: 150 }
  },
  machop: {
    id: 66,
    name: 'Machop',
    generation: PokemonGeneration.Gen1,
    cry: 'Machop!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 70, attack: 80, defense: 50, sp_attack: 35, sp_defense: 35, speed: 35 }
  },
  machoke: {
    id: 67,
    name: 'Machoke',
    generation: PokemonGeneration.Gen1,
    cry: 'Machoke!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 80, attack: 100, defense: 70, sp_attack: 50, sp_defense: 60, speed: 45 }
  },
  machamp: {
    id: 68,
    name: 'Machamp',
    generation: PokemonGeneration.Gen1,
    cry: 'Alakazam!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 90, attack: 130, defense: 80, sp_attack: 65, sp_defense: 85, speed: 55 }
  },
  bellsprout: {
    id: 69,
    name: 'Bellsprout',
    generation: PokemonGeneration.Gen1,
    cry: 'Bellsprout!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 50, attack: 75, defense: 35, sp_attack: 70, sp_defense: 30, speed: 40 }
  },
  weepinbell: {
    id: 70,
    name: 'Weepinbell',
    generation: PokemonGeneration.Gen1,
    cry: 'Weepinbell!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 65, attack: 90, defense: 50, sp_attack: 85, sp_defense: 45, speed: 55 }
  },
  victreebel: {
    id: 71,
    name: 'Victreebel',
    generation: PokemonGeneration.Gen1,
    cry: 'Victreebel!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 80, attack: 125, defense: 85, sp_attack: 135, sp_defense: 95, speed: 70 }
  },
  tentacool: {
    id: 72,
    name: 'Tentacool',
    generation: PokemonGeneration.Gen1,
    cry: 'Tentacool!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Poison"],
    stats: { hp: 40, attack: 40, defense: 35, sp_attack: 50, sp_defense: 100, speed: 70 }
  },
  tentacruel: {
    id: 73,
    name: 'Tentacruel',
    generation: PokemonGeneration.Gen1,
    cry: 'Tentacruel!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Poison"],
    stats: { hp: 80, attack: 70, defense: 65, sp_attack: 80, sp_defense: 120, speed: 100 }
  },
  geodude: {
    id: 74,
    name: 'Geodude',
    generation: PokemonGeneration.Gen1,
    cry: 'Geodude!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Electric"],
    stats: { hp: 40, attack: 80, defense: 100, sp_attack: 30, sp_defense: 30, speed: 20 }
  },
  graveler: {
    id: 75,
    name: 'Graveler',
    generation: PokemonGeneration.Gen1,
    cry: 'Graveler!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Electric"],
    stats: { hp: 55, attack: 95, defense: 115, sp_attack: 45, sp_defense: 45, speed: 35 }
  },
  golem: {
    id: 76,
    name: 'Golem',
    generation: PokemonGeneration.Gen1,
    cry: 'Golem!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Electric"],
    stats: { hp: 80, attack: 120, defense: 130, sp_attack: 55, sp_defense: 65, speed: 45 }
  },
  ponyta: {
    id: 77,
    name: 'Ponyta',
    generation: PokemonGeneration.Gen1,
    cry: 'Ponyta!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 50, attack: 85, defense: 55, sp_attack: 65, sp_defense: 65, speed: 90 }
  },
  rapidash: {
    id: 78,
    name: 'Rapidash',
    generation: PokemonGeneration.Gen1,
    cry: 'Rapidash!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 65, attack: 100, defense: 70, sp_attack: 80, sp_defense: 80, speed: 105 }
  },
  slowpoke: {
    id: 79,
    name: 'Slowpoke',
    generation: PokemonGeneration.Gen1,
    cry: 'Slowpoke!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 90, attack: 65, defense: 65, sp_attack: 40, sp_defense: 40, speed: 15 }
  },
  slowbro: {
    id: 80,
    name: 'Slowbro',
    generation: PokemonGeneration.Gen1,
    cry: 'Slowbro!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Psychic"],
    stats: { hp: 95, attack: 100, defense: 95, sp_attack: 100, sp_defense: 70, speed: 30 }
  },
  magnemite: {
    id: 81,
    name: 'Magnemite',
    generation: PokemonGeneration.Gen1,
    cry: 'Magnemite!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Steel"],
    stats: { hp: 25, attack: 35, defense: 70, sp_attack: 95, sp_defense: 55, speed: 45 }
  },
  magneton: {
    id: 82,
    name: 'Magneton',
    generation: PokemonGeneration.Gen1,
    cry: 'Magneton!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Steel"],
    stats: { hp: 50, attack: 60, defense: 95, sp_attack: 120, sp_defense: 70, speed: 70 }
  },
  farfetchd: {
    id: 83,
    name: 'Farfetch\'d',
    generation: PokemonGeneration.Gen1,
    cry: 'Farfetch\'d!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 52, attack: 95, defense: 55, sp_attack: 58, sp_defense: 62, speed: 55 }
  },
  doduo: {
    id: 84,
    name: 'Doduo',
    generation: PokemonGeneration.Gen1,
    cry: 'Doduo!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 35, attack: 85, defense: 45, sp_attack: 35, sp_defense: 35, speed: 75 }
  },
  dodrio: {
    id: 85,
    name: 'Dodrio',
    generation: PokemonGeneration.Gen1,
    cry: 'Dodrio!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 60, attack: 110, defense: 70, sp_attack: 60, sp_defense: 60, speed: 110 }
  },
  seel: {
    id: 86,
    name: 'Seel',
    generation: PokemonGeneration.Gen1,
    cry: 'Seel!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 65, attack: 45, defense: 55, sp_attack: 45, sp_defense: 70, speed: 45 }
  },
  dewgong: {
    id: 87,
    name: 'Dewgong',
    generation: PokemonGeneration.Gen1,
    cry: 'Dewgong!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ice"],
    stats: { hp: 90, attack: 70, defense: 80, sp_attack: 70, sp_defense: 95, speed: 70 }
  },
  grimer: {
    id: 88,
    name: 'Grimer',
    generation: PokemonGeneration.Gen1,
    cry: 'Grimer!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dark"],
    stats: { hp: 80, attack: 80, defense: 50, sp_attack: 40, sp_defense: 50, speed: 25 }
  },
  muk: {
    id: 89,
    name: 'Muk',
    generation: PokemonGeneration.Gen1,
    cry: 'Muk!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dark"],
    stats: { hp: 105, attack: 105, defense: 75, sp_attack: 65, sp_defense: 100, speed: 50 }
  },
  shellder: {
    id: 90,
    name: 'Shellder',
    generation: PokemonGeneration.Gen1,
    cry: 'Shellder!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 30, attack: 65, defense: 100, sp_attack: 45, sp_defense: 25, speed: 40 }
  },
  cloyster: {
    id: 91,
    name: 'Cloyster',
    generation: PokemonGeneration.Gen1,
    cry: 'Cloyster!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ice"],
    stats: { hp: 50, attack: 95, defense: 180, sp_attack: 85, sp_defense: 45, speed: 70 }
  },
  gastly: {
    id: 92,
    name: 'Gastly',
    generation: PokemonGeneration.Gen1,
    cry: 'Gastly!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Poison"],
    stats: { hp: 30, attack: 35, defense: 30, sp_attack: 100, sp_defense: 35, speed: 80 }
  },
  haunter: {
    id: 93,
    name: 'Haunter',
    generation: PokemonGeneration.Gen1,
    cry: 'Haunter!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Poison"],
    stats: { hp: 45, attack: 50, defense: 45, sp_attack: 115, sp_defense: 55, speed: 95 }
  },
  gengar: {
    id: 94,
    name: 'Gengar',
    generation: PokemonGeneration.Gen1,
    cry: 'Gengar!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Poison"],
    stats: { hp: 60, attack: 65, defense: 80, sp_attack: 170, sp_defense: 95, speed: 130 }
  },
  onix: {
    id: 95,
    name: 'Onix',
    generation: PokemonGeneration.Gen1,
    cry: 'Onix!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Ground"],
    stats: { hp: 35, attack: 45, defense: 160, sp_attack: 30, sp_defense: 45, speed: 70 }
  },
  drowzee: {
    id: 96,
    name: 'Drowzee',
    generation: PokemonGeneration.Gen1,
    cry: 'Drowzee!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 60, attack: 48, defense: 45, sp_attack: 43, sp_defense: 90, speed: 42 }
  },
  hypno: {
    id: 97,
    name: 'Hypno',
    generation: PokemonGeneration.Gen1,
    cry: 'Hypno!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 85, attack: 73, defense: 70, sp_attack: 73, sp_defense: 115, speed: 67 }
  },
  krabby: {
    id: 98,
    name: 'Krabby',
    generation: PokemonGeneration.Gen1,
    cry: 'Krabby!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 30, attack: 105, defense: 90, sp_attack: 25, sp_defense: 25, speed: 50 }
  },
  kingler: {
    id: 99,
    name: 'Kingler',
    generation: PokemonGeneration.Gen1,
    cry: 'Kingler!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 130, defense: 115, sp_attack: 50, sp_defense: 50, speed: 75 }
  },
  voltorb: {
    id: 100,
    name: 'Voltorb',
    generation: PokemonGeneration.Gen1,
    cry: 'Voltorb!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Grass"],
    stats: { hp: 40, attack: 30, defense: 50, sp_attack: 55, sp_defense: 55, speed: 100 }
  },
  electrode: {
    id: 101,
    name: 'Electrode',
    generation: PokemonGeneration.Gen1,
    cry: 'Electrode!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Grass"],
    stats: { hp: 60, attack: 50, defense: 70, sp_attack: 80, sp_defense: 80, speed: 150 }
  },
  exeggcute: {
    id: 102,
    name: 'Exeggcute',
    generation: PokemonGeneration.Gen1,
    cry: 'Exeggcute!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Psychic"],
    stats: { hp: 60, attack: 40, defense: 80, sp_attack: 60, sp_defense: 45, speed: 40 }
  },
  exeggutor: {
    id: 103,
    name: 'Exeggutor',
    generation: PokemonGeneration.Gen1,
    cry: 'Exeggutor!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Dragon"],
    stats: { hp: 95, attack: 105, defense: 85, sp_attack: 125, sp_defense: 75, speed: 45 }
  },
  cubone: {
    id: 104,
    name: 'Cubone',
    generation: PokemonGeneration.Gen1,
    cry: 'Cubone!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 50, attack: 50, defense: 95, sp_attack: 40, sp_defense: 50, speed: 35 }
  },
  marowak: {
    id: 105,
    name: 'Marowak',
    generation: PokemonGeneration.Gen1,
    cry: 'Marowak!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Ghost"],
    stats: { hp: 60, attack: 80, defense: 110, sp_attack: 50, sp_defense: 80, speed: 45 }
  },
  hitmonlee: {
    id: 106,
    name: 'Hitmonlee',
    generation: PokemonGeneration.Gen1,
    cry: 'Hitmonlee!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 50, attack: 120, defense: 53, sp_attack: 35, sp_defense: 110, speed: 87 }
  },
  hitmonchan: {
    id: 107,
    name: 'Hitmonchan',
    generation: PokemonGeneration.Gen1,
    cry: 'Hitmonchan!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 50, attack: 105, defense: 79, sp_attack: 35, sp_defense: 110, speed: 76 }
  },
  lickitung: {
    id: 108,
    name: 'Lickitung',
    generation: PokemonGeneration.Gen1,
    cry: 'Lickitung!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 90, attack: 55, defense: 75, sp_attack: 60, sp_defense: 75, speed: 30 }
  },
  koffing: {
    id: 109,
    name: 'Koffing',
    generation: PokemonGeneration.Gen1,
    cry: 'Koffing!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 40, attack: 65, defense: 95, sp_attack: 60, sp_defense: 45, speed: 35 }
  },
  weezing: {
    id: 110,
    name: 'Weezing',
    generation: PokemonGeneration.Gen1,
    cry: 'Weezing!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Fairy"],
    stats: { hp: 65, attack: 90, defense: 120, sp_attack: 85, sp_defense: 70, speed: 60 }
  },
  rhyhorn: {
    id: 111,
    name: 'Rhyhorn',
    generation: PokemonGeneration.Gen1,
    cry: 'Rhyhorn!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Rock"],
    stats: { hp: 80, attack: 85, defense: 95, sp_attack: 30, sp_defense: 30, speed: 25 }
  },
  rhydon: {
    id: 112,
    name: 'Rhydon',
    generation: PokemonGeneration.Gen1,
    cry: 'Rhydon!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Rock"],
    stats: { hp: 105, attack: 130, defense: 120, sp_attack: 45, sp_defense: 45, speed: 40 }
  },
  chansey: {
    id: 113,
    name: 'Chansey',
    generation: PokemonGeneration.Gen1,
    cry: 'Chansey!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 250, attack: 5, defense: 5, sp_attack: 35, sp_defense: 105, speed: 50 }
  },
  tangela: {
    id: 114,
    name: 'Tangela',
    generation: PokemonGeneration.Gen1,
    cry: 'Tangela!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 65, attack: 55, defense: 115, sp_attack: 100, sp_defense: 40, speed: 60 }
  },
  kangaskhan: {
    id: 115,
    name: 'Kangaskhan',
    generation: PokemonGeneration.Gen1,
    cry: 'Kangaskhan!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 105, attack: 125, defense: 100, sp_attack: 60, sp_defense: 100, speed: 100 }
  },
  horsea: {
    id: 116,
    name: 'Horsea',
    generation: PokemonGeneration.Gen1,
    cry: 'Horsea!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 30, attack: 40, defense: 70, sp_attack: 70, sp_defense: 25, speed: 60 }
  },
  seadra: {
    id: 117,
    name: 'Seadra',
    generation: PokemonGeneration.Gen1,
    cry: 'Seadra!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 65, defense: 95, sp_attack: 95, sp_defense: 45, speed: 85 }
  },
  goldeen: {
    id: 118,
    name: 'Goldeen',
    generation: PokemonGeneration.Gen1,
    cry: 'Goldeen!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 45, attack: 67, defense: 60, sp_attack: 35, sp_defense: 50, speed: 63 }
  },
  seaking: {
    id: 119,
    name: 'Seaking',
    generation: PokemonGeneration.Gen1,
    cry: 'Seaking!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 80, attack: 92, defense: 65, sp_attack: 65, sp_defense: 80, speed: 68 }
  },
  staryu: {
    id: 120,
    name: 'Staryu',
    generation: PokemonGeneration.Gen1,
    cry: 'Staryu!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 30, attack: 45, defense: 55, sp_attack: 70, sp_defense: 55, speed: 85 }
  },
  starmie: {
    id: 121,
    name: 'Starmie',
    generation: PokemonGeneration.Gen1,
    cry: 'Starmie!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Psychic"],
    stats: { hp: 60, attack: 75, defense: 85, sp_attack: 100, sp_defense: 85, speed: 115 }
  },
  mrmime: {
    id: 122,
    name: 'Mr. Mime',
    generation: PokemonGeneration.Gen1,
    cry: 'Mr. Mime!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Psychic"],
    stats: { hp: 50, attack: 65, defense: 65, sp_attack: 90, sp_defense: 90, speed: 100 }
  },
  scyther: {
    id: 123,
    name: 'Scyther',
    generation: PokemonGeneration.Gen1,
    cry: 'Scyther!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 70, attack: 110, defense: 80, sp_attack: 55, sp_defense: 80, speed: 105 }
  },
  jynx: {
    id: 124,
    name: 'Jynx',
    generation: PokemonGeneration.Gen1,
    cry: 'Jynx!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Psychic"],
    stats: { hp: 65, attack: 50, defense: 35, sp_attack: 115, sp_defense: 95, speed: 95 }
  },
  electabuzz: {
    id: 125,
    name: 'Electabuzz',
    generation: PokemonGeneration.Gen1,
    cry: 'Electabuzz!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 65, attack: 83, defense: 57, sp_attack: 95, sp_defense: 85, speed: 105 }
  },
  magmar: {
    id: 126,
    name: 'Magmar',
    generation: PokemonGeneration.Gen1,
    cry: 'Magmar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 65, attack: 95, defense: 57, sp_attack: 100, sp_defense: 85, speed: 93 }
  },
  pinsir: {
    id: 127,
    name: 'Pinsir',
    generation: PokemonGeneration.Gen1,
    cry: 'Pinsir!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 65, attack: 155, defense: 120, sp_attack: 65, sp_defense: 90, speed: 105 }
  },
  tauros: {
    id: 128,
    name: 'Tauros',
    generation: PokemonGeneration.Gen1,
    cry: 'Tauros!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Water"],
    stats: { hp: 75, attack: 110, defense: 105, sp_attack: 30, sp_defense: 70, speed: 100 }
  },
  magikarp: {
    id: 129,
    name: 'Magikarp',
    generation: PokemonGeneration.Gen1,
    cry: 'Magikarp!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 20, attack: 10, defense: 55, sp_attack: 15, sp_defense: 20, speed: 80 }
  },
  gyarados: {
    id: 130,
    name: 'Gyarados',
    generation: PokemonGeneration.Gen1,
    cry: 'Gyarados!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 95, attack: 155, defense: 109, sp_attack: 70, sp_defense: 130, speed: 81 }
  },
  lapras: {
    id: 131,
    name: 'Lapras',
    generation: PokemonGeneration.Gen1,
    cry: 'Lapras!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ice"],
    stats: { hp: 130, attack: 85, defense: 80, sp_attack: 85, sp_defense: 95, speed: 60 }
  },
  ditto: {
    id: 132,
    name: 'Ditto',
    generation: PokemonGeneration.Gen1,
    cry: 'Ditto!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 48, attack: 48, defense: 48, sp_attack: 48, sp_defense: 48, speed: 48 }
  },
  eevee: {
    id: 133,
    name: 'Eevee',
    generation: PokemonGeneration.Gen1,
    cry: 'Eevee!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 65, attack: 75, defense: 70, sp_attack: 65, sp_defense: 85, speed: 75 }
  },
  vaporeon: {
    id: 134,
    name: 'Vaporeon',
    generation: PokemonGeneration.Gen1,
    cry: 'Vaporeon!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 130, attack: 65, defense: 60, sp_attack: 110, sp_defense: 95, speed: 65 }
  },
  jolteon: {
    id: 135,
    name: 'Jolteon',
    generation: PokemonGeneration.Gen1,
    cry: 'Jolteon!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 65, attack: 65, defense: 60, sp_attack: 110, sp_defense: 95, speed: 130 }
  },
  flareon: {
    id: 136,
    name: 'Flareon',
    generation: PokemonGeneration.Gen1,
    cry: 'Flareon!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 65, attack: 130, defense: 60, sp_attack: 95, sp_defense: 110, speed: 65 }
  },
  porygon: {
    id: 137,
    name: 'Porygon',
    generation: PokemonGeneration.Gen1,
    cry: 'Porygon!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 65, attack: 60, defense: 70, sp_attack: 85, sp_defense: 75, speed: 40 }
  },
  omanyte: {
    id: 138,
    name: 'Omanyte',
    generation: PokemonGeneration.Gen1,
    cry: 'Omanyte!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 35, attack: 40, defense: 100, sp_attack: 90, sp_defense: 55, speed: 35 }
  },
  omastar: {
    id: 139,
    name: 'Omastar',
    generation: PokemonGeneration.Gen1,
    cry: 'Omastar!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 70, attack: 60, defense: 125, sp_attack: 115, sp_defense: 70, speed: 55 }
  },
  kabuto: {
    id: 140,
    name: 'Kabuto',
    generation: PokemonGeneration.Gen1,
    cry: 'Kabuto!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 30, attack: 80, defense: 90, sp_attack: 55, sp_defense: 45, speed: 55 }
  },
  kabutops: {
    id: 141,
    name: 'Kabutops',
    generation: PokemonGeneration.Gen1,
    cry: 'Kabutops!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 60, attack: 115, defense: 105, sp_attack: 65, sp_defense: 70, speed: 80 }
  },
  aerodactyl: {
    id: 142,
    name: 'Aerodactyl',
    generation: PokemonGeneration.Gen1,
    cry: 'Aerodactyl!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Flying"],
    stats: { hp: 80, attack: 135, defense: 85, sp_attack: 70, sp_defense: 95, speed: 150 }
  },
  snorlax: {
    id: 143,
    name: 'Snorlax',
    generation: PokemonGeneration.Gen1,
    cry: 'Snorlax!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 160, attack: 110, defense: 65, sp_attack: 65, sp_defense: 110, speed: 30 }
  },
  articuno: {
    id: 144,
    name: 'Articuno',
    generation: PokemonGeneration.Gen1,
    cry: 'Articuno!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 90, attack: 85, defense: 85, sp_attack: 125, sp_defense: 100, speed: 95 }
  },
  zapdos: {
    id: 145,
    name: 'Zapdos',
    generation: PokemonGeneration.Gen1,
    cry: 'Zapdos!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Flying"],
    stats: { hp: 90, attack: 125, defense: 90, sp_attack: 85, sp_defense: 90, speed: 100 }
  },
  moltres: {
    id: 146,
    name: 'Moltres',
    generation: PokemonGeneration.Gen1,
    cry: 'Moltres!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 90, attack: 85, defense: 90, sp_attack: 100, sp_defense: 125, speed: 90 }
  },
  dratini: {
    id: 147,
    name: 'Dratini',
    generation: PokemonGeneration.Gen1,
    cry: 'Dratini!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 41, attack: 64, defense: 45, sp_attack: 50, sp_defense: 50, speed: 50 }
  },
  dragonair: {
    id: 148,
    name: 'Dragonair',
    generation: PokemonGeneration.Gen1,
    cry: 'Dragonair!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 61, attack: 84, defense: 65, sp_attack: 70, sp_defense: 70, speed: 70 }
  },
  dragonite: {
    id: 149,
    name: 'Dragonite',
    generation: PokemonGeneration.Gen1,
    cry: 'Dragonite!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Flying"],
    stats: { hp: 91, attack: 124, defense: 115, sp_attack: 145, sp_defense: 125, speed: 100 }
  },
  mewtwo: {
    id: 150,
    name: 'Mewtwo',
    generation: PokemonGeneration.Gen1,
    cry: 'Mewtwo!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 106, attack: 150, defense: 70, sp_attack: 194, sp_defense: 120, speed: 140 }
  },
  mew: {
    id: 151,
    name: 'Mew',
    generation: PokemonGeneration.Gen1,
    cry: 'Mew!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 }
  },
  // Generation 2
  chikorita: {
    id: 152,
    name: 'Chikorita',
    generation: PokemonGeneration.Gen2,
    cry: 'Chikorita!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 45, attack: 49, defense: 65, sp_attack: 49, sp_defense: 65, speed: 45 }
  },
  bayleef: {
    id: 153,
    name: 'Bayleef',
    generation: PokemonGeneration.Gen2,
    cry: 'Bayleef!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 60, attack: 62, defense: 80, sp_attack: 63, sp_defense: 80, speed: 60 }
  },
  meganium: {
    id: 154,
    name: 'Meganium',
    generation: PokemonGeneration.Gen2,
    cry: 'Meganium!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 80, attack: 82, defense: 100, sp_attack: 83, sp_defense: 100, speed: 80 }
  },
  cyndaquil: {
    id: 155,
    name: 'Cyndaquil',
    generation: PokemonGeneration.Gen2,
    cry: 'Cyndaquil!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 39, attack: 52, defense: 43, sp_attack: 60, sp_defense: 50, speed: 65 }
  },
  quilava: {
    id: 156,
    name: 'Quilava',
    generation: PokemonGeneration.Gen2,
    cry: 'Quilava!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 58, attack: 64, defense: 58, sp_attack: 80, sp_defense: 65, speed: 80 }
  },
  typhlosion: {
    id: 157,
    name: 'Typhlosion',
    generation: PokemonGeneration.Gen2,
    cry: 'Typhlosion!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Ghost"],
    stats: { hp: 73, attack: 84, defense: 78, sp_attack: 119, sp_defense: 85, speed: 95 }
  },
  totodile: {
    id: 158,
    name: 'Totodile',
    generation: PokemonGeneration.Gen2,
    cry: 'Totodile!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 65, defense: 64, sp_attack: 44, sp_defense: 48, speed: 43 }
  },
  croconaw: {
    id: 159,
    name: 'Croconaw',
    generation: PokemonGeneration.Gen2,
    cry: 'Croconaw!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 65, attack: 80, defense: 80, sp_attack: 59, sp_defense: 63, speed: 58 }
  },
  feraligatr: {
    id: 160,
    name: 'Feraligatr',
    generation: PokemonGeneration.Gen2,
    cry: 'Feraligatr!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 85, attack: 105, defense: 100, sp_attack: 79, sp_defense: 83, speed: 78 }
  },
  sentret: {
    id: 161,
    name: 'Sentret',
    generation: PokemonGeneration.Gen2,
    cry: 'Sentret!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 35, attack: 46, defense: 34, sp_attack: 35, sp_defense: 45, speed: 20 }
  },
  furret: {
    id: 162,
    name: 'Furret',
    generation: PokemonGeneration.Gen2,
    cry: 'Furret!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 85, attack: 76, defense: 64, sp_attack: 45, sp_defense: 55, speed: 90 }
  },
  hoothoot: {
    id: 163,
    name: 'Hoothoot',
    generation: PokemonGeneration.Gen2,
    cry: 'Hoothoot!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 60, attack: 30, defense: 30, sp_attack: 36, sp_defense: 56, speed: 50 }
  },
  noctowl: {
    id: 164,
    name: 'Noctowl',
    generation: PokemonGeneration.Gen2,
    cry: 'Noctowl!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 100, attack: 50, defense: 50, sp_attack: 86, sp_defense: 96, speed: 70 }
  },
  ledyba: {
    id: 165,
    name: 'Ledyba',
    generation: PokemonGeneration.Gen2,
    cry: 'Ledyba!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 40, attack: 20, defense: 30, sp_attack: 40, sp_defense: 80, speed: 55 }
  },
  ledian: {
    id: 166,
    name: 'Ledian',
    generation: PokemonGeneration.Gen2,
    cry: 'Ledian!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 55, attack: 35, defense: 50, sp_attack: 55, sp_defense: 110, speed: 85 }
  },
  spinarak: {
    id: 167,
    name: 'Spinarak',
    generation: PokemonGeneration.Gen2,
    cry: 'Spinarak!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 40, attack: 60, defense: 40, sp_attack: 40, sp_defense: 40, speed: 30 }
  },
  ariados: {
    id: 168,
    name: 'Ariados',
    generation: PokemonGeneration.Gen2,
    cry: 'Ariados!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 70, attack: 90, defense: 70, sp_attack: 60, sp_defense: 70, speed: 40 }
  },
  crobat: {
    id: 169,
    name: 'Crobat',
    generation: PokemonGeneration.Gen2,
    cry: 'Crobat!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Flying"],
    stats: { hp: 85, attack: 90, defense: 80, sp_attack: 70, sp_defense: 80, speed: 130 }
  },
  chinchou: {
    id: 170,
    name: 'Chinchou',
    generation: PokemonGeneration.Gen2,
    cry: 'Chinchou!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Electric"],
    stats: { hp: 75, attack: 38, defense: 38, sp_attack: 56, sp_defense: 56, speed: 67 }
  },
  lanturn: {
    id: 171,
    name: 'Lanturn',
    generation: PokemonGeneration.Gen2,
    cry: 'Lanturn!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Electric"],
    stats: { hp: 125, attack: 58, defense: 58, sp_attack: 76, sp_defense: 76, speed: 67 }
  },
  pichu: {
    id: 172,
    name: 'Pichu',
    generation: PokemonGeneration.Gen2,
    cry: 'Pichu!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 20, attack: 40, defense: 15, sp_attack: 35, sp_defense: 35, speed: 60 }
  },
  cleffa: {
    id: 173,
    name: 'Cleffa',
    generation: PokemonGeneration.Gen2,
    cry: 'Cleffa!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 50, attack: 25, defense: 28, sp_attack: 45, sp_defense: 55, speed: 15 }
  },
  igglybuff: {
    id: 174,
    name: 'Igglybuff',
    generation: PokemonGeneration.Gen2,
    cry: 'Igglybuff!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fairy"],
    stats: { hp: 90, attack: 30, defense: 15, sp_attack: 40, sp_defense: 20, speed: 15 }
  },
  togepi: {
    id: 175,
    name: 'Togepi',
    generation: PokemonGeneration.Gen2,
    cry: 'Togepi!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 35, attack: 20, defense: 65, sp_attack: 40, sp_defense: 65, speed: 20 }
  },
  togetic: {
    id: 176,
    name: 'Togetic',
    generation: PokemonGeneration.Gen2,
    cry: 'Togetic!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy", "Flying"],
    stats: { hp: 55, attack: 40, defense: 85, sp_attack: 80, sp_defense: 105, speed: 40 }
  },
  natu: {
    id: 177,
    name: 'Natu',
    generation: PokemonGeneration.Gen2,
    cry: 'Natu!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 40, attack: 50, defense: 45, sp_attack: 70, sp_defense: 45, speed: 70 }
  },
  xatu: {
    id: 178,
    name: 'Xatu',
    generation: PokemonGeneration.Gen2,
    cry: 'Xatu!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 65, attack: 75, defense: 70, sp_attack: 95, sp_defense: 70, speed: 95 }
  },
  mareep: {
    id: 179,
    name: 'Mareep',
    generation: PokemonGeneration.Gen2,
    cry: 'Mareep!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 55, attack: 40, defense: 40, sp_attack: 65, sp_defense: 45, speed: 35 }
  },
  flaaffy: {
    id: 180,
    name: 'Flaaffy',
    generation: PokemonGeneration.Gen2,
    cry: 'Flaaffy!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 70, attack: 55, defense: 55, sp_attack: 80, sp_defense: 60, speed: 45 }
  },
  ampharos: {
    id: 181,
    name: 'Ampharos',
    generation: PokemonGeneration.Gen2,
    cry: 'Ampharos!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Dragon"],
    stats: { hp: 90, attack: 95, defense: 105, sp_attack: 165, sp_defense: 110, speed: 45 }
  },
  bellossom: {
    id: 182,
    name: 'Bellossom',
    generation: PokemonGeneration.Gen2,
    cry: 'Bellossom!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 80, defense: 95, sp_attack: 90, sp_defense: 100, speed: 50 }
  },
  marill: {
    id: 183,
    name: 'Marill',
    generation: PokemonGeneration.Gen2,
    cry: 'Marill!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fairy"],
    stats: { hp: 70, attack: 20, defense: 50, sp_attack: 20, sp_defense: 50, speed: 40 }
  },
  azumarill: {
    id: 184,
    name: 'Azumarill',
    generation: PokemonGeneration.Gen2,
    cry: 'Azumarill!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fairy"],
    stats: { hp: 100, attack: 50, defense: 80, sp_attack: 60, sp_defense: 80, speed: 50 }
  },
  sudowoodo: {
    id: 185,
    name: 'Sudowoodo',
    generation: PokemonGeneration.Gen2,
    cry: 'Sudowoodo!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 70, attack: 100, defense: 115, sp_attack: 30, sp_defense: 65, speed: 30 }
  },
  politoed: {
    id: 186,
    name: 'Politoed',
    generation: PokemonGeneration.Gen2,
    cry: 'Politoed!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 90, attack: 75, defense: 75, sp_attack: 90, sp_defense: 100, speed: 70 }
  },
  hoppip: {
    id: 187,
    name: 'Hoppip',
    generation: PokemonGeneration.Gen2,
    cry: 'Hoppip!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 35, attack: 35, defense: 40, sp_attack: 35, sp_defense: 55, speed: 50 }
  },
  skiploom: {
    id: 188,
    name: 'Skiploom',
    generation: PokemonGeneration.Gen2,
    cry: 'Skiploom!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 55, attack: 45, defense: 50, sp_attack: 45, sp_defense: 65, speed: 80 }
  },
  jumpluff: {
    id: 189,
    name: 'Jumpluff',
    generation: PokemonGeneration.Gen2,
    cry: 'Jumpluff!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 75, attack: 55, defense: 70, sp_attack: 55, sp_defense: 95, speed: 110 }
  },
  aipom: {
    id: 190,
    name: 'Aipom',
    generation: PokemonGeneration.Gen2,
    cry: 'Aipom!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 55, attack: 70, defense: 55, sp_attack: 40, sp_defense: 55, speed: 85 }
  },
  sunkern: {
    id: 191,
    name: 'Sunkern',
    generation: PokemonGeneration.Gen2,
    cry: 'Sunkern!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 30, attack: 30, defense: 30, sp_attack: 30, sp_defense: 30, speed: 30 }
  },
  sunflora: {
    id: 192,
    name: 'Sunflora',
    generation: PokemonGeneration.Gen2,
    cry: 'Sunflora!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 75, defense: 55, sp_attack: 105, sp_defense: 85, speed: 30 }
  },
  yanma: {
    id: 193,
    name: 'Yanma',
    generation: PokemonGeneration.Gen2,
    cry: 'Yanma!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 65, attack: 65, defense: 45, sp_attack: 75, sp_defense: 45, speed: 95 }
  },
  wooper: {
    id: 194,
    name: 'Wooper',
    generation: PokemonGeneration.Gen2,
    cry: 'Wooper!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Ground"],
    stats: { hp: 55, attack: 45, defense: 45, sp_attack: 25, sp_defense: 25, speed: 15 }
  },
  quagsire: {
    id: 195,
    name: 'Quagsire',
    generation: PokemonGeneration.Gen2,
    cry: 'Quagsire!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 95, attack: 85, defense: 85, sp_attack: 65, sp_defense: 65, speed: 35 }
  },
  espeon: {
    id: 196,
    name: 'Espeon',
    generation: PokemonGeneration.Gen2,
    cry: 'Espeon!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 65, attack: 65, defense: 60, sp_attack: 130, sp_defense: 95, speed: 110 }
  },
  umbreon: {
    id: 197,
    name: 'Umbreon',
    generation: PokemonGeneration.Gen2,
    cry: 'Umbreon!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 95, attack: 65, defense: 110, sp_attack: 60, sp_defense: 130, speed: 65 }
  },
  murkrow: {
    id: 198,
    name: 'Murkrow',
    generation: PokemonGeneration.Gen2,
    cry: 'Murkrow!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 60, attack: 85, defense: 42, sp_attack: 85, sp_defense: 42, speed: 91 }
  },
  slowking: {
    id: 199,
    name: 'Slowking',
    generation: PokemonGeneration.Gen2,
    cry: 'Slowking!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Psychic"],
    stats: { hp: 95, attack: 65, defense: 80, sp_attack: 110, sp_defense: 110, speed: 30 }
  },
  misdreavus: {
    id: 200,
    name: 'Misdreavus',
    generation: PokemonGeneration.Gen2,
    cry: 'Misdreavus!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 60, attack: 60, defense: 60, sp_attack: 85, sp_defense: 85, speed: 85 }
  },
  wobbuffet: {
    id: 202,
    name: 'Wobbuffet',
    generation: PokemonGeneration.Gen2,
    cry: 'Wobbuffet!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 190, attack: 33, defense: 58, sp_attack: 33, sp_defense: 58, speed: 33 }
  },
  girafarig: {
    id: 203,
    name: 'Girafarig',
    generation: PokemonGeneration.Gen2,
    cry: 'Girafarig!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Psychic"],
    stats: { hp: 70, attack: 80, defense: 65, sp_attack: 90, sp_defense: 65, speed: 85 }
  },
  pineco: {
    id: 204,
    name: 'Pineco',
    generation: PokemonGeneration.Gen2,
    cry: 'Pineco!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 65, defense: 90, sp_attack: 35, sp_defense: 35, speed: 15 }
  },
  forretress: {
    id: 205,
    name: 'Forretress',
    generation: PokemonGeneration.Gen2,
    cry: 'Forretress!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 75, attack: 90, defense: 140, sp_attack: 60, sp_defense: 60, speed: 40 }
  },
  dunsparce: {
    id: 206,
    name: 'Dunsparce',
    generation: PokemonGeneration.Gen2,
    cry: 'Dunsparce!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 100, attack: 70, defense: 70, sp_attack: 65, sp_defense: 65, speed: 45 }
  },
  gligar: {
    id: 207,
    name: 'Gligar',
    generation: PokemonGeneration.Gen2,
    cry: 'Gligar!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Flying"],
    stats: { hp: 65, attack: 75, defense: 105, sp_attack: 35, sp_defense: 65, speed: 85 }
  },
  steelix: {
    id: 208,
    name: 'Steelix',
    generation: PokemonGeneration.Gen2,
    cry: 'Steelix!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Steel", "Ground"],
    stats: { hp: 75, attack: 125, defense: 230, sp_attack: 55, sp_defense: 95, speed: 30 }
  },
  snubbull: {
    id: 209,
    name: 'Snubbull',
    generation: PokemonGeneration.Gen2,
    cry: 'Snubbull!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 60, attack: 80, defense: 50, sp_attack: 40, sp_defense: 40, speed: 30 }
  },
  granbull: {
    id: 210,
    name: 'Granbull',
    generation: PokemonGeneration.Gen2,
    cry: 'Granbull!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 90, attack: 120, defense: 75, sp_attack: 60, sp_defense: 60, speed: 45 }
  },
  qwilfish: {
    id: 211,
    name: 'Qwilfish',
    generation: PokemonGeneration.Gen2,
    cry: 'Qwilfish!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Poison"],
    stats: { hp: 65, attack: 95, defense: 85, sp_attack: 55, sp_defense: 55, speed: 85 }
  },
  scizor: {
    id: 212,
    name: 'Scizor',
    generation: PokemonGeneration.Gen2,
    cry: 'Scizor!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 70, attack: 150, defense: 140, sp_attack: 65, sp_defense: 100, speed: 75 }
  },
  shuckle: {
    id: 213,
    name: 'Shuckle',
    generation: PokemonGeneration.Gen2,
    cry: 'Shuckle!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Rock"],
    stats: { hp: 20, attack: 10, defense: 230, sp_attack: 10, sp_defense: 230, speed: 5 }
  },
  heracross: {
    id: 214,
    name: 'Heracross',
    generation: PokemonGeneration.Gen2,
    cry: 'Heracross!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fighting"],
    stats: { hp: 80, attack: 185, defense: 115, sp_attack: 40, sp_defense: 105, speed: 75 }
  },
  sneasel: {
    id: 215,
    name: 'Sneasel',
    generation: PokemonGeneration.Gen2,
    cry: 'Sneasel!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Poison"],
    stats: { hp: 55, attack: 95, defense: 55, sp_attack: 35, sp_defense: 75, speed: 115 }
  },
  teddiursa: {
    id: 216,
    name: 'Teddiursa',
    generation: PokemonGeneration.Gen2,
    cry: 'Teddiursa!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 60, attack: 80, defense: 50, sp_attack: 50, sp_defense: 50, speed: 40 }
  },
  ursaring: {
    id: 217,
    name: 'Ursaring',
    generation: PokemonGeneration.Gen2,
    cry: 'Ursaring!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 90, attack: 130, defense: 75, sp_attack: 75, sp_defense: 75, speed: 55 }
  },
  slugma: {
    id: 218,
    name: 'Slugma',
    generation: PokemonGeneration.Gen2,
    cry: 'Slugma!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 40, attack: 40, defense: 40, sp_attack: 70, sp_defense: 40, speed: 20 }
  },
  magcargo: {
    id: 219,
    name: 'Magcargo',
    generation: PokemonGeneration.Gen2,
    cry: 'Magcargo!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Rock"],
    stats: { hp: 60, attack: 50, defense: 120, sp_attack: 90, sp_defense: 80, speed: 30 }
  },
  swinub: {
    id: 220,
    name: 'Swinub',
    generation: PokemonGeneration.Gen2,
    cry: 'Swinub!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Ground"],
    stats: { hp: 50, attack: 50, defense: 40, sp_attack: 30, sp_defense: 30, speed: 50 }
  },
  piloswine: {
    id: 221,
    name: 'Piloswine',
    generation: PokemonGeneration.Gen2,
    cry: 'Piloswine!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Ground"],
    stats: { hp: 100, attack: 100, defense: 80, sp_attack: 60, sp_defense: 60, speed: 50 }
  },
  corsola: {
    id: 222,
    name: 'Corsola',
    generation: PokemonGeneration.Gen2,
    cry: 'Corsola!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 60, attack: 55, defense: 100, sp_attack: 65, sp_defense: 100, speed: 30 }
  },
  remoraid: {
    id: 223,
    name: 'Remoraid',
    generation: PokemonGeneration.Gen2,
    cry: 'Remoraid!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 35, attack: 65, defense: 35, sp_attack: 65, sp_defense: 35, speed: 65 }
  },
  octillery: {
    id: 224,
    name: 'Octillery',
    generation: PokemonGeneration.Gen2,
    cry: 'Octillery!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 75, attack: 105, defense: 75, sp_attack: 105, sp_defense: 75, speed: 45 }
  },
  delibird: {
    id: 225,
    name: 'Delibird',
    generation: PokemonGeneration.Gen2,
    cry: 'Delibird!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Flying"],
    stats: { hp: 45, attack: 55, defense: 45, sp_attack: 65, sp_defense: 45, speed: 75 }
  },
  mantine: {
    id: 226,
    name: 'Mantine',
    generation: PokemonGeneration.Gen2,
    cry: 'Mantine!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 85, attack: 40, defense: 70, sp_attack: 80, sp_defense: 140, speed: 70 }
  },
  skarmory: {
    id: 227,
    name: 'Skarmory',
    generation: PokemonGeneration.Gen2,
    cry: 'Skarmory!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Flying"],
    stats: { hp: 65, attack: 80, defense: 140, sp_attack: 40, sp_defense: 70, speed: 70 }
  },
  houndour: {
    id: 228,
    name: 'Houndour',
    generation: PokemonGeneration.Gen2,
    cry: 'Houndour!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Fire"],
    stats: { hp: 45, attack: 60, defense: 30, sp_attack: 80, sp_defense: 50, speed: 65 }
  },
  houndoom: {
    id: 229,
    name: 'Houndoom',
    generation: PokemonGeneration.Gen2,
    cry: 'Houndoom!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Fire"],
    stats: { hp: 75, attack: 90, defense: 90, sp_attack: 140, sp_defense: 90, speed: 115 }
  },
  kingdra: {
    id: 230,
    name: 'Kingdra',
    generation: PokemonGeneration.Gen2,
    cry: 'Kingdra!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dragon"],
    stats: { hp: 75, attack: 95, defense: 95, sp_attack: 95, sp_defense: 95, speed: 85 }
  },
  phanpy: {
    id: 231,
    name: 'Phanpy',
    generation: PokemonGeneration.Gen2,
    cry: 'Phanpy!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 90, attack: 60, defense: 60, sp_attack: 40, sp_defense: 40, speed: 40 }
  },
  donphan: {
    id: 232,
    name: 'Donphan',
    generation: PokemonGeneration.Gen2,
    cry: 'Donphan!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 90, attack: 120, defense: 120, sp_attack: 60, sp_defense: 60, speed: 50 }
  },
  porygon2: {
    id: 233,
    name: 'Porygon2',
    generation: PokemonGeneration.Gen2,
    cry: 'Porygon2!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 85, attack: 80, defense: 90, sp_attack: 105, sp_defense: 95, speed: 60 }
  },
  stantler: {
    id: 234,
    name: 'Stantler',
    generation: PokemonGeneration.Gen2,
    cry: 'Stantler!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 73, attack: 95, defense: 62, sp_attack: 85, sp_defense: 65, speed: 85 }
  },
  smeargle: {
    id: 235,
    name: 'Smeargle',
    generation: PokemonGeneration.Gen2,
    cry: 'Smeargle!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 55, attack: 20, defense: 35, sp_attack: 20, sp_defense: 45, speed: 75 }
  },
  tyrogue: {
    id: 236,
    name: 'Tyrogue',
    generation: PokemonGeneration.Gen2,
    cry: 'Tyrogue!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 35, attack: 35, defense: 35, sp_attack: 35, sp_defense: 35, speed: 35 }
  },
  hitmontop: {
    id: 237,
    name: 'Hitmontop',
    generation: PokemonGeneration.Gen2,
    cry: 'Hitmontop!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 50, attack: 95, defense: 95, sp_attack: 35, sp_defense: 110, speed: 70 }
  },
  smoochum: {
    id: 238,
    name: 'Smoochum',
    generation: PokemonGeneration.Gen2,
    cry: 'Smoochum!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Psychic"],
    stats: { hp: 45, attack: 30, defense: 15, sp_attack: 85, sp_defense: 65, speed: 65 }
  },
  elekid: {
    id: 239,
    name: 'Elekid',
    generation: PokemonGeneration.Gen2,
    cry: 'Elekid!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 45, attack: 63, defense: 37, sp_attack: 65, sp_defense: 55, speed: 95 }
  },
  magby: {
    id: 240,
    name: 'Magby',
    generation: PokemonGeneration.Gen2,
    cry: 'Magby!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 45, attack: 75, defense: 37, sp_attack: 70, sp_defense: 55, speed: 83 }
  },
  miltank: {
    id: 241,
    name: 'Miltank',
    generation: PokemonGeneration.Gen2,
    cry: 'Miltank!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 95, attack: 80, defense: 105, sp_attack: 40, sp_defense: 70, speed: 100 }
  },
  blissey: {
    id: 242,
    name: 'Blissey',
    generation: PokemonGeneration.Gen2,
    cry: 'Blissey!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 255, attack: 10, defense: 10, sp_attack: 75, sp_defense: 135, speed: 55 }
  },
  raikou: {
    id: 243,
    name: 'Raikou',
    generation: PokemonGeneration.Gen2,
    cry: 'Raikou!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 90, attack: 85, defense: 75, sp_attack: 115, sp_defense: 100, speed: 115 }
  },
  entei: {
    id: 244,
    name: 'Entei',
    generation: PokemonGeneration.Gen2,
    cry: 'Entei!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 115, attack: 115, defense: 85, sp_attack: 90, sp_defense: 75, speed: 100 }
  },
  suicune: {
    id: 245,
    name: 'Suicune',
    generation: PokemonGeneration.Gen2,
    cry: 'Suicune!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 100, attack: 75, defense: 115, sp_attack: 90, sp_defense: 115, speed: 85 }
  },
  larvitar: {
    id: 246,
    name: 'Larvitar',
    generation: PokemonGeneration.Gen2,
    cry: 'Larvitar!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Ground"],
    stats: { hp: 50, attack: 64, defense: 50, sp_attack: 45, sp_defense: 50, speed: 41 }
  },
  pupitar: {
    id: 247,
    name: 'Pupitar',
    generation: PokemonGeneration.Gen2,
    cry: 'Pupitar!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Ground"],
    stats: { hp: 70, attack: 84, defense: 70, sp_attack: 65, sp_defense: 70, speed: 51 }
  },
  tyranitar: {
    id: 248,
    name: 'Tyranitar',
    generation: PokemonGeneration.Gen2,
    cry: 'Tyranitar!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Dark"],
    stats: { hp: 100, attack: 164, defense: 150, sp_attack: 95, sp_defense: 120, speed: 71 }
  },
  lugia: {
    id: 249,
    name: 'Lugia',
    generation: PokemonGeneration.Gen2,
    cry: 'Lugia!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Psychic", "Flying"],
    stats: { hp: 106, attack: 90, defense: 130, sp_attack: 90, sp_defense: 154, speed: 110 }
  },
  hooh: {
    id: 250,
    name: 'Ho-Oh',
    generation: PokemonGeneration.Gen2,
    cry: 'Ho-Oh!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Fire", "Flying"],
    stats: { hp: 106, attack: 130, defense: 90, sp_attack: 110, sp_defense: 154, speed: 90 }
  },
  celebi: {
    id: 251,
    name: 'Celebi',
    generation: PokemonGeneration.Gen2,
    cry: 'Celebi!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Grass"],
    stats: { hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 }
  },
  // Generation 3
  treecko: {
    id: 252,
    name: 'Treecko',
    generation: PokemonGeneration.Gen3,
    cry: 'Treecko!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 40, attack: 45, defense: 35, sp_attack: 65, sp_defense: 55, speed: 70 }
  },
  grovyle: {
    id: 253,
    name: 'Grovyle',
    generation: PokemonGeneration.Gen3,
    cry: 'Grovyle!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 50, attack: 65, defense: 45, sp_attack: 85, sp_defense: 65, speed: 95 }
  },
  sceptile: {
    id: 254,
    name: 'Sceptile',
    generation: PokemonGeneration.Gen3,
    cry: 'Sceptile!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Dragon"],
    stats: { hp: 70, attack: 110, defense: 75, sp_attack: 145, sp_defense: 85, speed: 145 }
  },
  torchic: {
    id: 255,
    name: 'Torchic',
    generation: PokemonGeneration.Gen3,
    cry: 'Torchic!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 45, attack: 60, defense: 40, sp_attack: 70, sp_defense: 50, speed: 45 }
  },
  combusken: {
    id: 256,
    name: 'Combusken',
    generation: PokemonGeneration.Gen3,
    cry: 'Combusken!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 60, attack: 85, defense: 60, sp_attack: 85, sp_defense: 60, speed: 55 }
  },
  blaziken: {
    id: 257,
    name: 'Blaziken',
    generation: PokemonGeneration.Gen3,
    cry: 'Blaziken!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 80, attack: 160, defense: 80, sp_attack: 130, sp_defense: 80, speed: 100 }
  },
  mudkip: {
    id: 258,
    name: 'Mudkip',
    generation: PokemonGeneration.Gen3,
    cry: 'Mudkip!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 70, defense: 50, sp_attack: 50, sp_defense: 50, speed: 40 }
  },
  marshtomp: {
    id: 259,
    name: 'Marshtomp',
    generation: PokemonGeneration.Gen3,
    cry: 'Marshtomp!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 70, attack: 85, defense: 70, sp_attack: 60, sp_defense: 70, speed: 50 }
  },
  swampert: {
    id: 260,
    name: 'Swampert',
    generation: PokemonGeneration.Gen3,
    cry: 'Swampert!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 100, attack: 150, defense: 110, sp_attack: 95, sp_defense: 110, speed: 70 }
  },
  poochyena: {
    id: 261,
    name: 'Poochyena',
    generation: PokemonGeneration.Gen3,
    cry: 'Poochyena!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 35, attack: 55, defense: 35, sp_attack: 30, sp_defense: 30, speed: 35 }
  },
  mightyena: {
    id: 262,
    name: 'Mightyena',
    generation: PokemonGeneration.Gen3,
    cry: 'Mightyena!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 70, attack: 90, defense: 70, sp_attack: 60, sp_defense: 60, speed: 70 }
  },
  zigzagoon: {
    id: 263,
    name: 'Zigzagoon',
    generation: PokemonGeneration.Gen3,
    cry: 'Zigzagoon!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Normal"],
    stats: { hp: 38, attack: 30, defense: 41, sp_attack: 30, sp_defense: 41, speed: 60 }
  },
  linoone: {
    id: 264,
    name: 'Linoone',
    generation: PokemonGeneration.Gen3,
    cry: 'Linoone!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Normal"],
    stats: { hp: 78, attack: 70, defense: 61, sp_attack: 50, sp_defense: 61, speed: 100 }
  },
  wurmple: {
    id: 265,
    name: 'Wurmple',
    generation: PokemonGeneration.Gen3,
    cry: 'Wurmple!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 45, attack: 45, defense: 35, sp_attack: 20, sp_defense: 30, speed: 20 }
  },
  silcoon: {
    id: 266,
    name: 'Silcoon',
    generation: PokemonGeneration.Gen3,
    cry: 'Silcoon!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 35, defense: 55, sp_attack: 25, sp_defense: 25, speed: 15 }
  },
  beautifly: {
    id: 267,
    name: 'Beautifly',
    generation: PokemonGeneration.Gen3,
    cry: 'Beautifly!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 60, attack: 70, defense: 50, sp_attack: 100, sp_defense: 50, speed: 65 }
  },
  cascoon: {
    id: 268,
    name: 'Cascoon',
    generation: PokemonGeneration.Gen3,
    cry: 'Cascoon!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 35, defense: 55, sp_attack: 25, sp_defense: 25, speed: 15 }
  },
  dustox: {
    id: 269,
    name: 'Dustox',
    generation: PokemonGeneration.Gen3,
    cry: 'Dustox!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 60, attack: 50, defense: 70, sp_attack: 50, sp_defense: 90, speed: 65 }
  },
  lotad: {
    id: 270,
    name: 'Lotad',
    generation: PokemonGeneration.Gen3,
    cry: 'Lotad!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Grass"],
    stats: { hp: 40, attack: 30, defense: 30, sp_attack: 40, sp_defense: 50, speed: 30 }
  },
  lombre: {
    id: 271,
    name: 'Lombre',
    generation: PokemonGeneration.Gen3,
    cry: 'Lombre!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Grass"],
    stats: { hp: 60, attack: 50, defense: 50, sp_attack: 60, sp_defense: 70, speed: 50 }
  },
  ludicolo: {
    id: 272,
    name: 'Ludicolo',
    generation: PokemonGeneration.Gen3,
    cry: 'Ludicolo!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Grass"],
    stats: { hp: 80, attack: 70, defense: 70, sp_attack: 90, sp_defense: 100, speed: 70 }
  },
  seedot: {
    id: 273,
    name: 'Seedot',
    generation: PokemonGeneration.Gen3,
    cry: 'Seedot!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 40, attack: 40, defense: 50, sp_attack: 30, sp_defense: 30, speed: 30 }
  },
  nuzleaf: {
    id: 274,
    name: 'Nuzleaf',
    generation: PokemonGeneration.Gen3,
    cry: 'Nuzleaf!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Dark"],
    stats: { hp: 70, attack: 70, defense: 40, sp_attack: 60, sp_defense: 40, speed: 60 }
  },
  shiftry: {
    id: 275,
    name: 'Shiftry',
    generation: PokemonGeneration.Gen3,
    cry: 'Shiftry!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Dark"],
    stats: { hp: 90, attack: 100, defense: 60, sp_attack: 90, sp_defense: 60, speed: 80 }
  },
  taillow: {
    id: 276,
    name: 'Taillow',
    generation: PokemonGeneration.Gen3,
    cry: 'Taillow!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 40, attack: 55, defense: 30, sp_attack: 30, sp_defense: 30, speed: 85 }
  },
  swellow: {
    id: 277,
    name: 'Swellow',
    generation: PokemonGeneration.Gen3,
    cry: 'Swellow!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 60, attack: 85, defense: 60, sp_attack: 75, sp_defense: 50, speed: 125 }
  },
  wingull: {
    id: 278,
    name: 'Wingull',
    generation: PokemonGeneration.Gen3,
    cry: 'Wingull!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 40, attack: 30, defense: 30, sp_attack: 55, sp_defense: 30, speed: 85 }
  },
  pelipper: {
    id: 279,
    name: 'Pelipper',
    generation: PokemonGeneration.Gen3,
    cry: 'Pelipper!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 60, attack: 50, defense: 100, sp_attack: 95, sp_defense: 70, speed: 65 }
  },
  ralts: {
    id: 280,
    name: 'Ralts',
    generation: PokemonGeneration.Gen3,
    cry: 'Ralts!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 28, attack: 25, defense: 25, sp_attack: 45, sp_defense: 35, speed: 40 }
  },
  kirlia: {
    id: 281,
    name: 'Kirlia',
    generation: PokemonGeneration.Gen3,
    cry: 'Kirlia!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 38, attack: 35, defense: 35, sp_attack: 65, sp_defense: 55, speed: 50 }
  },
  gardevoir: {
    id: 282,
    name: 'Gardevoir',
    generation: PokemonGeneration.Gen3,
    cry: 'Gardevoir!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 68, attack: 85, defense: 65, sp_attack: 165, sp_defense: 135, speed: 100 }
  },
  surskit: {
    id: 283,
    name: 'Surskit',
    generation: PokemonGeneration.Gen3,
    cry: 'Surskit!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Water"],
    stats: { hp: 40, attack: 30, defense: 32, sp_attack: 50, sp_defense: 52, speed: 65 }
  },
  masquerain: {
    id: 284,
    name: 'Masquerain',
    generation: PokemonGeneration.Gen3,
    cry: 'Masquerain!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 70, attack: 60, defense: 62, sp_attack: 100, sp_defense: 82, speed: 80 }
  },
  shroomish: {
    id: 285,
    name: 'Shroomish',
    generation: PokemonGeneration.Gen3,
    cry: 'Shroomish!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 60, attack: 40, defense: 60, sp_attack: 40, sp_defense: 60, speed: 35 }
  },
  breloom: {
    id: 286,
    name: 'Breloom',
    generation: PokemonGeneration.Gen3,
    cry: 'Breloom!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fighting"],
    stats: { hp: 60, attack: 130, defense: 80, sp_attack: 60, sp_defense: 60, speed: 70 }
  },
  slakoth: {
    id: 287,
    name: 'Slakoth',
    generation: PokemonGeneration.Gen3,
    cry: 'Slakoth!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 60, attack: 60, defense: 60, sp_attack: 35, sp_defense: 35, speed: 30 }
  },
  vigoroth: {
    id: 288,
    name: 'Vigoroth',
    generation: PokemonGeneration.Gen3,
    cry: 'Vigoroth!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 80, attack: 80, defense: 80, sp_attack: 55, sp_defense: 55, speed: 90 }
  },
  slaking: {
    id: 289,
    name: 'Slaking',
    generation: PokemonGeneration.Gen3,
    cry: 'Slaking!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 150, attack: 160, defense: 100, sp_attack: 95, sp_defense: 65, speed: 100 }
  },
  nincada: {
    id: 290,
    name: 'Nincada',
    generation: PokemonGeneration.Gen3,
    cry: 'Nincada!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Ground"],
    stats: { hp: 31, attack: 45, defense: 90, sp_attack: 30, sp_defense: 30, speed: 40 }
  },
  ninjask: {
    id: 291,
    name: 'Ninjask',
    generation: PokemonGeneration.Gen3,
    cry: 'Ninjask!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 61, attack: 90, defense: 45, sp_attack: 50, sp_defense: 50, speed: 160 }
  },
  shedinja: {
    id: 292,
    name: 'Shedinja',
    generation: PokemonGeneration.Gen3,
    cry: 'Shedinja!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Ghost"],
    stats: { hp: 1, attack: 90, defense: 45, sp_attack: 30, sp_defense: 30, speed: 40 }
  },
  whismur: {
    id: 293,
    name: 'Whismur',
    generation: PokemonGeneration.Gen3,
    cry: 'Whismur!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 64, attack: 51, defense: 23, sp_attack: 51, sp_defense: 23, speed: 28 }
  },
  loudred: {
    id: 294,
    name: 'Loudred',
    generation: PokemonGeneration.Gen3,
    cry: 'Loudred!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 84, attack: 71, defense: 43, sp_attack: 71, sp_defense: 43, speed: 48 }
  },
  exploud: {
    id: 295,
    name: 'Exploud',
    generation: PokemonGeneration.Gen3,
    cry: 'Exploud!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 104, attack: 91, defense: 63, sp_attack: 91, sp_defense: 73, speed: 68 }
  },
  makuhita: {
    id: 296,
    name: 'Makuhita',
    generation: PokemonGeneration.Gen3,
    cry: 'Makuhita!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 72, attack: 60, defense: 30, sp_attack: 20, sp_defense: 30, speed: 25 }
  },
  hariyama: {
    id: 297,
    name: 'Hariyama',
    generation: PokemonGeneration.Gen3,
    cry: 'Hariyama!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 144, attack: 120, defense: 60, sp_attack: 40, sp_defense: 60, speed: 50 }
  },
  azurill: {
    id: 298,
    name: 'Azurill',
    generation: PokemonGeneration.Gen3,
    cry: 'Azurill!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fairy"],
    stats: { hp: 50, attack: 20, defense: 40, sp_attack: 20, sp_defense: 40, speed: 20 }
  },
  nosepass: {
    id: 299,
    name: 'Nosepass',
    generation: PokemonGeneration.Gen3,
    cry: 'Nosepass!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 30, attack: 45, defense: 135, sp_attack: 45, sp_defense: 90, speed: 30 }
  },
  skitty: {
    id: 300,
    name: 'Skitty',
    generation: PokemonGeneration.Gen3,
    cry: 'Skitty!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 50, attack: 45, defense: 45, sp_attack: 35, sp_defense: 35, speed: 50 }
  },
  delcatty: {
    id: 301,
    name: 'Delcatty',
    generation: PokemonGeneration.Gen3,
    cry: 'Delcatty!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 70, attack: 65, defense: 65, sp_attack: 55, sp_defense: 55, speed: 90 }
  },
  sableye: {
    id: 302,
    name: 'Sableye',
    generation: PokemonGeneration.Gen3,
    cry: 'Sableye!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Ghost"],
    stats: { hp: 50, attack: 85, defense: 125, sp_attack: 85, sp_defense: 115, speed: 20 }
  },
  mawile: {
    id: 303,
    name: 'Mawile',
    generation: PokemonGeneration.Gen3,
    cry: 'Mawile!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Fairy"],
    stats: { hp: 50, attack: 105, defense: 125, sp_attack: 55, sp_defense: 95, speed: 50 }
  },
  aron: {
    id: 304,
    name: 'Aron',
    generation: PokemonGeneration.Gen3,
    cry: 'Aron!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Rock"],
    stats: { hp: 50, attack: 70, defense: 100, sp_attack: 40, sp_defense: 40, speed: 30 }
  },
  lairon: {
    id: 305,
    name: 'Lairon',
    generation: PokemonGeneration.Gen3,
    cry: 'Lairon!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Rock"],
    stats: { hp: 60, attack: 90, defense: 140, sp_attack: 50, sp_defense: 50, speed: 40 }
  },
  aggron: {
    id: 306,
    name: 'Aggron',
    generation: PokemonGeneration.Gen3,
    cry: 'Aggron!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 70, attack: 140, defense: 230, sp_attack: 60, sp_defense: 80, speed: 50 }
  },
  meditite: {
    id: 307,
    name: 'Meditite',
    generation: PokemonGeneration.Gen3,
    cry: 'Meditite!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Psychic"],
    stats: { hp: 30, attack: 40, defense: 55, sp_attack: 40, sp_defense: 55, speed: 60 }
  },
  medicham: {
    id: 308,
    name: 'Medicham',
    generation: PokemonGeneration.Gen3,
    cry: 'Medicham!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Psychic"],
    stats: { hp: 60, attack: 100, defense: 85, sp_attack: 80, sp_defense: 85, speed: 100 }
  },
  electrike: {
    id: 309,
    name: 'Electrike',
    generation: PokemonGeneration.Gen3,
    cry: 'Electrike!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 40, attack: 45, defense: 40, sp_attack: 65, sp_defense: 40, speed: 65 }
  },
  manectric: {
    id: 310,
    name: 'Manectric',
    generation: PokemonGeneration.Gen3,
    cry: 'Manectric!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 70, attack: 75, defense: 80, sp_attack: 135, sp_defense: 80, speed: 135 }
  },
  plusle: {
    id: 311,
    name: 'Plusle',
    generation: PokemonGeneration.Gen3,
    cry: 'Plusle!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 60, attack: 50, defense: 40, sp_attack: 85, sp_defense: 75, speed: 95 }
  },
  minun: {
    id: 312,
    name: 'Minun',
    generation: PokemonGeneration.Gen3,
    cry: 'Minun!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 60, attack: 40, defense: 50, sp_attack: 75, sp_defense: 85, speed: 95 }
  },
  volbeat: {
    id: 313,
    name: 'Volbeat',
    generation: PokemonGeneration.Gen3,
    cry: 'Volbeat!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 65, attack: 73, defense: 75, sp_attack: 47, sp_defense: 85, speed: 85 }
  },
  illumise: {
    id: 314,
    name: 'Illumise',
    generation: PokemonGeneration.Gen3,
    cry: 'Illumise!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 65, attack: 47, defense: 75, sp_attack: 73, sp_defense: 85, speed: 85 }
  },
  roselia: {
    id: 315,
    name: 'Roselia',
    generation: PokemonGeneration.Gen3,
    cry: 'Roselia!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 50, attack: 60, defense: 45, sp_attack: 100, sp_defense: 80, speed: 65 }
  },
  gulpin: {
    id: 316,
    name: 'Gulpin',
    generation: PokemonGeneration.Gen3,
    cry: 'Gulpin!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 70, attack: 43, defense: 53, sp_attack: 43, sp_defense: 53, speed: 40 }
  },
  swalot: {
    id: 317,
    name: 'Swalot',
    generation: PokemonGeneration.Gen3,
    cry: 'Swalot!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 100, attack: 73, defense: 83, sp_attack: 73, sp_defense: 83, speed: 55 }
  },
  carvanha: {
    id: 318,
    name: 'Carvanha',
    generation: PokemonGeneration.Gen3,
    cry: 'Carvanha!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 45, attack: 90, defense: 20, sp_attack: 65, sp_defense: 20, speed: 65 }
  },
  sharpedo: {
    id: 319,
    name: 'Sharpedo',
    generation: PokemonGeneration.Gen3,
    cry: 'Sharpedo!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 70, attack: 140, defense: 70, sp_attack: 110, sp_defense: 65, speed: 105 }
  },
  wailmer: {
    id: 320,
    name: 'Wailmer',
    generation: PokemonGeneration.Gen3,
    cry: 'Wailmer!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 130, attack: 70, defense: 35, sp_attack: 70, sp_defense: 35, speed: 60 }
  },
  wailord: {
    id: 321,
    name: 'Wailord',
    generation: PokemonGeneration.Gen3,
    cry: 'Wailord!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Water"],
    stats: { hp: 170, attack: 90, defense: 45, sp_attack: 90, sp_defense: 45, speed: 60 }
  },
  numel: {
    id: 322,
    name: 'Numel',
    generation: PokemonGeneration.Gen3,
    cry: 'Numel!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Ground"],
    stats: { hp: 60, attack: 60, defense: 40, sp_attack: 65, sp_defense: 45, speed: 35 }
  },
  camerupt: {
    id: 323,
    name: 'Camerupt',
    generation: PokemonGeneration.Gen3,
    cry: 'Camerupt!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Ground"],
    stats: { hp: 70, attack: 120, defense: 100, sp_attack: 145, sp_defense: 105, speed: 20 }
  },
  torkoal: {
    id: 324,
    name: 'Torkoal',
    generation: PokemonGeneration.Gen3,
    cry: 'Torkoal!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 70, attack: 85, defense: 140, sp_attack: 85, sp_defense: 70, speed: 20 }
  },
  spoink: {
    id: 325,
    name: 'Spoink',
    generation: PokemonGeneration.Gen3,
    cry: 'Spoink!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 60, attack: 25, defense: 35, sp_attack: 70, sp_defense: 80, speed: 60 }
  },
  grumpig: {
    id: 326,
    name: 'Grumpig',
    generation: PokemonGeneration.Gen3,
    cry: 'Grumpig!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 80, attack: 45, defense: 65, sp_attack: 90, sp_defense: 110, speed: 80 }
  },
  spinda: {
    id: 327,
    name: 'Spinda',
    generation: PokemonGeneration.Gen3,
    cry: 'Spinda!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 60, attack: 60, defense: 60, sp_attack: 60, sp_defense: 60, speed: 60 }
  },
  trapinch: {
    id: 328,
    name: 'Trapinch',
    generation: PokemonGeneration.Gen3,
    cry: 'Trapinch!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 45, attack: 100, defense: 45, sp_attack: 45, sp_defense: 45, speed: 10 }
  },
  vibrava: {
    id: 329,
    name: 'Vibrava',
    generation: PokemonGeneration.Gen3,
    cry: 'Vibrava!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Dragon"],
    stats: { hp: 50, attack: 70, defense: 50, sp_attack: 50, sp_defense: 50, speed: 70 }
  },
  flygon: {
    id: 330,
    name: 'Flygon',
    generation: PokemonGeneration.Gen3,
    cry: 'Flygon!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Dragon"],
    stats: { hp: 80, attack: 100, defense: 80, sp_attack: 80, sp_defense: 80, speed: 100 }
  },
  cacnea: {
    id: 331,
    name: 'Cacnea',
    generation: PokemonGeneration.Gen3,
    cry: 'Cacnea!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 50, attack: 85, defense: 40, sp_attack: 85, sp_defense: 40, speed: 35 }
  },
  cacturne: {
    id: 332,
    name: 'Cacturne',
    generation: PokemonGeneration.Gen3,
    cry: 'Cacturne!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Dark"],
    stats: { hp: 70, attack: 115, defense: 60, sp_attack: 115, sp_defense: 60, speed: 55 }
  },
  swablu: {
    id: 333,
    name: 'Swablu',
    generation: PokemonGeneration.Gen3,
    cry: 'Swablu!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 45, attack: 40, defense: 60, sp_attack: 40, sp_defense: 75, speed: 50 }
  },
  altaria: {
    id: 334,
    name: 'Altaria',
    generation: PokemonGeneration.Gen3,
    cry: 'Altaria!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Fairy"],
    stats: { hp: 75, attack: 110, defense: 110, sp_attack: 110, sp_defense: 105, speed: 80 }
  },
  zangoose: {
    id: 335,
    name: 'Zangoose',
    generation: PokemonGeneration.Gen3,
    cry: 'Zangoose!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 73, attack: 115, defense: 60, sp_attack: 60, sp_defense: 60, speed: 90 }
  },
  seviper: {
    id: 336,
    name: 'Seviper',
    generation: PokemonGeneration.Gen3,
    cry: 'Seviper!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 73, attack: 100, defense: 60, sp_attack: 100, sp_defense: 60, speed: 65 }
  },
  lunatone: {
    id: 337,
    name: 'Lunatone',
    generation: PokemonGeneration.Gen3,
    cry: 'Lunatone!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Psychic"],
    stats: { hp: 90, attack: 55, defense: 65, sp_attack: 95, sp_defense: 85, speed: 70 }
  },
  solrock: {
    id: 338,
    name: 'Solrock',
    generation: PokemonGeneration.Gen3,
    cry: 'Solrock!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Psychic"],
    stats: { hp: 90, attack: 95, defense: 85, sp_attack: 55, sp_defense: 65, speed: 70 }
  },
  barboach: {
    id: 339,
    name: 'Barboach',
    generation: PokemonGeneration.Gen3,
    cry: 'Barboach!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 50, attack: 48, defense: 43, sp_attack: 46, sp_defense: 41, speed: 60 }
  },
  whiscash: {
    id: 340,
    name: 'Whiscash',
    generation: PokemonGeneration.Gen3,
    cry: 'Whiscash!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 110, attack: 78, defense: 73, sp_attack: 76, sp_defense: 71, speed: 60 }
  },
  corpish: {
    id: 341,
    name: 'Corpish',
    generation: PokemonGeneration.Gen3,
    cry: 'Corpish!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 43, attack: 80, defense: 65, sp_attack: 50, sp_defense: 35, speed: 35 }
  },
  crawdaunt: {
    id: 342,
    name: 'Crawdaunt',
    generation: PokemonGeneration.Gen3,
    cry: 'Crawdaunt!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 63, attack: 120, defense: 85, sp_attack: 90, sp_defense: 55, speed: 55 }
  },
  baltoy: {
    id: 343,
    name: 'Baltoy',
    generation: PokemonGeneration.Gen3,
    cry: 'Baltoy!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Psychic"],
    stats: { hp: 40, attack: 40, defense: 55, sp_attack: 40, sp_defense: 70, speed: 55 }
  },
  claydol: {
    id: 344,
    name: 'Claydol',
    generation: PokemonGeneration.Gen3,
    cry: 'Claydol!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Psychic"],
    stats: { hp: 60, attack: 70, defense: 105, sp_attack: 70, sp_defense: 120, speed: 75 }
  },
  lileep: {
    id: 345,
    name: 'Lileep',
    generation: PokemonGeneration.Gen3,
    cry: 'Lileep!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Grass"],
    stats: { hp: 66, attack: 41, defense: 77, sp_attack: 61, sp_defense: 87, speed: 23 }
  },
  cradily: {
    id: 346,
    name: 'Cradily',
    generation: PokemonGeneration.Gen3,
    cry: 'Cradily!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Grass"],
    stats: { hp: 86, attack: 81, defense: 97, sp_attack: 81, sp_defense: 107, speed: 43 }
  },
  anorith: {
    id: 347,
    name: 'Anorith',
    generation: PokemonGeneration.Gen3,
    cry: 'Anorith!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Bug"],
    stats: { hp: 45, attack: 95, defense: 50, sp_attack: 40, sp_defense: 50, speed: 75 }
  },
  armaldo: {
    id: 348,
    name: 'Armaldo',
    generation: PokemonGeneration.Gen3,
    cry: 'Armaldo!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Bug"],
    stats: { hp: 75, attack: 125, defense: 100, sp_attack: 70, sp_defense: 80, speed: 45 }
  },
  feebas: {
    id: 349,
    name: 'Feebas',
    generation: PokemonGeneration.Gen3,
    cry: 'Feebas!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 20, attack: 15, defense: 20, sp_attack: 10, sp_defense: 55, speed: 80 }
  },
  milotic: {
    id: 350,
    name: 'Milotic',
    generation: PokemonGeneration.Gen3,
    cry: 'Milotic!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 95, attack: 60, defense: 79, sp_attack: 100, sp_defense: 125, speed: 81 }
  },
  castform: {
    id: 351,
    name: 'Castform',
    generation: PokemonGeneration.Gen3,
    cry: 'Castform!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 70, attack: 70, defense: 70, sp_attack: 70, sp_defense: 70, speed: 70 }
  },
  kecleon: {
    id: 352,
    name: 'Kecleon',
    generation: PokemonGeneration.Gen3,
    cry: 'Kecleon!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 60, attack: 90, defense: 70, sp_attack: 60, sp_defense: 120, speed: 40 }
  },
  shuppet: {
    id: 353,
    name: 'Shuppet',
    generation: PokemonGeneration.Gen3,
    cry: 'Shuppet!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 44, attack: 75, defense: 35, sp_attack: 63, sp_defense: 33, speed: 45 }
  },
  banette: {
    id: 354,
    name: 'Banette',
    generation: PokemonGeneration.Gen3,
    cry: 'Banette!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 64, attack: 165, defense: 75, sp_attack: 93, sp_defense: 83, speed: 75 }
  },
  duskull: {
    id: 355,
    name: 'Duskull',
    generation: PokemonGeneration.Gen3,
    cry: 'Duskull!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 20, attack: 40, defense: 90, sp_attack: 30, sp_defense: 90, speed: 25 }
  },
  dusclops: {
    id: 356,
    name: 'Dusclops',
    generation: PokemonGeneration.Gen3,
    cry: 'Dusclops!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 40, attack: 70, defense: 130, sp_attack: 60, sp_defense: 130, speed: 25 }
  },
  tropius: {
    id: 357,
    name: 'Tropius',
    generation: PokemonGeneration.Gen3,
    cry: 'Tropius!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 99, attack: 68, defense: 83, sp_attack: 72, sp_defense: 87, speed: 51 }
  },
  chimecho: {
    id: 358,
    name: 'Chimecho',
    generation: PokemonGeneration.Gen3,
    cry: 'Chimecho!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 75, attack: 50, defense: 80, sp_attack: 95, sp_defense: 90, speed: 65 }
  },
  absol: {
    id: 359,
    name: 'Absol',
    generation: PokemonGeneration.Gen3,
    cry: 'Absol!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 65, attack: 150, defense: 60, sp_attack: 115, sp_defense: 60, speed: 115 }
  },
  wynaut: {
    id: 360,
    name: 'Wynaut',
    generation: PokemonGeneration.Gen3,
    cry: 'Wynaut!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 95, attack: 23, defense: 48, sp_attack: 23, sp_defense: 48, speed: 23 }
  },
  snorunt: {
    id: 361,
    name: 'Snorunt',
    generation: PokemonGeneration.Gen3,
    cry: 'Snorunt!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 50, attack: 50, defense: 50, sp_attack: 50, sp_defense: 50, speed: 50 }
  },
  glalie: {
    id: 362,
    name: 'Glalie',
    generation: PokemonGeneration.Gen3,
    cry: 'Glalie!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 80, attack: 120, defense: 80, sp_attack: 120, sp_defense: 80, speed: 100 }
  },
  spheal: {
    id: 363,
    name: 'Spheal',
    generation: PokemonGeneration.Gen3,
    cry: 'Spheal!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Water"],
    stats: { hp: 70, attack: 40, defense: 50, sp_attack: 55, sp_defense: 50, speed: 25 }
  },
  sealeo: {
    id: 364,
    name: 'Sealeo',
    generation: PokemonGeneration.Gen3,
    cry: 'Sealeo!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Water"],
    stats: { hp: 90, attack: 60, defense: 70, sp_attack: 75, sp_defense: 70, speed: 45 }
  },
  walrein: {
    id: 365,
    name: 'Walrein',
    generation: PokemonGeneration.Gen3,
    cry: 'Walrein!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Water"],
    stats: { hp: 110, attack: 80, defense: 90, sp_attack: 95, sp_defense: 90, speed: 65 }
  },
  clamperl: {
    id: 366,
    name: 'Clamperl',
    generation: PokemonGeneration.Gen3,
    cry: 'Clamperl!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 35, attack: 64, defense: 85, sp_attack: 74, sp_defense: 55, speed: 32 }
  },
  huntail: {
    id: 367,
    name: 'Huntail',
    generation: PokemonGeneration.Gen3,
    cry: 'Huntail!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 104, defense: 105, sp_attack: 94, sp_defense: 75, speed: 52 }
  },
  gorebyss: {
    id: 368,
    name: 'Gorebyss',
    generation: PokemonGeneration.Gen3,
    cry: 'Gorebyss!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 84, defense: 105, sp_attack: 114, sp_defense: 75, speed: 52 }
  },
  relicanth: {
    id: 369,
    name: 'Relicanth',
    generation: PokemonGeneration.Gen3,
    cry: 'Relicanth!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Rock"],
    stats: { hp: 100, attack: 90, defense: 130, sp_attack: 45, sp_defense: 65, speed: 55 }
  },
  luvdisc: {
    id: 370,
    name: 'Luvdisc',
    generation: PokemonGeneration.Gen3,
    cry: 'Luvdisc!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 43, attack: 30, defense: 55, sp_attack: 40, sp_defense: 65, speed: 97 }
  },
  bagon: {
    id: 371,
    name: 'Bagon',
    generation: PokemonGeneration.Gen3,
    cry: 'Bagon!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 45, attack: 75, defense: 60, sp_attack: 40, sp_defense: 30, speed: 50 }
  },
  shelgon: {
    id: 372,
    name: 'Shelgon',
    generation: PokemonGeneration.Gen3,
    cry: 'Shelgon!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 65, attack: 95, defense: 100, sp_attack: 60, sp_defense: 50, speed: 50 }
  },
  salamence: {
    id: 373,
    name: 'Salamence',
    generation: PokemonGeneration.Gen3,
    cry: 'Salamence!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Flying"],
    stats: { hp: 95, attack: 145, defense: 130, sp_attack: 120, sp_defense: 90, speed: 120 }
  },
  beldum: {
    id: 374,
    name: 'Beldum',
    generation: PokemonGeneration.Gen3,
    cry: 'Beldum!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 40, attack: 55, defense: 80, sp_attack: 35, sp_defense: 60, speed: 30 }
  },
  metang: {
    id: 375,
    name: 'Metang',
    generation: PokemonGeneration.Gen3,
    cry: 'Metang!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 60, attack: 75, defense: 100, sp_attack: 55, sp_defense: 80, speed: 50 }
  },
  metagross: {
    id: 376,
    name: 'Metagross',
    generation: PokemonGeneration.Gen3,
    cry: 'Metagross!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 80, attack: 145, defense: 150, sp_attack: 105, sp_defense: 110, speed: 110 }
  },
  regirock: {
    id: 377,
    name: 'Regirock',
    generation: PokemonGeneration.Gen3,
    cry: 'Regirock!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 80, attack: 100, defense: 200, sp_attack: 50, sp_defense: 100, speed: 50 }
  },
  regice: {
    id: 378,
    name: 'Regice',
    generation: PokemonGeneration.Gen3,
    cry: 'Regice!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 80, attack: 50, defense: 100, sp_attack: 100, sp_defense: 200, speed: 50 }
  },
  registeel: {
    id: 379,
    name: 'Registeel',
    generation: PokemonGeneration.Gen3,
    cry: 'Registeel!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 80, attack: 75, defense: 150, sp_attack: 75, sp_defense: 150, speed: 50 }
  },
  latias: {
    id: 380,
    name: 'Latias',
    generation: PokemonGeneration.Gen3,
    cry: 'Latias!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Psychic"],
    stats: { hp: 80, attack: 100, defense: 120, sp_attack: 140, sp_defense: 150, speed: 110 }
  },
  latios: {
    id: 381,
    name: 'Latios',
    generation: PokemonGeneration.Gen3,
    cry: 'Latios!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Psychic"],
    stats: { hp: 80, attack: 130, defense: 100, sp_attack: 160, sp_defense: 120, speed: 110 }
  },
  kyogre: {
    id: 382,
    name: 'Kyogre',
    generation: PokemonGeneration.Gen3,
    cry: 'Kyogre!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Water"],
    stats: { hp: 100, attack: 150, defense: 90, sp_attack: 180, sp_defense: 160, speed: 90 }
  },
  groudon: {
    id: 383,
    name: 'Groudon',
    generation: PokemonGeneration.Gen3,
    cry: 'Groudon!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Ground", "Fire"],
    stats: { hp: 100, attack: 180, defense: 160, sp_attack: 150, sp_defense: 90, speed: 90 }
  },
  rayquaza: {
    id: 384,
    name: 'Rayquaza',
    generation: PokemonGeneration.Gen3,
    cry: 'Rayquaza!',
    possibleColors: [PokemonColor.default],
    originalSpriteSize: 64,
    types: ["Dragon", "Flying"],
    stats: { hp: 105, attack: 180, defense: 100, sp_attack: 180, sp_defense: 100, speed: 115 }
  },
  jirachi: {
    id: 385,
    name: 'Jirachi',
    generation: PokemonGeneration.Gen3,
    cry: 'Jirachi!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 }
  },
  deoxys: {
    id: 386,
    name: 'Deoxys',
    generation: PokemonGeneration.Gen3,
    cry: 'Deoxys!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 50, attack: 95, defense: 90, sp_attack: 95, sp_defense: 90, speed: 180 }
  },
  deoxys_speed: {
    id: 386,
    name: 'Deoxys (Speed)',
    generation: PokemonGeneration.Gen3,
    cry: 'Deoxys!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 50, attack: 95, defense: 90, sp_attack: 95, sp_defense: 90, speed: 180 }
  },
  deoxys_attack: {
    id: 386,
    name: 'Deoxys (Attack)',
    generation: PokemonGeneration.Gen3,
    cry: 'Deoxys!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 50, attack: 95, defense: 90, sp_attack: 95, sp_defense: 90, speed: 180 }
  },
  deoxys_defense: {
    id: 386,
    name: 'Deoxys (Defense)',
    generation: PokemonGeneration.Gen3,
    cry: 'Deoxys!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 50, attack: 95, defense: 90, sp_attack: 95, sp_defense: 90, speed: 180 }
  },
  // Generation 4
  turtwig: {
    id: 387,
    name: 'Turtwig',
    generation: PokemonGeneration.Gen4,
    cry: 'Turtwig!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 55, attack: 68, defense: 64, sp_attack: 45, sp_defense: 55, speed: 31 }
  },
  grotle: {
    id: 388,
    name: 'Grotle',
    generation: PokemonGeneration.Gen4,
    cry: 'Grotle!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 89, defense: 85, sp_attack: 55, sp_defense: 65, speed: 36 }
  },
  torterra: {
    id: 389,
    name: 'Torterra',
    generation: PokemonGeneration.Gen4,
    cry: 'Torterra!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Ground"],
    stats: { hp: 95, attack: 109, defense: 105, sp_attack: 75, sp_defense: 85, speed: 56 }
  },
  chimchar: {
    id: 390,
    name: 'Chimchar',
    generation: PokemonGeneration.Gen4,
    cry: 'Chimchar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 44, attack: 58, defense: 44, sp_attack: 58, sp_defense: 44, speed: 61 }
  },
  monferno: {
    id: 391,
    name: 'Monferno',
    generation: PokemonGeneration.Gen4,
    cry: 'Monferno!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 64, attack: 78, defense: 52, sp_attack: 78, sp_defense: 52, speed: 81 }
  },
  infernape: {
    id: 392,
    name: 'Infernape',
    generation: PokemonGeneration.Gen4,
    cry: 'Infernape!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 76, attack: 104, defense: 71, sp_attack: 104, sp_defense: 71, speed: 108 }
  },
  piplup: {
    id: 393,
    name: 'Piplup',
    generation: PokemonGeneration.Gen4,
    cry: 'Piplup!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 53, attack: 51, defense: 53, sp_attack: 61, sp_defense: 56, speed: 40 }
  },
  prinplup: {
    id: 394,
    name: 'Prinplup',
    generation: PokemonGeneration.Gen4,
    cry: 'Prinplup!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 64, attack: 66, defense: 68, sp_attack: 81, sp_defense: 76, speed: 50 }
  },
  empoleon: {
    id: 395,
    name: 'Empoleon',
    generation: PokemonGeneration.Gen4,
    cry: 'Empoleon!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Steel"],
    stats: { hp: 84, attack: 86, defense: 88, sp_attack: 111, sp_defense: 101, speed: 60 }
  },
  starly: {
    id: 396,
    name: 'Starly',
    generation: PokemonGeneration.Gen4,
    cry: 'Starly!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 40, attack: 55, defense: 30, sp_attack: 30, sp_defense: 30, speed: 60 }
  },
  staravia: {
    id: 397,
    name: 'Staravia',
    generation: PokemonGeneration.Gen4,
    cry: 'Staravia!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 55, attack: 75, defense: 50, sp_attack: 40, sp_defense: 40, speed: 80 }
  },
  staraptor: {
    id: 398,
    name: 'Staraptor',
    generation: PokemonGeneration.Gen4,
    cry: 'Staraptor!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 85, attack: 120, defense: 70, sp_attack: 50, sp_defense: 60, speed: 100 }
  },
  bidoof: {
    id: 399,
    name: 'Bidoof',
    generation: PokemonGeneration.Gen4,
    cry: 'Bidoof!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 59, attack: 45, defense: 40, sp_attack: 35, sp_defense: 40, speed: 31 }
  },
  bibarel: {
    id: 400,
    name: 'Bibarel',
    generation: PokemonGeneration.Gen4,
    cry: 'Bibarel!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Water"],
    stats: { hp: 79, attack: 85, defense: 60, sp_attack: 55, sp_defense: 60, speed: 71 }
  },
  kricketot: {
    id: 401,
    name: 'Kricketot',
    generation: PokemonGeneration.Gen4,
    cry: 'Kricketot!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 37, attack: 25, defense: 41, sp_attack: 25, sp_defense: 41, speed: 25 }
  },
  kricketune: {
    id: 402,
    name: 'Kricketune',
    generation: PokemonGeneration.Gen4,
    cry: 'Kricketune!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 77, attack: 85, defense: 51, sp_attack: 55, sp_defense: 51, speed: 65 }
  },
  shinx: {
    id: 403,
    name: 'Shinx',
    generation: PokemonGeneration.Gen4,
    cry: 'Shinx!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 45, attack: 65, defense: 34, sp_attack: 40, sp_defense: 34, speed: 45 }
  },
  luxio: {
    id: 404,
    name: 'Luxio',
    generation: PokemonGeneration.Gen4,
    cry: 'Luxio!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 60, attack: 85, defense: 49, sp_attack: 60, sp_defense: 49, speed: 60 }
  },
  luxray: {
    id: 405,
    name: 'Luxray',
    generation: PokemonGeneration.Gen4,
    cry: 'Luxray!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 80, attack: 120, defense: 79, sp_attack: 95, sp_defense: 79, speed: 70 }
  },
  budew: {
    id: 406,
    name: 'Budew',
    generation: PokemonGeneration.Gen4,
    cry: 'Budew!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 40, attack: 30, defense: 35, sp_attack: 50, sp_defense: 70, speed: 55 }
  },
  roserade: {
    id: 407,
    name: 'Roserade',
    generation: PokemonGeneration.Gen4,
    cry: 'Roserade!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 60, attack: 70, defense: 65, sp_attack: 125, sp_defense: 105, speed: 90 }
  },
  cranidos: {
    id: 408,
    name: 'Cranidos',
    generation: PokemonGeneration.Gen4,
    cry: 'Cranidos!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 67, attack: 125, defense: 40, sp_attack: 30, sp_defense: 30, speed: 58 }
  },
  rampardos: {
    id: 409,
    name: 'Rampardos',
    generation: PokemonGeneration.Gen4,
    cry: 'Rampardos!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 97, attack: 165, defense: 60, sp_attack: 65, sp_defense: 50, speed: 58 }
  },
  shieldon: {
    id: 410,
    name: 'Shieldon',
    generation: PokemonGeneration.Gen4,
    cry: 'Shieldon!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Steel"],
    stats: { hp: 30, attack: 42, defense: 118, sp_attack: 42, sp_defense: 88, speed: 30 }
  },
  bastiodon: {
    id: 411,
    name: 'Bastiodon',
    generation: PokemonGeneration.Gen4,
    cry: 'Bastiodon!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Steel"],
    stats: { hp: 60, attack: 52, defense: 168, sp_attack: 47, sp_defense: 138, speed: 30 }
  },
  burmy: {
    id: 412,
    name: 'Burmy',
    generation: PokemonGeneration.Gen4,
    cry: 'Burmy!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 40, attack: 29, defense: 45, sp_attack: 29, sp_defense: 45, speed: 36 }
  },
  wormadam: {
    id: 413,
    name: 'Wormadam',
    generation: PokemonGeneration.Gen4,
    cry: 'Wormadam!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 60, attack: 69, defense: 95, sp_attack: 69, sp_defense: 95, speed: 36 }
  },
  mothim: {
    id: 414,
    name: 'Mothim',
    generation: PokemonGeneration.Gen4,
    cry: 'Mothim!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 70, attack: 94, defense: 50, sp_attack: 94, sp_defense: 50, speed: 66 }
  },
  combee: {
    id: 415,
    name: 'Combee',
    generation: PokemonGeneration.Gen4,
    cry: 'Combee!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 30, attack: 30, defense: 42, sp_attack: 30, sp_defense: 42, speed: 70 }
  },
  vespiquen: {
    id: 416,
    name: 'Vespiquen',
    generation: PokemonGeneration.Gen4,
    cry: 'Vespiquen!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 70, attack: 80, defense: 102, sp_attack: 80, sp_defense: 102, speed: 40 }
  },
  pachirisu: {
    id: 417,
    name: 'Pachirisu',
    generation: PokemonGeneration.Gen4,
    cry: 'Pachirisu!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 60, attack: 45, defense: 70, sp_attack: 45, sp_defense: 90, speed: 95 }
  },
  buizel: {
    id: 418,
    name: 'Buizel',
    generation: PokemonGeneration.Gen4,
    cry: 'Buizel!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 65, defense: 35, sp_attack: 60, sp_defense: 30, speed: 85 }
  },
  floatzel: {
    id: 419,
    name: 'Floatzel',
    generation: PokemonGeneration.Gen4,
    cry: 'Floatzel!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 85, attack: 105, defense: 55, sp_attack: 85, sp_defense: 50, speed: 115 }
  },
  cherubi: {
    id: 420,
    name: 'Cherubi',
    generation: PokemonGeneration.Gen4,
    cry: 'Cherubi!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 45, attack: 35, defense: 45, sp_attack: 62, sp_defense: 53, speed: 35 }
  },
  cherrim: {
    id: 421,
    name: 'Cherrim',
    generation: PokemonGeneration.Gen4,
    cry: 'Cherrim!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 70, attack: 60, defense: 70, sp_attack: 87, sp_defense: 78, speed: 85 }
  },
  shellos: {
    id: 422,
    name: 'Shellos',
    generation: PokemonGeneration.Gen4,
    cry: 'Shellos!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 76, attack: 48, defense: 48, sp_attack: 57, sp_defense: 62, speed: 34 }
  },
  gastrodon: {
    id: 423,
    name: 'Gastrodon',
    generation: PokemonGeneration.Gen4,
    cry: 'Gastrodon!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 111, attack: 83, defense: 68, sp_attack: 92, sp_defense: 82, speed: 39 }
  },
  ambipom: {
    id: 424,
    name: 'Ambipom',
    generation: PokemonGeneration.Gen4,
    cry: 'Ambipom!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 75, attack: 100, defense: 66, sp_attack: 60, sp_defense: 66, speed: 115 }
  },
  drifloon: {
    id: 425,
    name: 'Drifloon',
    generation: PokemonGeneration.Gen4,
    cry: 'Drifloon!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Flying"],
    stats: { hp: 90, attack: 50, defense: 34, sp_attack: 60, sp_defense: 44, speed: 70 }
  },
  drifblim: {
    id: 426,
    name: 'Drifblim',
    generation: PokemonGeneration.Gen4,
    cry: 'Drifblim!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Flying"],
    stats: { hp: 150, attack: 80, defense: 44, sp_attack: 90, sp_defense: 54, speed: 80 }
  },
  buneary: {
    id: 427,
    name: 'Buneary',
    generation: PokemonGeneration.Gen4,
    cry: 'Buneary!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 55, attack: 66, defense: 44, sp_attack: 44, sp_defense: 56, speed: 85 }
  },
  lopunny: {
    id: 428,
    name: 'Lopunny',
    generation: PokemonGeneration.Gen4,
    cry: 'Lopunny!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fighting"],
    stats: { hp: 65, attack: 136, defense: 94, sp_attack: 54, sp_defense: 96, speed: 135 }
  },
  mismagius: {
    id: 429,
    name: 'Mismagius',
    generation: PokemonGeneration.Gen4,
    cry: 'Mismagius!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 60, attack: 60, defense: 60, sp_attack: 105, sp_defense: 105, speed: 105 }
  },
  honchkrow: {
    id: 430,
    name: 'Honchkrow',
    generation: PokemonGeneration.Gen4,
    cry: 'Honchkrow!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 100, attack: 125, defense: 52, sp_attack: 105, sp_defense: 52, speed: 71 }
  },
  glameow: {
    id: 431,
    name: 'Glameow',
    generation: PokemonGeneration.Gen4,
    cry: 'Glameow!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 49, attack: 55, defense: 42, sp_attack: 42, sp_defense: 37, speed: 85 }
  },
  purugly: {
    id: 432,
    name: 'Purugly',
    generation: PokemonGeneration.Gen4,
    cry: 'Purugly!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 71, attack: 82, defense: 64, sp_attack: 64, sp_defense: 59, speed: 112 }
  },
  chingling: {
    id: 433,
    name: 'Chingling',
    generation: PokemonGeneration.Gen4,
    cry: 'Chingling!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 45, attack: 30, defense: 50, sp_attack: 65, sp_defense: 50, speed: 45 }
  },
  stunky: {
    id: 434,
    name: 'Stunky',
    generation: PokemonGeneration.Gen4,
    cry: 'Stunky!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dark"],
    stats: { hp: 63, attack: 63, defense: 47, sp_attack: 41, sp_defense: 41, speed: 74 }
  },
  skuntank: {
    id: 435,
    name: 'Skuntank',
    generation: PokemonGeneration.Gen4,
    cry: 'Skuntank!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dark"],
    stats: { hp: 103, attack: 93, defense: 67, sp_attack: 71, sp_defense: 61, speed: 84 }
  },
  bronzor: {
    id: 436,
    name: 'Bronzor',
    generation: PokemonGeneration.Gen4,
    cry: 'Bronzor!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 57, attack: 24, defense: 86, sp_attack: 24, sp_defense: 86, speed: 23 }
  },
  bronzong: {
    id: 437,
    name: 'Bronzong',
    generation: PokemonGeneration.Gen4,
    cry: 'Bronzong!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Psychic"],
    stats: { hp: 67, attack: 89, defense: 116, sp_attack: 79, sp_defense: 116, speed: 33 }
  },
  bonsly: {
    id: 438,
    name: 'Bonsly',
    generation: PokemonGeneration.Gen4,
    cry: 'Bonsly!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 50, attack: 80, defense: 95, sp_attack: 10, sp_defense: 45, speed: 10 }
  },
  mimejr: {
    id: 439,
    name: 'Mime Jr.',
    generation: PokemonGeneration.Gen4,
    cry: 'Mime Jr.!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 20, attack: 25, defense: 45, sp_attack: 70, sp_defense: 90, speed: 60 }
  },
  happiny: {
    id: 440,
    name: 'Happiny',
    generation: PokemonGeneration.Gen4,
    cry: 'Happiny!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 100, attack: 5, defense: 5, sp_attack: 15, sp_defense: 65, speed: 30 }
  },
  chatot: {
    id: 441,
    name: 'Chatot',
    generation: PokemonGeneration.Gen4,
    cry: 'Chatot!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 76, attack: 65, defense: 45, sp_attack: 92, sp_defense: 42, speed: 91 }
  },
  spiritomb: {
    id: 442,
    name: 'Spiritomb',
    generation: PokemonGeneration.Gen4,
    cry: 'Spiritomb!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Dark"],
    stats: { hp: 50, attack: 92, defense: 108, sp_attack: 92, sp_defense: 108, speed: 35 }
  },
  gible: {
    id: 443,
    name: 'Gible',
    generation: PokemonGeneration.Gen4,
    cry: 'Gible!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Ground"],
    stats: { hp: 58, attack: 70, defense: 45, sp_attack: 40, sp_defense: 45, speed: 42 }
  },
  gabite: {
    id: 444,
    name: 'Gabite',
    generation: PokemonGeneration.Gen4,
    cry: 'Gabite!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Ground"],
    stats: { hp: 68, attack: 90, defense: 65, sp_attack: 50, sp_defense: 55, speed: 82 }
  },
  garchomp: {
    id: 445,
    name: 'Garchomp',
    generation: PokemonGeneration.Gen4,
    cry: 'Garchomp!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Ground"],
    stats: { hp: 108, attack: 170, defense: 115, sp_attack: 120, sp_defense: 95, speed: 92 }
  },
  munchlax: {
    id: 446,
    name: 'Munchlax',
    generation: PokemonGeneration.Gen4,
    cry: 'Munchlax!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 135, attack: 85, defense: 40, sp_attack: 40, sp_defense: 85, speed: 5 }
  },
  riolu: {
    id: 447,
    name: 'Riolu',
    generation: PokemonGeneration.Gen4,
    cry: 'Riolu!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 40, attack: 70, defense: 40, sp_attack: 35, sp_defense: 40, speed: 60 }
  },
  lucario: {
    id: 448,
    name: 'Lucario',
    generation: PokemonGeneration.Gen4,
    cry: 'Lucario!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Steel"],
    stats: { hp: 70, attack: 145, defense: 88, sp_attack: 140, sp_defense: 70, speed: 112 }
  },
  hippopotas: {
    id: 449,
    name: 'Hippopotas',
    generation: PokemonGeneration.Gen4,
    cry: 'Hippopotas!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 68, attack: 72, defense: 78, sp_attack: 38, sp_defense: 42, speed: 32 }
  },
  hippowdon: {
    id: 450,
    name: 'Hippowdon',
    generation: PokemonGeneration.Gen4,
    cry: 'Hippowdon!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 108, attack: 112, defense: 118, sp_attack: 68, sp_defense: 72, speed: 47 }
  },
  skorupi: {
    id: 451,
    name: 'Skorupi',
    generation: PokemonGeneration.Gen4,
    cry: 'Skorupi!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Bug"],
    stats: { hp: 40, attack: 50, defense: 90, sp_attack: 30, sp_defense: 55, speed: 65 }
  },
  drapion: {
    id: 452,
    name: 'Drapion',
    generation: PokemonGeneration.Gen4,
    cry: 'Drapion!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dark"],
    stats: { hp: 70, attack: 90, defense: 110, sp_attack: 60, sp_defense: 75, speed: 95 }
  },
  croagunk: {
    id: 453,
    name: 'Croagunk',
    generation: PokemonGeneration.Gen4,
    cry: 'Croagunk!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Fighting"],
    stats: { hp: 48, attack: 61, defense: 40, sp_attack: 61, sp_defense: 40, speed: 50 }
  },
  toxicroak: {
    id: 454,
    name: 'Toxicroak',
    generation: PokemonGeneration.Gen4,
    cry: 'Toxicroak!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Fighting"],
    stats: { hp: 83, attack: 106, defense: 65, sp_attack: 86, sp_defense: 65, speed: 85 }
  },
  carnivine: {
    id: 455,
    name: 'Carnivine',
    generation: PokemonGeneration.Gen4,
    cry: 'Carnivine!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 74, attack: 100, defense: 72, sp_attack: 90, sp_defense: 72, speed: 46 }
  },
  finneon: {
    id: 456,
    name: 'Finneon',
    generation: PokemonGeneration.Gen4,
    cry: 'Finneon!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 49, attack: 49, defense: 56, sp_attack: 49, sp_defense: 61, speed: 66 }
  },
  lumineon: {
    id: 457,
    name: 'Lumineon',
    generation: PokemonGeneration.Gen4,
    cry: 'Lumineon!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 69, attack: 69, defense: 76, sp_attack: 69, sp_defense: 86, speed: 91 }
  },
  mantyke: {
    id: 458,
    name: 'Mantyke',
    generation: PokemonGeneration.Gen4,
    cry: 'Mantyke!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 45, attack: 20, defense: 50, sp_attack: 60, sp_defense: 120, speed: 50 }
  },
  snover: {
    id: 459,
    name: 'Snover',
    generation: PokemonGeneration.Gen4,
    cry: 'Snover!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Ice"],
    stats: { hp: 60, attack: 62, defense: 50, sp_attack: 62, sp_defense: 60, speed: 40 }
  },
  abomasnow: {
    id: 460,
    name: 'Abomasnow',
    generation: PokemonGeneration.Gen4,
    cry: 'Abomasnow!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Ice"],
    stats: { hp: 90, attack: 132, defense: 105, sp_attack: 132, sp_defense: 105, speed: 30 }
  },
  weavile: {
    id: 461,
    name: 'Weavile',
    generation: PokemonGeneration.Gen4,
    cry: 'Weavile!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Ice"],
    stats: { hp: 70, attack: 120, defense: 65, sp_attack: 45, sp_defense: 85, speed: 125 }
  },
  magnezone: {
    id: 462,
    name: 'Magnezone',
    generation: PokemonGeneration.Gen4,
    cry: 'Magnezone!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Steel"],
    stats: { hp: 70, attack: 70, defense: 115, sp_attack: 130, sp_defense: 90, speed: 60 }
  },
  lickilicky: {
    id: 463,
    name: 'Lickilicky',
    generation: PokemonGeneration.Gen4,
    cry: 'Lickilicky!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 110, attack: 85, defense: 95, sp_attack: 80, sp_defense: 95, speed: 50 }
  },
  rhyperior: {
    id: 464,
    name: 'Rhyperior',
    generation: PokemonGeneration.Gen4,
    cry: 'Rhyperior!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Rock"],
    stats: { hp: 115, attack: 140, defense: 130, sp_attack: 55, sp_defense: 55, speed: 40 }
  },
  tangrowth: {
    id: 465,
    name: 'Tangrowth',
    generation: PokemonGeneration.Gen4,
    cry: 'Tangrowth!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 100, attack: 100, defense: 125, sp_attack: 110, sp_defense: 50, speed: 50 }
  },
  electivire: {
    id: 466,
    name: 'Electivire',
    generation: PokemonGeneration.Gen4,
    cry: 'Electivire!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 75, attack: 123, defense: 67, sp_attack: 95, sp_defense: 85, speed: 95 }
  },
  magmortar: {
    id: 467,
    name: 'Magmortar',
    generation: PokemonGeneration.Gen4,
    cry: 'Magmortar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 75, attack: 95, defense: 67, sp_attack: 125, sp_defense: 95, speed: 83 }
  },
  togekiss: {
    id: 468,
    name: 'Togekiss',
    generation: PokemonGeneration.Gen4,
    cry: 'Togekiss!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy", "Flying"],
    stats: { hp: 85, attack: 50, defense: 95, sp_attack: 120, sp_defense: 115, speed: 80 }
  },
  yanmega: {
    id: 469,
    name: 'Yanmega',
    generation: PokemonGeneration.Gen4,
    cry: 'Yanmega!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 86, attack: 76, defense: 86, sp_attack: 116, sp_defense: 56, speed: 95 }
  },
  leafeon: {
    id: 470,
    name: 'Leafeon',
    generation: PokemonGeneration.Gen4,
    cry: 'Leafeon!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 65, attack: 110, defense: 130, sp_attack: 60, sp_defense: 65, speed: 95 }
  },
  glaceon: {
    id: 471,
    name: 'Glaceon',
    generation: PokemonGeneration.Gen4,
    cry: 'Glaceon!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 65, attack: 60, defense: 110, sp_attack: 130, sp_defense: 95, speed: 65 }
  },
  gliscor: {
    id: 472,
    name: 'Gliscor',
    generation: PokemonGeneration.Gen4,
    cry: 'Gliscor!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Flying"],
    stats: { hp: 75, attack: 95, defense: 125, sp_attack: 45, sp_defense: 75, speed: 95 }
  },
  mamoswine: {
    id: 473,
    name: 'Mamoswine',
    generation: PokemonGeneration.Gen4,
    cry: 'Mamoswine!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Ground"],
    stats: { hp: 110, attack: 130, defense: 80, sp_attack: 70, sp_defense: 60, speed: 80 }
  },
  porygonz: {
    id: 474,
    name: 'Porygon-Z',
    generation: PokemonGeneration.Gen4,
    cry: 'Porygon-Z!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 85, attack: 80, defense: 70, sp_attack: 135, sp_defense: 75, speed: 90 }
  },
  gallade: {
    id: 475,
    name: 'Gallade',
    generation: PokemonGeneration.Gen4,
    cry: 'Gallade!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fighting"],
    stats: { hp: 68, attack: 165, defense: 95, sp_attack: 65, sp_defense: 115, speed: 110 }
  },
  probopass: {
    id: 476,
    name: 'Probopass',
    generation: PokemonGeneration.Gen4,
    cry: 'Probopass!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Steel"],
    stats: { hp: 60, attack: 55, defense: 145, sp_attack: 75, sp_defense: 150, speed: 40 }
  },
  dusknoir: {
    id: 477,
    name: 'Dusknoir',
    generation: PokemonGeneration.Gen4,
    cry: 'Dusknoir!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 45, attack: 100, defense: 135, sp_attack: 65, sp_defense: 135, speed: 45 }
  },
  froslass: {
    id: 478,
    name: 'Froslass',
    generation: PokemonGeneration.Gen4,
    cry: 'Froslass!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Ghost"],
    stats: { hp: 70, attack: 80, defense: 70, sp_attack: 80, sp_defense: 70, speed: 110 }
  },
  rotom: {
    id: 479,
    name: 'Rotom',
    generation: PokemonGeneration.Gen4,
    cry: 'Rotom!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Grass"],
    stats: { hp: 50, attack: 65, defense: 107, sp_attack: 105, sp_defense: 107, speed: 86 }
  },
  uxie: {
    id: 480,
    name: 'Uxie',
    generation: PokemonGeneration.Gen4,
    cry: 'Uxie!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 75, attack: 75, defense: 130, sp_attack: 75, sp_defense: 130, speed: 95 }
  },
  mesprit: {
    id: 481,
    name: 'Mesprit',
    generation: PokemonGeneration.Gen4,
    cry: 'Mesprit!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 80, attack: 105, defense: 105, sp_attack: 105, sp_defense: 105, speed: 80 }
  },
  azelf: {
    id: 482,
    name: 'Azelf',
    generation: PokemonGeneration.Gen4,
    cry: 'Azelf!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 75, attack: 125, defense: 70, sp_attack: 125, sp_defense: 70, speed: 115 }
  },
  dialga: {
    id: 483,
    name: 'Dialga',
    generation: PokemonGeneration.Gen4,
    cry: 'Dialga!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Dragon"],
    stats: { hp: 100, attack: 100, defense: 120, sp_attack: 150, sp_defense: 120, speed: 90 }
  },
  palkia: {
    id: 484,
    name: 'Palkia',
    generation: PokemonGeneration.Gen4,
    cry: 'Palkia!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dragon"],
    stats: { hp: 90, attack: 100, defense: 100, sp_attack: 150, sp_defense: 120, speed: 120 }
  },
  heatran: {
    id: 485,
    name: 'Heatran',
    generation: PokemonGeneration.Gen4,
    cry: 'Heatran!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Steel"],
    stats: { hp: 91, attack: 90, defense: 106, sp_attack: 130, sp_defense: 106, speed: 77 }
  },
  regigigas: {
    id: 486,
    name: 'Regigigas',
    generation: PokemonGeneration.Gen4,
    cry: 'Regigigas!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 110, attack: 160, defense: 110, sp_attack: 80, sp_defense: 110, speed: 100 }
  },
  giratina: {
    id: 487,
    name: 'Giratina',
    generation: PokemonGeneration.Gen4,
    cry: 'Giratina!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Dragon"],
    stats: { hp: 150, attack: 120, defense: 100, sp_attack: 120, sp_defense: 100, speed: 90 }
  },
  cresselia: {
    id: 488,
    name: 'Cresselia',
    generation: PokemonGeneration.Gen4,
    cry: 'Cresselia!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 120, attack: 70, defense: 110, sp_attack: 75, sp_defense: 120, speed: 85 }
  },
  phione: {
    id: 489,
    name: 'Phione',
    generation: PokemonGeneration.Gen4,
    cry: 'Phione!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 80, attack: 80, defense: 80, sp_attack: 80, sp_defense: 80, speed: 80 }
  },
  manaphy: {
    id: 490,
    name: 'Manaphy',
    generation: PokemonGeneration.Gen4,
    cry: 'Manaphy!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 }
  },
  darkrai: {
    id: 491,
    name: 'Darkrai',
    generation: PokemonGeneration.Gen4,
    cry: 'Darkrai!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 70, attack: 90, defense: 90, sp_attack: 135, sp_defense: 90, speed: 125 }
  },
  shaymin: {
    id: 492,
    name: 'Shaymin',
    generation: PokemonGeneration.Gen4,
    cry: 'Shaymin!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 100, attack: 103, defense: 75, sp_attack: 120, sp_defense: 75, speed: 127 }
  },
  arceus: {
    id: 493,
    name: 'Arceus',
    generation: PokemonGeneration.Gen4,
    cry: 'Arceus!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 120, attack: 120, defense: 120, sp_attack: 120, sp_defense: 120, speed: 120 }
  },
  // Generation 5
  victini: {
    id: 494,
    name: 'Victini',
    generation: PokemonGeneration.Gen5,
    cry: 'Victini!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fire"],
    stats: { hp: 100, attack: 100, defense: 100, sp_attack: 100, sp_defense: 100, speed: 100 }
  },
  snivy: {
    id: 495,
    name: 'Snivy',
    generation: PokemonGeneration.Gen5,
    cry: 'Snivy!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 45, attack: 45, defense: 55, sp_attack: 45, sp_defense: 55, speed: 63 }
  },
  servine: {
    id: 496,
    name: 'Servine',
    generation: PokemonGeneration.Gen5,
    cry: 'Servine!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 60, attack: 60, defense: 75, sp_attack: 60, sp_defense: 75, speed: 83 }
  },
  serperior: {
    id: 497,
    name: 'Serperior',
    generation: PokemonGeneration.Gen5,
    cry: 'Serperior!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 75, defense: 95, sp_attack: 75, sp_defense: 95, speed: 113 }
  },
  tepig: {
    id: 498,
    name: 'Tepig',
    generation: PokemonGeneration.Gen5,
    cry: 'Tepig!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 65, attack: 63, defense: 45, sp_attack: 45, sp_defense: 45, speed: 45 }
  },
  pignite: {
    id: 499,
    name: 'Pignite',
    generation: PokemonGeneration.Gen5,
    cry: 'Pignite!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 90, attack: 93, defense: 55, sp_attack: 70, sp_defense: 55, speed: 55 }
  },
  emboar: {
    id: 500,
    name: 'Emboar',
    generation: PokemonGeneration.Gen5,
    cry: 'Emboar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Fighting"],
    stats: { hp: 110, attack: 123, defense: 65, sp_attack: 100, sp_defense: 65, speed: 65 }
  },
  oshawott: {
    id: 501,
    name: 'Oshawott',
    generation: PokemonGeneration.Gen5,
    cry: 'Oshawott!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 55, defense: 45, sp_attack: 63, sp_defense: 45, speed: 45 }
  },
  dewott: {
    id: 502,
    name: 'Dewott',
    generation: PokemonGeneration.Gen5,
    cry: 'Dewott!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 75, attack: 75, defense: 60, sp_attack: 83, sp_defense: 60, speed: 60 }
  },
  samurott: {
    id: 503,
    name: 'Samurott',
    generation: PokemonGeneration.Gen5,
    cry: 'Samurott!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 90, attack: 108, defense: 80, sp_attack: 100, sp_defense: 65, speed: 85 }
  },
  patrat: {
    id: 504,
    name: 'Patrat',
    generation: PokemonGeneration.Gen5,
    cry: 'Patrat!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 45, attack: 55, defense: 39, sp_attack: 35, sp_defense: 39, speed: 42 }
  },
  watchog: {
    id: 505,
    name: 'Watchog',
    generation: PokemonGeneration.Gen5,
    cry: 'Watchog!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 60, attack: 85, defense: 69, sp_attack: 60, sp_defense: 69, speed: 77 }
  },
  lillipup: {
    id: 506,
    name: 'Lillipup',
    generation: PokemonGeneration.Gen5,
    cry: 'Lillipup!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 45, attack: 60, defense: 45, sp_attack: 25, sp_defense: 45, speed: 55 }
  },
  herdier: {
    id: 507,
    name: 'Herdier',
    generation: PokemonGeneration.Gen5,
    cry: 'Herdier!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 65, attack: 80, defense: 65, sp_attack: 35, sp_defense: 65, speed: 60 }
  },
  stoutland: {
    id: 508,
    name: 'Stoutland',
    generation: PokemonGeneration.Gen5,
    cry: 'Stoutland!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 85, attack: 110, defense: 90, sp_attack: 45, sp_defense: 90, speed: 80 }
  },
  purrloin: {
    id: 509,
    name: 'Purrloin',
    generation: PokemonGeneration.Gen5,
    cry: 'Purrloin!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 41, attack: 50, defense: 37, sp_attack: 50, sp_defense: 37, speed: 66 }
  },
  liepard: {
    id: 510,
    name: 'Liepard',
    generation: PokemonGeneration.Gen5,
    cry: 'Liepard!',
    possibleColors: [PokemonColor.default],
    types: ["Dark"],
    stats: { hp: 64, attack: 88, defense: 50, sp_attack: 88, sp_defense: 50, speed: 106 }
  },
  pansage: {
    id: 511,
    name: 'Pansage',
    generation: PokemonGeneration.Gen5,
    cry: 'Pansage!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 50, attack: 53, defense: 48, sp_attack: 53, sp_defense: 48, speed: 64 }
  },
  simisage: {
    id: 512,
    name: 'Simisage',
    generation: PokemonGeneration.Gen5,
    cry: 'Simisage!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 98, defense: 63, sp_attack: 98, sp_defense: 63, speed: 101 }
  },
  pansear: {
    id: 513,
    name: 'Pansear',
    generation: PokemonGeneration.Gen5,
    cry: 'Pansear!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 50, attack: 53, defense: 48, sp_attack: 53, sp_defense: 48, speed: 64 }
  },
  simisear: {
    id: 514,
    name: 'Simisear',
    generation: PokemonGeneration.Gen5,
    cry: 'Simisear!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 75, attack: 98, defense: 63, sp_attack: 98, sp_defense: 63, speed: 101 }
  },
  panpour: {
    id: 515,
    name: 'Panpour',
    generation: PokemonGeneration.Gen5,
    cry: 'Panpour!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 53, defense: 48, sp_attack: 53, sp_defense: 48, speed: 64 }
  },
  simipour: {
    id: 516,
    name: 'Simipour',
    generation: PokemonGeneration.Gen5,
    cry: 'Simipour!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 75, attack: 98, defense: 63, sp_attack: 98, sp_defense: 63, speed: 101 }
  },
  munna: {
    id: 517,
    name: 'Munna',
    generation: PokemonGeneration.Gen5,
    cry: 'Munna!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 76, attack: 25, defense: 45, sp_attack: 67, sp_defense: 55, speed: 24 }
  },
  musharna: {
    id: 518,
    name: 'Musharna',
    generation: PokemonGeneration.Gen5,
    cry: 'Musharna!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 116, attack: 55, defense: 85, sp_attack: 107, sp_defense: 95, speed: 29 }
  },
  pidove: {
    id: 519,
    name: 'Pidove',
    generation: PokemonGeneration.Gen5,
    cry: 'Pidove!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 50, attack: 55, defense: 50, sp_attack: 36, sp_defense: 30, speed: 43 }
  },
  tranquill: {
    id: 520,
    name: 'Tranquill',
    generation: PokemonGeneration.Gen5,
    cry: 'Tranquill!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 62, attack: 77, defense: 62, sp_attack: 50, sp_defense: 42, speed: 65 }
  },
  unfezant: {
    id: 521,
    name: 'Unfezant',
    generation: PokemonGeneration.Gen5,
    cry: 'Unfezant!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 80, attack: 115, defense: 80, sp_attack: 65, sp_defense: 55, speed: 93 }
  },
  blitzle: {
    id: 522,
    name: 'Blitzle',
    generation: PokemonGeneration.Gen5,
    cry: 'Blitzle!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 45, attack: 60, defense: 32, sp_attack: 50, sp_defense: 32, speed: 76 }
  },
  zebstrika: {
    id: 523,
    name: 'Zebstrika',
    generation: PokemonGeneration.Gen5,
    cry: 'Zebstrika!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 75, attack: 100, defense: 63, sp_attack: 80, sp_defense: 63, speed: 116 }
  },
  roggenrola: {
    id: 524,
    name: 'Roggenrola',
    generation: PokemonGeneration.Gen5,
    cry: 'Roggenrola!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 55, attack: 75, defense: 85, sp_attack: 25, sp_defense: 25, speed: 15 }
  },
  boldore: {
    id: 525,
    name: 'Boldore',
    generation: PokemonGeneration.Gen5,
    cry: 'Boldore!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 70, attack: 105, defense: 105, sp_attack: 50, sp_defense: 40, speed: 20 }
  },
  gigalith: {
    id: 526,
    name: 'Gigalith',
    generation: PokemonGeneration.Gen5,
    cry: 'Gigalith!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 85, attack: 135, defense: 130, sp_attack: 60, sp_defense: 80, speed: 25 }
  },
  woobat: {
    id: 527,
    name: 'Woobat',
    generation: PokemonGeneration.Gen5,
    cry: 'Woobat!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 65, attack: 45, defense: 43, sp_attack: 55, sp_defense: 43, speed: 72 }
  },
  swoobat: {
    id: 528,
    name: 'Swoobat',
    generation: PokemonGeneration.Gen5,
    cry: 'Swoobat!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 67, attack: 57, defense: 55, sp_attack: 77, sp_defense: 55, speed: 114 }
  },
  drilbur: {
    id: 529,
    name: 'Drilbur',
    generation: PokemonGeneration.Gen5,
    cry: 'Drilbur!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 60, attack: 85, defense: 40, sp_attack: 30, sp_defense: 45, speed: 68 }
  },
  excadrill: {
    id: 530,
    name: 'Excadrill',
    generation: PokemonGeneration.Gen5,
    cry: 'Excadrill!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Steel"],
    stats: { hp: 110, attack: 135, defense: 60, sp_attack: 50, sp_defense: 65, speed: 88 }
  },
  audino: {
    id: 531,
    name: 'Audino',
    generation: PokemonGeneration.Gen5,
    cry: 'Audino!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fairy"],
    stats: { hp: 103, attack: 60, defense: 126, sp_attack: 80, sp_defense: 126, speed: 50 }
  },
  timburr: {
    id: 532,
    name: 'Timburr',
    generation: PokemonGeneration.Gen5,
    cry: 'Timburr!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 75, attack: 80, defense: 55, sp_attack: 25, sp_defense: 35, speed: 35 }
  },
  gurdurr: {
    id: 533,
    name: 'Gurdurr',
    generation: PokemonGeneration.Gen5,
    cry: 'Gurdurr!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 85, attack: 105, defense: 85, sp_attack: 40, sp_defense: 50, speed: 40 }
  },
  conkeldurr: {
    id: 534,
    name: 'Conkeldurr',
    generation: PokemonGeneration.Gen5,
    cry: 'Conkeldurr!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 105, attack: 140, defense: 95, sp_attack: 55, sp_defense: 65, speed: 45 }
  },
  tympole: {
    id: 535,
    name: 'Tympole',
    generation: PokemonGeneration.Gen5,
    cry: 'Tympole!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 50, defense: 40, sp_attack: 50, sp_defense: 40, speed: 64 }
  },
  palpitoad: {
    id: 536,
    name: 'Palpitoad',
    generation: PokemonGeneration.Gen5,
    cry: 'Palpitoad!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 75, attack: 65, defense: 55, sp_attack: 65, sp_defense: 55, speed: 69 }
  },
  seismitoad: {
    id: 537,
    name: 'Seismitoad',
    generation: PokemonGeneration.Gen5,
    cry: 'Seismitoad!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ground"],
    stats: { hp: 105, attack: 95, defense: 75, sp_attack: 85, sp_defense: 75, speed: 74 }
  },
  throh: {
    id: 538,
    name: 'Throh',
    generation: PokemonGeneration.Gen5,
    cry: 'Throh!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 120, attack: 100, defense: 85, sp_attack: 30, sp_defense: 85, speed: 45 }
  },
  sawk: {
    id: 539,
    name: 'Sawk',
    generation: PokemonGeneration.Gen5,
    cry: 'Sawk!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 75, attack: 125, defense: 75, sp_attack: 30, sp_defense: 75, speed: 85 }
  },
  sewaddle: {
    id: 540,
    name: 'Sewaddle',
    generation: PokemonGeneration.Gen5,
    cry: 'Sewaddle!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Grass"],
    stats: { hp: 45, attack: 53, defense: 70, sp_attack: 40, sp_defense: 60, speed: 42 }
  },
  swadloon: {
    id: 541,
    name: 'Swadloon',
    generation: PokemonGeneration.Gen5,
    cry: 'Swadloon!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Grass"],
    stats: { hp: 55, attack: 63, defense: 90, sp_attack: 50, sp_defense: 80, speed: 42 }
  },
  leavanny: {
    id: 542,
    name: 'Leavanny',
    generation: PokemonGeneration.Gen5,
    cry: 'Leavanny!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Grass"],
    stats: { hp: 75, attack: 103, defense: 80, sp_attack: 70, sp_defense: 80, speed: 92 }
  },
  venipede: {
    id: 543,
    name: 'Venipede',
    generation: PokemonGeneration.Gen5,
    cry: 'Venipede!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 30, attack: 45, defense: 59, sp_attack: 30, sp_defense: 39, speed: 57 }
  },
  whirlipede: {
    id: 544,
    name: 'Whirlipede',
    generation: PokemonGeneration.Gen5,
    cry: 'Whirlipede!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 40, attack: 55, defense: 99, sp_attack: 40, sp_defense: 79, speed: 47 }
  },
  scolipede: {
    id: 545,
    name: 'Scolipede',
    generation: PokemonGeneration.Gen5,
    cry: 'Scolipede!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Poison"],
    stats: { hp: 60, attack: 100, defense: 89, sp_attack: 55, sp_defense: 69, speed: 112 }
  },
  cottonee: {
    id: 546,
    name: 'Cottonee',
    generation: PokemonGeneration.Gen5,
    cry: 'Cottonee!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fairy"],
    stats: { hp: 40, attack: 27, defense: 60, sp_attack: 37, sp_defense: 50, speed: 66 }
  },
  whimsicott: {
    id: 547,
    name: 'Whimsicott',
    generation: PokemonGeneration.Gen5,
    cry: 'Whimsicott!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fairy"],
    stats: { hp: 60, attack: 67, defense: 85, sp_attack: 77, sp_defense: 75, speed: 116 }
  },
  petilil: {
    id: 548,
    name: 'Petilil',
    generation: PokemonGeneration.Gen5,
    cry: 'Petilil!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 45, attack: 35, defense: 50, sp_attack: 70, sp_defense: 50, speed: 30 }
  },
  lilligant: {
    id: 549,
    name: 'Lilligant',
    generation: PokemonGeneration.Gen5,
    cry: 'Lilligant!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fighting"],
    stats: { hp: 70, attack: 105, defense: 75, sp_attack: 50, sp_defense: 75, speed: 105 }
  },
  basculin: {
    id: 550,
    name: 'Basculin',
    generation: PokemonGeneration.Gen5,
    cry: 'Basculin!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 70, attack: 92, defense: 65, sp_attack: 80, sp_defense: 55, speed: 98 }
  },
  sandile: {
    id: 551,
    name: 'Sandile',
    generation: PokemonGeneration.Gen5,
    cry: 'Sandile!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Dark"],
    stats: { hp: 50, attack: 72, defense: 35, sp_attack: 35, sp_defense: 35, speed: 65 }
  },
  krokorok: {
    id: 552,
    name: 'Krokorok',
    generation: PokemonGeneration.Gen5,
    cry: 'Krokorok!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Dark"],
    stats: { hp: 60, attack: 82, defense: 45, sp_attack: 45, sp_defense: 45, speed: 74 }
  },
  krookodile: {
    id: 553,
    name: 'Krookodile',
    generation: PokemonGeneration.Gen5,
    cry: 'Krookodile!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Dark"],
    stats: { hp: 95, attack: 117, defense: 80, sp_attack: 65, sp_defense: 70, speed: 92 }
  },
  darumaka: {
    id: 554,
    name: 'Darumaka',
    generation: PokemonGeneration.Gen5,
    cry: 'Darumaka!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 70, attack: 90, defense: 45, sp_attack: 15, sp_defense: 45, speed: 50 }
  },
  darmanitan: {
    id: 555,
    name: 'Darmanitan',
    generation: PokemonGeneration.Gen5,
    cry: 'Darmanitan!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Fire"],
    stats: { hp: 105, attack: 160, defense: 55, sp_attack: 30, sp_defense: 55, speed: 135 }
  },
  maractus: {
    id: 556,
    name: 'Maractus',
    generation: PokemonGeneration.Gen5,
    cry: 'Maractus!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 75, attack: 86, defense: 67, sp_attack: 106, sp_defense: 67, speed: 60 }
  },
  dwebble: {
    id: 557,
    name: 'Dwebble',
    generation: PokemonGeneration.Gen5,
    cry: 'Dwebble!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Rock"],
    stats: { hp: 50, attack: 65, defense: 85, sp_attack: 35, sp_defense: 35, speed: 55 }
  },
  crustle: {
    id: 558,
    name: 'Crustle',
    generation: PokemonGeneration.Gen5,
    cry: 'Crustle!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Rock"],
    stats: { hp: 70, attack: 105, defense: 125, sp_attack: 65, sp_defense: 75, speed: 45 }
  },
  scraggy: {
    id: 559,
    name: 'Scraggy',
    generation: PokemonGeneration.Gen5,
    cry: 'Scraggy!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Fighting"],
    stats: { hp: 50, attack: 75, defense: 70, sp_attack: 35, sp_defense: 70, speed: 48 }
  },
  scrafty: {
    id: 560,
    name: 'Scrafty',
    generation: PokemonGeneration.Gen5,
    cry: 'Scrafty!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Fighting"],
    stats: { hp: 65, attack: 90, defense: 115, sp_attack: 45, sp_defense: 115, speed: 58 }
  },
  sigilyph: {
    id: 561,
    name: 'Sigilyph',
    generation: PokemonGeneration.Gen5,
    cry: 'Sigilyph!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 72, attack: 58, defense: 80, sp_attack: 103, sp_defense: 80, speed: 97 }
  },
  yamask: {
    id: 562,
    name: 'Yamask',
    generation: PokemonGeneration.Gen5,
    cry: 'Yamask!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Ghost"],
    stats: { hp: 38, attack: 55, defense: 85, sp_attack: 30, sp_defense: 65, speed: 30 }
  },
  cofagrigus: {
    id: 563,
    name: 'Cofagrigus',
    generation: PokemonGeneration.Gen5,
    cry: 'Cofagrigus!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost"],
    stats: { hp: 58, attack: 50, defense: 145, sp_attack: 95, sp_defense: 105, speed: 30 }
  },
  tirtouga: {
    id: 564,
    name: 'Tirtouga',
    generation: PokemonGeneration.Gen5,
    cry: 'Tirtouga!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Rock"],
    stats: { hp: 54, attack: 78, defense: 103, sp_attack: 53, sp_defense: 45, speed: 22 }
  },
  carracosta: {
    id: 565,
    name: 'Carracosta',
    generation: PokemonGeneration.Gen5,
    cry: 'Carracosta!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Rock"],
    stats: { hp: 74, attack: 108, defense: 133, sp_attack: 83, sp_defense: 65, speed: 32 }
  },
  archen: {
    id: 566,
    name: 'Archen',
    generation: PokemonGeneration.Gen5,
    cry: 'Archen!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Flying"],
    stats: { hp: 55, attack: 112, defense: 45, sp_attack: 74, sp_defense: 45, speed: 70 }
  },
  archeops: {
    id: 567,
    name: 'Archeops',
    generation: PokemonGeneration.Gen5,
    cry: 'Archeops!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Flying"],
    stats: { hp: 75, attack: 140, defense: 65, sp_attack: 112, sp_defense: 65, speed: 110 }
  },
  trubbish: {
    id: 568,
    name: 'Trubbish',
    generation: PokemonGeneration.Gen5,
    cry: 'Trubbish!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 50, attack: 50, defense: 62, sp_attack: 40, sp_defense: 62, speed: 65 }
  },
  garbodor: {
    id: 569,
    name: 'Garbodor',
    generation: PokemonGeneration.Gen5,
    cry: 'Garbodor!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 80, attack: 95, defense: 82, sp_attack: 60, sp_defense: 82, speed: 75 }
  },
  zorua: {
    id: 570,
    name: 'Zorua',
    generation: PokemonGeneration.Gen5,
    cry: 'Zorua!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Ghost"],
    stats: { hp: 35, attack: 60, defense: 40, sp_attack: 85, sp_defense: 40, speed: 70 }
  },
  zoroark: {
    id: 571,
    name: 'Zoroark',
    generation: PokemonGeneration.Gen5,
    cry: 'Zoroark!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Ghost"],
    stats: { hp: 55, attack: 100, defense: 60, sp_attack: 125, sp_defense: 60, speed: 110 }
  },
  minccino: {
    id: 572,
    name: 'Minccino',
    generation: PokemonGeneration.Gen5,
    cry: 'Minccino!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 55, attack: 50, defense: 40, sp_attack: 40, sp_defense: 40, speed: 75 }
  },
  cinccino: {
    id: 573,
    name: 'Cinccino',
    generation: PokemonGeneration.Gen5,
    cry: 'Cinccino!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 75, attack: 95, defense: 60, sp_attack: 65, sp_defense: 60, speed: 115 }
  },
  gothita: {
    id: 574,
    name: 'Gothita',
    generation: PokemonGeneration.Gen5,
    cry: 'Gothita!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 45, attack: 30, defense: 50, sp_attack: 55, sp_defense: 65, speed: 45 }
  },
  gothorita: {
    id: 575,
    name: 'Gothorita',
    generation: PokemonGeneration.Gen5,
    cry: 'Gothorita!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 60, attack: 45, defense: 70, sp_attack: 75, sp_defense: 85, speed: 55 }
  },
  gothitelle: {
    id: 576,
    name: 'Gothitelle',
    generation: PokemonGeneration.Gen5,
    cry: 'Gothitelle!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 70, attack: 55, defense: 95, sp_attack: 95, sp_defense: 110, speed: 65 }
  },
  solosis: {
    id: 577,
    name: 'Solosis',
    generation: PokemonGeneration.Gen5,
    cry: 'Solosis!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 45, attack: 30, defense: 40, sp_attack: 105, sp_defense: 50, speed: 20 }
  },
  duosion: {
    id: 578,
    name: 'Duosion',
    generation: PokemonGeneration.Gen5,
    cry: 'Duosion!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 65, attack: 40, defense: 50, sp_attack: 125, sp_defense: 60, speed: 30 }
  },
  reuniclus: {
    id: 579,
    name: 'Reuniclus',
    generation: PokemonGeneration.Gen5,
    cry: 'Reuniclus!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 110, attack: 65, defense: 75, sp_attack: 125, sp_defense: 85, speed: 30 }
  },
  ducklett: {
    id: 580,
    name: 'Ducklett',
    generation: PokemonGeneration.Gen5,
    cry: 'Ducklett!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 62, attack: 44, defense: 50, sp_attack: 44, sp_defense: 50, speed: 55 }
  },
  swanna: {
    id: 581,
    name: 'Swanna',
    generation: PokemonGeneration.Gen5,
    cry: 'Swanna!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Flying"],
    stats: { hp: 75, attack: 87, defense: 63, sp_attack: 87, sp_defense: 63, speed: 98 }
  },
  vanillite: {
    id: 582,
    name: 'Vanillite',
    generation: PokemonGeneration.Gen5,
    cry: 'Vanillite!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 36, attack: 50, defense: 50, sp_attack: 65, sp_defense: 60, speed: 44 }
  },
  vanillish: {
    id: 583,
    name: 'Vanillish',
    generation: PokemonGeneration.Gen5,
    cry: 'Vanillish!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 51, attack: 65, defense: 65, sp_attack: 80, sp_defense: 75, speed: 59 }
  },
  vanilluxe: {
    id: 584,
    name: 'Vanilluxe',
    generation: PokemonGeneration.Gen5,
    cry: 'Vanilluxe!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 71, attack: 95, defense: 85, sp_attack: 110, sp_defense: 95, speed: 79 }
  },
  deerling: {
    id: 585,
    name: 'Deerling',
    generation: PokemonGeneration.Gen5,
    cry: 'Deerling!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Grass"],
    stats: { hp: 60, attack: 60, defense: 50, sp_attack: 40, sp_defense: 50, speed: 75 }
  },
  sawsbuck: {
    id: 586,
    name: 'Sawsbuck',
    generation: PokemonGeneration.Gen5,
    cry: 'Sawsbuck!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Grass"],
    stats: { hp: 80, attack: 100, defense: 70, sp_attack: 60, sp_defense: 70, speed: 95 }
  },
  emolga: {
    id: 587,
    name: 'Emolga',
    generation: PokemonGeneration.Gen5,
    cry: 'Emolga!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Flying"],
    stats: { hp: 55, attack: 75, defense: 60, sp_attack: 75, sp_defense: 60, speed: 103 }
  },
  karrablast: {
    id: 588,
    name: 'Karrablast',
    generation: PokemonGeneration.Gen5,
    cry: 'Karrablast!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 75, defense: 45, sp_attack: 40, sp_defense: 45, speed: 60 }
  },
  escavalier: {
    id: 589,
    name: 'Escavalier',
    generation: PokemonGeneration.Gen5,
    cry: 'Escavalier!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 70, attack: 135, defense: 105, sp_attack: 60, sp_defense: 105, speed: 20 }
  },
  foongus: {
    id: 590,
    name: 'Foongus',
    generation: PokemonGeneration.Gen5,
    cry: 'Foongus!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 69, attack: 55, defense: 45, sp_attack: 55, sp_defense: 55, speed: 15 }
  },
  amoonguss: {
    id: 591,
    name: 'Amoonguss',
    generation: PokemonGeneration.Gen5,
    cry: 'Amoonguss!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Poison"],
    stats: { hp: 114, attack: 85, defense: 70, sp_attack: 85, sp_defense: 80, speed: 30 }
  },
  frillish: {
    id: 592,
    name: 'Frillish',
    generation: PokemonGeneration.Gen5,
    cry: 'Frillish!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ghost"],
    stats: { hp: 55, attack: 40, defense: 50, sp_attack: 65, sp_defense: 85, speed: 40 }
  },
  jellicent: {
    id: 593,
    name: 'Jellicent',
    generation: PokemonGeneration.Gen5,
    cry: 'Jellicent!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Ghost"],
    stats: { hp: 100, attack: 60, defense: 70, sp_attack: 85, sp_defense: 105, speed: 60 }
  },
  alomomola: {
    id: 594,
    name: 'Alomomola',
    generation: PokemonGeneration.Gen5,
    cry: 'Alomomola!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 165, attack: 75, defense: 80, sp_attack: 40, sp_defense: 45, speed: 65 }
  },
  joltik: {
    id: 595,
    name: 'Joltik',
    generation: PokemonGeneration.Gen5,
    cry: 'Joltik!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Electric"],
    stats: { hp: 50, attack: 47, defense: 50, sp_attack: 57, sp_defense: 50, speed: 65 }
  },
  galvantula: {
    id: 596,
    name: 'Galvantula',
    generation: PokemonGeneration.Gen5,
    cry: 'Galvantula!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Electric"],
    stats: { hp: 70, attack: 77, defense: 60, sp_attack: 97, sp_defense: 60, speed: 108 }
  },
  ferroseed: {
    id: 597,
    name: 'Ferroseed',
    generation: PokemonGeneration.Gen5,
    cry: 'Ferroseed!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Steel"],
    stats: { hp: 44, attack: 50, defense: 91, sp_attack: 24, sp_defense: 86, speed: 10 }
  },
  ferrothorn: {
    id: 598,
    name: 'Ferrothorn',
    generation: PokemonGeneration.Gen5,
    cry: 'Ferrothorn!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Steel"],
    stats: { hp: 74, attack: 94, defense: 131, sp_attack: 54, sp_defense: 116, speed: 20 }
  },
  klink: {
    id: 599,
    name: 'Klink',
    generation: PokemonGeneration.Gen5,
    cry: 'Klink!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 40, attack: 55, defense: 70, sp_attack: 45, sp_defense: 60, speed: 30 }
  },
  klang: {
    id: 600,
    name: 'Klang',
    generation: PokemonGeneration.Gen5,
    cry: 'Klang!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 60, attack: 80, defense: 95, sp_attack: 70, sp_defense: 85, speed: 50 }
  },
  klinklang: {
    id: 601,
    name: 'Klinklang',
    generation: PokemonGeneration.Gen5,
    cry: 'Klinklang!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 60, attack: 100, defense: 115, sp_attack: 70, sp_defense: 85, speed: 90 }
  },
  tynamo: {
    id: 602,
    name: 'Tynamo',
    generation: PokemonGeneration.Gen5,
    cry: 'Tynamo!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 35, attack: 55, defense: 40, sp_attack: 45, sp_defense: 40, speed: 60 }
  },
  eelektrik: {
    id: 603,
    name: 'Eelektrik',
    generation: PokemonGeneration.Gen5,
    cry: 'Eelektrik!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 65, attack: 85, defense: 70, sp_attack: 75, sp_defense: 70, speed: 40 }
  },
  eelektross: {
    id: 604,
    name: 'Eelektross',
    generation: PokemonGeneration.Gen5,
    cry: 'Eelektross!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 85, attack: 115, defense: 80, sp_attack: 105, sp_defense: 80, speed: 50 }
  },
  elgyem: {
    id: 605,
    name: 'Elgyem',
    generation: PokemonGeneration.Gen5,
    cry: 'Elgyem!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 55, attack: 55, defense: 55, sp_attack: 85, sp_defense: 55, speed: 30 }
  },
  beheeyem: {
    id: 606,
    name: 'Beheeyem',
    generation: PokemonGeneration.Gen5,
    cry: 'Beheeyem!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 75, attack: 75, defense: 75, sp_attack: 125, sp_defense: 95, speed: 40 }
  },
  litwick: {
    id: 607,
    name: 'Litwick',
    generation: PokemonGeneration.Gen5,
    cry: 'Litwick!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Fire"],
    stats: { hp: 50, attack: 30, defense: 55, sp_attack: 65, sp_defense: 55, speed: 20 }
  },
  lampent: {
    id: 608,
    name: 'Lampent',
    generation: PokemonGeneration.Gen5,
    cry: 'Lampent!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Fire"],
    stats: { hp: 60, attack: 40, defense: 60, sp_attack: 95, sp_defense: 60, speed: 55 }
  },
  chandelure: {
    id: 609,
    name: 'Chandelure',
    generation: PokemonGeneration.Gen5,
    cry: 'Chandelure!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Fire"],
    stats: { hp: 60, attack: 55, defense: 90, sp_attack: 145, sp_defense: 90, speed: 80 }
  },
  axew: {
    id: 610,
    name: 'Axew',
    generation: PokemonGeneration.Gen5,
    cry: 'Axew!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 46, attack: 87, defense: 60, sp_attack: 30, sp_defense: 40, speed: 57 }
  },
  fraxure: {
    id: 611,
    name: 'Fraxure',
    generation: PokemonGeneration.Gen5,
    cry: 'Fraxure!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 66, attack: 117, defense: 70, sp_attack: 40, sp_defense: 50, speed: 67 }
  },
  haxorus: {
    id: 612,
    name: 'Haxorus',
    generation: PokemonGeneration.Gen5,
    cry: 'Haxorus!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 76, attack: 147, defense: 90, sp_attack: 60, sp_defense: 70, speed: 97 }
  },
  cubchoo: {
    id: 613,
    name: 'Cubchoo',
    generation: PokemonGeneration.Gen5,
    cry: 'Cubchoo!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 55, attack: 70, defense: 40, sp_attack: 60, sp_defense: 40, speed: 40 }
  },
  beartic: {
    id: 614,
    name: 'Beartic',
    generation: PokemonGeneration.Gen5,
    cry: 'Beartic!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 95, attack: 130, defense: 80, sp_attack: 70, sp_defense: 80, speed: 50 }
  },
  cryogonal: {
    id: 615,
    name: 'Cryogonal',
    generation: PokemonGeneration.Gen5,
    cry: 'Cryogonal!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 80, attack: 50, defense: 50, sp_attack: 95, sp_defense: 135, speed: 105 }
  },
  shelmet: {
    id: 616,
    name: 'Shelmet',
    generation: PokemonGeneration.Gen5,
    cry: 'Shelmet!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 50, attack: 40, defense: 85, sp_attack: 40, sp_defense: 65, speed: 25 }
  },
  accelgor: {
    id: 617,
    name: 'Accelgor',
    generation: PokemonGeneration.Gen5,
    cry: 'Accelgor!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 80, attack: 70, defense: 40, sp_attack: 100, sp_defense: 60, speed: 145 }
  },
  stunfisk: {
    id: 618,
    name: 'Stunfisk',
    generation: PokemonGeneration.Gen5,
    cry: 'Stunfisk!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Steel"],
    stats: { hp: 109, attack: 81, defense: 99, sp_attack: 66, sp_defense: 84, speed: 32 }
  },
  mienfoo: {
    id: 619,
    name: 'Mienfoo',
    generation: PokemonGeneration.Gen5,
    cry: 'Mienfoo!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 45, attack: 85, defense: 50, sp_attack: 55, sp_defense: 50, speed: 65 }
  },
  mienshao: {
    id: 620,
    name: 'Mienshao',
    generation: PokemonGeneration.Gen5,
    cry: 'Mienshao!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 65, attack: 125, defense: 60, sp_attack: 95, sp_defense: 60, speed: 105 }
  },
  druddigon: {
    id: 621,
    name: 'Druddigon',
    generation: PokemonGeneration.Gen5,
    cry: 'Druddigon!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 77, attack: 120, defense: 90, sp_attack: 60, sp_defense: 90, speed: 48 }
  },
  golett: {
    id: 622,
    name: 'Golett',
    generation: PokemonGeneration.Gen5,
    cry: 'Golett!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Ghost"],
    stats: { hp: 59, attack: 74, defense: 50, sp_attack: 35, sp_defense: 50, speed: 35 }
  },
  golurk: {
    id: 623,
    name: 'Golurk',
    generation: PokemonGeneration.Gen5,
    cry: 'Golurk!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Ghost"],
    stats: { hp: 89, attack: 124, defense: 80, sp_attack: 55, sp_defense: 80, speed: 55 }
  },
  pawniard: {
    id: 624,
    name: 'Pawniard',
    generation: PokemonGeneration.Gen5,
    cry: 'Pawniard!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Steel"],
    stats: { hp: 45, attack: 85, defense: 70, sp_attack: 40, sp_defense: 40, speed: 60 }
  },
  bisharp: {
    id: 625,
    name: 'Bisharp',
    generation: PokemonGeneration.Gen5,
    cry: 'Bisharp!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Steel"],
    stats: { hp: 65, attack: 125, defense: 100, sp_attack: 60, sp_defense: 70, speed: 70 }
  },
  bouffalant: {
    id: 626,
    name: 'Bouffalant',
    generation: PokemonGeneration.Gen5,
    cry: 'Bouffalant!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 95, attack: 110, defense: 95, sp_attack: 40, sp_defense: 95, speed: 55 }
  },
  rufflet: {
    id: 627,
    name: 'Rufflet',
    generation: PokemonGeneration.Gen5,
    cry: 'Rufflet!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 70, attack: 83, defense: 50, sp_attack: 37, sp_defense: 50, speed: 60 }
  },
  braviary: {
    id: 628,
    name: 'Braviary',
    generation: PokemonGeneration.Gen5,
    cry: 'Braviary!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Flying"],
    stats: { hp: 110, attack: 83, defense: 70, sp_attack: 112, sp_defense: 70, speed: 65 }
  },
  vullaby: {
    id: 629,
    name: 'Vullaby',
    generation: PokemonGeneration.Gen5,
    cry: 'Vullaby!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 70, attack: 55, defense: 75, sp_attack: 45, sp_defense: 65, speed: 60 }
  },
  mandibuzz: {
    id: 630,
    name: 'Mandibuzz',
    generation: PokemonGeneration.Gen5,
    cry: 'Mandibuzz!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 110, attack: 65, defense: 105, sp_attack: 55, sp_defense: 95, speed: 80 }
  },
  heatmor: {
    id: 631,
    name: 'Heatmor',
    generation: PokemonGeneration.Gen5,
    cry: 'Heatmor!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 85, attack: 97, defense: 66, sp_attack: 105, sp_defense: 66, speed: 65 }
  },
  durant: {
    id: 632,
    name: 'Durant',
    generation: PokemonGeneration.Gen5,
    cry: 'Durant!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 58, attack: 109, defense: 112, sp_attack: 48, sp_defense: 48, speed: 109 }
  },
  deino: {
    id: 633,
    name: 'Deino',
    generation: PokemonGeneration.Gen5,
    cry: 'Deino!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Dragon"],
    stats: { hp: 52, attack: 65, defense: 50, sp_attack: 45, sp_defense: 50, speed: 38 }
  },
  zweilous: {
    id: 634,
    name: 'Zweilous',
    generation: PokemonGeneration.Gen5,
    cry: 'Zweilous!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Dragon"],
    stats: { hp: 72, attack: 85, defense: 70, sp_attack: 65, sp_defense: 70, speed: 58 }
  },
  hydreigon: {
    id: 635,
    name: 'Hydreigon',
    generation: PokemonGeneration.Gen5,
    cry: 'Hydreigon!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Dragon"],
    stats: { hp: 92, attack: 105, defense: 90, sp_attack: 125, sp_defense: 90, speed: 98 }
  },
  larvesta: {
    id: 636,
    name: 'Larvesta',
    generation: PokemonGeneration.Gen5,
    cry: 'Larvesta!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fire"],
    stats: { hp: 55, attack: 85, defense: 55, sp_attack: 50, sp_defense: 55, speed: 60 }
  },
  volcarona: {
    id: 637,
    name: 'Volcarona',
    generation: PokemonGeneration.Gen5,
    cry: 'Volcarona!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fire"],
    stats: { hp: 85, attack: 60, defense: 65, sp_attack: 135, sp_defense: 105, speed: 100 }
  },
  cobalion: {
    id: 638,
    name: 'Cobalion',
    generation: PokemonGeneration.Gen5,
    cry: 'Cobalion!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Fighting"],
    stats: { hp: 91, attack: 90, defense: 129, sp_attack: 90, sp_defense: 72, speed: 108 }
  },
  terrakion: {
    id: 639,
    name: 'Terrakion',
    generation: PokemonGeneration.Gen5,
    cry: 'Terrakion!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Fighting"],
    stats: { hp: 91, attack: 129, defense: 90, sp_attack: 72, sp_defense: 90, speed: 108 }
  },
  virizion: {
    id: 640,
    name: 'Virizion',
    generation: PokemonGeneration.Gen5,
    cry: 'Virizion!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fighting"],
    stats: { hp: 91, attack: 90, defense: 72, sp_attack: 90, sp_defense: 129, speed: 108 }
  },
  tornadus: {
    id: 641,
    name: 'Tornadus',
    generation: PokemonGeneration.Gen5,
    cry: 'Tornadus!',
    possibleColors: [PokemonColor.default],
    types: ["Flying"],
    stats: { hp: 79, attack: 100, defense: 80, sp_attack: 110, sp_defense: 90, speed: 121 }
  },
  thundurus: {
    id: 642,
    name: 'Thundurus',
    generation: PokemonGeneration.Gen5,
    cry: 'Thundurus!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Flying"],
    stats: { hp: 79, attack: 105, defense: 70, sp_attack: 145, sp_defense: 80, speed: 101 }
  },
  reshiram: {
    id: 643,
    name: 'Reshiram',
    generation: PokemonGeneration.Gen5,
    cry: 'Reshiram!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Fire"],
    stats: { hp: 100, attack: 120, defense: 100, sp_attack: 150, sp_defense: 120, speed: 90 }
  },
  zekrom: {
    id: 644,
    name: 'Zekrom',
    generation: PokemonGeneration.Gen5,
    cry: 'Zekrom!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Electric"],
    stats: { hp: 100, attack: 150, defense: 120, sp_attack: 120, sp_defense: 100, speed: 90 }
  },
  landorus: {
    id: 645,
    name: 'Landorus',
    generation: PokemonGeneration.Gen5,
    cry: 'Landorus!',
    possibleColors: [PokemonColor.default],
    types: ["Ground", "Flying"],
    stats: { hp: 89, attack: 145, defense: 90, sp_attack: 105, sp_defense: 80, speed: 91 }
  },
  kyurem: {
    id: 646,
    name: 'Kyurem',
    generation: PokemonGeneration.Gen5,
    cry: 'Kyurem!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Ice"],
    stats: { hp: 125, attack: 170, defense: 100, sp_attack: 120, sp_defense: 90, speed: 95 }
  },
  keldeo: {
    id: 647,
    name: 'Keldeo',
    generation: PokemonGeneration.Gen5,
    cry: 'Keldeo!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fighting"],
    stats: { hp: 91, attack: 72, defense: 90, sp_attack: 129, sp_defense: 90, speed: 108 }
  },
  meloetta: {
    id: 648,
    name: 'Meloetta',
    generation: PokemonGeneration.Gen5,
    cry: 'Meloetta!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fighting"],
    stats: { hp: 100, attack: 128, defense: 90, sp_attack: 77, sp_defense: 77, speed: 128 }
  },
  genesect: {
    id: 649,
    name: 'Genesect',
    generation: PokemonGeneration.Gen5,
    cry: 'Genesect!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Steel"],
    stats: { hp: 71, attack: 120, defense: 95, sp_attack: 120, sp_defense: 95, speed: 99 }
  },
  chespin: {
    id: 650,
    name: 'Chespin',
    generation: PokemonGeneration.Gen6,
    cry: 'Chespin!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 56, attack: 61, defense: 65, sp_attack: 48, sp_defense: 45, speed: 38 }
  },
  quilladin: {
    id: 651,
    name: 'Quilladin',
    generation: PokemonGeneration.Gen6,
    cry: 'Quilladin!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 61, attack: 78, defense: 95, sp_attack: 56, sp_defense: 58, speed: 57 }
  },
  chesnaught: {
    id: 652,
    name: 'Chesnaught',
    generation: PokemonGeneration.Gen6,
    cry: 'Chesnaught!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fighting"],
    stats: { hp: 88, attack: 107, defense: 122, sp_attack: 74, sp_defense: 75, speed: 64 }
  },
  fennekin: {
    id: 653,
    name: 'Fennekin',
    generation: PokemonGeneration.Gen6,
    cry: 'Fennekin!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 40, attack: 45, defense: 40, sp_attack: 62, sp_defense: 60, speed: 60 }
  },
  braixen: {
    id: 654,
    name: 'Braixen',
    generation: PokemonGeneration.Gen6,
    cry: 'Braixen!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 59, attack: 59, defense: 58, sp_attack: 90, sp_defense: 70, speed: 73 }
  },
  delphox: {
    id: 655,
    name: 'Delphox',
    generation: PokemonGeneration.Gen6,
    cry: 'Delphox!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Psychic"],
    stats: { hp: 75, attack: 69, defense: 72, sp_attack: 114, sp_defense: 100, speed: 104 }
  },
  froakie: {
    id: 656,
    name: 'Froakie',
    generation: PokemonGeneration.Gen6,
    cry: 'Froakie!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 41, attack: 56, defense: 40, sp_attack: 62, sp_defense: 44, speed: 71 }
  },
  frogadier: {
    id: 657,
    name: 'Frogadier',
    generation: PokemonGeneration.Gen6,
    cry: 'Frogadier!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 54, attack: 63, defense: 52, sp_attack: 83, sp_defense: 56, speed: 97 }
  },
  greninja: {
    id: 658,
    name: 'Greninja',
    generation: PokemonGeneration.Gen6,
    cry: 'Greninja!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Dark"],
    stats: { hp: 72, attack: 145, defense: 67, sp_attack: 153, sp_defense: 71, speed: 132 }
  },
  bunnelby: {
    id: 659,
    name: 'Bunnelby',
    generation: PokemonGeneration.Gen6,
    cry: 'Bunnelby!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 38, attack: 36, defense: 38, sp_attack: 32, sp_defense: 36, speed: 57 }
  },
  diggersby: {
    id: 660,
    name: 'Diggersby',
    generation: PokemonGeneration.Gen6,
    cry: 'Diggersby!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Ground"],
    stats: { hp: 85, attack: 56, defense: 77, sp_attack: 50, sp_defense: 77, speed: 78 }
  },
  fletchling: {
    id: 661,
    name: 'Fletchling',
    generation: PokemonGeneration.Gen6,
    cry: 'Fletchling!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 45, attack: 50, defense: 43, sp_attack: 40, sp_defense: 38, speed: 62 }
  },
  fletchinder: {
    id: 662,
    name: 'Fletchinder',
    generation: PokemonGeneration.Gen6,
    cry: 'Fletchinder!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Flying"],
    stats: { hp: 62, attack: 73, defense: 55, sp_attack: 56, sp_defense: 52, speed: 84 }
  },
  talonflame: {
    id: 663,
    name: 'Talonflame',
    generation: PokemonGeneration.Gen6,
    cry: 'Talonflame!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Flying"],
    stats: { hp: 78, attack: 81, defense: 71, sp_attack: 74, sp_defense: 69, speed: 126 }
  },
  scatterbug: {
    id: 664,
    name: 'Scatterbug',
    generation: PokemonGeneration.Gen6,
    cry: 'Scatterbug!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 38, attack: 35, defense: 40, sp_attack: 27, sp_defense: 25, speed: 35 }
  },
  spewpa: {
    id: 665,
    name: 'Spewpa',
    generation: PokemonGeneration.Gen6,
    cry: 'Spewpa!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 45, attack: 22, defense: 60, sp_attack: 27, sp_defense: 30, speed: 29 }
  },
  vivillon: {
    id: 666,
    name: 'Vivillon',
    generation: PokemonGeneration.Gen6,
    cry: 'Vivillon!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Flying"],
    stats: { hp: 80, attack: 52, defense: 50, sp_attack: 90, sp_defense: 50, speed: 89 }
  },
  litleo: {
    id: 667,
    name: 'Litleo',
    generation: PokemonGeneration.Gen6,
    cry: 'Litleo!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Normal"],
    stats: { hp: 62, attack: 50, defense: 58, sp_attack: 73, sp_defense: 54, speed: 72 }
  },
  pyroar: {
    id: 668,
    name: 'Pyroar',
    generation: PokemonGeneration.Gen6,
    cry: 'Pyroar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Normal"],
    stats: { hp: 86, attack: 68, defense: 72, sp_attack: 109, sp_defense: 66, speed: 106 }
  },
  flabebe: {
    id: 669,
    name: 'Flabébé',
    generation: PokemonGeneration.Gen6,
    cry: 'Flabébé!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 44, attack: 38, defense: 39, sp_attack: 61, sp_defense: 79, speed: 42 }
  },
  floette: {
    id: 670,
    name: 'Floette',
    generation: PokemonGeneration.Gen6,
    cry: 'Floette!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 54, attack: 45, defense: 47, sp_attack: 75, sp_defense: 98, speed: 52 }
  },
  florges: {
    id: 671,
    name: 'Florges',
    generation: PokemonGeneration.Gen6,
    cry: 'Florges!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 78, attack: 65, defense: 68, sp_attack: 112, sp_defense: 154, speed: 75 }
  },
  skiddo: {
    id: 672,
    name: 'Skiddo',
    generation: PokemonGeneration.Gen6,
    cry: 'Skiddo!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 66, attack: 65, defense: 48, sp_attack: 62, sp_defense: 57, speed: 52 }
  },
  gogoat: {
    id: 673,
    name: 'Gogoat',
    generation: PokemonGeneration.Gen6,
    cry: 'Gogoat!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 123, attack: 100, defense: 62, sp_attack: 97, sp_defense: 81, speed: 68 }
  },
  pancham: {
    id: 674,
    name: 'Pancham',
    generation: PokemonGeneration.Gen6,
    cry: 'Pancham!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 67, attack: 82, defense: 62, sp_attack: 46, sp_defense: 48, speed: 43 }
  },
  pangoro: {
    id: 675,
    name: 'Pangoro',
    generation: PokemonGeneration.Gen6,
    cry: 'Pangoro!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Dark"],
    stats: { hp: 95, attack: 124, defense: 78, sp_attack: 69, sp_defense: 71, speed: 58 }
  },
  furfrou: {
    id: 676,
    name: 'Furfrou',
    generation: PokemonGeneration.Gen6,
    cry: 'Furfrou!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 75, attack: 80, defense: 60, sp_attack: 65, sp_defense: 90, speed: 102 }
  },
  espurr: {
    id: 677,
    name: 'Espurr',
    generation: PokemonGeneration.Gen6,
    cry: 'Espurr!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 62, attack: 48, defense: 54, sp_attack: 63, sp_defense: 60, speed: 68 }
  },
  meowstic: {
    id: 678,
    name: 'Meowstic',
    generation: PokemonGeneration.Gen6,
    cry: 'Meowstic!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 74, attack: 48, defense: 76, sp_attack: 83, sp_defense: 81, speed: 104 }
  },
  honedge: {
    id: 679,
    name: 'Honedge',
    generation: PokemonGeneration.Gen6,
    cry: 'Honedge!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Ghost"],
    stats: { hp: 45, attack: 80, defense: 100, sp_attack: 35, sp_defense: 37, speed: 28 }
  },
  doublade: {
    id: 680,
    name: 'Doublade',
    generation: PokemonGeneration.Gen6,
    cry: 'Doublade!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Ghost"],
    stats: { hp: 59, attack: 110, defense: 150, sp_attack: 45, sp_defense: 49, speed: 35 }
  },
  aegislash: {
    id: 681,
    name: 'Aegislash',
    generation: PokemonGeneration.Gen6,
    cry: 'Aegislash!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Ghost"],
    stats: { hp: 60, attack: 140, defense: 50, sp_attack: 140, sp_defense: 50, speed: 60 }
  },
  spritzee: {
    id: 682,
    name: 'Spritzee',
    generation: PokemonGeneration.Gen6,
    cry: 'Spritzee!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 78, attack: 52, defense: 60, sp_attack: 63, sp_defense: 65, speed: 23 }
  },
  aromatisse: {
    id: 683,
    name: 'Aromatisse',
    generation: PokemonGeneration.Gen6,
    cry: 'Aromatisse!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 101, attack: 72, defense: 72, sp_attack: 99, sp_defense: 89, speed: 29 }
  },
  swirlix: {
    id: 684,
    name: 'Swirlix',
    generation: PokemonGeneration.Gen6,
    cry: 'Swirlix!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 62, attack: 48, defense: 66, sp_attack: 59, sp_defense: 57, speed: 49 }
  },
  slurpuff: {
    id: 685,
    name: 'Slurpuff',
    generation: PokemonGeneration.Gen6,
    cry: 'Slurpuff!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 82, attack: 80, defense: 86, sp_attack: 85, sp_defense: 75, speed: 72 }
  },
  inkay: {
    id: 686,
    name: 'Inkay',
    generation: PokemonGeneration.Gen6,
    cry: 'Inkay!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Psychic"],
    stats: { hp: 53, attack: 54, defense: 53, sp_attack: 37, sp_defense: 46, speed: 45 }
  },
  malamar: {
    id: 687,
    name: 'Malamar',
    generation: PokemonGeneration.Gen6,
    cry: 'Malamar!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Psychic"],
    stats: { hp: 86, attack: 102, defense: 88, sp_attack: 98, sp_defense: 120, speed: 88 }
  },
  binacle: {
    id: 688,
    name: 'Binacle',
    generation: PokemonGeneration.Gen6,
    cry: 'Binacle!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 42, attack: 52, defense: 67, sp_attack: 39, sp_defense: 56, speed: 50 }
  },
  barbaracle: {
    id: 689,
    name: 'Barbaracle',
    generation: PokemonGeneration.Gen6,
    cry: 'Barbaracle!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Water"],
    stats: { hp: 72, attack: 105, defense: 115, sp_attack: 54, sp_defense: 86, speed: 68 }
  },
  skrelp: {
    id: 690,
    name: 'Skrelp',
    generation: PokemonGeneration.Gen6,
    cry: 'Skrelp!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Water"],
    stats: { hp: 50, attack: 60, defense: 60, sp_attack: 60, sp_defense: 60, speed: 30 }
  },
  dragalge: {
    id: 691,
    name: 'Dragalge',
    generation: PokemonGeneration.Gen6,
    cry: 'Dragalge!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dragon"],
    stats: { hp: 65, attack: 75, defense: 90, sp_attack: 97, sp_defense: 123, speed: 44 }
  },
  clauncher: {
    id: 692,
    name: 'Clauncher',
    generation: PokemonGeneration.Gen6,
    cry: 'Clauncher!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 53, defense: 62, sp_attack: 58, sp_defense: 63, speed: 44 }
  },
  clawitzer: {
    id: 693,
    name: 'Clawitzer',
    generation: PokemonGeneration.Gen6,
    cry: 'Clawitzer!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 71, attack: 73, defense: 88, sp_attack: 120, sp_defense: 89, speed: 59 }
  },
  helioptile: {
    id: 694,
    name: 'Helioptile',
    generation: PokemonGeneration.Gen6,
    cry: 'Helioptile!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Normal"],
    stats: { hp: 44, attack: 38, defense: 33, sp_attack: 61, sp_defense: 43, speed: 70 }
  },
  heliolisk: {
    id: 695,
    name: 'Heliolisk',
    generation: PokemonGeneration.Gen6,
    cry: 'Heliolisk!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Normal"],
    stats: { hp: 62, attack: 55, defense: 52, sp_attack: 109, sp_defense: 94, speed: 109 }
  },
  tyrunt: {
    id: 696,
    name: 'Tyrunt',
    generation: PokemonGeneration.Gen6,
    cry: 'Tyrunt!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Dragon"],
    stats: { hp: 58, attack: 89, defense: 77, sp_attack: 45, sp_defense: 45, speed: 48 }
  },
  tyrantrum: {
    id: 697,
    name: 'Tyrantrum',
    generation: PokemonGeneration.Gen6,
    cry: 'Tyrantrum!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Dragon"],
    stats: { hp: 82, attack: 121, defense: 119, sp_attack: 69, sp_defense: 59, speed: 71 }
  },
  amaura: {
    id: 698,
    name: 'Amaura',
    generation: PokemonGeneration.Gen6,
    cry: 'Amaura!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Ice"],
    stats: { hp: 77, attack: 59, defense: 50, sp_attack: 67, sp_defense: 63, speed: 46 }
  },
  aurorus: {
    id: 699,
    name: 'Aurorus',
    generation: PokemonGeneration.Gen6,
    cry: 'Aurorus!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Ice"],
    stats: { hp: 123, attack: 77, defense: 72, sp_attack: 99, sp_defense: 92, speed: 58 }
  },
  sylveon: {
    id: 700,
    name: 'Sylveon',
    generation: PokemonGeneration.Gen6,
    cry: 'Sylveon!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 95, attack: 65, defense: 65, sp_attack: 110, sp_defense: 130, speed: 60 }
  },
  hawlucha: {
    id: 701,
    name: 'Hawlucha',
    generation: PokemonGeneration.Gen6,
    cry: 'Hawlucha!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Flying"],
    stats: { hp: 78, attack: 137, defense: 100, sp_attack: 74, sp_defense: 93, speed: 118 }
  },
  dedenne: {
    id: 702,
    name: 'Dedenne',
    generation: PokemonGeneration.Gen6,
    cry: 'Dedenne!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Fairy"],
    stats: { hp: 67, attack: 58, defense: 57, sp_attack: 81, sp_defense: 67, speed: 101 }
  },
  carbink: {
    id: 703,
    name: 'Carbink',
    generation: PokemonGeneration.Gen6,
    cry: 'Carbink!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Fairy"],
    stats: { hp: 50, attack: 50, defense: 150, sp_attack: 50, sp_defense: 150, speed: 50 }
  },
  goomy: {
    id: 704,
    name: 'Goomy',
    generation: PokemonGeneration.Gen6,
    cry: 'Goomy!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 45, attack: 50, defense: 35, sp_attack: 55, sp_defense: 75, speed: 40 }
  },
  sliggoo: {
    id: 705,
    name: 'Sliggoo',
    generation: PokemonGeneration.Gen6,
    cry: 'Sliggoo!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Dragon"],
    stats: { hp: 58, attack: 75, defense: 83, sp_attack: 83, sp_defense: 113, speed: 40 }
  },
  goodra: {
    id: 706,
    name: 'Goodra',
    generation: PokemonGeneration.Gen6,
    cry: 'Goodra!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Dragon"],
    stats: { hp: 80, attack: 100, defense: 100, sp_attack: 110, sp_defense: 150, speed: 60 }
  },
  klefki: {
    id: 707,
    name: 'Klefki',
    generation: PokemonGeneration.Gen6,
    cry: 'Klefki!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Fairy"],
    stats: { hp: 57, attack: 80, defense: 91, sp_attack: 80, sp_defense: 87, speed: 75 }
  },
  phantump: {
    id: 708,
    name: 'Phantump',
    generation: PokemonGeneration.Gen6,
    cry: 'Phantump!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Grass"],
    stats: { hp: 43, attack: 70, defense: 48, sp_attack: 50, sp_defense: 60, speed: 38 }
  },
  trevenant: {
    id: 709,
    name: 'Trevenant',
    generation: PokemonGeneration.Gen6,
    cry: 'Trevenant!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Grass"],
    stats: { hp: 85, attack: 110, defense: 76, sp_attack: 65, sp_defense: 82, speed: 56 }
  },
  pumpkaboo: {
    id: 710,
    name: 'Pumpkaboo',
    generation: PokemonGeneration.Gen6,
    cry: 'Pumpkaboo!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Grass"],
    stats: { hp: 59, attack: 66, defense: 70, sp_attack: 44, sp_defense: 55, speed: 41 }
  },
  gourgeist: {
    id: 711,
    name: 'Gourgeist',
    generation: PokemonGeneration.Gen6,
    cry: 'Gourgeist!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Grass"],
    stats: { hp: 85, attack: 100, defense: 122, sp_attack: 58, sp_defense: 75, speed: 54 }
  },
  bergmite: {
    id: 712,
    name: 'Bergmite',
    generation: PokemonGeneration.Gen6,
    cry: 'Bergmite!',
    possibleColors: [PokemonColor.default],
    types: ["Ice"],
    stats: { hp: 55, attack: 69, defense: 85, sp_attack: 32, sp_defense: 35, speed: 28 }
  },
  avalugg: {
    id: 713,
    name: 'Avalugg',
    generation: PokemonGeneration.Gen6,
    cry: 'Avalugg!',
    possibleColors: [PokemonColor.default],
    types: ["Ice", "Rock"],
    stats: { hp: 95, attack: 127, defense: 184, sp_attack: 34, sp_defense: 36, speed: 38 }
  },
  noibat: {
    id: 714,
    name: 'Noibat',
    generation: PokemonGeneration.Gen6,
    cry: 'Noibat!',
    possibleColors: [PokemonColor.default],
    types: ["Flying", "Dragon"],
    stats: { hp: 40, attack: 30, defense: 35, sp_attack: 45, sp_defense: 40, speed: 55 }
  },
  noivern: {
    id: 715,
    name: 'Noivern',
    generation: PokemonGeneration.Gen6,
    cry: 'Noivern!',
    possibleColors: [PokemonColor.default],
    types: ["Flying", "Dragon"],
    stats: { hp: 85, attack: 70, defense: 80, sp_attack: 97, sp_defense: 80, speed: 123 }
  },
  xerneas: {
    id: 716,
    name: 'Xerneas',
    generation: PokemonGeneration.Gen6,
    cry: 'Xerneas!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 126, attack: 131, defense: 95, sp_attack: 131, sp_defense: 98, speed: 99 }
  },
  yveltal: {
    id: 717,
    name: 'Yveltal',
    generation: PokemonGeneration.Gen6,
    cry: 'Yveltal!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Flying"],
    stats: { hp: 126, attack: 131, defense: 95, sp_attack: 131, sp_defense: 98, speed: 99 }
  },
  zygarde: {
    id: 718,
    name: 'Zygarde',
    generation: PokemonGeneration.Gen6,
    cry: 'Zygarde!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Ground"],
    stats: { hp: 216, attack: 100, defense: 121, sp_attack: 91, sp_defense: 95, speed: 85 }
  },
  diancie: {
    id: 719,
    name: 'Diancie',
    generation: PokemonGeneration.Gen6,
    cry: 'Diancie!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Fairy"],
    stats: { hp: 50, attack: 160, defense: 110, sp_attack: 160, sp_defense: 110, speed: 110 }
  },
  hoopa: {
    id: 720,
    name: 'Hoopa',
    generation: PokemonGeneration.Gen6,
    cry: 'Hoopa!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Dark"],
    stats: { hp: 80, attack: 160, defense: 60, sp_attack: 170, sp_defense: 130, speed: 80 }
  },
  volcanion: {
    id: 721,
    name: 'Volcanion',
    generation: PokemonGeneration.Gen6,
    cry: 'Volcanion!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Water"],
    stats: { hp: 80, attack: 110, defense: 120, sp_attack: 130, sp_defense: 90, speed: 70 }
  },
  rowlet: {
    id: 722,
    name: 'Rowlet',
    generation: PokemonGeneration.Gen7,
    cry: 'Rowlet!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 68, attack: 55, defense: 55, sp_attack: 50, sp_defense: 50, speed: 42 }
  },
  dartrix: {
    id: 723,
    name: 'Dartrix',
    generation: PokemonGeneration.Gen7,
    cry: 'Dartrix!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Flying"],
    stats: { hp: 78, attack: 75, defense: 75, sp_attack: 70, sp_defense: 70, speed: 52 }
  },
  decidueye: {
    id: 724,
    name: 'Decidueye',
    generation: PokemonGeneration.Gen7,
    cry: 'Decidueye!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fighting"],
    stats: { hp: 88, attack: 112, defense: 80, sp_attack: 95, sp_defense: 95, speed: 60 }
  },
  litten: {
    id: 725,
    name: 'Litten',
    generation: PokemonGeneration.Gen7,
    cry: 'Litten!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 45, attack: 65, defense: 40, sp_attack: 60, sp_defense: 40, speed: 70 }
  },
  torracat: {
    id: 726,
    name: 'Torracat',
    generation: PokemonGeneration.Gen7,
    cry: 'Torracat!',
    possibleColors: [PokemonColor.default],
    types: ["Fire"],
    stats: { hp: 65, attack: 85, defense: 50, sp_attack: 80, sp_defense: 50, speed: 90 }
  },
  incineroar: {
    id: 727,
    name: 'Incineroar',
    generation: PokemonGeneration.Gen7,
    cry: 'Incineroar!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Dark"],
    stats: { hp: 95, attack: 115, defense: 90, sp_attack: 80, sp_defense: 90, speed: 60 }
  },
  popplio: {
    id: 728,
    name: 'Popplio',
    generation: PokemonGeneration.Gen7,
    cry: 'Popplio!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 50, attack: 54, defense: 54, sp_attack: 66, sp_defense: 56, speed: 40 }
  },
  brionne: {
    id: 729,
    name: 'Brionne',
    generation: PokemonGeneration.Gen7,
    cry: 'Brionne!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 60, attack: 69, defense: 69, sp_attack: 91, sp_defense: 81, speed: 50 }
  },
  primarina: {
    id: 730,
    name: 'Primarina',
    generation: PokemonGeneration.Gen7,
    cry: 'Primarina!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fairy"],
    stats: { hp: 80, attack: 74, defense: 74, sp_attack: 126, sp_defense: 116, speed: 60 }
  },
  pikipek: {
    id: 731,
    name: 'Pikipek',
    generation: PokemonGeneration.Gen7,
    cry: 'Pikipek!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 35, attack: 75, defense: 30, sp_attack: 30, sp_defense: 30, speed: 65 }
  },
  trumbeak: {
    id: 732,
    name: 'Trumbeak',
    generation: PokemonGeneration.Gen7,
    cry: 'Trumbeak!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 55, attack: 85, defense: 50, sp_attack: 40, sp_defense: 50, speed: 75 }
  },
  toucannon: {
    id: 733,
    name: 'Toucannon',
    generation: PokemonGeneration.Gen7,
    cry: 'Toucannon!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Flying"],
    stats: { hp: 80, attack: 120, defense: 75, sp_attack: 75, sp_defense: 75, speed: 60 }
  },
  yungoos: {
    id: 734,
    name: 'Yungoos',
    generation: PokemonGeneration.Gen7,
    cry: 'Yungoos!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 48, attack: 70, defense: 30, sp_attack: 30, sp_defense: 30, speed: 45 }
  },
  gumshoos: {
    id: 735,
    name: 'Gumshoos',
    generation: PokemonGeneration.Gen7,
    cry: 'Gumshoos!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 88, attack: 110, defense: 60, sp_attack: 55, sp_defense: 60, speed: 45 }
  },
  grubbin: {
    id: 736,
    name: 'Grubbin',
    generation: PokemonGeneration.Gen7,
    cry: 'Grubbin!',
    possibleColors: [PokemonColor.default],
    types: ["Bug"],
    stats: { hp: 47, attack: 62, defense: 45, sp_attack: 55, sp_defense: 45, speed: 46 }
  },
  charjabug: {
    id: 737,
    name: 'Charjabug',
    generation: PokemonGeneration.Gen7,
    cry: 'Charjabug!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Electric"],
    stats: { hp: 57, attack: 82, defense: 95, sp_attack: 55, sp_defense: 75, speed: 36 }
  },
  vikavolt: {
    id: 738,
    name: 'Vikavolt',
    generation: PokemonGeneration.Gen7,
    cry: 'Vikavolt!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Electric"],
    stats: { hp: 77, attack: 70, defense: 90, sp_attack: 145, sp_defense: 75, speed: 43 }
  },
  crabrawler: {
    id: 739,
    name: 'Crabrawler',
    generation: PokemonGeneration.Gen7,
    cry: 'Crabrawler!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 47, attack: 82, defense: 57, sp_attack: 42, sp_defense: 47, speed: 63 }
  },
  crabominable: {
    id: 740,
    name: 'Crabominable',
    generation: PokemonGeneration.Gen7,
    cry: 'Crabominable!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Ice"],
    stats: { hp: 97, attack: 132, defense: 77, sp_attack: 62, sp_defense: 67, speed: 43 }
  },
  oricorio: {
    id: 741,
    name: 'Oricorio',
    generation: PokemonGeneration.Gen7,
    cry: 'Oricorio!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Flying"],
    stats: { hp: 75, attack: 70, defense: 70, sp_attack: 98, sp_defense: 70, speed: 93 }
  },
  cutiefly: {
    id: 742,
    name: 'Cutiefly',
    generation: PokemonGeneration.Gen7,
    cry: 'Cutiefly!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fairy"],
    stats: { hp: 40, attack: 45, defense: 40, sp_attack: 55, sp_defense: 40, speed: 84 }
  },
  ribombee: {
    id: 743,
    name: 'Ribombee',
    generation: PokemonGeneration.Gen7,
    cry: 'Ribombee!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fairy"],
    stats: { hp: 60, attack: 55, defense: 60, sp_attack: 95, sp_defense: 70, speed: 124 }
  },
  rockruff: {
    id: 744,
    name: 'Rockruff',
    generation: PokemonGeneration.Gen7,
    cry: 'Rockruff!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 45, attack: 65, defense: 40, sp_attack: 30, sp_defense: 40, speed: 60 }
  },
  lycanroc: {
    id: 745,
    name: 'Lycanroc',
    generation: PokemonGeneration.Gen7,
    cry: 'Lycanroc!',
    possibleColors: [PokemonColor.default],
    types: ["Rock"],
    stats: { hp: 75, attack: 117, defense: 65, sp_attack: 55, sp_defense: 65, speed: 110 }
  },
  wishiwashi: {
    id: 746,
    name: 'Wishiwashi',
    generation: PokemonGeneration.Gen7,
    cry: 'Wishiwashi!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 45, attack: 140, defense: 130, sp_attack: 140, sp_defense: 135, speed: 30 }
  },
  mareanie: {
    id: 747,
    name: 'Mareanie',
    generation: PokemonGeneration.Gen7,
    cry: 'Mareanie!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Water"],
    stats: { hp: 50, attack: 53, defense: 62, sp_attack: 43, sp_defense: 52, speed: 45 }
  },
  toxapex: {
    id: 748,
    name: 'Toxapex',
    generation: PokemonGeneration.Gen7,
    cry: 'Toxapex!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Water"],
    stats: { hp: 50, attack: 63, defense: 152, sp_attack: 53, sp_defense: 142, speed: 35 }
  },
  mudbray: {
    id: 749,
    name: 'Mudbray',
    generation: PokemonGeneration.Gen7,
    cry: 'Mudbray!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 70, attack: 100, defense: 70, sp_attack: 45, sp_defense: 55, speed: 45 }
  },
  mudsdale: {
    id: 750,
    name: 'Mudsdale',
    generation: PokemonGeneration.Gen7,
    cry: 'Mudsdale!',
    possibleColors: [PokemonColor.default],
    types: ["Ground"],
    stats: { hp: 100, attack: 125, defense: 100, sp_attack: 55, sp_defense: 85, speed: 35 }
  },
  dewpider: {
    id: 751,
    name: 'Dewpider',
    generation: PokemonGeneration.Gen7,
    cry: 'Dewpider!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Bug"],
    stats: { hp: 38, attack: 40, defense: 52, sp_attack: 40, sp_defense: 72, speed: 27 }
  },
  araquanid: {
    id: 752,
    name: 'Araquanid',
    generation: PokemonGeneration.Gen7,
    cry: 'Araquanid!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Bug"],
    stats: { hp: 68, attack: 70, defense: 92, sp_attack: 50, sp_defense: 132, speed: 42 }
  },
  fomantis: {
    id: 753,
    name: 'Fomantis',
    generation: PokemonGeneration.Gen7,
    cry: 'Fomantis!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 40, attack: 55, defense: 35, sp_attack: 50, sp_defense: 35, speed: 35 }
  },
  lurantis: {
    id: 754,
    name: 'Lurantis',
    generation: PokemonGeneration.Gen7,
    cry: 'Lurantis!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 70, attack: 105, defense: 90, sp_attack: 80, sp_defense: 90, speed: 45 }
  },
  morelull: {
    id: 755,
    name: 'Morelull',
    generation: PokemonGeneration.Gen7,
    cry: 'Morelull!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fairy"],
    stats: { hp: 40, attack: 35, defense: 55, sp_attack: 65, sp_defense: 75, speed: 15 }
  },
  shiinotic: {
    id: 756,
    name: 'Shiinotic',
    generation: PokemonGeneration.Gen7,
    cry: 'Shiinotic!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fairy"],
    stats: { hp: 60, attack: 45, defense: 80, sp_attack: 90, sp_defense: 100, speed: 30 }
  },
  salandit: {
    id: 757,
    name: 'Salandit',
    generation: PokemonGeneration.Gen7,
    cry: 'Salandit!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Fire"],
    stats: { hp: 48, attack: 44, defense: 40, sp_attack: 71, sp_defense: 40, speed: 77 }
  },
  salazzle: {
    id: 758,
    name: 'Salazzle',
    generation: PokemonGeneration.Gen7,
    cry: 'Salazzle!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Fire"],
    stats: { hp: 68, attack: 64, defense: 60, sp_attack: 111, sp_defense: 60, speed: 117 }
  },
  stufful: {
    id: 759,
    name: 'Stufful',
    generation: PokemonGeneration.Gen7,
    cry: 'Stufful!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fighting"],
    stats: { hp: 70, attack: 75, defense: 50, sp_attack: 45, sp_defense: 50, speed: 50 }
  },
  bewear: {
    id: 760,
    name: 'Bewear',
    generation: PokemonGeneration.Gen7,
    cry: 'Bewear!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Fighting"],
    stats: { hp: 120, attack: 125, defense: 80, sp_attack: 55, sp_defense: 60, speed: 60 }
  },
  bounsweet: {
    id: 761,
    name: 'Bounsweet',
    generation: PokemonGeneration.Gen7,
    cry: 'Bounsweet!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 42, attack: 30, defense: 38, sp_attack: 30, sp_defense: 38, speed: 32 }
  },
  steenee: {
    id: 762,
    name: 'Steenee',
    generation: PokemonGeneration.Gen7,
    cry: 'Steenee!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 52, attack: 40, defense: 48, sp_attack: 40, sp_defense: 48, speed: 62 }
  },
  tsareena: {
    id: 763,
    name: 'Tsareena',
    generation: PokemonGeneration.Gen7,
    cry: 'Tsareena!',
    possibleColors: [PokemonColor.default],
    types: ["Grass"],
    stats: { hp: 72, attack: 120, defense: 98, sp_attack: 50, sp_defense: 98, speed: 72 }
  },
  comfey: {
    id: 764,
    name: 'Comfey',
    generation: PokemonGeneration.Gen7,
    cry: 'Comfey!',
    possibleColors: [PokemonColor.default],
    types: ["Fairy"],
    stats: { hp: 51, attack: 52, defense: 90, sp_attack: 82, sp_defense: 110, speed: 100 }
  },
  oranguru: {
    id: 765,
    name: 'Oranguru',
    generation: PokemonGeneration.Gen7,
    cry: 'Oranguru!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Psychic"],
    stats: { hp: 90, attack: 60, defense: 80, sp_attack: 90, sp_defense: 110, speed: 60 }
  },
  passimian: {
    id: 766,
    name: 'Passimian',
    generation: PokemonGeneration.Gen7,
    cry: 'Passimian!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting"],
    stats: { hp: 100, attack: 120, defense: 90, sp_attack: 40, sp_defense: 60, speed: 80 }
  },
  wimpod: {
    id: 767,
    name: 'Wimpod',
    generation: PokemonGeneration.Gen7,
    cry: 'Wimpod!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Water"],
    stats: { hp: 25, attack: 35, defense: 40, sp_attack: 20, sp_defense: 30, speed: 80 }
  },
  golisopod: {
    id: 768,
    name: 'Golisopod',
    generation: PokemonGeneration.Gen7,
    cry: 'Golisopod!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Water"],
    stats: { hp: 75, attack: 125, defense: 140, sp_attack: 60, sp_defense: 90, speed: 40 }
  },
  sandygast: {
    id: 769,
    name: 'Sandygast',
    generation: PokemonGeneration.Gen7,
    cry: 'Sandygast!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Ground"],
    stats: { hp: 55, attack: 55, defense: 80, sp_attack: 70, sp_defense: 45, speed: 15 }
  },
  palossand: {
    id: 770,
    name: 'Palossand',
    generation: PokemonGeneration.Gen7,
    cry: 'Palossand!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Ground"],
    stats: { hp: 85, attack: 75, defense: 110, sp_attack: 100, sp_defense: 75, speed: 35 }
  },
  pyukumuku: {
    id: 771,
    name: 'Pyukumuku',
    generation: PokemonGeneration.Gen7,
    cry: 'Pyukumuku!',
    possibleColors: [PokemonColor.default],
    types: ["Water"],
    stats: { hp: 55, attack: 60, defense: 130, sp_attack: 30, sp_defense: 130, speed: 5 }
  },
  typenull: {
    id: 772,
    name: 'Type: Null',
    generation: PokemonGeneration.Gen7,
    cry: 'Type: Null!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 95, attack: 95, defense: 95, sp_attack: 95, sp_defense: 95, speed: 59 }
  },
  silvally: {
    id: 773,
    name: 'Silvally',
    generation: PokemonGeneration.Gen7,
    cry: 'Silvally!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 95, attack: 95, defense: 95, sp_attack: 95, sp_defense: 95, speed: 95 }
  },
  minior: {
    id: 774,
    name: 'Minior',
    generation: PokemonGeneration.Gen7,
    cry: 'Minior!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Flying"],
    stats: { hp: 60, attack: 100, defense: 60, sp_attack: 100, sp_defense: 60, speed: 120 }
  },
  komala: {
    id: 775,
    name: 'Komala',
    generation: PokemonGeneration.Gen7,
    cry: 'Komala!',
    possibleColors: [PokemonColor.default],
    types: ["Normal"],
    stats: { hp: 65, attack: 115, defense: 65, sp_attack: 75, sp_defense: 95, speed: 65 }
  },
  turtonator: {
    id: 776,
    name: 'Turtonator',
    generation: PokemonGeneration.Gen7,
    cry: 'Turtonator!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Dragon"],
    stats: { hp: 60, attack: 78, defense: 135, sp_attack: 91, sp_defense: 85, speed: 36 }
  },
  togedemaru: {
    id: 777,
    name: 'Togedemaru',
    generation: PokemonGeneration.Gen7,
    cry: 'Togedemaru!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Steel"],
    stats: { hp: 65, attack: 98, defense: 63, sp_attack: 40, sp_defense: 73, speed: 96 }
  },
  mimikyu: {
    id: 778,
    name: 'Mimikyu',
    generation: PokemonGeneration.Gen7,
    cry: 'Mimikyu!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Fairy"],
    stats: { hp: 55, attack: 90, defense: 80, sp_attack: 50, sp_defense: 105, speed: 96 }
  },
  bruxish: {
    id: 779,
    name: 'Bruxish',
    generation: PokemonGeneration.Gen7,
    cry: 'Bruxish!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Psychic"],
    stats: { hp: 68, attack: 105, defense: 70, sp_attack: 70, sp_defense: 70, speed: 92 }
  },
  drampa: {
    id: 780,
    name: 'Drampa',
    generation: PokemonGeneration.Gen7,
    cry: 'Drampa!',
    possibleColors: [PokemonColor.default],
    types: ["Normal", "Dragon"],
    stats: { hp: 78, attack: 60, defense: 85, sp_attack: 135, sp_defense: 91, speed: 36 }
  },
  dhelmise: {
    id: 781,
    name: 'Dhelmise',
    generation: PokemonGeneration.Gen7,
    cry: 'Dhelmise!',
    possibleColors: [PokemonColor.default],
    types: ["Ghost", "Grass"],
    stats: { hp: 70, attack: 131, defense: 100, sp_attack: 86, sp_defense: 90, speed: 40 }
  },
  jangmoo: {
    id: 782,
    name: 'Jangmo-o',
    generation: PokemonGeneration.Gen7,
    cry: 'Jangmo-o!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon"],
    stats: { hp: 45, attack: 55, defense: 65, sp_attack: 45, sp_defense: 45, speed: 45 }
  },
  hakamoo: {
    id: 783,
    name: 'Hakamo-o',
    generation: PokemonGeneration.Gen7,
    cry: 'Hakamo-o!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Fighting"],
    stats: { hp: 55, attack: 75, defense: 90, sp_attack: 65, sp_defense: 70, speed: 65 }
  },
  kommoo: {
    id: 784,
    name: 'Kommo-o',
    generation: PokemonGeneration.Gen7,
    cry: 'Kommo-o!',
    possibleColors: [PokemonColor.default],
    types: ["Dragon", "Fighting"],
    stats: { hp: 75, attack: 110, defense: 125, sp_attack: 100, sp_defense: 105, speed: 85 }
  },
  tapukoko: {
    id: 785,
    name: 'Tapu Koko',
    generation: PokemonGeneration.Gen7,
    cry: 'Tapu Koko!',
    possibleColors: [PokemonColor.default],
    types: ["Electric", "Fairy"],
    stats: { hp: 70, attack: 115, defense: 85, sp_attack: 95, sp_defense: 75, speed: 130 }
  },
  tapulele: {
    id: 786,
    name: 'Tapu Lele',
    generation: PokemonGeneration.Gen7,
    cry: 'Tapu Lele!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Fairy"],
    stats: { hp: 70, attack: 85, defense: 75, sp_attack: 130, sp_defense: 115, speed: 95 }
  },
  tapubulu: {
    id: 787,
    name: 'Tapu Bulu',
    generation: PokemonGeneration.Gen7,
    cry: 'Tapu Bulu!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Fairy"],
    stats: { hp: 70, attack: 130, defense: 115, sp_attack: 85, sp_defense: 95, speed: 75 }
  },
  tapufini: {
    id: 788,
    name: 'Tapu Fini',
    generation: PokemonGeneration.Gen7,
    cry: 'Tapu Fini!',
    possibleColors: [PokemonColor.default],
    types: ["Water", "Fairy"],
    stats: { hp: 70, attack: 75, defense: 115, sp_attack: 95, sp_defense: 130, speed: 85 }
  },
  cosmog: {
    id: 789,
    name: 'Cosmog',
    generation: PokemonGeneration.Gen7,
    cry: 'Cosmog!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 43, attack: 29, defense: 31, sp_attack: 29, sp_defense: 31, speed: 37 }
  },
  cosmoem: {
    id: 790,
    name: 'Cosmoem',
    generation: PokemonGeneration.Gen7,
    cry: 'Cosmoem!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic"],
    stats: { hp: 43, attack: 29, defense: 131, sp_attack: 29, sp_defense: 131, speed: 37 }
  },
  solgaleo: {
    id: 791,
    name: 'Solgaleo',
    generation: PokemonGeneration.Gen7,
    cry: 'Solgaleo!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Steel"],
    stats: { hp: 137, attack: 137, defense: 107, sp_attack: 113, sp_defense: 89, speed: 97 }
  },
  lunala: {
    id: 792,
    name: 'Lunala',
    generation: PokemonGeneration.Gen7,
    cry: 'Lunala!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Ghost"],
    stats: { hp: 137, attack: 113, defense: 89, sp_attack: 137, sp_defense: 107, speed: 97 }
  },
  nihilego: {
    id: 793,
    name: 'Nihilego',
    generation: PokemonGeneration.Gen7,
    cry: 'Nihilego!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Poison"],
    stats: { hp: 109, attack: 53, defense: 47, sp_attack: 127, sp_defense: 131, speed: 103 }
  },
  buzzwole: {
    id: 794,
    name: 'Buzzwole',
    generation: PokemonGeneration.Gen7,
    cry: 'Buzzwole!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fighting"],
    stats: { hp: 107, attack: 139, defense: 139, sp_attack: 53, sp_defense: 53, speed: 79 }
  },
  pheromosa: {
    id: 795,
    name: 'Pheromosa',
    generation: PokemonGeneration.Gen7,
    cry: 'Pheromosa!',
    possibleColors: [PokemonColor.default],
    types: ["Bug", "Fighting"],
    stats: { hp: 71, attack: 137, defense: 37, sp_attack: 137, sp_defense: 37, speed: 151 }
  },
  xurkitree: {
    id: 796,
    name: 'Xurkitree',
    generation: PokemonGeneration.Gen7,
    cry: 'Xurkitree!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 83, attack: 89, defense: 71, sp_attack: 173, sp_defense: 71, speed: 83 }
  },
  celesteela: {
    id: 797,
    name: 'Celesteela',
    generation: PokemonGeneration.Gen7,
    cry: 'Celesteela!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Flying"],
    stats: { hp: 97, attack: 101, defense: 103, sp_attack: 107, sp_defense: 101, speed: 61 }
  },
  kartana: {
    id: 798,
    name: 'Kartana',
    generation: PokemonGeneration.Gen7,
    cry: 'Kartana!',
    possibleColors: [PokemonColor.default],
    types: ["Grass", "Steel"],
    stats: { hp: 59, attack: 181, defense: 131, sp_attack: 59, sp_defense: 31, speed: 109 }
  },
  guzzlord: {
    id: 799,
    name: 'Guzzlord',
    generation: PokemonGeneration.Gen7,
    cry: 'Guzzlord!',
    possibleColors: [PokemonColor.default],
    types: ["Dark", "Dragon"],
    stats: { hp: 223, attack: 101, defense: 53, sp_attack: 97, sp_defense: 53, speed: 43 }
  },
  necrozma: {
    id: 800,
    name: 'Necrozma',
    generation: PokemonGeneration.Gen7,
    cry: 'Necrozma!',
    possibleColors: [PokemonColor.default],
    types: ["Psychic", "Dragon"],
    stats: { hp: 97, attack: 167, defense: 97, sp_attack: 167, sp_defense: 97, speed: 129 }
  },
  magearna: {
    id: 801,
    name: 'Magearna',
    generation: PokemonGeneration.Gen7,
    cry: 'Magearna!',
    possibleColors: [PokemonColor.default],
    types: ["Steel", "Fairy"],
    stats: { hp: 80, attack: 95, defense: 115, sp_attack: 130, sp_defense: 115, speed: 65 }
  },
  marshadow: {
    id: 802,
    name: 'Marshadow',
    generation: PokemonGeneration.Gen7,
    cry: 'Marshadow!',
    possibleColors: [PokemonColor.default],
    types: ["Fighting", "Ghost"],
    stats: { hp: 90, attack: 125, defense: 80, sp_attack: 90, sp_defense: 90, speed: 125 }
  },
  poipole: {
    id: 803,
    name: 'Poipole',
    generation: PokemonGeneration.Gen7,
    cry: 'Poipole!',
    possibleColors: [PokemonColor.default],
    types: ["Poison"],
    stats: { hp: 67, attack: 73, defense: 67, sp_attack: 73, sp_defense: 67, speed: 73 }
  },
  naganadel: {
    id: 804,
    name: 'Naganadel',
    generation: PokemonGeneration.Gen7,
    cry: 'Naganadel!',
    possibleColors: [PokemonColor.default],
    types: ["Poison", "Dragon"],
    stats: { hp: 73, attack: 73, defense: 73, sp_attack: 127, sp_defense: 73, speed: 121 }
  },
  stakataka: {
    id: 805,
    name: 'Stakataka',
    generation: PokemonGeneration.Gen7,
    cry: 'Stakataka!',
    possibleColors: [PokemonColor.default],
    types: ["Rock", "Steel"],
    stats: { hp: 61, attack: 131, defense: 211, sp_attack: 53, sp_defense: 101, speed: 13 }
  },
  blacephalon: {
    id: 806,
    name: 'Blacephalon',
    generation: PokemonGeneration.Gen7,
    cry: 'Blacephalon!',
    possibleColors: [PokemonColor.default],
    types: ["Fire", "Ghost"],
    stats: { hp: 53, attack: 127, defense: 53, sp_attack: 151, sp_defense: 79, speed: 107 }
  },
  zeraora: {
    id: 807,
    name: 'Zeraora',
    generation: PokemonGeneration.Gen7,
    cry: 'Zeraora!',
    possibleColors: [PokemonColor.default],
    types: ["Electric"],
    stats: { hp: 88, attack: 112, defense: 75, sp_attack: 102, sp_defense: 80, speed: 143 }
  },
  meltan: {
    id: 808,
    name: 'Meltan',
    generation: PokemonGeneration.Gen7,
    cry: 'Meltan!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 46, attack: 65, defense: 65, sp_attack: 55, sp_defense: 35, speed: 34 }
  },
  melmetal: {
    id: 809,
    name: 'Melmetal',
    generation: PokemonGeneration.Gen7,
    cry: 'Melmetal!',
    possibleColors: [PokemonColor.default],
    types: ["Steel"],
    stats: { hp: 135, attack: 143, defense: 143, sp_attack: 80, sp_defense: 65, speed: 34 }
  },
 };
export function getAllPokemon(): PokemonType[] {
  return Object.keys(POKEMON_DATA) as PokemonType[];
}

export function getPokemonByGeneration(generation: PokemonGeneration): PokemonType[] {
  return Object.entries(POKEMON_DATA)
    .filter(([_, config]) => config.generation === generation)
    .map(([key, _]) => key as PokemonType);
}

export function getDefaultPokemon(): PokemonType {
  return 'bulbasaur';
}

export function getRandomPokemonConfig(): [PokemonType, PokemonConfig] {
  var keys = Object.keys(POKEMON_DATA);
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  return [randomKey as PokemonType, POKEMON_DATA[randomKey]];
}