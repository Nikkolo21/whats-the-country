import create, { GetState, SetState } from 'zustand';

export type MyState = {
    language: string;
    setLanguage: (language: string) => void
    currency: string;
    setCurrency: (currency: string) => void
    region: string;
    setRegion: (region: string) => void
    inputSearch: string;
    setInputSearch: (inputSearch: string) => void
    pageOffset: number;
    setPageOffset: (pageOffset: number) => void
    pageSize: number;
    setPageSize: (pageSize: number) => void
}

export const useStore = create<MyState>((set: SetState<MyState>, get: GetState<MyState>) => ({
    language: "",
    setLanguage: (language: string) => set({language}),
    currency: "",
    setCurrency: (currency: string) => set({currency}),
    region: "",
    setRegion: (region: string) => set({region}),
    inputSearch: "",
    setInputSearch: (inputSearch: string) => set({inputSearch}),
    pageOffset: 0,
    setPageOffset: (pageOffset: number) => set({pageOffset}),
    pageSize: 20,
    setPageSize: (pageSize: number) => set({pageSize}),
}));