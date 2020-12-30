import React, { useState } from 'react';
import DropdownComponent from './DropdownComponent';
import ConvertComponent from './ConvertComponent';

const TranslateComponent = () =>{

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ];

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    
    return(
        <div>
            <div className = "ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value = {text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <DropdownComponent 
                label="Select a language"
                selected = {language}
                onSelectedChange = {setLanguage}
                options={options}
            />
            <hr />
            <h3 className = "ui header">Output</h3>
            <ConvertComponent text={text} language={language} />
        </div>
    );
};

export default TranslateComponent;