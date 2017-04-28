/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from '../containers/App';
import StaticPage from '../containers/Static';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Auth from '../containers/Auth';
import Dashboard from '../containers/Dashboard';
import Project from '../containers/Project';
import PrivateRoute from './helpers/privateRoute';


const Routing = ( { store, history } ) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <NavigationBar/>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/about" component={StaticPage}/>
                        <Route exact path="/help" component={StaticPage}/>
                        <Route exact path="/signin" component={Auth}/>
                        <Route exact path="/register" component={Auth}/>
                        <Route exact path='/projects' component={Project}/>
                        <PrivateRoute path="/dashboard" component={Dashboard}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </Layout>
        </ConnectedRouter>
    </Provider>

);

export default Routing;
