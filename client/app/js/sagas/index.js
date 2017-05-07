import { fork } from 'redux-saga/effects';
import rootUserSagas  from './User';
import rootProjectsSagas from './Project/all-projects';


/**
 *
 */
function* root() {
    yield[
        fork( rootUserSagas ),
        fork( rootProjectsSagas )
    ];
}

export default root;

