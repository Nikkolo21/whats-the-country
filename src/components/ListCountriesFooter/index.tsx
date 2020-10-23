import React from 'react';
import {useStore} from '../../store';

type ListCountriesFooterProps = {
    elems: number
}

export default function ListCountriesFooter({elems} : ListCountriesFooterProps) {
    const [pageSize, elemsPerPage, setPageSize] = useStore(state => [state.pageSize, state.elemsPerPage, state.setPageSize]);

    return (
        <footer className="text-center">
            {
                elems < pageSize ?
                    "No hay más elementos":
                    <button className="mt-3 text-indigo-500" onClick={() => setPageSize(Number(elemsPerPage + pageSize))}>Ver más </button>
            }
        </footer>
    )
}
