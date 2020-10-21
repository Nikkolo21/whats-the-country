import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REGION_INFO } from '../../../../graphql';
import { RegionsData, Region } from '../../../../model/RegionDropdownModel';
import useMyStore from '../../../../store';

function RegionDropdown() {
    const {loading, data} = useQuery<RegionsData>(GET_REGION_INFO);
    const [region, setRegion] = useState<string>("");
    const storeSubscription = useMyStore.subscribe(state => {setRegion(state.region)});

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    if (loading) return <p>...loading</p>

    return (
        <section>
            <select value={region} onChange={e => useMyStore.setState({region: e.target.value})}>
                <option value="">Select Region</option>
                {data && data.Region.map((elem: Region) => <option key={elem._id} value={elem.name}>{elem.name}</option>)}
            </select>
        </section>
    )
}

export default RegionDropdown;