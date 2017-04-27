import React from 'react';
import { render } from 'react-dom';
import configureStore from "./store";
import Routing from './routes';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import {} from "react-router-redux";
import createBrowserHistory from 'history/createBrowserHistory';
import NavigationBar from './components/NavigationBar';
import sagas from './sagas/';

const renderToDomElement = document.getElementById( 'app' );

const store   = configureStore();
const history = createBrowserHistory();


store.runSaga( sagas );

render(
    <Routing history={history} store={store}/>, renderToDomElement );