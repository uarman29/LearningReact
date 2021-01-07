import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelectorComponent extends React.Component{
    static contextType = LanguageContext;

    render()
    {
        return(
            <div>
                Select a language: 
                <i className="flag us" onClick = {() => this.context.onLanguageChange('english')}/>
                <i className="flag jp" onClick = {() => this.context.onLanguageChange('japanese')}/>
            </div>
        );
    }
}

export default LanguageSelectorComponent;