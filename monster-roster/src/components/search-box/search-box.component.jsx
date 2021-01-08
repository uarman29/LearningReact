import React from 'react';
import './search-box.style.css';

const SearchBox = ({placeholder, handleChange}) =>{
    return(
        <input 
            className = "search"
            type = "search" 
            placeholder = {placeholder}
            onChange = {(e) => handleChange(e)}
        />
    );
}

export default SearchBox;