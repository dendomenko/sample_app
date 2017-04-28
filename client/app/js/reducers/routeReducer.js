import { Map } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux/reducer';
const initialState = {
    locationBeforeTransitions: null,
    current_location         : null
};

/**
 *
 *  TODO: check @@INIT action
 */

const routeReducer    = ( state = Map( initialState ), { type, payload } ) => {


    if ( type === '@@INIT' ) {
        console.log( 'here', payload );
    }
    if ( type === LOCATION_CHANGE ) {
        return state.merge( {
            current_location         : payload.pathname.substring( 1 ),
            locationBeforeTransitions: payload
        } );
    }
    // if ( type == INIT ) {
    //     console.log( payload );
    //     return state.merge( { locationBeforeTransitions: payload } );
    // }
    return state;
};

export default routeReducer;