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
    payload: new Error( error )
});
/**
 *
 */
export const loginUser           = ( payload ) => ({
    type: USER_LOGIN,
    payload
});
/**
 *
 * @param payload
 */
export const userLoginSuccess    = ( { name, email, id, token } ) => ({
    type   : USER_LOGIN_SUCCESS,
    payload: {
        'name'  : name,
        'token' : token,
        'uid'   : id,
        'isAuth': true
    }
})
;

/**
 *
 * @param error
 */
export const userLoginFailure = ( error ) => ({
    type   : USER_LOGIN_FAILURE,
    payload: new Error( error )
});

/**
 *
 */


