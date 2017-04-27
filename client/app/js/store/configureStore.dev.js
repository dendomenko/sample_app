import { createStore, applyMiddleware, compose } from "redux";
import { Map } from 'immutable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { Iterable } from 'immutable';
import rootReducer from "../reducers";
import  createHistory   from 'history/createBrowserHistory';
import { DockableSagaView, createSagaMonitor } from 'redux-saga-devtools';

const monitor        = createSagaMonitor();
const sagaMiddleware = createSagaMiddleware( { sagaMonitor: monitor } );
const devtools       = window.devToolsExtension || (() => ( noop ) => noop);
const browserHistory = createHistory();
const router         = routerMiddleware( browserHistory );
const logger         = createLogger( {
          stateTransformer: ( state ) => state.toJS()

      } )
;

const configureStore = preloadedState => {
    const middlewares = [ sagaMiddleware, router, logger ];

    const enhancers = [
        applyMiddleware( ...middlewares ),
        devtools()
    ];

    const store = createStore( rootReducer, Map( preloadedState ), compose( ...enhancers ) );

    store.runSaga = sagaMiddleware.run;

    return store;
};

export default configureStore;
