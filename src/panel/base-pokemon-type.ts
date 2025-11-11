import { PokemonColor, PokemonProgression, PokemonSize, PokemonSpeed } from '../common/types';
import { getWeightedRandom } from '../common/util';
import { PhysicsEntity } from './entity';
import { PokemonNeeds } from './pokemon';
import { ISequenceTree, SequenceStateEntry } from './sequences';
import {
    States,
    IState,
    resolveState,
    PokemonInstanceState,
    isStateAboveGround,
    ChaseState,
    HorizontalDirection,
    FrameResult,
    IPokemonType,
    ChaseEntityState,
    ChaseEntityOnCaughtCallback,
} from './states';

export class InvalidStateError extends Error {
    fromState: States;
    pokemonType: string;

    constructor(fromState: States, pokemonType: string) {
        super(`Invalid state ${fromState} for pokemon type ${pokemonType}`);
        this.fromState = fromState;
        this.pokemonType = pokemonType;
    }
}

export abstract class BasePokemonType implements IPokemonType {
    label: string = 'base';
    static count: number = 0;
    sequence: ISequenceTree = {
        startingState: States.sitIdle,
        sequenceStates: [],
    };
    static possibleColors: PokemonColor[];
    currentState: IState;
    currentStateEnum: States;
    /** State to return to after current one completes. Used to temporarily override currentstate with another. */
    holdState: IState | undefined;
    holdStateEnum: States | undefined;
    protected el: HTMLImageElement;
    protected collision: HTMLDivElement;
    private speech: HTMLImageElement;
    private _left: number;
    private _bottom: number;
    pokemonRoot: string;
    _floor: number;
    _friend: IPokemonType | undefined;
    private _name: string;
    protected _speed: number;
    private _size: PokemonSize;
    private _generation: string;
    private _originalSpriteSize: number;
    needs: PokemonNeeds;
    progression: PokemonProgression = new PokemonProgression();

    private readonly HAPPINESS_PER_SWIPE = 10;

    constructor(
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
        this.el = spriteElement;
        this.collision = collisionElement;
        this.speech = speechElement;
        this.pokemonRoot = pokemonRoot;
        this._floor = floor;
        this._left = left;
        this._bottom = bottom;
        this._originalSpriteSize = originalSpriteSize;
        this.initSprite(size, left, bottom, originalSpriteSize);
        this.currentStateEnum = this.sequence.startingState;
        this.currentState = resolveState(this.currentStateEnum, this);
        this._speed = 1;

        this._name = name;
        this._size = size;
        this._generation = generation;

        this.needs = new PokemonNeeds();

        // Increment the static count of the Pokemon class that the constructor belongs to
        (this.constructor as any).count += 1;
    }

    initSprite(pokemonSize: PokemonSize, left: number, bottom: number, originalSpriteSize: number) {
        const spriteSize = this.calculateSpriteWidth(pokemonSize, originalSpriteSize);

        this.el.style.left = `${left}px`;
        this.el.style.bottom = `${bottom}px`;
        this.el.style.width = `${spriteSize}px`;
        this.el.style.height = `${spriteSize}px`;

        // Remove 'auto' since it gave issues with sizing
        this.el.style.maxWidth = 'none';
        this.el.style.maxHeight = 'none';

        this.collision.style.left = `${left}px`;
        this.collision.style.bottom = `${bottom}px`;
        this.collision.style.width = `${spriteSize}px`;
        this.collision.style.height = `${spriteSize}px`;

        this.speech.style.left = `${left}px`;
        this.speech.style.bottom = `${bottom + spriteSize}px`;
        this.hideSpeechBubble();
    }

    get left(): number {
        return this._left;
    }

    get bottom(): number {
        return this._bottom;
    }

    private repositionAccompanyingElements() {
        this.collision.style.left = `${this._left}px`;
        this.collision.style.bottom = `${this._bottom}px`;
        this.speech.style.left = `${this._left}px`;
        this.speech.style.bottom = `${this._bottom + this.calculateSpriteWidth(this._size, this._originalSpriteSize)
            }px`;
    }

    calculateSpriteWidth(size: PokemonSize, originalSpriteSize: number): number {
        switch (size) {
            case PokemonSize.nano:
                return originalSpriteSize;
            case PokemonSize.small:
                return originalSpriteSize * 1.5;
            case PokemonSize.medium:
                return originalSpriteSize * 2;
            case PokemonSize.large:
                return originalSpriteSize * 2.5;
            default:
                return originalSpriteSize;
        }
    }

    positionBottom(bottom: number): void {
        this._bottom = bottom;
        this.el.style.bottom = `${this._bottom}px`;
        this.repositionAccompanyingElements();
    }

    positionLeft(left: number): void {
        this._left = left;
        this.el.style.left = `${this._left}px`;
        this.repositionAccompanyingElements();
    }

    get width(): number {
        return this.el.width;
    }

    get floor(): number {
        return this._floor;
    }

    get hello(): string {
        // return the sound of the name of the animal
        return ` says hello 👋!`;
    }

    getState(): PokemonInstanceState {
        return { currentStateEnum: this.currentStateEnum };
    }

    get speed(): number {
        return this._speed;
    }

    get isMoving(): boolean {
        return this._speed !== PokemonSpeed.still;
    }

    recoverFriend(friend: IPokemonType) {
        // Recover friends..
        this._friend = friend;
    }

    recoverState(state: PokemonInstanceState) {
        // TODO : Resolve a bug where if it was swiping before, it would fail
        // because holdState is no longer valid.
        this.currentStateEnum = state.currentStateEnum ?? States.sitIdle;
        this.currentState = resolveState(this.currentStateEnum, this);

        if (!isStateAboveGround(this.currentStateEnum)) {
            // Reset the bottom of the sprite to the floor as the theme
            // has likely changed.
            this.positionBottom(this.floor);
        }
    }

    get canSwipe() {
        return !isStateAboveGround(this.currentStateEnum) && !this.isChasingEntity();
    }

    get canChase() {
        return !isStateAboveGround(this.currentStateEnum) && this.isMoving;
    }

    // TODO consolidate with showBubble()
    showSpeechBubble(duration: number = 3000, friend: boolean = false) {
        // Extract the media folder
        const segments = this.pokemonRoot.split('/');
        const basePath = segments.slice(0, segments.length - 3).join('/');

        if (friend) {
            this.speech.src = `${basePath}/heart.png`;
        } else {
            this.speech.src = `${basePath}/happy.png`;
        }

        this.speech.style.display = 'block';
        setTimeout(() => {
            this.hideSpeechBubble();
        }, duration);
    }

    showBubble(img: string, duration: number = 3000) {
        // Extract the media folder
        const segments = this.pokemonRoot.split('/');
        const basePath = segments.slice(0, segments.length - 3).join('/');
        this.speech.src = `${basePath}/${img}`;
        this.speech.style.display = 'block';
        setTimeout(() => {
            this.hideSpeechBubble();
        }, duration);
    }

    hideSpeechBubble() {
        this.speech.style.display = 'none';
    }

    swipe() {
        if (this.currentStateEnum === States.swipe) {
            return;
        }
        // Only restore state after swiping if not sleeping
        // ie. swipe will cause the pokemon to roll a new state after the swipe,
        // rather than returning to sleep
        if (this.currentStateEnum !== States.sleep) {
            this.holdState = this.currentState;
            this.holdStateEnum = this.currentStateEnum;
        }
        this.currentStateEnum = States.swipe;
        this.currentState = resolveState(this.currentStateEnum, this);
        this.showSpeechBubble();
        this.needs.addHappiness(this.HAPPINESS_PER_SWIPE);
    }

    chase(ball: PhysicsEntity, canvas: HTMLCanvasElement) {
        this.currentStateEnum = States.chase;
        this.currentState = new ChaseState(this, ball, canvas);
    }

    chaseEntity(entity: PhysicsEntity, canvas: HTMLCanvasElement, onCaughtCallback: ChaseEntityOnCaughtCallback | undefined) {
        this.currentStateEnum = States.chaseEntity;
        this.currentState = new ChaseEntityState(this, entity, canvas, onCaughtCallback);
    }

    faceLeft() {
        this.el.style.transform = 'scaleX(-1)';
    }

    faceRight() {
        this.el.style.transform = 'scaleX(1)';
    }

    setAnimation(face: string) {
        if (this.el.src.endsWith(`_${face}_8fps.gif`)) {
            return;
        }
        this.el.src = `${this.pokemonRoot}_${face}_8fps.gif`;
    }

    chooseNextState(fromState: States): States {
        // Work out next state
        var possibleNextStates: SequenceStateEntry[] | undefined = undefined;
        for (var i = 0; i < this.sequence.sequenceStates.length; i++) {
            if (this.sequence.sequenceStates[i].state === fromState) {
                possibleNextStates =
                    this.sequence.sequenceStates[i].possibleNextStates;
            }
        }
        if (!possibleNextStates) {
            throw new InvalidStateError(fromState, this.label);
        }
        // randomly choose the next state based on weight
        const nextState = getWeightedRandom(possibleNextStates);
        return nextState.state;
    }

    nextFrame() {
        if (
            this.currentState.horizontalDirection === HorizontalDirection.left
        ) {
            this.faceLeft();
        } else if (
            this.currentState.horizontalDirection === HorizontalDirection.right
        ) {
            this.faceRight();
        }
        this.setAnimation(this.currentState.spriteLabel);

        // What's my buddy doing?
        if (
            this.hasFriend &&
            this.currentStateEnum !== States.chaseFriend &&
            this.isMoving
        ) {
            if (
                this.friend?.isPlaying &&
                !isStateAboveGround(this.currentStateEnum)
            ) {
                this.currentState = resolveState(States.chaseFriend, this);
                this.currentStateEnum = States.chaseFriend;
                return;
            }
        }

        var frameResult = this.currentState.nextFrame();
        if (frameResult === FrameResult.stateComplete) {
            // If recovering from swipe..
            if (this.holdState && this.holdStateEnum) {
                this.currentState = this.holdState;
                this.currentStateEnum = this.holdStateEnum;
                this.holdState = undefined;
                this.holdStateEnum = undefined;
                return;
            }

            var nextState = this.chooseNextState(this.currentStateEnum);
            this.currentState = resolveState(nextState, this);
            this.currentStateEnum = nextState;
        } else if (frameResult === FrameResult.stateCancel) {
            if (this.currentStateEnum === States.chase) {
                var nextState = this.chooseNextState(States.idleWithBall);
                this.currentState = resolveState(nextState, this);
                this.currentStateEnum = nextState;
            } else if (this.currentStateEnum === States.chaseFriend) {
                var nextState = this.chooseNextState(States.idleWithBall);
                this.currentState = resolveState(nextState, this);
                this.currentStateEnum = nextState;
            }
        }
    }

    get hasFriend(): boolean {
        return this._friend !== undefined;
    }

    get friend(): IPokemonType | undefined {
        return this._friend;
    }

    get name(): string {
        return this._name;
    }

    makeFriendsWith(friend: IPokemonType): boolean {
        this._friend = friend;
        console.log(this.name, ": I'm now friends ❤️ with ", friend.name);
        return true;
    }

    get isPlaying(): boolean {
        return (
            this.isMoving &&
            (this.currentStateEnum === States.runRight ||
                this.currentStateEnum === States.runLeft)
        );
    }

    get emoji(): string {
        return '🐶';
    }

    isChasingEntity(): boolean {
        return this.currentStateEnum === States.chaseEntity;
    }

    update(): unknown {
        throw new Error('Method not implemented.');
    }

    likesBerry(_: any): unknown {
        throw new Error('Method not implemented.');
    }
}
