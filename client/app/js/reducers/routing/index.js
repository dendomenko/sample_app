import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux/reducer';


const initialState = {
    locationBeforeTransitions: null,
    current_location         : null
};

const routeReducer = ( state = Map( initialState ), { type, payload } ) => {

    if (type === LOCATION_CHANGE) {
        return state.merge( {
            current_location         : payload.pathname.substring( 1 ),
            last                     : payload.pathname.match( /([^\/]*)\/*$/ )[ 1 ],
            locationBeforeTransitions: payload
        } );
    }

    return state;
};

export default routeReducer;