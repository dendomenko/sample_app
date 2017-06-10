import { call, put, take, fork, takeLatest, select } from 'redux-saga/effects';
import { apiProject } from './../../../api/Project';
import { apiTeam } from './../../../api/Team';
import { apiUser } from './../../../api/User';
import * as types  from './../constants';
import { push } from 'react-router-redux';
import * as Actions from './../actions';
import { handleRequestFailure, createRequest } from './../../../actions/common';


const getProjectId = state => state.getIn( [ 'single', 'id' ] );
/**
 *
 * @param slug
 * @returns {boolean}
 */
function* fetch( { slug } ) {

    try {

        const response = yield call( apiProject.fetchSingle, slug );

        yield put( Actions.fetchSuccess( response ) );


        return response.id;
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.FETCH_PROJECT_FAILURE, e ) );
        return false;
    }
}


function* fetchActivity( project_id = null ) {

    try {

        project_id = project_id === null ? yield select( getProjectId ) : project_id;

        const response = yield call( apiProject.fetchActivity, project_id );


        yield put( Actions.fetchActivitySuccess( response ) );

        return true;

    }
    catch ( e ) {

        yield put( handleRequestFailure( types.FETCH_ACTIVITY_SUCCESS, e ) );
        return false;
    }


}

function* addMember( { data, resolve, reject } ) {

    try {


        yield call( apiTeam.addMember, data );
        yield call( resolve );
        const { user_id } = data;
        return user_id;

    }
    catch ( e ) {
        yield call( reject );
        yield put( handleRequestFailure( types.ADD_MEMBER_FAILURE, e ) );
        return false;
    }

}

function * getMember( id ) {

    try {

        return yield  call( apiUser.getUser, id );
    }
    catch ( e ) {
        console.error( e.message );
        return false;
    }

}


function* removeMember( id ) {

    try {

        const projectId = yield select( getProjectId );

        yield call( apiTeam.remove, projectId, id );

        yield put( Actions.removeMemberSuccess( id ) );

        return true;

    }
    catch ( e ) {
        yield put( handleRequestFailure( types.REMOVE_MEMBER_FAILURE, e ) );

        return false;
    }
}
/* =========================================== */
function* singleFlow() {

    while ( true ) {

        const slug = yield  take( types.FETCH_PROJECT );

        const id = yield  call( fetch, slug );

        if (false !== id) {
            yield call( fetchActivity, id );
        }
    }
}


function *addMemberFlow() {

    while ( true ) {
        const { payload } = yield take( types.ADD_MEMBER );

        const user_id = yield call( addMember, payload );

        if (false !== user_id) {
            const user = yield call( getMember, user_id );
            if (false !== user) {
                yield call( fetchActivity );
                yield put( Actions.addMemberSuccess( user ) );
            }

        }
    }

}

function *removeMemberFlow() {
    while ( true ) {
        const { payload: { id } } = yield take( types.REMOVE_MEMBER );


        const isSuccess = yield call( removeMember, id );

        if (isSuccess) {
            yield call( fetchActivity );
        }
    }
}

/**
 *
 */
function * rootSingleProjectSaga() {
    yield [
        fork( singleFlow ),
        fork( addMemberFlow ),
        fork( removeMemberFlow )
    ];
}

export default rootSingleProjectSaga;