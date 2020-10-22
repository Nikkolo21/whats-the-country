import React from 'react';
import List from './List';
import CountriesFilters from './CountriesFilters';

export default function ListCountries () {
    return (
        <section className="py-5 lg:px-64">
            <CountriesFilters/>
            <List/>
        </section>
    )
}
