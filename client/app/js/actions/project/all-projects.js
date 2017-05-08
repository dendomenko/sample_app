import * as types from 'constants/project/all-projects';
import { Map, List } from 'immutable';
/**
 *
 */
export const fetchProjects = () => ({
    type   : types.FETCH_PROJECTS,
    payload: {
        isFetching: false,
    }
});
/**
 *
 * @param data
 */
export const fetchProjectsSuccsess = ( data ) => (
    {
        type   : types.FETCH_PROJECTS_SUCCESS,
        payload: {
            isFetching: true,
            items     : List( data )
        }
    });

/**
 *
 * @param error
 */
export const fetchProjectsFailure = ( error ) => ({
    type   : types.FETCH_PROJECTS_FAILURE,
    payload: {
        error: new Error( error )
    }
});

/**
 *
 * @param payload
 */
export const createProject = ( payload ) => ({
    type: types.CREATE_PROJECT,
    payload
});

/**
 *
 * @param payload
 */
export const createProjectSuccess = ( payload ) => ({
    type   : types.CREATE_PROJECT_SUCCESS,
    payload: {
        item: payload
    }
});

/**
 *
 * @param error
 */
export const createProjectFailure = ( error ) => ({
    type   : types.CREATE_PROJECT_FAILUR,
    payload: {
        error: new Error( error )
    }
});


/**
 *
 */
export const updateProjectsList = () => ({
    type   : types.UPDATE_PROJECT,
    payload: {
        isFetching: false
    }
});

/**
 *
 * @param item
 */
export const updateComplete = ( item ) => ({
    type   : types.UPDATE_PROJECTS_COMPLETE,
    payload: {
        isFetching: true,
        item      : Map( item )
    }
});



