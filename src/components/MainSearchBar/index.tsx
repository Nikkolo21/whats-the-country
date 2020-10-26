import React from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import { useForm } from "react-hook-form";
import { useStore } from '../../store';

type MainSearchBarProps = {
    onClickFn?: Function
}

export default function MainSearchBar({onClickFn}: MainSearchBarProps) {
    const { register, handleSubmit } = useForm();
    const [inputSearch, setInputSearch, elemsPerPage, setPageSize] = useStore(state => [
        state.inputSearch,
        state.setInputSearch,
        state.elemsPerPage,
        state.setPageSize
    ]);

    const onSubmit = (inputSearch: string) => {
        setPageSize(elemsPerPage);
        setInputSearch(inputSearch);
        onClickFn && onClickFn();
    }

    return (
        <section className="p-8 sm:py-12 sm:px-12 lg:px-24 xl:px-64 bg-indigo-500">
            <form onSubmit={handleSubmit(e => onSubmit(e.countryName))} className="flex flex-col md:flex-row w-full w-full px-3 md:mb-0">
                <Input defaultValue={inputSearch} inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country by name or alphacode (Example: Peru, PE)"/>
                <Button title="Search"/>
            </form>
        </section>
    )
}
