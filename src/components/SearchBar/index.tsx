import React, { useEffect, useState } from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
import useMyStore from '../../store';

export default function SearchBar() {
    const { register, handleSubmit } = useForm();
    const [ countryName, setCountryName ] = useState<string>("");
    const history = useHistory();
    const { search } = useParams<{search: string}>();

    const onSubmit = (countryName: string) => {
        useMyStore.setState({inputSearch: countryName});
        history.push(`/countries/${countryName}`);
    }

    const storeSubscription = useMyStore.subscribe(state => {setCountryName(state.inputSearch)});

    useEffect(() => {
        search && setCountryName(search);
    }, [search]);

    useEffect(() => {
        return () => {
            storeSubscription();
        }
    })

    return (
        <section className="flex py-5">
            <form onSubmit={handleSubmit((e) => onSubmit(e.countryName))} className="flex w-full w-full px-3 mb-6 md:mb-0">
                <Input defaultValue={countryName} inputRef={register()} inputName="countryName" inputType="text" placeholder="Search country"></Input>
                <Button primary title="Search"/>
            </form>
        </section>
    )
}
