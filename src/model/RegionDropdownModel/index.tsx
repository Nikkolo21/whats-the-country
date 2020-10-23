export interface Subregion {
    _id: string,
    name: string,
    countries: object
}

export interface SubregionsData {
    Subregion: Subregion[]
}