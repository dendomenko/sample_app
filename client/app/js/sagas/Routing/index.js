import { fork, take } from 'redux-saga/effects';
import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from 'react-router-redux';
import { parsePath } from 'history';


export function* routing() {

}


function * watchRouting() {
    while ( true ) {

        const { payload } = yield take( LOCATION_CHANGE );

    }
}

function *rootRoutingSaga() {
    yield [
        fork( watchRouting ),
    ];
}

export default rootRoutingSaga;
