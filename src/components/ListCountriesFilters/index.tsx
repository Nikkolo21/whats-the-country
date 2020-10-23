import React from 'react';
import LanguageDropdown from './LanguageDropdown';
import CurrencyDropdown from './CurrencyDropdown';
import RegionDropdown from './RegionDropdown';

export default function CountriesFilters() {
    return (
        <section className="flex flex-col md:flex-row py-5">
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <RegionDropdown/>
        </section>
    )
}
