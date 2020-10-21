import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';

import useMyStore from '../../../../store';

const GET_LANGUAGE_INFO = gql`
{
    Language(orderBy: name_asc) {
        _id
        iso639_1
        iso639_2
        name
        nativeName
        countries {
            name
        }
    }
}`;


interface Language {
    _id: string,
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
    countries: object
}

interface LanguagesData {
    Language: Language[]
}

type LanguageDropdownProps = {
    id?: number
}

function LanguageDropdown({id}: LanguageDropdownProps) {
    const {loading, data} = useQuery<LanguagesData>(GET_LANGUAGE_INFO);
    const [language, setLanguage] = useState<string>("");
    const storeSubscription = useMyStore.subscribe(state => {setLanguage(state.language)});

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    if (loading) return <p>...loading</p>

    return (
        <section>
            <select value={language} onChange={e => useMyStore.setState({language: e.target.value})}>
                <option value="">Select Language</option>
                {data && data.Language.map((elem: Language) => <option key={elem._id} value={elem.iso639_1}>{elem.name}</option>)}
            </select>
        </section>
    )
}

export default LanguageDropdown;