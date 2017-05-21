import * as types from './../constants';
import { fromJS } from 'immutable';

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