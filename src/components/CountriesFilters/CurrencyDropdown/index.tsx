import React, { useEffect } from 'react';
import { GET_CURRENCY_INFO } from '../../../graphql';
import { CurrenciesData } from '../../../model/CurrencyDropdownModel';
import Dropdown from '../../shared/Dropdown';
import {useStore} from '../../../store';
import { useLazyQuery } from '@apollo/react-hooks';

function CurrencyDropdown() {
    const [searchCurrencies, {loading, data}] = useLazyQuery<CurrenciesData>(GET_CURRENCY_INFO);
    const [inputSearch, currency, setCurrency] = useStore(state => [state.inputSearch, state.currency, state.setCurrency]);

    useEffect(() => {
        searchCurrencies({
            variables: {
                country: inputSearch
            }
        })
    }, [inputSearch])

    return (
        <Dropdown
            title="Any Currency"
            selectedValue={currency}
            onChangeFn={(e: string) => setCurrency(e)}
            loading={loading}
            data={data && data.Currency}
            value="name"
        />
    )
}

export default CurrencyDropdown;