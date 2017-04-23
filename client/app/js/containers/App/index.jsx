import React, {PureComponent} from 'react';
import api from 'utils/Api';

// axios.defaults.proxy = {     host: '127.0.0.1',     port: 3000 };
// axios.defaults.baseURL = 'localhost:3000/api/v1/';

export default class App extends PureComponent { // eslint-disable-line react/prefer-stateless-function

    componentWillMount() {
        // axios.defaults = {     baseURL: '/api/v1/',     proxy: {         host:
        // '127.0.0.1',         port: 3000     } }; const user = {     "user": { "name"
        // : "arthur", "email"                : "arthur@mail.com", "password" :
        // "12345678", "password_confirmation": "12345678"     } };
        api
            .post('/users', {
            "user": {
                "name": "denis",
                "email": "denis@mail.com",
                "password": "12345678",
                "password_confirmation": "12345678"
            }
        })
            .then(res => console.log(res))
            .catch(err => console.info(err));
        // xdr( 'http://127.0.0.1:3000/api/v1/users/', 'post', {         "user": {
        // "name"                 : "arthur",             "email"                :
        // "arthur@mail.com",             "password"             : "12345678",
        // "password_confirmation": "12345678"         }     }, function ( data ) {
        // console.log( data );     },     function ( err ) {         console.log( err
        // );     } );

    }

    render() {
        return (
            <div>
                App
            </div>
        );
    }
}
