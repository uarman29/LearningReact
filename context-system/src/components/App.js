import React from 'react';
import UserCreateComponent from './UserCreateComponent';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component
{
    state = { language: 'english' };

    onLanguageChange = (language) =>{
        this.setState({ language: language });
    }

    render()
    {
        return( 
            <div className="ui container">
                <div>
                    Select a language: 
                    <i className="flag us" onClick = {() => this.onLanguageChange('english')}/>
                    <i className="flag jp" onClick = {() => this.onLanguageChange('japanese')}/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreateComponent />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        );
    }
    
};

export default App;