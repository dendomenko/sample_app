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


export const authFailure = ( error ) => ({
    type   : types.AUTH_FAILURE,
    payload: Map( {
        error: new Error( error )
    } )
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
 * @param error
 */
export const registerUserFailure = ( error ) => ({
    type   : types.REGISTER_USER_FAILURE,
    payload: Map( {
        error: new Error( error )
    } )
});
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
        'token': access_token
    } )
});

/**
 *
 * @param error
 */
export const userLoginFailure = ( error ) => (
    {
        type   : types.USER_LOGIN_FAILURE,
        payload: Map( {
            error: new Error( error.statusText )
        } )
    });

/**
 *
 */

export const userLogout = () => (
    {
        type   : types.USER_LOGOUT,
        payload: Map( {
            'name' : null,
            'uid'  : null,
            'email': null,
            'token': null
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

export const userLogoutFailure = ( err ) => (
    {
        type   : types.USER_LOGIN_FAILURE,
        payload: Map( {
            error: new Error( err.statusText )
        } )
    });
