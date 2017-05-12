import * as types from './../../constants/project/single';
import { Map } from 'immutable';

/**
 *
 * @param id
 */
export const fetchProject = ( id ) => ({
    type: types.FETCH_PROJECT,
    id
});

/**
 *
 * @param payload
 */
export const fetchProjectSuccess = ( payload ) => ({
    type   : types.FETCH_PROJECT_SUCCESS,
    payload: Map( {
        ...payload,
        isFetching: true
    } )
});

/**
 *
 * @param error
 */
export const fetchProjectFailure = ( error ) => ({
    type   : types.FETCH_PROJECT_FAILURE,
    payload: Map( {
        error: new Error( error )
    } )
});