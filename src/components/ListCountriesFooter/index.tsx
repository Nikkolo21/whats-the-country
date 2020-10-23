import React from 'react';
import Dropdown from '../../components/shared/Dropdown';
import elementsPerPage from '../ListCountries/elements-per-page';
import {useStore} from '../../store';

export default function ListCountriesFooter() {
    const [pageSize, setPageSize, setPageOffset] = useStore(state => [state.pageSize, state.setPageSize, state.setPageOffset]);

    return (
        <footer className="flex">
            <span className="mt-3">Elements: </span>
            <Dropdown
                selectedValue={pageSize}
                onChangeFn={(e: number) => {setPageSize(Number(e)); setPageOffset(0)}}
                loading={false}
                data={elementsPerPage}
                value="value"
            />
        </footer>
    )
}
