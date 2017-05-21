import { takeLatest } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import { apiProject } from './../../../api/Project';
import { apiTeam } from './../../../api/Team';
import * as types  from './../constants';
import { push } from 'react-router-redux';
import * as Actions from './../actions';
import { handleRequestFailure, createRequest } from './../../../actions/common';

/**
 *
 * @param id
 * @returns {boolean}
 */
function* fetch( { slug } ) {

    try {

        const response = yield call( apiProject.fetchSingle, slug );

        yield put( Actions.fetchSuccess( response ) );

        return response.name;
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.FETCH_PROJECT_FAILURE, e ) );
        return true;
    }
}


function* addMember( { payload: { data, resolve, reject } } ) {

    try {

        const response = yield call( apiTeam.addMember( data ) );

        yield call( resolve );

        yield put( types.ADD_MEMBER_SUCCESS, data );

    }
    catch ( e ) {
        yield put( handleRequestFailure( types.ADD_MEMBER_FAILURE, e ) );
    }

}


/* =========================================== */
function* singleFlow() {

    while ( true ) {

        const slug = yield  take( types.FETCH_PROJECT );

        yield  call( fetch, slug );
    }
}


function *addMemberFlow() {
    yield takeLatest( types.ADD_MEMBER, addMember );
}


/**
 *
 */
function * rootSingleProjectSaga() {
    yield [
        fork( singleFlow ),
        fork( addMemberFlow )
    ];
}
export default rootSingleProjectSaga;