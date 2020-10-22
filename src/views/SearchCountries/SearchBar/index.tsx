import React from 'react';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = (countryName: string) => {
        history.push(`/countries/${countryName}`); // to projects
    }

    return (
        <section className="flex py-5">
            <form onSubmit={handleSubmit((e) => onSubmit(e.countryName))} className="flex w-full w-full px-3 mb-6 md:mb-0">
                <Input inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country"></Input>
                <Button primary title="Search"/>
            </form>
        </section>
    )
}
