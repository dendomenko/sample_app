import Api from 'api';
import { FailueRequest, SuccessRequest } from 'utils/handle-request';

/**
 *
 * @param name
 * @param email
 * @param pwd
 * @param confirm_pwd
 */
const registerRequest = ( { name, email, password, confirm_pwd } ) => Api.post(
    '/users',
    {
        "name"                 : name || null,
        "email"                : email || null,
        "password"             : password || null,
        "password_confirmation": confirm_pwd || null,
    } )
    .then( res => ({
        status: res.status,
        body  : res.data
    }) )
    .catch( FailueRequest );


/**
 *
 * @param email
 * @param pwd
 */
const loginRequest = ( { email, password } ) => Api
    .post( '/login', {
        'email'   : email || null,
        'password': password || null
    } )
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 */
const logoutRequest = () => Api.get( '/logout' )
    .then( SuccessRequest )
    .catch( FailueRequest );


/**
 *
 * @param name
 * @param email
 * @param password
 * @param avatar
 * @returns {Promise.<T>|*}
 */
const updateRequest = ( { name, email, password, avatar } ) => {

    const data = new FormData();
    /**
     * TODO: SHOULD TO REVIEW
     */
    data.append( 'name', name || '' );
    data.append( 'email', email || '' );
    data.append( 'password', password || '' );
    data.append( 'avatar', typeof avatar !== 'undefined' ? avatar[ 0 ] : '' );

    return Api.patch( '/update', data )
        .then( SuccessRequest )
        .catch( FailueRequest );

};


const fetch = () => Api
    .get( '/users' )
    .then( SuccessRequest )
    .catch( FailueRequest );


const getUser = ( id ) => Api.get( `users/${id}` )
    .then( SuccessRequest )
    .catch( FailueRequest );

/**
 *
 * @param token
 */
const checkToken = () => Api.get( '/isAuth' )
    .then( SuccessRequest )
    .catch( FailueRequest );

/**
 *
 * @type {{register: ((p1:{name?: *, email?: *, pwd?: *, confirm_pwd?: *})=>(*)), login: ((p1:{email?: *, pwd?:
 *     *})=>(*)), logout: (()=>Promise.<T>)}}
 */

export const apiUser = {
    register  : registerRequest,
    login     : loginRequest,
    logout    : logoutRequest,
    update    : updateRequest,
    checkToken: checkToken,
    fetch     : fetch,
    getUser

};
