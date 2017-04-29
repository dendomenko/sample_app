import * as types from "constants/user";


/**
 *
 */
export const checkAuth   = () => ({ type: types.CHECK_AUTH });
/**
 *
 */
export const authSuccess = () => ({ type: types.USER_AUTH });
/**
 *
 */
export const notAuth     = () => ({
    type   : types.USER_NOT_AUTH,
    payload: {
        token: null
    }
});


export const authFailure               = ( error ) => ({
    type   : types.AUTH_FAILURE,
    paylaod: {
        error: new Error( error )
    }
});
/**
 *
 */
             export const registerUser = ( payload ) => ({ type: types.REGISTER_USER, payload });

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
    payload: {
        error: new Error( error )
    }
});
/**
 *
 */
export const loginUser           = ( payload ) => ({ type: types.USER_LOGIN, payload });
/**
 *
 * @param payload
 */


export const userLoginSuccess    = ( { name, email, id, token } ) => ({
    type   : types.USER_LOGIN_SUCCESS,
    payload: {
        'name' : name,
        'token': token,
        'uid'  : id
    }
});

/**
 *
 * @param error
 */
export const userLoginFailure = ( error ) => (
    {
        type   : types.USER_LOGIN_FAILURE,
        payload: {
            error: new Error( error.statusText )
        }
    });

/**
 *
 */

export const userLogout = () => ({ type: types.USER_LOGOUT });

/**
 *
 */
export const userLogoutSuccess = () => ({
    type   : types.USER_LOGOUT_SUCCESS,
    payload: {
        token: 'undefined',
        uid  : null,
        name : null
    }
});

export const userLogoutFailure = ( err ) => (
    {
        type   : types.USER_LOGIN_FAILURE,
        payload: {
            error: new Error( err.statusText )
        }
    });
