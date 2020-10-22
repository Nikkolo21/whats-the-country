import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_REGION_INFO } from '../../../graphql';
import { RegionsData } from '../../../model/RegionDropdownModel';
import Dropdown from '../../shared/Dropdown';
import {useStore} from '../../../store';

function RegionDropdown() {
    const [searchRegions, {loading, data}] = useLazyQuery<RegionsData>(GET_REGION_INFO);
    const [inputSearch, region, setRegion] = useStore(state => [state.inputSearch, state.region, state.setRegion]);

    useEffect(() => {
        searchRegions({
            variables: {
                country: inputSearch
            }
        })
    }, [inputSearch])

    return (
        <Dropdown
            title="Any Region"
            selectedValue={region}
            onChangeFn={(e: string) => setRegion(e)}
            loading={loading}
            data={data && data.Region}
            value="name"
        />
    )
}

export default RegionDropdown;