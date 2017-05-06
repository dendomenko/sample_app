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


function *fetchProjects() {

    try {
        const response = yield call( apiProject.fetchALL );
        debugger;
        yield put( fetchProjectsSuccsess( response ) );
        return true;
    }
    catch ( e ) {

        yield put( fetchProjectsFailure( e ) );
        return false;
    }

}


function* rootProjectsSaga(){
    yield[];
}

export default rootProjectsSaga;