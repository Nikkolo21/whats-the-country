import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REGION_INFO } from '../../../graphql';
import { RegionsData } from '../../../model/RegionDropdownModel';
import Dropdown from '../../shared/Dropdown';
import {useStore} from '../../../store';

function RegionDropdown() {
    const {loading, data} = useQuery<RegionsData>(GET_REGION_INFO);
    const [region, setRegion] = useStore(state => [state.region, state.setRegion]);

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