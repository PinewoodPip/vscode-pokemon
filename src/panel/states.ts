import { PokemonColor, PokemonProgression, PokemonProgressionState, PokemonType } from '../common/types';
import { PhysicsEntity } from './entity';
import { PokemonFoodConfig } from './food';
import { PokemonNeeds, PokemonNeedsState } from './pokemon';

export interface IPokemonType {
    isChasingEntity(): unknown;
    chaseEntity(entity: PhysicsEntity, canvas: HTMLCanvasElement, onCaughtCallback: (entity: PhysicsEntity) => void): void;
    likesBerry(berry: PokemonFoodConfig): unknown;
    update(): unknown;
    nextFrame(): void;

    // Special methods for actions
    canSwipe: boolean;
    canChase: boolean;
    swipe(): void;
    chase(ball: PhysicsEntity, canvas: HTMLCanvasElement): void;
    speed: number;
    isMoving: boolean;
    hello: string;
    needs: PokemonNeeds;
    progression: PokemonProgression;

    // State API
    getState(): PokemonInstanceState;
    recoverState(state: PokemonInstanceState): void;
    recoverFriend(friend: IPokemonType): void;

    // Positioning
    bottom: number;
    left: number;
    positionBottom(bottom: number): void;
    positionLeft(left: number): void;
    width: number;
    floor: number;

    // Friends API
    name: string;
    emoji: string;
    hasFriend: boolean;
    friend: IPokemonType | undefined;
    makeFriendsWith(friend: IPokemonType): boolean;
    isPlaying: boolean;

    showSpeechBubble(duration: number, friend: boolean): void;
    showBubble(img: string, duration: number): void;
    hideSpeechBubble(): unknown;

    isHidden: boolean;
}

export class PokemonInstanceState {
    currentStateEnum: States | undefined;
}

/** Serialized pokemon class. */
export interface PokemonElementState {
    pokemonState: PokemonInstanceState | undefined;
    pokemonGeneration: string | undefined;
    originalSpriteSize: number | undefined;
    pokemonType: PokemonType | undefined;
    pokemonColor: PokemonColor | undefined;
    elLeft: string | undefined;
    elBottom: string | undefined;
    pokemonName: string | undefined;
    pokemonFriend: string | undefined;
    needs: PokemonNeedsState;
    progression: PokemonProgressionState;
    /**Whether the pokemon is stored in the PC. */
    isHidden: boolean | undefined;
}

export class PokemonPanelState {
    pokemonStates: Array<PokemonElementState> | undefined;
    pokemonCounter: number | undefined;
    pokedex: Record<string, number> | undefined; // Map of species ID to count
}

export enum HorizontalDirection {
    left,
    right,
    natural, // No change to current direction
}

export const enum States {
    sitIdle = 'sit-idle',
    walkRight = 'walk-right',
    walkLeft = 'walk-left',
    runRight = 'run-right',
    runLeft = 'run-left',
    lie = 'lie',
    wallHangLeft = 'wall-hang-left',
    climbWallLeft = 'climb-wall-left',
    jumpDownLeft = 'jump-down-left',
    land = 'land',
    swipe = 'swipe',
    idleWithBall = 'idle-with-ball',
    chase = 'chase',
    chaseFriend = 'chase-friend',
    standRight = 'stand-right',
    standLeft = 'stand-left',
    sleep = 'sleep',
    chaseEntity = 'chase-entity',
}

export enum FrameResult {
    stateContinue,
    stateComplete,
    // Special states
    stateCancel,
}

export function isStateAboveGround(state: States): boolean {
    return (
        state === States.climbWallLeft ||
        state === States.jumpDownLeft ||
        state === States.land ||
        state === States.wallHangLeft
    );
}

export function resolveState(state: string, pokemon: IPokemonType): IState {
    switch (state) {
        case States.sitIdle:
            return new SitIdleState(pokemon);
        case States.walkRight:
            return new WalkRightState(pokemon);
        case States.walkLeft:
            return new WalkLeftState(pokemon);
        case States.runRight:
            return new RunRightState(pokemon);
        case States.runLeft:
            return new RunLeftState(pokemon);
        case States.lie:
            return new LieState(pokemon);
        case States.wallHangLeft:
            return new WallHangLeftState(pokemon);
        case States.climbWallLeft:
            return new ClimbWallLeftState(pokemon);
        case States.jumpDownLeft:
            return new JumpDownLeftState(pokemon);
        case States.land:
            return new LandState(pokemon);
        case States.swipe:
            return new SwipeState(pokemon);
        case States.idleWithBall:
            return new IdleWithBallState(pokemon);
        case States.chaseFriend:
            return new ChaseFriendState(pokemon);
        case States.standRight:
            return new StandRightState(pokemon);
        case States.standLeft:
            return new StandLeftState(pokemon);
        case States.sleep:
            return new SleepState(pokemon);
    }
    return new SitIdleState(pokemon);
}

export interface IState {
    label: string;
    spriteLabel: string;
    horizontalDirection: HorizontalDirection;
    pokemon: IPokemonType;
    nextFrame(): FrameResult;
}

class AbstractStaticState implements IState {
    label = States.sitIdle;
    idleCounter: number;
    spriteLabel = 'idle';
    holdTime = 50;
    pokemon: IPokemonType;

    horizontalDirection = HorizontalDirection.left;

    constructor(pokemon: IPokemonType) {
        this.idleCounter = 0;
        this.pokemon = pokemon;
    }

    nextFrame(): FrameResult {
        this.idleCounter++;
        if (this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}

export class SitIdleState extends AbstractStaticState {
    label = States.sitIdle;
    spriteLabel = 'idle';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 50;
}

export class LieState extends AbstractStaticState {
    label = States.lie;
    spriteLabel = 'lie';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 50;
}

export class WallHangLeftState extends AbstractStaticState {
    label = States.wallHangLeft;
    spriteLabel = 'wallgrab';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 50;
}

export class LandState extends AbstractStaticState {
    label = States.land;
    spriteLabel = 'land';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 10;
}

export class SwipeState extends AbstractStaticState {
    label = States.swipe;
    spriteLabel = 'idle'; // use base idle sprite
    horizontalDirection = HorizontalDirection.natural;
    holdTime = 15;
}

export class IdleWithBallState extends AbstractStaticState {
    label = States.idleWithBall;
    // spriteLabel = 'with_ball'; // TODO
    spriteLabel = 'idle';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 30;
}

export class WalkRightState implements IState {
    label = States.walkRight;
    pokemon: IPokemonType;
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.right;
    leftBoundary: number;
    speedMultiplier = 1;
    idleCounter: number;
    holdTime = 60;

    constructor(pokemon: IPokemonType) {
        this.leftBoundary = Math.floor(window.innerWidth * 0.95);
        this.pokemon = pokemon;
        this.idleCounter = 0;
    }

    nextFrame(): FrameResult {
        this.idleCounter++;
        this.pokemon.positionLeft(
            this.pokemon.left + this.pokemon.speed * this.speedMultiplier,
        );

        // Random chance to stop in the middle
        if (this.pokemon.isMoving && Math.random() < 0.01) {
            return FrameResult.stateComplete;
        }

        if (
            this.pokemon.isMoving &&
            this.pokemon.left >= this.leftBoundary - this.pokemon.width
        ) {
            return FrameResult.stateComplete;
        } else if (!this.pokemon.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}

export class WalkLeftState implements IState {
    label = States.walkLeft;
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.left;
    pokemon: IPokemonType;
    speedMultiplier = 1;
    idleCounter: number;
    holdTime = 60;

    constructor(pokemon: IPokemonType) {
        this.pokemon = pokemon;
        this.idleCounter = 0;
    }

    nextFrame(): FrameResult {
        this.idleCounter++;
        this.pokemon.positionLeft(
            this.pokemon.left - this.pokemon.speed * this.speedMultiplier,
        );

        // Random chance to stop in the middle
        if (this.pokemon.isMoving && Math.random() < 0.01) {
            return FrameResult.stateComplete;
        }

        if (this.pokemon.isMoving && this.pokemon.left <= 0) {
            return FrameResult.stateComplete;
        } else if (!this.pokemon.isMoving && this.idleCounter > this.holdTime) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}

export class RunRightState extends WalkRightState {
    label = States.runRight;
    spriteLabel = 'walk_fast';
    speedMultiplier = 1.6;
    holdTime = 130;
}

export class RunLeftState extends WalkLeftState {
    label = States.runLeft;
    spriteLabel = 'walk_fast';
    speedMultiplier = 1.6;
    holdTime = 130;
}

export type ChaseEntityOnCaughtCallback = (entity: PhysicsEntity) => void;

export interface ChaseStateOptions {
    label: States;
    catchChance: number;
    /** FrameResult to return when the target is already inactive on entry. */
    onInactive: FrameResult;
    onCaughtCallback?: ChaseEntityOnCaughtCallback;
}

export class ChaseState implements IState {
    private readonly COOLDOWN_FRAMES = 20;
    private readonly KICK_BASE_VELOCITY_Y = 3;
    private readonly KICK_RANDOM_VELOCITY_Y = 7;
    private readonly KICK_BASE_VELOCITY_X = 5;
    private readonly KICK_RANDOM_VELOCITY_X = 10;

    label: States;
    // spriteLabel = 'run'; // TODO
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.left;
    target: PhysicsEntity;
    canvas: HTMLCanvasElement;
    pokemon: IPokemonType;
    cooldown: number = 0;
    private catchChance: number;
    private onInactive: FrameResult;
    private onCaughtCallback: ChaseEntityOnCaughtCallback | undefined;

    constructor(
        pokemon: IPokemonType,
        target: PhysicsEntity,
        canvas: HTMLCanvasElement,
        options: ChaseStateOptions,
    ) {
        this.pokemon = pokemon;
        this.target = target;
        this.canvas = canvas;
        this.label = options.label;
        this.catchChance = options.catchChance;
        this.onInactive = options.onInactive;
        this.onCaughtCallback = options.onCaughtCallback;
    }

    nextFrame(): FrameResult {
        if (!this.target.isActive()) {
            return this.onInactive;
        }
        const targetState = this.target.state;
        if (this.pokemon.left > targetState.cx) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        } else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }

        this.cooldown -= 1;

        // Check if we reached the target
        let stateResult = FrameResult.stateContinue;
        if (
            this.canvas.height - targetState.cy <
            this.pokemon.width + this.pokemon.floor &&
            targetState.cx < this.pokemon.left &&
            this.pokemon.left < targetState.cx + 15 &&
            this.cooldown <= 0
        ) {
            // The chase state can "catch" entities, removing them (ex. for thrown pokeballs)
            if (Math.random() < this.catchChance) {
                this.target.deactivate();
                this.pokemon.showSpeechBubble(2000, false);
                if (this.onCaughtCallback) {
                    this.onCaughtCallback(this.target);
                }
                stateResult = FrameResult.stateComplete;
            } else {
                this.kickTarget();
            }
        }
        return stateResult;
    }

    private kickTarget() {
        const kickDirection = this.horizontalDirection === HorizontalDirection.left ? -1 : 1; // Assumes kicking can only be done when facing left/right
        const state = this.target.state;
        state.vy += this.KICK_BASE_VELOCITY_Y + Math.random() * this.KICK_RANDOM_VELOCITY_Y;
        state.vx += kickDirection * (this.KICK_BASE_VELOCITY_X + Math.random() * this.KICK_RANDOM_VELOCITY_X);
        this.cooldown = this.COOLDOWN_FRAMES;
    }
}

export class ChaseFriendState implements IState {
    label = States.chaseFriend;
    spriteLabel = 'run';
    horizontalDirection = HorizontalDirection.left;
    pokemon: IPokemonType;

    constructor(pokemon: IPokemonType) {
        this.pokemon = pokemon;
    }

    nextFrame(): FrameResult {
        if (!this.pokemon.hasFriend || !this.pokemon.friend?.isPlaying) {
            return FrameResult.stateCancel; // Friend is no longer playing.
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if (this.pokemon.left > this.pokemon.friend!.left) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        } else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }

        return FrameResult.stateContinue;
    }
}

export class ClimbWallLeftState implements IState {
    label = States.climbWallLeft;
    spriteLabel = 'wallclimb';
    horizontalDirection = HorizontalDirection.left;
    pokemon: IPokemonType;

    constructor(pokemon: IPokemonType) {
        this.pokemon = pokemon;
    }

    nextFrame(): FrameResult {
        this.pokemon.positionBottom(this.pokemon.bottom + 1);
        if (this.pokemon.bottom >= 100) {
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}

export class JumpDownLeftState implements IState {
    label = States.jumpDownLeft;
    spriteLabel = 'fall_from_grab';
    horizontalDirection = HorizontalDirection.right;
    pokemon: IPokemonType;

    constructor(pokemon: IPokemonType) {
        this.pokemon = pokemon;
    }

    nextFrame(): FrameResult {
        this.pokemon.positionBottom(this.pokemon.bottom - 5);
        if (this.pokemon.bottom <= this.pokemon.floor) {
            this.pokemon.positionBottom(this.pokemon.floor);
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}

export class StandRightState extends AbstractStaticState {
    label = States.standRight;
    spriteLabel = 'stand';
    horizontalDirection = HorizontalDirection.right;
    holdTime = 60;
}

export class StandLeftState extends AbstractStaticState {
    label = States.standRight;
    spriteLabel = 'stand';
    horizontalDirection = HorizontalDirection.left;
    holdTime = 60;
}

export class SleepState extends AbstractStaticState {
    private readonly MIN_SLEEP_DURATION = 50; // In seconds.
    private readonly MAX_SLEEP_DURATION = 150; // In seconds.
    label = States.sleep;
    spriteLabel = 'idle';
    horizontalDirection = HorizontalDirection.natural;

    private sleepDuration: number; // Frames to sleep for.

    constructor(pokemon: IPokemonType) {
        super(pokemon);
        this.idleCounter = 0;
        this.pokemon = pokemon;

        // Randomize sleeping time
        const sleepSeconds = Math.random() * (this.MAX_SLEEP_DURATION - this.MIN_SLEEP_DURATION) + this.MIN_SLEEP_DURATION;
        this.sleepDuration = sleepSeconds * 10; // Convert to frames
        this.pokemon.showBubble('sleeping.png', this.sleepDuration * 1000);
    }

    nextFrame(): FrameResult {
        this.idleCounter++;
        if (this.idleCounter > this.sleepDuration) {
            this.pokemon.hideSpeechBubble(); // Ensure pokemon don't end up walking around with zzz over their heads
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
