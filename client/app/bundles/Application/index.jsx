import ReactOnRails from 'react-on-rails';
import App from './startup/';
import NavigationBarApp from './startup/NavBarApp';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
    App,
    NavigationBarApp
});
