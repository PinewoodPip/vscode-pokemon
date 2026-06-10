import { VscodeStateApi } from '../common/vscode-api';

let _api: VscodeStateApi | undefined;

export function initVscodeApi(api: VscodeStateApi): void {
    _api = api;
}

export function getVscodeApi(): VscodeStateApi {
    if (!_api) { throw new Error('VS Code API not initialized'); }
    return _api;
}
