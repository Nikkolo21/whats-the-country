import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_INFO } from '../../graphql';
import { CountriesData } from '../../model/ListCountriesModel';
import { useStore } from '../../store';
import CountryCard from '../CountryCard';

function List() {
    const [getCountries, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_INFO);

    const [language, currency, region, inputSearch, pageOffset, pageSize]: any = useStore<any>(
        (state) => [
            state.language,
            state.currency,
            state.region,
            state.inputSearch,
            state.pageOffset,
            state.pageSize
        ]);

    useEffect(() => {
        getCountries({
            variables:
            {
                first: pageSize,
                offset: pageOffset,
                language,
                currency,
                name: inputSearch,
                region
                
            }
        });
    }, [language, currency, region, inputSearch, pageOffset, pageSize, getCountries])

    if (data) console.log(data);

    return (
        <section>
            {
                data && data.Country && data.Country.map(elem => <CountryCard
                    key={elem.alpha2Code}
                    name={elem.name}
                    currencies={elem.currencies}
                    alpha2Code={elem.alpha2Code}
                    officialLanguages={elem.officialLanguages}
                    subregion={elem.subregion}
                />)
            }
        </section>
    )
}

export default List;