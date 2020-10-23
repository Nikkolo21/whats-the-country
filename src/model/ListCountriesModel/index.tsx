export interface Country {
    alpha2Code: string,
    name: string,
    nativeName: string,
    flag: flag,
    capital?: string,
    population?: string,
    area?: number,
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