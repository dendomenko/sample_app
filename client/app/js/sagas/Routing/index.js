import { fork, take } from 'redux-saga/effects';
import { CALL_HISTORY_METHOD, LOCATION_CHANGE } from 'react-router-redux';
//import {} from ''


export function* routing() {

}


function * watchRouting() {
    while ( true ) {

        const resp1 = yield take( LOCATION_CHANGE );
        console.log( 'RR!', resp1 );


    }
}

function* watch() {

    while ( true ) {
        const resp = yield take( CALL_HISTORY_METHOD );
        console.log( 'RR', resp );
    }
}
function *rootRoutingSaga() {
    yield [
        fork( watchRouting ),
        fork( watch )
    ];
}

export default rootRoutingSaga;
