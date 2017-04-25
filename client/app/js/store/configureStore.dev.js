import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fromJS } from 'immutable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const devtools       = window.devToolsExtension || (() => ( noop ) => noop);

export default function configureStore( initialState = {}, history ) {
    const middlewares = [ sagaMiddleware, routerMiddleware( history ), thunk, createLogger(), ];

    const enhancers = [ applyMiddleware( ...middlewares ), devtools(), ];

    const store = createStore( rootReducer, fromJS( initialState ), compose( ...enhancers ) );

    store.runSaga = sagaMiddleware.run;

    return store;
}
