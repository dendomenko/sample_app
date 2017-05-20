import { take, call, put, fork, takeLatest, select, all } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import { apiProject } from 'api/Project';
import { apiTeam } from './../../../api/Team';
import * as types from './../constants';
import { Session } from 'utils/Session';
import * as Actions from './../actions';
import { handleRequestFailure } from './../../../actions/common';
import { normalizeRoles, normalizeUsers } from 'utils/normalizr-select';
/**
 *
 * @returns {boolean}
 */
function *fetchProjects() {

    try {


        const token = yield select( state => state.getIn( [ 'user', 'token' ] ) );

        const response = yield call( apiProject.fetchALL, {
            headers: {
                Authorization: token || Session.getToken()
            }
        } );

        yield put( Actions.fetchSuccess( response ) );

        return true;
    }
    catch ( e ) {

        yield put( handleRequestFailure( types.FETCH_PROJECTS_FAILURE, e ) );
        return false;
    }

}
/**
 *
 * @param payload
 * @returns {boolean}
 */
function* createProject( data ) {

    try {


        const response = yield call( apiProject.create, data );

        return response;

    }
    catch ( e ) {
        yield  put( handleRequestFailure( types.CREATE_PROJECT_FAILURE, e ) );
        return false;
    }
}


function* addMember( params ) {
    try {

        yield call( apiTeam.addMember, params );

        return true;
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.ADD_MEMBER_FAILURE, e ) );
        return false;
    }

}

function* fetchMembersAndRoles() {

    try {

        const { getUsers, getRoles } = apiProject.members;

        const current_user_id = yield select( state => state.getIn( [ 'user', 'uid' ] ) );

        const { members, roles } = yield all( {
            members: call( getUsers ),
            roles  : call( getRoles )
        } );


        yield put( Actions.fetchRolesAndUsersSuccess( {
                list : normalizeUsers( members, current_user_id ),
                roles: normalizeRoles( roles )
            } )
        );


        return true;
    }
    catch ( e ) {
        yield put( handleRequestFailure( types.FETCH_MEMBERS_AND_ROLES_FAILURE, e ) );
        return false;
    }

}

/**
 *
 */
function* flowProjects() {
    yield takeLatest( types.FETCH_PROJECTS, fetchProjects );
}

/**
 *
 */
function* flowCreateProject() {

    while ( true ) {
        const { payload: { data, resolve, reject } } = yield take( types.CREATE_PROJECT );


        const { errors, id } = yield  call( createProject, data );


        if (errors) {
            yield call(
                reject,
                new SubmissionError( errors )
            );
        }
        else {

            const { users } = data;
            let users_len = users.length;
            const project_id = id;

            for ( let i = users_len; i--; ) {


                const user = {
                    user_id: users[ i ].id,
                    role   : users[ i ].role
                };

                const isCreated = yield call( addMember, { ...user, project_id } );

                if (isCreated) {

                    yield put( Actions.addMemberSuccess() );
                }

            }

            yield call( resolve );


        }

    }

}


/**
 *
 */
function* flowMembersAndRoles() {
    yield takeLatest( types.FETCH_MEMBERS_AND_ROLES, fetchMembersAndRoles );
}
/**
 *
 */
function* rootProjectsSaga() {
    yield[
        fork( flowProjects ),
        fork( flowCreateProject ),
        fork( flowMembersAndRoles )

    ];
}

export default rootProjectsSaga;