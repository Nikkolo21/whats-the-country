import React from 'react';

import SearchBar from './SearchBar';
import CurrencyDropdown from './CurrencyDropdown';
import LanguageDropdown from './LanguageDropdown';
import RegionDropdown from './RegionDropdown';

function SearchSection() {
    return (
        <section>
            <SearchBar/>
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <RegionDropdown/>
        </section>
    )
}

export default SearchSection;