import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Map } from 'immutable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { Iterable } from 'immutable';
import rootReducer from "../reducers";
import { DockableSagaView, createSagaMonitor } from 'redux-saga-devtools';


const monitor        = createSagaMonitor();
const sagaMiddleware = createSagaMiddleware( { sagaMonitor: monitor } );
const devtools       = window.devToolsExtension || (() => ( noop ) => noop);


const logger = createLogger( {
    stateTransformer: ( state ) => {
        let newState = {};

        for ( let i of Object.keys( state ) ) {
            if ( Iterable.isIterable( state[ i ] ) ) {
                newState[ i ] = state[ i ].toJS();
            } else {
                newState[ i ] = state[ i ];
            }
        }
        ;

        return newState;
    }
} );

export default function configureStore( initialState = {}, history ) {
    const middlewares = [ sagaMiddleware, routerMiddleware( history ), thunk, logger ];

    const enhancers = [ applyMiddleware( ...middlewares ), devtools(), ];

    const store = createStore( rootReducer, Map( initialState ), compose( ...enhancers ) );

    store.runSaga = sagaMiddleware.run;

    return store;
}
