import { call, take, fork, put,takeLatest } from 'redux-saga/effects';
import { handleRequestFailure } from './../../actions/common';
import * as action  from './../../actions/MetaData';
import * as types from './../../constants/MetaData';
import { apiMetaData } from './../../api/Meta';
import { normalizeTaskMetaData } from 'utils/normalizr-select';


function* getTaskMeta() {

    try {
        const response = yield call( apiMetaData.getTaskMeta );

        yield put( action.getTaskMetaSuccess( normalizeTaskMetaData( response ) ) );
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.GET_TASK_META_FAILURE, e ) );
    }
}


function* taskMetaFlow() {

    yield takeLatest( types.GET_TASK_META, getTaskMeta );
}

function * rootMetaSaga() {
    yield[
        fork( taskMetaFlow )
    ];
}


export default rootMetaSaga;