import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';

const GET_COUNTRY_INFO = gql`
    query($first: Int, $offset: Int) {
        Country(first: $first, offset: $offset) {
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
    }`;

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
    const [pageSize, setPageSize] = useState<number>(20);
    const [pageOffset, setPageOffset] = useState<number>(1);
    const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRY_INFO, {variables: {first: pageSize, offset: pageOffset}});

    if (data) console.log(data);
    return (
        <section>
            { loading ? 
                (
                    <p>...loading</p>
                ) : (
                    <>
                        {
                            data && data.Country && data.Country.map(elem => {
                                return <div key={elem.alpha2Code}>
                                    <p>
                                        {elem.name}
                                    </p>
                                </div>
                            })
                        }
                        <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                        </select>
                    </>
                )
            }
            { error && error }
        </section>
    )
}

export default ListCountries;