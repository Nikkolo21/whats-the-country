import React from 'react';

import CurrencyDropdown from './CurrencyDropdown';
import LanguageDropdown from './LanguageDropdown';
import RegionDropdown from './RegionDropdown';

function SearchBar() {
    return (
        <section>
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <RegionDropdown/>
        </section>
    )
}

export default SearchBar;