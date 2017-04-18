import ReactOnRails from 'react-on-rails';
import App from './startup/';
import NavigationBarApp from './startup/NavBarApp';
import configureStore from './store/';

console.log('dasda');

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});




ReactOnRails.register({
    App,
    NavigationBarApp
});

ReactOnRails.registerStore({
 configureStore
});