import { fork, call, put } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';
import Api from 'utils/Api';
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "./../../constants/user";

import {
    userLoginSuccess,
    userLoginFailure,
    registerUserFailure,
    registerUserSuccess
} from './../../actions/user';

/**
 *
 * @param name
 * @param email
 * @param pwd
 * @param confirm_pwd
 */
const registerRequest = ( { name, email, pwd, confirm_pwd } ) => Api.post( '/users', {
    "user": {
        "name"                 : name,
        "email"                : email,
        "password"             : pwd,
        "password_confirmation": confirm_pwd
    }
} );


/**
 *
 * @param email
 * @param pwd
 */
const loginRequest = ( { email, pwd } ) => Api.post( '/login', {
    'email'   : email,
    'password': pwd
} );

/**
 *
 * @param payload
 */
function* registerUser( { payload } ) {

    try {
        const response = yield call( registerRequest, payload );

        yield put( registerUserSuccess( response ) );

    }
    catch ( error ) {
        yield  put( registerUserFailure( error ) );
    }

    try {

        const response = yield call( loginRequest, payload );
        yield put( userLoginSuccess( response ) );
    }
    catch ( error ) {
        yield  put( userLoginFailure( error ) );
    }

}

/**
 *
 * @param payload
 */
function* authUser( { payload } ) {

    try {

        const response = yield call( loginRequest, payload );
        debugger;
        yield put( userLoginSuccess( response ) );
    }
    catch ( error ) {
        yield  put( userLoginFailure( error ) );
    }

}
/**
 *
 */
function* takeRequest() {
    yield takeLatest( REGISTER_USER, registerUser );
}
/**
 *
 */
function* takeLoginRequest() {
    yield takeLatest( USER_LOGIN, authUser );
}
/**
 *
 */
function* userSagas() {
    yield [
        fork( takeRequest ),
        fork( takeLoginRequest )
    ];
}
/**
 *
 */
export default userSagas;