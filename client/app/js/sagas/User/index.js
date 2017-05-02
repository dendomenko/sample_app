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


const checkToken = () => Api.get( '/isAuth' ).then( res => {
    console.info( 'data', res );
    return res.data;
} );


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
        console.log( 'TOKEN', Session.getToken() );
        const response = yield call( checkToken );
        debugger;
        yield put( authSuccess( response ) );

        return true;


    } catch ( error ) {
        debugger;
        // yield put( authFailure( error ) );
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
        const isSuccsess = yield call( logout );

        if ( isSuccsess )
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
 * TODO: should rework
 */
function* takeReq() {
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
        fork( takeReq )
    ];
}
/**
 *
 */
export default rootUserSagas;
