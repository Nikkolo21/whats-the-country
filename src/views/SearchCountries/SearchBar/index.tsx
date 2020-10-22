import React from 'react';
import Button from '../../shared/Button';
import Input from '../../shared/Input';
import { useForm } from "react-hook-form";

export default function SearchBar() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (elem: object) => {
        console.log(elem);
    }

    return (
        <section className="flex py-5">
            <form onSubmit={handleSubmit(onSubmit)} className="flex w-full w-full px-3 mb-6 md:mb-0">
                <Input inputRef={register()} inputName="name" inputType="text" placeholder="Search country"></Input>
                <Button primary title="Search"/>
            </form>
        </section>
    )
}
