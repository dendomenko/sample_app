import { take, call, put, fork, race, takeLatest } from 'redux-saga/effects';
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

/**
 *
 * @param token
 * @returns {boolean}
 */
function* checkAuth() {
    try {
        const response = yield call( apiUser.checkToken );

        yield put( authSuccess( response ) );
        return true;

    } catch ( error ) {

        Session.removeToken();
        yield put( notAuth() );
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
        yield put( registerUserFailure( error ) );
        yield put( push( '/' ) );
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
        const response = yield call( apiUser.login, payload );

        yield put( userLoginSuccess( response ) );
        Session.setToken( response.access_token );
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

    const response = yield call( Session.removeToken );

    return response;

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
        const isSuccess = yield call( logout );

        if ( isSuccess )
            yield put( push( '/' ) );
    }
}

/**
 *
 */
function* registerFlow() {
    while ( true ) {

        const request  = yield take( types.REGISTER_USER );
        const response = yield call( apiUser.register, request );


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
function* checkTokenFlow() {
    yield takeLatest( types.CHECK_AUTH, checkAuth );

}
/**
 *
 */
function * rootUserSagas() {
    yield[
        fork( loginFlow ),
        fork( logoutFlow ),
        fork( registerFlow ),
        fork( checkTokenFlow )
    ];
}
/**
 *
 */
export default rootUserSagas;
