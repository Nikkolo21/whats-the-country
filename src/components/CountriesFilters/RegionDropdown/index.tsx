import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REGION_INFO } from '../../../graphql';
import { RegionsData } from '../../../model/RegionDropdownModel';
import Dropdown from '../../shared/Dropdown';
import useMyStore from '../../../store';

function RegionDropdown() {
    const {loading, data} = useQuery<RegionsData>(GET_REGION_INFO);
    const [region, setRegion] = useState<string>("");
    const storeSubscription = useMyStore.subscribe(state => {setRegion(state.region)});

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    return (
        <Dropdown
            title="Any Region"
            selectedValue={region}
            onChangeFn={(e: string) => useMyStore.setState({region: e})}
            loading={loading}
            data={data && data.Region}
            value="name"
        />
    )
}

export default RegionDropdown;