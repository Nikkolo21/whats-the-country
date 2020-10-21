import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENCY_INFO } from '../../../../graphql';
import { CurrenciesData } from '../../../../model/CurrencyDropdownModel';
import Dropdown from '../../../shared/Dropdown';
import useMyStore from '../../../../store';

function CurrencyDropdown() {
    const {loading, data} = useQuery<CurrenciesData>(GET_CURRENCY_INFO);
    const [currency, setCurrency] = useState<string>("");

    const storeSubscription = useMyStore.subscribe(state => {setCurrency(state.currency)});

    useEffect(() => {
        return () => {
            storeSubscription();
        }
    })

    if (loading) return <p>...loading</p>

    return (
        <Dropdown
            title="Select Currency"
            selectedValue={currency}
            onChangeFn={(e: string) => useMyStore.setState({currency: e})}
            loading={loading}
            data={data && data.Currency}
            value="name"
        />
    )
}

export default CurrencyDropdown;