import React from 'react';
import SongListComponent from './SongListComponent';
import SongDetailComponent from './SongDetailComponent';

const App = () =>{
    return(
        <div className="ui container grid">
            <div className ="ui row">
                <div className="column eight wide">
                    <SongListComponent />
                </div>
                <div className="column eight wide">
                    <SongDetailComponent />
                </div>
            </div>
        </div>
    );
};

export default App;