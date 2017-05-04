import {take, call, put, fork, race, select, takeLatest} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {apiUser} from 'api/User/';
import * as types from 'constants/user';
import {Session} from 'utils/Session';
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


const loginRequest = ({email, pwd}) => Api
    .post('/login', {
        'email': email,
        'password': pwd
    })
    .then(res => res.data)
    .catch(error => {
        throw  error;
    });


const checkToken = () => Api.get('/isAuth').then(res => res.data)
    .catch(error => {
        throw error;
    });


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

        const response = yield call(apiUser.checkToken);

        yield put(authSuccess(response));
        return true;

        // else {
        //     Session.removeToken();
        //
        //     return false;
        // }

    } catch (error) {
        yield put(notAuth());
        Session.removeToken();
        // yield put(authFailure(error));
        return false;
    }

}

/**
 *
 * @param payload
 * @returns {*}
 */
function* register({payload}) {

    try {
        debugger;
        const response = yield call(apiUser.register, payload);
        yield put(registerUserSuccess(response));
        return response;
    } catch (error) {
        yield put(registerUserFailure(error));
        return false;
    }

}
/**
 *
 * @param payload
 * @returns {boolean}
 */
function* authorize({payload}) {

    try {
        const response = yield call(loginRequest, payload);
        yield put(userLoginSuccess(response));
        Session.setToken(response.access_token);

        return true;
    }
    catch (error) {
        yield put(userLoginFailure(error));

        return false;
    }

}
/**
 *
 * @returns {*}
 */
function* logout() {

    try {
        const response = yield call(Session.removeToken);
        yield put(userLogoutSuccess);
        return true;
    }
    catch (error) {
        yield put(userLogoutFailure(error));
        return false;
    }
}


/**
 *
 */
function* loginFlow() {

    while (true) {

        const request = yield take(types.USER_LOGIN);

        const winner = yield race({
            auth: call(authorize, request),
            logout: take(types.USER_LOGOUT)
        });

        if (winner.auth) {
            yield put(push('/projects'));
        }


    }

}
/**
 *
 */
function* logoutFlow() {
    while (true) {

        yield take(types.USER_LOGOUT);
        yield call(logout);
        yield put(push('/'));
    }
}

/**
 *
 */
function* registerFlow() {
    while (true) {
        const request = yield take(types.REGISTER_USER);

        const response = yield call(register, request);


        if (typeof response === 'object') {

            const isAuth = yield call(authorize, response);

            if (isAuth) {
                yield put(push('/projects'));
            }

        }

    }

}


function* checkTokenFlow() {
    yield takeLatest('CHECK_AUTH', checkAuth);

}
/**
 *
 */
function * rootUserSagas() {
    yield[
        fork(loginFlow),
        fork(logoutFlow),
        fork(registerFlow),
        fork(checkTokenFlow)
    ];
}
/**
 *
 */
export default rootUserSagas;
