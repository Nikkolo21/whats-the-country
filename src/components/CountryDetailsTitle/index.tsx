import React from 'react';

type CountryDetailsTitle = {
    title: string | undefined
}

export default function CountryDetailsTitle({title}: CountryDetailsTitle) {
    return (
        <div className="title flex mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">{title}</h1>
        </div>
    )
}
