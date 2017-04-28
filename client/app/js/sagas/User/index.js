import { take, call, put, fork, race, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
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
} ).then( res => ({
    payload: res.data,
    status : res.status
}) ).catch( error => {
    throw error;
} );

/**
 *
 * @param token
 */
const setToken     = ( token ) => sessionStorage.setItem( 'jwtToken', token );
const clearToken   = () => sessionStorage.removeItem( 'jwtToken' );
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

function* register( { payload } ) {

    try {
        const response = call( registerRequest, payload );
        yield put( registerUserSuccess( response ) );

        return response;

    } catch ( error ) {
        yield put( registerUserFailure( error ) );
        return false;
    }

}

function* authorize( { payload } ) {

    try {
        const response = call( loginRequest, payload );

        yield put( userLoginSuccess( response ) );

        return true;
    }
    catch ( error ) {
        yield put( userLoginFailure( error ) );

        return false;
    }

}

function* logout() {

    try {
        const response = yield call( logoutRequest );

        yield put( userLogoutSuccess );

        return response;
    }
    catch ( error ) {

        yield put( userLogoutFailure( error ) );

        return error.message;
    }
}


/**
 *
 */
function* loginFlow() {

    while ( true ) {

        const request = yield take( types.USER_LOGIN );

        const winner = yield race( {
            auth  : call( authorize, request ),
            logout: take( types.USER_LOGOUT )
        } );

        if ( winner.auth ) {
            yield put( push( '/projects' ) );
        }


    }

}
/**
 *
 */
function* logoutFlow() {
    while ( true ) {

        yield take( types.USER_LOGOUT );
        yield call( logout );
        yield put( push( '/' ) );
    }
}


function* registerFlow() {
    while ( true ) {
        const request = yield take( types.REGISTER_USER );

        const response = yield call( register, request );


        if ( typeof response === 'object' ) {

            const isAuth = yield call( authorize, response );

            if ( isAuth ) {
                yield put( push( '/projects' ) );
            }

        }

    }

}


/**
 *
 */
function * rootUserSagas() {
    yield[
        fork( loginFlow ),
        fork( logoutFlow ),
        fork( registerFlow )
    ];
}
/**
 *
 */
export default rootUserSagas;
