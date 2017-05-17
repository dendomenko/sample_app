import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './../../constants/user';
import { Map, List } from 'immutable';


export const fetchSuccess = ( payload ) => ({
    type   : FETCH_USERS_SUCCESS,
    payload: Map( {
        list: List( payload )
    } )
});

