export interface Country {
    alpha2Code: string,
    currencies: object[],
    name: string,
    nativeName: string,
    officialLanguages: object[],
    subregion: object,
    flag: flag
}

interface flag {
    svgFile: string
}

export interface CountriesData {
    Country: Country[]
}

export type ListCountriesProps = {
    id?: number
}