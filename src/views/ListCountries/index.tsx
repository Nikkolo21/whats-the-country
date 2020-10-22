import React from 'react';
import SearchBar from '../../components/SearchBar';
import CountriesFilters from '../../components/CountriesFilters';
import List from '../../components/ListCountries';
import ListCountriesFooter from '../../components/ListCountriesFooter';

export default function ListCountries () {
    return (
        <section className="p-5 lg:px-64">
            <SearchBar/>
            <CountriesFilters/>
            <List/>
            <ListCountriesFooter/>
        </section>
    )
}
