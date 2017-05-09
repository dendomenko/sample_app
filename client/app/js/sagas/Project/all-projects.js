import { take, call, put, fork, race, takeLatest } from 'redux-saga/effects';
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
        console.log( 'STORAGE', localStorage );

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
function* createProject( { payload } ) {
    try {

        const id = yield call( apiProject.create, payload );


        const project = ( current, newData ) => ({ ...current, ...newData });


        yield put( createProjectSuccess( project( payload, id ) ) );

        return true;
    }
    catch ( e ) {
        yield put( createProjectFailure( e ) );
        return false;
    }
}

/**
 *
 */
function* flowProjects() {
    yield takeLatest( types.FETCH_PROJECTS, fetchProjects );
}


function* flowCreateProject() {
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