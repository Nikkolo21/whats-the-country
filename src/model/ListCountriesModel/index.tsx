export interface Country {
    alpha2Code: string,
    currencies: object[],
    name: string,
    officialLanguages: object[],
    subregion: object
}

export interface CountriesData {
    Country: Country[]
}

export type ListCountriesProps = {
    id?: number
}