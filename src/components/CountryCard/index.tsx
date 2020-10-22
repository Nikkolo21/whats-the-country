import React from 'react';
import { Country } from '../../model/ListCountriesModel';

export default function CountryCard({name, currencies, alpha2Code, officialLanguages, subregion}: Country) {
    return (
        <div className="w-full bg-blue-100 my-2 px-16 py-12 rounded">
            <b className="text-lg">{name}</b>
        </div>
    )
}
