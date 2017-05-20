import { takeLatest } from 'redux-saga';
import { call, take, fork, put } from 'redux-saga/effects';
import { apiTask } from './../../api/Task';
import { handleRequestFailure } from './../../actions/common';
import { createTaskSuccess, updateTaskSuccess } from '../../actions/task';
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
            yield put( createTaskSuccess( task ) );
        }


        return true;
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.CREATE_TASK_FAILURE, e ) );
        return false;
    }

}
function* createFlow() {

    yield takeLatest( types.CREATE_TASK, create );

}

function *rootSagaTask() {
    yield [
        fork( createFlow )
    ];
}
export default rootSagaTask;