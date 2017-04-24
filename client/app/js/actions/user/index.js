import {
    USER_AUTH,
    USER_NOT_AUTH,
    USER_FAILURE,
    USER_LOGOUT,
    USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "./../../constants/user";

import api from 'utils/Api';

function getUserStatus() {
    return function ( dispatch ) {
        dispatch( { type: USER_REQUEST } );
    };
}

export function registerUser( { name, email, pwd, confirm_pwd } ) {
    return function ( dispatch ) {
        dispatch( { type: REGISTER_USER } );
        api
            .post( '/users', {
                "user": {
                    "name"                 : name,
                    "email"                : email,
                    "password"             : pwd,
                    "password_confirmation": confirm_pwd
                }
            } )
            .then( res => dispatch( handleRegisterSuccses( res ) ) )
            .catch( err => dispatch( handleError( err ) ) );
    };
};
/**
 *
 *  COMMON FUNCTION
 */

const handleRegisterSuccses = ( { status } ) =>
    ( {
        type   : REGISTER_USER_SUCCESS,
        payload: {
            error : null,
            isAuth: true
        }
    });
const handleError           = ( error ) => ({
    type   : REGISTER_USER_FAILURE,
    payload: {
        error: new Error( error )
    }
});
