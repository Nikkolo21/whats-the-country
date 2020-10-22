import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LANGUAGE_INFO } from '../../../graphql';
import { LanguagesData } from '../../../model/LanguageDropdownModel';
import Dropdown from '../../shared/Dropdown';
import { useStore } from '../../../store';

function LanguageDropdown() {
    const {loading, data} = useQuery<LanguagesData>(GET_LANGUAGE_INFO);
    const [language, setLanguage] = useStore(state => [state.language, state.setLanguage]);

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