import React from 'react';
import SearchBar from '../../components/SearchBar';
import ListCountriesFilters from '../../components/ListCountriesFilters';
import List from '../../components/ListCountries';
import ListCountriesFooter from '../../components/ListCountriesFooter';

export default function ListCountries () {
    return (
        <>
            <SearchBar/>
            <section className="p-5 lg:px-64">
                <ListCountriesFilters/>
                <List/>
                <ListCountriesFooter/>
            </section>
        </>
    )
}
