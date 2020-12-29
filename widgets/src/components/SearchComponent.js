import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchComponent = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    // The useEffect hook runs the function in its first arguement based on the second
    // argument: 
    // Nothing = initial render and every rerender
    // [] = initial render only
    // Array with terms = initial render and rerender if value inside array changes
    // We cannot make the useEffect callback async so we make another function
    // inside the callback async and then call that instead
    useEffect(() => {
        
        const search = async () =>{
            const response = await axios.get("https://en.wikipedia.org/w/api.php", {
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(response.data.query.search);
        };
        
        const timeoutId = setTimeout(() =>{
            if(term)
                search();
        }, 500);

        // Function returned is used for cleanup so it is run right before
        // the next call to useEffect so every time other than the initial render
        return () =>{
            clearTimeout(timeoutId);
        };

    }, [term]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className = "item">
                <div className="content">
                    <div className="header">
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>{result.title}</a>
                    </div>
                        {result.snippet}
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} type="text" onChange = {(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}
export default SearchComponent;