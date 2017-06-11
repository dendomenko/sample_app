import { take, call, put, fork, takeLatest, select, all } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { apiBoard } from './../../api/Board';
import { Session } from 'utils/Session';
import {
    FETCH_TASKS_SUCCESS,
    FETCH_TASKS,
    FETCH_TASKS_FAILURE,
    fetchTasks,
    fetchTasksSuccess
} from  './reducer';
import { handleRequestFailure } from './../../actions/common';


function *fetch( { projectID } ) {

    try {

        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );
        const response = yield call( apiBoard.fetch, projectID, token );

    }
    catch ( e ) {
        yield put( handleRequestFailure( FETCH_TASKS_FAILURE, e ) );
    }

}


function* fetchFlow() {
    yield takeLatest( FETCH_TASKS, fetch );
}

function* rootBoardSaga() {

    yield [
        fork( fetchFlow )
    ];

}

export default rootBoardSaga;