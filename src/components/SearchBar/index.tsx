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
        <section className="flex py-5">
            <form onSubmit={handleSubmit((e) => onSubmit(e.countryName))} className="flex w-full w-full px-3 mb-6 md:mb-0">
                <Input defaultValue={inputSearch} inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country"></Input>
                <Button primary title="Search"/>
            </form>
        </section>
    )
}
