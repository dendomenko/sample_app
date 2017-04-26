import { Map } from 'immutable';

import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
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
    isAuth: false,
};

export default function userReducer( state = Map( initialState ), { type, payload } ) {

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
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                ...payload
            };

        case USER_LOGIN:
            return {
                ...state,
                ...payload
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                ...payload
            };

        case USER_LOGIN_FAILURE:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }


}