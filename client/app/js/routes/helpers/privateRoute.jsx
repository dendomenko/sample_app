import React from 'react';
import Project from 'containers/Project';
import { Route, Redirect, withRouter } from 'react-router-dom';

/**
 * TODO: Needs to  do it more flexible
 */
const PrivateRoutes = withRouter( function ( { history, children, store } ) {

        /**
         * TODO: should to review
         */
        let state   = store.getState().toJS();
        const token = state.user.token;

        if ( token === null ) {
            return (<Redirect to="/"/>);
        }
        else {
            return (
                <Route>
                    {children}
                </Route>
            );
        }
    }
);


export default PrivateRoutes;
