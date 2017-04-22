if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.dev.js");
} else {
    module.exports = require("./configureStore.prod.js");
}

// import {createDevTools} from 'redux-devtools'; import LogMonitor from
// 'redux-devtools-log-monitor'; import DockMonitor from
// 'redux-devtools-dock-monitor'; import {createStore, applyMiddleware, compose}
// from 'redux'; import {fromJS} from 'immutable'; import
// {syncHistoryWithStore, routerReducer, routerMiddleware} from
// 'react-router-redux'; import createSagaMiddleware from 'redux-saga'; import
// createReducer from '../reducers'; const sagaMiddleware =
// createSagaMiddleware();
/**
 *
 */
// conredux-devtools-extensionst DevTools = createDevTools(     <DockMonitor
// toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">         <LogMonitor
// theme="tomorrow" preserveScrollTop={false}/>     </DockMonitor> ); export
// default function configureStore(initialState = {}, history) { const
// middlewares = [sagaMiddleware, routerMiddleware(history)]; const enhancers =
// [ applyMiddleware(...middlewares), DevTools.instrument() ];
//
// const store = createStore(createReducer(), fromJS(initialState),
// compose(...enhancers)); store.runSaga = sagaMiddleware.run; if (module.hot) {
//     module         .hot         .accept('../reducers', () => { System .import
// ('../reducers') .then((reducerFunction) => { const createReducers =
// reducerFunction.default;                     const nextReducers =
// createReducers(); store.replaceReducer(nextReducers);     });        }); }
// return store; }