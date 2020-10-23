import React, { useEffect } from 'react';
import { GET_LANGUAGE_INFO } from '../../../graphql';
import { LanguagesData } from '../../../model/LanguageDropdownModel';
import { useStore } from '../../../store';
import Dropdown from '../../shared/Dropdown';
import { useLazyQuery } from '@apollo/react-hooks';

function LanguageDropdown() {
    const [searchLanguages, {loading, data}] = useLazyQuery<LanguagesData>(GET_LANGUAGE_INFO);
    const [inputSearch, currency, region, language, setLanguage] = useStore(state => [state.inputSearch, state.currency, state.region, state.language, state.setLanguage]);

    useEffect(() => {
        searchLanguages({
            variables: {
                country: inputSearch,
                currency,
                region
            }
        })
    }, [inputSearch, currency, region, searchLanguages])

    return (
        <Dropdown
            title="Any Language"
            selectedValue={language}
            onChangeFn={(e: string) => setLanguage(e)}
            loading={loading}
            data={data && data.Language}
            value="name"
        />
    )
}

export default LanguageDropdown;