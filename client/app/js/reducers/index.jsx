// import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import userReducer from './user';
import routeReducer from './routing';
import projectsReducer from './../views/Project/reducer';
import singleProjectReducer from './../views/SingleProject/reducer';
import memberReducer  from './members';

const rootReducer = combineReducers( {
    user    : userReducer,
    form    : formReducer,
    routing : routeReducer,
    projects: projectsReducer,
    single  : singleProjectReducer,
    members : memberReducer
} );

export default rootReducer;
