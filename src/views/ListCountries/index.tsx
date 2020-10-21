import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_COUNTRY_INFO = gql`{
    Country {
        name,
        alpha2Code,
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
}`

interface Country {
    alpha2Code: string,
    currencies: object[],
    name: string,
    officialLanguages: object[],
    subregion: object
}

interface CountriesData {
    Country: Country[]
}

type ListCountriesProps = {
    id?: number
}

function ListCountries({id}: ListCountriesProps) {
    const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRY_INFO);
    if (data) console.log(data);
    return (
        <section>
            { loading ? 
                (
                    <p>...loading</p>
                ) : (
                    <>
                    {
                        data && data.Country.map(elem => {
                            return <div>
                                <p>
                                    {elem.name}
                                </p>
                            </div>
                        })
                    }
                    </>
                )
            }
            { error && error }
        </section>
    )
}

export default ListCountries;