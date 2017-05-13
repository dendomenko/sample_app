import * as types from './../../constants/project/single';
import { Map } from 'immutable';

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
export const fetchProjectSuccess = ( payload ) => ({
    type   : types.FETCH_PROJECT_SUCCESS,
    payload: Map( {
        ...payload,
        isFetching: true
    } )
});
