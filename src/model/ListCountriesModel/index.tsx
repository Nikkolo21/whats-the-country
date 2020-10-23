import { Subregion } from "../RegionDropdownModel";

export interface CountryBase {
    _id: string,
    alpha2Code: string,
    name: string,
    nativeName: string,
    flag: Flag,
}

export interface Country extends CountryBase {
    capital: string,
    population: string,
    area: number,
    borders: CountryBase[],
    officialLanguages: Language[],
    timezones: Timezone[],
    subregion: Subregion
}


export interface Language {
    _id: string,
    name: string
}

export interface Timezone {
    _id: string,
    name: string
}

export interface Flag {
    _id: string,
    svgFile: string
}

export interface CountriesData {
    Country: Country[]
}