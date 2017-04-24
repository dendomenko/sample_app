import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "../constants/user";

/**
 * TODO: make it with immutable
 */



const initialState = {
    status: null,
    uid   : null,
    email : null,
    name  : null,
    fetch : false,
    error : null,
    token : null,
    isAuth: false
};

export default function userReducer( state = initialState, { type, payload } ) {

    switch ( type ) {

        case USER_AUTH:
            return {
                ...state,
                ...payload
            };

        case USER_NOT_AUTH:
            return {
                ...state,
                ...payload
            };

        case USER_REQUEST:
            return {
                ...initialState
            };

        case USER_FAILURE:
            return {
                ...state,
                ...payload
            };

        case USER_LOGOUT:
            return {
                ...state,
                ...payload
            };
        case REGISTER_USER:
            return {
                ...state,
                ...payload
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
    ;

}