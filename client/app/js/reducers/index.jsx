import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';


const initialState = {
    locationBeforeTransitions: null,
};

const routeReducer = ( state = Map( initialState ), { type, payload } ) => {
    if ( type === LOCATION_CHANGE ) {
        return state.merge( {
            locationBeforeTransitions: payload,
        } );
    }
    return state;
};


const rootReducer = combineReducers(
    {
        user  : userReducer,
        form  : formReducer,
        router: routeReducer
    } );

export default rootReducer;
