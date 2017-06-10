import { fork } from 'redux-saga/effects';
import rootUserSagas  from './User';
import rootProjectsSagas from './../views/Project/sagas';
import rootSingleProjectSagas from './../views/SingleProject/sagas';
import rootTaskSaga from './Task';
import rootMetaSaga from  './MetaData';
import rootRoutingSaga from './Routing';
import rootBoardSaga from './../views/Board/sagas';
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
        fork( rootMetaSaga ),
        fork( rootRoutingSaga ),
        fork( rootBoardSaga )
    ];
}

export default root;

