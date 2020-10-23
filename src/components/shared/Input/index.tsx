import React from 'react';

type InputProps = {
    placeholder: string,
    inputType: string,
    inputName: string,
    inputRef: any,
    defaultValue?: string
}

function Input({placeholder, inputType, inputName, inputRef, defaultValue}: InputProps) {
    return (
        <input
            defaultValue={defaultValue}
            className="block w-full bg-white text-gray-700 border rounded p-4 leading-tight focus:outline-none"
            placeholder={placeholder}
            type={inputType}
            name={inputName}
            ref={inputRef}
        />
    )
}

export default Input;