// import { PetSize } from '../common/types';
import { PokemonSize } from '../common/types';
import { Pokemon } from './pokemon';
import { IPokemonCollection, PokemonCollection } from './pokemon-collection';
import { BallState } from './states';

/// Bouncing ball components, credit https://stackoverflow.com/a/29982343
const gravity: number = 0.6,
    damping: number = 0.9,
    traction: number = 0.8,
    interval: number = 1000 / 24; // msec for single frame
let then: number = 0; // last draw
var ballState: BallState;

var canvas: HTMLCanvasElement | null;
var pokeballSpriteReferenceElement: HTMLImageElement;
var ballRadius: number;
var floor: number;
var mediaPath: string;

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

export function setupBallThrowing(
    pokemonSize: PokemonSize,
    floor_: number,
    mediaPath_: string,
): void {
    canvas = document.getElementById("pokemonCanvas") as HTMLCanvasElement;
    ballRadius = calculateBallRadius(pokemonSize);
    floor = floor_;
    mediaPath = mediaPath_;

    // Setup pokeball image
    const w = ballRadius * 2;
    const h = ballRadius * 2;
    pokeballSpriteReferenceElement = document.createElement('img');
    pokeballSpriteReferenceElement.width = w;
    pokeballSpriteReferenceElement.height = h;
    pokeballSpriteReferenceElement.src = mediaPath + '/pokeball.png';
}

function resetBall(): void {
    if (ballState) {
        ballState.paused = true;
    }
    if (canvas) {
        canvas.style.display = 'block';
    }
    ballState = new BallState(100, 100, 4, 5);
}

export function dynamicThrowOn(pokemon: IPokemonCollection) {
    let startMouseX: number;
    let startMouseY: number;
    let endMouseX: number;
    let endMouseY: number;
    console.log('Enabling dynamic throw');
    window.onmousedown = (e) => {
        if (ballState) {
            ballState.paused = true;
        }
        if (canvas) {
            canvas.style.display = 'block';
        }
        endMouseX = e.clientX;
        endMouseY = e.clientY;
        startMouseX = e.clientX;
        startMouseY = e.clientY;
        ballState = new BallState(e.clientX, e.clientY, 0, 0);

        pokemon.pokemonCollection.forEach((pokeEl) => {
            if (pokeEl.pokemon.canChase && canvas) {
                pokeEl.pokemon.chase(ballState, canvas);
            }
        });
        ballState.paused = true;

        drawBall();

        window.onmousemove = (ev) => {
            ev.preventDefault();
            if (ballState) {
                ballState.paused = true;
            }
            startMouseX = endMouseX;
            startMouseY = endMouseY;
            endMouseX = ev.clientX;
            endMouseY = ev.clientY;
            ballState = new BallState(ev.clientX, ev.clientY, 0, 0);
            drawBall();
        };
        window.onmouseup = (ev) => {
            ev.preventDefault();
            window.onmouseup = null;
            window.onmousemove = null;

            ballState = new BallState(
                endMouseX,
                endMouseY,
                endMouseX - startMouseX,
                endMouseY - startMouseY,
            );
            pokemon.pokemonCollection.forEach((pokeEl) => {
                if (pokeEl.pokemon.canChase && canvas) {
                    pokeEl.pokemon.chase(ballState, canvas);
                }
            });
            throwBall();
        };
    };
}

export function dynamicThrowOff() {
    console.log('Disabling dynamic throw');
    window.onmousedown = null;
    if (ballState) {
        ballState.paused = true;
    }
    if (canvas) {
        canvas.style.display = 'none';
    }
}

export function throwBall() {
    if (!canvas) {
        return;
    }

    if (!ballState.paused) {
        requestAnimationFrame(throwBall);
    }

    // throttling the frame rate
    const now = Date.now();
    const elapsed = now - then;
    if (elapsed <= interval) {
        return;
    }
    then = now - (elapsed % interval);

    if (ballState.cx + ballRadius >= canvas.width) {
        // Bounce from right wall
        ballState.vx = -ballState.vx * damping;
        ballState.cx = canvas.width - ballRadius;
        ballState.bounceCount++;
    } else if (ballState.cx - ballRadius <= 0) {
        // Bounce from left wall
        ballState.vx = -ballState.vx * damping;
        ballState.cx = ballRadius;
        ballState.bounceCount++;
    }
    if (ballState.cy + ballRadius + floor >= canvas.height) {
        // Bounce from ceiling
        ballState.vy = -ballState.vy * damping;
        ballState.cy = canvas.height - ballRadius - floor;
        // traction here
        ballState.vx *= traction;
        ballState.bounceCount++;
    } else if (ballState.cy - ballRadius <= 0) {
        // Bounce from floor
        ballState.vy = -ballState.vy * damping;
        ballState.cy = ballRadius;
        ballState.bounceCount++;
    }

    ballState.vy += gravity;

    ballState.cx += ballState.vx;
    ballState.cy += ballState.vy;
    drawBall();
}

function drawBall() {
    if (!canvas) {
        return;
    }
    // Clear previous frame
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = ballRadius * 2;
    const h = ballRadius * 2;

    // Rotate ball based on velocity
    const angle = Math.atan2(ballState.vy, ballState.vx || 0.0001) + Math.PI * 1.5 + ballState.bounceCount * 0.5;

    // Draw ball
    ctx.save();
    ctx.translate(ballState.cx, ballState.cy);
    ctx.rotate(angle);
    ctx.drawImage(pokeballSpriteReferenceElement, -w / 2, -h / 2, w, h);
    ctx.restore();
}

export function throwAndChase(pets: IPokemonCollection) {
    resetBall();
    throwBall();
    pets.pokemonCollection.forEach((petEl) => {
        if (petEl.pokemon.canChase && canvas) {
            petEl.pokemon.chase(ballState, canvas);
        }
    });
}
