import React from 'react';

interface ButtonI {
    title: string,
    primary?: boolean
}

function Button({title, primary}: ButtonI) {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold ml-2 px-12 rounded">
            {title}
        </button>
    )
}

export default Button;