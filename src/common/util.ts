
export interface IWeighted {
    weight: number;
}

export function getWeightedRandom<T>(items: (T & IWeighted)[]): T {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    const random = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (const entry of items) {
        cumulativeWeight += entry.weight;
        if (cumulativeWeight > random) {
            return entry;
        }
    }
    throw new Error('getWeightedRandom failed?');
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

/** Logs a message to the console, prefixed with the extension's name. */
export function log(msg: any) {
    console.log(`[vscode-pokemon] ${msg}`);
}

export function logError(msg: any) {
    console.error(`[vscode-pokemon] ${msg}`);
}

export function sanitizeName(name: string): string {
    return name.toLowerCase().replace(' ', '');
}