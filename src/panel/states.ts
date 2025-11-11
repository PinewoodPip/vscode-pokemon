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
}

export class PokemonPanelState {
    pokemonStates: Array<PokemonElementState> | undefined;
    pokemonCounter: number | undefined;
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

export class ChaseState implements IState {
    private readonly BALL_CATCH_CHANCE = 0.2;
    private readonly BALL_COOLDOWN_FRAMES = 20;
    private readonly KICK_BASE_VELOCITY_Y = 3;
    private readonly KICK_RANDOM_VELOCITY_Y = 7;
    private readonly KICK_BASE_VELOCITY_X = 5;
    private readonly KICK_RANDOM_VELOCITY_X = 10;

    label = States.chase;
    // spriteLabel = 'run'; // TODO
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.left;
    ball: PhysicsEntity;
    canvas: HTMLCanvasElement;
    pokemon: IPokemonType;
    ballCooldown: number = 0; // Cooldown between ball interactions, in frames.

    constructor(
        pokemon: IPokemonType,
        ball: PhysicsEntity,
        canvas: HTMLCanvasElement,
    ) {
        this.pokemon = pokemon;
        this.ball = ball;
        this.canvas = canvas;
    }

    nextFrame(): FrameResult {
        if (!this.ball.isActive()) {
            return FrameResult.stateCancel; // Ball is already caught
        }
        const ballState = this.ball.state;
        if (this.pokemon.left > ballState.cx) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        } else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }

        this.ballCooldown -= 1;

        // Check if the ball was caught
        let stateResult = FrameResult.stateContinue;
        if (
            this.canvas.height - ballState.cy <
            this.pokemon.width + this.pokemon.floor &&
            ballState.cx < this.pokemon.left &&
            this.pokemon.left < ballState.cx + 15 &&
            this.ballCooldown <= 0
        ) {
            // Random chance to catch the ball and celebrate
            if (Math.random() < this.BALL_CATCH_CHANCE) {
                // Hide ball
                this.ball.deactivate();

                // Celebrate
                this.pokemon.showSpeechBubble(2000, false);
                stateResult = FrameResult.stateComplete; // End the state
            } else {
                // Otherwise kick the ball
                this.kickBall();
            }
        }
        return stateResult;
    }

    kickBall() {
        const kickDirection = this.horizontalDirection === HorizontalDirection.left ? -1 : 1; // Assumes kicking can only be done when facing left/right
        const ball = this.ball.state;

        // Add velocity to the ball
        ball.vy += this.KICK_BASE_VELOCITY_Y + Math.random() * this.KICK_RANDOM_VELOCITY_Y;
        ball.vx += kickDirection * (this.KICK_BASE_VELOCITY_X + Math.random() * this.KICK_RANDOM_VELOCITY_X);

        // Reset kick cooldown
        this.ballCooldown = this.BALL_COOLDOWN_FRAMES;
    }
}

export type ChaseEntityOnCaughtCallback = (entity: PhysicsEntity) => void;

export class ChaseEntityState implements IState {
    private readonly ENTITY_CATCH_CHANCE = 1;
    private readonly INTERACTION_COOLDOWN_FRAMES = 20;
    private readonly KICK_BASE_VELOCITY_Y = 3;
    private readonly KICK_RANDOM_VELOCITY_Y = 7;
    private readonly KICK_BASE_VELOCITY_X = 5;
    private readonly KICK_RANDOM_VELOCITY_X = 10;

    label = States.chaseEntity;
    spriteLabel = 'walk';
    horizontalDirection = HorizontalDirection.left;
    targetEntity: PhysicsEntity;
    canvas: HTMLCanvasElement;
    pokemon: IPokemonType;
    interactionCooldown: number = 0; // Cooldown between entity interactions, in frames.
    onCaughtCallback: ChaseEntityOnCaughtCallback | undefined;

    constructor(
        pokemon: IPokemonType,
        targetEntity: PhysicsEntity,
        canvas: HTMLCanvasElement,
        onCaughtCallback?: ChaseEntityOnCaughtCallback,
    ) {
        this.pokemon = pokemon;
        this.targetEntity = targetEntity;
        this.canvas = canvas;
        this.onCaughtCallback = onCaughtCallback;
    }

    nextFrame(): FrameResult {
        if (!this.targetEntity.isActive()) {
            return FrameResult.stateComplete; // Entity was already caught (could also have been caught by another pokemon)
        }
        const state = this.targetEntity.state;
        if (this.pokemon.left > state.cx) {
            this.horizontalDirection = HorizontalDirection.left;
            this.pokemon.positionLeft(this.pokemon.left - this.pokemon.speed);
        } else {
            this.horizontalDirection = HorizontalDirection.right;
            this.pokemon.positionLeft(this.pokemon.left + this.pokemon.speed);
        }

        this.interactionCooldown -= 1;

        // Check if the ball was caught
        let stateResult = FrameResult.stateContinue;
        if (
            this.canvas.height - state.cy <
            this.pokemon.width + this.pokemon.floor &&
            state.cx < this.pokemon.left &&
            this.pokemon.left < state.cx + 15 &&
            this.interactionCooldown <= 0
        ) {
            // Random chance to catch the ball and celebrate
            if (Math.random() < this.ENTITY_CATCH_CHANCE) {
                this.catchEntity();
                stateResult = FrameResult.stateComplete; // End the state
            } else {
                // Otherwise kick the ball
                this.kickEntity();
            }
        }
        return stateResult;
    }

    catchEntity() {
        this.targetEntity.deactivate();

        // Celebrate
        this.pokemon.showSpeechBubble(2000, false);

        // Run callback
        if (this.onCaughtCallback) {
            this.onCaughtCallback(this.targetEntity);
        }
    }

    kickEntity() {
        const kickDirection = this.horizontalDirection === HorizontalDirection.left ? -1 : 1; // Assumes kicking can only be done when facing left/right
        const state = this.targetEntity.state;

        // Add velocity to the ball
        state.vy += this.KICK_BASE_VELOCITY_Y + Math.random() * this.KICK_RANDOM_VELOCITY_Y;
        state.vx += kickDirection * (this.KICK_BASE_VELOCITY_X + Math.random() * this.KICK_RANDOM_VELOCITY_X);

        // Reset kick cooldown
        this.interactionCooldown = this.INTERACTION_COOLDOWN_FRAMES;
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
            return FrameResult.stateComplete;
        }
        return FrameResult.stateContinue;
    }
}
