import { routerReducer as routing, createReducer } from "react-router-redux";
import { combineReducers } from 'redux';
import userReducer from './userReducer';


const rootReducer = combineReducers(
    {
        userReducer,
        routing
    });

export default rootReducer;
