// import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import routeReducer from './routing';
import projecstReducer from './project/all-projects';


const rootReducer = combineReducers( {
    user    : userReducer,
    form    : formReducer,
    routing : routeReducer,
    projects: projectReducer
} );

export default rootReducer;
