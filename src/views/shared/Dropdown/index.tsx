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

    if (loading) return <p>...loading</p>

    return (
        <section>
            <select value={selectedValue} onChange={(e) => onChangeFn(e.target.value)}>
                { title && <option value="">{title}</option> }
                { data && data.map((elem: any, index: number) => <option key={elem._id || index} value={elem[value]}>{elem[value]}</option>) }
            </select>
        </section>
    )
}

export default Dropdown;
