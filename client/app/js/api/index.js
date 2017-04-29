import axios from 'axios';
import { Axios } from 'axios';
import { cloneDeep } from 'lodash';
import { Session } from 'utils/Session';

export class Api extends Axios {
    constructor() {
        super();
        // this.defaults.baseURL = 'https://api.com';
        this.defaults = cloneDeep(this.defaults);
        console.info( 'dd', this );
    }

    cancelOrder( id ) {
        return this.put( `/cancel/order/${id}` );
    }
}


const api = axios.create( {
    baseURL: 'http://localhost:3000/api/v1/',
    proxy  : {
        host: '127.0.0.1',
        port: 3000
    },
    headers: {
        'Authorization': Session.getToken()
    }
    //     common: {
    //         'Authorization': Session.getToken()
    //     },
    //     post  : {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // }
} );

export default api;