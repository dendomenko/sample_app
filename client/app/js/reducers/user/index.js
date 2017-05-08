import { Map } from 'immutable';
import { Session } from 'utils/Session';
import * as types from "../../constants/user/index";

/**
 * TODO: 1)make it with immutable,
 * TODO: 2)ruduce function
 */

const initialState = {
    status: null,
    uid   : null,
    email : null,
    name  : null,
    error : null,
};

export default function userReducer( state = Map( initialState ), { type, payload } ) {

    switch ( type ) {


        case types.USER_AUTH:
            console.info( 'EEEDDDDDDD', payload );
            console.info( 'WWWWWWWWWWW', state.merge( payload ) );
            return state.merge( payload );


        case types.USER_FAILURE:
            return state.merge( payload );

        case types.REGISTER_USER_SUCCESS:
            return state.merge( payload );

        case types.REGISTER_USER_FAILURE:
            return state.merge( payload );

        case types.USER_LOGIN_SUCCESS:
            return state.merge( payload );

        case types.USER_LOGIN_FAILURE:
            return state.merge( payload );

        case types.USER_LOGOUT_SUCCESS:
            return state.merge( payload );

        case types.USER_LOGOUT_FAILURE:
            return state.merge( payload );

        default:
            return state;
    }

}