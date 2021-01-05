import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class ButtonComponent extends React.Component
{

    render()
    {
        return(
            <ColorContext.Consumer>
                {(color) =>{
                    return (
                        <button className={`ui button ${color}`}>
                            <LanguageContext.Consumer>
                                {(value) => value === 'english' ? 'Submit': 'Sanka suru'}
                            </LanguageContext.Consumer>
                        </button>
                    );
                }}
                
            </ColorContext.Consumer>
        );
    }
}

export default ButtonComponent;