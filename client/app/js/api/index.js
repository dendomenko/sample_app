import axios from 'axios';

const api = axios.create( {
    baseURL: 'http://localhost:3000/api/v1/',
    proxy  : {
        host: '127.0.0.1',
        port: 3000
    }
} );

export default api;