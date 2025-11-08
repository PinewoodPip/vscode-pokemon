import { POKEMON_DATA } from '../common/pokemon-data';
import { PokemonColor, PokemonConfig, PokemonGeneration, PokemonSize } from '../common/types';
import { BasePokemonType } from './base-pokemon-type';
import { PokemonFoodConfig } from './food';
import { States } from './states';

export interface PokemonNeedsState {
  hunger: number;
  happiness: number;
}

export class PokemonNeeds {
  readonly MAX_HUNGER = 100;
  readonly MAX_HAPPINESS = 100;
  private readonly HUNGER_DECREASE_CHANCE = 0.01; // Chance to tick down hunger each frame.
  private readonly HAPPINESS_PER_FEED = 30;

  hunger: number;
  happiness: number;

  constructor(hunger: number = 100, happiness: number = 100) {
    this.hunger = hunger;
    this.happiness = happiness;
  }

  feed(amount: number) {
    this.hunger = Math.min(this.MAX_HUNGER, this.hunger + amount);
    this.addHappiness(this.HAPPINESS_PER_FEED);
  }

  addHappiness(amount: number) {
    this.happiness = Math.min(this.MAX_HAPPINESS, this.happiness + amount);
  }

  update() {
    // Decrease hunger
    if (Math.random() < this.HUNGER_DECREASE_CHANCE) {
      this.hunger = Math.max(0, this.hunger - 1);

      // Decrease happiness if hungry
      if (this.isHungry()) {
        this.happiness = Math.max(0, this.happiness - 1);
      }
    }
  }

  /**
   * Whether the pokemon should seek out berries to eat.
   */
  isHungry(): boolean {
    return this.hunger < 75;
  }

  serialize(): PokemonNeedsState {
    return {
      hunger: this.hunger,
      happiness: this.happiness,
    };
  }

  static deserialize(state: PokemonNeedsState): PokemonNeeds {
    return new PokemonNeeds(state.hunger, state.happiness);
  }
}

export class Pokemon extends BasePokemonType {
  private readonly BASE_SPEED = 0.8;
  private readonly SPEED_STAT_MULTIPLIER = 1 / 70;

  config: PokemonConfig;

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
      {
        state: States.chaseEntity,
        possibleNextStates: [
          { state: States.sitIdle, weight: 1 },
          { state: States.walkLeft, weight: 1 },
          { state: States.walkRight, weight: 1 },
        ],
      },
    ],
  };

  update() {
    const wasHungry = this.needs.isHungry();

    // Update needs
    this.needs.update();
    if (!wasHungry && this.needs.isHungry()) {
      this.showBubble('hungry.png'); // TODO! hunger bubble
    }

    // Update state machine
    this.nextFrame();
  }

  likesBerry(berry: PokemonFoodConfig): boolean {
    console.log(berry);
      // Check if the pokemon's combat type matches the berry types
      return berry.enjoyedByTypes.some(type => this.config.types.includes(type));
  }

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

  setNeeds(needs: PokemonNeedsState) {
    this.needs = PokemonNeeds.deserialize(needs);
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
