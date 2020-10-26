import { gql } from 'apollo-boost';

export const GET_COUNTRY_LIST = gql`query($first: Int, $language: String, $currency: String, $name: String, $nameCap: String, $region: String) {
        Country(orderBy: name_asc, first: $first, filter: {
            OR: [
                {
                    name_contains: $name
                },
                {
                    name_contains: $nameCap
                },
                {
                    alpha2Code_contains: $name
                },
                {
                    nativeName_contains: $name
                },
                {
                    nativeName_contains: $nameCap
                }

            ],
            officialLanguages_some: {
                name_starts_with: $language
            },
            currencies_some: {
                name_starts_with: $currency
            },
            subregion: {
                name_starts_with: $region
            }
        }) 
        {
            name
            nativeName
            flag {
                svgFile
            }
            alpha2Code
        }
    }`;


export const GET_COUNTRY_DETAILS = gql`
    query($alpha: String) {
        Country(alpha2Code: $alpha) {
            name
            alpha2Code
            nameTranslation
            area
            capital
            populationDensity
            location {
                longitude
                latitude
            }
            population
            borders {
                _id
                name
                alpha2Code
                flag {
                    svgFile
                }
            }
            timezones {
                _id
                name
                countries {
                    _id
                    name
                    alpha2Code
                }
            }
            flag {
                svgFile
            }
            officialLanguages {
                _id
                name
            }
            subregion {
                name
            }
        }
    }`;
    
export const GET_CURRENCY_INFO = gql`
    query($country: String, $language: String, $countryCap: String, $region: String) {
        Currency(orderBy: name_asc, filter: {
            countries_some: {
                OR: [
                    {
                        name_contains: $country
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        name_contains: $countryCap
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        nativeName_contains: $country
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        nativeName_contains: $countryCap
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        alpha2Code_contains: $country
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    }
                ]
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
    query($country: String, $currency: String, $countryCap: String, $region: String) {
        Language(orderBy: name_asc, filter: {
            countries_some: {
                OR: [
                    {
                        name_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        name_contains: $countryCap
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        nativeName_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        nativeName_contains: $countryCap
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    },
                    {
                        alpha2Code_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        subregion: {
                            name_starts_with: $region
                        }
                    }
                ]
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
    query($country: String, $currency: String, $countryCap: String, $language: String) {
        Subregion(orderBy: name_asc, filter: {
            countries_some: {
                OR: [
                    {
                        name_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                    },
                    {
                        name_contains: $countryCap
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                    },
                    {
                        nativeName_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                    },
                    {
                        nativeName_contains: $countryCap
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                    },
                    {
                        alpha2Code_contains: $country
                        currencies_some: {
                            name_starts_with: $currency
                        }
                        officialLanguages_some: {
                            name_starts_with: $language
                        }
                    }
                ]
            }
          }) {
            _id
            name
            countries {
                name
            }
        }
    }`;