import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {browserHistory} from 'react-router';
import configureStore from "./store";
import Routing from './routes';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

const renderToDomElement = document.getElementById('app');

const store = configureStore({}, browserHistory);

render(
    <Routing store={store}/>, renderToDomElement);