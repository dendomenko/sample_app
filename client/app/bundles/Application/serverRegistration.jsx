import ReactOnRails from 'react-on-rails';
import App from './startup/';
import NavigationBarApp from './startup/NavBarApp';
import configureStore from './store/';
import React from "react";




ReactOnRails.register({
    App,
    NavigationBarApp
});

ReactOnRails.registerStore({
 configureStore
});