export interface Language {
    _id: string,
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
    countries: object
}

export interface LanguagesData {
    Language: Language[]
}

export type LanguageDropdownProps = {
    id?: number
}