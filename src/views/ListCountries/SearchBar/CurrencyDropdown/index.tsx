import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';

import useMyStore from '../../../../store';

const GET_CURRENCY_INFO = gql`
{
    Currency(orderBy: name_asc) {
        _id
        name
        code
        symbol
        countries {
            name
        }
    }
  }`;

interface Currency {
    _id: string,
    name: string,
    code: string,
    symbol: string,
    countries: object
}

interface CurrenciesData {
    Currency: Currency[]
}

type CurrencyDropdownProps = {
    id?: number
}

function CurrencyDropdown({id}: CurrencyDropdownProps) {
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
        <section>
            <select value={currency} onChange={e => useMyStore.setState({currency: e.target.value})}>
                <option value="">Select Currency</option>
                {data && data.Currency.map((elem: Currency) => <option key={elem._id} value={elem.name}>{elem.name}</option>)}
            </select>
        </section>
    )
}

export default CurrencyDropdown;