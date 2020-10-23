import React from 'react';
import { useHistory } from 'react-router-dom';

export default function CountryDetailsBorders({title, elements}: {title: string, elements: Array<any> | undefined}) {
    const history = useHistory();
    return (
        <div className="flex flex-wrap text-base md:text-lg my-2">
            {title}: {
                elements && elements[0] ? elements.map(
                    elem => <img
                        key={elem._id}
                        alt={`flag-${elem.alpha2Code}`}
                        title={elem.name}
                        src={elem.flag.svgFile}
                        className="ml-3 mt-1 w-8 h-5 cursor-pointer rounded"
                        onClick={() => history.push(`/countries/${elem?.alpha2Code}`)}
                    />
                ): "None"
            }
        </div>
    )
}
