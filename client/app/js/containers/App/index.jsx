import React from 'react';
import axios from 'axios';


axios.defaults = {
    baseURL: '/api/v1/',
    proxy  : {
        host: '127.0.0.1',
        port: 3000
    }
};


function xdr( url, method, data, callback, errback ) {
    var req;

    if ( XMLHttpRequest ) {
        req = new XMLHttpRequest();

        if ( 'withCredentials' in req ) {
            req.open( method, url, true );
            req.onerror            = errback;
            req.onreadystatechange = function () {
                if ( req.readyState === 4 ) {
                    if ( req.status >= 200 && req.status < 500 ) {
                        callback( req.responseText );
                    } else {
                        errback( new Error( 'Response returned with non-OK status' ) );
                    }
                }
            };
            console.dir( data );
            req.send( data );
        }
    } else if ( XDomainRequest ) {
        req = new XDomainRequest();
        req.open( method, url );
        req.onerror = errback;
        req.onload  = function () {
            callback( req.responseText );
        };
        console.dir( data );
        req.send( data );
    } else {
        errback( new Error( 'CORS not supported' ) );
    }
}

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function


    componentWillMount() {
        axios.defaults = {
            baseURL: '/api/v1/',
            proxy  : {
                host: '127.0.0.1',
                port: 3000
            }
        };

        // const user = {
        //     "user": {
        //         "name"                 : "arthur",
        //         "email"                : "arthur@mail.com",
        //         "password"             : "12345678",
        //         "password_confirmation": "12345678"
        //     }
        // };

        xdr( 'http://127.0.0.1:3000/api/v1/users/', 'post', {
                "user": {
                    "name"                 : "arthur",
                    "email"                : "arthur@mail.com",
                    "password"             : "12345678",
                    "password_confirmation": "12345678"
                }
            }, function ( data ) {
                console.log( data );
            },
            function ( err ) {
                console.log( err );
            } );

    }


    render() {
        return (
            <div>
                App
            </div>
        );
    }
}

export default App;