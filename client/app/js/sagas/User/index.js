import { fork, call, put, } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import Api from 'utils/Api';
import * as types from './../../constants/user';

import {
    userLoginSuccess,
    userLoginFailure,
    registerUserFailure,
    registerUserSuccess,
    userLogoutSuccess,
    userLogoutFailure
} from './../../actions/user';

/**
 *
 */

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
} ).then( res => res.status ).catch( error => {
    throw error;
} );

/**
 *
 * @param email
 * @param pwd
 */
const loginRequest = ( { email, pwd } ) => Api
    .post( '/login', {
        'email'   : email,
        'password': pwd
    } )
    .then( res => res.data )
    .catch( error => {
        throw  error;
    } );


const logoutRequest = () => Api.get( '/logout' ).then( res => res.status ).catch( error => {
    throw error;
} );


/**
 *
 * @param payload
 */
function * registerUser( { payload } ) {

    try {
        const response = yield call( registerRequest, payload );

        yield put( registerUserSuccess() );

    } catch ( error ) {
        yield put( registerUserFailure( error ) );
    }

    try {

        const response = yield call( loginRequest, payload );

        yield put( userLoginSuccess( response ) );


    } catch ( error ) {
        yield put( userLoginFailure( error ) );
    }

}
/**
 *
 */
function * logoutUser() {
    try {

        const response = yield call( logoutRequest );

        yield put( userLogoutSuccess() );

    } catch ( error ) {
        yield put( userLogoutFailure( error ) );
    }
}

function * redirect() {
    const history = createHistory();
    yield put( history.push( '/projects' ) );
}


function * authUser( { payload } ) {

    try {

        const response = yield call( loginRequest, payload );
        yield put( userLoginSuccess( response ) );
    } catch ( error ) {
        yield put( userLoginFailure( error ) );
    }

}
/**
 *
 */
function * takeRequest() {
    yield takeLatest( types.REGISTER_USER, registerUser );
}
/**
 *
 */
function * takeLoginRequest() {
    yield takeLatest( types.USER_LOGIN, authUser );
}

function * takeLogoutRequest() {
    yield takeLatest( types.USER_LOGOUT, logoutUser );
}
/**
 *
 */
function* loginSuccessAuth() {

    yield take( types.USER_LOGIN_SUCCESS, redirect );
}
/**
 *
 */

function * userSagas() {
    yield[ fork( takeRequest ),
        fork( takeLoginRequest ),
        // fork( loginSuccessAuth ),
        fork( takeLogoutRequest ) ];
}
/**
 *
 */
export default userSagas;
