import { take, call, put, fork, takeLatest, select } from 'redux-saga/effects';
import formSaga from './../Form';
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import { apiProject } from 'api/Project/';
import * as types from 'constants/project/all-projects';
import { Session } from 'utils/Session';
import {
    fetchProjectsSuccsess,
    fetchProjectsFailure,
    createProjectSuccess,
    createProjectFailure
} from 'actions/project/all-projects';

/**
 *
 * @returns {boolean}
 */
function* fetchProjects() {

    try {


        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );

        const response = yield call( apiProject.fetchALL, {
            headers: {
                Authorization: token || Session.getToken()
            }
        } );

        yield put( fetchProjectsSuccsess( response ) );

        return true;
    }
    catch ( e ) {

        yield put( fetchProjectsFailure( e ) );
        return false;
    }

}
/**
 *
 * @param payload
 * @returns {boolean}
 */
//function* createProject( { payload: { values, resolve, reject } } ) {
//
//    try {
//
//        const response = yield call( apiProject.create, values );
//
//        if (response.errors) {
//
//            yield call(
//                reject,
//                new SubmissionError( response.errors )
//            );
//        }
//        else {
//            const project = ( current, newData ) => ({ ...current, ...newData });
//            yield call( resolve );
//            yield put( createProjectSuccess( project( values, response ) ) );
//        }
//
//        return true;
//    }
//    catch ( e ) {
//        yield  put( createProjectFailure( e ) );
//        return false;
//    }
//}


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
//    yield takeLatest( types.CREATE_PROJECT, createProject );
}

/**
 *
 */
function* rootProjectsSaga() {
    yield[
        fork( flowProjects ),
        fork( flowCreateProject )
    ];
}

export default rootProjectsSaga;