import {routerReducer as routing, createReducer} from "react-router-redux";
import {combineReducers} from "redux";

const user = {
    status: 'none'
};
const rootReducer = combineReducers({user, routing});

export default rootReducer;
