// import { PetSize } from '../common/types';
import { PokemonSize } from '../common/types';
import { IPokemonCollection } from './pokemon-collection';
import { PhysicsEntity, PhysicsEntityManager } from './entity';

function calculateBallRadius(size: PokemonSize): number {
    if (size === PokemonSize.nano) {
        return 6;
    } else if (size === PokemonSize.small) {
        return 8;
    } else if (size === PokemonSize.medium) {
        return 10;
    } else if (size === PokemonSize.large) {
        return 12;
    } else {
        return 4; // Shrug
    }
}

export class Pokeball extends PhysicsEntity {
    public material = {
        gravity: 0.6,
        damping: 0.9,
        traction: 0.8,
    };
    private pokemonSize: PokemonSize;
    public MAX_LIFETIME = 300;

    constructor(pokemonSize: PokemonSize, mediaPath: string, floor: number, initialX: number, initialY: number, initialVX: number, initialVY: number) {
        super(mediaPath, floor, initialX, initialY, initialVX, initialVY);
        this.pokemonSize = pokemonSize;
        this.setupSprite();
    }

    getRadius(): number {
        return calculateBallRadius(this.pokemonSize);
    }

    getSpritePath(): string {
        return this.mediaPath + '/pokeball.png';
    }
}

// Keep module-level variables for backward compatibility
var canvas: HTMLCanvasElement | null;
var entityManager: PhysicsEntityManager | null = null;
var floor: number;
var mediaPath: string;
var pokemonSize: PokemonSize;
var activePokeballs: Pokeball[] = [];

export function setupBallThrowing(
    pokemonSize_: PokemonSize,
    floor_: number,
    mediaPath_: string,
    entityManager_?: PhysicsEntityManager,
): void {
    canvas = document.getElementById("pokemonCanvas") as HTMLCanvasElement;
    pokemonSize = pokemonSize_;
    floor = floor_;
    mediaPath = mediaPath_;
    if (entityManager_) {
        entityManager = entityManager_;
    }
}

function throwBallWithManager(startX: number, startY: number, velocityX: number, velocityY: number, pokemon: IPokemonCollection, removeOldBalls: boolean = false): void {
    if (!entityManager) {
        return;
    }
    
    // Remove old balls if requested
    if (removeOldBalls) {
        activePokeballs.forEach(ball => ball.deactivate());
        activePokeballs = [];
    }
    
    const pokeball = new Pokeball(pokemonSize, mediaPath, floor, startX, startY, velocityX, velocityY);
    entityManager.addEntity(pokeball);
    activePokeballs.push(pokeball);
    
    // Clean up inactive pokeballs from the list
    activePokeballs = activePokeballs.filter(ball => ball.isActive());
    
    // Make pokemon chase the pokeball
    pokemon.pokemonCollection.forEach((pokeEl) => {
        if (pokeEl.pokemon.canChase && canvas) {
            pokeEl.pokemon.chase(pokeball, canvas);
        }
    });
}

export function dynamicThrowOn(pokemon: IPokemonCollection) {
    let startMouseX: number;
    let startMouseY: number;
    let endMouseX: number;
    let endMouseY: number;
    let previewPokeball: Pokeball | null = null;
    console.log('Enabling dynamic throw');
    window.onmousedown = (e) => {
        if (canvas) {
            canvas.style.display = 'block';
        }
        endMouseX = e.clientX;
        endMouseY = e.clientY;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        previewPokeball = new Pokeball(pokemonSize, mediaPath, floor, e.clientX, e.clientY, 0, 0);
        previewPokeball.state.paused = true;

        if (previewPokeball && canvas) {
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            previewPokeball.draw(ctx);
        }

        window.onmousemove = (ev) => {
            ev.preventDefault();
            startMouseX = endMouseX;
            startMouseY = endMouseY;
            endMouseX = ev.clientX;
            endMouseY = ev.clientY;
            previewPokeball = new Pokeball(pokemonSize, mediaPath, floor, ev.clientX, ev.clientY, 0, 0);
            previewPokeball.state.paused = true;
            if (previewPokeball && canvas) {
                const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
                // ctx.clearRect(0, 0, canvas.width, canvas.height);
                previewPokeball.draw(ctx);
            }
        };
        window.onmouseup = (ev) => {
            ev.preventDefault();
            window.onmouseup = null;
            window.onmousemove = null;

            throwBallWithManager(
                endMouseX,
                endMouseY,
                endMouseX - startMouseX,
                endMouseY - startMouseY,
                pokemon,
                true // Remove old balls when throwing a new one
            );
        };
    };
}

export function dynamicThrowOff() {
    console.log('Disabling dynamic throw');
    window.onmousedown = null;
}

export function throwAndChase(pets: IPokemonCollection) {
    throwBallWithManager(100, 100, 4, 5, pets);
}
