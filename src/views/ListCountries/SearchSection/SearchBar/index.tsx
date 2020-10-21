import React from 'react';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';

export default function SearchBar() {
    return (
        <form>
            <label>
                Name:
                <Input/>
            </label>
            <Button/>
        </form>
    )
}
