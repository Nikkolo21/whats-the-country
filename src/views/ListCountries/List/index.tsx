import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_INFO } from '../../../graphql';
import { CountriesData } from '../../../model/ListCountriesModel';
import Dropdown from '../../shared/Dropdown';
import useMyStore from '../../../store';

function List() {
    const [pageSize, setPageSize] = useState<number>(20);
    const [pageOffset, setPageOffset] = useState<number>(0);
    const [language, setLanguage] = useState<string>("");
    const [currency, setCurrency] = useState<string>("");
    const [getCountries, {loading, data}] = useLazyQuery<CountriesData>(GET_COUNTRY_INFO);

    const storeSubscription = useMyStore.subscribe(state => {
        setLanguage(state.language);
        setCurrency(state.currency);
    });
    
    useEffect(() => {
        getCountries({variables: {first: pageSize, offset: pageOffset, language, currency}});
    }, [pageSize, pageOffset, language, currency, getCountries]);

    useEffect(() => {
        return () => {
            storeSubscription(); // unsuscribe
        }
    })

    if (data) console.log(data);

    return (
        <section className="lg:px-64 p-5">
            {
                data && data.Country && data.Country.map(elem => {
                    return <div key={elem.alpha2Code}>
                        <p>
                            {elem.name}
                        </p>
                    </div>
                })
            }
            
            <Dropdown
                selectedValue={pageSize}
                onChangeFn={(e: number) => {setPageSize(Number(e)); setPageOffset(0)}}
                loading={loading}
                data={[
                    {
                        _id: 1,
                        value: 10
                    },
                    {
                        _id: 2,
                        value: 20
                    },
                    {
                        _id: 3,
                        value: 30
                    },
                    {
                        _id: 4,
                        value: 50
                    },
                    {
                        _id: 5,
                        value: 100
                    },
                ]}
                value="value"
            />
        </section>
    )
}

export default List;