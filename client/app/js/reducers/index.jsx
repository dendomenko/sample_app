import { routerReducer as routing, createReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';

const rootReducer = combineReducers(
    {
        user  : userReducer,
        form  : formReducer,
        router: routing
    } );

export default rootReducer;
