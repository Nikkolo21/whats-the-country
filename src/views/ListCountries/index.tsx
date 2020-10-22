import React from 'react';
import List from '../../components/ListCountries';
import CountriesFilters from '../../components/CountriesFilters';
import SearchBar from '../../components/SearchBar';

export default function ListCountries () {
    return (
        <section className="py-5 lg:px-64">
            <SearchBar/>
            <CountriesFilters/>
            <List/>
        </section>
    )
}
