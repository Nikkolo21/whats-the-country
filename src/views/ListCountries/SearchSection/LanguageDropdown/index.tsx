import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LANGUAGE_INFO } from '../../../../graphql';
import { LanguagesData, LanguageDropdownProps } from '../../../../model/LanguageDropdownModel';
import Dropdown from '../../../shared/Dropdown';
import useMyStore from '../../../../store';

function LanguageDropdown({id}: LanguageDropdownProps) {
    const {loading, data} = useQuery<LanguagesData>(GET_LANGUAGE_INFO);
    const [language, setLanguage] = useState<string>("");
    const storeSubscription = useMyStore.subscribe(state => {setLanguage(state.language)});

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    return (
        <Dropdown
            title="Select Language"
            selectedValue={language}
            onChangeFn={(e: string) => useMyStore.setState({language: e})}
            loading={loading}
            data={data && data.Language}
            value="name"
        />
    )
}

export default LanguageDropdown;