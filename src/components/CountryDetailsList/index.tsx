import React from 'react';

type CountryDetailsListProps = {
    title: string;
    elements: Array<any> | undefined
} 

export default function CountryDetailsList({title, elements}: CountryDetailsListProps) {
    return (
        <div className="flex flex-wrap text-base md:text-lg my-2">
            {title}: {
                elements && elements.map(
                    elem => <div key={elem._id} className="text-base rounded-lg mt-1 ml-2 bg-gray-400 px-2"> {elem.name} </div>
                )
            }
        </div>
    )
}
