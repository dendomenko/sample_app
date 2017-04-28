import { fork } from 'redux-saga/effects';
import rootUserSagas  from './User';

/**
 *
 */
function* root() {
    yield[
        fork( rootUserSagas )
    ];
}

export default root;

