import { POKEMON_DATA } from '../common/pokemon-data';
import { PokemonColor, PokemonConfig, PokemonGeneration, PokemonSize } from '../common/types';
import { BasePokemonType } from './base-pokemon-type';
import { States } from './states';

export class Pokemon extends BasePokemonType {
  private readonly BASE_SPEED = 0.8;
  private readonly SPEED_STAT_MULTIPLIER = 1 / 70;

  private config: PokemonConfig;

  constructor(
    pokemonType: string,
    spriteElement: HTMLImageElement,
    collisionElement: HTMLDivElement,
    speechElement: HTMLImageElement,
    size: PokemonSize,
    left: number,
    bottom: number,
    pokemonRoot: string,
    floor: number,
    name: string,
    speed: number,
    generation: string,
    originalSpriteSize: number,
  ) {
    super(spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation, originalSpriteSize);

    this.config = POKEMON_DATA[pokemonType] || POKEMON_DATA.bulbasaur;
    this.label = pokemonType;
    this._speed = this.calculateSpeed();
  }

  static possibleColors = [PokemonColor.default];

  sequence = {
    startingState: States.sitIdle,
    sequenceStates: [
      {
        state: States.sitIdle,
        possibleNextStates: [
          { state: States.walkLeft, weight: 1 },
          { state: States.walkRight, weight: 1 },
          { state: States.sleep, weight: 0.1 },
        ],
      },
      {
        state: States.walkLeft,
        possibleNextStates: [
          { state: States.sitIdle, weight: 1 },
          { state: States.walkRight, weight: 1 },
        ],
      },
      {
        state: States.walkRight,
        possibleNextStates: [
          { state: States.sitIdle, weight: 1 },
          { state: States.walkLeft, weight: 1 },
        ],
      },
      {
        state: States.idleWithBall,
        // Reset to walking after catching a ball.
        possibleNextStates: [
          { state: States.walkRight, weight: 1 },
          { state: States.walkLeft, weight: 1 },
        ],
      },
      {
        state: States.sleep,
        possibleNextStates: [
          { state: States.sitIdle, weight: 1 }, // Wake up and stand a little first before moving around
        ],
      },
      {
        // Note: exiting from this state onto another only happens if the pokemon was sleeping; otherwsie swiping stores the previous state & restores it afterwards
        state: States.swipe,
        possibleNextStates: [
          { state: States.sitIdle, weight: 1 },
          { state: States.walkLeft, weight: 1 },
          { state: States.walkRight, weight: 1 },
        ],
      },
    ],
  };

  get generation(): PokemonGeneration {
    return this.config.generation;
  }

  get pokedexNumber(): number {
    return this.config.id;
  }
  
  calculateSpeed(): number {
    const speed = this.config.stats.speed;
    return this.BASE_SPEED + speed * this.SPEED_STAT_MULTIPLIER;
  }

  showSpeechBubble(duration: number = 3000, friend: boolean) {
    super.showSpeechBubble(duration, friend);
  }

  static getPokemonData(type: string): PokemonConfig | undefined {
    return POKEMON_DATA[type];
  }
}

export const POKEMON_NAMES: ReadonlyArray<string> = [
  'Bella',
  'Charlie',
  'Molly',
  'Coco',
  'Ruby',
  'Oscar',
  'Lucy',
  'Bailey',
  'Milo',
  'Daisy',
  'Archie',
  'Ollie',
  'Rosie',
  'Lola',
  'Frankie',
  'Roxy',
  'Poppy',
  'Luna',
  'Jack',
  'Millie',
  'Teddy',
  'Cooper',
  'Bear',
  'Rocky',
  'Alfie',
  'Hugo',
  'Bonnie',
  'Pepper',
  'Lily',
  'Tilly',
  'Leo',
  'Maggie',
  'George',
  'Mia',
  'Marley',
  'Harley',
  'Chloe',
  'Lulu',
  'Missy',
  'Jasper',
  'Billy',
  'Nala',
  'Monty',
  'Ziggy',
  'Winston',
  'Zeus',
  'Zoe',
  'Stella',
  'Sasha',
  'Rusty',
  'Gus',
  'Baxter',
  'Dexter',
  'Willow',
  'Barney',
  'Bruno',
  'Penny',
  'Honey',
  'Milly',
  'Murphy',
  'Simba',
  'Holly',
  'Benji',
  'Henry',
  'Lilly',
  'Pippa',
  'Shadow',
  'Sam',
  'Lucky',
  'Ellie',
  'Duke',
  'Jessie',
  'Cookie',
  'Harvey',
  'Bruce',
  'Jax',
  'Rex',
  'Louie',
  'Jet',
  'Banjo',
];
