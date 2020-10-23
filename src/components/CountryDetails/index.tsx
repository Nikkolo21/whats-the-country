import React, { useEffect, useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { GET_COUNTRY_DETAILS } from '../../graphql';
import { CountriesData, Country } from '../../model/ListCountriesModel';
import CountryDetailsElement from '../CountryDetailsElement';
import CountryDetailsTitle from '../CountryDetailsTitle';
import CountryDetailsBorders from '../CountryDetailsBorders';
import CountryDetailsList from '../CountryDetailsList';

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

    return (
        <section className="grid p-8 sm:p-0 bg-indigo-400 min-h-screen">
            {
                loading || !country ?
                <div className="p-64 bg-gray-200 rounded w-64 sm:w-5/6 lg:w-4/6 xl:w-3/6 object-center place-self-center"/> :
                <div className="bg-white p-8 sm:p-12 md:p-20 rounded w-full sm:w-5/6 lg:w-4/6 xl:w-3/6 object-center place-self-center">
                    <CountryDetailsTitle title={country?.name}/>
                    <div className="flex flex-col">
                        <CountryDetailsElement title="Capital" element={country?.capital}/>
                        <CountryDetailsElement title="Subregion" element={country?.subregion.name}/>
                        <CountryDetailsElement title="Population" element={`${country?.population} people`}/>
                        <CountryDetailsElement title="Area" element={`${country?.area}KM`}/>
                        <CountryDetailsBorders title="Borders" elements={country?.borders}/>
                        <CountryDetailsList title="Languages" elements={country?.officialLanguages}/>
                        <CountryDetailsList title="Timezones" elements={country?.timezones}/>
                    </div>
                </div>
            }
        </section>
    )
}
