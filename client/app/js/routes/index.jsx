/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Home from 'containers/Home';
import StaticPage from 'containers/Static';
import NotFound from 'containers/NotFound';
import Layout from 'components/Layout';
import NavigationBar from 'containers/NavBar';
import Footer from 'components/Footer';
import Auth from 'containers/Auth';
import Dashboard from 'containers/Dashboard';
import Project from 'containers/Project';
import Profile from 'containers/Profile';
import PrivateRoute from './helpers/privateRoute';


const Routing = ( { store, history } ) => (
          <Provider store={store}>
              <ConnectedRouter history={history}>
                  <Layout>
                      <NavigationBar/>
                      <div>
                          <Switch>
                              <Route exact path="/" component={Home}/>
                              <Route exact path="/about" component={StaticPage}/>
                              <Route exact path="/help" component={StaticPage}/>
                              <Route exact path="/signin" component={Auth}/>
                              <Route exact path="/register" component={Auth}/>
                              <PrivateRoute redirectTo="/signin">
                                  <Switch>
                                      <Route exact path='/projects' component={Project}/>
                                      <Route exact path='/dashboard' component={Dashboard}/>
                                      <Route exact path='/userprofile' component={Profile}/>
                                  </Switch>
                              </PrivateRoute>
                              <Route path="*" component={NotFound}/>
                          </Switch>
                      </div>
                      <Footer/>
                  </Layout>
              </ConnectedRouter>
          </Provider>

      )
;

export default Routing;
