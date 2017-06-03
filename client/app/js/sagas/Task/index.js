import { takeLatest, } from 'redux-saga';
import { call, take, fork, put, select, actionChannel } from 'redux-saga/effects';
import { apiTask } from './../../api/Task';
import { handleRequestFailure } from './../../actions/common';
import * as actions from '../../actions/task';
import * as types from './../../constants/Task';
import { SubmissionError } from 'redux-form';


function* create( { payload: { data, resolve, reject } } ) {

    try {
        const { task, errors } = yield call( apiTask.create, data );

        if (errors) {

            yield call(
                reject,
                new SubmissionError( errors )
            );
        }
        if (task) {
            yield call( resolve );
            yield put( actions.createTaskSuccess( task ) );
        }


        return true;
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.CREATE_TASK_FAILURE, e ) );
        return false;
    }

}

function * fetchAll( project_id ) {

    try {

        const response = yield call( apiTask.fetchAll, project_id );

        yield put( actions.fetchAllSuccess( response ) );


    }
    catch ( e ) {
        yield put( handleRequestFailure( types.FETACH_ALL_TASKS_FAILURE, e ) );
    }
}


/* ======================================================================================== */
function* createFlow() {

    yield takeLatest( types.CREATE_TASK, create );
}

/**
 * Function have dependency from action FETCH_PROJECT_SUCCESS
 */
function *fetchAllFlow() {

    const chan = yield  actionChannel( 'FETCH_PROJECT_SUCCESS' );


    while ( true ) {

        const { payload } = yield take( chan );

        const { id } = payload.toJS();

        yield  call( fetchAll, id );


    }

}


function* watchFetchTasks() {

    while ( true ) {
        const { payload: { project_id } } = yield take( types.FETCH_ALL_TASKS );

        yield call( fetchAll, project_id );
    }


}

function *rootSagaTask() {
    yield [
        fork( createFlow ),
        fork( fetchAllFlow ),
        fork( watchFetchTasks )
    ];
}
export default rootSagaTask;