import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "./../../constants/user";

import api from 'utils/Api';

/**
 *
 */
export const registerUser = ( payload ) => ({
    type: REGISTER_USER,
    payload
});

/**
 *
 */
export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS
});
/**
 *
 * @param error
 */
export const registerUserFailure = ( error ) => ({
    type   : REGISTER_USER_FAILURE,
    payload: error
});
/**
 *
 */
export const userAuth            = () => ({
    type: USER_REQUEST
});
/**
 *
 * @param payload
 */
export const userAuthSuccess     = ( payload ) => ({
    type: USER_AUTH,
    payload
});

/**
 *
 * @param error
 */
export const userAuthFailure = ( error ) => ({
    type   : USER_FAILURE,
    payload: error
});