import {fork, call, put} from 'redux-saga/effects';
import {takeLatest, delay} from 'redux-saga';
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
 * @param name
 * @param email
 * @param pwd
 * @param confirm_pwd
 */
const registerRequest = ({name, email, pwd, confirm_pwd}) => Api.post('/users', {
    "user": {
        "name": name,
        "email": email,
        "password": pwd,
        "password_confirmation": confirm_pwd
    }
});

/**
 *
 * @param email
 * @param pwd
 */
const loginRequest = ({email, pwd}) => Api
    .post('/login', {
    'email': email,
    'password': pwd
})
    .then(res => res.data)
    .catch(error => new Error(error));

const logoutRequest = () => Api.get('/logout');

/**
 *
 * @param payload
 */
function * registerUser({payload}) {

    try {
        const response = yield call(registerRequest, payload);

        yield put(registerUserSuccess());

    } catch (error) {
        yield put(registerUserFailure(error));
    }

    try {

        const response = yield call(loginRequest, payload);
        yield put(userLoginSuccess(response));
    } catch (error) {
        yield put(userLoginFailure(error));
    }

}
/**
 *
 */
function * logoutUser()
{
    try {
        debugger;
        const response = yield call(logoutRequest);
        debugger;
        yield put(userLogoutSuccess);

    } catch (error) {
        yield put(userLogoutFailure);
    }
}
/**
 *
 * @param payload
 */
function * authUser({payload}) {

    try {

        const response = yield call(loginRequest, payload);
        debugger;
        yield put(userLoginSuccess(response));
    } catch (error) {
        yield put(userLoginFailure(error));
    }

}
/**
 *
 */
function * takeRequest() {
    yield takeLatest(types.REGISTER_USER, registerUser);
}
/**
 *
 */
function * takeLoginRequest() {
    yield takeLatest(types.USER_LOGIN, authUser);
}

function * takeLogoutRequest() {
    yield takeLatest(types.USER_LOGOUT, logoutUser);
}
/**
 *
 */

function * userSagas() {
    yield[fork(takeRequest),
        fork(takeLoginRequest),
        fork(takeLogoutRequest)];
}
/**
 *
 */
export default userSagas;