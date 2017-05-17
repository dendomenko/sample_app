import { actionChannel, take, call, put, fork, takeLatest, select, all } from 'redux-saga/effects';
import {} from 'redux-saga/';
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import { apiProject } from 'api/Project/';
import * as types from './../constants';
import { Session } from 'utils/Session';
import * as Actions from './../actions';
import { handleRequestFailure } from './../../../actions/common';

/**
 *
 * @returns {boolean}
 */
function *fetchProjects() {

    try {


        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );

        const response = yield call( apiProject.fetchALL, {
            headers: {
                Authorization: token || Session.getToken()
            }
        } );

        yield put( Actions.fetchSuccess( response ) );

        return true;
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.FETCH_PROJECTS_FAILURE, e ) );
        return false;
    }

}
/**
 *
 * @param payload
 * @returns {boolean}
 */
function* createProject( { payload: { values, resolve, reject } } ) {

    try {

        const response = yield call( apiProject.create, values );

        if (response.errors) {

            yield call(
                reject,
                new SubmissionError( response.errors )
            );
        }
        else {
            const project = ( current, newData ) => ({ ...current, ...newData });
            yield call( resolve );
            yield put( Actions.createSuccess( project( values, response ) ) );
        }

        return true;
    }
    catch ( e ) {
        yield  put( handleRequestFailure( types.CREATE_PROJECT_FAILURE, e ) );
        return false;
    }
}


function* fetchMembersAndRoles() {

    try {

        const { getUsers, getRoles } = apiProject.members;

        const { members, roles } = yield all( {
            members: call( getUsers ),
            roles  : call( getRoles )
        } );

        console.log( 'RESPONSE', members, roles );
        return true;
    }
    catch ( e ) {
        console.error( e );
        return false;
    }

}

/**
 *
 */
function* flowProjects() {
    yield takeLatest( types.FETCH_PROJECTS, fetchProjects );
}

/**
 *
 */
function* flowCreateProject() {
//    yield takeLatest( types.CREATE_PROJECT, submitCreateProject );
    yield takeLatest( types.CREATE_PROJECT, createProject );
}


/**
 *
 */
function* flowMembersAndRoles() {
    yield takeLatest( types.FETCH_MEMBERS_AND_ROLES, fetchMembersAndRoles );
}
/**
 *
 */
function* rootProjectsSaga() {
    yield[
        fork( flowProjects ),
        fork( flowCreateProject ),
        fork( flowMembersAndRoles )

    ];
}

export default rootProjectsSaga;