// import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import routeReducer from './routeReducer';


const rootReducer = combineReducers( {
    user   : userReducer,
    form   : formReducer,
    routing: routeReducer
} );

export default rootReducer;
