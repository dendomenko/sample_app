import { take, select, fork, put, call, all } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { apiProject } from './../../api/Project';
import { apiTeam } from './../../api/Team';
import { Session } from 'utils/Session';
import { FETCH_ALL_TASKS } from './../../constants/Task';
import {
    FETCH_PROJECT_TEAM_FAILURE,
    fetchMemberSuccess,
    fetchInfoSuccess
} from  './reducer';
import { handleRequestFailure } from './../../actions/common';


function *fetchTeam( id ) {

    try {

        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );

        const response = yield call( apiTeam.getForProject, id, token );

        yield put( fetchMemberSuccess( response ) );
        return true;
    }
    catch ( e ) {
        yield put( handleRequestFailure( FETCH_PROJECT_TEAM_FAILURE, e ) );
        return false;
    }

}

function* fetchProjectInfo( id ) {

    try {
        const response = yield call( apiProject.fetchSingle, id );

        yield put( fetchInfoSuccess( response ) );

        return true;
    }
    catch ( e ) {
        console.error( e.message );

        return false;
    }

}

function* fetchTeamFlow() {

    while ( true ) {

        const { payload: { project_id } } = yield take( FETCH_ALL_TASKS );

        yield all( {
            team: call( fetchTeam, project_id ),
            info: call( fetchProjectInfo, project_id )
        } );

    }
}

function* rootBoardSaga() {

    yield [
        fork( fetchTeamFlow )
    ];

}

export default rootBoardSaga;