import React from 'react';
import { render } from 'react-dom';
import configureStore from "./store";
import Routing from './routes';
import createBrowserHistory from 'history/createBrowserHistory';
import sagas from './sagas/';
import { checkAuth } from 'actions/user';


const renderToDomElement = document.getElementById( 'app' );

const history = createBrowserHistory();
const store   = configureStore( {}, history );

/**
 *
 */
store.runSaga( sagas );


if ( Session.getToken() !== null ) {
    store.dispatch( checkAuth() );
}


render(
    <Routing history={history} store={store}/>, renderToDomElement );