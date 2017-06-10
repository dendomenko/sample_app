import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import userReducer from './user';
import routeReducer from './routing';
import projectsReducer from './../views/Project/reducer';
import singleProjectReducer from './../views/SingleProject/reducer';
import memberReducer  from './members';
import metaReducer from './meta-data';
import taskReducer from './task';
import boardReducer from '../views/Board/reducer';


const rootReducer = combineReducers( {
    user    : userReducer,
    form    : formReducer,
    routing : routeReducer,
    projects: projectsReducer,
    single  : singleProjectReducer,
    members : memberReducer,
    meta    : metaReducer,
    tasks   : taskReducer,
    board   : boardReducer
} );

export default rootReducer;
