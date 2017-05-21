import { take, call, put, fork, race, takeLatest, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { apiUser } from 'api/User/';
import * as types from './../../constants/user';

import { Session } from 'utils/Session';
import { handleRequestFailure, } from './../../actions/common';
import * as actionMember from './../../actions/members';

import { normalizeUsers } from './../../utils/normalizr-select';

import {
    userLoginSuccess,
    registerUserSuccess,
    userLogoutSuccess,
    authSuccess,
    notAuth,
    updateUserSuccess
} from './../../actions/user';


/**
 *
 * TODO: SHOULD TO REVIEW AND REFACTORING LOGIN/LOGOUT FLOW
 *
 *
 */

/**
 *
 * @param token
 * @returns {boolean}
 */
function* checkAuth() {
    try {
        const response = yield call( apiUser.checkToken );

        yield put( authSuccess( response ) );

        const location = yield select( state => state.getIn( [ 'routing', 'current_location' ] ) );

        /**
         * Check if current location !== projects
         */

        if (location === '') {
            yield put( push( '/projects' ) );
        }

        return true;

    }
    catch ( error ) {

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
function* register( { payload: { data, resolve, reject } } ) {

    try {

        const { data, status } = yield call( apiUser.register, data );

        if (data.errors) {
            console.log( data.errors );
            yield call(
                reject,
                new SubmissionError( data.errors )
            );
        }
        else {
            yield call( resolve );
            yield put( registerUserSuccess( data ) );
        }

        return status;

    }
    catch ( error ) {
        debugger;
        yield put( handleRequestFailure( types.REGISTER_USER_FAILURE, error ) );
        yield put( push( '/' ) );
        return false;

    }
}
/**
 *
 * @param payload
 * @returns {boolean}
 */
function* authorize( { payload: { data, resolve, reject } } ) {

    try {

        const response = yield call( apiUser.login, data );
        if (response.errors) {
            yield call(
                reject,
                new SubmissionError( response.errors )
            );
            return false;
        }
        else {
            yield call( resolve );
            yield put( userLoginSuccess( response ) );
            Session.setToken( response.access_token );
            return true;
        }


    }
    catch ( error ) {

        yield put( handleRequestFailure( types.USER_LOGIN_FAILURE, error ) );

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
 * @param values
 * @param resolve
 * @param reject
 * @returns {boolean}
 */
function* update( { payload: { data, resolve, reject } } ) {

    try {

        const response = yield call( apiUser.update, data );

        if (response.errors) {

            yield call(
                reject,
                new SubmissionError( response.errors ) );
        }
        else {

            yield call( resolve );
            debugger;
            yield put( updateUserSuccess( response ) );
        }
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.USER_UPDATE_FAILURE, e ) );

        return false;
    }

}


function * fetchUsers() {

    try {

        const response = yield call( apiUser.fetch );


        yield put( actionMember.fetchSuccess( normalizeUsers( response ) ) );
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.FETCH_USERS_FAILURE, e ) );
    }
}


/* =============================================================================== */
function* loginFlow() {

    while ( true ) {

        const request = yield take( types.USER_LOGIN );


        const winner = yield race( {
            auth  : call( authorize, request ),
            logout: take( types.USER_LOGOUT )
        } );

        if (winner.auth) {
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

        if (isSuccess)
            yield put( push( '/' ) );
    }
}

/**
 *
 */
function* registerFlow() {
    while ( true ) {

        const request = yield take( types.REGISTER_USER );
        const status = yield call( register, request );

        if (status === 201) {

            const isAuth = yield call( authorize, request );

            if (isAuth) {
                yield put( push( '/projects' ) );
            }

        }

    }

}


function* updateFlow() {


    while ( true ) {

        const request = yield take( types.USER_UPDATE );

        yield call( update, request );

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

function* fetchFlow() {
    yield takeLatest( types.FETCH_USERS, fetchUsers );
}
/**
 *
 */
function * rootUserSagas() {
    yield[
        fork( loginFlow ),
        fork( logoutFlow ),
        fork( registerFlow ),
        fork( checkTokenFlow ),
        fork( updateFlow ),
        fork( fetchFlow )
    ];
}
/**
 *
 */
export default rootUserSagas;