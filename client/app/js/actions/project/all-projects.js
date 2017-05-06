import * as types from 'constants/project/all-projects';

/**
 *
 */
export const fetchProjects = () => ({
    type   : types.FETCH_PROJECTS,
    payload: {
        isFetching: false
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
            ...data
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

export const createProject = ( payload ) => ({
    type: types.CREATE_PROJECT,
    payload
});

export const createProjectSuccess = ( payload ) => ({
    type: types.CREATE_PROJECT_SUCCESS,
    payload
});


export const createProjectFailure = ( error ) => ({
    type   : types.CREATE_PROJECT_FAILUR,
    payload: {
        error: new Error( error )
    }
});
