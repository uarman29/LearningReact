import React from 'react';
import UserCreateComponent from './UserCreateComponent';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelectorComponent from './LanguageSelectorComponent';

class App extends React.Component
{
    render()
    {
        return( 
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelectorComponent/>
                    <ColorContext.Provider value="red">
                        <UserCreateComponent />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
    
};

export default App;