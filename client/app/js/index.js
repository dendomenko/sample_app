import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './containers/App';
import configureStore from './store';
import Routing from './routes';
// import sagas from './sagas';
const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={App}/>

            </Route>
        </Router>
        <DevTools/>
    </div>
</Provider>, document.getElementById('app'));

const renderToDomElement = document.getElementById('app'); // eslint-disable-line
