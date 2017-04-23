import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "../constants/user";

import api from 'utils/Api';

function getUserStatus() {
    return function (dispatch) {
        ({type: USER_REQUEST})
    };
}

export function registerUser({name, email, pwd, confirm_pwd}) {
    return dispatch({type: REGISTER_USER});

    api
        .post('/users', {
        "user": {
            "name": name,
            "email": email,
            "password": pwd,
            "password_confirmation": confirm_pwd
        }
    })
        .then(res => console.log(res))
        .catch(err => console.info(err));

};
/**
 *
 *  COMMON FUNCTION
 */
const handleError = (error) => ({});
