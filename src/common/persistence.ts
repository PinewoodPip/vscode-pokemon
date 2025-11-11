import { randomName } from "./names";
import { getDefaultPokemon, POKEMON_DATA } from "./pokemon-data";
import { DEFAULT_LEVEL, getConfiguredSize } from "./settings";
import { ALL_COLORS, PokemonColor, PokemonProgression, PokemonSize, PokemonType } from "./types";
import * as vscode from 'vscode';
import { VscodeStateApi } from "./vscode-api";
import { PokemonPanelState } from "../panel/states";

export const DEFAULT_POKEMON_SCALE = PokemonSize.medium;
export const DEFAULT_COLOR = PokemonColor.default;
export const DEFAULT_POKEMON_TYPE = getDefaultPokemon();

export const EXTRA_POKEMON_KEY = 'vscode-pokemon.extra-pokemon';
const EXTRA_POKEMON_KEY_TYPES = EXTRA_POKEMON_KEY + '.types';
const EXTRA_POKEMON_KEY_COLORS = EXTRA_POKEMON_KEY + '.colors';
const EXTRA_POKEMON_KEY_NAMES = EXTRA_POKEMON_KEY + '.names';

export var pokemonCounter: number;

// TODO move to separate file
export async function storeCollectionAsMemento(
    context: vscode.ExtensionContext,
    collection: PokemonSpecification[],
) {
    var contextTypes = new Array(collection.length);
    var contextColors = new Array(collection.length);
    var contextNames = new Array(collection.length);
    for (let index = 0; index < collection.length; index++) {
        contextTypes[index] = collection[index].type;
        contextColors[index] = collection[index].color;
        contextNames[index] = collection[index].name;
    }
    await context.globalState.update(EXTRA_POKEMON_KEY_TYPES, contextTypes);
    await context.globalState.update(EXTRA_POKEMON_KEY_COLORS, contextColors);
    await context.globalState.update(EXTRA_POKEMON_KEY_NAMES, contextNames);
    context.globalState.setKeysForSync([
        EXTRA_POKEMON_KEY_TYPES,
        EXTRA_POKEMON_KEY_COLORS,
        EXTRA_POKEMON_KEY_NAMES,
    ]);
}

export class PokemonSpecification {
    color: PokemonColor;
    type: PokemonType;
    size: PokemonSize;
    name: string;
    generation: string;
    originalSpriteSize: number;

    constructor(color: PokemonColor, type: PokemonType, size: PokemonSize, name: string | undefined) {
        this.color = color;
        this.type = type;
        this.size = size;
        if (!name) {
            this.name = randomName(type);
        } else {
            this.name = name;
        }
        this.generation = `gen${POKEMON_DATA[type].generation}`;
        this.originalSpriteSize = POKEMON_DATA[type].originalSpriteSize || 32;
    }

    static fromConfiguration(): PokemonSpecification {
        var color = vscode.workspace
            .getConfiguration('vscode-pokemon')
            .get<PokemonColor>('pokemonColor', DEFAULT_COLOR);
        if (ALL_COLORS.lastIndexOf(color) === -1) {
            color = DEFAULT_COLOR;
        }
        var type = vscode.workspace
            .getConfiguration('vscode-pokemon')
            .get<PokemonType>('pokemonType', DEFAULT_POKEMON_TYPE);

        // Use POKEMON_DATA to validate the type
        if (!POKEMON_DATA[type]) {
            type = DEFAULT_POKEMON_TYPE;
        }

        return new PokemonSpecification(color, type, getConfiguredSize(), undefined);
    }

    static collectionFromMemento(
        context: vscode.ExtensionContext,
        size: PokemonSize,
    ): PokemonSpecification[] {
        var contextTypes = context.globalState.get<PokemonType[]>(
            EXTRA_POKEMON_KEY_TYPES,
            [],
        );
        var contextColors = context.globalState.get<PokemonColor[]>(
            EXTRA_POKEMON_KEY_COLORS,
            [],
        );
        var contextNames = context.globalState.get<string[]>(
            EXTRA_POKEMON_KEY_NAMES,
            [],
        );
        var result: PokemonSpecification[] = new Array();
        for (let index = 0; index < contextTypes.length; index++) {
            result.push(
                new PokemonSpecification(
                    contextColors?.[index] ?? DEFAULT_COLOR,
                    contextTypes[index],
                    size,
                    contextNames[index]
                ),
            );
        }
        return result;
    }
}