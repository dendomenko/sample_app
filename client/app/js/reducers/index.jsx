// import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import routeReducer from './routing';
import projectsReducer from './project/all-projects';
import singleProjectReducer from './project/single';


const rootReducer = combineReducers( {
    user    : userReducer,
    form    : formReducer,
    routing : routeReducer,
    projects: projectsReducer,
    single  : singleProjectReducer
} );

export default rootReducer;
