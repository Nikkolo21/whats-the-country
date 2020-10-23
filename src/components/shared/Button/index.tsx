import React from 'react';

interface ButtonI {
    title: string,
    primary?: boolean
}

function Button({title, primary}: ButtonI) {
    return (
        <button className="mt-4 h-12 md:mt-0 md:h-auto bg-blue-500 hover:bg-blue-600 text-white font-bold ml-2 px-6 md:px-12 rounded">
            {title}
        </button>
    )
}

export default Button;