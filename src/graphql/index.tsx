import { gql } from '@apollo/client';

export const GET_COUNTRY_INFO = gql`
    query($first: Int, $offset: Int, $language: String, $currency: String) {
        Country(orderBy: name_asc, first: $first, offset: $offset, filter: {
            officialLanguages_some: {
                name_starts_with: $language
            },
            currencies_some: {
                name_starts_with: $currency
            }
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
    {
        Currency(orderBy: name_asc) {
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
    {
        Language(orderBy: name_asc) {
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
