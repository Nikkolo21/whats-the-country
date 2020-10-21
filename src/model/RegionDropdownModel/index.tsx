export interface Region {
    _id: string,
    name: string,
    subregions: object
}

export interface RegionsData {
    Region: Region[]
}