import { takeLatest } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import { apiProject } from './../../api/Project';
import * as types  from './../../constants/project/single';
import { push } from 'react-router-redux';
import { fetchProjectSuccess } from './../../actions/project/single';
import { handleRequestFailure } from './../../actions/common';

/**
 *
 * @param id
 * @returns {boolean}
 */
function* fetch( { slug } ) {

    try {

        const response = yield call( apiProject.fetchSingle, slug );
        console.log( 'RESPONSE', response );
        yield put( fetchProjectSuccess( response ) );
        return response.name;
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.FETCH_PROJECT_FAILURE, e ) );
        return true;
    }
}


function* singleFlow() {

    while ( true ) {

        const slug = yield  take( types.FETCH_PROJECT );

        yield  call( fetch, slug );


    }
}


/**
 *
 */
function * rootSingleProjectSaga() {
    yield [
        fork( singleFlow )
    ];
}
export default rootSingleProjectSaga;