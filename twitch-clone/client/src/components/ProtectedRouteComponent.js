import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRouteComponent = ({ component: Component, auth, ...rest }) => 
{
    if(auth !== null)
    {
        return (
            <Route {...rest} render={(props) => {
                return auth === true
                    ? <Component {...props} />
                    : <Redirect to='/' />
            }} />
        );
    }
    else
    {
        return null;
    }

};

export default ProtectedRouteComponent;