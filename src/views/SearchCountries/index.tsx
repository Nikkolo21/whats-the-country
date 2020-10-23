import React from 'react';
import SearchBar from '../../components/SearchBar';

function SearchSection() {
    return (
        <section className="grid p-8 sm:p-0 min-h-screen">
            <div className="rounded w-5/6 xl:w-4/6 object-center place-self-center">
                <img className="object-contain" src="/landscape.png"></img>
                <SearchBar/>
            </div>
        </section>
    )
}

export default SearchSection;