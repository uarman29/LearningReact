import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import StreamCreateComponent from './streams/StreamCreateComponent';
import StreamDeleteComponent from './streams/StreamDeleteComponent';
import StreamEditComponent from './streams/StreamEditComponent';
import StreamListComponent from './streams/StreamListComponent';
import StreamShowComponent from './streams/StreamShowComponent';
import HeaderComponent from './HeaderComponent';
import history from '../history';
import ProtectedRouteComponent from './ProtectedRouteComponent';

const App = (props)=>
{
    return(
        <div className="ui container">
            <Router history={history}>
                <div>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={StreamListComponent}/>
                        <ProtectedRouteComponent path="/streams/new" component={StreamCreateComponent} auth={props.isSignedIn}/>
                        <ProtectedRouteComponent path="/streams/edit/:id" component={StreamEditComponent} auth={props.isSignedIn}/>
                        <ProtectedRouteComponent path="/streams/delete/:id" component={StreamDeleteComponent} auth={props.isSignedIn}/>
                        <Route path="/streams/show/:id" component={StreamShowComponent}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {isSignedIn: state.auth.isSignedIn};
}
export default connect(mapStateToProps)(App);