import React from 'react';
import SearchBar from '../../components/SearchBar';
import CountriesFilters from '../../components/CountriesFilters';
import List from '../../components/ListCountries';
import ListCountriesFooter from '../../components/ListCountriesFooter';

export default function ListCountries () {
    return (
        <>
            <SearchBar/>
            <section className="p-5 lg:px-64">
                <CountriesFilters/>
                <List/>
                <ListCountriesFooter/>
            </section>
        </>
    )
}
