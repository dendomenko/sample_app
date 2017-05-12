import { takeLatest } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import { apiProject } from './../../api/Project';
import * as types  from './../../constants/project/single';
import { push } from 'react-router-redux';
import { fetchProjectFailure, fetchProjectSuccess } from './../../actions/project/single';
import slugify from './../../utils/slugify';

/**
 *
 * @param id
 * @returns {boolean}
 */
function* fetch( { id } ) {

    try {

        const response = yield call( apiProject.fetchSingle, id );
        console.log( 'RESPONSE', response );
        yield put( fetchProjectSuccess( response ) );
        return response.name;
    }
    catch ( e ) {
        yield put( fetchProjectFailure( e ) );
        return true;
    }
}


function* singleFlow() {

    while ( true ) {

        const id = yield  take( types.FETCH_PROJECT );

        const name = yield  call( fetch, id );

        if (name) {

            const slug = slugify( name );

            yield put( push( `projects/${slug}` ) );
        }

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