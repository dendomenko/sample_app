import * as types from "./../../constants/user";

import api from 'utils/Api';

/**
 *
 */
export const registerUser = (payload) => ({type: types.REGISTER_USER, payload});

/**
 *
 */
export const registerUserSuccess = () => ({type: types.REGISTER_USER_SUCCESS});
/**
 *
 * @param error
 */
export const registerUserFailure = (error) => ({
    type: types.REGISTER_USER_FAILURE,
    payload: {
        error: new Error(error)
    }
});
/**
 *
 */
export const loginUser = (payload) => ({type: types.USER_LOGIN, payload});
/**
 *
 * @param payload
 */
export const userLoginSuccess = ({name, email, id, token}) => ({
    type: types.USER_LOGIN_SUCCESS,
    payload: {
        'name': name,
        'token': token,
        'uid': id,
        'isAuth': true
    }
});

/**
 *
 * @param error
 */
export const userLoginFailure = (error) => ({type: types.USER_LOGIN_FAILURE, payload: new Error(error)});

/**
 *
 */

export const userLogout = () => ({type: types.USER_LOGOUT});

/**
 *
 */
export const userLogoutSuccess = () => ({
    type: types.USER_LOGIN_SUCCESS,
    payload: {
        token: 'undefined'
    }
});

export const userLogoutFailure = (err) => ({type: types.USER_LOGIN_FAILURE, payload: new Error(err)});