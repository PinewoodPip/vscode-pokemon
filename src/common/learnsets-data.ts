import { ALL_MOVES, PokemonMove } from "./move-data";
import { logError } from "./util";

export interface PokemonLearnset {
    /** Maps a learnt move to the level its learnt at or special source. */
    moves: { [key: string & keyof typeof ALL_MOVES ]: number | 'Evo.' | 'Rem.' }
}

export const LEARNSETS: { [key: string]: PokemonLearnset } = {
  "bulbasaur": {
    "moves": {'tackle': 1, 'growl': 1, 'vinewhip': 3, 'growth': 6, 'leechseed': 9, 'razorleaf': 12, 'poisonpowder': 15, 'sleeppowder': 15, 'seedbomb': 18, 'takedown': 21, 'sweetscent': 24, 'synthesis': 27, 'worryseed': 30, 'powerwhip': 33, 'solarbeam': 36}
  },
  "ivysaur": {
    "moves": {'tackle': 1, 'growl': 1, 'vinewhip': 1, 'growth': 1, 'leechseed': 9, 'razorleaf': 12, 'poisonpowder': 15, 'sleeppowder': 15, 'seedbomb': 20, 'takedown': 25, 'sweetscent': 30, 'synthesis': 35, 'worryseed': 40, 'powerwhip': 45, 'solarbeam': 50}
  },
  "venusaur": {
    "moves": {'petaldance': 1, 'tackle': 1, 'growl': 1, 'vinewhip': 1, 'growth': 1, 'petalblizzard': 'Evo.', 'leechseed': 9, 'razorleaf': 12, 'poisonpowder': 15, 'sleeppowder': 15, 'seedbomb': 20, 'takedown': 25, 'sweetscent': 30, 'synthesis': 37, 'worryseed': 44, 'powerwhip': 51, 'solarbeam': 58}
  },
  "charmander": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 4, 'smokescreen': 8, 'dragonbreath': 12, 'firefang': 17, 'slash': 20, 'flamethrower': 24, 'scaryface': 28, 'firespin': 32, 'inferno': 36, 'flareblitz': 40}
  },
  "charmeleon": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 1, 'smokescreen': 1, 'dragonbreath': 12, 'firefang': 19, 'slash': 24, 'flamethrower': 30, 'scaryface': 37, 'inferno': 48, 'flareblitz': 54}
  },
  "charizard": {
    "moves": {'dragonclaw': 1, 'heatwave': 1, 'scratch': 1, 'growl': 1, 'ember': 1, 'smokescreen': 1, 'airslash': 'Evo.', 'dragonbreath': 12, 'firefang': 19, 'slash': 24, 'flamethrower': 30, 'scaryface': 39, 'firespin': 46, 'inferno': 54, 'flareblitz': 62}
  },
  "squirtle": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'watergun': 3, 'withdraw': 6, 'rapidspin': 9, 'bite': 12, 'waterpulse': 15, 'protect': 18, 'raindance': 21, 'aquatail': 24, 'shellsmash': 27, 'irondefense': 30, 'hydropump': 33, 'wavecrash': 36}
  },
  "wartortle": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'watergun': 1, 'withdraw': 1, 'rapidspin': 9, 'bite': 12, 'waterpulse': 15, 'protect': 20, 'raindance': 25, 'aquatail': 30, 'shellsmash': 35, 'irondefense': 40, 'hydropump': 45, 'wavecrash': 50}
  },
  "blastoise": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'watergun': 1, 'withdraw': 1, 'flashcannon': 'Evo.', 'rapidspin': 9, 'bite': 12, 'waterpulse': 15, 'protect': 20, 'raindance': 25, 'aquatail': 30, 'shellsmash': 35, 'irondefense': 42, 'hydropump': 49, 'wavecrash': 56}
  },
  "caterpie": {
    "moves": {'tackle': 1, 'stringshot': 1, 'bugbite': 9}
  },
  "metapod": {
    "moves": {'harden': 'Evo.'}
  },
  "butterfree": {
    "moves": {'gust': 'Evo.', 'harden': 1, 'tackle': 1, 'stringshot': 1, 'bugbite': 1, 'supersonic': 4, 'confusion': 8, 'poisonpowder': 12, 'stunspore': 12, 'sleeppowder': 12, 'psybeam': 16, 'whirlwind': 20, 'airslash': 24, 'safeguard': 28, 'bugbuzz': 32, 'tailwind': 36, 'ragepowder': 40, 'quiverdance': 44}
  },
  "weedle": {
    "moves": {'poisonsting': 1, 'stringshot': 1, 'bugbite': 9}
  },
  "kakuna": {
    "moves": {'harden': 'Evo.'}
  },
  "beedrill": {
    "moves": {'twineedle': 'Evo.', 'furyattack': 16, 'rage': 13, 'pursuit': 17, 'focusenergy': 19, 'venoshock': 23, 'assurance': 26, 'toxicspikes': 29, 'pinmissile': 28, 'poisonjab': 22, 'agility': 25, 'endeavor': 41, 'fellstinger': 44, 'peck': 1, 'outrage': 31}
  },
  "pidgey": {
    "moves": {'tackle': 1, 'sandattack': 3, 'gust': 5, 'quickattack': 11, 'whirlwind': 21, 'twister': 21, 'featherdance': 25, 'agility': 23, 'wingattack': 15, 'roost': 17, 'tailwind': 41, 'mirrormove': 9, 'airslash': 27, 'hurricane': 53, 'razorwind': 29}
  },
  "pidgeotto": {
    "moves": {'tackle': 1, 'sandattack': 3, 'gust': 5, 'quickattack': 9, 'whirlwind': 25, 'twister': 22, 'featherdance': 27, 'agility': 31, 'wingattack': 15, 'roost': 17, 'tailwind': 47, 'mirrormove': 11, 'airslash': 39, 'hurricane': 62, 'razorwind': 45}
  },
  "pidgeot": {
    "moves": {'hurricane': 68, 'tackle': 1, 'sandattack': 3, 'gust': 5, 'quickattack': 9, 'whirlwind': 25, 'twister': 22, 'featherdance': 27, 'agility': 31, 'wingattack': 15, 'roost': 17, 'tailwind': 50, 'mirrormove': 11, 'airslash': 43, 'skyattack': 1, 'heatwave': 1, 'razorwind': 53}
  },
  "rattata": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'quickattack': 4, 'focusenergy': 7, 'bite': 10, 'laserfocus': 13, 'takedown': 16, 'assurance': 19, 'crunch': 22, 'suckerpunch': 25, 'superfang': 28, 'doubleedge': 31, 'endeavor': 34}
  },
  "raticate": {
    "moves": {'scaryface': 'Evo.', 'swordsdance': 1, 'tackle': 1, 'tailwhip': 1, 'quickattack': 4, 'focusenergy': 7, 'bite': 10, 'laserfocus': 13, 'takedown': 16, 'assurance': 19, 'crunch': 24, 'suckerpunch': 29, 'superfang': 34, 'doubleedge': 39, 'endeavor': 44}
  },
  "spearow": {
    "moves": {'peck': 1, 'growl': 1, 'leer': 4, 'assurance': 8, 'furyattack': 11, 'aerialace': 15, 'wingattack': 18, 'takedown': 22, 'agility': 25, 'focusenergy': 29, 'roost': 32, 'drillpeck': 36}
  },
  "fearow": {
    "moves": {'drillrun': 45, 'pluck': 1, 'peck': 1, 'growl': 1, 'leer': 4, 'assurance': 8, 'furyattack': 11, 'aerialace': 15, 'wingattack': 18, 'takedown': 23, 'agility': 27, 'focusenergy': 32, 'roost': 36, 'drillpeck': 41}
  },
  "ekans": {
    "moves": {'wrap': 1, 'leer': 1, 'poisonsting': 4, 'bite': 9, 'glare': 12, 'screech': 17, 'acid': 20, 'stockpile': 25, 'swallow': 25, 'spitup': 25, 'acidspray': 28, 'sludgebomb': 33, 'gastroacid': 36, 'belch': 38, 'haze': 41, 'coil': 44, 'gunkshot': 49}
  },
  "arbok": {
    "moves": {'wrap': 1, 'poisonsting': 1, 'leer': 1, 'bite': 1, 'firefang': 1, 'icefang': 1, 'thunderfang': 1, 'crunch': 'Evo.', 'glare': 12, 'screech': 17, 'acid': 20, 'stockpile': 27, 'swallow': 27, 'spitup': 27, 'acidspray': 32, 'sludgebomb': 39, 'gastroacid': 44, 'belch': 48, 'haze': 51, 'coil': 56, 'gunkshot': 63}
  },
  "pikachu": {
    "moves": {'playnice': 1, 'sweetkiss': 1, 'nuzzle': 1, 'nastyplot': 1, 'charm': 1, 'thundershock': 1, 'tailwhip': 1, 'growl': 1, 'quickattack': 1, 'thunderwave': 4, 'doubleteam': 8, 'electroball': 12, 'feint': 16, 'spark': 20, 'agility': 24, 'irontail': 28, 'discharge': 32, 'thunderbolt': 36, 'lightscreen': 40, 'thunder': 44}
  },
  "raichu": {
    "moves": {'playnice': 1, 'sweetkiss': 1, 'nuzzle': 1, 'nastyplot': 1, 'charm': 1, 'thunderwave': 1, 'doubleteam': 1, 'electroball': 1, 'feint': 1, 'spark': 1, 'agility': 1, 'irontail': 1, 'discharge': 1, 'lightscreen': 1, 'thunder': 1, 'thundershock': 1, 'tailwhip': 1, 'growl': 1, 'quickattack': 1, 'thunderpunch': 'Evo.', 'thunderbolt': 5, 'psychic': 'Evo.'}
  },
  "sandshrew": {
    "moves": {'scratch': 1, 'defensecurl': 1, 'poisonsting': 3, 'sandattack': 6, 'rollout': 9, 'furycutter': 12, 'rapidspin': 15, 'bulldoze': 18, 'swift': 21, 'furyswipes': 24, 'agility': 27, 'slash': 30, 'dig': 33, 'gyroball': 36, 'swordsdance': 39, 'sandstorm': 42, 'earthquake': 45, 'mist': 3, 'powdersnow': 6, 'metalclaw': 18, 'irondefense': 27, 'ironhead': 33, 'snowscape': 42, 'blizzard': 45}
  },
  "sandslash": {
    "moves": {'crushclaw': 1, 'scratch': 'Rem.', 'defensecurl': 'Rem.', 'poisonsting': 1, 'sandattack': 1, 'rollout': 'Rem.', 'furycutter': 'Rem.', 'rapidspin': 'Rem.', 'bulldoze': 18, 'swift': 'Rem.', 'furyswipes': 'Rem.', 'sandtomb': 31, 'slash': 1, 'dig': 41, 'gyroball': 'Rem.', 'swordsdance': 1, 'sandstorm': 56, 'earthquake': 61, 'iciclecrash': 1, 'metalclaw': 1, 'mist': 'Rem.', 'blizzard': 'Rem.', 'powdersnow': 'Rem.', 'irondefense': 'Rem.', 'metalburst': 'Rem.', 'ironhead': 'Rem.', 'snowscape': 'Rem.', 'iciclespear': 'Evo.'}
  },
  "nidoran-f": {
    "moves": {'growl': 1, 'poisonsting': 1, 'scratch': 5, 'tailwhip': 10, 'furyswipes': 15, 'toxicspikes': 20, 'doublekick': 25, 'bite': 30, 'helpinghand': 35, 'toxic': 40, 'flatter': 45, 'crunch': 50, 'earthpower': 55}
  },
  "nidorina": {
    "moves": {'growl': 1, 'poisonsting': 1, 'scratch': 1, 'tailwhip': 1, 'furyswipes': 15, 'toxicspikes': 22, 'doublekick': 29, 'bite': 36, 'helpinghand': 43, 'toxic': 50, 'flatter': 57, 'crunch': 64, 'earthpower': 71}
  },
  "nidoqueen": {
    "moves": {'superpower': 'Evo.', 'sludgewavebdsp': 1, 'furyswipes': 1, 'toxicspikes': 1, 'doublekick': 1, 'bite': 1, 'helpinghand': 1, 'toxic': 1, 'flatter': 1, 'crunch': 1, 'earthpower': 1, 'growl': 1, 'poisonsting': 1, 'scratch': 1, 'tailwhip': 1}
  },
  "nidoran-m": {
    "moves": {'leer': 1, 'poisonsting': 1, 'peck': 5, 'focusenergy': 10, 'furyattack': 15, 'toxicspikes': 20, 'doublekick': 25, 'hornattack': 30, 'helpinghand': 35, 'toxic': 40, 'flatter': 45, 'poisonjab': 50, 'earthpower': 55}
  },
  "nidorino": {
    "moves": {'leer': 1, 'poisonsting': 1, 'peck': 1, 'focusenergy': 1, 'furyattack': 15, 'toxicspikes': 22, 'doublekick': 29, 'hornattack': 36, 'helpinghand': 43, 'toxic': 50, 'flatter': 57, 'poisonjab': 64, 'earthpower': 71}
  },
  "nidoking": {
    "moves": {'megahorn': 'Evo.', 'sludgewavebdsp': 1, 'furyattack': 1, 'toxicspikes': 1, 'doublekick': 1, 'hornattack': 1, 'helpinghand': 1, 'toxic': 1, 'flatter': 1, 'poisonjab': 1, 'earthpower': 1, 'leer': 1, 'poisonsting': 1, 'peck': 1, 'focusenergy': 1}
  },
  "clefairy": {
    "moves": {'sing': 1, 'sweetkiss': 1, 'disarmingvoice': 1, 'charm': 1, 'splash': 1, 'pound': 1, 'copycat': 1, 'growl': 1, 'defensecurl': 1, 'storedpower': 4, 'encore': 8, 'afteryou': 12, 'lifedew': 16, 'metronome': 20, 'moonlight': 24, 'gravity': 28, 'meteormash': 32, 'followme': 36, 'cosmicpower': 40, 'moonblast': 44, 'healingwish': 48}
  },
  "clefable": {
    "moves": {'metronome': 1, 'meteormash': 1, 'moonblast': 1, 'lifedew': 1, 'pound': 'Rem.', 'growl': 'Rem.', 'sing': 'Rem.', 'defensecurl': 'Rem.', 'splash': 'Rem.', 'sweetkiss': 'Rem.', 'charm': 'Rem.', 'encore': 'Rem.', 'moonlight': 'Rem.', 'followme': 'Rem.', 'cosmicpower': 'Rem.', 'gravity': 'Rem.', 'healingwish': 'Rem.', 'copycat': 'Rem.', 'afteryou': 'Rem.', 'storedpower': 'Rem.', 'disarmingvoice': 'Rem.'}
  },
  "vulpix": {
    "moves": {'ember': 1, 'tailwhip': 1, 'disable': 4, 'quickattack': 8, 'spite': 12, 'incinerate': 16, 'confuseray': 20, 'willowisp': 24, 'extrasensory': 28, 'flamethrower': 32, 'imprison': 36, 'firespin': 40, 'safeguard': 44, 'inferno': 48, 'fireblast': 52, 'powdersnow': 1, 'iceshard': 8, 'icywind': 16, 'aurorabeam': 24, 'icebeam': 32, 'mist': 40, 'auroraveil': 44, 'freezedry': 48, 'blizzard': 52}
  },
  "ninetales": {
    "moves": {'flamethrower': 1, 'tailwhip': 1, 'quickattack': 1, 'disable': 'Rem.', 'ember': 'Rem.', 'firespin': 'Rem.', 'confuseray': 'Rem.', 'fireblast': 'Rem.', 'spite': 'Rem.', 'safeguard': 'Rem.', 'willowisp': 'Rem.', 'imprison': 1, 'extrasensory': 'Rem.', 'nastyplot': 'Rem.', 'incinerate': 'Rem.', 'inferno': 'Rem.', 'icywind': 1, 'blizzard': 1, 'mist': 'Rem.', 'icebeam': 'Rem.', 'aurorabeam': 'Rem.', 'powdersnow': 'Rem.', 'iceshard': 'Rem.', 'freezedry': 'Rem.', 'auroraveil': 'Rem.', 'dazzlinggleam': 'Evo.'}
  },
  "jigglypuff": {
    "moves": {'sweetkiss': 1, 'disarmingvoice': 1, 'disable': 1, 'charm': 1, 'sing': 1, 'pound': 1, 'copycat': 1, 'defensecurl': 1, 'echoedvoice': 4, 'covet': 8, 'stockpile': 12, 'spitup': 12, 'swallow': 12, 'round': 16, 'rest': 20, 'bodyslam': 24, 'mimic': 28, 'gyroball': 32, 'hypervoice': 36, 'doubleedge': 44}
  },
  "wigglytuff": {
    "moves": {'sweetkiss': 1, 'disarmingvoice': 1, 'disable': 1, 'charm': 1, 'echoedvoice': 1, 'covet': 1, 'stockpile': 1, 'swallow': 1, 'spitup': 1, 'round': 1, 'rest': 1, 'bodyslam': 1, 'mimic': 1, 'gyroball': 1, 'hypervoice': 1, 'doubleedge': 1, 'sing': 1, 'pound': 1, 'copycat': 1, 'defensecurl': 1, 'playrough': 5}
  },
  "zubat": {
    "moves": {'absorb': 1, 'supersonic': 1, 'astonish': 5, 'meanlook': 10, 'poisonfang': 15, 'quickguard': 20, 'aircutter': 25, 'bite': 30, 'haze': 35, 'venoshock': 40, 'confuseray': 45, 'airslash': 50, 'leechlife': 55}
  },
  "golbat": {
    "moves": {'screech': 1, 'absorb': 1, 'supersonic': 1, 'astonish': 1, 'meanlook': 1, 'poisonfang': 15, 'quickguard': 20, 'aircutter': 27, 'bite': 34, 'haze': 41, 'venoshock': 48, 'confuseray': 55, 'airslash': 62, 'leechlife': 69}
  },
  "oddish": {
    "moves": {'absorb': 1, 'growth': 1, 'acid': 4, 'sweetscent': 8, 'megadrain': 12, 'poisonpowder': 14, 'stunspore': 16, 'sleeppowder': 18, 'gigadrain': 20, 'toxic': 24, 'moonblast': 28, 'grassyterrain': 32, 'moonlight': 36, 'petaldance': 40}
  },
  "gloom": {
    "moves": {'absorb': 1, 'growth': 1, 'acid': 1, 'sweetscent': 1, 'megadrain': 12, 'poisonpowder': 14, 'stunspore': 16, 'sleeppowder': 18, 'gigadrain': 20, 'toxic': 26, 'moonblast': 32, 'grassyterrain': 38, 'moonlight': 44, 'petaldance': 50}
  },
  "vileplume": {
    "moves": {'megadrain': 1, 'poisonpowder': 1, 'stunspore': 1, 'sleeppowder': 1, 'gigadrain': 1, 'toxic': 1, 'moonblast': 1, 'grassyterrain': 1, 'moonlight': 1, 'petaldance': 1, 'absorb': 1, 'growth': 1, 'acid': 1, 'sweetscent': 1, 'petalblizzard': 'Evo.'}
  },
  "paras": {
    "moves": {'scratch': 1, 'stunspore': 6, 'poisonpowder': 6, 'absorb': 11, 'furycutter': 17, 'spore': 22, 'slash': 27, 'growth': 33, 'gigadrain': 38, 'aromatherapy': 43, 'ragepowder': 49, 'xscissor': 54}
  },
  "parasect": {
    "moves": {'crosspoison': 1, 'scratch': 1, 'stunspore': 6, 'poisonpowder': 6, 'absorb': 11, 'furycutter': 17, 'spore': 22, 'slash': 29, 'growth': 37, 'gigadrain': 44, 'aromatherapy': 51, 'ragepowder': 59, 'xscissor': 66}
  },
  "venonat": {
    "moves": {'tackle': 1, 'disable': 1, 'supersonic': 5, 'confusion': 11, 'poisonpowder': 13, 'psybeam': 17, 'stunspore': 23, 'bugbuzz': 25, 'sleeppowder': 29, 'leechlife': 35, 'zenheadbutt': 37, 'poisonfang': 41, 'psychic': 47}
  },
  "venomoth": {
    "moves": {'quiverdance': 1, 'tackle': 1, 'disable': 1, 'supersonic': 1, 'airslash': 'Evo.', 'confusion': 11, 'poisonpowder': 13, 'psybeam': 17, 'stunspore': 23, 'bugbuzz': 25, 'sleeppowder': 29, 'leechlife': 37, 'zenheadbutt': 41, 'poisonfang': 47, 'psychic': 55}
  },
  "diglett": {
    "moves": {'sandattack': 1, 'scratch': 1, 'growl': 4, 'astonish': 8, 'mudslap': 12, 'bulldoze': 16, 'suckerpunch': 20, 'slash': 24, 'sandstorm': 28, 'dig': 32, 'earthpower': 36, 'earthquake': 40, 'fissure': 44, 'metalclaw': 1, 'ironhead': 24}
  },
  "dugtrio": {
    "moves": {'nightslash': 1, 'triattack': 1, 'sandattack': 1, 'scratch': 1, 'growl': 1, 'astonish': 1, 'sandtomb': 'Evo.', 'mudslap': 12, 'bulldoze': 16, 'suckerpunch': 20, 'slash': 24, 'sandstorm': 30, 'dig': 36, 'earthpower': 42, 'earthquake': 48, 'fissure': 54, 'metalclaw': 1, 'ironhead': 24}
  },
  "meowth": {
    "moves": {'fakeout': 1, 'growl': 1, 'feint': 4, 'scratch': 8, 'payday': 12, 'bite': 16, 'taunt': 20, 'assurance': 24, 'furyswipes': 29, 'screech': 32, 'slash': 36, 'nastyplot': 40, 'playrough': 44, 'nightslash': 36, 'honeclaws': 4, 'metalclaw': 16, 'swagger': 24, 'metalsound': 40, 'thrash': 44}
  },
  "persian": {
    "moves": {'switcheroo': 1, 'fakeout': 1, 'growl': 1, 'feint': 1, 'scratch': 1, 'powergem': 'Evo.', 'payday': 12, 'bite': 16, 'taunt': 20, 'assurance': 24, 'furyswipes': 31, 'screech': 36, 'slash': 42, 'nastyplot': 48, 'playrough': 54, 'quash': 1, 'nightslash': 42}
  },
  "psyduck": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'watergun': 3, 'confusion': 6, 'furyswipes': 9, 'waterpulse': 12, 'disable': 15, 'zenheadbutt': 18, 'screech': 21, 'aquatail': 24, 'soak': 27, 'psychup': 30, 'amnesia': 34, 'wonderroom': 39}
  },
  "golduck": {
    "moves": {'aquajet': 1, 'scratch': 1, 'tailwhip': 1, 'watergun': 1, 'confusion': 1, 'furyswipes': 9, 'waterpulse': 12, 'disable': 15, 'zenheadbutt': 18, 'screech': 21, 'aquatail': 24, 'soak': 27, 'psychup': 30, 'amnesia': 36, 'hydropump': 40, 'wonderroom': 45}
  },
  "mankey": {
    "moves": {'covet': 1, 'scratch': 1, 'leer': 1, 'focusenergy': 1, 'furyswipes': 5, 'lowkick': 8, 'seismictoss': 12, 'swagger': 17, 'crosschop': 22, 'assurance': 26, 'thrash': 29, 'closecombat': 33, 'screech': 36, 'stompingtantrum': 40, 'outrage': 44, 'finalgambit': 48}
  },
  "primeape": {
    "moves": {'fling': 1, 'scratch': 1, 'leer': 1, 'focusenergy': 1, 'furyswipes': 5, 'lowkick': 8, 'seismictoss': 15, 'swagger': 17, 'crosschop': 22, 'assurance': 26, 'thrash': 30, 'ragefist': 35, 'closecombat': 39, 'screech': 44, 'stompingtantrum': 48, 'outrage': 53, 'finalgambit': 57}
  },
  "growlithe": {
    "moves": {'ember': 1, 'leer': 1, 'howl': 4, 'bite': 8, 'flamewheel': 12, 'helpinghand': 16, 'agility': 20, 'firefang': 24, 'retaliate': 28, 'crunch': 32, 'takedown': 36, 'flamethrower': 40, 'roar': 44, 'playrough': 48, 'reversal': 52, 'flareblitz': 56, 'rockslide': 48}
  },
  "arcanine": {
    "moves": {'flamewheel': 1, 'helpinghand': 1, 'agility': 1, 'firefang': 1, 'retaliate': 1, 'crunch': 1, 'takedown': 1, 'roar': 1, 'playrough': 1, 'reversal': 1, 'flareblitz': 1, 'ember': 1, 'leer': 1, 'howl': 1, 'bite': 1, 'extremespeed': 'Evo.', 'flamethrower': 5, 'rockslide': 1, 'rockthrow': 1, 'ragingfury': 64}
  },
  "poliwag": {
    "moves": {'watergun': 1, 'hypnosis': 1, 'pound': 6, 'mudshot': 12, 'bubblebeam': 18, 'raindance': 24, 'bodyslam': 30, 'earthpower': 36, 'hydropump': 42, 'bellydrum': 48, 'doubleedge': 54}
  },
  "poliwhirl": {
    "moves": {'watergun': 1, 'hypnosis': 1, 'pound': 1, 'mudshot': 1, 'bubblebeam': 18, 'raindance': 24, 'bodyslam': 32, 'earthpower': 40, 'hydropump': 48, 'bellydrum': 56, 'doubleedge': 66}
  },
  "poliwrath": {
    "moves": {'bubblebeam': 1, 'bodyslam': 1, 'hypnosis': 1, 'pound': 'Rem.', 'doubleedge': 'Rem.', 'watergun': 'Rem.', 'hydropump': 'Rem.', 'bellydrum': 'Rem.', 'raindance': 'Rem.', 'mudshot': 'Rem.', 'earthpower': 'Rem.', 'circlethrow': 'Rem.', 'dynamicpunch': 'Evo.'}
  },
  "abra": {
    "moves": {'teleport': 1}
  },
  "kadabra": {
    "moves": {'kinesis': 'Evo.', 'teleport': 1, 'confusion': 1, 'disable': 6, 'psybeam': 'Evo.', 'miracleeye': 23, 'reflect': 32, 'psychocut': 28, 'recover': 39, 'telekinesis': 33, 'allyswitch': 36, 'psychic': 45, 'roleplay': 41, 'futuresight': 43, 'trick': 46, 'flash': 13, 'nightshade': 19, 'substitute': 26}
  },
  "alakazam": {
    "moves": {'kinesis': 1, 'teleport': 1, 'confusion': 1, 'disable': 6, 'psybeam': 1, 'miracleeye': 23, 'reflect': 32, 'psychocut': 28, 'recover': 39, 'telekinesis': 33, 'allyswitch': 36, 'psychic': 45, 'calmmind': 'Evo.', 'futuresight': 43, 'trick': 46, 'barrier': 1, 'encore': 1, 'flash': 13, 'nightshade': 19, 'substitute': 26}
  },
  "machop": {
    "moves": {'lowkick': 1, 'leer': 1, 'focusenergy': 4, 'karatechop': 16, 'foresight': 9, 'lowsweep': 13, 'seismictoss': 12, 'revenge': 19, 'knockoff': 21, 'vitalthrow': 25, 'wakeupslap': 27, 'dualchop': 31, 'submission': 26, 'bulkup': 31, 'crosschop': 39, 'scaryface': 43, 'dynamicpunch': 45, 'bide': 8, 'brickbreak': 21, 'superpower': 36}
  },
  "machoke": {
    "moves": {'lowkick': 1, 'leer': 1, 'focusenergy': 4, 'karatechop': 16, 'foresight': 9, 'lowsweep': 13, 'seismictoss': 12, 'revenge': 19, 'knockoff': 21, 'vitalthrow': 25, 'wakeupslap': 27, 'dualchop': 33, 'submission': 26, 'bulkup': 37, 'crosschop': 47, 'scaryface': 53, 'dynamicpunch': 57, 'bide': 8, 'brickbreak': 21, 'superpower': 48}
  },
  "machamp": {
    "moves": {'strength': 'Evo.', 'wideguard': 1, 'lowkick': 1, 'leer': 1, 'focusenergy': 4, 'karatechop': 16, 'foresight': 9, 'lowsweep': 13, 'seismictoss': 12, 'revenge': 19, 'knockoff': 21, 'vitalthrow': 25, 'wakeupslap': 27, 'dualchop': 33, 'submission': 26, 'bulkup': 37, 'crosschop': 47, 'scaryface': 53, 'dynamicpunch': 57, 'encore': 1, 'counter': 1, 'bide': 8, 'brickbreak': 21, 'superpower': 48}
  },
  "bellsprout": {
    "moves": {'vinewhip': 1, 'growth': 7, 'wrap': 11, 'sleeppowder': 13, 'poisonpowder': 15, 'stunspore': 17, 'acid': 23, 'knockoff': 27, 'sweetscent': 29, 'gastroacid': 35, 'razorleaf': 39, 'poisonjab': 41, 'slam': 47, 'powerwhip': 52}
  },
  "weepinbell": {
    "moves": {'vinewhip': 1, 'growth': 1, 'wrap': 1, 'sleeppowder': 13, 'poisonpowder': 15, 'stunspore': 17, 'acid': 24, 'knockoff': 29, 'sweetscent': 32, 'gastroacid': 39, 'razorleaf': 44, 'poisonjab': 47, 'slam': 54, 'powerwhip': 58}
  },
  "victreebel": {
    "moves": {'vinewhip': 1, 'sleeppowder': 1, 'sweetscent': 1, 'razorleaf': 1, 'stockpile': 'Rem.', 'swallow': 'Rem.', 'spitup': 'Rem.', 'gastroacid': 'Rem.', 'powerwhip': 'Rem.', 'leafstorm': 'Evo.', 'leafblade': 44}
  },
  "tentacool": {
    "moves": {'poisonsting': 1, 'watergun': 1, 'acid': 4, 'wrap': 8, 'supersonic': 12, 'waterpulse': 16, 'screech': 20, 'bubblebeam': 24, 'hex': 28, 'acidarmor': 32, 'poisonjab': 36, 'surf': 40, 'sludgewave': 44, 'hydropump': 48}
  },
  "tentacruel": {
    "moves": {'reflecttype': 1, 'poisonsting': 1, 'watergun': 1, 'acid': 1, 'wrap': 1, 'supersonic': 12, 'waterpulse': 16, 'screech': 20, 'bubblebeam': 24, 'hex': 28, 'acidarmor': 34, 'poisonjab': 40, 'surf': 46, 'sludgewave': 52, 'hydropump': 58}
  },
  "geodude": {
    "moves": {'tackle': 1, 'defensecurl': 1, 'rockpolish': 6, 'rollout': 10, 'bulldoze': 12, 'rockthrow': 16, 'smackdown': 18, 'selfdestruct': 24, 'stealthrock': 28, 'rockblast': 30, 'earthquake': 34, 'explosion': 36, 'doubleedge': 40, 'stoneedge': 42, 'charge': 4, 'spark': 12, 'thunderpunch': 22, 'discharge': 34}
  },
  "graveler": {
    "moves": {'tackle': 1, 'defensecurl': 1, 'rockpolish': 1, 'rollout': 10, 'bulldoze': 12, 'rockthrow': 16, 'smackdown': 18, 'selfdestruct': 24, 'stealthrock': 30, 'rockblast': 34, 'earthquake': 40, 'explosion': 44, 'doubleedge': 50, 'stoneedge': 54, 'charge': 1, 'spark': 12, 'thunderpunch': 22, 'discharge': 40}
  },
  "golem": {
    "moves": {'tackle': 1, 'defensecurl': 1, 'rockpolish': 1, 'heavyslam': 1, 'rockthrow': 16, 'smackdown': 18, 'bulldoze': 22, 'selfdestruct': 24, 'stealthrock': 30, 'rockblast': 34, 'earthquake': 40, 'explosion': 44, 'doubleedge': 50, 'stoneedge': 54, 'charge': 1, 'spark': 12, 'thunderpunch': 22, 'discharge': 40}
  },
  "ponyta": {
    "moves": {'tackle': 1, 'growl': 1, 'tailwhip': 5, 'ember': 10, 'flamecharge': 15, 'agility': 20, 'flamewheel': 25, 'stomp': 30, 'firespin': 35, 'takedown': 41, 'inferno': 45, 'fireblast': 50, 'flareblitz': 55, 'confusion': 10, 'fairywind': 15, 'psybeam': 25, 'healpulse': 35, 'dazzlinggleam': 45, 'psychic': 50, 'healingwish': 55}
  },
  "rapidash": {
    "moves": {'smartstrike': 'Evo.', 'megahorn': 1, 'poisonjab': 1, 'tackle': 1, 'quickattack': 1, 'growl': 1, 'tailwhip': 1, 'ember': 1, 'flamecharge': 15, 'agility': 20, 'flamewheel': 25, 'stomp': 30, 'firespin': 35, 'takedown': 43, 'inferno': 49, 'fireblast': 56, 'flareblitz': 63, 'psychocut': 'Evo.', 'confusion': 1, 'fairywind': 15, 'psybeam': 25, 'healpulse': 35, 'dazzlinggleam': 49, 'psychic': 56, 'healingwish': 63}
  },
  "slowpoke": {
    "moves": {'tackle': 1, 'curse': 1, 'growl': 3, 'watergun': 6, 'yawn': 9, 'confusion': 12, 'disable': 15, 'waterpulse': 18, 'headbutt': 21, 'zenheadbutt': 24, 'amnesia': 27, 'surf': 30, 'slackoff': 33, 'psychic': 36, 'psychup': 39, 'raindance': 42, 'healpulse': 45, 'acid': 6}
  },
  "slowbro": {
    "moves": {'withdraw': 1, 'tackle': 1, 'curse': 1, 'growl': 1, 'watergun': 1, 'futuresight': 'Rem.', 'yawn': 9, 'confusion': 12, 'disable': 15, 'waterpulse': 18, 'headbutt': 21, 'zenheadbutt': 24, 'amnesia': 27, 'surf': 30, 'slackoff': 33, 'psychic': 36, 'psychup': 39, 'raindance': 42, 'healpulse': 45, 'acid': 1, 'shellsidearm': 'Evo.'}
  },
  "magnemite": {
    "moves": {'thundershock': 1, 'tackle': 1, 'supersonic': 4, 'thunderwave': 8, 'electroball': 12, 'gyroball': 16, 'spark': 20, 'screech': 24, 'magnetrise': 28, 'flashcannon': 32, 'discharge': 36, 'metalsound': 40, 'lightscreen': 44, 'lockon': 48, 'zapcannon': 52}
  },
  "magneton": {
    "moves": {'electricterrain': 1, 'thundershock': 1, 'tackle': 1, 'supersonic': 1, 'thunderwave': 1, 'triattack': 'Evo.', 'electroball': 12, 'gyroball': 16, 'spark': 20, 'screech': 24, 'magnetrise': 28, 'flashcannon': 34, 'discharge': 40, 'metalsound': 46, 'lightscreen': 52, 'lockon': 58, 'zapcannon': 64}
  },
  "farfetch'd": {
    "moves": {'peck': 1, 'sandattack': 1, 'leer': 5, 'furycutter': 10, 'cut': 15, 'aerialace': 20, 'aircutter': 25, 'knockoff': 30, 'falseswipe': 35, 'slash': 40, 'swordsdance': 45, 'airslash': 50, 'leafblade': 55, 'agility': 60, 'bravebird': 65, 'rocksmash': 15, 'brutalswing': 20, 'detect': 25, 'defog': 35, 'brickbreak': 40, 'slam': 50, 'finalgambit': 60}
  },
  "doduo": {
    "moves": {'peck': 1, 'growl': 1, 'quickattack': 5, 'furyattack': 9, 'pluck': 14, 'doublehit': 19, 'agility': 23, 'uproar': 27, 'acupressure': 30, 'swordsdance': 33, 'drillpeck': 36, 'endeavor': 39, 'thrash': 43}
  },
  "dodrio": {
    "moves": {'peck': 1, 'growl': 1, 'quickattack': 1, 'triattack': 'Evo.', 'furyattack': 12, 'pluck': 15, 'doublehit': 19, 'agility': 23, 'uproar': 26, 'acupressure': 30, 'swordsdance': 34, 'drillpeck': 38, 'endeavor': 43, 'thrash': 50}
  },
  "seel": {
    "moves": {'headbutt': 1, 'growl': 3, 'charm': 7, 'icywind': 11, 'encore': 13, 'iceshard': 17, 'rest': 21, 'aquaring': 23, 'aurorabeam': 27, 'aquajet': 31, 'brine': 33, 'takedown': 37, 'dive': 41, 'aquatail': 43, 'icebeam': 47, 'safeguard': 51, 'snowscape': 53}
  },
  "dewgong": {
    "moves": {'headbutt': 1, 'growl': 1, 'icywind': 1, 'sheercold': 'Evo.', 'encore': 13, 'iceshard': 17, 'rest': 21, 'aquaring': 23, 'aurorabeam': 27, 'aquajet': 31, 'brine': 33, 'takedown': 39, 'dive': 45, 'aquatail': 49, 'icebeam': 55, 'safeguard': 61, 'snowscape': 65}
  },
  "grimer": {
    "moves": {'pound': 1, 'poisongas': 1, 'harden': 4, 'mudslap': 7, 'disable': 12, 'sludge': 15, 'mudshot': 18, 'minimize': 21, 'toxic': 26, 'sludgebomb': 29, 'sludgewave': 32, 'screech': 37, 'gunkshot': 40, 'acidarmor': 43, 'belch': 46, 'memento': 48, 'bite': 7, 'acidspray': 15, 'poisonfang': 18, 'knockoff': 29, 'crunch': 32}
  },
  "muk": {
    "moves": {'pound': 1, 'poisongas': 1, 'harden': 1, 'mudslap': 1, 'disable': 12, 'sludge': 15, 'mudshot': 18, 'minimize': 21, 'toxic': 26, 'sludgebomb': 29, 'sludgewave': 32, 'screech': 37, 'gunkshot': 40, 'acidarmor': 46, 'belch': 52, 'memento': 57, 'bite': 1, 'acidspray': 15, 'poisonfang': 18, 'knockoff': 29, 'crunch': 32}
  },
  "shellder": {
    "moves": {'tackle': 1, 'watergun': 1, 'withdraw': 4, 'iceshard': 8, 'leer': 12, 'whirlpool': 16, 'supersonic': 20, 'aurorabeam': 24, 'protect': 28, 'razorshell': 32, 'irondefense': 36, 'icebeam': 40, 'shellsmash': 44, 'hydropump': 48}
  },
  "cloyster": {
    "moves": {'iciclecrash': 1, 'toxicspikes': 1, 'spikes': 1, 'leer': 1, 'whirlpool': 1, 'supersonic': 1, 'aurorabeam': 1, 'protect': 1, 'irondefense': 1, 'icebeam': 1, 'shellsmash': 1, 'hydropump': 1, 'tackle': 1, 'watergun': 1, 'withdraw': 1, 'iceshard': 1, 'iciclespear': 'Evo.', 'razorshell': 5}
  },
  "gastly": {
    "moves": {'lick': 1, 'confuseray': 1, 'hypnosis': 4, 'meanlook': 8, 'payback': 12, 'spite': 16, 'curse': 20, 'hex': 24, 'nightshade': 28, 'suckerpunch': 32, 'darkpulse': 36, 'shadowball': 40, 'destinybond': 44, 'dreameater': 48}
  },
  "haunter": {
    "moves": {'lick': 1, 'confuseray': 1, 'hypnosis': 1, 'meanlook': 1, 'shadowpunch': 'Evo.', 'payback': 12, 'spite': 16, 'curse': 20, 'hex': 24, 'nightshade': 30, 'suckerpunch': 36, 'darkpulse': 42, 'shadowball': 48, 'destinybond': 54, 'dreameater': 60}
  },
  "gengar": {
    "moves": {'shadowpunch': 1, 'perishsong': 1, 'reflecttype': 1, 'lick': 1, 'confuseray': 1, 'hypnosis': 1, 'meanlook': 1, 'payback': 12, 'spite': 16, 'curse': 20, 'hex': 24, 'nightshade': 30, 'suckerpunch': 36, 'darkpulse': 42, 'shadowball': 48, 'destinybond': 54, 'dreameater': 60}
  },
  "onix": {
    "moves": {'mudsport': 1, 'tackle': 1, 'harden': 1, 'bind': 1, 'curse': 4, 'rockthrow': 1, 'rocktomb': 10, 'rage': 10, 'stealthrock': 5, 'rockpolish': 19, 'gyroball': 20, 'smackdown': 22, 'dragonbreath': 25, 'slam': 25, 'screech': 15, 'rockslide': 30, 'sandtomb': 37, 'irontail': 40, 'dig': 20, 'stoneedge': 46, 'doubleedge': 45, 'sandstorm': 52, 'earthquake': 35}
  },
  "drowzee": {
    "moves": {'pound': 1, 'hypnosis': 1, 'disable': 5, 'confusion': 9, 'headbutt': 13, 'poisongas': 17, 'psybeam': 21, 'psychup': 25, 'zenheadbutt': 29, 'swagger': 33, 'psychic': 37, 'nastyplot': 41, 'psyshock': 45, 'futuresight': 49}
  },
  "hypno": {
    "moves": {'switcheroo': 1, 'pound': 1, 'hypnosis': 1, 'disable': 1, 'confusion': 1, 'headbutt': 13, 'poisongas': 17, 'psybeam': 21, 'psychup': 25, 'zenheadbutt': 32, 'swagger': 37, 'psychic': 42, 'nastyplot': 47, 'psyshock': 51, 'futuresight': 56}
  },
  "krabby": {
    "moves": {'watergun': 1, 'leer': 1, 'harden': 4, 'metalclaw': 8, 'mudshot': 12, 'protect': 16, 'bubblebeam': 20, 'stomp': 24, 'flail': 29, 'razorshell': 32, 'slam': 36, 'swordsdance': 40, 'crabhammer': 44, 'guillotine': 48}
  },
  "kingler": {
    "moves": {'wideguard': 1, 'hammerarm': 1, 'watergun': 1, 'leer': 1, 'harden': 1, 'metalclaw': 1, 'mudshot': 12, 'protect': 16, 'bubblebeam': 20, 'stomp': 24, 'flail': 31, 'razorshell': 36, 'slam': 42, 'swordsdance': 48, 'crabhammer': 54, 'guillotine': 60}
  },
  "voltorb": {
    "moves": {'charge': 1, 'tackle': 1, 'thundershock': 4, 'eerieimpulse': 6, 'spark': 9, 'rollout': 11, 'screech': 13, 'chargebeam': 16, 'swift': 20, 'electroball': 22, 'selfdestruct': 26, 'lightscreen': 29, 'magnetrise': 34, 'discharge': 34, 'explosion': 41, 'gyroball': 46, 'mirrorcoat': 50, 'stunspore': 6, 'bulletseed': 9, 'energyball': 29, 'seedbomb': 34, 'grassyterrain': 50}
  },
  "electrode": {
    "moves": {'magneticflux': 1, 'charge': 1, 'tackle': 1, 'thundershock': 4, 'eerieimpulse': 1, 'spark': 9, 'rollout': 11, 'screech': 13, 'chargebeam': 16, 'swift': 20, 'electroball': 22, 'selfdestruct': 26, 'lightscreen': 29, 'magnetrise': 36, 'discharge': 34, 'explosion': 41, 'gyroball': 46, 'mirrorcoat': 58, 'chloroblast': 'Evo.', 'stunspore': 6, 'bulletseed': 9, 'energyball': 29, 'seedbomb': 34, 'grassyterrain': 50}
  },
  "exeggcute": {
    "moves": {'absorb': 1, 'hypnosis': 1, 'reflect': 5, 'leechseed': 10, 'megadrain': 15, 'confusion': 20, 'synthesis': 25, 'bulletseed': 30, 'gigadrain': 35, 'extrasensory': 40, 'uproar': 45, 'worryseed': 50, 'solarbeam': 55}
  },
  "exeggutor": {
    "moves": {'seedbomb': 1, 'psyshock': 1, 'woodhammer': 1, 'leafstorm': 1, 'megadrain': 1, 'confusion': 1, 'synthesis': 1, 'bulletseed': 1, 'gigadrain': 1, 'extrasensory': 1, 'uproar': 1, 'worryseed': 1, 'solarbeam': 1, 'absorb': 1, 'hypnosis': 1, 'reflect': 1, 'leechseed': 1, 'growth': 'Rem.', 'stomp': 'Evo.', 'dragonhammer': 'Evo.'}
  },
  "cubone": {
    "moves": {'mudslap': 1, 'growl': 1, 'tailwhip': 4, 'falseswipe': 8, 'headbutt': 12, 'retaliate': 16, 'fling': 20, 'stompingtantrum': 24, 'bonerush': 29, 'focusenergy': 32, 'endeavor': 36, 'bonemerang': 40, 'thrash': 44, 'doubleedge': 48}
  },
  "marowak": {
    "moves": {'mudslap': 1, 'growl': 1, 'tailwhip': 1, 'falseswipe': 1, 'headbutt': 1, 'retaliate': 1, 'fling': 20, 'stompingtantrum': 24, 'bonerush': 31, 'focusenergy': 1, 'endeavor': 42, 'bonemerang': 48, 'thrash': 54, 'doubleedge': 1, 'firespin': 1, 'shadowbone': 'Evo.', 'flamewheel': 12, 'hex': 16, 'willowisp': 36, 'flareblitz': 60}
  },
  "hitmonlee": {
    "moves": {'lowsweep': 1, 'tackle': 1, 'helpinghand': 1, 'fakeout': 1, 'focusenergy': 1, 'brickbreak': 'Evo.', 'doublekick': 4, 'lowkick': 8, 'endure': 12, 'suckerpunch': 16, 'wideguard': 21, 'blazekick': 24, 'feint': 28, 'megakick': 32, 'closecombat': 36, 'reversal': 40, 'highjumpkick': 44, 'axekick': 50}
  },
  "hitmonchan": {
    "moves": {'feint': 1, 'tackle': 1, 'helpinghand': 1, 'fakeout': 1, 'focusenergy': 1, 'drainpunch': 'Evo.', 'machpunch': 4, 'vacuumwave': 8, 'detect': 12, 'bulletpunch': 16, 'quickguard': 21, 'thunderpunch': 24, 'icepunch': 24, 'firepunch': 24, 'agility': 28, 'megapunch': 32, 'closecombat': 36, 'counter': 40, 'focuspunch': 44}
  },
  "lickitung": {
    "moves": {'lick': 1, 'defensecurl': 1, 'rollout': 6, 'supersonic': 12, 'wrap': 18, 'disable': 24, 'stomp': 30, 'knockoff': 36, 'screech': 42, 'slam': 48, 'powerwhip': 54, 'bellydrum': 60}
  },
  "koffing": {
    "moves": {'poisongas': 1, 'tackle': 1, 'smog': 4, 'smokescreen': 8, 'clearsmog': 12, 'assurance': 16, 'sludge': 20, 'haze': 24, 'selfdestruct': 28, 'sludgebomb': 32, 'toxic': 36, 'belch': 40, 'explosion': 44, 'memento': 48, 'destinybond': 52}
  },
  "weezing": {
    "moves": {'heatwave': 1, 'poisongas': 1, 'tackle': 1, 'smog': 1, 'smokescreen': 1, 'doublehit': 'Evo.', 'clearsmog': 12, 'assurance': 16, 'sludge': 20, 'haze': 1, 'selfdestruct': 28, 'sludgebomb': 32, 'toxic': 38, 'belch': 44, 'explosion': 50, 'memento': 56, 'destinybond': 62, 'strangesteam': 1, 'defog': 1, 'aromaticmist': 1, 'fairywind': 24, 'mistyterrain': 68}
  },
  "rhyhorn": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'smackdown': 5, 'bulldoze': 10, 'hornattack': 15, 'scaryface': 20, 'stomp': 25, 'rockblast': 30, 'drillrun': 35, 'takedown': 40, 'earthquake': 45, 'stoneedge': 50, 'megahorn': 55, 'horndrill': 60}
  },
  "rhydon": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'smackdown': 1, 'bulldoze': 1, 'hammerarm': 'Evo.', 'hornattack': 15, 'scaryface': 20, 'stomp': 25, 'rockblast': 30, 'drillrun': 35, 'takedown': 40, 'earthquake': 47, 'stoneedge': 54, 'megahorn': 61, 'horndrill': 68}
  },
  "chansey": {
    "moves": {'sweetkiss': 1, 'disarmingvoice': 1, 'covet': 1, 'charm': 1, 'pound': 1, 'copycat': 1, 'defensecurl': 1, 'tailwhip': 4, 'echoedvoice': 8, 'lifedew': 12, 'sing': 16, 'fling': 20, 'takedown': 24, 'healpulse': 28, 'helpinghand': 32, 'lightscreen': 36, 'doubleedge': 40, 'softboiled': 44, 'lastresort': 48, 'healingwish': 52}
  },
  "tangela": {
    "moves": {'absorb': 1, 'bind': 1, 'stunspore': 4, 'growth': 8, 'megadrain': 12, 'vinewhip': 16, 'poisonpowder': 20, 'ancientpower': 24, 'knockoff': 28, 'gigadrain': 32, 'sleeppowder': 36, 'slam': 40, 'tickle': 44, 'powerwhip': 48, 'ingrain': 52, 'grassyterrain': 56}
  },
  "kangaskhan": {
    "moves": {'cometpunch': 1, 'leer': 1, 'fakeout': 6, 'tailwhip': 11, 'bite': 17, 'doublehit': 19, 'rage': 22, 'megapunch': 28, 'chipaway': 31, 'dizzypunch': 33, 'crunch': 39, 'endure': 43, 'outrage': 44, 'suckerpunch': 50, 'reversal': 50}
  },
  "horsea": {
    "moves": {'watergun': 1, 'leer': 1, 'smokescreen': 5, 'twister': 10, 'focusenergy': 15, 'dragonbreath': 20, 'bubblebeam': 25, 'agility': 30, 'waterpulse': 35, 'dragonpulse': 40, 'hydropump': 45, 'dragondance': 50, 'raindance': 55}
  },
  "seadra": {
    "moves": {'watergun': 1, 'leer': 1, 'smokescreen': 1, 'twister': 1, 'focusenergy': 15, 'dragonbreath': 20, 'bubblebeam': 25, 'agility': 30, 'waterpulse': 37, 'dragonpulse': 44, 'hydropump': 51, 'dragondance': 58, 'raindance': 65}
  },
  "goldeen": {
    "moves": {'peck': 1, 'tailwhip': 1, 'supersonic': 5, 'waterpulse': 10, 'hornattack': 15, 'agility': 20, 'aquaring': 25, 'flail': 30, 'waterfall': 35, 'soak': 40, 'megahorn': 45, 'horndrill': 50}
  },
  "seaking": {
    "moves": {'peck': 1, 'tailwhip': 1, 'supersonic': 1, 'waterpulse': 1, 'hornattack': 15, 'agility': 20, 'aquaring': 25, 'flail': 30, 'waterfall': 37, 'soak': 44, 'megahorn': 51, 'horndrill': 58}
  },
  "staryu": {
    "moves": {'tackle': 1, 'harden': 1, 'watergun': 9, 'rapidspin': 7, 'recover': 40, 'psywave': 4, 'swift': 13, 'bubblebeam': 27, 'camouflage': 22, 'gyroball': 24, 'brine': 28, 'minimize': 18, 'reflecttype': 35, 'powergem': 37, 'confuseray': 22, 'psychic': 36, 'lightscreen': 31, 'cosmicpower': 49, 'hydropump': 45}
  },
  "starmie": {
    "moves": {'hydropump': 1, 'spotlight': 1, 'watergun': 1, 'rapidspin': 1, 'recover': 1, 'swift': 1, 'confuseray': 40, 'tackle': 1, 'harden': 1, 'psywave': 1}
  },
  "mr.mime": {
    "moves": {'quickguard': 1, 'wideguard': 1, 'powerswap': 1, 'guardswap': 1, 'pound': 1, 'copycat': 1, 'batonpass': 1, 'encore': 1, 'confusion': 12, 'roleplay': 1, 'protect': 1, 'recycle': 1, 'psybeam': 28, 'mimic': 1, 'lightscreen': 1, 'reflect': 1, 'safeguard': 1, 'suckerpunch': 40, 'dazzlinggleam': 1, 'psychic': 48, 'teeterdance': 52, 'mistyterrain': 1, 'rapidspin': 1, 'iceshard': 1, 'allyswitch': 16, 'icywind': 20, 'doublekick': 24, 'hypnosis': 32, 'mirrorcoat': 36, 'freezedry': 44}
  },
  "scyther": {
    "moves": {'quickattack': 1, 'leer': 1, 'furycutter': 4, 'falseswipe': 8, 'wingattack': 12, 'doubleteam': 16, 'doublehit': 20, 'slash': 24, 'focusenergy': 28, 'agility': 32, 'airslash': 36, 'xscissor': 40, 'swordsdance': 44}
  },
  "jynx": {
    "moves": {'sweetkiss': 1, 'lick': 1, 'pound': 1, 'powdersnow': 1, 'copycat': 1, 'confusion': 12, 'covet': 16, 'sing': 20, 'faketears': 24, 'icepunch': 28, 'psychic': 34, 'lovelykiss': 40, 'meanlook': 46, 'perishsong': 52, 'blizzard': 58}
  },
  "electabuzz": {
    "moves": {'quickattack': 1, 'leer': 1, 'thundershock': 1, 'charge': 1, 'swift': 12, 'shockwave': 16, 'thunderwave': 20, 'screech': 24, 'thunderpunch': 28, 'discharge': 34, 'lowkick': 40, 'thunderbolt': 46, 'lightscreen': 52, 'thunder': 58, 'gigaimpact': 64}
  },
  "magmar": {
    "moves": {'smog': 1, 'leer': 1, 'ember': 1, 'smokescreen': 1, 'clearsmog': 12, 'flamewheel': 16, 'confuseray': 20, 'scaryface': 24, 'firepunch': 28, 'lavaplume': 34, 'lowkick': 40, 'flamethrower': 46, 'sunnyday': 52, 'fireblast': 58, 'hyperbeam': 64}
  },
  "pinsir": {
    "moves": {'vicegrip': 1, 'focusenergy': 1, 'bind': 4, 'seismictoss': 8, 'harden': 12, 'revenge': 15, 'vitalthrow': 18, 'doublehit': 22, 'brickbreak': 16, 'xscissor': 20, 'submission': 26, 'stormthrow': 36, 'swordsdance': 32, 'thrash': 38, 'superpower': 44, 'guillotine': 50}
  },
  "tauros": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'workup': 5, 'payback': 10, 'assurance': 15, 'hornattack': 20, 'scaryface': 25, 'zenheadbutt': 30, 'ragingbull': 35, 'rest': 40, 'swagger': 45, 'thrash': 50, 'doubleedge': 55, 'gigaimpact': 60, 'doublekick': 10, 'headbutt': 20, 'closecombat': 60, 'flamecharge': 15, 'flareblitz': 55, 'aquajet': 15, 'wavecrash': 55}
  },
  "magikarp": {
    "moves": {'splash': 1, 'tackle': 15, 'flail': 25}
  },
  "gyarados": {
    "moves": {'flail': 1, 'splash': 1, 'tackle': 1, 'leer': 1, 'twister': 1, 'bite': 'Evo.', 'whirlpool': 4, 'icefang': 8, 'brine': 12, 'scaryface': 16, 'waterfall': 21, 'crunch': 24, 'raindance': 28, 'aquatail': 32, 'dragondance': 36, 'hydropump': 40, 'hurricane': 44, 'thrash': 48, 'hyperbeam': 52}
  },
  "lapras": {
    "moves": {'growl': 1, 'watergun': 1, 'sing': 5, 'mist': 10, 'lifedew': 15, 'iceshard': 20, 'confuseray': 25, 'waterpulse': 30, 'brine': 35, 'bodyslam': 40, 'icebeam': 45, 'raindance': 50, 'hydropump': 55, 'perishsong': 60, 'sheercold': 65}
  },
  "ditto": {
    "moves": {'transform': 1}
  },
  "eevee": {
    "moves": {'covet': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'swift': 20, 'bite': 25, 'copycat': 30, 'batonpass': 35, 'takedown': 40, 'charm': 45, 'doubleedge': 50, 'lastresort': 55}
  },
  "vaporeon": {
    "moves": {'covet': 1, 'swift': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'watergun': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'haze': 20, 'waterpulse': 25, 'aurorabeam': 30, 'aquaring': 35, 'muddywater': 40, 'acidarmor': 45, 'hydropump': 50, 'lastresort': 55}
  },
  "jolteon": {
    "moves": {'covet': 1, 'swift': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'thundershock': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'thunderwave': 20, 'doublekick': 25, 'thunderfang': 30, 'pinmissile': 35, 'discharge': 40, 'agility': 45, 'thunder': 50, 'lastresort': 55}
  },
  "flareon": {
    "moves": {'covet': 1, 'swift': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'ember': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'smog': 20, 'bite': 25, 'firefang': 30, 'firespin': 35, 'lavaplume': 40, 'scaryface': 45, 'flareblitz': 50, 'lastresort': 55}
  },
  "porygon": {
    "moves": {'tackle': 1, 'conversion': 1, 'recycle': 5, 'magnetrise': 10, 'thundershock': 15, 'psybeam': 20, 'conversion2': 25, 'agility': 30, 'recover': 35, 'discharge': 40, 'triattack': 45, 'doubleedge': 50, 'lockon': 55, 'zapcannon': 60}
  },
  "omanyte": {
    "moves": {'bind': 1, 'withdraw': 1, 'rollout': 5, 'sandattack': 10, 'watergun': 15, 'leer': 20, 'mudshot': 25, 'ancientpower': 30, 'brine': 35, 'protect': 41, 'rockblast': 45, 'surf': 50, 'shellsmash': 55, 'hydropump': 60}
  },
  "omastar": {
    "moves": {'crunch': 'Evo.', 'bind': 1, 'withdraw': 1, 'rollout': 1, 'sandattack': 1, 'watergun': 15, 'leer': 20, 'mudshot': 25, 'ancientpower': 30, 'brine': 35, 'protect': 43, 'rockblast': 49, 'surf': 56, 'shellsmash': 63, 'hydropump': 70}
  },
  "kabuto": {
    "moves": {'absorb': 1, 'harden': 1, 'scratch': 5, 'sandattack': 10, 'aquajet': 15, 'leer': 20, 'mudshot': 25, 'ancientpower': 30, 'brine': 35, 'protect': 41, 'leechlife': 45, 'liquidation': 50, 'metalsound': 55, 'stoneedge': 60}
  },
  "kabutops": {
    "moves": {'slash': 'Evo.', 'nightslash': 1, 'feint': 1, 'absorb': 1, 'harden': 1, 'scratch': 1, 'sandattack': 1, 'aquajet': 15, 'leer': 20, 'mudshot': 25, 'ancientpower': 30, 'brine': 35, 'protect': 43, 'leechlife': 49, 'liquidation': 56, 'metalsound': 63, 'stoneedge': 70}
  },
  "aerodactyl": {
    "moves": {'ironhead': 57, 'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'wingattack': 1, 'supersonic': 14, 'bite': 1, 'scaryface': 1, 'roar': 7, 'agility': 28, 'ancientpower': 25, 'crunch': 35, 'takedown': 56, 'skydrop': 49, 'hyperbeam': 63, 'rockslide': 42, 'gigaimpact': 81, 'rockthrow': 21, 'fly': 49}
  },
  "snorlax": {
    "moves": {'recycle': 1, 'covet': 1, 'stockpile': 1, 'swallow': 1, 'screech': 1, 'fling': 1, 'metronome': 1, 'flail': 1, 'lastresort': 1, 'lick': 1, 'tackle': 1, 'defensecurl': 1, 'block': 1, 'yawn': 12, 'bite': 16, 'snore': 20, 'sleeptalk': 20, 'rest': 20, 'crunch': 24, 'bodyslam': 28, 'heavyslam': 32, 'amnesia': 36, 'highhorsepower': 40, 'hammerarm': 44, 'bellydrum': 48, 'belch': 52, 'gigaimpact': 56}
  },
  "articuno": {
    "moves": {'gust': 1, 'mist': 1, 'powdersnow': 5, 'reflect': 10, 'iceshard': 15, 'agility': 20, 'ancientpower': 25, 'tailwind': 30, 'freezedry': 35, 'roost': 40, 'icebeam': 45, 'snowscape': 50, 'hurricane': 55, 'haze': 60, 'blizzard': 65, 'sheercold': 70, 'confusion': 5, 'hypnosis': 15, 'psychocut': 35, 'recover': 40, 'freezingglare': 45, 'dreameater': 50, 'doubleteam': 60, 'futuresight': 65, 'trickroom': 70}
  },
  "zapdos": {
    "moves": {'peck': 1, 'thunderwave': 1, 'thundershock': 5, 'lightscreen': 10, 'pluck': 15, 'agility': 20, 'ancientpower': 25, 'charge': 30, 'drillpeck': 35, 'roost': 40, 'discharge': 45, 'raindance': 50, 'thunder': 55, 'detect': 60, 'magneticflux': 65, 'zapcannon': 70, 'focusenergy': 1, 'rocksmash': 5, 'brickbreak': 30, 'quickguard': 40, 'thunderouskick': 45, 'bulkup': 50, 'counter': 55, 'closecombat': 65, 'reversal': 70}
  },
  "moltres": {
    "moves": {'gust': 1, 'leer': 1, 'ember': 5, 'safeguard': 10, 'wingattack': 15, 'agility': 20, 'ancientpower': 25, 'incinerate': 30, 'airslash': 35, 'roost': 40, 'heatwave': 45, 'sunnyday': 50, 'hurricane': 55, 'endure': 60, 'overheat': 65, 'skyattack': 70, 'payback': 5, 'suckerpunch': 30, 'afteryou': 40, 'fierywrath': 45, 'nastyplot': 50, 'memento': 65}
  },
  "dratini": {
    "moves": {'wrap': 1, 'leer': 1, 'twister': 5, 'thunderwave': 10, 'dragontail': 15, 'agility': 20, 'slam': 25, 'aquatail': 31, 'dragonrush': 35, 'safeguard': 40, 'raindance': 45, 'dragondance': 50, 'outrage': 55, 'hyperbeam': 60}
  },
  "dragonair": {
    "moves": {'wrap': 1, 'leer': 1, 'twister': 1, 'thunderwave': 1, 'dragontail': 15, 'agility': 20, 'slam': 25, 'aquatail': 33, 'dragonrush': 39, 'safeguard': 46, 'raindance': 53, 'dragondance': 60, 'outrage': 67, 'hyperbeam': 74}
  },
  "dragonite": {
    "moves": {'wingattack': 1, 'extremespeed': 1, 'roost': 1, 'firepunch': 1, 'thunderpunch': 1, 'wrap': 1, 'leer': 1, 'twister': 1, 'thunderwave': 1, 'hurricane': 'Evo.', 'dragontail': 15, 'agility': 20, 'slam': 25, 'aquatail': 33, 'dragonrush': 39, 'outrage': 41, 'safeguard': 46, 'raindance': 53, 'dragondance': 62, 'hyperbeam': 80}
  },
  "mewtwo": {
    "moves": {'lifedew': 1, 'disable': 1, 'confusion': 1, 'swift': 1, 'ancientpower': 8, 'psychocut': 16, 'safeguard': 24, 'amnesia': 32, 'aurasphere': 40, 'psychic': 48, 'powerswap': 56, 'guardswap': 56, 'mist': 64, 'psystrike': 72, 'recover': 80, 'futuresight': 88}
  },
  "mew": {
    "moves": {'pound': 1, 'reflecttype': 1, 'amnesia': 10, 'batonpass': 20, 'ancientpower': 30, 'lifedew': 40, 'nastyplot': 50, 'metronome': 60, 'imprison': 70, 'transform': 80, 'aurasphere': 90, 'psychic': 100}
  },
  "chikorita": {
    "moves": {'tackle': 1, 'growl': 1, 'razorleaf': 6, 'poisonpowder': 9, 'synthesis': 12, 'reflect': 17, 'magicalleaf': 20, 'leechseed': 23, 'sweetscent': 28, 'lightscreen': 31, 'bodyslam': 34, 'safeguard': 39, 'gigadrain': 42, 'solarbeam': 45}
  },
  "bayleef": {
    "moves": {'tackle': 1, 'growl': 1, 'razorleaf': 1, 'poisonpowder': 1, 'synthesis': 12, 'reflect': 18, 'magicalleaf': 22, 'leechseed': 26, 'sweetscent': 32, 'lightscreen': 36, 'bodyslam': 40, 'safeguard': 46, 'gigadrain': 50, 'solarbeam': 54}
  },
  "meganium": {
    "moves": {'petalblizzard': 1, 'tackle': 1, 'growl': 1, 'razorleaf': 1, 'poisonpowder': 1, 'petaldance': 'Evo.', 'synthesis': 12, 'reflect': 18, 'magicalleaf': 22, 'leechseed': 26, 'sweetscent': 34, 'lightscreen': 40, 'bodyslam': 46, 'safeguard': 54, 'gigadrain': 60, 'solarbeam': 65}
  },
  "cyndaquil": {
    "moves": {'tackle': 1, 'leer': 1, 'smokescreen': 6, 'ember': 10, 'quickattack': 13, 'flamewheel': 19, 'defensecurl': 22, 'flamecharge': 28, 'swift': 31, 'lavaplume': 37, 'flamethrower': 40, 'inferno': 46, 'rollout': 49, 'doubleedge': 55, 'overheat': 58, 'eruption': 64}
  },
  "quilava": {
    "moves": {'tackle': 1, 'leer': 1, 'smokescreen': 1, 'ember': 10, 'quickattack': 13, 'flamewheel': 20, 'defensecurl': 24, 'swift': 31, 'flamecharge': 35, 'lavaplume': 42, 'flamethrower': 46, 'inferno': 53, 'rollout': 57, 'doubleedge': 64, 'overheat': 68, 'eruption': 75}
  },
  "typhlosion": {
    "moves": {'eruption': 1, 'doubleedge': 1, 'gyroball': 1, 'tackle': 1, 'leer': 1, 'smokescreen': 1, 'ember': 1, 'quickattack': 13, 'flamewheel': 20, 'defensecurl': 24, 'swift': 31, 'flamecharge': 35, 'lavaplume': 43, 'flamethrower': 48, 'inferno': 56, 'rollout': 61, 'overheat': 74, 'infernalparade': 'Evo.'}
  },
  "totodile": {
    "moves": {'scratch': 1, 'leer': 1, 'watergun': 6, 'bite': 9, 'scaryface': 13, 'icefang': 19, 'flail': 22, 'crunch': 27, 'slash': 30, 'screech': 33, 'thrash': 37, 'aquatail': 41, 'superpower': 45, 'hydropump': 50}
  },
  "croconaw": {
    "moves": {'scratch': 1, 'leer': 1, 'watergun': 1, 'bite': 13, 'scaryface': 15, 'icefang': 21, 'flail': 24, 'crunch': 30, 'slash': 34, 'screech': 37, 'thrash': 42, 'aquatail': 47, 'superpower': 50, 'hydropump': 55}
  },
  "feraligatr": {
    "moves": {'agility': 1, 'scratch': 1, 'leer': 1, 'watergun': 1, 'bite': 13, 'scaryface': 15, 'icefang': 21, 'flail': 24, 'crunch': 32, 'slash': 37, 'screech': 44, 'thrash': 51, 'aquatail': 59, 'superpower': 65, 'hydropump': 70}
  },
  "sentret": {
    "moves": {'scratch': 1, 'defensecurl': 4, 'quickattack': 7, 'furyswipes': 13, 'helpinghand': 16, 'followme': 19, 'slam': 25, 'rest': 28, 'suckerpunch': 31, 'amnesia': 36, 'batonpass': 39, 'doubleedge': 42, 'hypervoice': 47}
  },
  "furret": {
    "moves": {'scratch': 1, 'quickattack': 1, 'defensecurl': 1, 'coil': 1, 'agility': 'Evo.', 'furyswipes': 13, 'helpinghand': 17, 'followme': 21, 'slam': 28, 'rest': 32, 'suckerpunch': 36, 'amnesia': 42, 'batonpass': 46, 'doubleedge': 50, 'hypervoice': 56}
  },
  "hoothoot": {
    "moves": {'peck': 1, 'growl': 1, 'tackle': 3, 'echoedvoice': 6, 'confusion': 9, 'reflect': 12, 'defog': 15, 'airslash': 18, 'extrasensory': 21, 'takedown': 24, 'uproar': 27, 'roost': 30, 'moonblast': 33, 'hypnosis': 36, 'dreameater': 39}
  },
  "noctowl": {
    "moves": {'skyattack': 1, 'peck': 1, 'growl': 1, 'tackle': 1, 'echoedvoice': 1, 'confusion': 9, 'reflect': 12, 'defog': 15, 'airslash': 18, 'extrasensory': 23, 'takedown': 28, 'uproar': 33, 'roost': 38, 'moonblast': 43, 'hypnosis': 48, 'dreameater': 53}
  },
  "ledyba": {
    "moves": {'tackle': 1, 'supersonic': 5, 'swift': 8, 'lightscreen': 12, 'reflect': 12, 'safeguard': 12, 'machpunch': 15, 'roost': 19, 'strugglebug': 22, 'batonpass': 26, 'agility': 29, 'bugbuzz': 33, 'airslash': 36, 'doubleedge': 40}
  },
  "ledian": {
    "moves": {'tackle': 1, 'supersonic': 5, 'swift': 8, 'lightscreen': 12, 'reflect': 12, 'safeguard': 12, 'machpunch': 15, 'roost': 20, 'strugglebug': 24, 'batonpass': 29, 'agility': 33, 'bugbuzz': 38, 'airslash': 42, 'doubleedge': 47}
  },
  "spinarak": {
    "moves": {'poisonsting': 1, 'stringshot': 1, 'absorb': 5, 'infestation': 8, 'scaryface': 12, 'nightshade': 15, 'shadowsneak': 19, 'furyswipes': 22, 'suckerpunch': 26, 'agility': 29, 'pinmissile': 33, 'psychic': 36, 'poisonjab': 40, 'crosspoison': 44, 'stickyweb': 47, 'toxicthread': 51}
  },
  "ariados": {
    "moves": {'focusenergy': 1, 'fellstinger': 1, 'bugbite': 1, 'poisonsting': 1, 'stringshot': 1, 'absorb': 1, 'swordsdance': 'Evo.', 'infestation': 8, 'scaryface': 12, 'nightshade': 15, 'shadowsneak': 19, 'furyswipes': 23, 'suckerpunch': 28, 'agility': 31, 'pinmissile': 35, 'psychic': 41, 'poisonjab': 46, 'crosspoison': 50, 'stickyweb': 54, 'toxicthread': 59}
  },
  "crobat": {
    "moves": {'crosspoison': 'Evo.', 'tailwind': 1, 'toxic': 1, 'screech': 1, 'absorb': 1, 'supersonic': 1, 'astonish': 1, 'meanlook': 1, 'poisonfang': 15, 'quickguard': 20, 'aircutter': 27, 'bite': 34, 'haze': 41, 'venoshock': 48, 'confuseray': 55, 'airslash': 62, 'leechlife': 69}
  },
  "chinchou": {
    "moves": {'watergun': 1, 'supersonic': 1, 'electroball': 4, 'thunderwave': 8, 'bubblebeam': 12, 'confuseray': 16, 'spark': 20, 'charge': 24, 'discharge': 28, 'aquaring': 32, 'flail': 36, 'takedown': 40, 'hydropump': 44}
  },
  "lanturn": {
    "moves": {'eerieimpulse': 1, 'watergun': 1, 'supersonic': 1, 'electroball': 1, 'thunderwave': 1, 'stockpile': 'Evo.', 'swallow': 'Evo.', 'spitup': 'Evo.', 'bubblebeam': 12, 'confuseray': 16, 'spark': 20, 'charge': 24, 'discharge': 30, 'aquaring': 36, 'flail': 42, 'takedown': 48, 'hydropump': 54}
  },
  "pichu": {
    "moves": {'thundershock': 1, 'tailwhip': 1, 'playnice': 4, 'sweetkiss': 8, 'nuzzle': 12, 'nastyplot': 16, 'charm': 20}
  },
  "cleffa": {
    "moves": {'splash': 1, 'pound': 1, 'copycat': 1, 'sing': 4, 'sweetkiss': 8, 'disarmingvoice': 12, 'encore': 16, 'charm': 20}
  },
  "igglybuff": {
    "moves": {'sing': 1, 'pound': 1, 'copycat': 1, 'defensecurl': 4, 'sweetkiss': 8, 'disarmingvoice': 12, 'disable': 16, 'charm': 20}
  },
  "togepi": {
    "moves": {'growl': 1, 'pound': 1, 'sweetkiss': 4, 'lifedew': 8, 'charm': 12, 'ancientpower': 16, 'yawn': 20, 'metronome': 24, 'afteryou': 28, 'doubleedge': 32, 'safeguard': 36, 'followme': 40, 'batonpass': 44, 'lastresort': 48, 'wish': 52}
  },
  "togetic": {
    "moves": {'fairywind': 'Evo.', 'growl': 1, 'pound': 1, 'sweetkiss': 1, 'lifedew': 1, 'charm': 12, 'ancientpower': 16, 'yawn': 20, 'metronome': 24, 'afteryou': 28, 'doubleedge': 32, 'safeguard': 36, 'followme': 40, 'batonpass': 44, 'lastresort': 48, 'wish': 52}
  },
  "natu": {
    "moves": {'peck': 1, 'leer': 1, 'storedpower': 5, 'teleport': 10, 'confuseray': 15, 'nightshade': 20, 'psychoshift': 26, 'powerswap': 30, 'guardswap': 35, 'psychic': 35, 'wish': 40, 'futuresight': 45}
  },
  "xatu": {
    "moves": {'airslash': 'Evo.', 'tailwind': 1, 'peck': 1, 'leer': 1, 'storedpower': 1, 'teleport': 1, 'confuseray': 15, 'nightshade': 20, 'psychoshift': 28, 'powerswap': 34, 'guardswap': 34, 'psychic': 41, 'wish': 48, 'futuresight': 55}
  },
  "mareep": {
    "moves": {'tackle': 1, 'growl': 1, 'thunderwave': 4, 'thundershock': 8, 'cottonspore': 11, 'charge': 15, 'takedown': 18, 'electroball': 22, 'confuseray': 25, 'powergem': 29, 'discharge': 32, 'cottonguard': 36, 'dazzlinggleam': 39, 'lightscreen': 43, 'thunder': 46}
  },
  "flaaffy": {
    "moves": {'tackle': 1, 'growl': 1, 'thundershock': 6, 'thunderwave': 9, 'cottonspore': 11, 'charge': 16, 'takedown': 20, 'electroball': 25, 'confuseray': 29, 'powergem': 34, 'discharge': 38, 'cottonguard': 43, 'dazzlinggleam': 47, 'lightscreen': 52, 'thunder': 56}
  },
  "ampharos": {
    "moves": {'zapcannon': 1, 'magneticflux': 1, 'dragonpulse': 1, 'firepunch': 1, 'tackle': 1, 'growl': 1, 'thunderwave': 1, 'thundershock': 1, 'thunderpunch': 'Evo.', 'cottonspore': 11, 'charge': 16, 'takedown': 20, 'electroball': 25, 'confuseray': 29, 'powergem': 35, 'discharge': 40, 'cottonguard': 46, 'dazzlinggleam': 51, 'lightscreen': 57, 'thunder': 62}
  },
  "bellossom": {
    "moves": {'quiverdance': 1, 'megadrain': 1, 'poisonpowder': 1, 'stunspore': 1, 'sleeppowder': 1, 'gigadrain': 1, 'toxic': 1, 'moonblast': 1, 'grassyterrain': 1, 'moonlight': 1, 'petaldance': 1, 'absorb': 1, 'growth': 1, 'acid': 1, 'sweetscent': 1, 'petalblizzard': 'Evo.'}
  },
  "marill": {
    "moves": {'rollout': 1, 'defensecurl': 1, 'tackle': 1, 'watergun': 1, 'tailwhip': 1, 'helpinghand': 1, 'bubblebeam': 6, 'charm': 9, 'slam': 12, 'bounce': 15, 'aquatail': 19, 'playrough': 21, 'aquaring': 24, 'raindance': 27, 'hydropump': 30, 'doubleedge': 33, 'superpower': 36}
  },
  "azumarill": {
    "moves": {'rollout': 1, 'defensecurl': 1, 'tackle': 1, 'watergun': 1, 'tailwhip': 1, 'helpinghand': 1, 'bubblebeam': 6, 'charm': 9, 'slam': 12, 'bounce': 15, 'aquatail': 21, 'playrough': 25, 'aquaring': 30, 'raindance': 35, 'hydropump': 40, 'doubleedge': 45, 'superpower': 50}
  },
  "sudowoodo": {
    "moves": {'stoneedge': 1, 'hammerarm': 1, 'woodhammer': 1, 'faketears': 1, 'copycat': 1, 'flail': 1, 'rockthrow': 1, 'slam': 'Evo.', 'block': 12, 'mimic': 16, 'rocktomb': 20, 'tearfullook': 24, 'suckerpunch': 28, 'rockslide': 32, 'lowkick': 36, 'counter': 40, 'doubleedge': 44, 'headsmash': 48}
  },
  "politoed": {
    "moves": {'raindance': 1, 'hydropump': 1, 'bellydrum': 1, 'pound': 1, 'bodyslam': 'Rem.', 'doubleedge': 'Rem.', 'watergun': 'Rem.', 'bubblebeam': 'Rem.', 'hypnosis': 'Rem.', 'perishsong': 'Rem.', 'swagger': 'Rem.', 'hypervoice': 'Rem.', 'mudshot': 'Rem.', 'earthpower': 'Rem.', 'bounce': 'Evo.'}
  },
  "hoppip": {
    "moves": {'splash': 1, 'tackle': 1, 'tailwhip': 4, 'absorb': 6, 'fairywind': 8, 'poisonpowder': 10, 'stunspore': 10, 'sleeppowder': 10, 'bulletseed': 12, 'synthesis': 15, 'leechseed': 19, 'megadrain': 22, 'acrobatics': 24, 'cottonspore': 27, 'uturn': 29, 'gigadrain': 32, 'bounce': 35, 'memento': 38}
  },
  "skiploom": {
    "moves": {'splash': 1, 'tailwhip': 1, 'absorb': 1, 'synthesis': 1, 'tackle': 8, 'fairywind': 10, 'poisonpowder': 12, 'stunspore': 12, 'sleeppowder': 12, 'bulletseed': 15, 'leechseed': 20, 'megadrain': 24, 'acrobatics': 28, 'cottonspore': 31, 'uturn': 34, 'gigadrain': 37, 'bounce': 41, 'memento': 44}
  },
  "jumpluff": {
    "moves": {'splash': 1, 'tailwhip': 1, 'absorb': 1, 'synthesis': 1, 'tackle': 8, 'fairywind': 10, 'poisonpowder': 12, 'stunspore': 12, 'sleeppowder': 12, 'bulletseed': 15, 'leechseed': 20, 'megadrain': 24, 'acrobatics': 30, 'cottonspore': 35, 'uturn': 39, 'gigadrain': 43, 'bounce': 49, 'memento': 55}
  },
  "aipom": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'sandattack': 4, 'astonish': 8, 'batonpass': 11, 'tickle': 15, 'furyswipes': 18, 'swift': 22, 'screech': 25, 'agility': 29, 'doublehit': 32, 'fling': 36, 'nastyplot': 39, 'lastresort': 43}
  },
  "sunkern": {
    "moves": {'tackle': 1, 'growth': 1, 'absorb': 7, 'megadrain': 10, 'razorleaf': 16, 'worryseed': 19, 'gigadrain': 22, 'endeavor': 25, 'synthesis': 28, 'solarbeam': 31, 'doubleedge': 34, 'sunnyday': 36, 'seedbomb': 39}
  },
  "sunflora": {
    "moves": {'pound': 1, 'tackle': 1, 'growth': 1, 'ingrain': 4, 'absorb': 7, 'megadrain': 10, 'leechseed': 13, 'razorleaf': 16, 'worryseed': 19, 'gigadrain': 22, 'bulletseed': 25, 'petaldance': 28, 'solarbeam': 31, 'doubleedge': 34, 'sunnyday': 39, 'leafstorm': 43, 'petalblizzard': 50}
  },
  "yanma": {
    "moves": {'tackle': 1, 'quickattack': 6, 'doubleteam': 11, 'aircutter': 14, 'detect': 17, 'supersonic': 22, 'uproar': 27, 'bugbite': 30, 'ancientpower': 33, 'hypnosis': 38, 'wingattack': 43, 'screech': 46, 'uturn': 49, 'airslash': 54, 'bugbuzz': 57}
  },
  "wooper": {
    "moves": {'watergun': 1, 'tailwhip': 1, 'raindance': 4, 'mudshot': 1, 'mist': 12, 'haze': 12, 'slam': 16, 'yawn': 21, 'aquatail': 24, 'muddywater': 28, 'amnesia': 32, 'toxic': 36, 'earthquake': 40, 'tackle': 4, 'poisontail': 8, 'toxicspikes': 12, 'poisonjab': 24, 'sludgewave': 28}
  },
  "quagsire": {
    "moves": {'watergun': 1, 'tailwhip': 1, 'raindance': 1, 'mudshot': 1, 'mist': 12, 'haze': 12, 'slam': 16, 'yawn': 23, 'aquatail': 28, 'muddywater': 34, 'amnesia': 40, 'toxic': 46, 'earthquake': 52}
  },
  "espeon": {
    "moves": {'covet': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'confusion': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'swift': 20, 'psybeam': 25, 'morningsun': 30, 'powerswap': 35, 'psychic': 40, 'psychup': 45, 'futuresight': 50, 'lastresort': 55}
  },
  "umbreon": {
    "moves": {'covet': 1, 'swift': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'snarl': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'confuseray': 20, 'assurance': 25, 'moonlight': 30, 'guardswap': 35, 'darkpulse': 40, 'screech': 45, 'meanlook': 50, 'lastresort': 55}
  },
  "murkrow": {
    "moves": {'peck': 1, 'astonish': 1, 'gust': 5, 'haze': 11, 'wingattack': 15, 'nightshade': 21, 'assurance': 25, 'taunt': 31, 'meanlook': 35, 'foulplay': 40, 'suckerpunch': 50, 'torment': 55, 'quash': 60}
  },
  "slowking": {
    "moves": {'powergem': 1, 'nastyplot': 1, 'swagger': 1, 'tackle': 1, 'curse': 1, 'growl': 1, 'watergun': 1, 'futuresight': 'Rem.', 'chillyreception': 'Rem.', 'yawn': 9, 'confusion': 12, 'disable': 15, 'waterpulse': 18, 'headbutt': 21, 'amnesia': 27, 'surf': 30, 'slackoff': 33, 'psychic': 36, 'psychup': 39, 'raindance': 42, 'healpulse': 45, 'acid': 1, 'toxic': 'Rem.', 'eeriespell': 'Evo.', 'zenheadbutt': 24}
  },
  "misdreavus": {
    "moves": {'growl': 1, 'confusion': 1, 'astonish': 10, 'confuseray': 14, 'meanlook': 19, 'hex': 23, 'psybeam': 28, 'painsplit': 32, 'payback': 37, 'shadowball': 41, 'perishsong': 46, 'powergem': 50}
  },
  "unown": {
    "moves": {'hiddenpower': 1}
  },
  "wobbuffet": {
    "moves": {'splash': 1, 'charm': 1, 'encore': 1, 'amnesia': 1, 'counter': 'Evo.', 'mirrorcoat': 'Evo.', 'safeguard': 'Evo.', 'destinybond': 'Evo.'}
  },
  "girafarig": {
    "moves": {'powerswap': 1, 'guardswap': 1, 'astonish': 1, 'tackle': 1, 'growl': 1, 'confusion': 5, 'assurance': 10, 'stomp': 14, 'psybeam': 19, 'agility': 23, 'doublehit': 28, 'twinbeam': 32, 'crunch': 37, 'batonpass': 41, 'nastyplot': 46, 'psychic': 50}
  },
  "pineco": {
    "moves": {'tackle': 1, 'protect': 1, 'selfdestruct': 6, 'bugbite': 9, 'takedown': 12, 'rapidspin': 17, 'rollout': 20, 'curse': 23, 'spikes': 28, 'payback': 31, 'explosion': 34, 'irondefense': 39, 'gyroball': 42, 'doubleedge': 45}
  },
  "forretress": {
    "moves": {'zapcannon': 1, 'magnetrise': 1, 'toxicspikes': 1, 'tackle': 1, 'protect': 1, 'selfdestruct': 1, 'bugbite': 1, 'heavyslam': 'Evo.', 'takedown': 12, 'rapidspin': 17, 'rollout': 20, 'curse': 23, 'spikes': 28, 'payback': 32, 'explosion': 36, 'irondefense': 42, 'gyroball': 46, 'doubleedge': 50}
  },
  "dunsparce": {
    "moves": {'flail': 1, 'defensecurl': 1, 'mudslap': 4, 'rollout': 8, 'glare': 12, 'screech': 16, 'ancientpower': 20, 'drillrun': 24, 'yawn': 28, 'hyperdrill': 32, 'roost': 36, 'dragonrush': 40, 'coil': 44, 'doubleedge': 48, 'endeavor': 52}
  },
  "gligar": {
    "moves": {'poisonsting': 1, 'sandattack': 4, 'harden': 7, 'knockoff': 10, 'quickattack': 13, 'furycutter': 16, 'poisontail': 19, 'acrobatics': 22, 'slash': 27, 'uturn': 30, 'screech': 35, 'xscissor': 40, 'crabhammer': 45, 'swordsdance': 50}
  },
  "steelix": {
    "moves": {'thunderfang': 1, 'icefang': 1, 'firefang': 1, 'mudsport': 1, 'tackle': 1, 'harden': 1, 'bind': 1, 'curse': 4, 'rockthrow': 7, 'rocktomb': 10, 'rage': 13, 'stealthrock': 16, 'autotomize': 19, 'gyroball': 20, 'smackdown': 22, 'dragonbreath': 25, 'slam': 28, 'screech': 31, 'rockslide': 34, 'crunch': 37, 'irontail': 40, 'dig': 43, 'stoneedge': 46, 'doubleedge': 49, 'sandstorm': 52}
  },
  "snubbull": {
    "moves": {'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'tackle': 1, 'scaryface': 1, 'tailwhip': 1, 'growl': 1, 'charm': 1, 'bite': 7, 'lick': 13, 'headbutt': 19, 'roar': 25, 'lastresort': 31, 'playrough': 37, 'payback': 43, 'crunch': 49}
  },
  "granbull": {
    "moves": {'outrage': 1, 'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'tackle': 1, 'scaryface': 1, 'tailwhip': 1, 'growl': 1, 'charm': 1, 'bite': 7, 'lick': 13, 'headbutt': 19, 'roar': 27, 'lastresort': 35, 'playrough': 43, 'payback': 51, 'crunch': 59}
  },
  "qwilfish": {
    "moves": {'poisonsting': 1, 'tackle': 1, 'harden': 4, 'watergun': 8, 'fellstinger': 12, 'minimize': 16, 'spikes': 20, 'brine': 24, 'poisonjab': 28, 'pinmissile': 32, 'toxicspikes': 36, 'stockpile': 40, 'spitup': 40, 'toxic': 44, 'aquatail': 48, 'acupressure': 52, 'destinybond': 56, 'bite': 8, 'barbbarrage': 28, 'crunch': 48}
  },
  "scizor": {
    "moves": {'wingattack': 1, 'agility': 1, 'airslash': 1, 'quickattack': 1, 'leer': 1, 'furycutter': 1, 'falseswipe': 1, 'bulletpunch': 'Evo.', 'metalclaw': 12, 'doubleteam': 16, 'doublehit': 20, 'slash': 24, 'focusenergy': 28, 'irondefense': 32, 'ironhead': 36, 'xscissor': 40, 'swordsdance': 44}
  },
  "shuckle": {
    "moves": {'withdraw': 1, 'wrap': 1, 'rollout': 5, 'strugglebug': 10, 'rockthrow': 15, 'safeguard': 20, 'rest': 25, 'bugbite': 30, 'powersplit': 35, 'guardsplit': 35, 'rockslide': 40, 'gastroacid': 45, 'stickyweb': 50, 'powertrick': 55, 'stoneedge': 60, 'shellsmash': 65}
  },
  "heracross": {
    "moves": {'armthrust': 1, 'tackle': 1, 'leer': 1, 'furyattack': 5, 'endure': 10, 'aerialace': 15, 'hornattack': 20, 'counter': 25, 'brickbreak': 30, 'pinmissile': 35, 'throatchop': 40, 'thrash': 45, 'swordsdance': 50, 'megahorn': 55, 'closecombat': 60}
  },
  "sneasel": {
    "moves": {'scratch': 1, 'leer': 1, 'taunt': 6, 'quickattack': 12, 'metalclaw': 18, 'icywind': 24, 'furyswipes': 30, 'honeclaws': 36, 'beatup': 42, 'agility': 48, 'screech': 54, 'slash': 42, 'rocksmash': 1, 'poisonjab': 24, 'brickbreak': 30, 'closecombat': 60}
  },
  "teddiursa": {
    "moves": {'fling': 1, 'covet': 1, 'scratch': 1, 'babydolleyes': 1, 'lick': 1, 'furyswipes': 8, 'payback': 13, 'sweetscent': 17, 'slash': 22, 'playnice': 25, 'playrough': 29, 'charm': 33, 'rest': 37, 'snore': 37, 'thrash': 41}
  },
  "ursaring": {
    "moves": {'covet': 1, 'scratch': 1, 'leer': 1, 'lick': 1, 'faketears': 1, 'furyswipes': 8, 'payback': 13, 'sweetscent': 17, 'slash': 22, 'playnice': 25, 'playrough': 29, 'scaryface': 35, 'rest': 41, 'snore': 41, 'highhorsepower': 48, 'thrash': 56, 'hammerarm': 64}
  },
  "slugma": {
    "moves": {'smog': 1, 'yawn': 1, 'ember': 6, 'rockthrow': 8, 'harden': 13, 'clearsmog': 20, 'ancientpower': 22, 'incinerate': 27, 'rockslide': 29, 'lavaplume': 34, 'amnesia': 36, 'bodyslam': 41, 'recover': 43, 'flamethrower': 48, 'earthpower': 50}
  },
  "magcargo": {
    "moves": {'ember': 1, 'rockthrow': 1, 'smog': 1, 'yawn': 1, 'earthpower': 1, 'shellsmash': 'Evo.', 'harden': 13, 'clearsmog': 20, 'ancientpower': 22, 'incinerate': 27, 'rockslide': 29, 'lavaplume': 34, 'amnesia': 36, 'bodyslam': 43, 'recover': 47, 'flamethrower': 54}
  },
  "swinub": {
    "moves": {'tackle': 1, 'mudslap': 1, 'powdersnow': 5, 'flail': 10, 'iceshard': 15, 'mist': 20, 'endure': 25, 'icywind': 30, 'amnesia': 35, 'takedown': 40, 'earthquake': 45, 'blizzard': 50}
  },
  "piloswine": {
    "moves": {'ancientpower': 1, 'tackle': 1, 'mudslap': 1, 'powdersnow': 1, 'flail': 1, 'icefang': 'Evo.', 'iceshard': 15, 'mist': 20, 'endure': 25, 'icywind': 30, 'amnesia': 37, 'takedown': 44, 'earthquake': 51, 'blizzard': 58, 'thrash': 65}
  },
  "corsola": {
    "moves": {'tackle': 1, 'harden': 1, 'watergun': 5, 'aquaring': 10, 'endure': 15, 'ancientpower': 20, 'bubblebeam': 25, 'flail': 30, 'lifedew': 35, 'powergem': 40, 'earthpower': 45, 'recover': 50, 'mirrorcoat': 55, 'astonish': 5, 'disable': 10, 'spite': 15, 'hex': 25, 'curse': 30, 'strengthsap': 35, 'nightshade': 45, 'grudge': 50}
  },
  "remoraid": {
    "moves": {'watergun': 1, 'helpinghand': 1, 'waterpulse': 4, 'focusenergy': 8, 'psybeam': 12, 'aurorabeam': 16, 'bubblebeam': 20, 'lockon': 24, 'bulletseed': 28, 'icebeam': 32, 'hydropump': 36, 'soak': 40, 'hyperbeam': 44}
  },
  "octillery": {
    "moves": {'octazooka': 'Evo.', 'gunkshot': 1, 'rockblast': 1, 'helpinghand': 1, 'watergun': 1, 'wrap': 1, 'waterpulse': 1, 'focusenergy': 1, 'psybeam': 12, 'aurorabeam': 16, 'bubblebeam': 20, 'lockon': 24, 'bulletseed': 30, 'icebeam': 36, 'hydropump': 42, 'soak': 48, 'hyperbeam': 54}
  },
  "delibird": {
    "moves": {'present': 1, 'drillpeck': 25}
  },
  "mantine": {
    "moves": {'psybeam': 1, 'bulletseed': 1, 'roost': 1, 'tackle': 1, 'watergun': 1, 'supersonic': 1, 'wingattack': 1, 'waterpulse': 12, 'wideguard': 16, 'agility': 20, 'bubblebeam': 24, 'headbutt': 28, 'airslash': 32, 'aquaring': 36, 'bounce': 40, 'takedown': 44, 'hydropump': 48}
  },
  "skarmory": {
    "moves": {'peck': 1, 'leer': 1, 'sandattack': 4, 'furyattack': 8, 'metalclaw': 12, 'agility': 16, 'wingattack': 20, 'slash': 24, 'steelwing': 28, 'payback': 32, 'drillpeck': 36, 'metalsound': 40, 'spikes': 44, 'irondefense': 48, 'bravebird': 52}
  },
  "houndour": {
    "moves": {'leer': 1, 'ember': 1, 'howl': 4, 'smog': 8, 'roar': 13, 'bite': 16, 'incinerate': 20, 'beatup': 25, 'firefang': 28, 'torment': 32, 'comeuppance': 37, 'foulplay': 40, 'flamethrower': 44, 'crunch': 49, 'nastyplot': 52, 'inferno': 56}
  },
  "houndoom": {
    "moves": {'nastyplot': 1, 'thunderfang': 1, 'leer': 1, 'ember': 1, 'howl': 1, 'smog': 1, 'roar': 13, 'bite': 16, 'incinerate': 20, 'beatup': 26, 'firefang': 30, 'torment': 35, 'comeuppance': 41, 'foulplay': 45, 'flamethrower': 50, 'crunch': 56, 'inferno': 62}
  },
  "kingdra": {
    "moves": {'whirlpool': 1, 'yawn': 1, 'watergun': 1, 'leer': 1, 'smokescreen': 1, 'twister': 1, 'focusenergy': 15, 'dragonbreath': 20, 'bubblebeam': 25, 'agility': 30, 'waterpulse': 37, 'dragonpulse': 44, 'hydropump': 51, 'dragondance': 58, 'raindance': 65, 'wavecrash': 72}
  },
  "phanpy": {
    "moves": {'tackle': 1, 'growl': 1, 'defensecurl': 1, 'flail': 6, 'rollout': 10, 'bulldoze': 15, 'endure': 19, 'slam': 24, 'takedown': 28, 'charm': 33, 'lastresort': 37, 'doubleedge': 42}
  },
  "donphan": {
    "moves": {'firefang': 1, 'thunderfang': 1, 'hornattack': 1, 'bulldoze': 1, 'growl': 1, 'defensecurl': 1, 'furyattack': 'Evo.', 'rapidspin': 6, 'rollout': 10, 'assurance': 15, 'knockoff': 19, 'slam': 24, 'stompingtantrum': 30, 'scaryface': 37, 'earthquake': 43, 'gigaimpact': 50}
  },
  "porygon2": {
    "moves": {'defensecurl': 1, 'tackle': 1, 'conversion': 1, 'recycle': 1, 'magnetrise': 1, 'thundershock': 15, 'psybeam': 20, 'conversion2': 25, 'agility': 30, 'recover': 35, 'discharge': 40, 'triattack': 45, 'lockon': 50, 'zapcannon': 55, 'hyperbeam': 60}
  },
  "stantler": {
    "moves": {'tackle': 1, 'leer': 3, 'astonish': 7, 'hypnosis': 10, 'stomp': 13, 'sandattack': 16, 'takedown': 21, 'confuseray': 23, 'calmmind': 27, 'roleplay': 32, 'zenheadbutt': 37, 'imprison': 49, 'doubleedge': 55}
  },
  "smeargle": {
    "moves": {'sketch': 1}
  },
  "tyrogue": {
    "moves": {'tackle': 1, 'helpinghand': 1, 'fakeout': 1, 'focusenergy': 1}
  },
  "hitmontop": {
    "moves": {'feint': 1, 'tackle': 1, 'helpinghand': 1, 'fakeout': 1, 'focusenergy': 1, 'triplekick': 'Evo.', 'quickattack': 4, 'gyroball': 8, 'detect': 12, 'rapidspin': 16, 'wideguard': 21, 'quickguard': 21, 'suckerpunch': 24, 'agility': 28, 'dig': 32, 'closecombat': 36, 'counter': 40, 'endeavor': 44}
  },
  "smoochum": {
    "moves": {'lick': 1, 'pound': 1, 'powdersnow': 4, 'copycat': 8, 'confusion': 12, 'covet': 16, 'sing': 20, 'faketears': 24, 'icepunch': 28, 'psychic': 32, 'sweetkiss': 36, 'meanlook': 40, 'perishsong': 44, 'blizzard': 48}
  },
  "elekid": {
    "moves": {'quickattack': 1, 'leer': 1, 'thundershock': 4, 'charge': 8, 'swift': 12, 'shockwave': 16, 'thunderwave': 20, 'screech': 24, 'thunderpunch': 28, 'discharge': 32, 'lowkick': 36, 'thunderbolt': 40, 'lightscreen': 44, 'thunder': 48}
  },
  "magby": {
    "moves": {'smog': 1, 'leer': 1, 'ember': 4, 'smokescreen': 8, 'clearsmog': 12, 'flamewheel': 16, 'confuseray': 20, 'scaryface': 24, 'firepunch': 28, 'lavaplume': 32, 'lowkick': 36, 'flamethrower': 40, 'sunnyday': 44, 'fireblast': 48}
  },
  "miltank": {
    "moves": {'tackle': 1, 'growl': 1, 'rollout': 5, 'defensecurl': 10, 'stomp': 15, 'healbell': 20, 'headbutt': 25, 'zenheadbutt': 30, 'milkdrink': 35, 'bodyslam': 40, 'playrough': 45, 'charm': 50, 'highhorsepower': 55}
  },
  "blissey": {
    "moves": {'sweetkiss': 1, 'disarmingvoice': 1, 'covet': 1, 'charm': 1, 'pound': 1, 'copycat': 1, 'defensecurl': 1, 'tailwhip': 4, 'echoedvoice': 8, 'lifedew': 12, 'sing': 16, 'fling': 20, 'takedown': 24, 'healpulse': 28, 'helpinghand': 32, 'lightscreen': 36, 'doubleedge': 40, 'softboiled': 44, 'lastresort': 48, 'healingwish': 52}
  },
  "raikou": {
    "moves": {'extremespeed': 1, 'thundershock': 1, 'leer': 1, 'charge': 1, 'quickattack': 1, 'spark': 6, 'bite': 12, 'calmmind': 18, 'roar': 24, 'thunderfang': 30, 'howl': 36, 'crunch': 42, 'extrasensory': 48, 'discharge': 54, 'reflect': 60, 'raindance': 66, 'thunder': 72, 'zapcannon': 78}
  },
  "entei": {
    "moves": {'ember': 1, 'leer': 1, 'stomp': 1, 'smokescreen': 1, 'sacredfire': 'Rem.', 'extremespeed': 'Rem.', 'flamewheel': 6, 'bite': 12, 'calmmind': 18, 'roar': 24, 'firefang': 30, 'scaryface': 36, 'crunch': 42, 'extrasensory': 48, 'lavaplume': 54, 'swagger': 60, 'sunnyday': 66, 'fireblast': 72, 'eruption': 78}
  },
  "suicune": {
    "moves": {'watergun': 1, 'leer': 1, 'gust': 1, 'mist': 1, 'sheercold': 'Rem.', 'extremespeed': 'Rem.', 'waterpulse': 6, 'bite': 12, 'calmmind': 18, 'roar': 24, 'icefang': 30, 'tailwind': 36, 'crunch': 42, 'extrasensory': 48, 'surf': 54, 'mirrorcoat': 60, 'raindance': 66, 'hydropump': 72, 'blizzard': 78}
  },
  "larvitar": {
    "moves": {'tackle': 1, 'leer': 1, 'rockthrow': 3, 'payback': 6, 'bite': 9, 'scaryface': 12, 'rockslide': 15, 'stompingtantrum': 18, 'screech': 21, 'smackdown': 24, 'crunch': 27, 'earthquake': 31, 'stoneedge': 33, 'thrash': 36, 'sandstorm': 39, 'hyperbeam': 42}
  },
  "pupitar": {
    "moves": {'tackle': 1, 'leer': 1, 'rockthrow': 1, 'payback': 1, 'irondefense': 'Evo.', 'bite': 9, 'scaryface': 12, 'rockslide': 15, 'stompingtantrum': 18, 'screech': 21, 'smackdown': 24, 'crunch': 27, 'earthquake': 33, 'stoneedge': 37, 'thrash': 42, 'sandstorm': 47, 'hyperbeam': 52}
  },
  "tyranitar": {
    "moves": {'irondefense': 1, 'darkpulse': 1, 'thunderfang': 1, 'icefang': 1, 'firefang': 1, 'tackle': 1, 'leer': 1, 'rockthrow': 1, 'payback': 1, 'bite': 9, 'scaryface': 12, 'rockslide': 15, 'stompingtantrum': 18, 'screech': 21, 'smackdown': 24, 'crunch': 27, 'earthquake': 33, 'stoneedge': 37, 'thrash': 42, 'sandstorm': 47, 'hyperbeam': 52, 'gigaimpact': 59}
  },
  "lugia": {
    "moves": {'gust': 1, 'whirlwind': 1, 'weatherball': 1, 'ancientpower': 1, 'dragonrush': 'Rem.', 'mist': 9, 'safeguard': 18, 'calmmind': 27, 'extrasensory': 36, 'recover': 45, 'aeroblast': 54, 'raindance': 63, 'hydropump': 72, 'futuresight': 81, 'skyattack': 90}
  },
  "ho-oh": {
    "moves": {'gust': 1, 'whirlwind': 1, 'weatherball': 1, 'ancientpower': 1, 'lifedew': 9, 'safeguard': 18, 'calmmind': 27, 'extrasensory': 36, 'recover': 45, 'sacredfire': 54, 'sunnyday': 63, 'fireblast': 72, 'futuresight': 81, 'skyattack': 90, 'overheat': 99}
  },
  "celebi": {
    "moves": {'confusion': 1, 'healbell': 1, 'magicalleaf': 10, 'batonpass': 20, 'ancientpower': 30, 'lifedew': 40, 'leechseed': 50, 'recover': 60, 'futuresight': 70, 'healingwish': 80, 'leafstorm': 90, 'perishsong': 100}
  },
  "treecko": {
    "moves": {'pound': 1, 'leer': 1, 'leafage': 3, 'quickattack': 6, 'megadrain': 9, 'detect': 12, 'quickguard': 15, 'assurance': 18, 'gigadrain': 21, 'slam': 24, 'doubleteam': 27, 'energyball': 30, 'screech': 33, 'endeavor': 36, 'leafstorm': 39}
  },
  "grovyle": {
    "moves": {'pound': 1, 'leer': 1, 'leafage': 1, 'quickattack': 1, 'falseswipe': 'Rem.', 'furycutter': 'Rem.', 'xscissor': 'Rem.', 'energyball': 'Rem.', 'megadrain': 9, 'detect': 12, 'quickguard': 15, 'assurance': 20, 'gigadrain': 25, 'slam': 30, 'doubleteam': 35, 'leafblade': 40, 'screech': 45, 'endeavor': 50, 'leafstorm': 55}
  },
  "sceptile": {
    "moves": {'pound': 1, 'leer': 1, 'leafage': 1, 'quickattack': 1, 'falseswipe': 'Rem.', 'furycutter': 'Rem.', 'xscissor': 'Rem.', 'energyball': 'Rem.', 'shedtail': 'Rem.', 'leafblade': 'Evo.', 'megadrain': 5, 'detect': 12, 'quickguard': 15, 'assurance': 20, 'gigadrain': 25, 'slam': 30, 'doubleteam': 35, 'screech': 42, 'endeavor': 49, 'leafstorm': 56}
  },
  "torchic": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 3, 'quickattack': 6, 'flamecharge': 9, 'detect': 12, 'sandattack': 15, 'aerialace': 18, 'slash': 21, 'bounce': 24, 'focusenergy': 27, 'flamethrower': 30, 'featherdance': 33, 'reversal': 36, 'flareblitz': 39}
  },
  "combusken": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 1, 'quickattack': 1, 'flamethrower': 'Rem.', 'featherdance': 'Rem.', 'doublekick': 'Evo.', 'flamecharge': 9, 'detect': 12, 'sandattack': 15, 'aerialace': 20, 'slash': 25, 'bounce': 30, 'focusenergy': 35, 'blazekick': 40, 'bulkup': 45, 'reversal': 50, 'flareblitz': 55}
  },
  "blaziken": {
    "moves": {'doublekick': 1, 'scratch': 1, 'growl': 1, 'quickattack': 1, 'firepunch': 'Rem.', 'ember': 'Rem.', 'flamethrower': 'Rem.', 'featherdance': 'Rem.', 'blazekick': 'Evo.', 'flamecharge': 9, 'detect': 12, 'sandattack': 15, 'aerialace': 20, 'slash': 25, 'bounce': 30, 'focusenergy': 35, 'bulkup': 42, 'reversal': 49, 'flareblitz': 56, 'bravebird': 63}
  },
  "mudkip": {
    "moves": {'tackle': 1, 'growl': 1, 'watergun': 3, 'rocksmash': 6, 'rockthrow': 9, 'protect': 12, 'supersonic': 15, 'waterpulse': 18, 'rockslide': 21, 'takedown': 24, 'amnesia': 27, 'surf': 30, 'screech': 33, 'endeavor': 36, 'hydropump': 39}
  },
  "marshtomp": {
    "moves": {'tackle': 1, 'growl': 1, 'watergun': 1, 'rocksmash': 'Rem.', 'mudshot': 'Evo.', 'rockthrow': 9, 'protect': 12, 'supersonic': 15, 'waterpulse': 20, 'rockslide': 25, 'takedown': 30, 'amnesia': 35, 'muddywater': 40, 'screech': 45, 'endeavor': 50, 'hydropump': 55}
  },
  "swampert": {
    "moves": {'mudshot': 1, 'tackle': 1, 'growl': 1, 'watergun': 1, 'surf': 'Rem.', 'earthquake': 'Rem.', 'rocksmash': 'Rem.', 'hammerarm': 'Rem.', 'rockthrow': 9, 'protect': 12, 'supersonic': 15, 'waterpulse': 20, 'rockslide': 25, 'takedown': 30, 'amnesia': 35, 'muddywater': 42, 'screech': 49, 'endeavor': 56, 'hydropump': 63}
  },
  "poochyena": {
    "moves": {'tackle': 1, 'howl': 4, 'sandattack': 7, 'bite': 10, 'leer': 13, 'roar': 16, 'swagger': 19, 'assurance': 22, 'scaryface': 25, 'taunt': 28, 'crunch': 31, 'yawn': 34, 'takedown': 36, 'suckerpunch': 40, 'playrough': 44}
  },
  "mightyena": {
    "moves": {'firefang': 1, 'icefang': 1, 'thunderfang': 1, 'crunch': 1, 'thief': 1, 'tackle': 1, 'sandattack': 1, 'bite': 1, 'snarl': 'Evo.', 'howl': 13, 'leer': 13, 'roar': 16, 'swagger': 20, 'assurance': 24, 'scaryface': 28, 'taunt': 36, 'yawn': 44, 'takedown': 48, 'suckerpunch': 52, 'playrough': 56}
  },
  "zigzagoon": {
    "moves": {'tackle': 1, 'growl': 1, 'sandattack': 3, 'tailwhip': 6, 'covet': 9, 'headbutt': 12, 'babydolleyes': 15, 'pinmissile': 18, 'rest': 21, 'takedown': 24, 'fling': 27, 'flail': 30, 'bellydrum': 33, 'doubleedge': 36, 'leer': 1, 'lick': 6, 'snarl': 9, 'scaryface': 27, 'counter': 30, 'taunt': 33}
  },
  "linoone": {
    "moves": {'slash': 'Evo.', 'switcheroo': 1, 'pinmissile': 1, 'babydolleyes': 1, 'tackle': 1, 'growl': 1, 'sandattack': 1, 'tailwhip': 1, 'covet': 9, 'headbutt': 12, 'honeclaws': 15, 'furyswipes': 18, 'rest': 23, 'takedown': 28, 'fling': 33, 'flail': 38, 'bellydrum': 43, 'doubleedge': 48, 'nightslash': 'Evo.', 'leer': 1, 'lick': 1, 'snarl': 9, 'scaryface': 33, 'counter': 38, 'taunt': 43}
  },
  "wurmple": {
    "moves": {'tackle': 1, 'stringshot': 1, 'poisonsting': 5, 'bugbite': 15}
  },
  "silcoon": {
    "moves": {'harden': 'Evo.'}
  },
  "beautifly": {
    "moves": {'gust': 'Evo.', 'tackle': 1, 'stringshot': 1, 'harden': 1, 'poisonsting': 1, 'bugbite': 1, 'absorb': 12, 'stunspore': 15, 'morningsun': 17, 'aircutter': 20, 'megadrain': 22, 'leechlife': 25, 'attract': 27, 'whirlwind': 30, 'gigadrain': 32, 'bugbuzz': 35, 'protect': 37, 'quiverdance': 40}
  },
  "cascoon": {
    "moves": {'harden': 'Evo.'}
  },
  "dustox": {
    "moves": {'gust': 'Evo.', 'tackle': 1, 'stringshot': 1, 'harden': 1, 'poisonsting': 1, 'bugbite': 1, 'confusion': 12, 'poisonpowder': 15, 'moonlight': 17, 'venoshock': 20, 'psybeam': 22, 'leechlife': 25, 'lightscreen': 27, 'whirlwind': 30, 'toxic': 32, 'bugbuzz': 35, 'protect': 37, 'quiverdance': 40}
  },
  "lotad": {
    "moves": {'astonish': 1, 'growl': 1, 'absorb': 3, 'watergun': 6, 'mist': 9, 'megadrain': 12, 'flail': 16, 'bubblebeam': 20, 'leechseed': 24, 'gigadrain': 28, 'raindance': 33, 'zenheadbutt': 38, 'energyball': 43}
  },
  "lombre": {
    "moves": {'teeterdance': 1, 'fakeout': 1, 'knockoff': 1, 'flail': 1, 'astonish': 1, 'growl': 1, 'absorb': 1, 'watergun': 1, 'mist': 9, 'megadrain': 12, 'furyswipes': 18, 'bubblebeam': 24, 'leechseed': 30, 'gigadrain': 36, 'zenheadbutt': 50, 'energyball': 57, 'hydropump': 64}
  },
  "ludicolo": {
    "moves": {'fakeout': 1, 'bubblebeam': 1, 'raindance': 1, 'growl': 'Rem.', 'mist': 'Rem.', 'watergun': 'Rem.', 'hydropump': 'Rem.', 'absorb': 'Rem.', 'megadrain': 'Rem.', 'furyswipes': 'Rem.', 'flail': 'Rem.', 'knockoff': 'Rem.', 'teeterdance': 'Rem.', 'astonish': 'Rem.', 'energyball': 'Rem.', 'zenheadbutt': 'Rem.'}
  },
  "seedot": {
    "moves": {'tackle': 1, 'harden': 1, 'absorb': 3, 'astonish': 6, 'growth': 9, 'rollout': 12, 'megadrain': 15, 'payback': 18, 'headbutt': 21, 'sunnyday': 24, 'synthesis': 27, 'suckerpunch': 30, 'explosion': 33}
  },
  "nuzleaf": {
    "moves": {'aircutter': 1, 'torment': 1, 'fakeout': 1, 'swagger': 1, 'explosion': 1, 'tackle': 1, 'harden': 1, 'absorb': 1, 'astonish': 1, 'razorleaf': 'Evo.', 'growth': 9, 'rollout': 12, 'megadrain': 18, 'payback': 24, 'synthesis': 30, 'sunnyday': 36, 'extrasensory': 43, 'suckerpunch': 50, 'leafblade': 57}
  },
  "shiftry": {
    "moves": {'aircutter': 1, 'hurricane': 1, 'payback': 1, 'sunnyday': 1, 'whirlwind': 'Rem.', 'tackle': 'Rem.', 'absorb': 'Rem.', 'megadrain': 'Rem.', 'growth': 'Rem.', 'razorleaf': 'Rem.', 'harden': 'Rem.', 'explosion': 'Rem.', 'rollout': 'Rem.', 'swagger': 'Rem.', 'synthesis': 'Rem.', 'beatup': 'Rem.', 'fakeout': 'Rem.', 'torment': 'Rem.', 'astonish': 'Rem.', 'extrasensory': 'Rem.', 'suckerpunch': 'Rem.', 'leafblade': 'Evo.'}
  },
  "taillow": {
    "moves": {'peck': 1, 'growl': 1, 'focusenergy': 5, 'quickattack': 9, 'wingattack': 13, 'doubleteam': 17, 'aerialace': 21, 'quickguard': 25, 'agility': 29, 'airslash': 33, 'endeavor': 37, 'bravebird': 41, 'reversal': 45}
  },
  "swellow": {
    "moves": {'bravebird': 51, 'airslash': 39, 'pluck': 1, 'peck': 1, 'growl': 1, 'focusenergy': 5, 'quickattack': 9, 'wingattack': 13, 'doubleteam': 17, 'aerialace': 21, 'quickguard': 27, 'agility': 33, 'endeavor': 45, 'reversal': 57}
  },
  "wingull": {
    "moves": {'growl': 1, 'watergun': 1, 'quickattack': 5, 'supersonic': 10, 'wingattack': 15, 'waterpulse': 20, 'agility': 26, 'airslash': 30, 'mist': 35, 'roost': 40, 'hurricane': 45}
  },
  "pelipper": {
    "moves": {'protect': 1, 'soak': 1, 'quickattack': 1, 'agility': 1, 'airslash': 1, 'growl': 1, 'watergun': 1, 'tailwind': 1, 'supersonic': 1, 'wingattack': 15, 'waterpulse': 20, 'stockpile': 28, 'spitup': 28, 'swallow': 28, 'fling': 34, 'mist': 41, 'roost': 48, 'hurricane': 55, 'hydropump': 62}
  },
  "ralts": {
    "moves": {'growl': 1, 'disarmingvoice': 1, 'doubleteam': 3, 'confusion': 6, 'hypnosis': 9, 'drainingkiss': 12, 'teleport': 15, 'psybeam': 18, 'lifedew': 21, 'charm': 24, 'calmmind': 27, 'psychic': 30, 'healpulse': 33, 'dreameater': 36, 'futuresight': 39}
  },
  "kirlia": {
    "moves": {'growl': 1, 'disarmingvoice': 1, 'doubleteam': 1, 'confusion': 1, 'hypnosis': 9, 'drainingkiss': 12, 'teleport': 15, 'psybeam': 18, 'lifedew': 23, 'charm': 28, 'calmmind': 33, 'psychic': 38, 'healpulse': 43, 'dreameater': 48, 'futuresight': 53}
  },
  "gardevoir": {
    "moves": {'mistyterrain': 1, 'healingwish': 1, 'charm': 1, 'mysticalfire': 1, 'healpulse': 1, 'growl': 1, 'disarmingvoice': 1, 'doubleteam': 1, 'confusion': 1, 'dazzlinggleam': 'Evo.', 'hypnosis': 9, 'drainingkiss': 12, 'teleport': 15, 'psybeam': 18, 'lifedew': 23, 'wish': 28, 'calmmind': 35, 'psychic': 42, 'moonblast': 49, 'dreameater': 56, 'futuresight': 63}
  },
  "surskit": {
    "moves": {'watergun': 1, 'quickattack': 6, 'sweetscent': 9, 'soak': 14, 'bubblebeam': 17, 'agility': 22, 'mist': 25, 'haze': 25, 'batonpass': 35, 'stickyweb': 38}
  },
  "masquerain": {
    "moves": {'whirlwind': 1, 'watergun': 1, 'quickattack': 1, 'sweetscent': 1, 'soak': 1, 'gust': 17, 'scaryface': 22, 'aircutter': 22, 'stunspore': 26, 'airslash': 32, 'gigadrain': 38, 'bugbuzz': 44, 'quiverdance': 52}
  },
  "shroomish": {
    "moves": {'absorb': 1, 'tackle': 1, 'stunspore': 5, 'leechseed': 8, 'megadrain': 12, 'headbutt': 15, 'poisonpowder': 19, 'gigadrain': 26, 'growth': 29, 'toxic': 33, 'seedbomb': 36, 'spore': 40}
  },
  "breloom": {
    "moves": {'poisonpowder': 1, 'growth': 1, 'toxic': 1, 'absorb': 1, 'tackle': 1, 'stunspore': 1, 'leechseed': 1, 'spore': 'Rem.', 'machpunch': 'Evo.', 'megadrain': 12, 'headbutt': 15, 'feint': 19, 'counter': 22, 'forcepalm': 28, 'worryseed': 33, 'brickbreak': 39, 'seedbomb': 44, 'dynamicpunch': 50, 'focuspunch': 55}
  },
  "slakoth": {
    "moves": {'scratch': 1, 'yawn': 1, 'encore': 6, 'slackoff': 9, 'headbutt': 14, 'amnesia': 17, 'covet': 22, 'throatchop': 25, 'counter': 30, 'flail': 33, 'playrough': 38}
  },
  "vigoroth": {
    "moves": {'scratch': 1, 'focusenergy': 1, 'encore': 1, 'uproar': 1, 'furyswipes': 14, 'endure': 17, 'slash': 23, 'throatchop': 27, 'counter': 33, 'focuspunch': 37, 'reversal': 43}
  },
  "slaking": {
    "moves": {'suckerpunch': 1, 'scratch': 1, 'yawn': 1, 'encore': 1, 'slackoff': 1, 'swagger': 'Evo.', 'amnesia': 17, 'covet': 23, 'throatchop': 27, 'counter': 33, 'flail': 39, 'fling': 45, 'megakick': 52, 'hammerarm': 63}
  },
  "nincada": {
    "moves": {'sandattack': 1, 'scratch': 1, 'harden': 5, 'falseswipe': 10, 'mudslap': 15, 'absorb': 21, 'metalclaw': 25, 'furyswipes': 30, 'mindreader': 35, 'dig': 40}
  },
  "ninjask": {
    "moves": {'doubleteam': 'Evo.', 'screech': 'Evo.', 'furycutter': 'Evo.', 'batonpass': 1, 'aerialace': 1, 'mudslap': 1, 'metalclaw': 1, 'dig': 1, 'sandattack': 1, 'scratch': 1, 'harden': 1, 'falseswipe': 1, 'agility': 15, 'absorb': 23, 'bugbite': 29, 'furyswipes': 36, 'mindreader': 43, 'slash': 50, 'swordsdance': 57, 'xscissor': 64}
  },
  "shedinja": {
    "moves": {'shadowclaw': 1, 'grudge': 1, 'mudslap': 1, 'metalclaw': 1, 'dig': 1, 'scratch': 1, 'sandattack': 1, 'harden': 1, 'falseswipe': 1, 'confuseray': 15, 'absorb': 23, 'shadowsneak': 29, 'furyswipes': 36, 'mindreader': 43, 'shadowball': 50, 'spite': 57, 'phantomforce': 64}
  },
  "whismur": {
    "moves": {'astonish': 1, 'pound': 1, 'echoedvoice': 5, 'howl': 10, 'rest': 15, 'sleeptalk': 15, 'stomp': 21, 'roar': 25, 'supersonic': 30, 'uproar': 35, 'screech': 40, 'hypervoice': 45}
  },
  "loudred": {
    "moves": {'bite': 'Evo.', 'astonish': 1, 'pound': 1, 'echoedvoice': 1, 'howl': 1, 'rest': 15, 'sleeptalk': 15, 'stomp': 23, 'roar': 29, 'supersonic': 36, 'uproar': 43, 'screech': 50, 'hypervoice': 57}
  },
  "exploud": {
    "moves": {'crunch': 'Evo.', 'bite': 1, 'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'astonish': 1, 'pound': 1, 'echoedvoice': 1, 'howl': 1, 'rest': 15, 'sleeptalk': 15, 'stomp': 23, 'roar': 29, 'supersonic': 36, 'uproar': 45, 'screech': 54, 'hypervoice': 63, 'boomburst': 72, 'hyperbeam': 81}
  },
  "makuhita": {
    "moves": {'tackle': 1, 'focusenergy': 1, 'sandattack': 4, 'armthrust': 7, 'fakeout': 10, 'forcepalm': 13, 'whirlwind': 16, 'knockoff': 19, 'bulkup': 22, 'bellydrum': 25, 'detect': 28, 'seismictoss': 31, 'focuspunch': 34, 'endure': 37, 'closecombat': 40, 'reversal': 43, 'heavyslam': 46}
  },
  "hariyama": {
    "moves": {'brine': 1, 'tackle': 1, 'focusenergy': 1, 'sandattack': 1, 'armthrust': 1, 'fakeout': 10, 'forcepalm': 13, 'whirlwind': 16, 'knockoff': 19, 'bulkup': 22, 'bellydrum': 26, 'detect': 30, 'seismictoss': 34, 'focuspunch': 38, 'endure': 42, 'closecombat': 46, 'reversal': 50, 'heavyslam': 54, 'headlongrush': 60}
  },
  "azurill": {
    "moves": {'splash': 1, 'watergun': 1, 'tailwhip': 1, 'helpinghand': 3, 'bubblebeam': 6, 'charm': 9, 'slam': 12, 'bounce': 15}
  },
  "nosepass": {
    "moves": {'tackle': 1, 'harden': 4, 'block': 7, 'rockthrow': 10, 'thunderwave': 13, 'rest': 16, 'spark': 19, 'rockslide': 22, 'powergem': 25, 'rockblast': 28, 'discharge': 31, 'sandstorm': 34, 'earthpower': 37, 'stoneedge': 40, 'lockon': 43, 'zapcannon': 43}
  },
  "skitty": {
    "moves": {'fakeout': 1, 'growl': 1, 'tailwhip': 1, 'tackle': 4, 'sing': 7, 'attract': 10, 'disarmingvoice': 13, 'furyswipes': 16, 'copycat': 19, 'payback': 22, 'charm': 25, 'facade': 31, 'covet': 34, 'healbell': 37, 'doubleedge': 40, 'babydolleyes': 43, 'playrough': 46}
  },
  "delcatty": {
    "moves": {'fakeout': 1, 'sing': 1, 'disarmingvoice': 1, 'furyswipes': 1, 'copycat': 1, 'payback': 1, 'charm': 1, 'facade': 1, 'covet': 1, 'healbell': 1, 'doubleedge': 1, 'babydolleyes': 1, 'playrough': 1, 'attract': 1, 'growl': 1, 'tailwhip': 1, 'tackle': 1}
  },
  "sableye": {
    "moves": {'leer': 1, 'scratch': 1, 'astonish': 3, 'shadowsneak': 9, 'fakeout': 12, 'disable': 15, 'detect': 18, 'nightshade': 21, 'furyswipes': 24, 'knockoff': 27, 'quash': 30, 'shadowclaw': 33, 'meanlook': 36, 'powergem': 39, 'zenheadbutt': 42, 'shadowball': 45, 'foulplay': 48}
  },
  "mawile": {
    "moves": {'playrough': 49, 'ironhead': 45, 'taunt': 1, 'growl': 1, 'fairywind': 1, 'astonish': 1, 'faketears': 5, 'bite': 9, 'sweetscent': 13, 'vicegrip': 17, 'feintattack': 21, 'batonpass': 25, 'crunch': 29, 'irondefense': 33, 'suckerpunch': 37, 'stockpile': 41, 'swallow': 41, 'spitup': 41}
  },
  "aron": {
    "moves": {'tackle': 1, 'harden': 1, 'mudslap': 4, 'headbutt': 7, 'metalclaw': 10, 'rocktomb': 13, 'protect': 16, 'roar': 19, 'ironhead': 22, 'rockslide': 25, 'takedown': 28, 'metalsound': 31, 'irontail': 34, 'irondefense': 37, 'doubleedge': 40, 'autotomize': 43, 'heavyslam': 46, 'metalburst': 49}
  },
  "lairon": {
    "moves": {'tackle': 1, 'harden': 1, 'mudslap': 4, 'headbutt': 7, 'metalclaw': 10, 'rocktomb': 13, 'protect': 16, 'roar': 19, 'ironhead': 22, 'rockslide': 25, 'takedown': 28, 'metalsound': 31, 'irontail': 35, 'irondefense': 39, 'doubleedge': 43, 'autotomize': 47, 'heavyslam': 51, 'metalburst': 55}
  },
  "aggron": {
    "moves": {'tackle': 1, 'harden': 1, 'mudslap': 4, 'headbutt': 7, 'metalclaw': 10, 'rocktomb': 13, 'protect': 16, 'roar': 19, 'ironhead': 22, 'rockslide': 25, 'takedown': 28, 'metalsound': 31, 'irontail': 35, 'irondefense': 39, 'doubleedge': 45, 'autotomize': 51, 'heavyslam': 57, 'metalburst': 63}
  },
  "meditite": {
    "moves": {'confusion': 1, 'workup': 1, 'detect': 9, 'endure': 12, 'feint': 15, 'forcepalm': 17, 'psybeam': 20, 'calmmind': 23, 'zenheadbutt': 25, 'highjumpkick': 28, 'psychup': 31, 'acupressure': 33, 'powertrick': 36, 'reversal': 39, 'recover': 41, 'counter': 44}
  },
  "medicham": {
    "moves": {'firepunch': 1, 'thunderpunch': 1, 'icepunch': 1, 'confusion': 1, 'workup': 1, 'detect': 1, 'endure': 12, 'feint': 15, 'forcepalm': 17, 'psybeam': 20, 'calmmind': 23, 'zenheadbutt': 25, 'highjumpkick': 28, 'psychup': 31, 'acupressure': 33, 'powertrick': 36, 'recover': 47, 'counter': 53, 'axekick': 53}
  },
  "electrike": {
    "moves": {'tackle': 1, 'thunderwave': 1, 'leer': 4, 'howl': 7, 'quickattack': 10, 'spark': 13, 'odorsleuth': 16, 'thunderfang': 19, 'bite': 24, 'discharge': 29, 'roar': 34, 'wildcharge': 39, 'charge': 44, 'thunder': 49}
  },
  "manectric": {
    "moves": {'electricterrain': 60, 'firefang': 1, 'tackle': 1, 'thunderwave': 1, 'leer': 4, 'howl': 7, 'quickattack': 10, 'spark': 13, 'odorsleuth': 16, 'thunderfang': 19, 'bite': 24, 'discharge': 30, 'roar': 36, 'wildcharge': 42, 'charge': 48, 'thunder': 54}
  },
  "plusle": {
    "moves": {'playnice': 1, 'growl': 1, 'thunderwave': 1, 'quickattack': 1, 'nuzzle': 'Rem.', 'helpinghand': 4, 'spark': 7, 'encore': 10, 'switcheroo': 13, 'swift': 16, 'electroball': 19, 'copycat': 22, 'charge': 26, 'discharge': 31, 'batonpass': 34, 'agility': 37, 'lastresort': 40, 'thunder': 43, 'nastyplot': 46, 'entrainment': 49}
  },
  "minun": {
    "moves": {'playnice': 1, 'growl': 1, 'thunderwave': 1, 'quickattack': 1, 'nuzzle': 'Rem.', 'helpinghand': 4, 'spark': 7, 'encore': 10, 'switcheroo': 13, 'swift': 16, 'electroball': 19, 'copycat': 22, 'charge': 26, 'discharge': 31, 'batonpass': 34, 'agility': 37, 'lastresort': 40, 'thunder': 43, 'nastyplot': 46, 'entrainment': 49}
  },
  "volbeat": {
    "moves": {'tackle': 1, 'doubleteam': 5, 'confuseray': 8, 'quickattack': 12, 'strugglebug': 15, 'moonlight': 19, 'tailglow': 22, 'protect': 26, 'zenheadbutt': 29, 'helpinghand': 33, 'bugbuzz': 36, 'playrough': 40, 'doubleedge': 43, 'infestation': 47}
  },
  "illumise": {
    "moves": {'tackle': 1, 'playnice': 1, 'sweetscent': 5, 'charm': 9, 'quickattack': 12, 'strugglebug': 15, 'moonlight': 19, 'wish': 22, 'encore': 26, 'flatter': 29, 'zenheadbutt': 33, 'helpinghand': 36, 'bugbuzz': 40, 'playrough': 43, 'infestation': 47}
  },
  "roselia": {
    "moves": {'absorb': 1, 'growth': 4, 'poisonsting': 7, 'stunspore': 10, 'megadrain': 13, 'leechseed': 16, 'magicalleaf': 19, 'grasswhistle': 22, 'gigadrain': 25, 'toxicspikes': 28, 'sweetscent': 31, 'ingrain': 34, 'petalblizzard': 37, 'toxic': 40, 'aromatherapy': 43, 'synthesis': 46, 'petaldance': 50}
  },
  "gulpin": {
    "moves": {'pound': 1, 'yawn': 5, 'poisongas': 8, 'sludge': 10, 'amnesia': 12, 'acidspray': 17, 'encore': 20, 'toxic': 25, 'stockpile': 28, 'spitup': 28, 'swallow': 28, 'sludgebomb': 33, 'gastroacid': 36, 'belch': 41, 'painsplit': 44, 'gunkshot': 49}
  },
  "swalot": {
    "moves": {'gunkshot': 1, 'pound': 1, 'yawn': 1, 'poisongas': 1, 'sludge': 1, 'bodyslam': 'Evo.', 'amnesia': 12, 'acidspray': 17, 'encore': 20, 'toxic': 25, 'stockpile': 30, 'spitup': 30, 'swallow': 30, 'sludgebomb': 37, 'gastroacid': 42, 'belch': 49}
  },
  "carvanha": {
    "moves": {'leer': 1, 'bite': 1, 'rage': 4, 'focusenergy': 8, 'aquajet': 11, 'assurance': 15, 'screech': 18, 'swagger': 22, 'icefang': 25, 'scaryface': 29, 'poisonfang': 32, 'crunch': 36, 'agility': 39, 'takedown': 43}
  },
  "sharpedo": {
    "moves": {'slash': 'Evo.', 'nightslash': 62, 'feint': 1, 'leer': 1, 'bite': 1, 'rage': 4, 'focusenergy': 8, 'aquajet': 11, 'assurance': 15, 'screech': 18, 'swagger': 22, 'icefang': 25, 'scaryface': 29, 'poisonfang': 34, 'crunch': 40, 'agility': 45, 'skullbash': 51, 'taunt': 56}
  },
  "wailmer": {
    "moves": {'splash': 1, 'growl': 3, 'astonish': 6, 'watergun': 12, 'mist': 15, 'waterpulse': 18, 'heavyslam': 21, 'brine': 24, 'whirlpool': 27, 'dive': 30, 'bounce': 33, 'bodyslam': 36, 'rest': 39, 'amnesia': 42, 'hydropump': 45, 'waterspout': 48}
  },
  "wailord": {
    "moves": {'soak': 1, 'nobleroar': 1, 'splash': 1, 'growl': 1, 'astonish': 1, 'watergun': 1, 'mist': 15, 'waterpulse': 18, 'heavyslam': 21, 'brine': 24, 'whirlpool': 27, 'dive': 30, 'bounce': 33, 'bodyslam': 36, 'rest': 39, 'amnesia': 44, 'hydropump': 49, 'waterspout': 54}
  },
  "numel": {
    "moves": {'growl': 1, 'tackle': 1, 'ember': 5, 'focusenergy': 8, 'bulldoze': 12, 'incinerate': 15, 'amnesia': 19, 'lavaplume': 22, 'earthpower': 26, 'curse': 29, 'takedown': 31, 'earthquake': 40, 'flamethrower': 43, 'doubleedge': 47}
  },
  "camerupt": {
    "moves": {'fissure': 1, 'eruption': 1, 'growl': 1, 'tackle': 1, 'ember': 1, 'focusenergy': 1, 'rockslide': 'Evo.', 'bulldoze': 12, 'incinerate': 15, 'amnesia': 19, 'lavaplume': 22, 'earthpower': 26, 'curse': 29, 'takedown': 31, 'yawn': 39, 'earthquake': 46}
  },
  "torkoal": {
    "moves": {'smog': 1, 'ember': 1, 'withdraw': 4, 'rapidspin': 8, 'smokescreen': 12, 'clearsmog': 16, 'flamewheel': 20, 'protect': 24, 'lavaplume': 28, 'bodyslam': 32, 'irondefense': 36, 'flamethrower': 40, 'curse': 44, 'heatwave': 48, 'amnesia': 52, 'inferno': 56, 'shellsmash': 60, 'eruption': 64}
  },
  "spoink": {
    "moves": {'splash': 1, 'confusion': 7, 'growl': 10, 'psybeam': 14, 'psychup': 18, 'confuseray': 22, 'powergem': 29, 'rest': 29, 'snore': 33, 'psyshock': 38, 'payback': 40, 'psychic': 44, 'bounce': 50}
  },
  "grumpig": {
    "moves": {'belch': 1, 'splash': 1, 'confusion': 1, 'psybeam': 1, 'teeterdance': 'Evo.', 'psychup': 18, 'confuseray': 22, 'zenheadbutt': 26, 'powergem': 29, 'rest': 35, 'snore': 35, 'psyshock': 42, 'payback': 46, 'psychic': 52, 'bounce': 60}
  },
  "spinda": {
    "moves": {'tackle': 1, 'copycat': 5, 'teeterdance': 32, 'psybeam': 14, 'hypnosis': 19, 'bodyslam': 23, 'suckerpunch': 28, 'uproar': 37, 'psychup': 41, 'doubleedge': 46, 'flail': 50, 'thrash': 55}
  },
  "trapinch": {
    "moves": {'sandattack': 1, 'astonish': 1, 'bite': 8, 'mudslap': 12, 'sandtomb': 16, 'bulldoze': 20, 'dig': 24, 'crunch': 28, 'sandstorm': 32, 'earthpower': 36, 'earthquake': 40, 'superpower': 44, 'fissure': 48}
  },
  "vibrava": {
    "moves": {'dig': 1, 'sandattack': 1, 'bite': 1, 'supersonic': 'Rem.', 'fissure': 'Rem.', 'crunch': 'Rem.', 'superpower': 'Rem.', 'astonish': 'Rem.', 'bulldoze': 'Rem.', 'dragonbreath': 'Evo.', 'mudslap': 12, 'sandtomb': 16, 'dragontail': 20, 'screech': 24, 'bugbuzz': 28, 'sandstorm': 32, 'earthpower': 38, 'earthquake': 44, 'uproar': 50, 'dragonrush': 56, 'boomburst': 62}
  },
  "flygon": {
    "moves": {'dragonbreath': 1, 'bulldoze': 1, 'sandattack': 1, 'supersonic': 1, 'bite': 'Rem.', 'fissure': 'Rem.', 'dig': 'Rem.', 'crunch': 'Rem.', 'superpower': 'Rem.', 'astonish': 'Rem.', 'dragondance': 'Rem.', 'feint': 'Rem.', 'dragonclaw': 'Evo.', 'mudslap': 12, 'sandtomb': 16, 'dragontail': 20, 'screech': 24, 'bugbuzz': 28, 'sandstorm': 32, 'earthpower': 38, 'earthquake': 44, 'uproar': 52, 'dragonrush': 60, 'boomburst': 68}
  },
  "cacnea": {
    "moves": {'poisonsting': 1, 'leer': 1, 'absorb': 4, 'growth': 7, 'leechseed': 10, 'sandattack': 13, 'bulletseed': 16, 'powertrip': 19, 'ingrain': 22, 'payback': 26, 'spikes': 30, 'suckerpunch': 34, 'pinmissile': 38, 'energyball': 42, 'cottonspore': 46, 'sandstorm': 50, 'destinybond': 54}
  },
  "cacturne": {
    "moves": {'destinybond': 1, 'poisonsting': 1, 'leer': 1, 'absorb': 1, 'growth': 1, 'spikyshield': 'Evo.', 'leechseed': 10, 'sandattack': 13, 'bulletseed': 16, 'powertrip': 19, 'ingrain': 22, 'payback': 26, 'spikes': 30, 'suckerpunch': 35, 'pinmissile': 38, 'energyball': 44, 'cottonspore': 49, 'sandstorm': 54}
  },
  "swablu": {
    "moves": {'peck': 1, 'growl': 1, 'disarmingvoice': 4, 'mist': 8, 'furyattack': 12, 'round': 16, 'dragonbreath': 20, 'safeguard': 24, 'sing': 28, 'cottonguard': 32, 'takedown': 36, 'moonblast': 40, 'perishsong': 44}
  },
  "altaria": {
    "moves": {'pluck': 1, 'peck': 1, 'growl': 1, 'disarmingvoice': 1, 'mist': 1, 'dragonpulse': 'Evo.', 'furyattack': 12, 'round': 16, 'dragonbreath': 20, 'safeguard': 24, 'sing': 28, 'cottonguard': 32, 'takedown': 38, 'moonblast': 44, 'perishsong': 50, 'skyattack': 56}
  },
  "zangoose": {
    "moves": {'scratch': 1, 'leer': 1, 'doublekick': 'Rem.', 'disable': 'Rem.', 'counter': 'Rem.', 'furyswipes': 'Rem.', 'curse': 'Rem.', 'flail': 'Rem.', 'bellydrum': 'Rem.', 'feint': 'Rem.', 'nightslash': 'Rem.', 'doublehit': 'Rem.', 'quickguard': 'Rem.', 'finalgambit': 'Rem.', 'quickattack': 5, 'furycutter': 8, 'metalclaw': 12, 'honeclaws': 15, 'slash': 19, 'powertrip': 22, 'crushclaw': 26, 'falseswipe': 29, 'switcheroo': 33, 'detect': 36, 'xscissor': 40, 'taunt': 43, 'swordsdance': 47, 'closecombat': 50}
  },
  "seviper": {
    "moves": {'wrap': 1, 'swagger': 1, 'bite': 4, 'lick': 6, 'poisontail': 9, 'feint': 11, 'screech': 14, 'glare': 19, 'poisonfang': 21, 'venoshock': 24, 'gastroacid': 29, 'poisonjab': 31, 'haze': 34, 'crunch': 39, 'belch': 41, 'coil': 44, 'sludgebomb': 46}
  },
  "lunatone": {
    "moves": {'moonblast': 1, 'moonlight': 1, 'tackle': 1, 'harden': 1, 'confusion': 1, 'rockthrow': 1, 'hypnosis': 5, 'rockpolish': 10, 'rockslide': 15, 'psyshock': 20, 'cosmicpower': 25, 'psychic': 30, 'stoneedge': 35, 'futuresight': 40, 'magicroom': 45, 'explosion': 50}
  },
  "solrock": {
    "moves": {'flareblitz': 1, 'morningsun': 1, 'tackle': 1, 'harden': 1, 'confusion': 1, 'rockthrow': 1, 'hypnosis': 5, 'rockpolish': 10, 'rockslide': 15, 'zenheadbutt': 20, 'cosmicpower': 25, 'psychic': 30, 'stoneedge': 35, 'solarbeam': 40, 'wonderroom': 45, 'explosion': 50}
  },
  "barboach": {
    "moves": {'mudslap': 1, 'watergun': 1, 'rest': 6, 'snore': 6, 'waterpulse': 12, 'amnesia': 18, 'aquatail': 24, 'muddywater': 31, 'earthquake': 36, 'futuresight': 42, 'fissure': 48}
  },
  "whiscash": {
    "moves": {'belch': 1, 'zenheadbutt': 1, 'tickle': 1, 'mudslap': 1, 'watergun': 1, 'rest': 1, 'snore': 1, 'thrash': 'Evo.', 'waterpulse': 12, 'amnesia': 18, 'aquatail': 24, 'muddywater': 33, 'earthquake': 40, 'futuresight': 48, 'fissure': 56}
  },
  "corphish": {
    "moves": {'watergun': 1, 'harden': 1, 'leer': 4, 'taunt': 8, 'bubblebeam': 12, 'knockoff': 16, 'doublehit': 20, 'protect': 24, 'nightslash': 28, 'razorshell': 32, 'swordsdance': 36, 'crunch': 40, 'crabhammer': 44, 'endeavor': 48, 'guillotine': 52}
  },
  "crawdaunt": {
    "moves": {'watergun': 1, 'harden': 1, 'leer': 1, 'taunt': 1, 'swift': 'Evo.', 'bubblebeam': 12, 'knockoff': 16, 'doublehit': 20, 'protect': 24, 'nightslash': 28, 'razorshell': 34, 'swordsdance': 40, 'crunch': 46, 'crabhammer': 52, 'endeavor': 58, 'guillotine': 64}
  },
  "baltoy": {
    "moves": {'harden': 1, 'mudslap': 1, 'rapidspin': 3, 'confusion': 6, 'rocktomb': 9, 'powertrick': 12, 'psybeam': 15, 'ancientpower': 18, 'imprison': 21, 'cosmicpower': 24, 'extrasensory': 27, 'earthpower': 30, 'selfdestruct': 33, 'guardsplit': 36, 'powersplit': 36, 'sandstorm': 39, 'explosion': 42}
  },
  "claydol": {
    "moves": {'hyperbeam': 'Evo.', 'teleport': 1, 'harden': 1, 'mudslap': 1, 'rapidspin': 1, 'confusion': 1, 'rocktomb': 9, 'powertrick': 12, 'psybeam': 15, 'ancientpower': 18, 'imprison': 21, 'cosmicpower': 24, 'extrasensory': 27, 'earthpower': 30, 'selfdestruct': 33, 'guardsplit': 38, 'powersplit': 38, 'sandstorm': 43, 'explosion': 48}
  },
  "lileep": {
    "moves": {'wrap': 1, 'astonish': 1, 'acid': 4, 'confuseray': 8, 'ingrain': 12, 'ancientpower': 16, 'megadrain': 20, 'brine': 24, 'amnesia': 28, 'gastroacid': 32, 'gigadrain': 36, 'stockpile': 41, 'spitup': 41, 'swallow': 41, 'energyball': 44}
  },
  "cradily": {
    "moves": {'leechseed': 1, 'wrap': 1, 'astonish': 1, 'acid': 1, 'confuseray': 1, 'ingrain': 12, 'ancientpower': 16, 'megadrain': 20, 'brine': 24, 'amnesia': 28, 'gastroacid': 32, 'gigadrain': 36, 'stockpile': 43, 'spitup': 43, 'swallow': 43, 'energyball': 48}
  },
  "anorith": {
    "moves": {'furycutter': 1, 'harden': 1, 'watergun': 4, 'smackdown': 8, 'metalclaw': 12, 'ancientpower': 16, 'bugbite': 20, 'brine': 24, 'slash': 28, 'crushclaw': 32, 'rockblast': 36, 'protect': 41, 'xscissor': 44}
  },
  "armaldo": {
    "moves": {'furycutter': 1, 'harden': 1, 'watergun': 1, 'smackdown': 1, 'metalclaw': 12, 'ancientpower': 16, 'bugbite': 20, 'brine': 24, 'slash': 28, 'crushclaw': 32, 'rockblast': 36, 'protect': 43, 'xscissor': 48}
  },
  "feebas": {
    "moves": {'splash': 1, 'tackle': 15, 'flail': 25}
  },
  "milotic": {
    "moves": {'flail': 1, 'splash': 1, 'tackle': 1, 'wrap': 1, 'watergun': 1, 'waterpulse': 'Evo.', 'disarmingvoice': 4, 'twister': 8, 'aquaring': 12, 'attract': 16, 'lifedew': 20, 'dragontail': 24, 'recover': 28, 'aquatail': 32, 'safeguard': 36, 'surf': 40, 'raindance': 44, 'coil': 48, 'hydropump': 52}
  },
  "castform": {
    "moves": {'tackle': 1, 'watergun': 10, 'ember': 10, 'powdersnow': 10, 'headbutt': 15, 'raindance': 20, 'sunnyday': 20, 'hail': 20, 'weatherball': 25, 'hydropump': 35, 'fireblast': 35, 'blizzard': 35, 'hurricane': 45}
  },
  "kecleon": {
    "moves": {'thief': 1, 'tailwhip': 1, 'astonish': 1, 'lick': 1, 'scratch': 1, 'bind': 4, 'shadowsneak': 7, 'feint': 10, 'furyswipes': 13, 'disable': 16, 'psybeam': 18, 'ancientpower': 21, 'slash': 25, 'detect': 30, 'shadowclaw': 33, 'screech': 38, 'substitute': 42, 'suckerpunch': 46, 'foulplay': 50}
  },
  "shuppet": {
    "moves": {'astonish': 1, 'screech': 4, 'nightshade': 7, 'spite': 10, 'willowisp': 16, 'shadowsneak': 19, 'hex': 22, 'curse': 26, 'shadowball': 30, 'roleplay': 34, 'suckerpunch': 38, 'trick': 42, 'phantomforce': 48}
  },
  "banette": {
    "moves": {'screech': 1, 'nightshade': 1, 'spite': 1, 'knockoff': 'Evo.', 'willowisp': 16, 'shadowsneak': 19, 'hex': 22, 'curse': 26, 'shadowball': 30, 'roleplay': 34, 'suckerpunch': 40, 'trick': 46, 'phantomforce': 53}
  },
  "duskull": {
    "moves": {'astonish': 1, 'leer': 1, 'disable': 4, 'shadowsneak': 8, 'confuseray': 12, 'nightshade': 16, 'payback': 20, 'willowisp': 24, 'meanlook': 28, 'hex': 32, 'curse': 36, 'shadowball': 40, 'futuresight': 44}
  },
  "dusclops": {
    "moves": {'firepunch': 1, 'icepunch': 1, 'thunderpunch': 1, 'gravity': 1, 'bind': 1, 'astonish': 1, 'leer': 1, 'disable': 1, 'shadowsneak': 1, 'shadowpunch': 'Evo.', 'confuseray': 12, 'nightshade': 16, 'payback': 20, 'willowisp': 24, 'meanlook': 28, 'hex': 32, 'curse': 36, 'shadowball': 42, 'futuresight': 48}
  },
  "tropius": {
    "moves": {'leafstorm': 1, 'gust': 1, 'leer': 1, 'growth': 1, 'razorleaf': 1, 'sweetscent': 6, 'stomp': 10, 'magicalleaf': 16, 'whirlwind': 21, 'wideguard': 30, 'airslash': 36, 'bodyslam': 41, 'outrage': 46, 'synthesis': 50, 'solarbeam': 56}
  },
  "chimecho": {
    "moves": {'healingwish': 1, 'wrap': 1, 'growl': 1, 'astonish': 1, 'confusion': 1, 'yawn': 13, 'storedpower': 16, 'takedown': 19, 'extrasensory': 22, 'healbell': 27, 'uproar': 32, 'safeguard': 37, 'doubleedge': 42, 'healpulse': 47}
  },
  "absol": {
    "moves": {'perishsong': 57, 'futuresight': 53, 'scratch': 1, 'feint': 1, 'leer': 4, 'quickattack': 7, 'pursuit': 10, 'taunt': 13, 'bite': 16, 'doubleteam': 19, 'slash': 22, 'swordsdance': 25, 'nightslash': 29, 'detect': 33, 'psychocut': 37, 'mefirst': 41, 'suckerpunch': 45, 'razorwind': 49}
  },
  "wynaut": {
    "moves": {'counter': 1, 'mirrorcoat': 1, 'safeguard': 1, 'destinybond': 1, 'splash': 1, 'charm': 1, 'encore': 1, 'amnesia': 1}
  },
  "snorunt": {
    "moves": {'powdersnow': 1, 'astonish': 1, 'headbutt': 1, 'leer': 5, 'doubleteam': 10, 'iceshard': 15, 'protect': 20, 'icywind': 25, 'frostbreath': 30, 'bite': 35, 'icefang': 40, 'snowscape': 45, 'weatherball': 50, 'crunch': 55, 'blizzard': 60}
  },
  "glalie": {
    "moves": {'sheercold': 1, 'powdersnow': 1, 'astonish': 1, 'headbutt': 1, 'leer': 1, 'doubleteam': 1, 'freezedry': 'Evo.', 'iceshard': 15, 'protect': 20, 'icywind': 25, 'frostbreath': 30, 'bite': 35, 'icefang': 40, 'snowscape': 47, 'weatherball': 54, 'crunch': 61, 'blizzard': 68}
  },
  "spheal": {
    "moves": {'rollout': 1, 'defensecurl': 1, 'growl': 4, 'watergun': 8, 'powdersnow': 12, 'rest': 16, 'snore': 20, 'brine': 24, 'aurorabeam': 28, 'encore': 33, 'bodyslam': 36, 'surf': 40, 'blizzard': 44, 'hail': 48, 'sheercold': 52}
  },
  "sealeo": {
    "moves": {'swagger': 'Evo.', 'rollout': 1, 'defensecurl': 1, 'growl': 1, 'watergun': 1, 'powdersnow': 12, 'rest': 16, 'snore': 20, 'brine': 24, 'aurorabeam': 28, 'encore': 35, 'bodyslam': 40, 'surf': 46, 'blizzard': 52, 'hail': 58, 'sheercold': 64}
  },
  "walrein": {
    "moves": {'swagger': 1, 'crunch': 1, 'icefang': 1, 'rollout': 1, 'defensecurl': 1, 'growl': 1, 'watergun': 1, 'powdersnow': 12, 'rest': 16, 'snore': 20, 'brine': 24, 'aurorabeam': 28, 'encore': 35, 'bodyslam': 40, 'surf': 48, 'blizzard': 56, 'hail': 64, 'sheercold': 72}
  },
  "clamperl": {
    "moves": {'watergun': 1, 'whirlpool': 1, 'irondefense': 1, 'shellsmash': 50}
  },
  "huntail": {
    "moves": {'watergun': 1, 'irondefense': 1, 'shellsmash': 1, 'whirlpool': 1, 'bite': 1, 'screech': 5, 'scaryface': 9, 'raindance': 11, 'waterpulse': 14, 'icefang': 16, 'brine': 19, 'suckerpunch': 23, 'dive': 26, 'batonpass': 29, 'crunch': 34, 'aquatail': 39, 'coil': 45, 'hydropump': 50}
  },
  "gorebyss": {
    "moves": {'watergun': 1, 'irondefense': 1, 'shellsmash': 1, 'whirlpool': 1, 'confusion': 1, 'raindance': 5, 'agility': 9, 'drainingkiss': 11, 'waterpulse': 14, 'amnesia': 16, 'aquaring': 19, 'safeguard': 23, 'dive': 26, 'batonpass': 29, 'psychic': 34, 'aquatail': 39, 'coil': 45, 'hydropump': 50}
  },
  "relicanth": {
    "moves": {'tackle': 1, 'harden': 1, 'watergun': 5, 'ancientpower': 10, 'yawn': 15, 'dive': 20, 'takedown': 25, 'aquatail': 30, 'rest': 35, 'flail': 40, 'hydropump': 45, 'doubleedge': 50, 'headsmash': 55}
  },
  "luvdisc": {
    "moves": {'tackle': 1, 'charm': 1, 'watergun': 4, 'agility': 7, 'wish': 13, 'waterpulse': 17, 'attract': 20, 'drainingkiss': 22, 'flail': 26, 'sweetkiss': 31, 'takedown': 34, 'babydolleyes': 37, 'aquaring': 40, 'soak': 42, 'hydropump': 46, 'safeguard': 49}
  },
  "bagon": {
    "moves": {'ember': 1, 'leer': 1, 'bite': 5, 'dragonbreath': 10, 'headbutt': 15, 'scaryface': 20, 'crunch': 25, 'dragonclaw': 31, 'zenheadbutt': 35, 'focusenergy': 40, 'flamethrower': 45, 'outrage': 50, 'doubleedge': 55}
  },
  "shelgon": {
    "moves": {'ember': 1, 'leer': 1, 'bite': 1, 'dragonbreath': 1, 'protect': 'Evo.', 'headbutt': 15, 'scaryface': 20, 'crunch': 25, 'dragonclaw': 33, 'zenheadbutt': 39, 'focusenergy': 46, 'flamethrower': 53, 'outrage': 60, 'doubleedge': 67}
  },
  "salamence": {
    "moves": {'protect': 1, 'dragontail': 1, 'dualwingbeat': 1, 'roost': 1, 'ember': 1, 'leer': 1, 'bite': 1, 'dragonbreath': 1, 'fly': 'Evo.', 'headbutt': 15, 'scaryface': 20, 'crunch': 25, 'dragonclaw': 33, 'zenheadbutt': 39, 'focusenergy': 46, 'flamethrower': 55, 'doubleedge': 73}
  },
  "beldum": {
    "moves": {'tackle': 1}
  },
  "metang": {
    "moves": {'tackle': 1, 'bulletpunch': 1, 'honeclaws': 1, 'confusion': 'Evo.', 'metalclaw': 'Evo.', 'zenheadbutt': 6, 'magnetrise': 12, 'flashcannon': 18, 'takedown': 26, 'psychic': 34, 'scaryface': 42, 'meteormash': 50, 'irondefense': 58, 'agility': 66, 'hyperbeam': 74}
  },
  "metagross": {
    "moves": {'confusion': 1, 'metalclaw': 1, 'bulletpunch': 1, 'tackle': 1, 'explosion': 'Rem.', 'honeclaws': 'Rem.', 'hammerarm': 'Evo.', 'zenheadbutt': 6, 'magnetrise': 12, 'flashcannon': 16, 'takedown': 26, 'psychic': 34, 'scaryface': 42, 'meteormash': 52, 'irondefense': 62, 'agility': 72, 'hyperbeam': 82}
  },
  "regirock": {
    "moves": {'chargebeam': 1, 'rockthrow': 1, 'bulldoze': 6, 'ancientpower': 12, 'stomp': 18, 'rockslide': 24, 'curse': 30, 'irondefense': 36, 'hammerarm': 42, 'stoneedge': 48, 'superpower': 54, 'lockon': 60, 'zapcannon': 66, 'hyperbeam': 72, 'explosion': 78}
  },
  "regice": {
    "moves": {'chargebeam': 1, 'icywind': 1, 'bulldoze': 6, 'ancientpower': 12, 'stomp': 18, 'icebeam': 24, 'curse': 30, 'amnesia': 36, 'hammerarm': 42, 'blizzard': 48, 'superpower': 54, 'lockon': 60, 'zapcannon': 66, 'hyperbeam': 72, 'explosion': 78}
  },
  "registeel": {
    "moves": {'chargebeam': 1, 'metalclaw': 1, 'bulldoze': 6, 'ancientpower': 12, 'stomp': 18, 'ironhead': 24, 'flashcannon': 24, 'curse': 30, 'irondefense': 36, 'amnesia': 36, 'hammerarm': 42, 'heavyslam': 48, 'superpower': 54, 'lockon': 60, 'zapcannon': 66, 'hyperbeam': 72, 'explosion': 78}
  },
  "latias": {
    "moves": {'storedpower': 1, 'charm': 1, 'helpinghand': 5, 'recover': 10, 'confusion': 15, 'tailwind': 20, 'dragonbreath': 25, 'wish': 30, 'mistball': 35, 'zenheadbutt': 40, 'dragonpulse': 45, 'healpulse': 50, 'reflecttype': 55, 'psychic': 60, 'guardsplit': 65, 'healingwish': 70}
  },
  "latios": {
    "moves": {'storedpower': 1, 'dragondance': 1, 'helpinghand': 5, 'recover': 10, 'confusion': 15, 'tailwind': 20, 'dragonbreath': 25, 'allyswitch': 30, 'lusterpurge': 35, 'zenheadbutt': 40, 'dragonpulse': 45, 'healpulse': 50, 'simplebeam': 55, 'psychic': 60, 'powersplit': 65, 'memento': 70}
  },
  "kyogre": {
    "moves": {'originpulse': 1, 'waterpulse': 1, 'ancientpower': 1, 'bodyslam': 1, 'scaryface': 1, 'aquatail': 9, 'calmmind': 18, 'muddywater': 27, 'icebeam': 36, 'sheercold': 45, 'aquaring': 54, 'hydropump': 72, 'doubleedge': 81, 'waterspout': 90}
  },
  "groudon": {
    "moves": {'precipiceblades': 1, 'mudshot': 1, 'ancientpower': 1, 'lavaplume': 1, 'scaryface': 1, 'earthpower': 9, 'bulkup': 18, 'earthquake': 27, 'hammerarm': 36, 'fissure': 45, 'rest': 54, 'fireblast': 72, 'solarbeam': 81, 'eruption': 90}
  },
  "rayquaza": {
    "moves": {'dragonascent': 1, 'twister': 1, 'ancientpower': 1, 'airslash': 1, 'scaryface': 1, 'crunch': 9, 'dragondance': 18, 'extremespeed': 27, 'dragonpulse': 36, 'hypervoice': 45, 'rest': 54, 'fly': 63, 'hurricane': 72, 'outrage': 81, 'hyperbeam': 90}
  },
  "jirachi": {
    "moves": {'confusion': 1, 'wish': 1, 'swift': 7, 'lifedew': 21, 'zenheadbutt': 28, 'gravity': 35, 'psychic': 42, 'meteormash': 49, 'healingwish': 56, 'rest': 63, 'futuresight': 70, 'doubleedge': 77, 'cosmicpower': 84, 'lastresort': 91, 'doomdesire': 98}
  },
  "deoxys": {
    "moves": {'leer': 1, 'wrap': 1, 'nightshade': 7, 'teleport': 13, 'knockoff': 19, 'psyshock': 25, 'psychic': 31, 'gravity': 37, 'skillswap': 43, 'zenheadbutt': 49, 'cosmicpower': 55, 'recover': 61, 'psychoboost': 67, 'hyperbeam': 73, 'taunt': 19, 'superpower': 37, 'zapcannon': 61, 'spikes': 25, 'protect': 37, 'irondefense': 55, 'amnesia': 55, 'counter': 73, 'mirrorcoat': 73, 'doubleteam': 13, 'swift': 37, 'agility': 55, 'extremespeed': 73}
  },
  "turtwig": {
    "moves": {'tackle': 1, 'withdraw': 5, 'absorb': 9, 'razorleaf': 13, 'curse': 17, 'bite': 21, 'megadrain': 25, 'leechseed': 29, 'synthesis': 33, 'crunch': 37, 'gigadrain': 41, 'leafstorm': 45}
  },
  "grotle": {
    "moves": {'tackle': 1, 'withdraw': 1, 'absorb': 1, 'razorleaf': 13, 'curse': 17, 'bite': 22, 'megadrain': 27, 'leechseed': 32, 'synthesis': 37, 'crunch': 42, 'gigadrain': 47, 'leafstorm': 52}
  },
  "torterra": {
    "moves": {'woodhammer': 1, 'tackle': 1, 'withdraw': 1, 'absorb': 1, 'razorleaf': 1, 'earthquake': 'Evo.', 'curse': 17, 'bite': 22, 'megadrain': 27, 'leechseed': 33, 'synthesis': 39, 'crunch': 45, 'gigadrain': 51, 'leafstorm': 57, 'headlongrush': 63}
  },
  "chimchar": {
    "moves": {'scratch': 1, 'leer': 1, 'ember': 7, 'taunt': 9, 'furyswipes': 15, 'flamewheel': 17, 'nastyplot': 23, 'torment': 25, 'facade': 31, 'firespin': 33, 'acrobatics': 39, 'slackoff': 41, 'flamethrower': 47}
  },
  "monferno": {
    "moves": {'scratch': 1, 'leer': 1, 'ember': 1, 'machpunch': 'Evo.', 'taunt': 9, 'furyswipes': 16, 'flamewheel': 19, 'feint': 26, 'torment': 29, 'closecombat': 36, 'firespin': 39, 'acrobatics': 46, 'slackoff': 49, 'flareblitz': 56}
  },
  "infernape": {
    "moves": {'machpunch': 1, 'scratch': 1, 'leer': 1, 'ember': 1, 'taunt': 'Rem.', 'slackoff': 'Rem.', 'closecombat': 'Evo.', 'furyswipes': 16, 'flamewheel': 19, 'feint': 26, 'torment': 29, 'firespin': 42, 'flareblitz': 47, 'acrobatics': 52, 'calmmind': 58, 'ragingfury': 65}
  },
  "piplup": {
    "moves": {'pound': 1, 'growl': 4, 'watergun': 8, 'charm': 11, 'peck': 15, 'bubblebeam': 18, 'swagger': 22, 'furyattack': 25, 'brine': 29, 'whirlpool': 32, 'mist': 36, 'drillpeck': 39, 'hydropump': 43}
  },
  "prinplup": {
    "moves": {'tackle': 1, 'growl': 1, 'watergun': 1, 'metalclaw': 'Evo.', 'peck': 15, 'bubblebeam': 19, 'swagger': 24, 'furyattack': 28, 'brine': 33, 'whirlpool': 37, 'mist': 42, 'drillpeck': 46, 'hydropump': 50}
  },
  "empoleon": {
    "moves": {'metalclaw': 1, 'tackle': 1, 'growl': 1, 'watergun': 1, 'aquajet': 'Evo.', 'swordsdance': 11, 'peck': 15, 'bubblebeam': 19, 'swagger': 24, 'furyattack': 28, 'brine': 33, 'whirlpool': 39, 'mist': 46, 'drillpeck': 52, 'hydropump': 59, 'wavecrash': 66}
  },
  "starly": {
    "moves": {'tackle': 1, 'growl': 1, 'quickattack': 5, 'wingattack': 9, 'doubleteam': 13, 'endeavor': 17, 'whirlwind': 21, 'aerialace': 25, 'takedown': 29, 'agility': 33, 'bravebird': 37, 'finalgambit': 41}
  },
  "staravia": {
    "moves": {'tackle': 1, 'growl': 1, 'quickattack': 1, 'wingattack': 9, 'doubleteam': 13, 'endeavor': 18, 'whirlwind': 23, 'aerialace': 28, 'takedown': 33, 'agility': 38, 'bravebird': 43, 'finalgambit': 48}
  },
  "staraptor": {
    "moves": {'tackle': 1, 'growl': 1, 'quickattack': 1, 'wingattack': 1, 'closecombat': 'Evo.', 'doubleteam': 13, 'endeavor': 18, 'whirlwind': 23, 'aerialace': 28, 'takedown': 33, 'agility': 41, 'bravebird': 49, 'finalgambit': 57}
  },
  "bidoof": {
    "moves": {'tackle': 1, 'growl': 1, 'defensecurl': 5, 'rollout': 9, 'headbutt': 13, 'taunt': 17, 'yawn': 21, 'crunch': 25, 'takedown': 29, 'superfang': 33, 'swordsdance': 37, 'amnesia': 41, 'superpower': 45, 'curse': 49}
  },
  "bibarel": {
    "moves": {'watergun': 'Evo.', 'aquajet': 1, 'tackle': 1, 'growl': 1, 'defensecurl': 5, 'rollout': 9, 'headbutt': 13, 'taunt': 18, 'yawn': 23, 'crunch': 28, 'takedown': 33, 'superfang': 38, 'swordsdance': 43, 'amnesia': 48, 'superpower': 53, 'curse': 58}
  },
  "kricketot": {
    "moves": {'growl': 1, 'tackle': 1, 'strugglebug': 6, 'bugbite': 16}
  },
  "kricketune": {
    "moves": {'growl': 1, 'tackle': 1, 'furycutter': 'Evo.', 'absorb': 14, 'sing': 18, 'focusenergy': 22, 'slash': 26, 'xscissor': 30, 'screech': 34, 'fellstinger': 36, 'taunt': 38, 'nightslash': 42, 'stickyweb': 44, 'bugbuzz': 46, 'perishsong': 50}
  },
  "shinx": {
    "moves": {'tackle': 1, 'leer': 1, 'thundershock': 4, 'charge': 8, 'bite': 12, 'spark': 16, 'roar': 20, 'voltswitch': 24, 'scaryface': 28, 'thunderwave': 32, 'crunch': 36, 'discharge': 40, 'swagger': 44, 'wildcharge': 48}
  },
  "luxio": {
    "moves": {'tackle': 1, 'leer': 1, 'thundershock': 1, 'charge': 1, 'bite': 12, 'spark': 18, 'roar': 24, 'voltswitch': 31, 'scaryface': 36, 'thunderwave': 42, 'crunch': 48, 'discharge': 54, 'swagger': 60, 'wildcharge': 68}
  },
  "luxray": {
    "moves": {'electricterrain': 1, 'tackle': 1, 'leer': 1, 'thundershock': 1, 'charge': 1, 'bite': 12, 'spark': 18, 'roar': 24, 'voltswitch': 33, 'scaryface': 40, 'thunderwave': 48, 'crunch': 56, 'discharge': 64, 'swagger': 72, 'wildcharge': 80}
  },
  "budew": {
    "moves": {'absorb': 1, 'growth': 4, 'watersport': 7, 'stunspore': 10, 'megadrain': 13, 'worryseed': 16}
  },
  "roserade": {
    "moves": {'venomdrench': 1, 'grassyterrain': 1, 'weatherball': 1, 'poisonsting': 1, 'megadrain': 1, 'magicalleaf': 1, 'sweetscent': 1}
  },
  "cranidos": {
    "moves": {'headbutt': 1, 'leer': 1, 'focusenergy': 6, 'rocksmash': 10, 'takedown': 15, 'scaryface': 19, 'assurance': 24, 'slam': 28, 'ancientpower': 33, 'zenheadbutt': 37, 'screech': 42, 'headsmash': 46}
  },
  "rampardos": {
    "moves": {'headbutt': 1, 'leer': 1, 'focusenergy': 1, 'endeavor': 'Evo.', 'rocksmash': 10, 'takedown': 15, 'scaryface': 19, 'assurance': 24, 'slam': 28, 'ancientpower': 36, 'zenheadbutt': 43, 'screech': 51, 'headsmash': 58}
  },
  "shieldon": {
    "moves": {'tackle': 1, 'protect': 1, 'taunt': 6, 'metalsound': 10, 'takedown': 15, 'irondefense': 19, 'swagger': 24, 'ancientpower': 28, 'endure': 33, 'metalburst': 37, 'ironhead': 42, 'heavyslam': 46}
  },
  "bastiodon": {
    "moves": {'tackle': 1, 'protect': 1, 'taunt': 1, 'metalsound': 1, 'wideguard': 'Rem.', 'block': 'Evo.', 'takedown': 15, 'irondefense': 19, 'swagger': 24, 'ancientpower': 28, 'endure': 36, 'metalburst': 43, 'ironhead': 51, 'heavyslam': 58}
  },
  "burmy": {
    "moves": {'protect': 1, 'tackle': 10, 'bugbite': 15, 'stringshot': 20}
  },
  "wormadam": {
    "moves": {'quiverdance': 'Evo.', 'suckerpunch': 1, 'tackle': 1, 'protect': 10, 'bugbite': 15, 'stringshot': 20, 'confusion': 23, 'razorleaf': 26, 'growth': 29, 'psybeam': 32, 'infestation': 35, 'flail': 38, 'attract': 41, 'psychic': 44, 'leafstorm': 47, 'bugbuzz': 50, 'rockblast': 26, 'harden': 29, 'fissure': 47, 'metalburst': 26, 'metalsound': 29, 'ironhead': 47}
  },
  "mothim": {
    "moves": {'quiverdance': 'Evo.', 'tackle': 1, 'protect': 10, 'bugbite': 15, 'stringshot': 20, 'confusion': 23, 'gust': 26, 'poisonpowder': 29, 'psybeam': 32, 'roost': 35, 'strugglebug': 38, 'airslash': 41, 'psychic': 44, 'lunge': 47, 'bugbuzz': 50}
  },
  "combee": {
    "moves": {'sweetscent': 1, 'gust': 1, 'strugglebug': 1, 'bugbite': 1}
  },
  "vespiquen": {
    "moves": {'strugglebug': 1, 'bugbite': 1, 'sweetscent': 1, 'gust': 1, 'poisonsting': 1, 'confuseray': 1, 'slash': 'Evo.', 'furycutter': 4, 'aromaticmist': 8, 'fellstinger': 12, 'furyswipes': 16, 'swagger': 20, 'roost': 24, 'airslash': 28, 'powergem': 32, 'toxic': 36, 'attackorder': 40, 'defendorder': 40, 'destinybond': 44}
  },
  "pachirisu": {
    "moves": {'growl': 1, 'thundershock': 1, 'quickattack': 5, 'charm': 9, 'spark': 13, 'endure': 17, 'nuzzle': 19, 'swift': 21, 'electroball': 25, 'sweetkiss': 29, 'thunderwave': 33, 'superfang': 37, 'discharge': 41, 'lastresort': 45, 'thunder': 49}
  },
  "buizel": {
    "moves": {'tackle': 1, 'growl': 4, 'soak': 7, 'quickattack': 11, 'watergun': 15, 'bite': 18, 'swift': 21, 'aquajet': 24, 'doublehit': 27, 'whirlpool': 31, 'liquidation': 35, 'aquatail': 38, 'agility': 41, 'hydropump': 45, 'wavecrash': 49}
  },
  "floatzel": {
    "moves": {'icefang': 1, 'crunch': 1, 'growl': 1, 'soak': 1, 'quickattack': 1, 'watergun': 15, 'bite': 18, 'swift': 21, 'aquajet': 24, 'doublehit': 29, 'whirlpool': 35, 'liquidation': 41, 'aquatail': 46, 'agility': 51, 'hydropump': 57, 'wavecrash': 62}
  },
  "cherubi": {
    "moves": {'morningsun': 1, 'tackle': 1, 'leafage': 5, 'growth': 10, 'helpinghand': 15, 'magicalleaf': 20, 'leechseed': 26, 'takedown': 30, 'petalblizzard': 35, 'worryseed': 40, 'solarbeam': 45}
  },
  "cherrim": {
    "moves": {'sunnyday': 'Evo.', 'flowershield': 1, 'morningsun': 1, 'tackle': 1, 'leafage': 1, 'growth': 1, 'helpinghand': 15, 'magicalleaf': 20, 'leechseed': 28, 'takedown': 34, 'petalblizzard': 41, 'worryseed': 48, 'solarbeam': 55, 'petaldance': 62}
  },
  "shellos": {
    "moves": {'watergun': 1, 'mudslap': 1, 'harden': 5, 'recover': 10, 'waterpulse': 15, 'ancientpower': 20, 'bodyslam': 25, 'muddywater': 31, 'earthpower': 35, 'raindance': 40, 'memento': 45}
  },
  "gastrodon": {
    "moves": {'watergun': 1, 'mudslap': 1, 'harden': 1, 'recover': 1, 'waterpulse': 15, 'ancientpower': 20, 'bodyslam': 25, 'muddywater': 33, 'earthpower': 39, 'raindance': 46, 'memento': 53}
  },
  "ambipom": {
    "moves": {'scratch': 1, 'sandattack': 1, 'tailwhip': 1, 'astonish': 1, 'batonpass': 11, 'tickle': 15, 'furyswipes': 18, 'swift': 22, 'screech': 25, 'agility': 29, 'doublehit': 32, 'fling': 36, 'nastyplot': 39, 'lastresort': 43}
  },
  "drifloon": {
    "moves": {'minimize': 1, 'astonish': 1, 'gust': 4, 'focusenergy': 8, 'payback': 12, 'hex': 16, 'shadowball': 20, 'stockpile': 24, 'spitup': 24, 'swallow': 24, 'selfdestruct': 29, 'destinybond': 32, 'batonpass': 36, 'tailwind': 40, 'explosion': 44}
  },
  "drifblim": {
    "moves": {'strengthsap': 1, 'minimize': 1, 'astonish': 1, 'gust': 1, 'focusenergy': 1, 'phantomforce': 'Evo.', 'payback': 12, 'hex': 16, 'shadowball': 20, 'spitup': 24, 'swallow': 24, 'stockpile': 24, 'selfdestruct': 31, 'destinybond': 36, 'batonpass': 42, 'tailwind': 48, 'explosion': 54}
  },
  "buneary": {
    "moves": {'frustration': 1, 'defensecurl': 1, 'splash': 1, 'pound': 1, 'foresight': 1, 'endure': 6, 'babydolleyes': 13, 'quickattack': 16, 'jumpkick': 23, 'batonpass': 26, 'agility': 33, 'dizzypunch': 36, 'afteryou': 43, 'charm': 46, 'entrainment': 50, 'bounce': 56, 'healingwish': 63}
  },
  "lopunny": {
    "moves": {'return': 'Evo.', 'healingwish': 63, 'bounce': 56, 'rototiller': 1, 'mirrorcoat': 1, 'magiccoat': 1, 'defensecurl': 1, 'splash': 1, 'pound': 1, 'foresight': 1, 'endure': 6, 'babydolleyes': 13, 'quickattack': 16, 'jumpkick': 23, 'batonpass': 26, 'agility': 33, 'dizzypunch': 36, 'afteryou': 43, 'charm': 46, 'entrainment': 53, 'highjumpkick': 66}
  },
  "mismagius": {
    "moves": {'mysticalfire': 1, 'powergem': 1, 'phantomforce': 1, 'magicalleaf': 1, 'growl': 1, 'spite': 1, 'astonish': 1}
  },
  "honchkrow": {
    "moves": {'nightslash': 1, 'suckerpunch': 1, 'astonish': 1, 'haze': 1, 'wingattack': 1, 'quash': 1, 'swagger': 25, 'nastyplot': 35, 'foulplay': 45, 'darkpulse': 55, 'comeuppance': 65}
  },
  "glameow": {
    "moves": {'fakeout': 1, 'scratch': 5, 'growl': 8, 'hypnosis': 13, 'aerialace': 17, 'furyswipes': 20, 'charm': 25, 'taunt': 29, 'retaliate': 32, 'slash': 37, 'suckerpunch': 41, 'attract': 44, 'honeclaws': 48, 'playrough': 50}
  },
  "purugly": {
    "moves": {'swagger': 'Evo.', 'fakeout': 1, 'scratch': 5, 'growl': 8, 'suckerpunch': 1, 'playrough': 1, 'hypnosis': 13, 'aerialace': 17, 'furyswipes': 20, 'charm': 25, 'taunt': 29, 'retaliate': 32, 'slash': 37, 'bodyslam': 45, 'attract': 52, 'honeclaws': 60}
  },
  "chingling": {
    "moves": {'wrap': 1, 'growl': 4, 'astonish': 7, 'confusion': 10, 'yawn': 13, 'lastresort': 16, 'entrainment': 19, 'uproar': 32}
  },
  "stunky": {
    "moves": {'poisongas': 1, 'scratch': 1, 'feint': 3, 'smokescreen': 6, 'acidspray': 9, 'furyswipes': 12, 'focusenergy': 15, 'bite': 18, 'venoshock': 21, 'screech': 24, 'toxic': 27, 'suckerpunch': 30, 'memento': 33, 'nightslash': 36, 'belch': 39, 'explosion': 42}
  },
  "skuntank": {
    "moves": {'poisongas': 1, 'scratch': 1, 'feint': 1, 'smokescreen': 1, 'flamethrower': 'Evo.', 'furyswipes': 12, 'focusenergy': 15, 'bite': 18, 'venoshock': 21, 'screech': 24, 'toxic': 27, 'suckerpunch': 30, 'memento': 33, 'nightslash': 38, 'belch': 43, 'explosion': 48}
  },
  "bronzor": {
    "moves": {'tackle': 1, 'confusion': 1, 'confuseray': 4, 'payback': 8, 'imprison': 12, 'gyroball': 16, 'hypnosis': 20, 'safeguard': 24, 'extrasensory': 28, 'heavyslam': 32, 'irondefense': 36, 'metalsound': 40, 'futuresight': 44}
  },
  "bronzong": {
    "moves": {'sunnyday': 1, 'weatherball': 1, 'tackle': 1, 'confusion': 1, 'confuseray': 1, 'payback': 1, 'block': 'Evo.', 'imprison': 12, 'gyroball': 16, 'hypnosis': 20, 'safeguard': 24, 'extrasensory': 28, 'heavyslam': 32, 'irondefense': 38, 'metalsound': 44, 'futuresight': 50, 'raindance': 56}
  },
  "bonsly": {
    "moves": {'faketears': 1, 'copycat': 1, 'flail': 4, 'rockthrow': 8, 'block': 12, 'mimic': 16, 'rocktomb': 20, 'tearfullook': 24, 'suckerpunch': 28, 'rockslide': 32, 'lowkick': 36, 'counter': 40, 'doubleedge': 44}
  },
  "mimejr.": {
    "moves": {'pound': 1, 'copycat': 1, 'batonpass': 4, 'encore': 8, 'confusion': 12, 'roleplay': 16, 'protect': 20, 'recycle': 24, 'psybeam': 28, 'mimic': 32, 'lightscreen': 36, 'reflect': 36, 'safeguard': 36, 'suckerpunch': 40, 'dazzlinggleam': 44, 'psychic': 48, 'teeterdance': 52}
  },
  "happiny": {
    "moves": {'pound': 1, 'copycat': 1, 'defensecurl': 4, 'sweetkiss': 8, 'disarmingvoice': 12, 'covet': 16, 'charm': 20}
  },
  "chatot": {
    "moves": {'hypervoice': 57, 'chatter': 21, 'confide': 1, 'taunt': 25, 'peck': 5, 'growl': 9, 'sing': 13, 'furyattack': 17, 'round': 29, 'mimic': 33, 'echoedvoice': 37, 'roost': 41, 'uproar': 45, 'partingshot': 49, 'featherdance': 50}
  },
  "spiritomb": {
    "moves": {'nightshade': 1, 'confuseray': 1, 'shadowsneak': 5, 'spite': 10, 'payback': 15, 'nastyplot': 20, 'hex': 25, 'memento': 30, 'suckerpunch': 35, 'curse': 40, 'shadowball': 45, 'darkpulse': 50, 'hypnosis': 55, 'dreameater': 60}
  },
  "gible": {
    "moves": {'sandtomb': 1, 'tackle': 1, 'sandattack': 6, 'dragonbreath': 12, 'bulldoze': 18, 'bite': 25, 'slash': 30, 'dragonclaw': 36, 'dig': 42, 'sandstorm': 48, 'takedown': 54, 'dragonrush': 60}
  },
  "gabite": {
    "moves": {'sandtomb': 1, 'tackle': 1, 'sandattack': 1, 'dragonbreath': 1, 'bulldoze': 18, 'bite': 27, 'slash': 34, 'dragonclaw': 42, 'dig': 50, 'sandstorm': 58, 'takedown': 66, 'dragonrush': 74}
  },
  "garchomp": {
    "moves": {'sandtomb': 1, 'tackle': 1, 'sandattack': 1, 'dragonbreath': 1, 'crunch': 'Evo.', 'bulldoze': 18, 'bite': 27, 'slash': 34, 'dragonclaw': 42, 'dig': 52, 'sandstorm': 62, 'takedown': 72, 'dragonrush': 82}
  },
  "munchlax": {
    "moves": {'lick': 1, 'tackle': 1, 'defensecurl': 4, 'recycle': 8, 'covet': 12, 'bite': 16, 'stockpile': 20, 'swallow': 20, 'screech': 24, 'bodyslam': 28, 'fling': 32, 'amnesia': 36, 'metronome': 40, 'flail': 44, 'bellydrum': 48, 'lastresort': 52}
  },
  "riolu": {
    "moves": {'quickattack': 1, 'endure': 1, 'feint': 4, 'metalclaw': 8, 'counter': 12, 'workup': 16, 'rocksmash': 20, 'vacuumwave': 24, 'screech': 28, 'quickguard': 32, 'forcepalm': 36, 'swordsdance': 40, 'helpinghand': 44, 'copycat': 48, 'finalgambit': 52, 'reversal': 56}
  },
  "lucario": {
    "moves": {'lifedew': 1, 'rocksmash': 1, 'vacuumwave': 1, 'screech': 1, 'helpinghand': 1, 'copycat': 1, 'finalgambit': 1, 'reversal': 1, 'quickattack': 1, 'detect': 1, 'feint': 1, 'metalclaw': 1, 'aurasphere': 'Evo.', 'counter': 12, 'workup': 16, 'forcepalm': 20, 'calmmind': 24, 'metalsound': 28, 'quickguard': 32, 'bonerush': 36, 'swordsdance': 40, 'healpulse': 44, 'meteormash': 48, 'dragonpulse': 52, 'extremespeed': 56, 'closecombat': 60}
  },
  "hippopotas": {
    "moves": {'tackle': 1, 'sandattack': 1, 'bite': 4, 'yawn': 8, 'sandtomb': 12, 'dig': 16, 'crunch': 20, 'sandstorm': 24, 'takedown': 28, 'roar': 32, 'rest': 36, 'earthquake': 40, 'doubleedge': 44, 'fissure': 48, 'slackoff': 52}
  },
  "hippowdon": {
    "moves": {'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'tackle': 1, 'sandattack': 1, 'bite': 1, 'yawn': 1, 'sandtomb': 12, 'dig': 16, 'crunch': 20, 'sandstorm': 24, 'takedown': 28, 'roar': 32, 'rest': 38, 'earthquake': 44, 'doubleedge': 50, 'fissure': 56, 'slackoff': 62}
  },
  "skorupi": {
    "moves": {'poisonsting': 1, 'leer': 1, 'honeclaws': 3, 'fellstinger': 6, 'poisonfang': 9, 'bite': 12, 'toxicspikes': 15, 'bugbite': 18, 'venoshock': 21, 'knockoff': 24, 'scaryface': 27, 'pinmissile': 30, 'toxic': 33, 'nightslash': 36, 'crosspoison': 39, 'xscissor': 42, 'acupressure': 45, 'crunch': 48}
  },
  "drapion": {
    "moves": {'thunderfang': 1, 'icefang': 1, 'firefang': 1, 'poisonsting': 1, 'leer': 1, 'honeclaws': 1, 'fellstinger': 1, 'poisonfang': 9, 'bite': 12, 'toxicspikes': 15, 'bugbite': 18, 'venoshock': 21, 'knockoff': 24, 'scaryface': 27, 'pinmissile': 30, 'toxic': 33, 'nightslash': 36, 'crosspoison': 39, 'xscissor': 44, 'acupressure': 49, 'crunch': 54}
  },
  "croagunk": {
    "moves": {'poisonsting': 1, 'mudslap': 1, 'astonish': 4, 'taunt': 8, 'flatter': 12, 'lowkick': 16, 'venoshock': 20, 'suckerpunch': 24, 'swagger': 28, 'poisonjab': 32, 'toxic': 36, 'nastyplot': 40, 'sludgebomb': 44, 'belch': 48}
  },
  "toxicroak": {
    "moves": {'poisonsting': 1, 'mudslap': 1, 'taunt': 1, 'astonish': 1, 'flatter': 12, 'lowkick': 16, 'venoshock': 20, 'suckerpunch': 24, 'swagger': 28, 'poisonjab': 32, 'toxic': 36, 'nastyplot': 42, 'sludgebomb': 48, 'belch': 54}
  },
  "carnivine": {
    "moves": {'bind': 1, 'growth': 1, 'bite': 7, 'vinewhip': 11, 'sweetscent': 17, 'ingrain': 21, 'grassknot': 27, 'leaftornado': 31, 'stockpile': 37, 'spitup': 37, 'swallow': 37, 'crunch': 41, 'seedbomb': 47, 'powerwhip': 50}
  },
  "finneon": {
    "moves": {'pound': 1, 'watergun': 6, 'raindance': 13, 'gust': 17, 'waterpulse': 22, 'attract': 26, 'safeguard': 29, 'aquaring': 33, 'whirlpool': 38, 'uturn': 42, 'bounce': 45, 'tailwind': 49, 'soak': 54}
  },
  "lumineon": {
    "moves": {'soak': 1, 'gust': 1, 'pound': 1, 'watergun': 1, 'raindance': 13, 'waterpulse': 22, 'attract': 26, 'safeguard': 29, 'aquaring': 35, 'whirlpool': 42, 'uturn': 48, 'bounce': 53, 'tailwind': 59}
  },
  "mantyke": {
    "moves": {'tackle': 1, 'watergun': 1, 'supersonic': 4, 'wingattack': 8, 'waterpulse': 12, 'wideguard': 16, 'agility': 20, 'bubblebeam': 24, 'headbutt': 28, 'airslash': 32, 'aquaring': 36, 'bounce': 40, 'takedown': 44, 'hydropump': 48}
  },
  "snover": {
    "moves": {'powdersnow': 1, 'leer': 1, 'leafage': 5, 'mist': 10, 'iceshard': 15, 'razorleaf': 20, 'icywind': 25, 'swagger': 30, 'ingrain': 35, 'woodhammer': 41, 'blizzard': 45, 'sheercold': 50}
  },
  "abomasnow": {
    "moves": {'auroraveil': 1, 'powdersnow': 1, 'leer': 1, 'leafage': 1, 'mist': 1, 'icepunch': 'Evo.', 'iceshard': 15, 'razorleaf': 20, 'icywind': 25, 'swagger': 30, 'ingrain': 35, 'woodhammer': 43, 'blizzard': 49, 'sheercold': 56}
  },
  "weavile": {
    "moves": {'assurance': 1, 'quickattack': 1, 'beatup': 1, 'agility': 1, 'slash': 1, 'scratch': 1, 'leer': 1, 'taunt': 1, 'iceshard': 1, 'metalclaw': 18, 'icywind': 24, 'furyswipes': 30, 'honeclaws': 36, 'fling': 42, 'nastyplot': 48, 'screech': 54, 'nightslash': 60, 'darkpulse': 66}
  },
  "magnezone": {
    "moves": {'triattack': 1, 'electricterrain': 1, 'magneticflux': 1, 'mirrorcoat': 1, 'thundershock': 1, 'tackle': 1, 'supersonic': 1, 'thunderwave': 1, 'electroball': 12, 'gyroball': 16, 'spark': 20, 'screech': 24, 'magnetrise': 28, 'flashcannon': 34, 'discharge': 40, 'metalsound': 46, 'lightscreen': 52, 'lockon': 58, 'zapcannon': 64}
  },
  "lickilicky": {
    "moves": {'lick': 1, 'defensecurl': 1, 'rollout': 1, 'supersonic': 1, 'wrap': 18, 'disable': 24, 'stomp': 30, 'knockoff': 36, 'screech': 42, 'slam': 48, 'powerwhip': 54, 'bellydrum': 60}
  },
  "rhyperior": {
    "moves": {'hammerarm': 1, 'tackle': 1, 'tailwhip': 1, 'smackdown': 1, 'bulldoze': 1, 'hornattack': 15, 'scaryface': 20, 'stomp': 25, 'rockblast': 30, 'drillrun': 35, 'takedown': 40, 'earthquake': 47, 'stoneedge': 54, 'megahorn': 61, 'horndrill': 68, 'rockwrecker': 75}
  },
  "tangrowth": {
    "moves": {'block': 1, 'absorb': 1, 'bind': 1, 'stunspore': 1, 'growth': 1, 'megadrain': 12, 'vinewhip': 16, 'poisonpowder': 20, 'ancientpower': 24, 'knockoff': 28, 'gigadrain': 32, 'sleeppowder': 36, 'slam': 40, 'tickle': 44, 'powerwhip': 48, 'ingrain': 52, 'grassyterrain': 56}
  },
  "electivire": {
    "moves": {'quickattack': 1, 'leer': 1, 'thundershock': 1, 'charge': 1, 'swift': 12, 'shockwave': 16, 'thunderwave': 20, 'screech': 24, 'thunderpunch': 28, 'discharge': 34, 'lowkick': 40, 'thunderbolt': 46, 'lightscreen': 52, 'thunder': 58, 'gigaimpact': 64}
  },
  "magmortar": {
    "moves": {'smog': 1, 'leer': 1, 'ember': 1, 'smokescreen': 1, 'clearsmog': 12, 'flamewheel': 16, 'confuseray': 20, 'scaryface': 24, 'firepunch': 28, 'lavaplume': 34, 'lowkick': 40, 'flamethrower': 46, 'sunnyday': 52, 'fireblast': 58, 'hyperbeam': 64}
  },
  "togekiss": {
    "moves": {'airslash': 'Evo.', 'fairywind': 1, 'skyattack': 1, 'aurasphere': 1, 'extremespeed': 1, 'triattack': 1, 'charm': 1, 'ancientpower': 1, 'yawn': 1, 'metronome': 1, 'afteryou': 1, 'doubleedge': 1, 'safeguard': 1, 'followme': 1, 'batonpass': 1, 'lastresort': 1, 'wish': 1, 'growl': 1, 'pound': 1, 'sweetkiss': 1, 'lifedew': 1}
  },
  "yanmega": {
    "moves": {'bugbuzz': 1, 'airslash': 1, 'nightslash': 1, 'tackle': 1, 'doubleteam': 1, 'hypnosis': 'Rem.', 'quickattack': 14, 'detect': 17, 'supersonic': 22, 'uproar': 27, 'bugbite': 30, 'ancientpower': 33, 'feint': 38, 'slash': 43, 'screech': 46, 'uturn': 49}
  },
  "leafeon": {
    "moves": {'covet': 1, 'swift': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'razorleaf': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'leechseed': 20, 'magicalleaf': 25, 'synthesis': 30, 'sunnyday': 35, 'gigadrain': 40, 'swordsdance': 45, 'leafblade': 50, 'lastresort': 55}
  },
  "glaceon": {
    "moves": {'covet': 1, 'swift': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'icywind': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'iceshard': 20, 'bite': 25, 'icefang': 30, 'snowscape': 35, 'freezedry': 40, 'mirrorcoat': 45, 'blizzard': 50, 'lastresort': 55}
  },
  "gliscor": {
    "moves": {'thunderfang': 1, 'icefang': 1, 'firefang': 1, 'poisonjab': 1, 'sandattack': 1, 'harden': 1, 'quickattack': 13, 'furycutter': 16, 'knockoff': 19, 'acrobatics': 22, 'nightslash': 27, 'uturn': 30, 'screech': 35, 'xscissor': 40, 'crabhammer': 45, 'swordsdance': 50}
  },
  "mamoswine": {
    "moves": {'icefang': 1, 'ancientpower': 1, 'tackle': 1, 'mudslap': 1, 'powdersnow': 1, 'flail': 1, 'doublehit': 'Evo.', 'iceshard': 15, 'mist': 20, 'endure': 25, 'icywind': 30, 'amnesia': 37, 'takedown': 44, 'earthquake': 51, 'blizzard': 58, 'thrash': 65}
  },
  "porygon-z": {
    "moves": {'trickroom': 1, 'nastyplot': 1, 'defensecurl': 1, 'tackle': 1, 'conversion': 1, 'recycle': 1, 'magnetrise': 1, 'thundershock': 15, 'psybeam': 20, 'conversion2': 25, 'agility': 30, 'recover': 35, 'discharge': 40, 'triattack': 45, 'doubleedge': 50, 'lockon': 55, 'zapcannon': 60, 'hyperbeam': 65}
  },
  "gallade": {
    "moves": {'nightslash': 1, 'aquacutter': 1, 'sacredsword': 1, 'leafblade': 1, 'growl': 1, 'disarmingvoice': 1, 'hypnosis': 1, 'drainingkiss': 1, 'imprison': 1, 'psybeam': 1, 'lifedew': 1, 'charm': 1, 'calmmind': 1, 'psychic': 1, 'dreameater': 1, 'futuresight': 1, 'leer': 1, 'furycutter': 1, 'doubleteam': 1, 'confusion': 1, 'slash': 'Evo.', 'helpinghand': 9, 'feint': 12, 'teleport': 15, 'aerialace': 18, 'falseswipe': 23, 'protect': 28, 'swordsdance': 35, 'psychocut': 42, 'healpulse': 49, 'wideguard': 56, 'quickguard': 56, 'closecombat': 63}
  },
  "probopass": {
    "moves": {'magneticflux': 1, 'magnetrise': 1, 'gravity': 1, 'wideguard': 1, 'tackle': 1, 'irondefense': 1, 'block': 1, 'triattack': 'Evo.', 'thunderwave': 13, 'rest': 16, 'spark': 19, 'rockslide': 22, 'powergem': 25, 'rockblast': 28, 'discharge': 31, 'sandstorm': 34, 'earthpower': 37, 'stoneedge': 40, 'lockon': 43, 'zapcannon': 43}
  },
  "dusknoir": {
    "moves": {'shadowpunch': 1, 'firepunch': 1, 'icepunch': 1, 'thunderpunch': 1, 'gravity': 1, 'bind': 1, 'astonish': 1, 'leer': 1, 'disable': 1, 'shadowsneak': 1, 'confuseray': 12, 'nightshade': 16, 'payback': 20, 'willowisp': 24, 'meanlook': 28, 'hex': 32, 'curse': 36, 'shadowball': 42, 'futuresight': 48, 'destinybond': 54}
  },
  "froslass": {
    "moves": {'destinybond': 1, 'protect': 1, 'bite': 1, 'icefang': 1, 'crunch': 1, 'astonish': 1, 'powdersnow': 1, 'headbutt': 1, 'leer': 1, 'doubleteam': 1, 'hex': 'Evo.', 'iceshard': 15, 'drainingkiss': 20, 'icywind': 25, 'frostbreath': 30, 'confuseray': 35, 'snowscape': 40, 'willowisp': 47, 'auroraveil': 54, 'shadowball': 61, 'blizzard': 68}
  },
  "rotom": {
    "moves": {'astonish': 1, 'doubleteam': 1, 'thundershock': 5, 'confuseray': 10, 'charge': 15, 'electroball': 20, 'thunderwave': 25, 'shockwave': 30, 'hex': 35, 'substitute': 40, 'trick': 45, 'discharge': 50, 'uproar': 55}
  },
  "uxie": {
    "moves": {'confusion': 1, 'rest': 1, 'triattack': 'Rem.', 'snore': 'Rem.', 'safeguard': 'Rem.', 'irontail': 'Rem.', 'psychocut': 'Rem.', 'wonderroom': 'Rem.', 'magicroom': 'Rem.', 'round': 'Rem.', 'allyswitch': 'Rem.', 'expandingforce': 'Rem.', 'swift': 7, 'endure': 14, 'psybeam': 21, 'imprison': 28, 'extrasensory': 35, 'amnesia': 42, 'psychic': 49, 'yawn': 56, 'futuresight': 63, 'flail': 70, 'memento': 77, 'mysticalpower': 84}
  },
  "mesprit": {
    "moves": {'confusion': 1, 'rest': 1, 'triattack': 'Rem.', 'snore': 'Rem.', 'safeguard': 'Rem.', 'irontail': 'Rem.', 'psychocut': 'Rem.', 'wonderroom': 'Rem.', 'magicroom': 'Rem.', 'round': 'Rem.', 'allyswitch': 'Rem.', 'expandingforce': 'Rem.', 'swift': 7, 'protect': 14, 'psybeam': 21, 'imprison': 28, 'extrasensory': 35, 'charm': 42, 'psychic': 49, 'flatter': 56, 'futuresight': 63, 'copycat': 70, 'healingwish': 77, 'mysticalpower': 84}
  },
  "azelf": {
    "moves": {'confusion': 1, 'rest': 1, 'selfdestruct': 'Rem.', 'triattack': 'Rem.', 'snore': 'Rem.', 'safeguard': 'Rem.', 'irontail': 'Rem.', 'payback': 'Rem.', 'assurance': 'Rem.', 'psychocut': 'Rem.', 'wonderroom': 'Rem.', 'magicroom': 'Rem.', 'round': 'Rem.', 'allyswitch': 'Rem.', 'expandingforce': 'Rem.', 'swift': 7, 'detect': 14, 'psybeam': 21, 'imprison': 28, 'extrasensory': 35, 'nastyplot': 42, 'psychic': 49, 'uproar': 56, 'futuresight': 63, 'lastresort': 70, 'explosion': 77, 'mysticalpower': 84}
  },
  "dialga": {
    "moves": {'scaryface': 1, 'metalclaw': 1, 'dragonbreath': 8, 'ancientpower': 16, 'slash': 24, 'flashcannon': 32, 'dragonclaw': 40, 'aurasphere': 48, 'powergem': 56, 'metalburst': 64, 'earthpower': 72, 'irontail': 80, 'roaroftime': 88}
  },
  "palkia": {
    "moves": {'scaryface': 1, 'waterpulse': 1, 'dragonbreath': 8, 'ancientpower': 16, 'slash': 24, 'aquaring': 32, 'aurasphere': 48, 'powergem': 56, 'aquatail': 64, 'earthpower': 72, 'spacialrend': 80, 'hydropump': 88}
  },
  "heatran": {
    "moves": {'firespin': 1, 'leer': 1, 'metalclaw': 6, 'ancientpower': 12, 'firefang': 18, 'scaryface': 24, 'ironhead': 30, 'crunch': 36, 'lavaplume': 42, 'metalsound': 48, 'earthpower': 54, 'heatwave': 60, 'stoneedge': 66, 'magmastorm': 72}
  },
  "regigigas": {
    "moves": {'pound': 1, 'confuseray': 1, 'payback': 6, 'facade': 12, 'stomp': 18, 'protect': 24, 'knockoff': 30, 'megapunch': 36, 'bodypress': 42, 'wideguard': 48, 'zenheadbutt': 54, 'heavyslam': 60, 'hammerarm': 66, 'gigaimpact': 72, 'crushgrip': 78}
  },
  "giratina": {
    "moves": {'shadowsneak': 1, 'defog': 1, 'dragonbreath': 7, 'ancientpower': 14, 'hex': 21, 'slash': 28, 'scaryface': 35, 'shadowclaw': 42, 'painsplit': 49, 'aurasphere': 56, 'dragonclaw': 63, 'earthpower': 70, 'shadowforce': 77, 'destinybond': 84}
  },
  "cresselia": {
    "moves": {'confusion': 1, 'doubleteam': 1, 'mist': 6, 'aurorabeam': 12, 'psybeam': 18, 'allyswitch': 24, 'slash': 30, 'psychocut': 36, 'moonlight': 42, 'safeguard': 48, 'psychic': 54, 'moonblast': 60, 'futuresight': 66, 'lunardance': 72, 'lunarblessing': 72}
  },
  "phione": {
    "moves": {'watergun': 1, 'charm': 9, 'supersonic': 16, 'bubblebeam': 24, 'acidarmor': 31, 'whirlpool': 39, 'waterpulse': 46, 'aquaring': 54, 'dive': 61, 'raindance': 69, 'takeheart': 75}
  },
  "manaphy": {
    "moves": {'heartswap': 1, 'tailglow': 1, 'watergun': 1, 'charm': 9, 'supersonic': 16, 'bubblebeam': 24, 'acidarmor': 31, 'whirlpool': 39, 'waterpulse': 46, 'aquaring': 54, 'dive': 61, 'raindance': 69, 'takeheart': 76}
  },
  "darkrai": {
    "moves": {'disable': 1, 'quickattack': 11, 'hypnosis': 20, 'suckerpunch': 29, 'nightshade': 38, 'doubleteam': 47, 'haze': 57, 'darkvoid': 66, 'nastyplot': 75, 'dreameater': 84, 'darkpulse': 93}
  },
  "shaymin": {
    "moves": {'growth': 1, 'magicalleaf': 10, 'leechseed': 19, 'synthesis': 28, 'sweetscent': 37, 'playrough': 46, 'worryseed': 55, 'grassyterrain': 64, 'energyball': 73, 'sweetkiss': 82, 'healingwish': 91, 'seedflare': 100, 'quickattack': 28, 'airslash': 64, 'leafstorm': 91}
  },
  "arceus": {
    "moves": {'seismictoss': 1, 'cosmicpower': 1, 'gravity': 10, 'earthpower': 20, 'hypervoice': 30, 'extremespeed': 40, 'healingwish': 50, 'futuresight': 60, 'recover': 70, 'hyperbeam': 80, 'perishsong': 90, 'judgment': 100}
  },
  "victini": {
    "moves": {'vcreate': 1, 'quickattack': 1, 'flamecharge': 1, 'confusion': 1, 'focusenergy': 1, 'workup': 7, 'incinerate': 14, 'storedpower': 21, 'headbutt': 28, 'endure': 35, 'zenheadbutt': 42, 'inferno': 49, 'reversal': 56, 'searingshot': 63, 'doubleedge': 70, 'flareblitz': 77, 'overheat': 84, 'finalgambit': 91}
  },
  "snivy": {
    "moves": {'tackle': 1, 'leer': 4, 'vinewhip': 7, 'wrap': 10, 'growth': 13, 'magicalleaf': 16, 'leechseed': 19, 'megadrain': 22, 'slam': 25, 'leafblade': 28, 'coil': 31, 'gigadrain': 34, 'gastroacid': 37, 'leafstorm': 40}
  },
  "servine": {
    "moves": {'tackle': 1, 'leer': 1, 'vinewhip': 1, 'wrap': 1, 'growth': 13, 'magicalleaf': 16, 'leechseed': 20, 'megadrain': 24, 'slam': 28, 'leafblade': 32, 'coil': 36, 'gigadrain': 40, 'gastroacid': 44, 'leafstorm': 48}
  },
  "serperior": {
    "moves": {'tackle': 1, 'leer': 1, 'vinewhip': 1, 'wrap': 1, 'growth': 13, 'magicalleaf': 16, 'leechseed': 20, 'megadrain': 24, 'slam': 28, 'leafblade': 32, 'coil': 38, 'gigadrain': 44, 'gastroacid': 50, 'leafstorm': 56}
  },
  "tepig": {
    "moves": {'tackle': 1, 'tailwhip': 3, 'ember': 7, 'endure': 9, 'defensecurl': 13, 'flamecharge': 15, 'smog': 19, 'rollout': 21, 'takedown': 25, 'heatcrash': 27, 'assurance': 31, 'flamethrower': 33, 'headsmash': 37, 'roar': 39, 'flareblitz': 43}
  },
  "pignite": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'ember': 1, 'endure': 1, 'armthrust': 'Evo.', 'defensecurl': 13, 'flamecharge': 15, 'smog': 20, 'rollout': 23, 'takedown': 28, 'heatcrash': 31, 'assurance': 36, 'flamethrower': 39, 'headsmash': 44, 'roar': 47, 'flareblitz': 52}
  },
  "emboar": {
    "moves": {'armthrust': 1, 'tackle': 1, 'tailwhip': 1, 'ember': 1, 'endure': 'Rem.', 'hammerarm': 'Rem.', 'defensecurl': 13, 'flamecharge': 15, 'smog': 20, 'rollout': 23, 'takedown': 28, 'heatcrash': 31, 'assurance': 38, 'flamethrower': 43, 'headsmash': 50, 'roar': 55, 'flareblitz': 62}
  },
  "oshawott": {
    "moves": {'tackle': 1, 'tailwhip': 5, 'watergun': 7, 'soak': 11, 'focusenergy': 13, 'razorshell': 17, 'furycutter': 19, 'waterpulse': 23, 'aerialace': 25, 'aquajet': 29, 'encore': 31, 'aquatail': 35, 'retaliate': 37, 'swordsdance': 41, 'hydropump': 43}
  },
  "dewott": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'watergun': 1, 'soak': 1, 'focusenergy': 13, 'razorshell': 18, 'furycutter': 21, 'waterpulse': 26, 'aerialace': 29, 'aquajet': 34, 'encore': 37, 'aquatail': 42, 'retaliate': 45, 'swordsdance': 50, 'hydropump': 53}
  },
  "samurott": {
    "moves": {'megahorn': 1, 'tackle': 1, 'tailwhip': 1, 'watergun': 1, 'soak': 1, 'slash': 1, 'focusenergy': 13, 'razorshell': 18, 'furycutter': 21, 'waterpulse': 25, 'aerialace': 29, 'aquajet': 34, 'encore': 39, 'aquatail': 46, 'retaliate': 51, 'swordsdance': 58, 'hydropump': 63, 'suckerpunch': 1, 'ceaselessedge': 'Evo.'}
  },
  "patrat": {
    "moves": {'tackle': 1, 'leer': 3, 'bite': 6, 'bide': 8, 'detect': 11, 'sandattack': 13, 'crunch': 16, 'hypnosis': 18, 'superfang': 21, 'afteryou': 23, 'focusenergy': 26, 'workup': 28, 'hyperfang': 31, 'nastyplot': 33, 'meanlook': 36, 'batonpass': 38, 'slam': 41}
  },
  "watchog": {
    "moves": {'confuseray': 'Evo.', 'rototiller': 1, 'tackle': 1, 'leer': 3, 'bite': 6, 'lowkick': 1, 'bide': 8, 'detect': 11, 'sandattack': 13, 'crunch': 16, 'hypnosis': 18, 'superfang': 22, 'afteryou': 25, 'focusenergy': 29, 'psychup': 32, 'hyperfang': 36, 'nastyplot': 39, 'meanlook': 43, 'batonpass': 46, 'slam': 50}
  },
  "lillipup": {
    "moves": {'tackle': 1, 'leer': 1, 'workup': 4, 'bite': 8, 'retaliate': 12, 'babydolleyes': 17, 'playrough': 20, 'crunch': 24, 'takedown': 28, 'helpinghand': 32, 'reversal': 36, 'roar': 40, 'lastresort': 44, 'gigaimpact': 48}
  },
  "herdier": {
    "moves": {'tackle': 1, 'leer': 1, 'workup': 1, 'bite': 1, 'retaliate': 12, 'babydolleyes': 19, 'playrough': 24, 'crunch': 30, 'takedown': 36, 'helpinghand': 42, 'reversal': 48, 'roar': 54, 'lastresort': 60, 'gigaimpact': 66}
  },
  "stoutland": {
    "moves": {'icefang': 1, 'firefang': 1, 'thunderfang': 1, 'tackle': 1, 'leer': 1, 'workup': 1, 'bite': 1, 'retaliate': 12, 'babydolleyes': 19, 'playrough': 24, 'crunch': 30, 'takedown': 38, 'helpinghand': 46, 'reversal': 54, 'roar': 62, 'lastresort': 70, 'gigaimpact': 78}
  },
  "purrloin": {
    "moves": {'scratch': 1, 'growl': 1, 'sandattack': 4, 'fakeout': 5, 'furyswipes': 12, 'torment': 16, 'assurance': 21, 'honeclaws': 24, 'suckerpunch': 28, 'nastyplot': 32, 'nightslash': 36, 'playrough': 40}
  },
  "liepard": {
    "moves": {'scratch': 1, 'growl': 1, 'sandattack': 1, 'fakeout': 1, 'furyswipes': 12, 'torment': 16, 'assurance': 23, 'honeclaws': 28, 'suckerpunch': 34, 'nastyplot': 40, 'nightslash': 46, 'playrough': 52}
  },
  "pansage": {
    "moves": {'scratch': 1, 'playnice': 1, 'leer': 4, 'lick': 7, 'vinewhip': 10, 'furyswipes': 13, 'leechseed': 16, 'bite': 19, 'seedbomb': 22, 'torment': 25, 'fling': 28, 'acrobatics': 31, 'grassknot': 34, 'recycle': 37, 'naturalgift': 40, 'crunch': 43}
  },
  "simisage": {
    "moves": {'leer': 1, 'lick': 1, 'furyswipes': 1, 'seedbomb': 1}
  },
  "pansear": {
    "moves": {'scratch': 1, 'playnice': 1, 'leer': 4, 'lick': 7, 'incinerate': 10, 'furyswipes': 13, 'yawn': 16, 'bite': 19, 'flameburst': 22, 'amnesia': 25, 'fling': 28, 'acrobatics': 31, 'fireblast': 34, 'recycle': 37, 'naturalgift': 40, 'crunch': 43}
  },
  "simisear": {
    "moves": {'leer': 1, 'lick': 1, 'furyswipes': 1, 'flameburst': 1}
  },
  "panpour": {
    "moves": {'scratch': 1, 'playnice': 1, 'leer': 4, 'lick': 7, 'watergun': 10, 'furyswipes': 13, 'watersport': 16, 'bite': 19, 'scald': 22, 'taunt': 25, 'fling': 28, 'acrobatics': 31, 'brine': 34, 'recycle': 37, 'naturalgift': 40, 'crunch': 43}
  },
  "simipour": {
    "moves": {'leer': 1, 'lick': 1, 'furyswipes': 1, 'scald': 1}
  },
  "munna": {
    "moves": {'storedpower': 1, 'defensecurl': 1, 'hypnosis': 4, 'psybeam': 8, 'imprison': 12, 'moonlight': 16, 'magiccoat': 20, 'zenheadbutt': 24, 'calmmind': 28, 'yawn': 32, 'psychic': 36, 'moonblast': 40, 'dreameater': 44, 'futuresight': 48, 'wonderroom': 52}
  },
  "musharna": {
    "moves": {'psychicterrain': 1, 'imprison': 1, 'moonlight': 1, 'magiccoat': 1, 'zenheadbutt': 1, 'calmmind': 1, 'yawn': 1, 'psychic': 1, 'moonblast': 1, 'dreameater': 1, 'futuresight': 1, 'wonderroom': 1, 'storedpower': 1, 'defensecurl': 1, 'hypnosis': 1, 'psybeam': 1}
  },
  "pidove": {
    "moves": {'gust': 1, 'growl': 1, 'leer': 4, 'quickattack': 8, 'taunt': 12, 'aircutter': 16, 'swagger': 20, 'featherdance': 24, 'detect': 28, 'airslash': 32, 'roost': 36, 'tailwind': 40, 'skyattack': 44}
  },
  "tranquill": {
    "moves": {'gust': 1, 'growl': 1, 'leer': 1, 'quickattack': 1, 'taunt': 12, 'aircutter': 16, 'swagger': 20, 'featherdance': 26, 'detect': 34, 'airslash': 38, 'roost': 44, 'tailwind': 50, 'skyattack': 56}
  },
  "unfezant": {
    "moves": {'gust': 1, 'growl': 1, 'leer': 1, 'quickattack': 1, 'taunt': 12, 'aircutter': 16, 'swagger': 20, 'featherdance': 26, 'detect': 36, 'airslash': 42, 'roost': 50, 'tailwind': 58, 'skyattack': 66}
  },
  "blitzle": {
    "moves": {'quickattack': 1, 'tailwhip': 4, 'charge': 8, 'shockwave': 11, 'thunderwave': 15, 'flamecharge': 18, 'spark': 22, 'stomp': 25, 'discharge': 29, 'agility': 33, 'wildcharge': 35, 'thrash': 40}
  },
  "zebstrika": {
    "moves": {'quickattack': 1, 'tailwhip': 1, 'charge': 1, 'thunderwave': 1, 'shockwave': 11, 'flamecharge': 18, 'spark': 25, 'stomp': 31, 'discharge': 36, 'agility': 42, 'wildcharge': 47, 'thrash': 53}
  },
  "roggenrola": {
    "moves": {'sandattack': 1, 'tackle': 1, 'harden': 4, 'stealthrock': 8, 'mudslap': 12, 'smackdown': 16, 'irondefense': 20, 'headbutt': 24, 'rockslide': 28, 'rockblast': 32, 'sandstorm': 36, 'stoneedge': 40, 'explosion': 44}
  },
  "boldore": {
    "moves": {'powergem': 'Evo.', 'sandattack': 1, 'tackle': 1, 'harden': 1, 'stealthrock': 1, 'mudslap': 12, 'smackdown': 16, 'irondefense': 20, 'headbutt': 24, 'rockslide': 30, 'rockblast': 36, 'sandstorm': 42, 'stoneedge': 48, 'explosion': 54}
  },
  "gigalith": {
    "moves": {'powergem': 1, 'sandattack': 1, 'tackle': 1, 'harden': 1, 'stealthrock': 1, 'mudslap': 12, 'smackdown': 16, 'irondefense': 20, 'headbutt': 24, 'rockslide': 30, 'rockblast': 36, 'sandstorm': 42, 'stoneedge': 48, 'explosion': 54}
  },
  "woobat": {
    "moves": {'gust': 1, 'attract': 1, 'confusion': 5, 'endeavor': 10, 'aircutter': 15, 'imprison': 20, 'assurance': 25, 'amnesia': 30, 'airslash': 35, 'psychic': 40, 'calmmind': 45, 'futuresight': 50, 'simplebeam': 55}
  },
  "swoobat": {
    "moves": {'gust': 1, 'attract': 1, 'confusion': 1, 'endeavor': 1, 'aircutter': 15, 'imprison': 20, 'assurance': 25, 'amnesia': 30, 'airslash': 35, 'psychic': 40, 'calmmind': 45, 'futuresight': 50, 'simplebeam': 55}
  },
  "drilbur": {
    "moves": {'mudslap': 1, 'rapidspin': 1, 'scratch': 4, 'honeclaws': 8, 'furyswipes': 12, 'metalclaw': 16, 'sandstorm': 20, 'crushclaw': 24, 'rockslide': 28, 'dig': 32, 'swordsdance': 36, 'drillrun': 40, 'earthquake': 44, 'fissure': 48}
  },
  "excadrill": {
    "moves": {'mudslap': 1, 'rapidspin': 1, 'scratch': 1, 'honeclaws': 1, 'horndrill': 'Evo.', 'furyswipes': 12, 'metalclaw': 16, 'sandstorm': 20, 'crushclaw': 24, 'rockslide': 28, 'dig': 34, 'swordsdance': 40, 'drillrun': 46, 'earthquake': 52, 'fissure': 58}
  },
  "audino": {
    "moves": {'lastresort': 57, 'hypervoice': 53, 'mistyterrain': 1, 'playnice': 1, 'pound': 1, 'growl': 1, 'helpinghand': 1, 'babydolleyes': 5, 'refresh': 9, 'disarmingvoice': 13, 'doubleslap': 17, 'attract': 21, 'secretpower': 25, 'entrainment': 29, 'takedown': 33, 'healpulse': 37, 'afteryou': 41, 'simplebeam': 45, 'doubleedge': 49}
  },
  "timburr": {
    "moves": {'pound': 1, 'leer': 1, 'lowkick': 4, 'rockthrow': 8, 'focusenergy': 12, 'bulkup': 16, 'rockslide': 20, 'slam': 24, 'scaryface': 28, 'dynamicpunch': 32, 'hammerarm': 36, 'stoneedge': 40, 'superpower': 44, 'focuspunch': 48}
  },
  "gurdurr": {
    "moves": {'pound': 1, 'leer': 1, 'lowkick': 1, 'rockthrow': 1, 'focusenergy': 12, 'bulkup': 16, 'rockslide': 20, 'slam': 24, 'scaryface': 30, 'dynamicpunch': 36, 'hammerarm': 42, 'stoneedge': 48, 'superpower': 54, 'focuspunch': 60}
  },
  "conkeldurr": {
    "moves": {'pound': 1, 'leer': 1, 'lowkick': 1, 'rockthrow': 1, 'focusenergy': 12, 'bulkup': 16, 'rockslide': 20, 'slam': 24, 'scaryface': 30, 'dynamicpunch': 36, 'hammerarm': 42, 'stoneedge': 48, 'superpower': 54, 'focuspunch': 60}
  },
  "tympole": {
    "moves": {'echoedvoice': 1, 'growl': 1, 'acid': 4, 'supersonic': 8, 'mudshot': 12, 'round': 16, 'bubblebeam': 20, 'flail': 24, 'uproar': 28, 'aquaring': 32, 'hypervoice': 36, 'muddywater': 40, 'raindance': 44, 'hydropump': 48}
  },
  "palpitoad": {
    "moves": {'echoedvoice': 1, 'growl': 1, 'acid': 1, 'supersonic': 1, 'mudshot': 12, 'round': 16, 'bubblebeam': 20, 'flail': 24, 'uproar': 30, 'aquaring': 37, 'hypervoice': 42, 'muddywater': 48, 'raindance': 54, 'hydropump': 60}
  },
  "seismitoad": {
    "moves": {'drainpunch': 'Evo.', 'gastroacid': 1, 'echoedvoice': 1, 'growl': 1, 'acid': 1, 'supersonic': 1, 'mudshot': 12, 'round': 16, 'bubblebeam': 20, 'flail': 24, 'uproar': 30, 'aquaring': 39, 'hypervoice': 46, 'muddywater': 54, 'raindance': 62, 'hydropump': 70}
  },
  "throh": {
    "moves": {'bind': 1, 'leer': 1, 'focusenergy': 5, 'circlethrow': 10, 'wideguard': 15, 'revenge': 20, 'bulkup': 25, 'stormthrow': 30, 'vitalthrow': 35, 'seismictoss': 40, 'endure': 45, 'reversal': 50, 'superpower': 55}
  },
  "sawk": {
    "moves": {'rocksmash': 1, 'leer': 1, 'focusenergy': 5, 'doublekick': 10, 'quickguard': 15, 'lowsweep': 20, 'bulkup': 25, 'retaliate': 30, 'brickbreak': 35, 'counter': 40, 'endure': 45, 'reversal': 50, 'closecombat': 55}
  },
  "sewaddle": {
    "moves": {'tackle': 1, 'stringshot': 1, 'bugbite': 8, 'razorleaf': 15, 'strugglebug': 22, 'endure': 29, 'stickyweb': 31, 'bugbuzz': 36, 'flail': 43}
  },
  "swadloon": {
    "moves": {'tackle': 1, 'stringshot': 1, 'bugbite': 1, 'razorleaf': 1, 'protect': 'Evo.', 'strugglebug': 22, 'endure': 29, 'stickyweb': 31, 'bugbuzz': 36, 'flail': 43}
  },
  "leavanny": {
    "moves": {'falseswipe': 1, 'tackle': 1, 'stringshot': 1, 'razorleaf': 1, 'bugbite': 'Rem.', 'slash': 'Evo.', 'strugglebug': 22, 'fellstinger': 29, 'helpinghand': 32, 'leafblade': 36, 'xscissor': 39, 'entrainment': 43, 'swordsdance': 46, 'leafstorm': 50}
  },
  "venipede": {
    "moves": {'poisonsting': 1, 'defensecurl': 1, 'rollout': 4, 'protect': 8, 'poisontail': 12, 'screech': 16, 'bugbite': 20, 'venoshock': 24, 'takedown': 28, 'agility': 32, 'toxi': 36, 'venomdrench': 40, 'doubleedge': 44}
  },
  "whirlipede": {
    "moves": {'irondefense': 'Evo.', 'defensecurl': 1, 'rollout': 1, 'poisonsting': 5, 'screech': 8, 'pursuit': 12, 'protect': 15, 'poisontail': 19, 'bugbite': 23, 'venoshock': 28, 'agility': 32, 'steamroller': 37, 'toxic': 41, 'venomdrench': 43, 'rockclimb': 46, 'doubleedge': 50}
  },
  "scolipede": {
    "moves": {'batonpass': 'Evo.', 'irondefense': 1, 'megahorn': 65, 'defensecurl': 1, 'rollout': 1, 'poisonsting': 5, 'screech': 8, 'pursuit': 12, 'protect': 15, 'poisontail': 19, 'bugbite': 23, 'venoshock': 28, 'agility': 33, 'steamroller': 39, 'toxic': 44, 'venomdrench': 47, 'rockclimb': 50, 'doubleedge': 55}
  },
  "cottonee": {
    "moves": {'absorb': 1, 'helpinghand': 1, 'fairywind': 3, 'stunspore': 6, 'megadrain': 12, 'razorleaf': 15, 'growth': 18, 'poisonpowder': 21, 'gigadrain': 24, 'charm': 27, 'leechseed': 30, 'cottonspore': 33, 'energyball': 36, 'sunnyday': 39, 'endeavor': 42, 'cottonguard': 45, 'solarbeam': 48}
  },
  "whimsicott": {
    "moves": {'gust': 1, 'tailwind': 1, 'moonblast': 1, 'memento': 1, 'hurricane': 1, 'megadrain': 1, 'razorleaf': 1, 'growth': 1, 'poisonpowder': 1, 'gigadrain': 1, 'charm': 1, 'leechseed': 1, 'cottonspore': 1, 'energyball': 1, 'sunnyday': 1, 'endeavor': 1, 'cottonguard': 1, 'solarbeam': 1, 'absorb': 1, 'helpinghand': 1, 'fairywind': 1, 'stunspore': 1}
  },
  "petilil": {
    "moves": {'absorb': 1, 'growth': 1, 'helpinghand': 3, 'stunspore': 6, 'megadrain': 9, 'charm': 12, 'magicalleaf': 15, 'sleeppowder': 18, 'gigadrain': 21, 'leechseed': 24, 'afteryou': 27, 'energyball': 30, 'synthesis': 33, 'sunnyday': 36, 'entrainment': 39, 'leafstorm': 42}
  },
  "lilligant": {
    "moves": {'petalblizzard': 1, 'quiverdance': 1, 'teeterdance': 1, 'charm': 1, 'megadrain': 1, 'sleeppowder': 1, 'gigadrain': 1, 'leechseed': 1, 'afteryou': 1, 'energyball': 1, 'synthesis': 1, 'sunnyday': 1, 'entrainment': 1, 'leafstorm': 1, 'absorb': 1, 'growth': 1, 'helpinghand': 1, 'stunspore': 1, 'petaldance': 'Evo.', 'magicalleaf': 1, 'defog': 1, 'leafblade': 1, 'megakick': 1, 'solarblade': 1, 'victorydance': 'Evo.', 'axekick': 5}
  },
  "basculin": {
    "moves": {'watergun': 1, 'tailwhip': 1, 'tackle': 4, 'flail': 8, 'aquajet': 12, 'bite': 16, 'scaryface': 20, 'headbutt': 24, 'soak': 28, 'crunch': 32, 'takedown': 36, 'finalgambit': 40, 'wavecrash': 44, 'thrash': 48, 'doubleedge': 52, 'headsmash': 56, 'uproar': 40}
  },
  "sandile": {
    "moves": {'powertrip': 1, 'leer': 1, 'sandattack': 3, 'honeclaws': 6, 'sandtomb': 9, 'scaryface': 12, 'bite': 15, 'torment': 18, 'dig': 21, 'swagger': 24, 'crunch': 27, 'sandstorm': 30, 'foulplay': 33, 'earthquake': 36, 'thrash': 39}
  },
  "krokorok": {
    "moves": {'powertrip': 1, 'leer': 1, 'sandattack': 1, 'honeclaws': 1, 'sandtomb': 9, 'scaryface': 12, 'bite': 15, 'torment': 18, 'dig': 21, 'swagger': 24, 'crunch': 27, 'sandstorm': 32, 'foulplay': 35, 'earthquake': 42, 'thrash': 47}
  },
  "krookodile": {
    "moves": {'powertrip': 1, 'leer': 1, 'sandattack': 1, 'honeclaws': 1, 'sandtomb': 9, 'scaryface': 12, 'bite': 15, 'torment': 18, 'dig': 21, 'swagger': 24, 'crunch': 27, 'sandstorm': 32, 'foulplay': 35, 'earthquake': 44, 'thrash': 51, 'outrage': 58}
  },
  "darumaka": {
    "moves": {'ember': 1, 'tackle': 1, 'taunt': 4, 'bite': 8, 'incinerate': 12, 'workup': 16, 'firefang': 20, 'headbutt': 24, 'firepunch': 28, 'uproar': 32, 'bellydrum': 36, 'flareblitz': 40, 'thrash': 44, 'superpower': 48, 'powdersnow': 1, 'avalanche': 12, 'icefang': 20, 'icepunch': 28, 'blizzard': 40}
  },
  "darmanitan": {
    "moves": {'hammerarm': 'Evo.', 'ember': 1, 'tackle': 1, 'taunt': 1, 'bite': 1, 'incinerate': 12, 'workup': 16, 'firefang': 20, 'headbutt': 24, 'firepunch': 28, 'uproar': 32, 'bellydrum': 38, 'flareblitz': 44, 'thrash': 50, 'superpower': 56, 'iciclecrash': 'Evo.', 'powdersnow': 1, 'avalanche': 12, 'icefang': 20, 'icepunch': 28, 'blizzard': 44}
  },
  "maractus": {
    "moves": {'spikyshield': 1, 'peck': 1, 'absorb': 1, 'afteryou': 1, 'ingrain': 1, 'growth': 4, 'megadrain': 8, 'leechseed': 12, 'suckerpunch': 16, 'pinmissile': 20, 'gigadrain': 24, 'sweetscent': 28, 'synthesis': 32, 'petalblizzard': 36, 'cottonspore': 40, 'sunnyday': 44, 'solarbeam': 48, 'acupressure': 52, 'petaldance': 56, 'cottonguard': 60}
  },
  "dwebble": {
    "moves": {'furycutter': 1, 'sandattack': 1, 'withdraw': 4, 'smackdown': 8, 'bugbite': 12, 'flail': 16, 'slash': 20, 'rockslide': 24, 'stealthrock': 28, 'rockblast': 32, 'xscissor': 36, 'rockpolish': 40, 'shellsmash': 44, 'rockwrecker': 48}
  },
  "crustle": {
    "moves": {'furycutter': 1, 'sandattack': 1, 'withdraw': 1, 'smackdown': 1, 'bugbite': 12, 'flail': 16, 'slash': 20, 'rockslide': 24, 'stealthrock': 28, 'rockblast': 32, 'xscissor': 38, 'rockpolish': 44, 'shellsmash': 50, 'rockwrecker': 56}
  },
  "scraggy": {
    "moves": {'lowkick': 1, 'leer': 1, 'payback': 4, 'headbutt': 8, 'sandattack': 12, 'facade': 16, 'torment': 20, 'beatup': 24, 'scaryface': 28, 'brickbreak': 32, 'swagger': 36, 'crunch': 40, 'highjumpkick': 44, 'focuspunch': 48, 'headsmash': 52}
  },
  "scrafty": {
    "moves": {'lowkick': 1, 'leer': 1, 'payback': 1, 'headbutt': 1, 'sandattack': 12, 'facade': 16, 'torment': 20, 'beatup': 24, 'scaryface': 28, 'brickbreak': 32, 'swagger': 36, 'crunch': 42, 'highjumpkick': 48, 'focuspunch': 54, 'headsmash': 60}
  },
  "sigilyph": {
    "moves": {'gust': 1, 'confusion': 1, 'gravity': 5, 'hypnosis': 10, 'aircutter': 15, 'psybeam': 20, 'whirlwind': 25, 'cosmicpower': 30, 'airslash': 35, 'psychic': 40, 'tailwind': 45, 'lightscreen': 50, 'reflect': 50, 'skyattack': 55, 'skillswap': 60}
  },
  "yamask": {
    "moves": {'astonish': 1, 'protect': 1, 'haze': 4, 'nightshade': 8, 'disable': 12, 'willowisp': 16, 'craftyshield': 20, 'hex': 24, 'meanlook': 28, 'grudge': 32, 'curse': 36, 'shadowball': 40, 'darkpulse': 44, 'powersplit': 48, 'guardsplit': 48, 'destinybond': 52, 'brutalswing': 16, 'slam': 32, 'earthquake': 44}
  },
  "cofagrigus": {
    "moves": {'shadowclaw': 'Evo.', 'scaryface': 1, 'astonish': 1, 'protect': 1, 'haze': 1, 'nightshade': 1, 'disable': 12, 'willowisp': 16, 'craftyshield': 20, 'hex': 24, 'meanlook': 28, 'grudge': 32, 'curse': 38, 'shadowball': 44, 'darkpulse': 50, 'powersplit': 56, 'guardsplit': 56, 'destinybond': 62}
  },
  "tirtouga": {
    "moves": {'watergun': 1, 'withdraw': 1, 'protect': 3, 'aquajet': 6, 'smackdown': 9, 'ancientpower': 12, 'bite': 15, 'wideguard': 18, 'brine': 21, 'rockslide': 24, 'crunch': 27, 'curse': 30, 'irondefense': 33, 'aquatail': 36, 'raindance': 39, 'hydropump': 42, 'shellsmash': 45}
  },
  "carracosta": {
    "moves": {'watergun': 1, 'withdraw': 1, 'protect': 1, 'aquajet': 1, 'smackdown': 9, 'ancientpower': 12, 'bite': 15, 'wideguard': 18, 'brine': 21, 'rockslide': 24, 'crunch': 27, 'curse': 30, 'irondefense': 33, 'aquatail': 36, 'raindance': 41, 'hydropump': 46, 'shellsmash': 51}
  },
  "archen": {
    "moves": {'quickattack': 1, 'leer': 1, 'rockthrow': 3, 'wingattack': 6, 'dragonbreath': 9, 'ancientpower': 12, 'pluck': 15, 'quickguard': 18, 'uturn': 21, 'rockslide': 24, 'scaryface': 27, 'crunch': 30, 'agility': 33, 'tailwind': 36, 'dragonclaw': 39, 'thrash': 42, 'endeavor': 45}
  },
  "archeops": {
    "moves": {'quickattack': 1, 'leer': 1, 'rockthrow': 1, 'wingattack': 1, 'dragonbreath': 9, 'ancientpower': 12, 'pluck': 15, 'quickguard': 18, 'uturn': 21, 'rockslide': 24, 'scaryface': 27, 'crunch': 30, 'agility': 33, 'tailwind': 36, 'dragonclaw': 41, 'thrash': 46, 'endeavor': 51}
  },
  "trubbish": {
    "moves": {'pound': 1, 'poisongas': 1, 'recycle': 3, 'toxicspikes': 7, 'acidspray': 12, 'doubleslap': 14, 'sludge': 18, 'stockpile': 23, 'swallow': 23, 'takedown': 25, 'sludgebomb': 29, 'clearsmog': 34, 'toxic': 36, 'amnesia': 40, 'belch': 42, 'gunkshot': 45, 'explosion': 47}
  },
  "garbodor": {
    "moves": {'pound': 1, 'poisongas': 1, 'recycle': 3, 'toxicspikes': 7, 'acidspray': 12, 'doubleslap': 14, 'sludge': 18, 'stockpile': 23, 'swallow': 23, 'bodyslam': 25, 'sludgebomb': 29, 'clearsmog': 34, 'toxic': 39, 'amnesia': 46, 'belch': 49, 'gunkshot': 54, 'explosion': 59}
  },
  "zorua": {
    "moves": {'scratch': 1, 'leer': 1, 'torment': 4, 'honeclaws': 8, 'furyswipes': 12, 'scaryface': 16, 'taunt': 20, 'knockoff': 24, 'faketears': 28, 'agility': 32, 'imprison': 36, 'nightdaze': 40, 'nastyplot': 44, 'foulplay': 48, 'shadowsneak': 12, 'curse': 16, 'spite': 28, 'shadowball': 36, 'bittermalice': 40}
  },
  "zoroark": {
    "moves": {'uturn': 1, 'scratch': 1, 'leer': 1, 'torment': 1, 'honeclaws': 1, 'nightslash': 'Evo.', 'furyswipes': 12, 'taunt': 20, 'knockoff': 24, 'faketears': 28, 'agility': 34, 'imprison': 40, 'nightdaze': 46, 'nastyplot': 52, 'foulplay': 58, 'shadowclaw': 'Evo.', 'shadowsneak': 12, 'curse': 16, 'spite': 28, 'shadowball': 40, 'bittermalice': 46}
  },
  "minccino": {
    "moves": {'pound': 1, 'babydolleyes': 1, 'helpinghand': 4, 'echoedvoice': 8, 'sing': 12, 'charm': 16, 'swift': 20, 'encore': 24, 'afteryou': 28, 'tailslap': 32, 'tickle': 36, 'slam': 40, 'hypervoice': 44, 'lastresort': 48}
  },
  "cinccino": {
    "moves": {'bulletseed': 1, 'sing': 1, 'charm': 1, 'pound': 1, 'slam': 'Rem.', 'swift': 'Rem.', 'encore': 'Rem.', 'helpinghand': 'Rem.', 'hypervoice': 'Rem.', 'tickle': 'Rem.', 'rockblast': 'Rem.', 'lastresort': 'Rem.', 'afteryou': 'Rem.', 'echoedvoice': 'Rem.', 'babydolleyes': 'Rem.', 'tailslap': 'Evo.'}
  },
  "gothita": {
    "moves": {'pound': 1, 'confusion': 1, 'playnice': 4, 'tickle': 8, 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'hypnosis': 24, 'faketears': 28, 'psychup': 33, 'psychic': 36, 'flatter': 40, 'futuresight': 44, 'magicroom': 48}
  },
  "gothorita": {
    "moves": {'pound': 1, 'confusion': 1, 'tickle': 1, 'playnice': 1, 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'hypnosis': 24, 'faketears': 28, 'psychup': 35, 'flatter': 46, 'futuresight': 52, 'magicroom': 58}
  },
  "gothitelle": {
    "moves": {'pound': 1, 'confusion': 1, 'tickle': 1, 'playnice': 1, 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'hypnosis': 24, 'faketears': 28, 'psychup': 35, 'psychic': 40, 'flatter': 48, 'futuresight': 56, 'magicroom': 64}
  },
  "solosis": {
    "moves": {'confusion': 1, 'protect': 1, 'recover': 4, 'endeavor': 8, 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'lightscreen': 24, 'reflect': 24, 'allyswitch': 28, 'painsplit': 33, 'psychic': 36, 'skillswap': 40, 'futuresight': 44, 'wonderroom': 48}
  },
  "duosion": {
    "moves": {'confusion': 1, 'recover': 1, 'protect': 1, 'endeavor': 1, 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'lightscreen': 24, 'reflect': 24, 'allyswitch': 28, 'painsplit': 35, 'psychic': 40, 'skillswap': 46, 'futuresight': 52, 'wonderroom': 58}
  },
  "reuniclus": {
    "moves": {'confusion': 1, 'recover': 1, 'protect': 1, 'endeavor': 1, 'hammerarm': 'Evo.', 'psybeam': 12, 'charm': 16, 'psyshock': 20, 'lightscreen': 24, 'reflect': 24, 'allyswitch': 28, 'painsplit': 35, 'psychic': 40, 'skillswap': 48, 'futuresight': 56, 'wonderroom': 64}
  },
  "ducklett": {
    "moves": {'watergun': 1, 'defog': 6, 'wingattack': 9, 'waterpulse': 13, 'aerialace': 15, 'bubblebeam': 19, 'featherdance': 21, 'aquaring': 24, 'airslash': 27, 'roost': 30, 'raindance': 34, 'tailwind': 37, 'bravebird': 41, 'hurricane': 46}
  },
  "swanna": {
    "moves": {'wingattack': 1, 'watergun': 1, 'defog': 1, 'waterpulse': 13, 'aerialace': 15, 'bubblebeam': 19, 'featherdance': 21, 'aquaring': 24, 'airslash': 27, 'roost': 30, 'raindance': 34, 'tailwind': 40, 'bravebird': 47, 'hurricane': 55}
  },
  "vanillite": {
    "moves": {'iciclespear': 1, 'harden': 4, 'astonish': 7, 'uproar': 10, 'icywind': 13, 'mist': 16, 'avalanche': 19, 'taunt': 22, 'mirrorshot': 26, 'acidarmor': 31, 'icebeam': 35, 'hail': 40, 'mirrorcoat': 44, 'blizzard': 49, 'sheercold': 53}
  },
  "vanillish": {
    "moves": {'iciclespear': 1, 'harden': 4, 'astonish': 7, 'uproar': 10, 'icywind': 13, 'mist': 16, 'avalanche': 19, 'taunt': 22, 'mirrorshot': 26, 'acidarmor': 31, 'icebeam': 36, 'hail': 42, 'mirrorcoat': 47, 'blizzard': 53, 'sheercold': 58}
  },
  "vanilluxe": {
    "moves": {'sheercold': 67, 'freezedry': 1, 'weatherball': 1, 'iciclespear': 1, 'harden': 4, 'astonish': 7, 'uproar': 10, 'icywind': 13, 'mist': 16, 'avalanche': 19, 'taunt': 22, 'mirrorshot': 26, 'acidarmor': 31, 'icebeam': 36, 'hail': 42, 'mirrorcoat': 50, 'blizzard': 59}
  },
  "deerling": {
    "moves": {'tackle': 1, 'growl': 4, 'sandattack': 7, 'doublekick': 10, 'leechseed': 13, 'bulletseed': 16, 'takedown': 20, 'zenheadbutt': 24, 'energyball': 28, 'charm': 32, 'doubleedge': 37, 'solarbeam': 42}
  },
  "sawsbuck": {
    "moves": {'megahorn': 1, 'tackle': 1, 'growl': 1, 'sandattack': 1, 'hornleech': 'Evo.', 'doublekick': 10, 'leechseed': 13, 'bulletseed': 16, 'takedown': 20, 'zenheadbutt': 24, 'energyball': 28, 'charm': 36, 'doubleedge': 44, 'solarbeam': 52}
  },
  "emolga": {
    "moves": {'thundershock': 1, 'quickattack': 4, 'tailwhip': 7, 'charge': 10, 'spark': 13, 'nuzzle': 15, 'pursuit': 16, 'doubleteam': 19, 'shockwave': 22, 'electroball': 26, 'acrobatics': 30, 'lightscreen': 34, 'encore': 38, 'voltswitch': 42, 'agility': 46, 'discharge': 50}
  },
  "karrablast": {
    "moves": {'peck': 1, 'leer': 1, 'furycutter': 4, 'endure': 8, 'falseswipe': 12, 'acidspray': 16, 'headbutt': 20, 'flail': 24, 'scaryface': 28, 'xscissor': 32, 'swordsdance': 36, 'takedown': 40, 'bugbuzz': 44, 'doubleedge': 48}
  },
  "escavalier": {
    "moves": {'fellstinger': 1, 'endure': 1, 'flail': 1, 'scaryface': 1, 'takedown': 1, 'doubleedge': 1, 'peck': 1, 'leer': 1, 'furycutter': 1, 'quickguard': 1, 'falseswipe': 12, 'acidspray': 16, 'headbutt': 20, 'reversal': 24, 'irondefense': 28, 'xscissor': 32, 'swordsdance': 36, 'ironhead': 40, 'bugbuzz': 44, 'gigaimpact': 48, 'metalburst': 52}
  },
  "foongus": {
    "moves": {'absorb': 1, 'astonish': 1, 'growth': 4, 'stunspore': 8, 'megadrain': 12, 'synthesis': 16, 'clearsmog': 20, 'sweetscent': 24, 'gigadrain': 28, 'ingrain': 32, 'toxic': 36, 'ragepowder': 40, 'solarbeam': 44, 'spore': 48}
  },
  "amoonguss": {
    "moves": {'absorb': 1, 'astonish': 1, 'growth': 1, 'stunspore': 1, 'megadrain': 12, 'synthesis': 16, 'clearsmog': 20, 'sweetscent': 24, 'gigadrain': 28, 'ingrain': 32, 'toxic': 36, 'ragepowder': 42, 'solarbeam': 48, 'spore': 54}
  },
  "frillish": {
    "moves": {'absorb': 1, 'watergun': 1, 'poisonsting': 4, 'nightshade': 8, 'waterpulse': 12, 'raindance': 16, 'hex': 20, 'brine': 24, 'recover': 28, 'shadowball': 32, 'whirlpool': 36, 'hydropump': 41, 'destinybond': 44, 'waterspout': 48}
  },
  "jellicent": {
    "moves": {'acidarmor': 1, 'absorb': 1, 'watergun': 1, 'poisonsting': 1, 'nightshade': 1, 'waterpulse': 12, 'raindance': 16, 'hex': 20, 'brine': 24, 'recover': 28, 'shadowball': 32, 'whirlpool': 36, 'hydropump': 43, 'destinybond': 48, 'waterspout': 54}
  },
  "alomomola": {
    "moves": {'playnice': 1, 'pound': 1, 'aquaring': 5, 'aquajet': 9, 'helpinghand': 13, 'wideguard': 13, 'protect': 21, 'waterpulse': 25, 'healingwish': 29, 'soak': 33, 'wish': 37, 'brine': 41, 'safeguard': 45, 'whirlpool': 49, 'hydropump': 55}
  },
  "joltik": {
    "moves": {'absorb': 1, 'furycutter': 1, 'electroweb': 4, 'bugbite': 8, 'stringshot': 12, 'thunderwave': 16, 'electroball': 20, 'agility': 24, 'suckerpunch': 28, 'slash': 32, 'discharge': 37, 'screech': 40, 'gastroacid': 44, 'bugbuzz': 48}
  },
  "galvantula": {
    "moves": {'absorb': 1, 'furycutter': 1, 'electroweb': 1, 'bugbite': 1, 'stickyweb': 'Evo.', 'stringshot': 12, 'thunderwave': 16, 'electroball': 20, 'agility': 24, 'suckerpunch': 28, 'slash': 32, 'discharge': 39, 'screech': 44, 'gastroacid': 50, 'bugbuzz': 56}
  },
  "ferroseed": {
    "moves": {'tackle': 1, 'harden': 1, 'metalclaw': 5, 'pinmissile': 10, 'ingrain': 15, 'flashcannon': 20, 'ironhead': 25, 'selfdestruct': 30, 'irondefense': 35, 'curse': 41, 'gyroball': 45, 'explosion': 50}
  },
  "ferrothorn": {
    "moves": {'powerwhip': 'Evo.', 'tackle': 1, 'harden': 1, 'metalclaw': 1, 'pinmissile': 1, 'ingrain': 15, 'flashcannon': 20, 'ironhead': 25, 'selfdestruct': 30, 'irondefense': 35, 'curse': 43, 'gyroball': 49, 'explosion': 56}
  },
  "klink": {
    "moves": {'thundershock': 1, 'visegrip': 1, 'bind': 4, 'charge': 8, 'chargebeam': 12, 'metalsound': 16, 'autotomize': 20, 'discharge': 24, 'screech': 28, 'geargrind': 32, 'lockon': 36, 'shiftgear': 40, 'zapcannon': 44, 'hyperbeam': 48}
  },
  "klang": {
    "moves": {'thundershock': 1, 'visegrip': 1, 'bind': 1, 'charge': 1, 'chargebeam': 12, 'metalsound': 16, 'autotomize': 20, 'discharge': 24, 'screech': 28, 'geargrind': 32, 'lockon': 36, 'shiftgear': 42, 'zapcannon': 48, 'hyperbeam': 54}
  },
  "klinklang": {
    "moves": {'gearup': 1, 'magneticflux': 1, 'thundershock': 1, 'visegrip': 1, 'bind': 1, 'charge': 1, 'chargebeam': 12, 'metalsound': 16, 'autotomize': 20, 'discharge': 24, 'screech': 28, 'geargrind': 32, 'lockon': 36, 'shiftgear': 42, 'zapcannon': 48, 'hyperbeam': 56, 'electricterrain': 64}
  },
  "tynamo": {
    "moves": {'tackle': 1, 'thunderwave': 1, 'spark': 1, 'chargebeam': 1}
  },
  "eelektrik": {
    "moves": {'headbutt': 1, 'thunderwave': 1, 'spark': 1, 'chargebeam': 1, 'crunch': 'Evo.', 'bind': 9, 'acid': 19, 'discharge': 29, 'thunderbolt': 44, 'acidspray': 49, 'coil': 54, 'wildcharge': 59, 'gastroacid': 64, 'zapcannon': 69, 'thrash': 74}
  },
  "eelektross": {
    "moves": {'crunch': 1, 'thrash': 1, 'zapcannon': 1, 'gastroacid': 1, 'coil': 1, 'crushclaw': 1, 'headbutt': 1, 'acid': 1, 'discharge': 1, 'wildcharge': 5}
  },
  "elgyem": {
    "moves": {'confusion': 1, 'growl': 1, 'imprison': 6, 'teleport': 12, 'psybeam': 18, 'powersplit': 24, 'guardsplit': 24, 'headbutt': 30, 'zenheadbutt': 36, 'recover': 43, 'calmmind': 48, 'wonderroom': 54, 'psychic': 60}
  },
  "beheeyem": {
    "moves": {'psychicterrain': 1, 'confusion': 1, 'growl': 1, 'imprison': 1, 'teleport': 1, 'psybeam': 18, 'powersplit': 24, 'guardsplit': 24, 'headbutt': 30, 'zenheadbutt': 36, 'recover': 45, 'calmmind': 52, 'wonderroom': 60, 'psychic': 68}
  },
  "litwick": {
    "moves": {'astonish': 1, 'smog': 1, 'ember': 4, 'minimize': 8, 'confuseray': 12, 'hex': 16, 'willowisp': 20, 'firespin': 24, 'nightshade': 28, 'curse': 32, 'shadowball': 36, 'inferno': 40, 'imprison': 44, 'painsplit': 48, 'overheat': 52, 'memento': 56}
  },
  "lampent": {
    "moves": {'astonish': 1, 'smog': 1, 'ember': 1, 'minimize': 1, 'confuseray': 12, 'hex': 16, 'willowisp': 20, 'firespin': 24, 'nightshade': 28, 'curse': 32, 'shadowball': 36, 'inferno': 40, 'imprison': 46, 'painsplit': 52, 'overheat': 58, 'memento': 64}
  },
  "chandelure": {
    "moves": {'confuseray': 1, 'hex': 1, 'willowisp': 1, 'firespin': 1, 'nightshade': 1, 'curse': 1, 'shadowball': 1, 'inferno': 1, 'imprison': 1, 'painsplit': 1, 'overheat': 1, 'memento': 1, 'astonish': 1, 'smog': 1, 'ember': 1, 'minimize': 1}
  },
  "axew": {
    "moves": {'scratch': 1, 'leer': 1, 'bite': 3, 'falseswipe': 6, 'assurance': 9, 'taunt': 12, 'slash': 15, 'dragonclaw': 18, 'scaryface': 21, 'crunch': 24, 'dragondance': 27, 'breakingswipe': 30, 'focusenergy': 33, 'dragonpulse': 36, 'swordsdance': 39, 'outrage': 42, 'guillotine': 45, 'gigaimpact': 48}
  },
  "fraxure": {
    "moves": {'scratch': 1, 'leer': 1, 'bite': 1, 'falseswipe': 1, 'assurance': 9, 'taunt': 12, 'slash': 15, 'dragonclaw': 18, 'scaryface': 21, 'crunch': 24, 'dragondance': 27, 'breakingswipe': 30, 'focusenergy': 33, 'dragonpulse': 36, 'swordsdance': 41, 'outrage': 46, 'guillotine': 51, 'gigaimpact': 56}
  },
  "haxorus": {
    "moves": {'scratch': 1, 'leer': 1, 'bite': 1, 'falseswipe': 1, 'assurance': 9, 'taunt': 12, 'slash': 15, 'dragonclaw': 18, 'scaryface': 21, 'crunch': 24, 'dragondance': 27, 'breakingswipe': 30, 'focusenergy': 33, 'dragonpulse': 36, 'swordsdance': 41, 'outrage': 46, 'guillotine': 53, 'gigaimpact': 60}
  },
  "cubchoo": {
    "moves": {'powdersnow': 1, 'growl': 1, 'endure': 3, 'furyswipes': 6, 'icywind': 9, 'playnice': 12, 'brine': 15, 'frostbreath': 18, 'slash': 21, 'flail': 24, 'charm': 27, 'snowscape': 30, 'thrash': 33, 'rest': 36, 'blizzard': 39, 'sheercold': 42}
  },
  "beartic": {
    "moves": {'aquajet': 1, 'charm': 1, 'powdersnow': 1, 'growl': 1, 'endure': 1, 'furyswipes': 1, 'iciclecrash': 'Evo.', 'icywind': 9, 'playnice': 12, 'brine': 15, 'frostbreath': 18, 'slash': 21, 'flail': 24, 'swagger': 27, 'snowscape': 30, 'thrash': 33, 'rest': 36, 'blizzard': 41, 'sheercold': 46, 'superpower': 51}
  },
  "cryogonal": {
    "moves": {'bind': 1, 'iceshard': 1, 'confuseray': 4, 'rapidspin': 8, 'icywind': 12, 'mist': 16, 'haze': 16, 'ancientpower': 20, 'aurorabeam': 24, 'slash': 28, 'nightslash': 32, 'freezedry': 36, 'lightscreen': 40, 'reflect': 40, 'recover': 44, 'icebeam': 48, 'acidarmor': 52, 'solarbeam': 56, 'sheercold': 60}
  },
  "shelmet": {
    "moves": {'absorb': 1, 'protect': 1, 'acid': 4, 'curse': 8, 'megadrain': 12, 'strugglebug': 16, 'yawn': 20, 'acidarmor': 24, 'gigadrain': 28, 'guardswap': 32, 'bodyslam': 36, 'recover': 40, 'bugbuzz': 44, 'finalgambit': 48}
  },
  "accelgor": {
    "moves": {'watershuriken': 1, 'acid': 1, 'curse': 1, 'yawn': 1, 'acidarmor': 1, 'guardswap': 1, 'bodyslam': 1, 'absorb': 1, 'doubleteam': 1, 'acidspray': 1, 'quickattack': 1, 'megadrain': 12, 'strugglebug': 16, 'swift': 20, 'agility': 24, 'gigadrain': 28, 'powerswap': 32, 'uturn': 36, 'recover': 40, 'bugbuzz': 44, 'finalgambit': 48, 'toxic': 52}
  },
  "stunfisk": {
    "moves": {'fissure': 61, 'flail': 55, 'tackle': 1, 'watergun': 1, 'mudslap': 1, 'mudsport': 1, 'bide': 5, 'thundershock': 9, 'mudshot': 13, 'camouflage': 17, 'mudbomb': 21, 'discharge': 25, 'endure': 30, 'bounce': 35, 'muddywater': 40, 'thunderbolt': 45, 'revenge': 50}
  },
  "mienfoo": {
    "moves": {'pound': 1, 'detect': 1, 'fakeout': 5, 'reversal': 10, 'furyswipes': 15, 'quickguard': 20, 'forcepalm': 25, 'uturn': 30, 'drainpunch': 35, 'honeclaws': 40, 'aurasphere': 45, 'bounce': 51, 'calmmind': 55, 'highjumpkick': 60}
  },
  "mienshao": {
    "moves": {'quickguard': 1, 'pound': 1, 'detect': 1, 'fakeout': 1, 'reversal': 1, 'furyswipes': 15, 'wideguard': 20, 'forcepalm': 25, 'uturn': 30, 'drainpunch': 35, 'honeclaws': 40, 'aurasphere': 45, 'bounce': 53, 'calmmind': 59, 'highjumpkick': 66}
  },
  "druddigon": {
    "moves": {'scratch': 1, 'leer': 1, 'bite': 5, 'dragontail': 10, 'metalclaw': 15, 'scaryface': 20, 'slash': 25, 'dragonclaw': 30, 'honeclaws': 35, 'crunch': 40, 'ironhead': 45, 'outrage': 50, 'superpower': 55}
  },
  "golett": {
    "moves": {'mudslap': 1, 'astonish': 1, 'defensecurl': 4, 'pound': 8, 'shadowpunch': 12, 'curse': 16, 'nightshade': 20, 'stompingtantrum': 24, 'irondefense': 28, 'megapunch': 32, 'shadowball': 36, 'heavyslam': 40, 'phantomforce': 44, 'hammerarm': 48, 'earthquake': 52, 'dynamicpunch': 56}
  },
  "golurk": {
    "moves": {'astonish': 1, 'defensecurl': 1, 'pound': 1, 'highhorsepower': 1, 'mudslap': 'Rem.', 'focuspunch': 'Rem.', 'shadowpunch': 12, 'curse': 16, 'nightshade': 20, 'stompingtantrum': 24, 'irondefense': 28, 'megapunch': 32, 'shadowball': 36, 'heavyslam': 40, 'phantomforce': 46, 'hammerarm': 52, 'earthquake': 58, 'dynamicpunch': 64}
  },
  "pawniard": {
    "moves": {'scratch': 1, 'leer': 1, 'furycutter': 5, 'metalclaw': 10, 'torment': 15, 'scaryface': 20, 'assurance': 25, 'metalsound': 30, 'slash': 35, 'nightslash': 40, 'irondefense': 45, 'retaliate': 50, 'ironhead': 55, 'swordsdance': 60, 'guillotine': 65}
  },
  "bisharp": {
    "moves": {'metalburst': 1, 'scratch': 1, 'leer': 1, 'furycutter': 1, 'metalclaw': 1, 'torment': 15, 'scaryface': 20, 'assurance': 25, 'metalsound': 30, 'slash': 35, 'nightslash': 40, 'irondefense': 45, 'retaliate': 50, 'ironhead': 57, 'swordsdance': 64, 'guillotine': 71}
  },
  "bouffalant": {
    "moves": {'tackle': 1, 'leer': 1, 'focusenergy': 5, 'furyattack': 10, 'revenge': 15, 'scaryface': 20, 'hornattack': 25, 'reversal': 30, 'throatchop': 35, 'headcharge': 40, 'swordsdance': 45, 'megahorn': 50, 'gigaimpact': 55}
  },
  "rufflet": {
    "moves": {'peck': 1, 'leer': 1, 'honeclaws': 6, 'wingattack': 12, 'tailwind': 18, 'scaryface': 24, 'aerialace': 30, 'slash': 36, 'whirlwind': 42, 'crushclaw': 48, 'airslash': 55, 'defog': 60, 'thrash': 66, 'bravebird': 72}
  },
  "braviary": {
    "moves": {'skyattack': 1, 'peck': 1, 'leer': 1, 'honeclaws': 1, 'wingattack': 1, 'superpower': 1, 'tailwind': 18, 'scaryface': 24, 'aerialace': 30, 'slash': 36, 'whirlwind': 42, 'crushclaw': 48, 'airslash': 57, 'defog': 64, 'thrash': 72, 'esperwing': 'Evo.', 'hurricane': 80}
  },
  "vullaby": {
    "moves": {'gust': 1, 'leer': 1, 'flatter': 6, 'pluck': 12, 'tailwind': 18, 'knockoff': 24, 'irondefense': 30, 'whirlwind': 36, 'airslash': 42, 'darkpulse': 48, 'nastyplot': 54, 'defog': 60, 'attract': 66, 'bravebird': 72}
  },
  "mandibuzz": {
    "moves": {'gust': 1, 'leer': 1, 'toxic': 1, 'skyattack': 1, 'pluck': 1, 'flatter': 1, 'bonerush': 'Evo.', 'tailwind': 18, 'knockoff': 24, 'irondefense': 30, 'whirlwind': 36, 'airslash': 42, 'darkpulse': 48, 'nastyplot': 57, 'defog': 64, 'attract': 72, 'bravebird': 80}
  },
  "heatmor": {
    "moves": {'lick': 1, 'tackle': 1, 'furyswipes': 5, 'incinerate': 10, 'bugbite': 15, 'stockpile': 20, 'swallow': 20, 'spitup': 20, 'slash': 25, 'bind': 30, 'firelash': 35, 'honeclaws': 40, 'amnesia': 45, 'firespin': 50, 'inferno': 55, 'flareblitz': 60}
  },
  "durant": {
    "moves": {'furycutter': 1, 'sandattack': 1, 'visegrip': 4, 'metalclaw': 8, 'beatup': 12, 'bugbite': 16, 'bite': 20, 'agility': 24, 'dig': 28, 'xscissor': 32, 'crunch': 36, 'metalsound': 40, 'ironhead': 44, 'entrainment': 48, 'irondefense': 52, 'guillotine': 56}
  },
  "deino": {
    "moves": {'tackle': 1, 'focusenergy': 1, 'dragonbreath': 4, 'bite': 8, 'roar': 12, 'assurance': 16, 'headbutt': 20, 'workup': 24, 'slam': 28, 'crunch': 32, 'scaryface': 36, 'dragonpulse': 40, 'bodyslam': 44, 'hypervoice': 48, 'dragonrush': 52, 'nastyplot': 56, 'outrage': 60}
  },
  "zweilous": {
    "moves": {'doublehit': 1, 'tackle': 1, 'focusenergy': 1, 'dragonbreath': 1, 'bite': 1, 'roar': 12, 'assurance': 16, 'headbutt': 20, 'workup': 24, 'slam': 28, 'crunch': 32, 'scaryface': 36, 'dragonpulse': 40, 'bodyslam': 44, 'hypervoice': 48, 'dragonrush': 54, 'nastyplot': 60, 'outrage': 66}
  },
  "hydreigon": {
    "moves": {'triattack': 1, 'doublehit': 1, 'tackle': 1, 'focusenergy': 1, 'dragonbreath': 1, 'bite': 1, 'roar': 12, 'assurance': 16, 'headbutt': 20, 'workup': 24, 'slam': 28, 'crunch': 32, 'scaryface': 36, 'dragonpulse': 40, 'bodyslam': 44, 'hypervoice': 48, 'dragonrush': 54, 'nastyplot': 60, 'outrage': 68, 'hyperbeam': 76}
  },
  "larvesta": {
    "moves": {'ember': 1, 'stringshot': 1, 'flamecharge': 6, 'strugglebug': 12, 'flamewheel': 18, 'bugbite': 24, 'screech': 30, 'leechlife': 36, 'bugbuzz': 42, 'takedown': 48, 'amnesia': 54, 'doubleedge': 60, 'flareblitz': 66}
  },
  "volcarona": {
    "moves": {'fierydance': 1, 'whirlwind': 1, 'ember': 1, 'flamecharge': 1, 'takedown': 1, 'doubleedge': 1, 'flareblitz': 1, 'firespin': 1, 'stringshot': 1, 'gust': 1, 'strugglebug': 1, 'quiverdance': 'Evo.', 'flamewheel': 18, 'bugbite': 24, 'screech': 30, 'leechlife': 36, 'bugbuzz': 42, 'heatwave': 48, 'amnesia': 54, 'hurricane': 62, 'fireblast': 70, 'ragepowder': 78}
  },
  "cobalion": {
    "moves": {'quickattack': 1, 'leer': 1, 'helpinghand': 1, 'workup': 1, 'metalclaw': 7, 'quickguard': 14, 'doublekick': 21, 'retaliate': 28, 'metalburst': 35, 'takedown': 42, 'sacredsword': 49, 'swordsdance': 56, 'ironhead': 63, 'closecombat': 70}
  },
  "terrakion": {
    "moves": {'quickattack': 1, 'leer': 1, 'helpinghand': 1, 'workup': 1, 'smackdown': 7, 'quickguard': 14, 'doublekick': 21, 'retaliate': 28, 'rockslide': 35, 'takedown': 42, 'sacredsword': 49, 'swordsdance': 56, 'stoneedge': 63, 'closecombat': 70}
  },
  "virizion": {
    "moves": {'quickattack': 1, 'leer': 1, 'helpinghand': 1, 'workup': 1, 'takedown': 'Rem.', 'magicalleaf': 7, 'quickguard': 14, 'doublekick': 21, 'retaliate': 28, 'gigadrain': 35, 'synthesis': 42, 'sacredsword': 49, 'swordsdance': 56, 'leafblade': 63, 'closecombat': 70}
  },
  "tornadus": {
    "moves": {'astonish': 1, 'gust': 1, 'leer': 5, 'swagger': 10, 'bite': 15, 'aircutter': 20, 'agility': 25, 'tailwind': 30, 'airslash': 35, 'crunch': 40, 'extrasensory': 45, 'uproar': 50, 'hammerarm': 55, 'raindance': 60, 'hurricane': 65, 'thrash': 70, 'bleakwindstorm': 77}
  },
  "thundurus": {
    "moves": {'astonish': 1, 'thundershock': 1, 'leer': 5, 'swagger': 10, 'bite': 15, 'shockwave': 20, 'agility': 25, 'charge': 30, 'voltswitch': 35, 'crunch': 40, 'discharge': 45, 'uproar': 50, 'hammerarm': 55, 'raindance': 60, 'thunder': 65, 'thrash': 70, 'wildboltstorm': 75}
  },
  "reshiram": {
    "moves": {'dragonbreath': 1, 'nobleroar': 1, 'ancientpower': 1, 'firefang': 1, 'slash': 8, 'crunch': 16, 'extrasensory': 24, 'dragonpulse': 32, 'flamethrower': 40, 'fusionflare': 48, 'hypervoice': 56, 'fireblast': 64, 'imprison': 72, 'outrage': 80, 'blueflare': 88}
  },
  "zekrom": {
    "moves": {'dragonbreath': 1, 'nobleroar': 1, 'ancientpower': 1, 'thunderfang': 1, 'slash': 8, 'crunch': 16, 'zenheadbutt': 24, 'dragonclaw': 32, 'thunderbolt': 40, 'fusionbolt': 48, 'hypervoice': 56, 'thunder': 64, 'imprison': 72, 'outrage': 80, 'boltstrike': 88}
  },
  "landorus": {
    "moves": {'sandtomb': 1, 'smackdown': 1, 'leer': 5, 'block': 10, 'bulldoze': 15, 'rocktomb': 20, 'imprison': 30, 'rockslide': 35, 'earthpower': 40, 'extrasensory': 45, 'stoneedge': 50, 'hammerarm': 55, 'sandstorm': 60, 'earthquake': 65, 'outrage': 70, 'fissure': 75, 'sandsearstorm': 80}
  },
  "kyurem": {
    "moves": {'dragonbreath': 1, 'nobleroar': 1, 'ancientpower': 1, 'freezedry': 1, 'slash': 8, 'endeavor': 16, 'dragonpulse': 24, 'icebeam': 32, 'hypervoice': 40, 'scaryface': 48, 'blizzard': 56, 'imprison': 64, 'outrage': 72, 'glaciate': 80, 'sheercold': 88, 'fusionflare': 48, 'iceburn': 80, 'fusionbolt': 48, 'freezeshock': 80}
  },
  "keldeo": {
    "moves": {'aquajet': 1, 'leer': 1, 'helpinghand': 1, 'workup': 1, 'secretsword': 1, 'bubblebeam': 7, 'quickguard': 14, 'doublekick': 21, 'retaliate': 28, 'aquatail': 35, 'takedown': 42, 'sacredsword': 49, 'swordsdance': 56, 'hydropump': 63, 'closecombat': 70}
  },
  "meloetta": {
    "moves": {'round': 1, 'quickattack': 1, 'confusion': 1, 'sing': 1, 'teeterdance': 21, 'acrobatics': 26, 'psybeam': 31, 'echoedvoice': 36, 'uturn': 43, 'relicsong': 50, 'psychic': 57, 'hypervoice': 64, 'roleplay': 71, 'closecombat': 78, 'perishsong': 85}
  },
  "genesect": {
    "moves": {'furycutter': 1, 'quickattack': 1, 'screech': 7, 'metalclaw': 14, 'fellstinger': 21, 'flamecharge': 28, 'metalsound': 35, 'xscissor': 42, 'magnetrise': 49, 'bugbuzz': 56, 'simplebeam': 63, 'zapcannon': 70, 'lockon': 77, 'technoblast': 84, 'selfdestruct': 91}
  },
  "chespin": {
    "moves": {'growl': 1, 'vinewhip': 1, 'rollout': 8, 'bite': 11, 'leechseed': 15, 'pinmissile': 18, 'takedown': 27, 'seedbomb': 32, 'mudshot': 35, 'bodyslam': 42, 'painsplit': 45, 'woodhammer': 48}
  },
  "quilladin": {
    "moves": {'growl': 1, 'vinewhip': 1, 'rollout': 8, 'bite': 11, 'leechseed': 15, 'seedbomb': 20, 'pinmissile': 24, 'takedown': 29, 'mudshot': 34, 'bulkup': 38, 'bodyslam': 43, 'painsplit': 47, 'woodhammer': 53}
  },
  "chesnaught": {
    "moves": {'hammerarm': 1, 'feint': 1, 'tackle': 1, 'growl': 1, 'vinewhip': 1, 'rollout': 1, 'spikyshield': 'Evo.', 'bite': 11, 'leechseed': 15, 'pinmissile': 19, 'takedown': 29, 'seedbomb': 35, 'mudshot': 41, 'bulkup': 48, 'bodyslam': 54, 'painsplit': 60, 'woodhammer': 66, 'gigaimpact': 78}
  },
  "fennekin": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'ember': 5, 'howl': 11, 'flamecharge': 14, 'psybeam': 17, 'firespin': 20, 'lightscreen': 25, 'psyshock': 31, 'flamethrower': 35, 'willowisp': 38, 'psychic': 41, 'sunnyday': 43, 'fireblast': 48}
  },
  "braixen": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'ember': 1, 'howl': 11, 'flamecharge': 14, 'psybeam': 18, 'firespin': 22, 'lightscreen': 28, 'psyshock': 36, 'flamethrower': 41, 'willowisp': 45, 'psychic': 49, 'sunnyday': 52, 'magicroom': 56, 'fireblast': 59}
  },
  "delphox": {
    "moves": {'futuresight': 1, 'roleplay': 1, 'switcheroo': 1, 'shadowball': 1, 'scratch': 1, 'tailwhip': 1, 'ember': 1, 'howl': 1, 'mysticalfire': 'Evo.', 'flamecharge': 14, 'psybeam': 18, 'firespin': 22, 'lightscreen': 28, 'psyshock': 38, 'flamethrower': 45, 'willowisp': 51, 'psychic': 57, 'sunnyday': 62, 'magicroom': 68, 'fireblast': 74}
  },
  "froakie": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 5, 'quickattack': 8, 'lick': 10, 'waterpulse': 14, 'smokescreen': 18, 'round': 21, 'fling': 25, 'smackdown': 29, 'substitute': 35, 'bounce': 39, 'doubleteam': 43, 'hydropump': 48}
  },
  "frogadier": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 1, 'quickattack': 8, 'lick': 10, 'waterpulse': 14, 'smokescreen': 19, 'round': 23, 'fling': 28, 'smackdown': 33, 'substitute': 40, 'bounce': 45, 'doubleteam': 50, 'hydropump': 56}
  },
  "greninja": {
    "moves": {'nightslash': 1, 'haze': 1, 'roleplay': 1, 'pound': 1, 'growl': 1, 'watergun': 1, 'quickattack': 1, 'watershuriken': 'Evo.', 'lick': 10, 'waterpulse': 14, 'smokescreen': 19, 'shadowsneak': 23, 'spikes': 28, 'aerialace': 33, 'substitute': 42, 'extrasensory': 49, 'doubleteam': 56, 'hydropump': 68}
  },
  "bunnelby": {
    "moves": {'tackle': 1, 'agility': 1, 'leer': 1, 'quickattack': 7, 'doubleslap': 10, 'mudslap': 13, 'takedown': 15, 'mudshot': 18, 'doublekick': 20, 'odorsleuth': 25, 'flail': 29, 'dig': 33, 'bounce': 38, 'superfang': 42, 'facade': 47, 'earthquake': 49}
  },
  "diggersby": {
    "moves": {'hammerarm': 60, 'rototiller': 1, 'bulldoze': 1, 'swordsdance': 1, 'tackle': 1, 'agility': 1, 'leer': 1, 'quickattack': 7, 'doubleslap': 13, 'mudslap': 13, 'takedown': 15, 'mudshot': 18, 'doublekick': 21, 'odorsleuth': 27, 'flail': 32, 'dig': 37, 'bounce': 43, 'superfang': 48, 'facade': 54, 'earthquake': 57}
  },
  "fletchling": {
    "moves": {'peck': 1, 'growl': 1, 'quickattack': 5, 'ember': 10, 'flail': 15, 'acrobatics': 20, 'agility': 25, 'aerialace': 30, 'tailwind': 35, 'steelwing': 40, 'roost': 45, 'fly': 50}
  },
  "fletchinder": {
    "moves": {'feint': 1, 'peck': 1, 'growl': 1, 'quickattack': 1, 'ember': 1, 'flamecharge': 'Evo.', 'flail': 15, 'acrobatics': 22, 'agility': 29, 'aerialace': 36, 'tailwind': 43, 'steelwing': 50, 'roost': 57, 'fly': 64}
  },
  "talonflame": {
    "moves": {'flamecharge': 1, 'flareblitz': 1, 'feint': 1, 'peck': 1, 'growl': 1, 'quickattack': 1, 'ember': 1, 'flail': 15, 'acrobatics': 22, 'agility': 29, 'aerialace': 38, 'tailwind': 47, 'steelwing': 56, 'roost': 65, 'fly': 74, 'bravebird': 83}
  },
  "scatterbug": {
    "moves": {'tackle': 1, 'stringshot': 1, 'stunspore': 6, 'bugbite': 15}
  },
  "spewpa": {
    "moves": {'harden': 1, 'protect': 'Evo.'}
  },
  "vivillon": {
    "moves": {'sleeppowder': 1, 'poisonpowder': 1, 'stunspore': 1, 'strugglebug': 1, 'gust': 'Evo.', 'lightscreen': 12, 'psybeam': 17, 'supersonic': 21, 'drainingkiss': 25, 'safeguard': 31, 'bugbuzz': 35, 'quiverdance': 45, 'hurricane': 50}
  },
  "litleo": {
    "moves": {'tackle': 1, 'leer': 1, 'ember': 5, 'workup': 8, 'headbutt': 11, 'nobleroar': 15, 'takedown': 20, 'firefang': 23, 'endeavor': 28, 'echoedvoice': 33, 'flamethrower': 36, 'crunch': 39, 'hypervoice': 43, 'incinerate': 46, 'overheat': 50}
  },
  "pyroar": {
    "moves": {'hyperbeam': 1, 'tackle': 1, 'leer': 1, 'ember': 1, 'workup': 1, 'headbutt': 11, 'nobleroar': 15, 'takedown': 20, 'firefang': 23, 'endeavor': 28, 'echoedvoice': 33, 'flamethrower': 38, 'crunch': 42, 'hypervoice': 48, 'incinerate': 51, 'overheat': 57}
  },
  "flabébé": {
    "moves": {'tackle': 1, 'vinewhip': 1, 'fairywind': 6, 'safeguard': 10, 'razorleaf': 15, 'wish': 20, 'magicalleaf': 22, 'grassyterrain': 24, 'petalblizzard': 28, 'synthesis': 33, 'mistyterrain': 37, 'moonblast': 41, 'petaldance': 45, 'solarbeam': 48}
  },
  "floette": {
    "moves": {'tackle': 1, 'vinewhip': 1, 'fairywind': 1, 'safeguard': 10, 'razorleaf': 15, 'wish': 20, 'magicalleaf': 25, 'grassyterrain': 27, 'petalblizzard': 33, 'synthesis': 38, 'mistyterrain': 43, 'moonblast': 46, 'petaldance': 51, 'solarbeam': 58}
  },
  "florges": {
    "moves": {'disarmingvoice': 1, 'safeguard': 1, 'wish': 1, 'magicalleaf': 1, 'grassknot': 1, 'grassyterrain': 1, 'petalblizzard': 1, 'mistyterrain': 1, 'petaldance': 1, 'solarbeam': 1, 'synthesis': 1, 'moonblast': 5}
  },
  "skiddo": {
    "moves": {'tackle': 1, 'growth': 1, 'vinewhip': 7, 'tailwhip': 9, 'leechseed': 12, 'razorleaf': 13, 'worryseed': 16, 'synthesis': 20, 'takedown': 22, 'bulldoze': 26, 'seedbomb': 30, 'bulkup': 34, 'doubleedge': 38, 'hornleech': 42, 'leafblade': 45}
  },
  "gogoat": {
    "moves": {'earthquake': 1, 'tackle': 1, 'growth': 1, 'vinewhip': 1, 'tailwhip': 1, 'aerialace': 'Evo.', 'leechseed': 12, 'razorleaf': 13, 'worryseed': 16, 'synthesis': 20, 'takedown': 22, 'bulldoze': 26, 'seedbomb': 30, 'bulkup': 34, 'doubleedge': 40, 'hornleech': 47, 'leafblade': 55, 'milkdrink': 58}
  },
  "pancham": {
    "moves": {'tackle': 1, 'leer': 1, 'armthrust': 7, 'workup': 10, 'karatechop': 12, 'cometpunch': 15, 'slash': 20, 'circlethrow': 25, 'vitalthrow': 27, 'bodyslam': 33, 'crunch': 39, 'entrainment': 42, 'partingshot': 45, 'skyuppercut': 48}
  },
  "pangoro": {
    "moves": {'bulletpunch': 'Evo.', 'hammerarm': 70, 'lowsweep': 57, 'entrainment': 45, 'tackle': 1, 'leer': 1, 'armthrust': 7, 'workup': 10, 'karatechop': 12, 'cometpunch': 15, 'slash': 20, 'circlethrow': 25, 'vitalthrow': 27, 'bodyslam': 35, 'crunch': 42, 'partingshot': 48, 'skyuppercut': 52, 'taunt': 65}
  },
  "furfrou": {
    "moves": {'tackle': 1, 'growl': 1, 'sandattack': 5, 'babydolleyes': 9, 'headbutt': 12, 'tailwhip': 15, 'bite': 22, 'odorsleuth': 27, 'retaliate': 33, 'takedown': 35, 'charm': 38, 'suckerpunch': 42, 'cottonguard': 48}
  },
  "espurr": {
    "moves": {'scratch': 1, 'leer': 1, 'fakeout': 3, 'disarmingvoice': 6, 'confusion': 9, 'covet': 18, 'psybeam': 21, 'lightscreen': 30, 'reflect': 30, 'psyshock': 33}
  },
  "meowstic": {
    "moves": {'meanlook': 1, 'scratch': 1, 'leer': 1, 'fakeout': 1, 'disarmingvoice': 1, 'confusion': 9, 'helpinghand': 12, 'charm': 15, 'covet': 18, 'psybeam': 21, 'suckerpunch': 24, 'roleplay': 29, 'lightscreen': 34, 'reflect': 34, 'psyshock': 39, 'imprison': 44, 'quickguard': 49, 'psychic': 54, 'mistyterrain': 59, 'magicalleaf': 1, 'storedpower': 12, 'chargebeam': 15, 'extrasensory': 44, 'shadowball': 49, 'futuresight': 59}
  },
  "honedge": {
    "moves": {'tackle': 1, 'swordsdance': 1, 'furycutter': 5, 'metalsound': 8, 'pursuit': 13, 'autotomize': 18, 'shadowsneak': 20, 'aerialace': 22, 'retaliate': 26, 'slash': 29, 'irondefense': 32, 'nightslash': 35, 'powertrick': 39, 'ironhead': 42, 'sacredsword': 47}
  },
  "doublade": {
    "moves": {'tackle': 1, 'swordsdance': 1, 'furycutter': 5, 'metalsound': 8, 'pursuit': 13, 'autotomize': 18, 'shadowsneak': 20, 'aerialace': 22, 'retaliate': 26, 'slash': 29, 'irondefense': 32, 'nightslash': 36, 'powertrick': 41, 'ironhead': 45, 'sacredsword': 51}
  },
  "aegislash": {
    "moves": {'furycutter': 1, 'pursuit': 1, 'autotomize': 1, 'shadowsneak': 1, 'slash': 1, 'irondefense': 1, 'nightslash': 1, 'powertrick': 1, 'ironhead': 1, 'headsmash': 1, 'swordsdance': 1, 'aerialace': 1, 'kingsshield': 1, 'sacredsword': 1}
  },
  "spritzee": {
    "moves": {'sweetscent': 1, 'fairywind': 1, 'sweetkiss': 6, 'odorsleuth': 8, 'echoedvoice': 13, 'calmmind': 17, 'drainingkiss': 21, 'aromatherapy': 25, 'attract': 29, 'moonblast': 31, 'charm': 35, 'flail': 38, 'mistyterrain': 42, 'skillswap': 44, 'psychic': 48, 'disarmingvoice': 50}
  },
  "aromatisse": {
    "moves": {'aromaticmist': 1, 'healpulse': 1, 'sweetscent': 1, 'fairywind': 1, 'sweetkiss': 6, 'odorsleuth': 8, 'echoedvoice': 13, 'calmmind': 17, 'drainingkiss': 21, 'aromatherapy': 25, 'attract': 29, 'moonblast': 31, 'charm': 35, 'flail': 38, 'mistyterrain': 42, 'skillswap': 44, 'psychic': 48, 'disarmingvoice': 53, 'reflect': 57, 'psychup': 64}
  },
  "swirlix": {
    "moves": {'sweetscent': 1, 'tackle': 1, 'fairywind': 5, 'playnice': 8, 'faketears': 10, 'round': 13, 'cottonspore': 17, 'endeavor': 21, 'aromatherapy': 26, 'drainingkiss': 31, 'energyball': 36, 'cottonguard': 41, 'wish': 45, 'playrough': 49, 'lightscreen': 58, 'safeguard': 67}
  },
  "slurpuff": {
    "moves": {'sweetscent': 1, 'tackle': 1, 'fairywind': 5, 'playnice': 8, 'faketears': 10, 'round': 13, 'cottonspore': 17, 'endeavor': 21, 'aromatherapy': 26, 'drainingkiss': 31, 'energyball': 36, 'cottonguard': 41, 'wish': 45, 'playrough': 49, 'lightscreen': 58, 'safeguard': 67}
  },
  "inkay": {
    "moves": {'peck': 1, 'tackle': 1, 'hypnosis': 3, 'wrap': 6, 'payback': 9, 'pluck': 12, 'psybeam': 15, 'swagger': 18, 'slash': 21, 'nightslash': 24, 'psychocut': 27, 'switcheroo': 31, 'foulplay': 33, 'topsyturvy': 36, 'superpower': 39}
  },
  "malamar": {
    "moves": {'reversal': 1, 'peck': 1, 'tackle': 1, 'hypnosis': 1, 'wrap': 1, 'payback': 9, 'pluck': 12, 'psybeam': 15, 'swagger': 18, 'slash': 21, 'nightslash': 24, 'psychocut': 27, 'switcheroo': 33, 'foulplay': 37, 'topsyturvy': 42, 'superpower': 47}
  },
  "binacle": {
    "moves": {'shellsmash': 1, 'scratch': 1, 'sandattack': 1, 'watergun': 4, 'withdraw': 7, 'furyswipes': 10, 'slash': 13, 'mudslap': 18, 'clamp': 20, 'rockpolish': 24, 'ancientpower': 28, 'honeclaws': 32, 'furycutter': 37, 'nightslash': 41, 'razorshell': 45, 'crosschop': 49}
  },
  "barbaracle": {
    "moves": {'skullbash': 65, 'stoneedge': 60, 'shellsmash': 1, 'scratch': 1, 'sandattack': 1, 'watergun': 4, 'withdraw': 7, 'furyswipes': 10, 'slash': 13, 'mudslap': 18, 'clamp': 20, 'rockpolish': 24, 'ancientpower': 28, 'honeclaws': 32, 'furycutter': 37, 'nightslash': 44, 'razorshell': 48, 'crosschop': 55}
  },
  "skrelp": {
    "moves": {'tackle': 1, 'smokescreen': 1, 'acid': 5, 'watergun': 10, 'tailwhip': 15, 'doubleteam': 20, 'poisontail': 25, 'waterpulse': 30, 'toxic': 35, 'dragonpulse': 40, 'aquatail': 45, 'sludgebomb': 50, 'hydropump': 55}
  },
  "dragalge": {
    "moves": {'tackle': 1, 'smokescreen': 1, 'acid': 1, 'watergun': 1, 'tailwhip': 15, 'doubleteam': 20, 'poisontail': 25, 'waterpulse': 30, 'toxic': 35, 'dragonpulse': 40, 'aquatail': 45, 'sludgebomb': 52, 'hydropump': 59, 'outrage': 66}
  },
  "clauncher": {
    "moves": {'splash': 1, 'watergun': 1, 'visegrip': 5, 'flail': 10, 'aquajet': 15, 'smackdown': 20, 'honeclaws': 25, 'waterpulse': 30, 'swordsdance': 35, 'aurasphere': 40, 'bounce': 45, 'muddywater': 50, 'crabhammer': 55}
  },
  "clawitzer": {
    "moves": {'darkpulse': 1, 'dragonpulse': 1, 'healpulse': 1, 'splash': 1, 'watergun': 1, 'visegrip': 1, 'flail': 1, 'aquajet': 15, 'smackdown': 20, 'honeclaws': 25, 'waterpulse': 30, 'swordsdance': 35, 'aurasphere': 42, 'bounce': 49, 'muddywater': 56, 'crabhammer': 63}
  },
  "helioptile": {
    "moves": {'pound': 1, 'tailwhip': 1, 'thundershock': 6, 'charge': 11, 'mudslap': 13, 'quickattack': 17, 'razorwind': 22, 'paraboliccharge': 25, 'thunderwave': 31, 'bulldoze': 35, 'voltswitch': 40, 'electrify': 45, 'thunderbolt': 49}
  },
  "heliolisk": {
    "moves": {'eerieimpulse': 1, 'electrify': 1, 'razorwind': 1, 'quickattack': 1, 'thunder': 1, 'charge': 1, 'paraboliccharge': 1}
  },
  "tyrunt": {
    "moves": {'tailwhip': 1, 'tackle': 1, 'roar': 6, 'stomp': 10, 'bide': 12, 'stealthrock': 15, 'bite': 17, 'charm': 20, 'ancientpower': 26, 'dragontail': 30, 'crunch': 34, 'dragonclaw': 37, 'thrash': 40, 'earthquake': 44, 'horndrill': 49}
  },
  "tyrantrum": {
    "moves": {'rockslide': 'Evo.', 'headsmash': 58, 'tailwhip': 1, 'tackle': 1, 'roar': 6, 'stomp': 10, 'bide': 12, 'stealthrock': 15, 'bite': 17, 'charm': 20, 'ancientpower': 26, 'dragontail': 30, 'crunch': 34, 'dragonclaw': 37, 'thrash': 42, 'earthquake': 47, 'horndrill': 53, 'gigaimpact': 68}
  },
  "amaura": {
    "moves": {'growl': 1, 'powdersnow': 1, 'thunderwave': 5, 'rockthrow': 10, 'icywind': 13, 'takedown': 15, 'mist': 18, 'aurorabeam': 20, 'ancientpower': 26, 'round': 30, 'avalanche': 34, 'hail': 38, 'naturepower': 41, 'encore': 44, 'lightscreen': 47, 'icebeam': 50, 'hyperbeam': 57, 'blizzard': 65}
  },
  "aurorus": {
    "moves": {'freezedry': 'Evo.', 'growl': 1, 'powdersnow': 1, 'thunderwave': 5, 'rockthrow': 10, 'icywind': 13, 'takedown': 15, 'mist': 18, 'aurorabeam': 20, 'ancientpower': 26, 'round': 30, 'avalanche': 34, 'hail': 38, 'naturepower': 43, 'encore': 46, 'lightscreen': 50, 'icebeam': 56, 'hyperbeam': 63, 'blizzard': 74}
  },
  "sylveon": {
    "moves": {'covet': 1, 'bite': 1, 'copycat': 1, 'batonpass': 1, 'takedown': 1, 'charm': 1, 'doubleedge': 1, 'helpinghand': 1, 'tackle': 1, 'growl': 1, 'tailwhip': 1, 'disarmingvoice': 'Evo.', 'sandattack': 5, 'quickattack': 10, 'babydolleyes': 15, 'swift': 20, 'lightscreen': 25, 'drainingkiss': 30, 'mistyterrain': 35, 'skillswap': 40, 'psychup': 45, 'moonblast': 50, 'lastresort': 55}
  },
  "hawlucha": {
    "moves": {'tackle': 1, 'honeclaws': 1, 'wingattack': 4, 'detect': 8, 'aerialace': 12, 'encore': 16, 'featherdance': 20, 'brickbreak': 24, 'bounce': 28, 'taunt': 32, 'roost': 36, 'swordsdance': 40, 'flyingpress': 44, 'highjumpkick': 48, 'endeavor': 52, 'skyattack': 56}
  },
  "dedenne": {
    "moves": {'nuzzle': 1, 'tailwhip': 1, 'tackle': 5, 'charge': 10, 'thundershock': 15, 'charm': 20, 'paraboliccharge': 25, 'voltswitch': 30, 'rest': 35, 'snore': 35, 'discharge': 40, 'playrough': 45, 'superfang': 50, 'entrainment': 55, 'thunder': 60}
  },
  "carbink": {
    "moves": {'tackle': 1, 'harden': 1, 'guardsplit': 5, 'smackdown': 10, 'flail': 15, 'ancientpower': 20, 'rockpolish': 25, 'lightscreen': 30, 'rockslide': 35, 'skillswap': 40, 'powergem': 45, 'stealthrock': 50, 'moonblast': 55, 'stoneedge': 60}
  },
  "goomy": {
    "moves": {'absorb': 1, 'tackle': 1, 'watergun': 5, 'dragonbreath': 10, 'protect': 15, 'flail': 20, 'waterpulse': 25, 'raindance': 30, 'dragonpulse': 35, 'curse': 41, 'bodyslam': 45, 'muddywater': 50}
  },
  "sliggoo": {
    "moves": {'acidarmor': 1, 'absorb': 1, 'tackle': 1, 'watergun': 1, 'dragonbreath': 1, 'acidspray': 'Evo.', 'protect': 15, 'flail': 20, 'waterpulse': 25, 'raindance': 30, 'dragonpulse': 35, 'curse': 43, 'bodyslam': 49, 'muddywater': 56, 'shelter': 'Evo.', 'ironhead': 49}
  },
  "goodra": {
    "moves": {'acidspray': 1, 'poisontail': 1, 'tearfullook': 1, 'feint': 1, 'absorb': 1, 'tackle': 1, 'watergun': 1, 'dragonbreath': 1, 'aquatail': 'Evo.', 'protect': 15, 'flail': 20, 'waterpulse': 25, 'raindance': 30, 'curse': 43, 'bodyslam': 49, 'muddywater': 58, 'powerwhip': 67, 'shelter': 1, 'irontail': 'Evo.', 'dragonpulse': 35, 'ironhead': 49, 'heavyslam': 67}
  },
  "klefki": {
    "moves": {'astonish': 1, 'tackle': 4, 'fairywind': 8, 'torment': 12, 'fairylock': 16, 'metalsound': 20, 'drainingkiss': 24, 'recycle': 28, 'imprison': 32, 'flashcannon': 36, 'playrough': 40, 'magicroom': 44, 'foulplay': 48, 'lastresort': 52}
  },
  "phantump": {
    "moves": {'astonish': 1, 'tackle': 1, 'branchpoke': 4, 'leechseed': 8, 'confuseray': 12, 'willowisp': 16, 'hex': 20, 'growth': 24, 'hornleech': 28, 'curse': 32, 'phantomforce': 36, 'ingrain': 40, 'woodhammer': 44, 'destinybond': 48, 'forestscurse': 52}
  },
  "trevenant": {
    "moves": {'astonish': 1, 'tackle': 1, 'branchpoke': 1, 'leechseed': 1, 'shadowclaw': 'Evo.', 'confuseray': 12, 'willowisp': 16, 'hex': 20, 'growth': 24, 'hornleech': 28, 'curse': 32, 'phantomforce': 36, 'ingrain': 40, 'woodhammer': 44, 'destinybond': 48, 'forestscurse': 52}
  },
  "pumpkaboo": {
    "moves": {'trick': 1, 'astonish': 1, 'confuseray': 1, 'scaryface': 4, 'trickortreat': 40, 'worryseed': 11, 'razorleaf': 16, 'leechseed': 20, 'bulletseed': 26, 'shadowsneak': 30, 'shadowball': 36, 'painsplit': 42, 'seedbomb': 48}
  },
  "gourgeist": {
    "moves": {'explosion': 70, 'phantomforce': 57, 'trick': 1, 'astonish': 1, 'confuseray': 1, 'scaryface': 4, 'trickortreat': 63, 'worryseed': 11, 'razorleaf': 16, 'leechseed': 20, 'bulletseed': 26, 'shadowsneak': 30, 'shadowball': 36, 'painsplit': 42, 'seedbomb': 48}
  },
  "bergmite": {
    "moves": {'rapidspin': 1, 'harden': 1, 'tackle': 3, 'powdersnow': 6, 'curse': 9, 'icywind': 12, 'protect': 15, 'avalanche': 18, 'bite': 21, 'icefang': 24, 'irondefense': 27, 'recover': 30, 'crunch': 33, 'takedown': 36, 'blizzard': 39, 'doubleedge': 42}
  },
  "avalugg": {
    "moves": {'wideguard': 1, 'rapidspin': 1, 'harden': 1, 'tackle': 1, 'powdersnow': 1, 'bodyslam': 'Evo.', 'curse': 9, 'icywind': 12, 'protect': 15, 'avalanche': 18, 'bite': 21, 'icefang': 24, 'irondefense': 27, 'recover': 30, 'crunch': 33, 'takedown': 36, 'blizzard': 41, 'doubleedge': 46, 'iciclecrash': 51, 'rockslide': 'Evo.', 'stoneedge': 51, 'mountaingale': 61}
  },
  "noibat": {
    "moves": {'tackle': 1, 'absorb': 1, 'gust': 4, 'supersonic': 8, 'doubleteam': 12, 'wingattack': 16, 'bite': 20, 'aircutter': 24, 'whirlwind': 28, 'superfang': 32, 'airslash': 36, 'screech': 40, 'roost': 44, 'tailwind': 49, 'hurricane': 52}
  },
  "noivern": {
    "moves": {'moonlight': 1, 'absorb': 1, 'tackle': 1, 'gust': 1, 'supersonic': 1, 'dragonpulse': 'Evo.', 'doubleteam': 12, 'wingattack': 16, 'bite': 20, 'aircutter': 24, 'whirlwind': 28, 'superfang': 32, 'airslash': 36, 'screech': 40, 'roost': 44, 'tailwind': 51, 'hurricane': 56, 'boomburst': 62}
  },
  "xerneas": {
    "moves": {'healpulse': 1, 'aromatherapy': 1, 'ingrain': 1, 'takedown': 1, 'lightscreen': 5, 'aurorabeam': 10, 'gravity': 18, 'geomancy': 26, 'moonblast': 35, 'megahorn': 44, 'nightslash': 51, 'hornleech': 55, 'psychup': 59, 'mistyterrain': 63, 'naturepower': 72, 'closecombat': 80, 'gigaimpact': 88, 'outrage': 93}
  },
  "yveltal": {
    "moves": {'hurricane': 1, 'razorwind': 1, 'taunt': 1, 'roost': 1, 'doubleteam': 5, 'airslash': 10, 'snarl': 18, 'oblivionwing': 26, 'disable': 35, 'darkpulse': 44, 'foulplay': 51, 'phantomforce': 55, 'psychic': 59, 'dragonrush': 63, 'focusblast': 72, 'suckerpunch': 80, 'hyperbeam': 88, 'skyattack': 93}
  },
  "zygarde": {
    "moves": {'glare': 1, 'bulldoze': 1, 'dragonbreath': 1, 'bite': 1, 'safeguard': 5, 'dig': 10, 'bind': 18, 'landswrath': 26, 'sandstorm': 35, 'haze': 44, 'crunch': 51, 'earthquake': 55, 'camouflage': 59, 'dragonpulse': 63, 'coil': 72, 'outrage': 80}
  },
  "diancie": {
    "moves": {'diamondstorm': 1, 'tackle': 1, 'harden': 1, 'guardsplit': 7, 'smackdown': 14, 'flail': 21, 'ancientpower': 28, 'rockpolish': 35, 'lightscreen': 42, 'rockslide': 49, 'skillswap': 56, 'powergem': 63, 'stealthrock': 70, 'moonblast': 77, 'stoneedge': 84}
  },
  "hoopa": {
    "moves": {'destinybond': 1, 'allyswitch': 1, 'confusion': 1, 'astonish': 6, 'trick': 10, 'lightscreen': 15, 'psybeam': 19, 'skillswap': 25, 'guardsplit': 29, 'powersplit': 29, 'phantomforce': 35, 'zenheadbutt': 46, 'trickroom': 50, 'wonderroom': 50, 'shadowball': 55, 'nastyplot': 68, 'psychic': 75, 'hyperspacehole': 85, 'knockoff': 46, 'darkpulse': 55, 'hyperspacefury': 85}
  },
  "volcanion": {
    "moves": {'steameruption': 1, 'firespin': 1, 'watergun': 1, 'leer': 6, 'weatherball': 12, 'flamecharge': 18, 'waterpulse': 24, 'scaryface': 30, 'incinerate': 36, 'stomp': 42, 'scald': 48, 'takedown': 54, 'mist': 60, 'haze': 60, 'hydropump': 66, 'flareblitz': 78, 'overheat': 84, 'explosion': 90}
  },
  "rowlet": {
    "moves": {'tackle': 1, 'growl': 1, 'leafage': 3, 'astonish': 6, 'peck': 9, 'shadowsneak': 12, 'razorleaf': 15, 'synthesis': 18, 'pluck': 21, 'nastyplot': 24, 'suckerpunch': 27, 'leafblade': 30, 'featherdance': 33, 'bravebird': 36}
  },
  "dartrix": {
    "moves": {'tackle': 1, 'growl': 1, 'leafage': 1, 'astonish': 1, 'peck': 9, 'shadowsneak': 12, 'razorleaf': 15, 'synthesis': 20, 'pluck': 25, 'nastyplot': 30, 'suckerpunch': 35, 'leafblade': 40, 'featherdance': 45, 'bravebird': 50}
  },
  "decidueye": {
    "moves": {'phantomforce': 1, 'leafstorm': 1, 'uturn': 1, 'spite': 1, 'tackle': 1, 'growl': 1, 'leafage': 1, 'astonish': 1, 'spiritshackle': 'Evo.', 'peck': 9, 'shadowsneak': 12, 'razorleaf': 15, 'synthesis': 20, 'pluck': 25, 'nastyplot': 30, 'suckerpunch': 37, 'leafblade': 44, 'featherdance': 51, 'bravebird': 58, 'triplearrows': 'Evo.', 'bulkup': 30}
  },
  "litten": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 3, 'lick': 6, 'roar': 9, 'furyswipes': 12, 'bite': 15, 'doublekick': 18, 'firefang': 21, 'scaryface': 24, 'swagger': 27, 'flamethrower': 30, 'thrash': 33, 'flareblitz': 36}
  },
  "torracat": {
    "moves": {'scratch': 1, 'growl': 1, 'ember': 1, 'lick': 1, 'roar': 9, 'furyswipes': 12, 'bite': 15, 'doublekick': 20, 'firefang': 25, 'scaryface': 30, 'swagger': 35, 'flamethrower': 40, 'thrash': 45, 'flareblitz': 50}
  },
  "incineroar": {
    "moves": {'crosschop': 1, 'bulkup': 1, 'ember': 1, 'lick': 1, 'scratch': 'Rem.', 'growl': 'Rem.', 'throatchop': 'Rem.', 'darkestlariat': 'Evo.', 'roar': 9, 'furyswipes': 12, 'bite': 15, 'doublekick': 20, 'firefang': 25, 'scaryface': 30, 'swagger': 32, 'flamethrower': 44, 'thrash': 51, 'flareblitz': 58}
  },
  "popplio": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 3, 'disarmingvoice': 6, 'aquajet': 9, 'babydolleyes': 12, 'icywind': 15, 'sing': 18, 'bubblebeam': 21, 'encore': 24, 'mistyterrain': 27, 'hypervoice': 30, 'moonblast': 33, 'hydropump': 36}
  },
  "brionne": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 1, 'disarmingvoice': 1, 'aquajet': 9, 'babydolleyes': 12, 'icywind': 15, 'sing': 20, 'bubblebeam': 25, 'encore': 30, 'mistyterrain': 35, 'hypervoice': 40, 'moonblast': 45, 'hydropump': 50}
  },
  "primarina": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 1, 'disarmingvoice': 1, 'sparklingaria': 'Evo.', 'aquajet': 9, 'babydolleyes': 12, 'icywind': 15, 'sing': 20, 'bubblebeam': 25, 'encore': 30, 'mistyterrain': 37, 'hypervoice': 44, 'moonblast': 51, 'hydropump': 58}
  },
  "pikipek": {
    "moves": {'peck': 1, 'growl': 3, 'echoedvoice': 7, 'rocksmash': 9, 'supersonic': 13, 'pluck': 15, 'roost': 19, 'furyattack': 21, 'screech': 25, 'drillpeck': 27, 'bulletseed': 31, 'featherdance': 33, 'hypervoice': 37}
  },
  "trumbeak": {
    "moves": {'rockblast': 1, 'peck': 1, 'growl': 1, 'rocksmash': 1, 'echoedvoice': 'Rem.', 'supersonic': 13, 'pluck': 16, 'roost': 21, 'furyattack': 24, 'screech': 29, 'drillpeck': 32, 'bulletseed': 37, 'featherdance': 40, 'hypervoice': 45}
  },
  "toucannon": {
    "moves": {'rockblast': 1, 'peck': 1, 'growl': 1, 'echoedvoice': 1, 'rocksmash': 1, 'beakblast': 'Evo.', 'supersonic': 13, 'pluck': 16, 'roost': 21, 'furyattack': 24, 'screech': 30, 'drillpeck': 34, 'bulletseed': 40, 'featherdance': 44, 'hypervoice': 50}
  },
  "yungoos": {
    "moves": {'tackle': 1, 'leer': 3, 'payback': 7, 'sandattack': 10, 'workup': 13, 'bite': 19, 'mudslap': 22, 'superfang': 25, 'takedown': 28, 'scaryface': 31, 'crunch': 34, 'yawn': 37, 'thrash': 40, 'rest': 43}
  },
  "gumshoos": {
    "moves": {'tackle': 1, 'leer': 1, 'payback': 1, 'sandattack': 1, 'workup': 13, 'bite': 19, 'mudslap': 23, 'superfang': 27, 'takedown': 31, 'scaryface': 35, 'crunch': 39, 'yawn': 43, 'thrash': 47, 'rest': 52}
  },
  "grubbin": {
    "moves": {'visegrip': 1, 'mudslap': 1, 'stringshot': 5, 'bugbite': 10, 'bite': 15, 'spark': 21, 'stickyweb': 25, 'xscissor': 30, 'crunch': 35, 'dig': 40}
  },
  "charjabug": {
    "moves": {'visegrip': 1, 'mudslap': 1, 'stringshot': 1, 'bugbite': 1, 'charge': 'Evo.', 'bite': 15, 'spark': 23, 'stickyweb': 29, 'xscissor': 36, 'crunch': 43, 'dig': 50, 'irondefense': 57, 'discharge': 64}
  },
  "vikavolt": {
    "moves": {'charge': 1, 'crunch': 1, 'discharge': 1, 'stringshot': 1, 'visegrip': 'Rem.', 'dig': 'Rem.', 'mudslap': 'Rem.', 'irondefense': 'Rem.', 'xscissor': 'Rem.', 'bugbite': 'Rem.', 'thunderbolt': 'Evo.', 'bite': 15, 'spark': 23, 'stickyweb': 29, 'bugbuzz': 36, 'guillotine': 43, 'fly': 50, 'agility': 57, 'zapcannon': 64}
  },
  "crabrawler": {
    "moves": {'visegrip': 1, 'rocksmash': 5, 'leer': 9, 'bubblebeam': 13, 'protect': 17, 'brickbreak': 22, 'slam': 25, 'payback': 29, 'reversal': 33, 'crabhammer': 37, 'irondefense': 42, 'dynamicpunch': 45, 'closecombat': 49}
  },
  "crabominable": {
    "moves": {'rocksmash': 1, 'leer': 1, 'protect': 1, 'icepunch': 'Evo.', 'bubblebeam': 17, 'brickbreak': 22, 'slam': 25, 'avalanche': 29, 'reversal': 33, 'icehammer': 37, 'irondefense': 42, 'dynamicpunch': 45, 'closecombat': 49}
  },
  "oricorio": {
    "moves": {'pound': 1, 'growl': 4, 'peck': 6, 'helpinghand': 10, 'aircutter': 13, 'batonpass': 16, 'featherdance': 20, 'acrobatics': 23, 'teeterdance': 26, 'roost': 30, 'flatter': 33, 'airslash': 36, 'revelationdance': 40, 'agility': 43, 'hurricane': 47}
  },
  "cutiefly": {
    "moves": {'absorb': 1, 'fairywind': 1, 'stunspore': 6, 'sweetscent': 12, 'drainingkiss': 18, 'strugglebug': 24, 'covet': 30, 'switcheroo': 36, 'dazzlinggleam': 42, 'bugbuzz': 48, 'quiverdance': 54}
  },
  "ribombee": {
    "moves": {'absorb': 1, 'fairywind': 1, 'stunspore': 1, 'sweetscent': 1, 'pollenpuff': 'Evo.', 'drainingkiss': 18, 'strugglebug': 24, 'covet': 32, 'switcheroo': 40, 'dazzlinggleam': 48, 'bugbuzz': 56, 'quiverdance': 64}
  },
  "rockruff": {
    "moves": {'tackle': 1, 'leer': 1, 'sandattack': 4, 'doubleteam': 8, 'rockthrow': 12, 'howl': 16, 'bite': 20, 'rocktomb': 24, 'roar': 28, 'rockslide': 32, 'crunch': 36, 'scaryface': 40, 'stealthrock': 44, 'stoneedge': 48}
  },
  "lycanroc": {
    "moves": {'accelerock': 1, 'quickguard': 1, 'quickattack': 1, 'tackle': 1, 'leer': 1, 'sandattack': 1, 'doubleteam': 1, 'suckerpunch': 1, 'rockthrow': 12, 'howl': 16, 'bite': 20, 'rocktomb': 24, 'roar': 30, 'rockslide': 36, 'crunch': 42, 'scaryface': 48, 'stealthrock': 54, 'stoneedge': 60, 'endure': 1, 'reversal': 1, 'taunt': 1, 'counter': 1, 'crushclaw': 'Evo.'}
  },
  "wishiwashi": {
    "moves": {'watergun': 1, 'growl': 1, 'helpinghand': 4, 'beatup': 8, 'brine': 12, 'tearfullook': 16, 'dive': 20, 'soak': 24, 'uproar': 28, 'aquatail': 32, 'aquaring': 36, 'endeavor': 40, 'hydropump': 44, 'doubleedge': 48}
  },
  "mareanie": {
    "moves": {'poisonsting': 1, 'peck': 1, 'wideguard': 5, 'bite': 10, 'venoshock': 15, 'recover': 20, 'pinmissile': 25, 'toxicspikes': 30, 'liquidation': 35, 'acidspray': 40, 'poisonjab': 45, 'toxic': 50}
  },
  "toxapex": {
    "moves": {'poisonsting': 1, 'peck': 1, 'wideguard': 1, 'bite': 1, 'banefulbunker': 'Evo.', 'venoshock': 15, 'recover': 20, 'pinmissile': 25, 'toxicspikes': 30, 'liquidation': 35, 'acidspray': 42, 'poisonjab': 49, 'toxic': 56}
  },
  "mudbray": {
    "moves": {'mudslap': 1, 'rocksmash': 1, 'irondefense': 4, 'doublekick': 8, 'bulldoze': 12, 'stomp': 16, 'strength': 20, 'counter': 24, 'highhorsepower': 28, 'heavyslam': 32, 'earthquake': 36, 'megakick': 40, 'superpower': 44}
  },
  "mudsdale": {
    "moves": {'mudslap': 1, 'rocksmash': 1, 'irondefense': 1, 'doublekick': 1, 'bulldoze': 12, 'stomp': 16, 'strength': 20, 'counter': 24, 'highhorsepower': 28, 'heavyslam': 34, 'earthquake': 40, 'megakick': 46, 'superpower': 52}
  },
  "dewpider": {
    "moves": {'watergun': 1, 'infestation': 1, 'bugbite': 4, 'bite': 8, 'bubblebeam': 12, 'aquaring': 16, 'headbutt': 20, 'crunch': 24, 'soak': 28, 'entrainment': 32, 'lunge': 36, 'liquidation': 40, 'leechlife': 44, 'mirrorcoat': 48}
  },
  "araquanid": {
    "moves": {'wideguard': 1, 'watergun': 1, 'infestation': 1, 'bugbite': 1, 'bite': 1, 'bubblebeam': 12, 'aquaring': 16, 'headbutt': 20, 'crunch': 26, 'soak': 32, 'entrainment': 38, 'lunge': 44, 'liquidation': 50, 'leechlife': 56, 'mirrorcoat': 62}
  },
  "fomantis": {
    "moves": {'leafage': 1, 'furycutter': 1, 'growth': 5, 'ingrain': 10, 'razorleaf': 15, 'sweetscent': 20, 'slash': 25, 'xscissor': 30, 'synthesis': 35, 'leafblade': 40, 'sunnyday': 45, 'solarbeam': 50}
  },
  "lurantis": {
    "moves": {'nightslash': 1, 'solarbeam': 1, 'leafage': 1, 'furycutter': 1, 'growth': 1, 'ingrain': 1, 'petalblizzard': 'Evo.', 'razorleaf': 15, 'sweetscent': 20, 'slash': 25, 'xscissor': 30, 'synthesis': 37, 'leafblade': 44, 'sunnyday': 51, 'solarblade': 63}
  },
  "morelull": {
    "moves": {'absorb': 1, 'astonish': 1, 'confuseray': 4, 'ingrain': 8, 'megadrain': 12, 'sleeppowder': 16, 'moonlight': 20, 'strengthsap': 25, 'gigadrain': 28, 'dazzlinggleam': 32, 'spore': 36, 'moonblast': 40, 'dreameater': 44}
  },
  "shiinotic": {
    "moves": {'absorb': 1, 'astonish': 1, 'confuseray': 1, 'ingrain': 1, 'megadrain': 12, 'sleeppowder': 16, 'moonlight': 20, 'strengthsap': 27, 'gigadrain': 32, 'dazzlinggleam': 38, 'spore': 44, 'moonblast': 50, 'dreameater': 56}
  },
  "salandit": {
    "moves": {'scratch': 1, 'poisongas': 1, 'smog': 5, 'ember': 10, 'poisonfang': 15, 'sweetscent': 20, 'nastyplot': 25, 'incinerate': 30, 'venoshock': 35, 'dragonpulse': 40, 'flamethrower': 45, 'toxic': 50, 'endeavor': 55}
  },
  "salazzle": {
    "moves": {'knockoff': 1, 'encore': 1, 'torment': 1, 'swagger': 1, 'disable': 1, 'scratch': 1, 'endeavor': 1, 'pound': 1, 'poisongas': 1, 'smog': 1, 'ember': 1, 'firelash': 'Evo.', 'poisonfang': 15, 'sweetscent': 20, 'nastyplot': 25, 'incinerate': 30, 'venoshock': 37, 'dragonpulse': 44, 'flamethrower': 51, 'toxic': 58}
  },
  "stufful": {
    "moves": {'tackle': 1, 'leer': 1, 'babydolleyes': 4, 'payback': 8, 'brutalswing': 12, 'endure': 16, 'strength': 20, 'takedown': 24, 'flail': 28, 'hammerarm': 32, 'thrash': 36, 'painsplit': 40, 'doubleedge': 44, 'superpower': 48}
  },
  "bewear": {
    "moves": {'bind': 'Evo.', 'tackle': 1, 'leer': 1, 'babydolleyes': 1, 'payback': 1, 'brutalswing': 12, 'endure': 16, 'strength': 20, 'takedown': 24, 'flail': 30, 'hammerarm': 36, 'thrash': 42, 'painsplit': 48, 'doubleedge': 54, 'superpower': 60}
  },
  "bounsweet": {
    "moves": {'splash': 1, 'playnice': 4, 'rapidspin': 8, 'razorleaf': 12, 'sweetscent': 16, 'magicalleaf': 20, 'flail': 24, 'teeterdance': 28, 'aromaticmist': 32}
  },
  "steenee": {
    "moves": {'flail': 1, 'splash': 1, 'playnice': 1, 'rapidspin': 1, 'razorleaf': 1, 'sweetscent': 16, 'magicalleaf': 22, 'stomp': 28, 'teeterdance': 34, 'aromaticmist': 40, 'leafstorm': 46}
  },
  "tsareena": {
    "moves": {'powerwhip': 1, 'flail': 1, 'playnice': 1, 'splash': 1, 'swagger': 1, 'rapidspin': 1, 'razorleaf': 1, 'tropkick': 'Evo.', 'sweetscent': 16, 'magicalleaf': 22, 'stomp': 28, 'teeterdance': 34, 'aromaticmist': 40, 'leafstorm': 46, 'highjumpkick': 58}
  },
  "comfey": {
    "moves": {'wrap': 1, 'growth': 1, 'vinewhip': 3, 'helpinghand': 6, 'drainingkiss': 9, 'charm': 12, 'magicalleaf': 15, 'synthesis': 18, 'leechseed': 21, 'grassknot': 24, 'sweetkiss': 27, 'floralhealing': 30, 'petalblizzard': 33, 'bind': 36, 'playrough': 39, 'sweetscent': 42, 'petaldance': 45, 'grassyterrain': 48}
  },
  "oranguru": {
    "moves": {'confusion': 1, 'taunt': 1, 'afteryou': 5, 'calmmind': 10, 'storedpower': 15, 'psychup': 20, 'quash': 25, 'nastyplot': 30, 'zenheadbutt': 35, 'trickroom': 40, 'psychic': 45, 'instruct': 50, 'foulplay': 55, 'futuresight': 60}
  },
  "passimian": {
    "moves": {'tackle': 1, 'leer': 1, 'rocksmash': 5, 'focusenergy': 10, 'beatup': 15, 'scaryface': 20, 'takedown': 25, 'fling': 30, 'bulkup': 35, 'thrash': 40, 'doubleedge': 45, 'closecombat': 50, 'reversal': 55, 'gigaimpact': 60}
  },
  "wimpod": {
    "moves": {'strugglebug': 1, 'sandattack': 1, 'defensecurl': 1}
  },
  "golisopod": {
    "moves": {'firstimpression': 'Evo.', 'strugglebug': 1, 'sandattack': 1, 'defensecurl': 1, 'spite': 1, 'rocksmash': 4, 'furycutter': 8, 'mudshot': 12, 'bugbite': 16, 'irondefense': 20, 'suckerpunch': 24, 'slash': 28, 'razorshell': 32, 'pinmissile': 36, 'swordsdance': 40, 'liquidation': 44}
  },
  "sandygast": {
    "moves": {'absorb': 1, 'harden': 1, 'astonish': 5, 'sandtomb': 10, 'megadrain': 15, 'sandattack': 20, 'bulldoze': 25, 'hypnosis': 30, 'gigadrain': 35, 'irondefense': 40, 'shadowball': 45, 'earthpower': 50, 'shoreup': 55, 'sandstorm': 60}
  },
  "palossand": {
    "moves": {'absorb': 1, 'harden': 1, 'astonish': 1, 'sandtomb': 1, 'megadrain': 15, 'sandattack': 20, 'bulldoze': 25, 'hypnosis': 30, 'gigadrain': 35, 'irondefense': 40, 'shadowball': 47, 'earthpower': 54, 'shoreup': 61, 'sandstorm': 68}
  },
  "pyukumuku": {
    "moves": {'batonpass': 1, 'harden': 1, 'helpinghand': 5, 'taunt': 10, 'safeguard': 15, 'counter': 20, 'purify': 25, 'curse': 30, 'gastroacid': 35, 'painsplit': 40, 'recover': 45, 'soak': 50, 'toxic': 55, 'memento': 60}
  },
  "type:null": {
    "moves": {'tackle': 1, 'imprison': 1, 'aerialace': 5, 'scaryface': 10, 'doublehit': 15, 'metalsound': 20, 'crushclaw': 25, 'airslash': 30, 'triattack': 35, 'xscissor': 40, 'ironhead': 45, 'takedown': 50, 'doubleedge': 55}
  },
  "silvally": {
    "moves": {'multiattack': 'Evo.', 'explosion': 1, 'thunderfang': 1, 'icefang': 1, 'firefang': 1, 'poisonfang': 1, 'imprison': 1, 'ironhead': 1, 'tackle': 1, 'bite': 1, 'aerialace': 1, 'scaryface': 1, 'doublehit': 15, 'metalsound': 20, 'crushclaw': 25, 'airslash': 30, 'triattack': 35, 'xscissor': 40, 'crunch': 45, 'takedown': 50, 'doubleedge': 55, 'partingshot': 60}
  },
  "minior": {
    "moves": {'tackle': 1, 'defensecurl': 3, 'rollout': 8, 'confuseray': 10, 'swift': 15, 'ancientpower': 17, 'selfdestruct': 22, 'stealthrock': 24, 'takedown': 29, 'rockpolish': 31, 'cosmicpower': 36, 'powergem': 38, 'doubleedge': 43, 'shellsmash': 45, 'explosion': 50}
  },
  "komala": {
    "moves": {'defensecurl': 1, 'rollout': 1, 'stockpile': 6, 'spitup': 6, 'swallow': 6, 'rapidspin': 11, 'yawn': 16, 'slam': 21, 'flail': 26, 'suckerpunch': 31, 'psychup': 36, 'woodhammer': 41, 'thrash': 46}
  },
  "turtonator": {
    "moves": {'smog': 1, 'tackle': 1, 'ember': 4, 'protect': 8, 'endure': 12, 'flail': 16, 'incinerate': 20, 'irondefense': 24, 'dragonpulse': 28, 'bodyslam': 32, 'flamethrower': 36, 'shelltrap': 40, 'shellsmash': 44, 'overheat': 48, 'explosion': 52}
  },
  "togedemaru": {
    "moves": {'nuzzle': 1, 'tackle': 1, 'defensecurl': 5, 'charge': 10, 'thundershock': 15, 'fellstinger': 20, 'spark': 25, 'pinmissile': 30, 'magnetrise': 35, 'zingzap': 40, 'discharge': 45, 'electricterrain': 50, 'wildcharge': 55, 'spikyshield': 60}
  },
  "mimikyu": {
    "moves": {'splash': 1, 'scratch': 1, 'astonish': 1, 'copycat': 1, 'woodhammer': 1, 'shadowsneak': 6, 'doubleteam': 12, 'babydolleyes': 18, 'mimic': 24, 'honeclaws': 30, 'slash': 36, 'shadowclaw': 42, 'charm': 48, 'playrough': 54, 'painsplit': 60}
  },
  "bruxish": {
    "moves": {'watergun': 1, 'astonish': 4, 'confusion': 9, 'bite': 12, 'aquajet': 17, 'disable': 20, 'psyshock': 25, 'crunch': 28, 'aquatail': 33, 'screech': 36, 'psychicfangs': 41, 'wavecrash': 44}
  },
  "drampa": {
    "moves": {'playnice': 1, 'echoedvoice': 1, 'twister': 5, 'protect': 9, 'glare': 13, 'lightscreen': 17, 'dragonrage': 21, 'naturalgift': 25, 'dragonbreath': 29, 'safeguard': 33, 'extrasensory': 37, 'dragonpulse': 41, 'fly': 45, 'hypervoice': 49, 'outrage': 53}
  },
  "dhelmise": {
    "moves": {'absorb': 1, 'rapidspin': 1, 'astonish': 4, 'wrap': 8, 'megadrain': 12, 'growth': 16, 'gyroball': 20, 'switcheroo': 24, 'gigadrain': 28, 'whirlpool': 32, 'heavyslam': 36, 'slam': 40, 'shadowball': 44, 'metalsound': 48, 'anchorshot': 52, 'energyball': 56, 'phantomforce': 60, 'powerwhip': 64}
  },
  "jangmo-o": {
    "moves": {'tackle': 1, 'leer': 1, 'protect': 4, 'dragontail': 8, 'scaryface': 12, 'headbutt': 16, 'workup': 20, 'screech': 24, 'irondefense': 28, 'dragonclaw': 32, 'nobleroar': 36, 'dragondance': 40, 'outrage': 44}
  },
  "hakamo-o": {
    "moves": {'tackle': 1, 'leer': 1, 'protect': 1, 'dragontail': 1, 'scaryface': 12, 'headbutt': 16, 'workup': 20, 'screech': 24, 'irondefense': 28, 'dragonclaw': 32, 'nobleroar': 38, 'dragondance': 44, 'outrage': 50, 'closecombat': 56}
  },
  "kommo-o": {
    "moves": {'tackle': 1, 'leer': 1, 'protect': 1, 'dragontail': 1, 'bellydrum': 'Rem.', 'clangingscales': 'Evo.', 'scaryface': 12, 'headbutt': 16, 'workup': 20, 'screech': 24, 'irondefense': 28, 'dragonclaw': 32, 'nobleroar': 38, 'dragondance': 44, 'outrage': 52, 'closecombat': 60, 'clangoroussoul': 68, 'boomburst': 76}
  },
  "tapukoko": {
    "moves": {'quickattack': 1, 'thundershock': 1, 'withdraw': 5, 'fairywind': 10, 'falseswipe': 15, 'spark': 20, 'shockwave': 25, 'charge': 30, 'agility': 35, 'screech': 40, 'discharge': 45, 'meanlook': 50, 'naturesmadness': 55, 'wildcharge': 60, 'bravebird': 65, 'powerswap': 70, 'electricterrain': 75}
  },
  "tapulele": {
    "moves": {'astonish': 1, 'confusion': 1, 'withdraw': 5, 'aromatherapy': 10, 'drainingkiss': 15, 'psybeam': 20, 'flatter': 25, 'aromaticmist': 30, 'sweetscent': 35, 'extrasensory': 40, 'psyshock': 45, 'meanlook': 50, 'naturesmadness': 55, 'moonblast': 60, 'tickle': 65, 'skillswap': 70, 'psychicterrain': 75}
  },
  "tapubulu": {
    "moves": {'leafage': 1, 'rocksmash': 1, 'withdraw': 5, 'disable': 10, 'leechseed': 15, 'megadrain': 20, 'whirlwind': 25, 'hornattack': 30, 'scaryface': 35, 'hornleech': 40, 'zenheadbutt': 45, 'meanlook': 50, 'naturesmadness': 55, 'woodhammer': 60, 'megahorn': 65, 'skullbash': 70, 'grassyterrain': 75}
  },
  "tapufini": {
    "moves": {'disarmingvoice': 1, 'watergun': 1, 'withdraw': 5, 'mist': 10, 'haze': 10, 'aquaring': 15, 'waterpulse': 20, 'brine': 25, 'defog': 30, 'healpulse': 35, 'surf': 40, 'muddywater': 45, 'meanlook': 50, 'naturesmadness': 55, 'moonblast': 60, 'hydropump': 65, 'soak': 70, 'mistyterrain': 75}
  },
  "cosmog": {
    "moves": {'splash': 1, 'teleport': 1}
  },
  "cosmoem": {
    "moves": {'teleport': 1, 'cosmicpower': 'Evo.'}
  },
  "solgaleo": {
    "moves": {'cosmicpower': 1, 'teleport': 1, 'metalclaw': 1, 'nobleroar': 1, 'sunsteelstrike': 'Evo.', 'ironhead': 7, 'metalsound': 14, 'zenheadbutt': 21, 'flashcannon': 28, 'morningsun': 35, 'crunch': 42, 'metalburst': 49, 'wildcharge': 56, 'solarbeam': 63, 'flareblitz': 70, 'wideguard': 77, 'gigaimpact': 84}
  },
  "lunala": {
    "moves": {'cosmicpower': 1, 'teleport': 1, 'confusion': 1, 'hypnosis': 1, 'moongeistbeam': 'Evo.', 'nightshade': 7, 'confuseray': 14, 'airslash': 21, 'shadowball': 28, 'moonlight': 35, 'nightdaze': 42, 'psychic': 49, 'moonblast': 56, 'phantomforce': 63, 'dreameater': 70, 'wideguard': 77}
  },
  "nihilego": {
    "moves": {'wrap': 1, 'pound': 1, 'acid': 5, 'tickle': 10, 'acidspray': 15, 'clearsmog': 20, 'powersplit': 25, 'guardsplit': 25, 'venoshock': 30, 'headbutt': 35, 'toxicspikes': 40, 'venomdrench': 45, 'powergem': 50, 'stealthrock': 55, 'mirrorcoat': 60, 'wonderroom': 65, 'headsmash': 70}
  },
  "buzzwole": {
    "moves": {'poweruppunch': 1, 'harden': 1, 'taunt': 5, 'fellstinger': 10, 'vitalthrow': 15, 'bulkup': 20, 'endure': 25, 'reversal': 30, 'megapunch': 35, 'lunge': 40, 'focusenergy': 45, 'dynamicpunch': 50, 'counter': 55, 'hammerarm': 60, 'superpower': 65, 'focuspunch': 70}
  },
  "pheromosa": {
    "moves": {'feint': 1, 'rapidspin': 1, 'leer': 5, 'quickguard': 10, 'bugbite': 15, 'lowkick': 20, 'doublekick': 25, 'triplekick': 30, 'stomp': 35, 'agility': 40, 'lunge': 45, 'bounce': 50, 'speedswap': 55, 'bugbuzz': 60, 'quiverdance': 65, 'highjumpkick': 70}
  },
  "xurkitree": {
    "moves": {'wrap': 1, 'thundershock': 1, 'charge': 5, 'thunderwave': 10, 'ingrain': 15, 'spark': 20, 'shockwave': 25, 'hypnosis': 30, 'eerieimpulse': 35, 'thunderpunch': 40, 'discharge': 45, 'magnetrise': 50, 'thunderbolt': 55, 'electricterrain': 60, 'powerwhip': 65, 'zapcannon': 70}
  },
  "celesteela": {
    "moves": {'absorb': 1, 'tackle': 1, 'harden': 5, 'wideguard': 10, 'megadrain': 15, 'smackdown': 20, 'ingrain': 25, 'autotomize': 30, 'gigadrain': 35, 'flashcannon': 40, 'metalsound': 45, 'irondefense': 50, 'leechseed': 55, 'heavyslam': 60, 'doubleedge': 65, 'skullbash': 70}
  },
  "kartana": {
    "moves": {'furycutter': 1, 'vacuumwave': 1, 'razorleaf': 5, 'falseswipe': 10, 'cut': 15, 'aircutter': 20, 'aerialace': 25, 'detect': 30, 'nightslash': 35, 'synthesis': 40, 'laserfocus': 45, 'defog': 50, 'leafblade': 55, 'sacredsword': 60, 'swordsdance': 65, 'guillotine': 70}
  },
  "guzzlord": {
    "moves": {'bite': 1, 'dragontail': 1, 'swallow': 5, 'stockpile': 5, 'knockoff': 10, 'stomp': 15, 'stompingtantrum': 20, 'wideguard': 25, 'crunch': 30, 'bodyslam': 35, 'gastroacid': 40, 'hammerarm': 45, 'heavyslam': 50, 'dragonrush': 55, 'belch': 60, 'thrash': 65, 'gigaimpact': 70}
  },
  "necrozma": {
    "moves": {'moonlight': 1, 'morningsun': 1, 'chargebeam': 1, 'metalclaw': 1, 'confusion': 1, 'stealthrock': 8, 'slash': 16, 'nightslash': 24, 'psychocut': 32, 'storedpower': 40, 'rockblast': 48, 'irondefense': 56, 'powergem': 64, 'photongeyser': 72, 'gravity': 80, 'prismaticlaser': 88}
  },
  "magearna": {
    "moves": {'gyroball': 1, 'helpinghand': 1, 'defensecurl': 6, 'rollout': 12, 'irondefense': 18, 'magneticflux': 24, 'psybeam': 30, 'aurorabeam': 36, 'lockon': 42, 'shiftgear': 48, 'trick': 54, 'ironhead': 60, 'aurasphere': 66, 'flashcannon': 72, 'painsplit': 78, 'zapcannon': 84, 'fleurcannon': 90}
  },
  "marshadow": {
    "moves": {'thunderpunch': 1, 'firepunch': 1, 'icepunch': 1, 'copycat': 1, 'shadowsneak': 1, 'feint': 1, 'counter': 1, 'roleplay': 9, 'shadowpunch': 18, 'forcepalm': 27, 'assurance': 36, 'suckerpunch': 45, 'drainpunch': 54, 'psychup': 63, 'spectralthief': 72, 'laserfocus': 81, 'endeavor': 90, 'closecombat': 99}
  },
  "poipole": {
    "moves": {'dragonpulse': 1, 'peck': 1, 'growl': 1, 'helpinghand': 1, 'acid': 1, 'furyattack': 7, 'fellstinger': 14, 'charm': 21, 'venoshock': 28, 'venomdrench': 35, 'nastyplot': 42, 'poisonjab': 49, 'gastroacid': 56, 'toxic': 63}
  },
  "naganadel": {
    "moves": {'aircutter': 'Evo.', 'airslash': 1, 'dragonpulse': 1, 'peck': 1, 'growl': 1, 'helpinghand': 1, 'acid': 1, 'furyattack': 7, 'fellstinger': 14, 'charm': 21, 'venoshock': 28, 'venomdrench': 35, 'nastyplot': 42, 'poisonjab': 49, 'gastroacid': 56, 'toxic': 63, 'dragonrush': 70}
  },
  "stakataka": {
    "moves": {'tackle': 1, 'harden': 1, 'rockthrow': 5, 'protect': 10, 'stomp': 15, 'block': 20, 'rockslide': 25, 'wideguard': 30, 'autotomize': 35, 'rockblast': 40, 'magnetrise': 45, 'irondefense': 50, 'ironhead': 55, 'takedown': 60, 'stealthrock': 65, 'doubleedge': 70}
  },
  "blacephalon": {
    "moves": {'astonish': 1, 'firespin': 1, 'lightscreen': 5, 'ember': 10, 'nightshade': 15, 'confuseray': 20, 'magiccoat': 25, 'incinerate': 30, 'hypnosis': 35, 'mysticalfire': 40, 'shadowball': 45, 'calmmind': 50, 'willowisp': 55, 'trick': 60, 'fireblast': 65, 'mindblown': 70}
  },
  "zeraora": {
    "moves": {'poweruppunch': 1, 'fakeout': 1, 'scratch': 1, 'quickattack': 1, 'snarl': 1, 'spark': 1, 'furyswipes': 8, 'quickguard': 16, 'slash': 24, 'voltswitch': 32, 'charge': 40, 'thunderpunch': 48, 'honeclaws': 56, 'discharge': 64, 'wildcharge': 72, 'agility': 80, 'plasmafists': 88, 'closecombat': 96}
  },
  "meltan": {
    "moves": {'thundershock': 1, 'harden': 1, 'tailwhip': 8, 'headbutt': 16, 'thunderwave': 24, 'acidarmor': 32, 'flashcannon': 40}
  },
  "melmetal": {
    "moves": {'thunderpunch': 'Evo.', 'thundershock': 1, 'harden': 1, 'tailwhip': 1, 'headbutt': 1, 'thunderwave': 24, 'acidarmor': 32, 'flashcannon': 40, 'megapunch': 48, 'protect': 56, 'discharge': 64, 'dynamicpunch': 72, 'superpower': 80, 'doubleironbash': 88, 'hyperbeam': 96}
  },
  "grookey": {
    "moves": {'scratch': 1, 'growl': 1, 'branchpoke': 6, 'taunt': 8, 'razorleaf': 12, 'screech': 17, 'knockoff': 20, 'slam': 24, 'uproar': 28, 'woodhammer': 32, 'endeavor': 36}
  },
  "thwackey": {
    "moves": {'scratch': 1, 'growl': 1, 'branchpoke': 1, 'taunt': 1, 'doublehit': 'Evo.', 'razorleaf': 12, 'screech': 19, 'knockoff': 24, 'slam': 30, 'uproar': 36, 'woodhammer': 42, 'endeavor': 48}
  },
  "rillaboom": {
    "moves": {'doublehit': 1, 'grassyterrain': 1, 'nobleroar': 1, 'scratch': 1, 'growl': 1, 'branchpoke': 1, 'taunt': 1, 'drumbeating': 'Evo.', 'razorleaf': 12, 'screech': 19, 'knockoff': 24, 'slam': 30, 'uproar': 38, 'woodhammer': 46, 'endeavor': 54, 'boomburst': 62}
  },
  "scorbunny": {
    "moves": {'tackle': 1, 'growl': 1, 'ember': 6, 'quickattack': 8, 'doublekick': 12, 'flamecharge': 17, 'agility': 20, 'headbutt': 24, 'counter': 28, 'bounce': 32, 'doubleedge': 36}
  },
  "raboot": {
    "moves": {'tackle': 1, 'growl': 1, 'ember': 1, 'quickattack': 1, 'doublekick': 12, 'flamecharge': 19, 'agility': 24, 'headbutt': 30, 'counter': 36, 'bounce': 42, 'doubleedge': 48}
  },
  "cinderace": {
    "moves": {'feint': 1, 'tackle': 1, 'growl': 1, 'ember': 1, 'quickattack': 1, 'pyroball': 'Evo.', 'doublekick': 12, 'flamecharge': 19, 'agility': 24, 'headbutt': 30, 'counter': 38, 'bounce': 46, 'doubleedge': 54, 'courtchange': 62}
  },
  "sobble": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 6, 'bind': 8, 'waterpulse': 12, 'tearfullook': 17, 'suckerpunch': 20, 'uturn': 24, 'liquidation': 28, 'soak': 32, 'raindance': 36}
  },
  "drizzile": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 1, 'bind': 1, 'waterpulse': 12, 'tearfullook': 19, 'suckerpunch': 24, 'uturn': 30, 'liquidation': 36, 'soak': 42, 'raindance': 48}
  },
  "inteleon": {
    "moves": {'acrobatics': 1, 'pound': 1, 'growl': 1, 'watergun': 1, 'bind': 1, 'snipeshot': 'Evo.', 'waterpulse': 12, 'tearfullook': 19, 'suckerpunch': 24, 'uturn': 30, 'liquidation': 38, 'soak': 46, 'raindance': 54, 'hydropump': 62}
  },
  "skwovet": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'bite': 5, 'stuffcheeks': 10, 'stockpile': 15, 'spitup': 15, 'swallow': 15, 'bodyslam': 20, 'rest': 25, 'counter': 30, 'bulletseed': 35, 'superfang': 40, 'belch': 45}
  },
  "greedent": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'bite': 1, 'stuffcheeks': 1, 'covet': 'Evo.', 'stockpile': 15, 'spitup': 15, 'swallow': 15, 'bodyslam': 20, 'rest': 27, 'counter': 34, 'bulletseed': 41, 'superfang': 48, 'belch': 55}
  },
  "rookidee": {
    "moves": {'peck': 1, 'leer': 1, 'powertrip': 4, 'honeclaws': 8, 'furyattack': 12, 'pluck': 16, 'taunt': 20, 'scaryface': 24, 'drillpeck': 28, 'swagger': 32, 'bravebird': 36}
  },
  "corvisquire": {
    "moves": {'peck': 1, 'leer': 1, 'powertrip': 1, 'honeclaws': 1, 'furyattack': 12, 'pluck': 16, 'taunt': 22, 'scaryface': 28, 'drillpeck': 34, 'swagger': 40, 'bravebird': 46}
  },
  "corviknight": {
    "moves": {'screech': 1, 'irondefense': 1, 'metalsound': 1, 'peck': 1, 'leer': 1, 'powertrip': 1, 'honeclaws': 1, 'steelwing': 'Evo.', 'furyattack': 12, 'pluck': 16, 'taunt': 22, 'scaryface': 28, 'drillpeck': 34, 'swagger': 42, 'bravebird': 50}
  },
  "blipbug": {
    "moves": {'strugglebug': 1}
  },
  "dottler": {
    "moves": {'reflect': 'Evo.', 'lightscreen': 'Evo.', 'confusion': 'Evo.', 'strugglebug': 1}
  },
  "orbeetle": {
    "moves": {'reflect': 1, 'lightscreen': 1, 'confusion': 1, 'strugglebug': 1, 'confuseray': 4, 'magiccoat': 8, 'agility': 12, 'psybeam': 16, 'hypnosis': 20, 'allyswitch': 24, 'bugbuzz': 28, 'mirrorcoat': 32, 'psychic': 36, 'afteryou': 40, 'calmmind': 44, 'psychicterrain': 48}
  },
  "nickit": {
    "moves": {'quickattack': 1, 'tailwhip': 1, 'beatup': 4, 'honeclaws': 8, 'snarl': 12, 'assurance': 16, 'nastyplot': 20, 'suckerpunch': 24, 'nightslash': 28, 'tailslap': 32, 'foulplay': 36}
  },
  "thievul": {
    "moves": {'thief': 'Evo.', 'quickattack': 1, 'tailwhip': 1, 'beatup': 1, 'honeclaws': 1, 'snarl': 12, 'assurance': 16, 'nastyplot': 22, 'suckerpunch': 28, 'nightslash': 34, 'tailslap': 40, 'foulplay': 46, 'partingshot': 52}
  },
  "gossifleur": {
    "moves": {'leafage': 1, 'sing': 1, 'rapidspin': 4, 'sweetscent': 8, 'razorleaf': 12, 'round': 16, 'leaftornado': 21, 'synthesis': 24, 'hypervoice': 28, 'aromatherapy': 32, 'leafstorm': 36}
  },
  "eldegoss": {
    "moves": {'cottonspore': 'Evo.', 'leafage': 1, 'sing': 1, 'rapidspin': 1, 'sweetscent': 1, 'razorleaf': 12, 'round': 16, 'leaftornado': 23, 'synthesis': 28, 'hypervoice': 34, 'aromatherapy': 40, 'leafstorm': 46, 'cottonguard': 52}
  },
  "wooloo": {
    "moves": {'tackle': 1, 'growl': 1, 'defensecurl': 4, 'copycat': 8, 'guardsplit': 12, 'doublekick': 16, 'headbutt': 21, 'takedown': 25, 'guardswap': 28, 'reversal': 32, 'cottonguard': 36, 'doubleedge': 40}
  },
  "dubwool": {
    "moves": {'tackle': 1, 'growl': 1, 'defensecurl': 1, 'copycat': 1, 'guardsplit': 12, 'doublekick': 16, 'headbutt': 21, 'takedown': 27, 'guardswap': 32, 'reversal': 38, 'cottonguard': 44, 'doubleedge': 50, 'lastresort': 56}
  },
  "chewtle": {
    "moves": {'tackle': 1, 'watergun': 1, 'bite': 7, 'protect': 14, 'headbutt': 21, 'counter': 28, 'jawlock': 35, 'liquidation': 42, 'bodyslam': 49}
  },
  "drednaw": {
    "moves": {'razorshell': 1, 'crunch': 1, 'rockpolish': 1, 'tackle': 1, 'watergun': 1, 'bite': 1, 'protect': 1, 'rocktomb': 'Evo.', 'headbutt': 21, 'counter': 30, 'jawlock': 39, 'liquidation': 48, 'bodyslam': 57, 'headsmash': 66}
  },
  "yamper": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'nuzzle': 5, 'bite': 10, 'roar': 15, 'spark': 20, 'charm': 26, 'crunch': 30, 'charge': 35, 'wildcharge': 40, 'playrough': 45}
  },
  "boltund": {
    "moves": {'electrify': 1, 'tackle': 1, 'tailwhip': 1, 'nuzzle': 1, 'bite': 1, 'roar': 15, 'spark': 20, 'charm': 28, 'crunch': 34, 'charge': 41, 'wildcharge': 48, 'playrough': 55, 'electricterrain': 62}
  },
  "rolycoly": {
    "moves": {'tackle': 1, 'smokescreen': 1, 'rapidspin': 5, 'smackdown': 10, 'rockpolish': 15, 'ancientpower': 20, 'incinerate': 25, 'stealthrock': 30, 'heatcrash': 35, 'rockblast': 40}
  },
  "carkol": {
    "moves": {'tackle': 1, 'smokescreen': 1, 'rapidspin': 1, 'smackdown': 1, 'flamecharge': 'Evo.', 'rockpolish': 15, 'ancientpower': 20, 'incinerate': 27, 'stealthrock': 35, 'heatcrash': 41, 'rockblast': 48, 'stoneedge': 55}
  },
  "coalossal": {
    "moves": {'flamecharge': 1, 'tackle': 1, 'smokescreen': 1, 'rapidspin': 1, 'smackdown': 1, 'tarshot': 'Evo.', 'rockpolish': 15, 'ancientpower': 20, 'incinerate': 27, 'stealthrock': 37, 'heatcrash': 45, 'rockblast': 54, 'stoneedge': 63}
  },
  "applin": {
    "moves": {'withdraw': 1, 'astonish': 1}
  },
  "flapple": {
    "moves": {'recycle': 1, 'withdraw': 1, 'astonish': 1, 'growth': 1, 'twister': 1, 'wingattack': 'Evo.', 'acidspray': 4, 'acrobatics': 8, 'leechseed': 12, 'protect': 16, 'dragonbreath': 20, 'dragondance': 24, 'dragonpulse': 28, 'gravapple': 32, 'irondefense': 36, 'fly': 40, 'dragonrush': 44}
  },
  "appletun": {
    "moves": {'recycle': 1, 'withdraw': 1, 'astonish': 1, 'growth': 1, 'sweetscent': 1, 'headbutt': 'Evo.', 'curse': 4, 'stomp': 8, 'leechseed': 12, 'protect': 16, 'bulletseed': 20, 'recover': 24, 'appleacid': 28, 'bodyslam': 32, 'irondefense': 36, 'dragonpulse': 40, 'energyball': 44}
  },
  "silicobra": {
    "moves": {'wrap': 1, 'sandattack': 1, 'minimize': 5, 'brutalswing': 10, 'bulldoze': 15, 'headbutt': 20, 'glare': 25, 'dig': 30, 'sandstorm': 35, 'slam': 40, 'coil': 45, 'sandtomb': 50}
  },
  "sandaconda": {
    "moves": {'wrap': 1, 'sandattack': 1, 'minimize': 1, 'brutalswing': 1, 'bulldoze': 15, 'headbutt': 20, 'glare': 25, 'dig': 30, 'sandstorm': 35, 'slam': 42, 'coil': 49, 'sandtomb': 51}
  },
  "cramorant": {
    "moves": {'peck': 1, 'stockpile': 1, 'spitup': 1, 'swallow': 1, 'belch': 'Rem.', 'watergun': 7, 'furyattack': 14, 'pluck': 21, 'dive': 28, 'drillpeck': 35, 'amnesia': 42, 'thrash': 49, 'hydropump': 56}
  },
  "arrokuda": {
    "moves": {'peck': 1, 'aquajet': 1, 'furyattack': 6, 'bite': 12, 'agility': 18, 'dive': 24, 'focusenergy': 30, 'crunch': 36, 'liquidation': 42, 'doubleedge': 48}
  },
  "barraskewda": {
    "moves": {'throatchop': 1, 'peck': 1, 'aquajet': 1, 'furyattack': 1, 'bite': 1, 'agility': 18, 'dive': 24, 'focusenergy': 32, 'crunch': 40, 'liquidation': 48, 'doubleedge': 56}
  },
  "toxel": {
    "moves": {'belch': 1, 'tearfullook': 1, 'nuzzle': 1, 'growl': 1, 'flail': 1, 'acid': 1}
  },
  "toxtricity": {
    "moves": {'belch': 1, 'tearfullook': 1, 'nuzzle': 1, 'growl': 1, 'flail': 1, 'acid': 1, 'thundershock': 1, 'acidspray': 1, 'leer': 1, 'nobleroar': 1, 'spark': 'Evo.', 'charge': 4, 'shockwave': 8, 'scaryface': 12, 'taunt': 16, 'screech': 24, 'swagger': 28, 'toxic': 32, 'discharge': 36, 'poisonjab': 40, 'overdrive': 44, 'boomburst': 48, 'shiftgear': 52, 'magneticflux': 52}
  },
  "sizzlipede": {
    "moves": {'ember': 1, 'smokescreen': 1, 'wrap': 5, 'bite': 10, 'flamewheel': 15, 'bugbite': 20, 'coil': 25, 'slam': 30, 'firespin': 35, 'crunch': 40, 'firelash': 45, 'lunge': 50, 'burnup': 55}
  },
  "centiskorch": {
    "moves": {'inferno': 1, 'ember': 1, 'smokescreen': 1, 'wrap': 1, 'bite': 1, 'flamewheel': 15, 'bugbite': 20, 'coil': 25, 'slam': 32, 'firespin': 39, 'crunch': 46, 'firelash': 53, 'lunge': 60, 'burnup': 67}
  },
  "clobbopus": {
    "moves": {'rocksmash': 1, 'leer': 1, 'feint': 5, 'bind': 10, 'detect': 15, 'brickbreak': 20, 'bulkup': 25, 'submission': 30, 'taunt': 35, 'reversal': 40, 'superpower': 45}
  },
  "grapploct": {
    "moves": {'octolock': 'Evo.', 'octazooka': 1, 'rocksmash': 1, 'leer': 1, 'feint': 1, 'bind': 1, 'detect': 15, 'brickbreak': 20, 'bulkup': 25, 'submission': 30, 'taunt': 35, 'reversal': 40, 'superpower': 45, 'topsyturvy': 50}
  },
  "sinistea": {
    "moves": {'astonish': 1, 'withdraw': 1, 'aromaticmist': 6, 'megadrain': 12, 'suckerpunch': 24, 'sweetscent': 30, 'gigadrain': 36, 'nastyplot': 42, 'shadowball': 48, 'memento': 54, 'shellsmash': 60}
  },
  "polteageist": {
    "moves": {'strengthsap': 1, 'astonish': 1, 'withdraw': 1, 'aromaticmist': 1, 'megadrain': 1, 'teatime': 'Evo.', 'protect': 18, 'suckerpunch': 24, 'sweetscent': 30, 'gigadrain': 36, 'nastyplot': 42, 'shadowball': 48, 'memento': 54, 'shellsmash': 60, 'curse': 66}
  },
  "hatenna": {
    "moves": {'confusion': 1, 'playnice': 1, 'lifedew': 5, 'disarmingvoice': 10, 'aromaticmist': 15, 'psybeam': 20, 'healpulse': 25, 'dazzlinggleam': 30, 'calmmind': 35, 'psychic': 40, 'healingwish': 45}
  },
  "hattrem": {
    "moves": {'confusion': 1, 'playnice': 1, 'lifedew': 1, 'disarmingvoice': 1, 'brutalswing': 'Evo.', 'aromaticmist': 15, 'psybeam': 20, 'healpulse': 25, 'dazzlinggleam': 30, 'calmmind': 37, 'psychic': 44, 'healingwish': 51}
  },
  "hatterene": {
    "moves": {'brutalswing': 1, 'confusion': 1, 'playnice': 1, 'lifedew': 1, 'disarmingvoice': 1, 'psychocut': 'Evo.', 'aromaticmist': 15, 'psybeam': 20, 'healpulse': 25, 'dazzlinggleam': 30, 'calmmind': 37, 'psychic': 46, 'healingwish': 55, 'magicpowder': 64}
  },
  "impidimp": {
    "moves": {'fakeout': 1, 'confide': 1, 'bite': 4, 'flatter': 8, 'faketears': 12, 'assurance': 16, 'swagger': 20, 'suckerpunch': 24, 'torment': 28, 'darkpulse': 33, 'nastyplot': 36, 'playrough': 40, 'foulplay': 44}
  },
  "morgrem": {
    "moves": {'fakeout': 1, 'confide': 1, 'bite': 1, 'flatter': 1, 'falsesurrender': 'Evo.', 'faketears': 12, 'assurance': 16, 'swagger': 20, 'suckerpunch': 24, 'torment': 28, 'darkpulse': 35, 'nastyplot': 40, 'playrough': 46, 'foulplay': 52}
  },
  "grimmsnarl": {
    "moves": {'falsesurrender': 1, 'bulkup': 1, 'fakeout': 1, 'confide': 1, 'bite': 1, 'flatter': 1, 'spiritbreak': 'Evo.', 'faketears': 12, 'assurance': 16, 'swagger': 20, 'suckerpunch': 24, 'torment': 28, 'darkpulse': 35, 'nastyplot': 40, 'playrough': 48, 'foulplay': 56, 'hammerarm': 64}
  },
  "obstagoon": {
    "moves": {'obstruct': 'Evo.', 'crosschop': 1, 'submission': 1, 'nightslash': 1, 'switcheroo': 1, 'pinmissile': 1, 'babydolleyes': 1, 'tackle': 1, 'leer': 1, 'sandattack': 1, 'lick': 1, 'snarl': 9, 'headbutt': 12, 'honeclaws': 15, 'furyswipes': 18, 'rest': 23, 'takedown': 28, 'scaryface': 35, 'counter': 42, 'taunt': 49, 'doubleedge': 56}
  },
  "perrserker": {
    "moves": {'metalburst': 1, 'irondefense': 1, 'fakeout': 1, 'growl': 1, 'honeclaws': 1, 'scratch': 1, 'ironhead': 'Evo.', 'payday': 12, 'metalclaw': 16, 'taunt': 20, 'swagger': 24, 'furyswipes': 31, 'screech': 36, 'slash': 42, 'metalsound': 48, 'thrash': 54}
  },
  "cursola": {
    "moves": {'perishsong': 1, 'tackle': 1, 'harden': 1, 'astonish': 1, 'disable': 1, 'spite': 15, 'ancientpower': 20, 'hex': 25, 'curse': 30, 'strengthsap': 35, 'powergem': 40, 'nightshade': 45, 'grudge': 50, 'mirrorcoat': 55}
  },
  "sirfetch'd": {
    "moves": {'irondefense': 'Evo.', 'firstimpression': 1, 'peck': 1, 'sandattack': 1, 'leer': 1, 'furycutter': 1, 'rocksmash': 15, 'brutalswing': 20, 'detect': 25, 'knockoff': 30, 'defog': 35, 'brickbreak': 40, 'swordsdance': 45, 'slam': 50, 'leafblade': 55, 'finalgambit': 60, 'bravebird': 65, 'meteorassault': 70}
  },
  "mr.rime": {
    "moves": {'faketears': 1, 'slackoff': 1, 'afteryou': 1, 'block': 1, 'copycat': 1, 'encore': 1, 'roleplay': 1, 'protect': 1, 'recycle': 1, 'mimic': 1, 'lightscreen': 1, 'reflect': 1, 'safeguard': 1, 'dazzlinggleam': 1, 'mistyterrain': 1, 'pound': 1, 'rapidspin': 1, 'batonpass': 1, 'iceshard': 1, 'confusion': 12, 'allyswitch': 16, 'icywind': 20, 'doublekick': 24, 'psybeam': 28, 'hypnosis': 32, 'mirrorcoat': 36, 'suckerpunch': 40, 'freezedry': 44, 'psychic': 48, 'teeterdance': 52}
  },
  "runerigus": {
    "moves": {'shadowclaw': 'Evo.', 'scaryface': 1, 'astonish': 1, 'protect': 1, 'haze': 1, 'nightshade': 1, 'disable': 12, 'brutalswing': 16, 'craftyshield': 20, 'hex': 24, 'meanlook': 28, 'slam': 32, 'curse': 38, 'shadowball': 44, 'earthquake': 50, 'powersplit': 56, 'guardsplit': 56, 'destinybond': 62}
  },
  "milcery": {
    "moves": {'tackle': 1, 'aromaticmist': 1, 'sweetkiss': 5, 'sweetscent': 10, 'drainingkiss': 15, 'charm': 20, 'attract': 25, 'acidarmor': 30, 'dazzlinggleam': 35, 'recover': 40, 'mistyterrain': 45, 'entrainment': 50}
  },
  "alcremie": {
    "moves": {'tackle': 1, 'aromaticmist': 1, 'sweetkiss': 1, 'sweetscent': 1, 'decorate': 'Evo.', 'drainingkiss': 15, 'charm': 20, 'attract': 25, 'acidarmor': 30, 'dazzlinggleam': 35, 'recover': 40, 'mistyterrain': 45, 'entrainment': 50}
  },
  "falinks": {
    "moves": {'tackle': 1, 'protect': 1, 'rocksmash': 5, 'focusenergy': 10, 'headbutt': 15, 'bulkup': 20, 'endure': 25, 'reversal': 30, 'firstimpression': 35, 'noretreat': 40, 'irondefense': 45, 'closecombat': 50, 'megahorn': 55, 'counter': 60}
  },
  "pincurchin": {
    "moves": {'peck': 1, 'thundershock': 1, 'watergun': 5, 'charge': 10, 'furyattack': 15, 'spark': 20, 'bubblebeam': 25, 'recover': 30, 'curse': 35, 'electricterrain': 40, 'poisonjab': 45, 'zingzap': 50, 'acupressure': 55, 'discharge': 60}
  },
  "snom": {
    "moves": {'powdersnow': 1, 'strugglebug': 1}
  },
  "frosmoth": {
    "moves": {'powdersnow': 1, 'strugglebug': 1, 'helpinghand': 1, 'attract': 1, 'icywind': 'Evo.', 'stunspore': 4, 'infestation': 8, 'mist': 12, 'defog': 16, 'featherdance': 21, 'aurorabeam': 24, 'snowscape': 28, 'bugbuzz': 32, 'auroraveil': 36, 'blizzard': 40, 'tailwind': 44, 'wideguard': 48, 'quiverdance': 52}
  },
  "stonjourner": {
    "moves": {'rockthrow': 1, 'block': 1, 'rockpolish': 6, 'rocktomb': 12, 'gravity': 18, 'stomp': 24, 'stealthrock': 30, 'rockslide': 36, 'bodyslam': 42, 'wideguard': 48, 'heavyslam': 54, 'stoneedge': 60, 'megakick': 66}
  },
  "eiscue": {
    "moves": {'powdersnow': 1, 'tackle': 1, 'mist': 6, 'weatherball': 12, 'icywind': 18, 'headbutt': 24, 'amnesia': 30, 'freezedry': 36, 'snowscape': 42, 'auroraveil': 48, 'surf': 54, 'blizzard': 60}
  },
  "indeedee": {
    "moves": {'storedpower': 1, 'playnice': 1, 'encore': 5, 'disarmingvoice': 10, 'psybeam': 15, 'helpinghand': 20, 'afteryou': 25, 'healingwish': 30, 'psychic': 35, 'calmmind': 40, 'powersplit': 45, 'psychicterrain': 50, 'lastresort': 55, 'batonpass': 5, 'followme': 25, 'guardsplit': 45}
  },
  "morpeko": {
    "moves": {'thundershock': 1, 'tailwhip': 1, 'leer': 5, 'powertrip': 10, 'quickattack': 15, 'flatter': 20, 'bite': 25, 'spark': 30, 'torment': 35, 'agility': 40, 'bulletseed': 45, 'crunch': 50, 'aurawheel': 55, 'thrash': 60}
  },
  "cufant": {
    "moves": {'tackle': 1, 'growl': 1, 'rollout': 5, 'rocksmash': 10, 'bulldoze': 15, 'stomp': 20, 'irondefense': 25, 'dig': 30, 'strength': 35, 'ironhead': 40, 'playrough': 45, 'highhorsepower': 50, 'superpower': 55}
  },
  "copperajah": {
    "moves": {'tackle': 1, 'growl': 1, 'rollout': 1, 'rocksmash': 1, 'heavyslam': 'Evo.', 'bulldoze': 15, 'stomp': 20, 'irondefense': 25, 'dig': 30, 'strength': 37, 'ironhead': 44, 'playrough': 51, 'highhorsepower': 58, 'superpower': 65}
  },
  "dracozolt": {
    "moves": {'tackle': 1, 'thundershock': 1, 'charge': 7, 'aerialace': 14, 'ancientpower': 21, 'pluck': 28, 'dragontail': 35, 'stomp': 42, 'slam': 49, 'discharge': 56, 'boltbeak': 63, 'dragonpulse': 70, 'dragonrush': 77}
  },
  "arctozolt": {
    "moves": {'powdersnow': 1, 'thundershock': 1, 'charge': 7, 'echoedvoice': 14, 'ancientpower': 21, 'pluck': 28, 'avalanche': 35, 'freezedry': 42, 'slam': 49, 'discharge': 56, 'boltbeak': 63, 'iciclecrash': 70, 'blizzard': 77}
  },
  "dracovish": {
    "moves": {'tackle': 1, 'watergun': 1, 'protect': 7, 'brutalswing': 14, 'ancientpower': 21, 'bite': 28, 'dragonbreath': 35, 'stomp': 42, 'superfang': 49, 'crunch': 56, 'fishiousrend': 63, 'dragonpulse': 70, 'dragonrush': 77}
  },
  "arctovish": {
    "moves": {'powdersnow': 1, 'watergun': 1, 'protect': 7, 'icywind': 14, 'ancientpower': 21, 'bite': 28, 'auroraveil': 35, 'freezedry': 42, 'superfang': 49, 'crunch': 56, 'fishiousrend': 63, 'iciclecrash': 70, 'blizzard': 77}
  },
  "duraludon": {
    "moves": {'leer': 1, 'metalclaw': 1, 'rocksmash': 6, 'honeclaws': 12, 'metalsound': 18, 'breakingswipe': 24, 'dragontail': 30, 'irondefense': 36, 'focusenergy': 42, 'dragonclaw': 48, 'flashcannon': 54, 'metalburst': 60, 'hyperbeam': 66}
  },
  "dreepy": {
    "moves": {'astonish': 1, 'infestation': 1, 'quickattack': 1, 'bite': 1}
  },
  "drakloak": {
    "moves": {'astonish': 1, 'infestation': 1, 'quickattack': 1, 'bite': 1, 'dragonpulse': 'Evo.', 'lockon': 6, 'assurance': 12, 'hex': 18, 'agility': 24, 'doublehit': 30, 'uturn': 36, 'dragondance': 42, 'phantomforce': 48, 'takedown': 54, 'dragonrush': 61, 'doubleedge': 66, 'lastresort': 72}
  },
  "dragapult": {
    "moves": {'dragonbreath': 1, 'astonish': 1, 'infestation': 1, 'quickattack': 1, 'bite': 1, 'dragondarts': 'Evo.', 'lockon': 6, 'assurance': 12, 'hex': 18, 'agility': 24, 'doublehit': 30, 'uturn': 36, 'dragondance': 42, 'phantomforce': 48, 'takedown': 54, 'dragonrush': 63, 'doubleedge': 70, 'lastresort': 78}
  },
  "zacian": {
    "moves": {'sacredsword': 1, 'quickguard': 1, 'metalclaw': 1, 'howl': 1, 'quickattack': 1, 'bite': 1, 'slash': 11, 'swordsdance': 22, 'ironhead': 33, 'nobleroar': 44, 'crunch': 55, 'moonblast': 66, 'closecombat': 77, 'gigaimpact': 88}
  },
  "zamazenta": {
    "moves": {'wideguard': 1, 'metalclaw': 1, 'howl': 1, 'quickattack': 1, 'bite': 1, 'slash': 11, 'irondefense': 22, 'ironhead': 33, 'metalburst': 44, 'crunch': 55, 'moonblast': 66, 'closecombat': 77, 'gigaimpact': 88}
  },
  "eternatus": {
    "moves": {'poisontail': 1, 'confuseray': 1, 'dragontail': 1, 'agility': 1, 'toxic': 8, 'venoshock': 16, 'dragondance': 24, 'crosspoison': 32, 'dragonpulse': 40, 'flamethrower': 48, 'dynamaxcannon': 56, 'cosmicpower': 64, 'recover': 72, 'hyperbeam': 80, 'outrage': 88}
  },
  "kubfu": {
    "moves": {'rocksmash': 1, 'leer': 1, 'endure': 4, 'focusenergy': 8, 'aerialace': 12, 'scaryface': 16, 'headbutt': 20, 'brickbreak': 24, 'detect': 28, 'bulkup': 32, 'ironhead': 36, 'dynamicpunch': 40, 'counter': 44, 'closecombat': 48, 'focuspunch': 52}
  },
  "urshifu": {
    "moves": {'suckerpunch': 1, 'rocksmash': 1, 'leer': 1, 'endure': 1, 'focusenergy': 1, 'wickedblow': 'Evo.', 'aerialace': 12, 'scaryface': 16, 'headbutt': 20, 'brickbreak': 24, 'detect': 28, 'bulkup': 32, 'ironhead': 36, 'dynamicpunch': 40, 'counter': 44, 'closecombat': 48, 'focuspunch': 52, 'aquajet': 1, 'surgingstrikes': 'Evo.'}
  },
  "zarude": {
    "moves": {'bind': 1, 'scratch': 1, 'leer': 6, 'vinewhip': 12, 'growth': 18, 'furyswipes': 24, 'scaryface': 30, 'grassknot': 36, 'bite': 42, 'uturn': 48, 'swagger': 54, 'energyball': 60, 'synthesis': 66, 'hammerarm': 72, 'thrash': 78, 'powerwhip': 84, 'junglehealing': 90}
  },
  "regieleki": {
    "moves": {'thundershock': 1, 'rapidspin': 1, 'electroweb': 6, 'ancientpower': 12, 'shockwave': 18, 'thunderwave': 24, 'extremespeed': 30, 'thundercage': 36, 'thunderbolt': 42, 'magnetrise': 48, 'thrash': 54, 'lockon': 60, 'zapcannon': 66, 'hyperbeam': 72, 'explosion': 78}
  },
  "regidrago": {
    "moves": {'twister': 1, 'visegrip': 1, 'bite': 6, 'ancientpower': 12, 'dragonbreath': 18, 'crunch': 30, 'dragonclaw': 36, 'hammerarm': 42, 'dragondance': 48, 'thrash': 54, 'focusenergy': 60, 'dragonenergy': 66, 'hyperbeam': 72, 'explosion': 78}
  },
  "glastrier": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'doublekick': 6, 'avalanche': 12, 'stomp': 18, 'torment': 24, 'mist': 30, 'iciclecrash': 36, 'takedown': 42, 'irondefense': 48, 'thrash': 54, 'taunt': 60, 'doubleedge': 66, 'swordsdance': 72}
  },
  "spectrier": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'doublekick': 6, 'hex': 12, 'stomp': 18, 'confuseray': 24, 'haze': 30, 'shadowball': 36, 'takedown': 42, 'agility': 48, 'thrash': 54, 'disable': 60, 'doubleedge': 66, 'nastyplot': 72}
  },
  "calyrex": {
    "moves": {'pound': 1, 'megadrain': 1, 'confusion': 1, 'growth': 1, 'lifedew': 8, 'gigadrain': 16, 'psyshock': 24, 'helpinghand': 32, 'grassyterrain': 40, 'psychicterrain': 40, 'energyball': 48, 'psychic': 56, 'leechseed': 64, 'healpulse': 72, 'solarbeam': 80, 'futuresight': 88, 'glaciallance': 1, 'tackle': 1, 'tailwhip': 1, 'doublekick': 1, 'avalanche': 1, 'stomp': 1, 'torment': 1, 'mist': 1, 'iciclecrash': 1, 'takedown': 1, 'irondefense': 1, 'thrash': 1, 'taunt': 1, 'doubleedge': 1, 'swordsdance': 1, 'astralbarrage': 1, 'hex': 1, 'confuseray': 1, 'haze': 1, 'shadowball': 1, 'agility': 1, 'disable': 1, 'nastyplot': 1}
  },
  "wyrdeer": {
    "moves": {'tackle': 1, 'psyshieldbash': 'Evo.', 'leer': 3, 'astonish': 7, 'hypnosis': 10, 'stomp': 13, 'sandattack': 16, 'takedown': 21, 'confuseray': 23, 'calmmind': 27, 'roleplay': 32, 'zenheadbutt': 37, 'imprison': 49, 'doubleedge': 55, 'megahorn': 62}
  },
  "kleavor": {
    "moves": {'quickattack': 1, 'leer': 1, 'stoneaxe': 'Evo.', 'furycutter': 4, 'falseswipe': 8, 'smackdown': 12, 'doubleteam': 16, 'doublehit': 20, 'slash': 24, 'focusenergy': 28, 'agility': 32, 'rockslide': 36, 'xscissor': 40, 'swordsdance': 44}
  },
  "ursaluna": {
    "moves": {'covet': 1, 'scratch': 1, 'leer': 1, 'lick': 1, 'faketears': 1, 'headlongrush': 1, 'furyswipes': 8, 'payback': 13, 'sweetscent': 17, 'slash': 22, 'playnice': 25, 'playrough': 29, 'scaryface': 35, 'rest': 41, 'snore': 41, 'highhorsepower': 48, 'thrash': 56, 'hammerarm': 64, 'moonlight': 'Rem.', 'harden': 17, 'earthpower': 48, 'moonblast': 56, 'bloodmoon': 70}
  },
  "basculegion": {
    "moves": {'shadowball': 1, 'phantomforce': 1, 'watergun': 1, 'tailwhip': 1, 'tackle': 4, 'flail': 8, 'aquajet': 12, 'bite': 16, 'scaryface': 20, 'headbutt': 24, 'soak': 28, 'crunch': 32, 'takedown': 36, 'uproar': 40, 'wavecrash': 44, 'thrash': 48, 'doubleedge': 52, 'headsmash': 56}
  },
  "sneasler": {
    "moves": {'fling': 1, 'scratch': 1, 'leer': 1, 'rocksmash': 1, 'direclaw': 'Evo.', 'taunt': 6, 'quickattack': 12, 'metalclaw': 18, 'poisonjab': 24, 'brickbreak': 30, 'honeclaws': 36, 'slash': 42, 'agility': 48, 'screech': 54, 'closecombat': 60}
  },
  "overqwil": {
    "moves": {'poisonsting': 1, 'tackle': 1, 'harden': 4, 'bite': 8, 'fellstinger': 12, 'minimize': 16, 'spikes': 20, 'brine': 24, 'barbbarrage': 28, 'pinmissile': 32, 'toxicspikes': 36, 'stockpile': 40, 'spitup': 40, 'toxic': 44, 'crunch': 48, 'acupressure': 52, 'destinybond': 56}
  },
  "enamorus": {
    "moves": {'astonish': 1, 'fairywind': 1, 'torment': 5, 'flatter': 10, 'twister': 15, 'drainingkiss': 20, 'irondefense': 25, 'imprison': 30, 'mysticalfire': 35, 'dazzlinggleam': 40, 'extrasensory': 45, 'uproar': 50, 'superpower': 55, 'healingwish': 60, 'moonblast': 65, 'outrage': 70, 'springtidestorm': 75}
  },
  "sprigatito": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'leafage': 1, 'bite': 7, 'honeclaws': 10, 'magicalleaf': 13, 'quickattack': 15, 'seedbomb': 17, 'uturn': 21, 'worryseed': 25, 'slash': 28, 'energyball': 32, 'playrough': 36}
  },
  "floragato": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'leafage': 1, 'bite': 7, 'honeclaws': 10, 'magicalleaf': 13, 'quickattack': 15, 'seedbomb': 20, 'uturn': 24, 'worryseed': 28, 'slash': 33, 'energyball': 38, 'playrough': 42, 'leafstorm': 46}
  },
  "meowscarada": {
    "moves": {'scratch': 1, 'tailwhip': 1, 'leafage': 1, 'doubleteam': 'Rem.', 'trick': 'Rem.', 'flowertrick': 'Evo.', 'bite': 7, 'honeclaws': 10, 'magicalleaf': 13, 'quickattack': 15, 'seedbomb': 20, 'uturn': 24, 'worryseed': 29, 'slash': 33, 'nightslash': 38, 'energyball': 42, 'playrough': 47, 'knockoff': 52, 'grassyterrain': 58, 'leafstorm': 64}
  },
  "fuecoco": {
    "moves": {'tackle': 1, 'leer': 1, 'ember': 1, 'round': 7, 'bite': 12, 'incinerate': 15, 'yawn': 17, 'snarl': 21, 'roar': 25, 'flamethrower': 28, 'hypervoice': 32, 'fireblast': 36}
  },
  "crocalor": {
    "moves": {'tackle': 1, 'leer': 1, 'ember': 1, 'lick': 7, 'round': 10, 'bite': 12, 'yawn': 15, 'incinerate': 17, 'snarl': 24, 'roar': 28, 'flamethrower': 32, 'hypervoice': 38, 'willowisp': 42, 'fireblast': 47}
  },
  "skeledirge": {
    "moves": {'tackle': 1, 'leer': 1, 'ember': 1, 'sing': 'Rem.', 'yawn': 'Rem.', 'torchsong': 'Evo.', 'lick': 7, 'round': 10, 'scaryface': 12, 'bite': 15, 'incinerate': 17, 'snarl': 24, 'roar': 28, 'flamethrower': 32, 'shadowball': 38, 'hypervoice': 42, 'willowisp': 47, 'hex': 47, 'fireblast': 58, 'overheat': 64}
  },
  "quaxly": {
    "moves": {'pound': 1, 'growl': 1, 'watergun': 1, 'workup': 7, 'wingattack': 10, 'aquajet': 13, 'doublehit': 17, 'aquacutter': 21, 'airslash': 24, 'focusenergy': 28, 'acrobatics': 31, 'liquidation': 35}
  },
  "quaxwell": {
    "moves": {'doublehit': 1, 'pound': 1, 'growl': 1, 'watergun': 1, 'workup': 7, 'wingattack': 10, 'aquajet': 13, 'waterpulse': 17, 'lowsweep': 19, 'aquacutter': 23, 'airslash': 27, 'focusenergy': 32, 'acrobatics': 38, 'liquidation': 43, 'featherdance': 48}
  },
  "quaquaval": {
    "moves": {'doublehit': 1, 'pound': 1, 'growl': 1, 'watergun': 1, 'counter': 'Rem.', 'aquastep': 'Evo.', 'workup': 7, 'wingattack': 10, 'aquajet': 13, 'lowsweep': 17, 'waterpulse': 17, 'aquacutter': 21, 'airslash': 27, 'focusenergy': 32, 'megakick': 38, 'acrobatics': 43, 'liquidation': 47, 'featherdance': 52, 'closecombat': 58, 'wavecrash': 64}
  },
  "lechonk": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'disarmingvoice': 5, 'echoedvoice': 8, 'mudshot': 12, 'covet': 15, 'dig': 17, 'headbutt': 21, 'yawn': 24, 'takedown': 27, 'workup': 30, 'uproar': 32, 'doubleedge': 35}
  },
  "oinkologne": {
    "moves": {'tackle': 1, 'tailwhip': 1, 'disarmingvoice': 3, 'echoedvoice': 6, 'mudshot': 9, 'covet': 12, 'dig': 15, 'headbutt': 17, 'takedown': 28, 'yawn': 23, 'workup': 30, 'uproar': 34, 'doubleedge': 39, 'earthpower': 45, 'belch': 51}
  },
  "tarountula": {
    "moves": {'tackle': 1, 'stringshot': 1, 'strugglebug': 5, 'assurance': 8, 'feint': 11, 'bugbite': 14, 'block': 18, 'counter': 22, 'headbutt': 25, 'stickyweb': 29, 'gastroacid': 33, 'circlethrow': 36, 'throatchop': 40, 'skittersmack': 44}
  },
  "spidops": {
    "moves": {'tackle': 1, 'stringshot': 1, 'silktrap': 'Evo.', 'strugglebug': 5, 'assurance': 8, 'feint': 11, 'bugbite': 14, 'block': 19, 'counter': 24, 'headbutt': 28, 'stickyweb': 33, 'gastroacid': 37, 'circlethrow': 41, 'throatchop': 45, 'skittersmack': 49}
  },
  "nymble": {
    "moves": {'tackle': 1, 'leer': 1, 'strugglebug': 4, 'astonish': 6, 'assurance': 9, 'doublekick': 11, 'screech': 14, 'endure': 18, 'bugbite': 22, 'feint': 26, 'agility': 30, 'suckerpunch': 38, 'firstimpression': 41}
  },
  "lokix": {
    "moves": {'lowkick': 1, 'detect': 1, 'tackle': 1, 'leer': 1, 'lunge': 'Evo.', 'strugglebug': 4, 'astonish': 6, 'assurance': 9, 'doublekick': 11, 'screech': 14, 'endure': 18, 'bugbite': 22, 'feint': 28, 'agility': 32, 'throatchop': 36, 'suckerpunch': 40, 'firstimpression': 44, 'bounce': 48, 'axekick': 53}
  },
  "pawmi": {
    "moves": {'scratch': 1, 'growl': 1, 'thundershock': 3, 'quickattack': 6, 'charge': 8, 'nuzzle': 12, 'dig': 15, 'bite': 19, 'spark': 23, 'thunderwave': 27, 'entrainment': 31, 'slam': 35, 'discharge': 38, 'agility': 40, 'wildcharge': 44}
  },
  "pawmo": {
    "moves": {'scratch': 1, 'growl': 1, 'armthrust': 'Evo.', 'thundershock': 3, 'quickattack': 6, 'charge': 8, 'nuzzle': 12, 'dig': 15, 'bite': 19, 'spark': 23, 'thunderwave': 27, 'slam': 32, 'entrainment': 38, 'discharge': 42, 'agility': 46, 'wildcharge': 52}
  },
  "pawmot": {
    "moves": {'wildcharge': 1, 'scratch': 1, 'growl': 1, 'revivalblessing': 'Evo.', 'thundershock': 3, 'quickattack': 6, 'charge': 8, 'nuzzle': 12, 'dig': 15, 'bite': 19, 'spark': 23, 'armthrust': 25, 'thunderwave': 29, 'slam': 33, 'entrainment': 39, 'closecombat': 44, 'discharge': 49, 'agility': 54, 'doubleshock': 60}
  },
  "tandemaus": {
    "moves": {'pound': 1, 'babydolleyes': 1, 'echoedvoice': 5, 'helpinghand': 8, 'superfang': 11, 'doublehit': 14, 'bulletseed': 18, 'encore': 22, 'playrough': 26, 'hypervoice': 30, 'charm': 33, 'beatup': 37, 'copycat': 41, 'populationbomb': 46}
  },
  "maushold": {
    "moves": {'followme': 1, 'tidyup': 1, 'pound': 1, 'babydolleyes': 1, 'echoedvoice': 5, 'helpinghand': 8, 'superfang': 11, 'doublehit': 14, 'bulletseed': 18, 'encore': 22, 'playrough': 29, 'hypervoice': 33, 'charm': 37, 'beatup': 41, 'copycat': 46, 'populationbomb': 53}
  },
  "fidough": {
    "moves": {'tackle': 1, 'growl': 1, 'lick': 3, 'tailwhip': 6, 'covet': 8, 'bite': 11, 'babydolleyes': 15, 'playrough': 18, 'workup': 22, 'batonpass': 26, 'roar': 30, 'doubleedge': 33, 'charm': 36, 'crunch': 40, 'lastresort': 45}
  },
  "dachsbun": {
    "moves": {'tackle': 1, 'growl': 1, 'lick': 3, 'tailwhip': 6, 'covet': 8, 'bite': 11, 'babydolleyes': 15, 'playrough': 18, 'workup': 22, 'batonpass': 29, 'roar': 33, 'doubleedge': 38, 'charm': 42, 'crunch': 47, 'lastresort': 53}
  },
  "smoliv": {
    "moves": {'tackle': 1, 'sweetscent': 1, 'absorb': 5, 'growth': 7, 'razorleaf': 10, 'helpinghand': 13, 'flail': 16, 'megadrain': 20, 'grassyterrain': 23, 'seedbomb': 27, 'energyball': 30, 'leechseed': 34, 'terrainpulse': 38}
  },
  "dolliv": {
    "moves": {'tackle': 1, 'sweetscent': 1, 'absorb': 5, 'growth': 7, 'razorleaf': 10, 'helpinghand': 13, 'flail': 16, 'megadrain': 20, 'grassyterrain': 23, 'seedbomb': 29, 'energyball': 34, 'leechseed': 37, 'terrainpulse': 42}
  },
  "arboliva": {
    "moves": {'mirrorcoat': 1, 'safeguard': 1, 'tackle': 1, 'sweetscent': 1, 'absorb': 5, 'growth': 7, 'razorleaf': 10, 'helpinghand': 13, 'flail': 16, 'megadrain': 20, 'grassyterrain': 23, 'seedbomb': 29, 'energyball': 34, 'leechseed': 39, 'terrainpulse': 46, 'petalblizzard': 52, 'petaldance': 58}
  },
  "squawkabilly": {
    "moves": {'growl': 1, 'peck': 1, 'mimic': 1, 'quickattack': 6, 'torment': 10, 'aerialace': 13, 'furyattack': 17, 'taunt': 20, 'uproar': 24, 'copycat': 27, 'fly': 30, 'facade': 34, 'swagger': 38, 'bravebird': 42, 'roost': 47, 'reversal': 52}
  },
  "nacli": {
    "moves": {'tackle': 1, 'harden': 1, 'rockthrow': 5, 'mudshot': 7, 'smackdown': 10, 'rockpolish': 13, 'headbutt': 16, 'irondefense': 20, 'recover': 25, 'rockslide': 30, 'stealthrock': 33, 'heavyslam': 35, 'earthquake': 40, 'stoneedge': 45}
  },
  "naclstack": {
    "moves": {'tackle': 1, 'harden': 1, 'saltcure': 'Evo.', 'rockthrow': 5, 'mudshot': 7, 'smackdown': 10, 'rockpolish': 13, 'headbutt': 16, 'irondefense': 20, 'recover': 30, 'rockslide': 34, 'stealthrock': 38, 'heavyslam': 41, 'earthquake': 45, 'stoneedge': 51}
  },
  "garganacl": {
    "moves": {'block': 1, 'wideguard': 1, 'rockblast': 1, 'tackle': 1, 'harden': 1, 'hammerarm': 'Evo.', 'rockthrow': 5, 'mudshot': 7, 'rocktomb': 10, 'rockpolish': 13, 'headbutt': 16, 'saltcure': 24, 'recover': 30, 'rockslide': 34, 'stealthrock': 40, 'heavyslam': 44, 'earthquake': 49, 'stoneedge': 54, 'explosion': 60}
  },
  "charcadet": {
    "moves": {'ember': 1, 'leer': 1, 'astonish': 1, 'clearsmog': 8, 'firespin': 12, 'willowisp': 16, 'nightshade': 20, 'flamecharge': 24, 'incinerate': 28, 'lavaplume': 32}
  },
  "armarouge": {
    "moves": {'mysticalfire': 1, 'wideguard': 1, 'ember': 1, 'leer': 1, 'astonish': 1, 'psyshock': 'Evo.', 'clearsmog': 8, 'firespin': 12, 'willowisp': 16, 'nightshade': 20, 'flamecharge': 24, 'incinerate': 28, 'lavaplume': 32, 'calmmind': 37, 'allyswitch': 42, 'flamethrower': 48, 'expandingforce': 56, 'armorcannon': 62}
  },
  "ceruledge": {
    "moves": {'ember': 1, 'leer': 1, 'astonish': 1, 'nightslash': 'Rem.', 'shadowsneak': 'Rem.', 'quickguard': 'Rem.', 'solarblade': 'Rem.', 'shadowclaw': 'Evo.', 'clearsmog': 8, 'firespin': 12, 'willowisp': 16, 'nightshade': 20, 'flamecharge': 24, 'incinerate': 28, 'lavaplume': 32, 'swordsdance': 37, 'allyswitch': 42, 'bitterblade': 48, 'psychocut': 56, 'flareblitz': 62}
  },
  "tadbulb": {
    "moves": {'tackle': 1, 'mudslap': 1, 'thundershock': 7, 'watergun': 11, 'charge': 17, 'spark': 21, 'mudshot': 24, 'flail': 25, 'discharge': 32, 'weatherball': 36, 'electricterrain': 40, 'suckerpunch': 45, 'zapcannon': 50}
  },
  "bellibolt": {
    "moves": {'slackoff': 1, 'tackle': 1, 'mudslap': 1, 'thundershock': 7, 'watergun': 11, 'charge': 17, 'spark': 21, 'mudshot': 24, 'flail': 25, 'discharge': 32, 'weatherball': 36, 'electricterrain': 40, 'suckerpunch': 45, 'zapcannon': 50}
  },
  "wattrel": {
    "moves": {'peck': 1, 'growl': 1, 'thundershock': 4, 'quickattack': 7, 'pluck': 11, 'spark': 15, 'uproar': 19, 'roost': 23, 'dualwingbeat': 27, 'agility': 32, 'voltswitch': 37, 'discharge': 43}
  },
  "kilowattrel": {
    "moves": {'peck': 1, 'growl': 1, 'electroball': 'Evo.', 'thundershock': 4, 'quickattack': 7, 'pluck': 11, 'spark': 15, 'uproar': 19, 'roost': 24, 'dualwingbeat': 30, 'agility': 36, 'voltswitch': 43, 'discharge': 48, 'hurricane': 55}
  },
  "maschiff": {
    "moves": {'tackle': 1, 'leer': 1, 'scaryface': 1, 'lick': 4, 'snarl': 7, 'honeclaws': 10, 'bite': 14, 'roar': 18, 'headbutt': 22, 'payback': 26, 'crunch': 31, 'swagger': 35, 'reversal': 39, 'jawlock': 43, 'doubleedge': 49}
  },
  "mabosstiff": {
    "moves": {'tackle': 1, 'leer': 1, 'scaryface': 1, 'comeuppance': 'Evo.', 'lick': 4, 'snarl': 7, 'honeclaws': 10, 'bite': 14, 'roar': 18, 'headbutt': 22, 'payback': 26, 'crunch': 34, 'swagger': 39, 'reversal': 43, 'jawlock': 48, 'doubleedge': 55, 'outrage': 60}
  },
  "shroodle": {
    "moves": {'scratch': 1, 'leer': 1, 'acidspray': 5, 'bite': 8, 'furyswipes': 8, 'switcheroo': 11, 'poisonfang': 14, 'flatter': 18, 'slash': 21, 'uturn': 25, 'poisonjab': 29, 'taunt': 33, 'substitute': 36, 'knockoff': 40, 'gunkshot': 45}
  },
  "grafaiai": {
    "moves": {'scratch': 1, 'leer': 1, 'doodle': 'Evo.', 'acidspray': 5, 'furyswipes': 8, 'switcheroo': 11, 'poisonfang': 14, 'flatter': 18, 'slash': 21, 'uturn': 25, 'poisonjab': 33, 'taunt': 37, 'substitute': 40, 'knockoff': 45, 'gunkshot': 51}
  },
  "bramblin": {
    "moves": {'astonish': 1, 'defensecurl': 1, 'rollout': 1, 'absorb': 5, 'rapidspin': 9, 'bulletseed': 13, 'infestation': 17, 'hex': 21, 'megadrain': 25, 'disable': 29, 'phantomforce': 35, 'gigadrain': 40, 'curse': 45, 'painsplit': 50, 'powerwhip': 55}
  },
  "brambleghast": {
    "moves": {'astonish': 1, 'defensecurl': 1, 'rollout': 1, 'absorb': 5, 'rapidspin': 9, 'bulletseed': 13, 'infestation': 17, 'hex': 21, 'megadrain': 25, 'disable': 29, 'phantomforce': 35, 'gigadrain': 40, 'curse': 45, 'painsplit': 50, 'powerwhip': 55}
  },
  "toedscool": {
    "moves": {'wrap': 1, 'mudslap': 1, 'absorb': 4, 'poisonpowder': 8, 'stunspore': 8, 'supersonic': 12, 'tackle': 15, 'megadrain': 16, 'screech': 20, 'mudshot': 24, 'hex': 28, 'seedbomb': 32, 'spore': 36, 'growth': 40, 'gigadrain': 44, 'earthpower': 48, 'powerwhip': 52}
  },
  "toedscruel": {
    "moves": {'reflecttype': 1, 'wrap': 1, 'mudslap': 1, 'absorb': 4, 'stunspore': 8, 'poisonpowder': 8, 'supersonic': 12, 'tackle': 15, 'megadrain': 16, 'screech': 20, 'mudshot': 24, 'hex': 28, 'seedbomb': 34, 'spore': 40, 'growth': 44, 'gigadrain': 48, 'earthpower': 54, 'powerwhip': 58}
  },
  "klawf": {
    "moves": {'visegrip': 1, 'rockthrow': 1, 'harden': 6, 'rocksmash': 9, 'rocktomb': 13, 'metalclaw': 17, 'protect': 21, 'rockblast': 24, 'xscissor': 29, 'swordsdance': 33, 'flail': 37, 'rockslide': 42, 'highhorsepower': 47, 'irondefense': 51, 'guillotine': 56}
  },
  "capsakid": {
    "moves": {'leafage': 1, 'leer': 1, 'bite': 4, 'growth': 10, 'razorleaf': 13, 'sunnyday': 17, 'bulletseed': 21, 'headbutt': 24, 'zenheadbutt': 28, 'crunch': 38, 'seedbomb': 44, 'solarbeam': 48}
  },
  "scovillain": {
    "moves": {'firefang': 1, 'leafage': 1, 'leer': 1, 'spicyextract': 'Evo.', 'flamethrower': 'Evo.', 'bite': 4, 'growth': 10, 'razorleaf': 13, 'sunnyday': 17, 'bulletseed': 21, 'headbutt': 24, 'zenheadbutt': 28, 'worryseed': 33, 'crunch': 38, 'seedbomb': 44, 'solarbeam': 48, 'overheat': 48}
  },
  "rellor": {
    "moves": {'tackle': 1, 'defensecurl': 1, 'sandattack': 4, 'strugglebug': 7, 'rollout': 11, 'mudshot': 15, 'bugbite': 20, 'takedown': 24, 'dig': 29, 'lunge': 35}
  },
  "rabsca": {
    "moves": {'tackle': 1, 'defensecurl': 1, 'confusion': 1, 'safeguard': 'Rem.', 'psychup': 'Rem.', 'revivalblessing': 'Evo.', 'sandattack': 4, 'strugglebug': 7, 'rollout': 11, 'psybeam': 15, 'bugbite': 20, 'takedown': 24, 'extrasensory': 29, 'lunge': 35, 'speedswap': 40, 'powerswap': 40, 'guardswap': 40, 'bugbuzz': 45, 'psychic': 50}
  },
  "flittle": {
    "moves": {'peck': 1, 'growl': 1, 'confusion': 5, 'babydolleyes': 8, 'disarmingvoice': 11, 'quickattack': 15, 'psybeam': 19, 'pluck': 24, 'agility': 29, 'uproar': 34}
  },
  "espathra": {
    "moves": {'drillpeck': 1, 'featherdance': 1, 'peck': 1, 'growl': 1, 'luminacrash': 'Evo.', 'confusion': 5, 'babydolleyes': 8, 'disarmingvoice': 11, 'quickattack': 15, 'psybeam': 19, 'pluck': 24, 'agility': 29, 'uproar': 34, 'dazzlinggleam': 43, 'psychic': 49, 'lastresort': 54}
  },
  "tinkatink": {
    "moves": {'astonish': 1, 'fairywind': 1, 'babydolleyes': 5, 'metalclaw': 8, 'covet': 11, 'rocksmash': 14, 'drainingkiss': 17, 'sweetkiss': 21, 'brutalswing': 24, 'slam': 27, 'flashcannon': 31, 'playrough': 35, 'fakeout': 39, 'flatter': 43, 'skittersmack': 47, 'knockoff': 52}
  },
  "tinkatuff": {
    "moves": {'astonish': 1, 'fairywind': 1, 'babydolleyes': 5, 'metalclaw': 8, 'covet': 11, 'rocksmash': 14, 'drainingkiss': 17, 'sweetkiss': 21, 'brutalswing': 24, 'slam': 27, 'flashcannon': 31, 'playrough': 35, 'fakeout': 39, 'flatter': 43, 'skittersmack': 47, 'knockoff': 52}
  },
  "tinkaton": {
    "moves": {'astonish': 1, 'fairywind': 1, 'gigatonhammer': 'Evo.', 'babydolleyes': 5, 'metalclaw': 8, 'covet': 11, 'rocksmash': 14, 'drainingkiss': 17, 'sweetkiss': 21, 'brutalswing': 24, 'slam': 27, 'flashcannon': 31, 'playrough': 35, 'fakeout': 39, 'flatter': 43, 'skittersmack': 47, 'knockoff': 52}
  },
  "wiglett": {
    "moves": {'watergun': 1, 'sandattack': 1, 'mudslap': 4, 'wrap': 8, 'aquajet': 12, 'slam': 20, 'waterpulse': 20, 'headbutt': 24, 'dig': 28, 'suckerpunch': 32, 'throatchop': 36, 'liquidation': 40}
  },
  "wugtrio": {
    "moves": {'watergun': 1, 'sandattack': 1, 'mudslap': 1, 'wrap': 1, 'aquajet': 12, 'slam': 16, 'waterpulse': 20, 'headbutt': 24, 'tripledive': 30, 'dig': 36, 'suckerpunch': 42, 'throatchop': 48, 'liquidation': 54}
  },
  "bombirdier": {
    "moves": {'wingattack': 1, 'leer': 1, 'peck': 1, 'memento': 1, 'honeclaws': 1, 'thief': 7, 'rockthrow': 11, 'whirlwind': 16, 'pluck': 20, 'torment': 24, 'rocktomb': 29, 'payback': 36, 'dualwingbeat': 42, 'rockslide': 47, 'knockoff': 53, 'partingshot': 60}
  },
  "finizen": {
    "moves": {'watergun': 1, 'supersonic': 1, 'astonish': 7, 'focusenergy': 10, 'aquajet': 13, 'doublehit': 17, 'dive': 21, 'charm': 25, 'acrobatics': 29, 'encore': 34, 'aquatail': 39, 'mist': 44, 'hydropump': 50}
  },
  "palafin": {
    "moves": {'jetpunch': 1, 'watergun': 1, 'supersonic': 1, 'flipturn': 'Evo.', 'astonish': 7, 'focusenergy': 10, 'aquajet': 13, 'doublehit': 17, 'dive': 21, 'charm': 25, 'acrobatics': 29, 'encore': 34, 'aquatail': 39, 'mist': 44, 'hydropump': 50, 'focuspunch': 55, 'wavecrash': 61}
  },
  "varoom": {
    "moves": {'lick': 1, 'poisongas': 1, 'smog': 4, 'taunt': 7, 'assurance': 10, 'sludge': 13, 'gyroball': 17, 'headbutt': 21, 'screech': 25, 'ironhead': 28, 'swagger': 32, 'poisonjab': 36, 'uproar': 41, 'spinout': 46, 'gunkshot': 50}
  },
  "revavroom": {
    "moves": {'magnetrise': 1, 'lick': 1, 'poisongas': 1, 'shiftgear': 'Evo.', 'smog': 4, 'taunt': 7, 'assurance': 10, 'sludge': 13, 'gyroball': 17, 'headbutt': 21, 'screech': 25, 'ironhead': 28, 'swagger': 32, 'poisonjab': 36, 'uproar': 46, 'spinout': 52, 'gunkshot': 58}
  },
  "cyclizar": {
    "moves": {'tackle': 1, 'growl': 1, 'rapidspin': 7, 'taunt': 11, 'breakingswipe': 14, 'quickattack': 18, 'bite': 23, 'uturn': 27, 'shedtail': 31, 'dragonclaw': 36, 'shiftgear': 40, 'dragonpulse': 45, 'doubleedge': 51, 'dragonrush': 57}
  },
  "orthworm": {
    "moves": {'tackle': 1, 'wrap': 1, 'harden': 1, 'mudslap': 7, 'smackdown': 12, 'bulldoze': 16, 'ironhead': 21, 'takedown': 26, 'dig': 30, 'sandstorm': 34, 'irondefense': 38, 'irontail': 43, 'earthquake': 47, 'shedtail': 52}
  },
  "glimmet": {
    "moves": {'rockthrow': 1, 'harden': 1, 'smackdown': 1, 'acidspray': 7, 'ancientpower': 11, 'rockpolish': 15, 'stealthrock': 18, 'venoshock': 22, 'sandstorm': 26, 'selfdestruct': 29, 'rockslide': 33, 'powergem': 37, 'acidarmor': 41, 'sludgewave': 46}
  },
  "glimmora": {
    "moves": {'spikyshield': 1, 'toxicspikes': 1, 'rockthrow': 1, 'harden': 1, 'smackdown': 1, 'mortalspin': 'Evo.', 'acidspray': 7, 'ancientpower': 11, 'rockpolish': 15, 'stealthrock': 18, 'venoshock': 22, 'sandstorm': 26, 'selfdestruct': 29, 'rockslide': 33, 'powergem': 39, 'acidarmor': 44, 'sludgewave': 50}
  },
  "greavard": {
    "moves": {'tackle': 1, 'growl': 1, 'lick': 3, 'tailwhip': 6, 'bite': 6, 'roar': 9, 'headbutt': 12, 'dig': 16, 'rest': 24, 'crunch': 28, 'playrough': 32, 'helpinghand': 37, 'phantomforce': 41, 'charm': 46, 'doubleedge': 52}
  },
  "houndstone": {
    "moves": {'tackle': 1, 'growl': 1, 'lastrespects': 'Evo.', 'lick': 3, 'tailwhip': 6, 'bite': 6, 'roar': 9, 'headbutt': 12, 'dig': 16, 'rest': 24, 'crunch': 28, 'playrough': 36, 'helpinghand': 41, 'phantomforce': 46, 'charm': 51, 'doubleedge': 58}
  },
  "flamigo": {
    "moves": {'peck': 1, 'copycat': 1, 'doublekick': 5, 'detect': 9, 'wingattack': 12, 'focusenergy': 15, 'lowkick': 18, 'feint': 21, 'payback': 27, 'roost': 31, 'airslash': 35, 'megakick': 39, 'wideguard': 44, 'throatchop': 48, 'bravebird': 54}
  },
  "cetoddle": {
    "moves": {'tackle': 1, 'powdersnow': 1, 'growl': 6, 'echoedvoice': 9, 'iceshard': 12, 'rest': 15, 'takedown': 19, 'flail': 25, 'avalanche': 27, 'bounce': 31, 'bodyslam': 36, 'amnesia': 40, 'icespinner': 44, 'doubleedge': 49, 'blizzard': 53}
  },
  "cetitan": {
    "moves": {'tackle': 1, 'powdersnow': 1, 'growl': 6, 'echoedvoice': 9, 'iceshard': 12, 'rest': 15, 'takedown': 19, 'flail': 25, 'avalanche': 27, 'bounce': 31, 'bodyslam': 36, 'amnesia': 40, 'icespinner': 44, 'doubleedge': 49, 'blizzard': 53}
  },
  "veluza": {
    "moves": {'tackle': 1, 'aquajet': 1, 'pluck': 7, 'waterpulse': 11, 'focusenergy': 15, 'slash': 20, 'aquacutter': 25, 'filletaway': 30, 'nightslash': 35, 'psychocut': 40, 'liquidation': 45, 'crunch': 50, 'finalgambit': 55}
  },
  "dondozo": {
    "moves": {'tackle': 1, 'supersonic': 1, 'watergun': 1, 'tickle': 5, 'flail': 10, 'rest': 15, 'sleeptalk': 15, 'dive': 20, 'nobleroar': 25, 'soak': 30, 'bodyslam': 35, 'aquatail': 40, 'raindance': 45, 'orderup': 50, 'heavyslam': 55, 'doubleedge': 60, 'wavecrash': 65}
  },
  "tatsugiri": {
    "moves": {'watergun': 1, 'splash': 1, 'harden': 6, 'helpinghand': 12, 'waterpulse': 17, 'soak': 23, 'taunt': 28, 'memento': 34, 'muddywater': 39, 'nastyplot': 43, 'mirrorcoat': 47, 'dragonpulse': 52}
  },
  "annihilape": {
    "moves": {'counter': 1, 'fling': 1, 'scratch': 1, 'leer': 1, 'focusenergy': 1, 'shadowpunch': 'Evo.', 'furyswipes': 5, 'lowkick': 8, 'seismictoss': 12, 'swagger': 17, 'crosschop': 22, 'assurance': 26, 'thrash': 30, 'ragefist': 35, 'closecombat': 39, 'screech': 44, 'stompingtantrum': 48, 'outrage': 53, 'finalgambit': 57}
  },
  "clodsire": {
    "moves": {'tailwhip': 1, 'poisonsting': 1, 'amnesia': 'Evo.', 'toxicspikes': 4, 'mudshot': 8, 'poisontail': 12, 'slam': 16, 'yawn': 21, 'poisonjab': 24, 'sludgewave': 30, 'megahorn': 36, 'toxic': 40, 'earthquake': 48}
  },
  "farigiraf": {
    "moves": {'powerswap': 1, 'guardswap': 1, 'astonish': 1, 'tackle': 1, 'growl': 1, 'confusion': 5, 'assurance': 10, 'stomp': 14, 'psybeam': 19, 'agility': 23, 'doublehit': 28, 'twinbeam': 32, 'crunch': 37, 'batonpass': 41, 'nastyplot': 46, 'psychic': 50}
  },
  "dudunsparce": {
    "moves": {'flail': 1, 'defensecurl': 1, 'mudslap': 4, 'rollout': 8, 'glare': 12, 'screech': 16, 'ancientpower': 20, 'drillrun': 24, 'yawn': 28, 'hyperdrill': 32, 'roost': 36, 'dragonrush': 40, 'coil': 44, 'doubleedge': 48, 'endeavor': 52, 'hurricane': 56, 'boomburst': 62}
  },
  "kingambit": {
    "moves": {'metalburst': 1, 'scratch': 1, 'leer': 1, 'furycutter': 1, 'metalclaw': 1, 'kowtowcleave': 'Evo.', 'torment': 15, 'scaryface': 20, 'assurance': 25, 'metalsound': 30, 'slash': 35, 'nightslash': 40, 'irondefense': 45, 'retaliate': 50, 'ironhead': 57, 'swordsdance': 64, 'guillotine': 71}
  },
  "greattusk": {
    "moves": {'sunnyday': 1, 'hornattack': 1, 'defensecurl': 1, 'rollout': 1, 'bulldoze': 7, 'taunt': 14, 'rapidspin': 21, 'brickbreak': 28, 'stompingtantrum': 35, 'knockoff': 42, 'earthquake': 49, 'gigaimpact': 56, 'closecombat': 63, 'endeavor': 70, 'megahorn': 77, 'headsmash': 84, 'headlongrush': 91}
  },
  "screamtail": {
    "moves": {'pound': 1, 'sing': 1, 'disable': 1, 'sunnyday': 'Rem.', 'howl': 7, 'nobleroar': 14, 'bite': 21, 'bodyslam': 28, 'rest': 35, 'playrough': 42, 'hypervoice': 49, 'psychicfangs': 56, 'crunch': 63, 'wish': 70, 'gyroball': 77, 'perishsong': 84, 'boomburst': 91}
  },
  "brutebonnet": {
    "moves": {'absorb': 1, 'growth': 1, 'astonish': 1, 'sunnyday': 'Rem.', 'stunspore': 7, 'megadrain': 14, 'synthesis': 21, 'clearsmog': 28, 'payback': 35, 'thrash': 42, 'gigadrain': 49, 'suckerpunch': 56, 'spore': 63, 'ingrain': 70, 'ragepowder': 77, 'solarbeam': 91}
  },
  "fluttermane": {
    "moves": {'confuseray': 1, 'spite': 1, 'astonish': 1, 'sunnyday': 'Rem.', 'psybeam': 7, 'meanlook': 14, 'memento': 21, 'wish': 28, 'dazzlinggleam': 35, 'shadowball': 42, 'mysticalfire': 49, 'powergem': 56, 'psyshock': 63, 'phantomforce': 70, 'painsplit': 77, 'moonblast': 84, 'perishsong': 91}
  },
  "slitherwing": {
    "moves": {'gust': 1, 'ember': 1, 'bugbite': 1, 'sunnyday': 'Rem.', 'poisonpowder': 7, 'stunspore': 7, 'flamecharge': 14, 'stomp': 21, 'lowsweep': 28, 'morningsun': 35, 'lunge': 42, 'superpower': 49, 'bulkup': 56, 'dualwingbeat': 63, 'firstimpression': 70, 'whirlwind': 77, 'leechlife': 84, 'thrash': 91}
  },
  "sandyshocks": {
    "moves": {'thunderwave': 1, 'electricterrain': 1, 'supersonic': 1, 'thundershock': 1, 'sunnyday': 'Rem.', 'spark': 7, 'bulldoze': 14, 'chargebeam': 21, 'triattack': 28, 'screech': 35, 'heavyslam': 42, 'metalsound': 49, 'discharge': 56, 'earthpower': 63, 'mirrorcoat': 70, 'gravity': 77, 'zapcannon': 84, 'magneticflux': 91}
  },
  "irontreads": {
    "moves": {'electricterrain': 1, 'hornattack': 1, 'defensecurl': 1, 'rollout': 1, 'bulldoze': 7, 'rapidspin': 21, 'ironhead': 28, 'stompingtantrum': 35, 'knockoff': 42, 'earthquake': 49, 'heavyslam': 56, 'wildcharge': 63, 'endeavor': 70, 'megahorn': 77, 'gigaimpact': 84, 'steelroller': 91}
  },
  "ironbundle": {
    "moves": {'present': 1, 'electricterrain': 'Rem.', 'powdersnow': 7, 'whirlpool': 14, 'takedown': 21, 'drillpeck': 28, 'helpinghand': 35, 'freezedry': 42, 'flipturn': 49, 'icebeam': 56, 'agility': 63, 'snowscape': 70, 'hydropump': 77, 'auroraveil': 84, 'blizzard': 91}
  },
  "ironhands": {
    "moves": {'sandattack': 1, 'tackle': 1, 'focusenergy': 1, 'armthrust': 1, 'electricterrain': 'Rem.', 'fakeout': 7, 'whirlwind': 14, 'thunderpunch': 21, 'slam': 28, 'forcepalm': 35, 'seismictoss': 42, 'charge': 49, 'wildcharge': 56, 'closecombat': 63, 'detect': 70, 'heavyslam': 77, 'bellydrum': 84, 'focuspunch': 91}
  },
  "ironjugulis": {
    "moves": {'electricterrain': 1, 'workup': 1, 'focusenergy': 1, 'triattack': 1, 'aircutter': 1, 'roar': 7, 'assurance': 14, 'dragonbreath': 21, 'snarl': 28, 'crunch': 35, 'hypervoice': 42, 'airslash': 56, 'knockoff': 63, 'darkpulse': 70, 'outrage': 77, 'dragonpulse': 84, 'hyperbeam': 91}
  },
  "ironmoth": {
    "moves": {'gust': 1, 'whirlwind': 1, 'ember': 1, 'acidspray': 1, 'electricterrain': 'Rem.', 'strugglebug': 7, 'firespin': 14, 'takedown': 21, 'lunge': 28, 'screech': 35, 'discharge': 42, 'sludgewave': 49, 'fierydance': 56, 'metalsound': 63, 'morningsun': 70, 'hurricane': 77, 'bugbuzz': 84, 'overheat': 91}
  },
  "ironthorns": {
    "moves": {'rockthrow': 1, 'firefang': 1, 'icefang': 1, 'irondefense': 1, 'thunderfang': 1, 'electricterrain': 'Rem.', 'screech': 7, 'rocktomb': 21, 'bite': 28, 'charge': 35, 'rockslide': 42, 'sandstorm': 49, 'wildcharge': 56, 'pinmissile': 63, 'earthquake': 70, 'stealthrock': 77, 'stoneedge': 84, 'gigaimpact': 91}
  },
  "frigibax": {
    "moves": {'tackle': 1, 'leer': 1, 'dragontail': 1, 'icywind': 6, 'dragonbreath': 12, 'focusenergy': 18, 'bite': 24, 'icefang': 29, 'dragonclaw': 32, 'takedown': 36, 'icebeam': 40, 'crunch': 44, 'iciclecrash': 48}
  },
  "arctibax": {
    "moves": {'tackle': 1, 'leer': 1, 'dragontail': 1, 'icywind': 6, 'dragonbreath': 12, 'focusenergy': 18, 'bite': 24, 'icefang': 29, 'takedown': 40, 'icebeam': 45, 'crunch': 50, 'iciclecrash': 55}
  },
  "baxcalibur": {
    "moves": {'snowscape': 1, 'breakingswipe': 1, 'iceshard': 1, 'tackle': 1, 'leer': 1, 'dragontail': 1, 'glaiverush': 'Evo.', 'icywind': 6, 'dragonbreath': 12, 'focusenergy': 18, 'bite': 24, 'icefang': 29, 'dragonclaw': 35, 'takedown': 42, 'icebeam': 48, 'crunch': 55, 'iciclecrash': 62}
  },
  "gimmighoul": {
    "moves": {'astonish': 1, 'tackle': 1}
  },
  "gholdengo": {
    "moves": {'astonish': 1, 'tackle': 1, 'nightshade': 7, 'confuseray': 14, 'substitute': 21, 'metalsound': 28, 'shadowball': 35, 'recover': 42, 'powergem': 49, 'makeitrain': 56, 'nastyplot': 63, 'memento': 70}
  },
  "wo-chien": {
    "moves": {'absorb': 1, 'spite': 1, 'meanlook': 1, 'tickle': 5, 'payback': 10, 'poisonpowder': 15, 'stunspore': 15, 'megadrain': 20, 'leechseed': 25, 'growth': 30, 'ingrain': 35, 'darkpulse': 40, 'gigadrain': 45, 'ruination': 50, 'foulplay': 55, 'powerwhip': 60, 'grassyterrain': 65, 'knockoff': 70, 'leafstorm': 75}
  },
  "chien-pao": {
    "moves": {'powdersnow': 1, 'spite': 1, 'meanlook': 1, 'icywind': 5, 'payback': 10, 'mist': 15, 'haze': 15, 'iceshard': 20, 'swordsdance': 25, 'snowscape': 30, 'nightslash': 35, 'darkpulse': 40, 'iciclecrash': 45, 'ruination': 50, 'suckerpunch': 55, 'sacredsword': 60, 'recover': 65, 'throatchop': 70, 'sheercold': 75}
  },
  "ting-lu": {
    "moves": {'sandtomb': 1, 'spite': 1, 'meanlook': 1, 'spikes': 5, 'payback': 10, 'stomp': 15, 'bulldoze': 20, 'whirlwind': 25, 'taunt': 30, 'thrash': 35, 'darkpulse': 40, 'stompingtantrum': 45, 'ruination': 50, 'throatchop': 55, 'rockslide': 60, 'memento': 65, 'earthquake': 70, 'fissure': 75}
  },
  "chi-yu": {
    "moves": {'ember': 1, 'spite': 1, 'meanlook': 1, 'flamewheel': 5, 'payback': 10, 'willowisp': 15, 'flamecharge': 20, 'incinerate': 25, 'confuseray': 30, 'nastyplot': 35, 'darkpulse': 40, 'lavaplume': 45, 'ruination': 50, 'bounce': 55, 'swagger': 60, 'inferno': 65, 'memento': 70, 'overheat': 75}
  },
  "roaringmoon": {
    "moves": {'dragonbreath': 1, 'leer': 1, 'bite': 1, 'focusenergy': 1, 'sunnyday': 'Rem.', 'jawlock': 'Rem.', 'breakingswipe': 'Rem.', 'scaleshot': 'Rem.', 'incinerate': 7, 'headbutt': 14, 'scaryface': 21, 'dragonclaw': 28, 'zenheadbutt': 35, 'flamethrower': 42, 'nightslash': 49, 'dragondance': 56, 'dragonrush': 63, 'fly': 70, 'throatchop': 77, 'roost': 84, 'doubleedge': 91}
  },
  "ironvaliant": {
    "moves": {'disable': 1, 'doubleteam': 1, 'shadowsneak': 1, 'furycutter': 1, 'electricterrain': 'Rem.', 'hypnosis': 7, 'feint': 14, 'futuresight': 21, 'dazzlinggleam': 28, 'psychocut': 35, 'nightslash': 42, 'leafblade': 49, 'moonblast': 56, 'closecombat': 63, 'knockoff': 70, 'destinybond': 77, 'wideguard': 84, 'quickguard': 84, 'spiritbreak': 91}
  },
  "koraidon": {
    "moves": {'sunnyday': 1, 'breakingswipe': 1, 'rocksmash': 7, 'ancientpower': 14, 'drainpunch': 21, 'brickbreak': 28, 'agility': 35, 'dragonclaw': 42, 'flamethrower': 49, 'collisioncourse': 56, 'screech': 63, 'counter': 70, 'outrage': 77, 'closecombat': 84, 'flareblitz': 91, 'gigaimpact': 98}
  },
  "miraidon": {
    "moves": {'electricterrain': 1, 'thundershock': 1, 'dragonbreath': 1, 'shockwave': 7, 'charge': 14, 'paraboliccharge': 21, 'discharge': 28, 'agility': 35, 'dragonpulse': 42, 'powergem': 49, 'electrodrift': 56, 'metalsound': 63, 'mirrorcoat': 70, 'outrage': 77, 'thunder': 84, 'overheat': 91, 'hyperbeam': 98}
  },
  "walkingwake": {
    "moves": {'roar': 1, 'leer': 1, 'twister': 1, 'aquajet': 1, 'sunnyday': 'Rem.', 'honeclaws': 'Rem.', 'bite': 7, 'waterpulse': 14, 'nobleroar': 21, 'dragonbreath': 28, 'breakingswipe': 35, 'dragonrush': 42, 'hydrosteam': 56, 'dragonpulse': 63, 'outrage': 70, 'flamethrower': 77, 'hydropump': 84}
  },
  "ironleaves": {
    "moves": {'quickattack': 1, 'leer': 1, 'helpinghand': 1, 'workup': 1, 'electricterrain': 'Rem.', 'quash': 'Rem.', 'magicalleaf': 7, 'retaliate': 14, 'quickguard': 21, 'nightslash': 28, 'swordsdance': 35, 'sacredsword': 42, 'leafblade': 49, 'psyblade': 56, 'closecombat': 63, 'imprison': 70, 'megahorn': 77, 'allyswitch': 84, 'solarblade': 91}
  },
  "dipplin": {
    "moves": {'withdraw': 1, 'sweetscent': 1, 'recycle': 1, 'astonish': 1, 'infestation': 'Rem.', 'doublehit': 'Evo.', 'dragontail': 4, 'growth': 8, 'dragonbreath': 12, 'protect': 16, 'bulletseed': 20, 'syrupbomb': 28, 'dragonpulse': 32, 'recover': 36, 'energyball': 40, 'substitute': 44}
  },
  "poltchageist": {
    "moves": {'astonish': 1, 'withdraw': 1, 'stunspore': 1, 'absorb': 6, 'lifedew': 12, 'foulplay': 18, 'megadrain': 24, 'hex': 30, 'ragepowder': 36, 'gigadrain': 42, 'shadowball': 48, 'memento': 54, 'leafstorm': 60}
  },
  "sinistcha": {
    "moves": {'astonish': 1, 'withdraw': 1, 'stunspore': 1, 'matchagotcha': 'Evo.', 'absorb': 6, 'lifedew': 12, 'foulplay': 18, 'megadrain': 24, 'hex': 30, 'ragepowder': 36, 'strengthsap': 42, 'shadowball': 48, 'memento': 54, 'leafstorm': 60}
  },
  "okidogi": {
    "moves": {'bite': 1, 'lowkick': 1, 'bulkup': 1, 'howl': 8, 'poisonfang': 16, 'forcepalm': 24, 'counter': 32, 'poisonjab': 40, 'brutalswing': 48, 'crunch': 56, 'superpower': 64, 'gigaimpact': 72}
  },
  "munkidori": {
    "moves": {'scratch': 1, 'confusion': 1, 'fakeout': 1, 'flatter': 1, 'helpinghand': 8, 'psybeam': 16, 'clearsmog': 24, 'poisonjab': 32, 'psychic': 40, 'sludgewave': 48, 'nastyplot': 56, 'futuresight': 64, 'partingshot': 72}
  },
  "fezandipiti": {
    "moves": {'doublekick': 1, 'peck': 1, 'poisongas': 1, 'disarmingvoice': 1, 'quickattack': 8, 'attract': 16, 'wingattack': 24, 'crosspoison': 32, 'tailslap': 40, 'beatup': 48, 'swagger': 56, 'flatter': 56, 'roost': 64, 'moonblast': 72}
  },
  "ogerpon": {
    "moves": {'vinewhip': 1, 'leechseed': 1, 'quickattack': 1, 'followme': 1, 'doublekick': 'Rem.', 'counter': 'Rem.', 'retaliate': 'Rem.', 'hornleech': 'Rem.', 'focusenergy': 6, 'growth': 12, 'slam': 18, 'lowsweep': 24, 'ivycudgel': 30, 'throatchop': 36, 'synthesis': 42, 'spikyshield': 48, 'powerwhip': 54, 'superpower': 60, 'woodhammer': 66}
  },
  "archaludon": {
    "moves": {'leer': 1, 'metalclaw': 1, 'electroshot': 'Evo.', 'rocksmash': 6, 'honeclaws': 12, 'metalsound': 18, 'breakingswipe': 24, 'dragontail': 30, 'irondefense': 36, 'focusenergy': 42, 'dragonclaw': 48, 'flashcannon': 54, 'metalburst': 60, 'hyperbeam': 66}
  },
  "hydrapple": {
    "moves": {'withdraw': 1, 'sweetscent': 1, 'recycle': 1, 'astonish': 1, 'yawn': 'Rem.', 'doublehit': 'Rem.', 'infestation': 'Rem.', 'ficklebeam': 'Evo.', 'dragontail': 4, 'growth': 8, 'dragonbreath': 12, 'protect': 16, 'bulletseed': 20, 'syrupbomb': 28, 'dragonpulse': 32, 'recover': 36, 'energyball': 40, 'substitute': 44, 'powerwhip': 54}
  },
  "gougingfire": {
    "moves": {'stomp': 1, 'leer': 1, 'incinerate': 1, 'sunnyday': 1, 'doublekick': 'Rem.', 'ancientpower': 'Rem.', 'nobleroar': 'Rem.', 'firefang': 7, 'howl': 14, 'bite': 21, 'dragonclaw': 28, 'crushclaw': 35, 'morningsun': 42, 'burningbulwark': 49, 'dragonrush': 56, 'fireblast': 63, 'lavaplume': 70, 'outrage': 77, 'flareblitz': 84, 'ragingfury': 91}
  },
  "ragingbolt": {
    "moves": {'twister': 1, 'sunnyday': 1, 'shockwave': 1, 'stomp': 1, 'ancientpower': 'Rem.', 'charge': 7, 'dragonbreath': 14, 'electricterrain': 21, 'discharge': 28, 'dragontail': 35, 'calmmind': 42, 'thunderclap': 49, 'dragonhammer': 56, 'risingvoltage': 63, 'dragonpulse': 70, 'zapcannon': 77, 'bodypress': 84, 'thunder': 91}
  },
  "ironboulder": {
    "moves": {'hornattack': 1, 'leer': 1, 'rockthrow': 1, 'electricterrain': 1, 'quickattack': 7, 'slash': 14, 'agility': 21, 'psychocut': 28, 'counter': 35, 'rocktomb': 42, 'sacredsword': 49, 'mightycleave': 56, 'swordsdance': 63, 'megahorn': 70, 'quickguard': 77, 'stoneedge': 84, 'gigaimpact': 91}
  },
  "ironcrown": {
    "moves": {'leer': 1, 'electricterrain': 1, 'confusion': 1, 'metalclaw': 1, 'smartstrike': 7, 'slash': 14, 'irondefense': 21, 'psyshock': 28, 'psychocut': 35, 'flashcannon': 42, 'sacredsword': 49, 'tachyoncutter': 56, 'futuresight': 63, 'voltswitch': 70, 'quickguard': 77, 'metalburst': 84, 'hyperbeam': 91}
  },
  "terapagos": {
    "moves": {'withdraw': 1, 'triattack': 1, 'rapidspin': 1, 'ancientpower': 10, 'headbutt': 20, 'protect': 30, 'earthpower': 40, 'heavyslam': 50, 'terastarstorm': 60, 'doubleedge': 70, 'rockpolish': 80, 'gyroball': 90}
  },
  "pecharunt": {
    "moves": {'smog': 1, 'poisongas': 1, 'memento': 1, 'astonish': 1, 'defensecurl': 'Rem.', 'rollout': 'Rem.', 'meanlook': 'Rem.', 'withdraw': 8, 'destinybond': 16, 'faketears': 24, 'partingshot': 32, 'shadowball': 40, 'malignantchain': 48, 'toxic': 56, 'nastyplot': 64, 'recover': 72}
  }
};



export function getMoves(pokemonID: string, pokemonLevel: number): PokemonMove[] {
    // Get learnset
    let availableMoves: PokemonMove[] = [];
    const learnset = LEARNSETS[pokemonID];
    if (!learnset) {
      logError(`No learnset found for Pokemon ID ${pokemonID}`);
      return availableMoves;
    }
    for (const [moveName, moveSource] of Object.entries(learnset.moves)) {
      const move = ALL_MOVES[moveName];

      // TODO
      if (moveSource === 'Evo.' || moveSource === 'Rem.') {
        continue;
      }

      // Add moves available at the pokemon's level
      if (pokemonLevel >= moveSource) {
        availableMoves.push(move);
      }
    }
    // Keep only the 4 latest moves (highest-level ones)
    availableMoves.sort((a, b) => {
      const levelA = learnset.moves[a.name] as number;
      const levelB = learnset.moves[b.name] as number;
      return levelB - levelA;
    });
    availableMoves = availableMoves.slice(0, 4);
    return availableMoves;
  }