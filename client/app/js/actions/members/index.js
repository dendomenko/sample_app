import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './../../constants/user';
import { Map, List, fromJS } from 'immutable';
import  { createRequest } from './../common';


export const fetchMembers = () => createRequest( FETCH_USERS );


export const fetchSuccess = ( payload ) => ({
    type   : FETCH_USERS_SUCCESS,
    payload: Map( {
        list: List( payload )
    } )
});

