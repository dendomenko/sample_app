import * as types from './../constants';
import { fromJS } from 'immutable';
import { createRequest } from './../../../actions/common';
/**
 *
 * @param id
 */
export const fetchProjectBySlug = ( slug ) => ({
    type: types.FETCH_PROJECT,
    slug
});

/**
 *
 * @param payload
 */
export const fetchSuccess = ( payload ) => ({
    type   : types.FETCH_PROJECT_SUCCESS,
    payload: fromJS( {
        ...payload,
        isFetching: true
    } )
});


export const addMemberSuccess = ( payload ) => ({
    type   : types.ADD_MEMBER_SUCCESS,
    payload: fromJS( payload )
});


export const removeMember = ( id ) => createRequest( types.REMOVE_MEMBER, { id } );

export const removeMemberSuccess = ( id ) => createRequest( types.REMOVE_MEMBER_SUCCESS, { id } );


/**
 *
 * @param payload
 */
export const fetchActivitySuccess = ( payload ) => ({
    type   : types.FETCH_ACTIVITY_SUCCESS,
    payload: fromJS( { ...payload } )
});


export const fetchActivity = createRequest( types.FETCH_ACTIVITY );
