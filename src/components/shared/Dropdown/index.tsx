import React from 'react';

type DropdownProps = {
    onChangeFn: (e: any) => void,
    loading?: boolean,
    selectedValue: string | number,
    title?: string,
    data: any[] | undefined,
    value: string
}

function Dropdown({onChangeFn, selectedValue, title, loading, data, value}: DropdownProps) {

    if (loading) return (
        <div className="inline-block w-full mb-2 md:mb-0 md:w-56 h-12 bg-gray-200 ml-2 rounded"></div>
    );

    return (
        <section className="inline-block text-indigo-500 text-center px-2 bg-white mx-2 rounded my-2 md:my-0">
            <select className="w-full h-16 md:h-12 text-indigo-500 bg-white px-2 py-2 rounded" value={selectedValue} onChange={(e) => onChangeFn(e.currentTarget.value)}>
                { title && <option value="">{title}</option> }
                { data && data.map((elem: any, index: number) => <option key={elem._id || index} value={elem[value]}>{elem[value]}</option>) }
            </select>
        </section>
    )
}

export default Dropdown;
