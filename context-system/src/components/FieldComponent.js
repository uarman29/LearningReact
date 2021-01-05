import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class FieldComponent extends React.Component
{
    static contextType = LanguageContext;

    render()
    {
        const text = this.context === 'english' ? 'Name' : 'Namae';

        return(
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default FieldComponent;