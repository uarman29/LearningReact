import React, { useState } from 'react';

const SearchBarComponent = (props) =>{

    const [inputTerm, setInputTerm] = useState('');

    const onFormSubmit = (event) =>
    {
        event.preventDefault();
        props.onCallback(inputTerm);
    }

    return(
        <div className = "search-bar ui segment">
            <form className = "ui form" onSubmit={onFormSubmit}>
                <div className = "field">
                    <label>Video Search</label>
                    <input type="text" value={inputTerm} onChange={(e) => setInputTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBarComponent;