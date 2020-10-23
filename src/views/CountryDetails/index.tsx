import React, { useEffect, useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { GET_COUNTRY_DETAILS } from '../../graphql';
import { CountriesData, Country } from '../../model/ListCountriesModel';

export default function CountryDetails() {
    const {alpha} : {alpha: string} = useParams();
    const [country, setCountry] = useState<Country>();
    const [getCountry, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_DETAILS);

    useEffect(() => {
        getCountry({
            variables: { alpha }
        });
    }, [alpha, getCountry])

    useEffect(() => {
        data && data.Country && data.Country[0] && setCountry(data.Country[0]); 
    }, [data])

    if (loading) return (<>...loading</>);

    return (
        <section className="p-8 sm:p-16 sm:py-12 md:p-32">
            <div className="bg-white py-8 px-20 rounded">
                <div className="title flex mb-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl">{country?.name}</h1>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl my-2">Capital: {country?.capital}</div>
                    <div className="text-xl my-2">Population: {country?.population} people</div>
                    <div className="text-xl my-2">Area: {country?.area}KM</div>
                </div>
            </div>
        </section>
    )
}
