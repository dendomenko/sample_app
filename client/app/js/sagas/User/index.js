import { take, call, put, fork, race, select, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiUser } from 'api/User/';
import * as types from 'constants/user';
import { Session } from 'utils/Session';
import Api from 'api';
import {
    userLoginSuccess,
    userLoginFailure,
    registerUserFailure,
    registerUserSuccess,
    userLogoutSuccess,
    userLogoutFailure,
    authSuccess,
    notAuth,
    authFailure
} from 'actions/user';


const loginRequest = ( { email, pwd } ) => Api
    .post( '/login', {
        'email': email,
        'password': pwd
    } )
    .then( res => {
        debugger;
        console.info( res );
        return res.data;
    } )
    .catch( error => {
        throw  error;
    } );


const checkToken = () => Api.get( '/users' ).then( res => {
    console.info( 'data', res );
    return res.statusText;
} )
    .catch( error => {throw error;} );


/**
 * TODO: check logout;
 */

/**
 *
 * @param token
 * @returns {boolean}
 */
function* checkAuth() {
    try {

        const token = Session.getToken();
        console.info( 'token', token );
        const textStatus = yield call( checkToken );

        console.log( textStatus );

        if ( textStatus === 'ok' ) {

            yield put( authSuccess() );

            return true;
        }
        else {
            Session.removeToken();
            yield put( notAuth() );
            return false;
        }

    } catch ( error ) {
        yield put( authFailure( error ) );
        return false;
    }

}

/**
 *
 * @param payload
 * @returns {*}
 */
function* register( { payload } ) {

    try {
        const response = yield call( apiUser.register, payload );
        yield put( registerUserSuccess( response ) );

        return response;

    } catch ( error ) {
        debugger;
        // yield put( registerUserFailure( error ) );
        return false;
    }

}
/**
 *
 * @param payload
 * @returns {boolean}
 */
function* authorize( { payload } ) {

    try {
        const response = yield call( loginRequest, payload );
        debugger;
        console.log( response );
        yield put( userLoginSuccess( response ) );


        Session.setToken( response.auth_token );

        return true;
    }
    catch ( error ) {
        yield put( userLoginFailure( error ) );

        return false;
    }

}
/**
 *
 * @returns {*}
 */
function* logout() {

    try {
        const response = yield call( apiUser.logout );

        yield put( userLogoutSuccess );
        Session.removeToken();
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
        debugger;
        const t = yield call( authorize, request );

        console.log( t );
        debugger;
        // const winner = yield race( {
        //     auth  : call( authorize, request ),
        //     // logout: take( types.USER_LOGOUT )
        // } );
        //
        // if ( winner.auth ) {
        //
        //     yield put( push( '/projects' ) );
        // }


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

/**
 *
 */
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


function* takeReq() {
    yield takeLatest( 'CHECK_AUTH', checkAuth );

}
/**
 *
 */
function * rootUserSagas() {
    yield[
        fork( loginFlow ),
        fork( logoutFlow ),
        fork( registerFlow ),
        fork( takeReq )
    ];
}
/**
 *
 */
export default rootUserSagas;
