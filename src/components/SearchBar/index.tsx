import React from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import { useForm } from "react-hook-form";
import {useStore} from '../../store';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [inputSearch, setInputSearch, elemsPerPage, setPageSize] = useStore(state => [state.inputSearch, state.setInputSearch, state.elemsPerPage, state.setPageSize]);

    const onSubmit = (inputSearch: string) => {
        setPageSize(elemsPerPage);
        setInputSearch(inputSearch);
        history.push("/countries");
    }

    return (
        <section className="py-16 px-12 lg:px-24 xl:px-64 bg-indigo-500">
            <form onSubmit={handleSubmit((e) => onSubmit(e.countryName))} className="flex flex-col md:flex-row w-full w-full px-3 md:mb-0">
                <Input defaultValue={inputSearch} inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country"></Input>
                <Button title="Search"/>
            </form>
        </section>
    )
}
