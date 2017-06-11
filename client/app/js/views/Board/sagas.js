import { take, select, fork, put, call } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { apiBoard } from './../../api/Board';
import { apiTeam } from './../../api/Team';
import { Session } from 'utils/Session';
import { FETCH_ALL_TASKS } from './../../constants/Task';
import {
    FETCH_PROJECT_TEAM_FAILURE,
    fetchMemberSuccess
} from  './reducer';
import { handleRequestFailure } from './../../actions/common';


function *fetchTeam( id ) {

    try {

        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );

        const response = yield call( apiTeam.getForProject, id, token );

        yield put( fetchMemberSuccess( response ) );
    }
    catch ( e ) {
        yield put( handleRequestFailure( FETCH_PROJECT_TEAM_FAILURE, e ) );
    }

}


function* fetchTeamFlow() {
//    const chan = yield actionChannel( FETCH_ALL_TASKS_SUCCESS );
    while ( true ) {

        const { payload: { project_id } } = yield take( FETCH_ALL_TASKS );

        yield call( fetchTeam, project_id );
    }
}

function* rootBoardSaga() {

    yield [
        fork( fetchTeamFlow )
    ];

}

export default rootBoardSaga;