import React from 'react';
import { Router, Route} from 'react-router-dom';

import StreamCreateComponent from './streams/StreamCreateComponent';
import StreamDeleteComponent from './streams/StreamDeleteComponent';
import StreamEditComponent from './streams/StreamEditComponent';
import StreamListComponent from './streams/StreamListComponent';
import StreamShowComponent from './streams/StreamShowComponent';
import HeaderComponent from './HeaderComponent';
import history from '../history';

const App = ()=>{
    return(
        <div className="ui container">
            <Router history={history}>
                <div>
                    <HeaderComponent />
                    <Route path="/" exact component={StreamListComponent}/>
                    <Route path="/streams/new" component={StreamCreateComponent}/>
                    <Route path="/streams/edit" component={StreamEditComponent}/>
                    <Route path="/streams/delete" component={StreamDeleteComponent}/>
                    <Route path="/streams/show" component={StreamShowComponent}/>
                </div>
            </Router>
        </div>
    );
};

export default App;