import React from 'react';
import { Country } from '../../model/ListCountriesModel';

export default function CountryCard({name, flag, nativeName, currencies, alpha2Code, officialLanguages, subregion}: Country) {
    return (
        <div className="inline-block w-full lg:w-1/2 p-2">
            <div className="flex bg-white my-2 p-10 rounded">
                <img className="w-8 h-6 mr-8" src={flag.svgFile}></img>
                <b className="text-lg">{name} [{nativeName}]</b>
            </div>
        </div>
    )
}
