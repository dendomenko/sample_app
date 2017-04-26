import { fork } from 'redux-saga/effects';
import userSagas  from './User';


function* root() {
    yield[
        fork( userSagas )
        ];
}

export default root;

