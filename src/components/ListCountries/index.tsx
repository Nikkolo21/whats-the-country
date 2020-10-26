import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_LIST } from '../../graphql';
import { CountriesData } from '../../model/ListCountriesModel';
import { useStore } from '../../store';
import ListCountriesCard from '../ListCountriesCard';
import ListCountriesFooter from '../ListCountriesFooter';
import ListCountriesFilters from '../ListCountriesFilters';

function List() {
    const [getCountries, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_LIST);

    const [language, currency, region, inputSearch, pageSize]: any = useStore<any>(
        (state) => [
            state.language,
            state.currency,
            state.region,
            state.inputSearch,
            state.pageSize
        ]);

    useEffect(() => {
        getCountries({
            variables:
            {
                first: pageSize,
                language,
                currency,
                name: inputSearch,
                nameCap: `${inputSearch && inputSearch[0].toUpperCase()}${inputSearch.slice(1)}`,
                region
                
            }
        });
    }, [language, currency, region, inputSearch, pageSize, getCountries])

    if (loading) return <div className="w-full bg-gray-200 my-2 px-16 py-12 rounded"></div>

    return (
        <section className="p-4 sm:p-12 xl:px-64">
            {
                data && data.Country && data.Country[0] ? 
                <>
                    <ListCountriesFilters/>
                    {data.Country.map(elem =>
                        <ListCountriesCard
                            _id={elem._id}
                            key={elem.alpha2Code}
                            name={elem.name}
                            alpha2Code={elem.alpha2Code}
                            nativeName={elem.nativeName}
                            flag={elem.flag}
                        />
                    )}
                    <ListCountriesFooter elems={data.Country.length}/>
                </>:
                "There is not match :("
            }
        </section>
    )
}

export default List;