import { CountryBase } from "../ListCountriesModel";

export interface Subregion {
    _id: string,
    name: string,
    countries: CountryBase[]
}

export interface SubregionsData {
    Subregion: Subregion[]
}