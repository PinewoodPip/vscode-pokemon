import * as vscode from 'vscode';
import { ALL_SCALES, ExtPosition, PokemonSize } from './types';
import { Theme, ALL_THEMES } from '../panel/themes';
import { DEFAULT_POKEMON_SCALE } from './persistence';
import { getDefaultPokemon } from './pokemon-data';

const DEFAULT_POSITION = ExtPosition.panel;
const DEFAULT_THEME = Theme.none;
export const DEFAULT_LEVEL = 5; // TODO move

export function getConfiguredSize(): PokemonSize {
    var size = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<PokemonSize>('pokemonSize', DEFAULT_POKEMON_SCALE);
    if (ALL_SCALES.lastIndexOf(size) === -1) {
        size = DEFAULT_POKEMON_SCALE;
    }
    return size;
}

export function getConfiguredTheme(): Theme {
    var themeID = vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<Theme>('theme', DEFAULT_THEME);
    // Reset to default theme if the setting was invalid
    if (!ALL_THEMES.find(t => t.id === themeID)) {
        themeID = DEFAULT_THEME;
    }
    return themeID;
}

export function getConfiguredThemeKind(): vscode.ColorThemeKind {
    return vscode.window.activeColorTheme.kind;
}

export function getConfigurationPosition() {
    return vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<ExtPosition>('position', DEFAULT_POSITION);
}

export function getThrowWithMouseConfiguration(): boolean {
    return vscode.workspace
        .getConfiguration('vscode-pokemon')
        .get<boolean>('throwBallWithMouse', true);
}