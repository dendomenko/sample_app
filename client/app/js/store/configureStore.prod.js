import {createStore, applyMiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => (noop) => noop); // eslint-disable-line


console.info('prod');
export default function configureStore(initialState = {}, history) {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools()
    ];

    const store = createStore(rootReducer, fromJS(initialState), compose(...enhancers));

    store.runSaga = sagaMiddleware.run;
    return store;
}