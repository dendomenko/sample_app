import Api from 'api';


/**
 *
 * @param name
 * @param email
 * @param pwd
 * @param confirm_pwd
 */
const registerRequest = ({name, email, pwd, confirm_pwd}) => Api.post('/users', {
    "user": {
        "name": name,
        "email": email,
        "password": pwd,
        "password_confirmation": confirm_pwd
    }
}).then(res => ({
    payload: res.data,
    status: res.status
})).catch(error => {
    throw error;
});


/**
 *
 * @param email
 * @param pwd
 */
const loginRequest = ({email, pwd}) => Api
    .post('/login', {
        'email': email,
        'password': pwd
    })
    .then(res => res.data)
    .catch(error => {
        throw  error;
    });

/**
 *
 */
const logoutRequest = () => Api.get('/logout').then(res => res.status).catch(error => {
    throw error;
});
/**
 *
 * @param token
 */
const checkToken = () => Api.get('/isAuth')
    .then(res => res.data)
    .catch(error => {
        throw error;
    });
/**
 *
 * @type {{register: ((p1:{name?: *, email?: *, pwd?: *, confirm_pwd?: *})=>(*)), login: ((p1:{email?: *, pwd?:
 *     *})=>(*)), logout: (()=>Promise.<T>)}}
 */

export const apiUser = {
    register: registerRequest,
    login: loginRequest,
    logout: logoutRequest,
    checkToken: checkToken
};
