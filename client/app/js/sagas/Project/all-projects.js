import {take, call, put, fork, race, takeLatest} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {apiUser} from 'api/User/';
import * as types from 'constants/user';
import {Session} from 'utils/Session';
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