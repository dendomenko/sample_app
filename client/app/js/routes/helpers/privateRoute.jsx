import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Session } from 'utils/Session';

/**
 * TODO: Needs to  do it more flexible
 */
const PrivateRoutes = function ( { redirectTo, children, } ) {

    const token = Session.getToken();

    if ( token === null ) {
        return (<Redirect to={redirectTo}/>);
    }
    else {
        return (
            <Route>
                {children}
            </Route>
        );
    }
};


export default PrivateRoutes;
