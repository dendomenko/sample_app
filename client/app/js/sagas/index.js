import { fork } from 'redux-saga/effects';
import rootUserSagas  from './User';
import rootProjectsSagas from './Project/all-projects';
import rootSingleProjectSagas from './Project/Single';
import rootTaskSaga from './Task';

/**
 *
 */
function* root() {
    yield[
        fork( rootUserSagas ),
        fork( rootProjectsSagas ),
        fork( rootSingleProjectSagas ),
        fork( rootTaskSaga )
    ];
}

export default root;

