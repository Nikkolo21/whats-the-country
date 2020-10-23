export interface Currency {
    _id: string,
    name: string,
    code: string,
    symbol: string,
    countries: object
}

export interface CurrenciesData {
    Currency: Currency[]
}

export type CurrencyDropdownProps = {
    id?: number
}