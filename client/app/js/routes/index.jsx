/*
 eslint import/no-unresolved: 0, global-require: 0, import/no-extraneous-dependencies: 0
 */
/*
 As we are hot loading in routes when they are used, we have to require them inline.
 */

import React from 'react';
// import {BrowserRouter, Match, Miss} from 'react-router';
// import {Provider} from 'react-redux';
import App from '../containers/App';
import Layout from  "../components/Layout";

export default[
    {
        path      : "/",
        component :App,
        indexRoute: {
            component: App
        },
        // childRoutes : [
        //     {
        //         path      : "/:district",
        //         component : District
        //     }, {
        //         path      : "/:district/:directory",
        //         component : Directory
        //     }, {
        //         path      : "/southwest-dallas",
        //         component : Directory
        //     }, {
        //         path      : "/west-dallas",
        //         component : Directory
        //     }
        // ]
    }
];