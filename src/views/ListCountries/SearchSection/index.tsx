import React from 'react';

import CurrencyDropdown from './CurrencyDropdown';
import LanguageDropdown from './LanguageDropdown';
import RegionDropdown from './RegionDropdown';

function SearchSection() {
    return (
        <section>
            <LanguageDropdown/>
            <CurrencyDropdown/>
            <RegionDropdown/>
        </section>
    )
}

export default SearchSection;