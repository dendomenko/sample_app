/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
/*
 As we are hot loading in routes when they are used, we have to require them inline.
 */

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import App from '../containers/App';
import StaticPage from '../containers/Static';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Auth from '../containers/Auth';
import PrivateRoute from './helpers/privateRoute';
const Routing = ({store}) => (
    <Router>
        <Provider store={store}>
            <Layout>
                <NavigationBar/>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/about" component={StaticPage}/>
                        <Route exact path="/help" component={StaticPage}/>
                        <PrivateRoute path="/protected" component={Auth}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Layout>
        </Provider>
    </Router>
);

export default Routing;
