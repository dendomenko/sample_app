/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import Home from './../views/Home';
import Project from './../views/Project';
import Dashboard from './../views/Dashboard';
import Profile from './../views/Profile';
import Sign from './../views/Sign';
import SingleProject from './../views/SingleProject';
import Board from  './../views/Board';
import StaticPage from './../views/Static';
import NotFound from './../views/NotFound';
import Layout from 'components/Layout';
import NavigationBar from 'containers/NavBar';
import Footer from 'components/Footer';

//import Home from 'containers/Home';
//import Auth from 'containers/Auth';
//import Dashboard from 'containers/Dashboard';
//import Projects from './../containers/Project/all';
//import SingleProject from './../containers/Project/single';
//import Profile from 'containers/Profile';


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
                              <Route exact path="/signin" component={Sign}/>
                              <Route exact path="/register" component={Sign}/>
                              <PrivateRoute redirectTo="/signin">
                                  <Switch>
                                      <Route exact path='/projects' component={Project}/>
                                      <Route exact path='/dashboard' component={Dashboard}/>
                                      <Route exact path='/userprofile' component={Profile}/>
                                      /**
                                       * Dynamic routes
                                       */
                                      <Route exact path='/projects/:projectname' component={SingleProject}/>
                                      <Route exact path='/projects/:projectname/board' component={Board}/>

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
