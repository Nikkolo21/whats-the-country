import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';

import useMyStore from '../../../store';

const GET_COUNTRY_INFO = gql`
    query($first: Int, $offset: Int, $language: String, $currency: String) {
        Country(orderBy: name_asc, first: $first, offset: $offset, filter: {
            officialLanguages_single: {
                iso639_1_starts_with: $language
            },
            currencies_single: {
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

function List({id}: ListCountriesProps) {
    const [pageSize, setPageSize] = useState<number>(20);
    const [pageOffset, setPageOffset] = useState<number>(0);
    const [language, setLanguage] = useState<string>("");
    const [currency, setCurrency] = useState<string>("");
    const [getCountries, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_INFO);

    const storeSubscription = useMyStore.subscribe(state => {
        setLanguage(state.language);
        setCurrency(state.currency);
    });
    
    useEffect(() => {
        getCountries({variables: {first: pageSize, offset: pageOffset, language, currency}});
    }, [pageSize, pageOffset, language, currency, getCountries]);

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    if (data) console.log(data);

    if (loading) return <p>...loading</p>

    return (
        <section>
            {
                data && data.Country && data.Country.map(elem => {
                    return <div key={elem.alpha2Code}>
                        <p>
                            {elem.name}
                        </p>
                    </div>
                })
            }
            <select value={pageSize} onChange={
                e => {
                    setPageSize(Number(e.target.value));
                    setPageOffset(0);
                }}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </section>
    )
}

export default List;