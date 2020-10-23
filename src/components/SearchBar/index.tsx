import React from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import { useForm } from "react-hook-form";
import {useStore} from '../../store';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [inputSearch, setInputSearch] = useStore(state => [state.inputSearch, state.setInputSearch]);

    const onSubmit = (inputSearch: string) => {
        history.push("/countries");
        setInputSearch(inputSearch);
    }

    return (
        <section className="flex py-16 px-12 lg:px-24 xl:px-64 bg-indigo-500">
            <form onSubmit={handleSubmit((e) => onSubmit(e.countryName))} className="flex w-full w-full px-3 md:mb-0">
                <Input defaultValue={inputSearch} inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country"></Input>
                <Button primary title="Search"/>
            </form>
        </section>
    )
}
