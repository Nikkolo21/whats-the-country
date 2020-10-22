import { gql } from 'apollo-boost';

export const GET_COUNTRY_INFO = gql`
    query($first: Int, $offset: Int, $language: String, $currency: String, $name: String) {
        Country(orderBy: name_asc, first: $first, offset: $offset, filter: {
            name_contains: $name,
            officialLanguages_some: {
                name_starts_with: $language
            },
            currencies_some: {
                name_starts_with: $currency
            },
        }) 
        {
            name,
            alpha2Code,
            nameTranslation,
            officialLanguages {
                name
            },
            currencies {
                name
            },
            subregion {
                name,
                region {
                    name
                }
            }
        }
    }`;

    
export const GET_CURRENCY_INFO = gql`
    query($country: String) {
        Currency(orderBy: name_asc, filter: {
            countries_some: {
                name_contains: $country
            }
        }) {
            _id
            name
            code
            symbol
            countries {
                name
            }
        }
    }`;

export const GET_LANGUAGE_INFO = gql`
    query($country: String) {
        Language(orderBy: name_asc, filter: {
            countries_some: {
                name_contains: $country
            }
        }) {
            _id
            iso639_1
            iso639_2
            name
            nativeName
            countries {
                name
            }
        }

    }`;

export const GET_REGION_INFO = gql`
    query($country: String) {
        Region(orderBy: name_asc, filter: {
            countries_some: {
                name_contains: $country
            }
        }) {
            _id
            name
            subregions {
                name
                countries {
                    name
                }
            }
        }
    }`;