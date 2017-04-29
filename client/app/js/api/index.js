import axios from 'axios';
import { Session } from 'utils/Session';

const api = axios.create( {
    baseURL: 'http://localhost:3000/api/v1/',
    proxy  : {
        host: '127.0.0.1',
        port: 3000
    },
    headers: {
        common: {
            'Authorization': Session.getToken()
        },
        post  : {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
} );

export default api;