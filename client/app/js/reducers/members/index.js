import {
    FETCH_MEMBERS_AND_ROLES_FAILURE,
    FETCH_MEMBERS_AND_ROLES_SUCCESS
} from './../../constants/user';
import { fromJS } from 'immutable';


const initialState = fromJS( {
    list      : [],
    roles     : [],
    isFetching: false,
    error     : null
} );


const reducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {

        case  FETCH_MEMBERS_AND_ROLES_SUCCESS:
            return state.merge( payload );
        case FETCH_MEMBERS_AND_ROLES_FAILURE:
            return state.merge( payload );

//        case FETCH_USER_ROLES_SUCCESS:
//            return state.merge( payload );
//        case FETCH_USER_ROLES_FAILURE:
//            return state.merge( payload );
        default:
            return state;
    }
};


export default reducer;