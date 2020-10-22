import React from 'react';

type InputType = {
    placeholder: string,
    inputType: string,
    inputName: string,
    inputRef: any
}

function Input({placeholder, inputType, inputName, inputRef}: InputType) {
    return (
        <input
            className="block w-full bg-white text-gray-700 border rounded p-4 leading-tight focus:outline-none"
            placeholder={placeholder}
            type={inputType}
            name={inputName}
            ref={inputRef}
        />
    )
}

export default Input;