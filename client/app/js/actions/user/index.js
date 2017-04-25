import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
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
export const loginUser           = () => ({
    type: USER_LOGIN
});
/**
 *
 * @param payload
 */
export const userLoginSuccess    = ( payload ) => ({
    type: USER_LOGIN_SUCCESS,
    payload
});

/**
 *
 * @param error
 */
export const userLoginFailure = ( error ) => ({
    type   : USER_LOGIN_FAILURE,
    payload: error
});