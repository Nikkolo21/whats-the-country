import React from 'react';

type CountryDetailsElementProps = {
    title: string,
    element: string | undefined
}

export default function CountryDetailsElement({title, element}: CountryDetailsElementProps) {
    return (
        <div className="flex text-base md:text-lg my-2">{title}: {element}</div>
    )
}
