import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import configureStore from '../store/';
import AppContainer from "../containers/AppContainer";
import routes from '../routes/';


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
/**
 * TODO: need to review
 */
export default (_props, railsContext) => {


    const store = configureStore(_props);

    console.log('dede');
    let error;
    let redirectLocation;
    let routeProps;
    const { location } = railsContext;

    // See https://github.com/reactjs/react-router/blob/master/docs/guides/ServerRendering.md
    console.log(match, 'ooop', routes);

    match({ routes, location }, (_error, _redirectLocation, _routeProps) => {
        error = _error;
        redirectLocation = _redirectLocation;
        routeProps = _routeProps;
    });

    // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
    // will handle the redirect. What's key is that we don't try to render.
    // Critical to return the Object properties to match this { error, redirectLocation }
    if (error || redirectLocation) {
        return { error, redirectLocation };
    }

    console.info('Routes', store, 'props', routeProps);

    // Important that you don't do this if you are redirecting or have an error.
    return (
        <Provider store={store}>
            <RouterContext {...routeProps} />
        </Provider>
    );

};
/*const App = (props, _railsContext) => (
    <Provider store={configureStore(props)}>
        <AppContainer />
    </Provider>
);*/


