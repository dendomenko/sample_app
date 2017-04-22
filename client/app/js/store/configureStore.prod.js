import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import multi from "redux-multi"; import api from "../middleware/api";
import rootReducer from "../reducers";

const configureStore = preloadedState => createStore(rootReducer, preloadedState, applyMiddleware(thunk, multi));

export default configureStore;