import { fork, call, put } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';
import Api from 'utils/Api';
import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "./../../constants/user";

import {
    userAuth,
    userAuthFailure,
    userAuthSuccess,
    registerUserFailire,
    registerUserSuccess
} from './../../actions/user';


const registerRequest = ( { name, email, pwd, confirm_pwd } ) => Api.post( '/users', {
    "user": {
        "name"                 : name,
        "email"                : email,
        "password"             : pwd,
        "password_confirmation": confirm_pwd
    }
} );

function* registerUser( { payload } ) {

    try {
        const response = yield call( registerRequest, payload );

        yield put( registerUserSuccess( response ) );
    }
    catch ( e ) {
        yield  put( registerUserFailire( e ) );
    }

}

function* takeRequest() {
    yield takeLatest( REGISTER_USER, registerUser );

}
function* rootWatcher() {
    yield [
        fork( takeRequest ),
    ];
}

export default rootWatcher;