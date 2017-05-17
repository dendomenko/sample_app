import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './../../constants/user';
import { Map, List } from 'immutable';


const initialState = Map( {
    list : List( [] ),
    error: null
} );


const reducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        case FETCH_USERS_SUCCESS:
            return state.merge( payload );
        case FETCH_USERS_FAILURE:
            return state.merge( payload );
        default:
            return state;
    }
};


export default reducer;