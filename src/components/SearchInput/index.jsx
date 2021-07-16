import React, { useState } from 'react';

import './style.css';

import useDebounce from '../../utils/useDebounce';

const SearchInput = ({ value, onChange }) => {

    const [displayValue, setDisplayValue] = useState(value);

    const debouncedChange = useDebounce(onChange, 2000);

    function handleChange(event) {
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