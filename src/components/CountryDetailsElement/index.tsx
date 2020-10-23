import React from 'react';

export default function DisplayElements({title, element}: {title: string, element: string | undefined}) {
    return (
        <div className="flex text-base md:text-lg my-2">{title}: {element}</div>
    )
}
