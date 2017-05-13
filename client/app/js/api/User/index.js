import Api from 'api';


/**
 *
 * @param name
 * @param email
 * @param pwd
 * @param confirm_pwd
 */
const registerRequest = ( { name, email, password, confirm_pwd } ) => Api.post( '/users', {
    "user": {
        "name"                 : name || null,
        "email"                : email || null,
        "password"             : password || null,
        "password_confirmation": confirm_pwd || null,
    }
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

    let data = new FormData();
    console.log( avatar );
    data.append( 'name', name );
    data.append( 'email', email );
    data.append( 'password', password );
    data.append( 'avatar', avatar[ 0 ] );

    const config = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };


    for ( var key of data.entries() ) {
        console.log( key[ 0 ] + ', ' + key[ 1 ] );
    }
    const body = {
        user: data
    };
    console.info( body );
    return Api.put( '/update', body, config )
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
