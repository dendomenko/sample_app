import React from 'react';
import { render } from 'react-dom';
import configureStore from "./store";
import Routing from './routes';
import Layout from './components/Layout';
import createBrowserHistory from 'history/createBrowserHistory';
import NavigationBar from './components/NavigationBar';
import sagas from './sagas/';
import { checkAuth } from 'actions/user';
import { Session } from 'utils/Session';

const renderToDomElement = document.getElementById( 'app' );

const history = createBrowserHistory();
const store   = configureStore( {}, history );

/**
 *
 */
store.runSaga( sagas );
/**
 * check jwt
 */


if ( Session.getToken() !== null ) {
    store.dispatch( checkAuth() );
}


render(
    <Routing history={history} store={store}/>, renderToDomElement );