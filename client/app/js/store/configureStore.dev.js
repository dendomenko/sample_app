import { createStore, applyMiddleware, compose } from "redux";
import { Map } from 'immutable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers";
import { DockableSagaView, createSagaMonitor } from 'redux-saga-devtools';

const monitor        = createSagaMonitor();
const sagaMiddleware = createSagaMiddleware( { sagaMonitor: monitor } );
const devtools       = window.devToolsExtension || (() => ( noop ) => noop);

const logger = createLogger( {
    stateTransformer: ( state ) => state.toJS(),
    predicate       : ( getState, action ) => !action.type.includes( '@@redux-form/' )

} );

const configureStore = ( preloadedState, history ) => {
    const middlewares = [ sagaMiddleware, routerMiddleware( history ), logger ];

    const enhancers = [
        applyMiddleware( ...middlewares ),
        devtools()
    ];

    const store = createStore( rootReducer, Map( preloadedState ), compose( ...enhancers ) );

    store.runSaga = sagaMiddleware.run;

    return store;
};

export default configureStore;
