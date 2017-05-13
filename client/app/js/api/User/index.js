import Api from 'api';


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
    } ).then( res => res ).catch( error => {
    throw  new Error( error );
} );


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
    .then( res => res.data )
    .catch( error => {
        throw  new Error( error );
    } );

/**
 *
 */
const logoutRequest = () => Api.get( '/logout' )
    .then( res => res.status )
    .catch( error => {
        throw  new Error( error );
    } );


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
        .then( res => res.data )
        .catch( error => {
            throw  new Error( error );
        } );
};
/**
 *
 * @param token
 */
const checkToken = () => Api.get( '/isAuth' ).then( res => {
    return res.data;
} );
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
    checkToken: checkToken
};
