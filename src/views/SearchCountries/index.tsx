import React from 'react';
import MainSearchBar from '../../components/MainSearchBar';
import { useHistory } from 'react-router-dom';

function SearchSection() {
    const history = useHistory();
    return (
        <section className="grid p-2 sm:p-0 min-h-screen">
            <div className="rounded w-5/6 xl:w-4/6 object-center place-self-center">
                <img role="presentation" alt="" className="object-contain" src="/landscape.png"></img>
                <MainSearchBar onClickFn={() => history.push("/countries")}/>
            </div>
        </section>
    )
}

export default SearchSection;