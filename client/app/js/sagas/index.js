import { fork } from 'redux-saga/effects';
import rootUserSagas  from './User';
import rootProjectsSagas from './../views/Project/sagas';
import rootSingleProjectSagas from './../views/SingleProject/sagas';
import rootTaskSaga from './Task';
//import rootTeamSaga from './Team';

/**
 *
 */
function* root() {
    yield[
        fork( rootUserSagas ),
        fork( rootProjectsSagas ),
        fork( rootSingleProjectSagas ),
        fork( rootTaskSaga ),
//        fork( rootTeamSaga )
    ];
}

export default root;

