/*
  eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
*/
/*
  As we are hot loading in routes when they are used, we have to require them inline.
*/

import React from 'react';
import {BrowserRouter, Match, Miss} from 'react-router';
import {Provider} from 'react-redux';
import App from '../containers/App';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';

const Routing = ({store}) => (
    <BrowserRouter>
        <Provider store={store}>
            <App>
                <NavigationBar/>

                <Footer/>
            </App>
        </Provider>
    </BrowserRouter>
);

export default Routing;