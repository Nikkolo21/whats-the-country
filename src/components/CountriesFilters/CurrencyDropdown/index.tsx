import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENCY_INFO } from '../../../graphql';
import { CurrenciesData } from '../../../model/CurrencyDropdownModel';
import Dropdown from '../../shared/Dropdown';
import {useStore} from '../../../store';

function CurrencyDropdown() {
    const {loading, data} = useQuery<CurrenciesData>(GET_CURRENCY_INFO);
    const [currency, setCurrency] = useStore(state => [state.currency, state.setCurrency]);

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