import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

/**
 * TODO: Needs to  do it more flexible
 */
const PrivateRoutes = function ( { redirectTo, children, store, } ) {

    /**
     * TODO: should to review
     */
    let state   = store.getState().toJS();
    const token = state.user.token;

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
