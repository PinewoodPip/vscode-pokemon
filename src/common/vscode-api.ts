import { PokemonPanelState } from "../panel/states";
import { WebviewMessage } from "./types";

export interface VscodeStateApi {
    getState(): PokemonPanelState | undefined; // API is actually Any, but we want it to be typed.
    setState(state: PokemonPanelState): void;
    postMessage(message: WebviewMessage): void;
}