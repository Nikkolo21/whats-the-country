import React from 'react';
import { CountryBase } from '../../model/ListCountriesModel';
import { useHistory } from 'react-router-dom';

export default function CountryCard({name, flag, nativeName, alpha2Code, _id}: CountryBase) {
    const history = useHistory();
    return (
        <div className="inline-block w-full lg:w-1/2 p-2">
            <div className="cursor-pointer flex bg-white my-2 p-10 rounded border-2 border-gray-100" onClick={() => history.push(`/countries/${alpha2Code}`)}>
                <img alt={`flag-${alpha2Code}`} className="w-8 h-6 mr-8" src={flag.svgFile}></img>
                <b className="text-lg">{name} [{nativeName}]</b>
            </div>
        </div>
    )
}
