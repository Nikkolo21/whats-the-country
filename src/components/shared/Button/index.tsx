import React from 'react';

type ButtonProps = {
    title: string
}

function Button({title}: ButtonProps) {
    return (
        <button className="mt-4 h-12 md:mt-0 md:h-auto bg-blue-500 hover:bg-blue-600 text-white font-bold ml-2 px-6 md:px-12 rounded">
            {title}
        </button>
    )
}

export default Button;