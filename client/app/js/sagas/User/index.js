import { take, call, put, fork, race, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { apiUser } from 'api/User/';
import * as types from 'constants/user';
import { Session } from 'utils/Session';
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

        const token      = Session.getToken();
        const textStatus = call( apiUser.checkToken, token );

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
        const response = call( apiUser.register, payload );
        yield put( registerUserSuccess( response ) );

        return response;

    } catch ( error ) {
        yield put( registerUserFailure( error ) );
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
        const response = call( apiUser.login, payload );

        yield put( userLoginSuccess( response ) );


        Session.setToken( response.token );

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
