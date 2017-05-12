import * as types from "constants/user";
import { Map } from 'immutable';

/**
 *
 */
export const checkAuth = () => ({ type: types.CHECK_AUTH });
/**
 *
 */
export const authSuccess = ( { name, email, id } ) => ({
    type   : types.USER_AUTH,
    payload: Map( {
        'name' : name,
        'uid'  : id,
        'email': email
    } )
});
/**
 *
 */
export const notAuth = () => ({
    type: types.USER_NOT_AUTH,
});


/**
 *
 */
export const registerUser = ( payload ) => ({
    type: types.REGISTER_USER,
    payload
});

/**
 *
 */
export const registerUserSuccess = () => ({ type: types.REGISTER_USER_SUCCESS });

/**
 *
 */
export const loginUser = ( payload ) => ({ type: types.USER_LOGIN, payload });
/**
 *
 * @param payload
 */


export const userLoginSuccess = ( { name, email, id, access_token } ) => ({
    type   : types.USER_LOGIN_SUCCESS,
    payload: Map( {
        'name' : name,
        'uid'  : id,
        'email': email,
        'token': access_token,
    } )
});

/**
 *
 */

export const userLogout = () => (
    {
        type   : types.USER_LOGOUT,
        payload: Map( {
            'name'  : null,
            'uid'   : null,
            'email' : null,
            'token' : null,
            'avatar': null
        } )
    });

/**
 *
 */
export const userLogoutSuccess = () => ({
    type   : types.USER_LOGOUT_SUCCESS,
    payload: Map( {
        uid         : null,
        name        : null,
        email       : null,
        access_token: null
    } )
});


/**
 *
 * @param paylaod
 */
export const updateUser = ( paylaod ) => ({
    type: types.USER_UPDATE,
    paylaod
});

/**
 *
 * @param payload
 */
export const updateUserSuccess = ( payload ) => ({
    types  : types.USER_UPDATE_SUCCESS,
    payload: Map( payload )
});
