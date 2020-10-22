import React from 'react';

type DropdownProps = {
    onChangeFn: any,
    loading: boolean,
    selectedValue: string | number,
    title?: string,
    data: any,
    value: string
}

function Dropdown({onChangeFn, selectedValue, title, loading, data, value}: DropdownProps) {

    if (loading) return (
        <div className="inline-block w-56 h-12 bg-gray-200 ml-2 rounded"></div>
    );

    return (
        <section className="inline-block text-gray-800 text-center px-2 bg-indigo-100 mx-2 rounded my-2 md:my-0">
            <select className="text-gray-800 bg-indigo-100 px-2 py-2 rounded" value={selectedValue} onChange={(e) => onChangeFn(e.target.value)}>
                { title && <option value="">{title}</option> }
                { data && data.map((elem: any, index: number) => <option key={elem._id || index} value={elem[value]}>{elem[value]}</option>) }
            </select>
        </section>
    )
}

export default Dropdown;
