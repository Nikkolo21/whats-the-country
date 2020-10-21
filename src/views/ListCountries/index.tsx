import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_COUNTRY_INFO = gql`{
    Country {
        name,
        alpha2Code,
        officialLanguages {
            name
        },
        currencies {
            name
        },
        subregion {
            name,
            region {
                name
            }
        }
    }
}`

// type => properties
// interface => API

type ListCountriesProps = {
    id?: number
}

const ListCountries: React.FC<ListCountriesProps> = ({id} : ListCountriesProps) => {
    const { data, loading, error } = useQuery<object>(GET_COUNTRY_INFO);
    if (data) console.log(data);
    return (
        <section>
            { loading ? "...loading" : "lo que sea" }
            { error && error }
        </section>
    )
}

export default ListCountries;