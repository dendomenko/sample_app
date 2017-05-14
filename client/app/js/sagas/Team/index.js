import { take, call, put, fork, race, takeLatest, select } from 'redux-saga/effects';
import { push, } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import { apiTeam } from './../../api/Team';
import { handleRequestFailure, handleRequest } from './../../actions/common';
import { createTeam } from './../../actions/Team';
import * as types from  './../../constants/Team';

function * create( { payload: { values, resolve, reject } } ) {

    try {
        debugger;
        const { errors, team } = yield call( apiTeam.create, values );

        console.log( 'TEAM RESPONSE', team );
        if (team) {
            yield call( resolve );
            yield put( createTeam( team ) );
        }
        if (errors) {
            yield call(
                reject,
                new SubmissionError( errors )
            );
        }

    }
    catch ( e ) {
        yield put( handleRequestFailure( types.CREATE_TEAM_FAILURE, e ) );
    }
}


function* teamCreateFlow() {
    yield takeLatest( types.CREATE_TEAM, create );
}


function *rootTeamSaga() {
    yield [
        fork( teamCreateFlow )
    ];
}


export default rootTeamSaga;