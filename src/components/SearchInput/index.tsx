import React, { useState } from 'react';

import './style.css';

import useDebounce from '../../utils/useDebounce';


interface IProps {
    value: string;
    onChange: any;
}

const SearchInput: React.FC<IProps> = ({value, onChange})  => {

    const [displayValue, setDisplayValue] = useState(value);

    const debouncedChange = useDebounce(onChange, 2000);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }


    return (
        <div className="header">
            <input 
                type="search" 
                value={displayValue} 
                onChange={handleChange} 
                placeholder="Pesquise aqui"/> 
        </div>
    );

}

export default SearchInput;