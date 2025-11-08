import { IPokemonCollection } from './pokemon-collection';
import { ALL_FOOD, PokemonFoodConfig } from './food';

/// Bouncing ball components, credit https://stackoverflow.com/a/29982343
interface PhysicsEntityMaterial {
    gravity: number;
    damping: number;
    traction: number;
}
const defaultPhysicsMaterial: PhysicsEntityMaterial = {
    gravity: 0.6,
    damping: 0.9,
    traction: 0.8,
};
const interval: number = 1000 / 24; // msec for single frame

class PhysicsEntityState {
    cx: number;
    cy: number;
    vx: number;
    vy: number;
    paused: boolean;
    bounceCount: number = 0;

    constructor(cx: number, cy: number, vx: number, vy: number) {
        this.cx = cx;
        this.cy = cy;
        this.vx = vx;
        this.vy = vy;
        this.paused = false;
    }
}

export abstract class PhysicsEntity {
    protected MAX_LIFETIME = -1;

    public material: PhysicsEntityMaterial = defaultPhysicsMaterial;
    public state: PhysicsEntityState;
    private canvas: HTMLCanvasElement | null;
    private spriteReferenceElement: HTMLImageElement | undefined;
    private floor: number;
    protected mediaPath: string;
    private then: number = 0; // last draw
    protected active: boolean = true;
    protected lifetimeFrames: number = 0;

    constructor(mediaPath: string, floor: number, initialX: number, initialY: number, initialVX: number, initialVY: number) {
        this.state = new PhysicsEntityState(initialX, initialY, initialVX, initialVY);
        this.floor = floor;

        // Setup
        this.canvas = document.getElementById("pokemonCanvas") as HTMLCanvasElement;
        this.mediaPath = mediaPath;
    }

    setupSprite() {
        // Setup sprite image
        const radius = this.getRadius();
        const w = radius * 2;
        const h = radius * 2;
        this.spriteReferenceElement = document.createElement('img');
        this.spriteReferenceElement.width = w;
        this.spriteReferenceElement.height = h;
        this.spriteReferenceElement.src = this.getSpritePath();
    }

    abstract getRadius(): number;
    abstract getSpritePath(): string;

    isActive(): boolean {
        return this.active;
    }

    deactivate(): void {
        this.active = false;
    }

    getState(): PhysicsEntityState {
        return this.state;
    }

    reset(): void {
        if (this.state) {
            this.state.paused = true;
        }
        if (this.canvas) {
            this.canvas.style.display = 'block';
        }
        this.state = new PhysicsEntityState(100, 100, 4, 5);
    }

    tryUpdate() {
        if (!this.canvas || !this.active) {
            return;
        }

        if (!this.state.paused) {
            requestAnimationFrame(this.tryUpdate.bind(this));
        }

        // throttling the frame rate
        const now = Date.now();
        const elapsed = now - this.then;
        if (elapsed <= interval) {
            return;
        }
        this.then = now - (elapsed % interval);

        this.updatePhysics();
        this.update();
    }

    updatePhysics() {
        if (!this.canvas || !this.active) {
            return;
        }

        const ballRadius = this.getRadius();
        const material = this.material;
        if (this.state.cx + ballRadius >= this.canvas.width) {
            // Bounce from right wall
            this.state.vx = -this.state.vx * material.damping;
            this.state.cx = this.canvas.width - ballRadius;
            this.tryIncrementBounceCount();
        } else if (this.state.cx - ballRadius <= 0) {
            // Bounce from left wall
            this.state.vx = -this.state.vx * material.damping;
            this.state.cx = ballRadius;
            this.tryIncrementBounceCount();
        }
        if (this.state.cy + ballRadius + this.floor >= this.canvas.height) {
            // Bounce from ceiling
            this.state.vy = -this.state.vy * material.damping;
            this.state.cy = this.canvas.height - ballRadius - this.floor;
            // traction here
            this.state.vx *= material.traction;
            this.tryIncrementBounceCount();
            
            // Deactivate if velocity is too low
            // if (Math.abs(this.state.vx) < 0.5 && Math.abs(this.state.vy) < 0.5) {
            //     this.active = false;
            // }
        } else if (this.state.cy - ballRadius <= 0) {
            // Bounce from floor
            this.state.vy = -this.state.vy * material.damping;
            this.state.cy = ballRadius;
            this.tryIncrementBounceCount();
        }

        this.state.vy += material.gravity;

        this.state.cx += this.state.vx;
        this.state.cy += this.state.vy;
    }

    tryIncrementBounceCount() {
        if (Math.abs(this.state.vx) < 0.1 && Math.abs(this.state.vy) < 0.1) {
            this.state.bounceCount++;
        }
    }

    update() {
        if (!this.canvas || !this.active) {
            return;
        }
        const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.draw(ctx);

        // Update lifetime
        this.lifetimeFrames++;
        if (this.MAX_LIFETIME > 0 && this.lifetimeFrames >= this.MAX_LIFETIME) {
            this.deactivate();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.spriteReferenceElement) { return; }

        const w = this.getRadius() * 2;
        const h = this.getRadius() * 2;

        // Rotate ball based on velocity
        const angle = Math.atan2(this.state.vy, this.state.vx || 0.0001) + Math.PI * 1.5 + this.state.bounceCount * 0.5;

        // Draw ball
        ctx.save();
        ctx.translate(this.state.cx, this.state.cy);
        ctx.rotate(angle);
        ctx.drawImage(this.spriteReferenceElement, -w / 2, -h / 2, w, h);
        ctx.restore();
    }

}

export class PhysicsEntityManager {
    private entities: PhysicsEntity[] = [];
    private canvas: HTMLCanvasElement | null = null;
    private animationFrameId: number | null = null;
    private then: number = 0;

    constructor(canvas: HTMLCanvasElement | null) {
        this.canvas = canvas;
    }

    addEntity(entity: PhysicsEntity): void {
        this.entities.push(entity);
        
        // Start animation loop if not already running
        if (this.animationFrameId === null) {
            this.startAnimationLoop();
        }
    }

    private startAnimationLoop(): void {
        const loop = () => {
            this.update();
            
            // Continue loop if there are active entities
            if (this.entities.some(e => e.isActive())) {
                this.animationFrameId = requestAnimationFrame(loop);
            } else {
                this.animationFrameId = null;
            }
        };
        this.animationFrameId = requestAnimationFrame(loop);
    }

    update(): void {
        if (!this.canvas) {
            return;
        }

        // Throttle frame rate
        const now = Date.now();
        const elapsed = now - this.then;
        if (elapsed <= interval) {
            return;
        }
        this.then = now - (elapsed % interval);

        // Update physics for all entities
        for (const entity of this.entities) {
            if (entity.isActive()) {
                entity.updatePhysics();
            }
        }

        // Clear canvas and redraw all entities
        const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const entity of this.entities) {
            if (entity.isActive()) {
                entity.draw(ctx);
            }
        }

        // Remove inactive entities
        this.entities = this.entities.filter(e => e.isActive());
    }

    clear(): void {
        this.entities = [];
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        if (this.canvas) {
            const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

export class Berry extends PhysicsEntity {
    public material = {
        gravity: 1.0,
        damping: 0.4,
        traction: 0.8,
    };
    public foodConfig: PokemonFoodConfig;

    constructor(berryId: string, mediaPath: string, floor: number, initialX: number, initialY: number, initialVX: number, initialVY: number) {
        const foodConfig = ALL_FOOD.find(f => f.id === berryId);
        if (!foodConfig) {
            throw new Error(`Berry with id ${berryId} not found`);
        }
        super(mediaPath, floor, initialX, initialY, initialVX, initialVY);
        this.foodConfig = foodConfig;
        this.setupSprite();
    }

    getRadius(): number {
        return 16;
    }

    getSpritePath(): string {
        return this.mediaPath + this.foodConfig.spritePath;
    }
}
