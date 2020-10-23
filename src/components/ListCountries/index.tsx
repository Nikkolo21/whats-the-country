import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_LIST } from '../../graphql';
import { CountriesData } from '../../model/ListCountriesModel';
import { useStore } from '../../store';
import ListCountriesCard from '../ListCountriesCard';

function List() {
    const [getCountries, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_LIST);

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

    if (loading) return <div className="w-full bg-gray-200 my-2 px-16 py-12 rounded"></div>

    return (
        <section>
            {
                data && data.Country && data.Country.map(elem =>
                    <ListCountriesCard
                        _id={elem._id}
                        key={elem.alpha2Code}
                        name={elem.name}
                        alpha2Code={elem.alpha2Code}
                        nativeName={elem.nativeName}
                        flag={elem.flag}
                    />
                )
            }
        </section>
    )
}

export default List;