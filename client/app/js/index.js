import React from "react";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
// import Root from "./containers/Root";
import configureStore from "./store";
import  Layout from './components/Layout';
import App from './containers/App';


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {Router, Route, IndexRoute} from 'react-router';
// import {createBrowserHistory} from 'history';
// import {syncHistoryWithStore} from 'react-router-redux';
// import App from './containers/App';
// import configureStore from './store';
// import Routing from './routes';
//
const store   = configureStore();
//
const history = syncHistoryWithStore( createBrowserHistory(), store );
//
render(
    <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={App}/>
                    <Route path="/help" component={App}/>
                </Route>
            </Router>
    </Provider>, document.getElementById( 'app' ) );
