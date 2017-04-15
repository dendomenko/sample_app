import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/';
import Test from '../components/Test';


export default (
    <Route path="/" component={Layout}>
        <IndexRoute
            component={Test}
        />
        <Route
            path="about"
            component={Test}
        />

        <Route
            path="about"
            component={Test}
        />

        <Route
            path="contact"
            component={Test}
        />
        <Route
            path="help"
            component={Test}
        />

    </Route>
);