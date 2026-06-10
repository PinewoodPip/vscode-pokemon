import { create } from 'zustand';

interface LobbyState {
    visible: boolean;
    status: string;
    ip: string | undefined;
    port: number | undefined;
    show: (status: string, ip?: string, port?: number) => void;
    hide: () => void;
}

export const useLobbyStore = create<LobbyState>((set) => ({
    visible: false,
    status: '',
    ip: undefined,
    port: undefined,
    show: (status, ip, port) => set({ visible: true, status, ip, port }),
    hide: () => set({ visible: false, status: '', ip: undefined, port: undefined }),
}));
