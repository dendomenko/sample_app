import { take, call, put, fork, race, takeLatest } from 'redux-saga/effects';
import formSaga from './../Form';
import { SubmissionError, stopSubmit } from 'redux-form';
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
function *fetchProjects() {

    try {
        const response = yield call( apiProject.fetchALL );

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
function* createProject( { payload: { values, resolve, reject } } ) {
//    try {


    const response = yield call( apiProject.create, values );
//    debugger;
    console.log( 'RESPONSE', response );

    if (response.error) {

        yield call(
            reject,
            new SubmissionError(
                {
                    name     : 'Username doesn\'t exist',
                    task_name: 'And your password sucks'
                } )
        );
        //        yield call( reject, { name: 'FILL' } );
//        yield call( reject, new SubmissionError( {
//            name     : 'Username doesn\'t exist',
//            task_name: 'Please enter your password'
//        } ) );
    }
    else {
//        const project = ( current, newData ) => ({ ...current, ...newData });
//        yield put( createProject() )
    }
//        const project = ( current, newData ) => ({ ...current, ...newData });


//        yield put( createProjectSuccess( project( payload, id ) ) );

//        return true;
//    }
//    catch ( e ) {
//        yield put( createProjectFailure( e ) );
//        return false;
//    }
}

function* submitCreateProject( { payload } ) {

    yield call( formSaga, 'newProject', createProject, payload );
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
function* rootProjectsSaga() {
    yield[
        fork( flowProjects ),
        fork( flowCreateProject )
    ];
}

export default rootProjectsSaga;