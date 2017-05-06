import React from 'react';
import { Provider } from 'react-redux';
// import routes from "../routes";
import {Router, Route, IndexRoute} from 'react-router';


import  App from "../App";
// import App from '../containers/App';
import Layout from  "../../components/Layout";

const routes = [
    {
        path      : "/",
        component :App,
        indexRoute: {
            component: App
        },
    }
];


const Root = ( { store, history } ) => (  <Provider store={store}>
    <Router history={history} routes={routes}/>
</Provider>);

export default Root;