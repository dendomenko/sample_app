import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import userReducer from './user';
import routeReducer from './routing';
import projectsReducer from './../views/Project/reducer';
import singleProjectReducer from './../views/SingleProject/reducer';
import memberReducer  from './members';
import metaReducer from './meta-data';

const rootReducer = combineReducers( {
    user    : userReducer,
    form    : formReducer,
    routing : routeReducer,
    projects: projectsReducer,
    single  : singleProjectReducer,
    members : memberReducer,
    meta    : metaReducer
} );

export default rootReducer;
