import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_REGION_INFO } from '../../../graphql';
import { SubregionsData } from '../../../model/RegionDropdownModel';
import Dropdown from '../../shared/Dropdown';
import {useStore} from '../../../store';

function RegionDropdown() {
    const [searchRegions, {loading, data}] = useLazyQuery<SubregionsData>(GET_REGION_INFO);
    const [inputSearch, region, currency, language, setRegion] = useStore(state => [state.inputSearch, state.region, state.currency, state.language, state.setRegion]);

    useEffect(() => {
        searchRegions({
            variables: {
                country: inputSearch,
                currency,
                language
            }
        })
    }, [inputSearch, currency, language, searchRegions])

    return (
        <Dropdown
            title="Any Region"
            selectedValue={region}
            onChangeFn={(e: string) => setRegion(e)}
            loading={loading}
            data={data && data.Subregion}
            value="name"
        />
    )
}

export default RegionDropdown;