import {createStore, applyMiddleware, compose} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers";;

const configureStore = preloadedState => {
    const store = createStore(rootReducer, preloadedState, compose(composeWithDevTools(applyMiddleware(thunk, createLogger()))));
    return store;

};

export default configureStore;