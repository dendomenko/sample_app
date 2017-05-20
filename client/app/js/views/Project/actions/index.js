import * as types from './../constants';
import { Map, List, fromJS } from 'immutable';
/**
 *
 */
//export const fetch = () => ({
//    type   : types.FETCH_PROJECTS,
//    payload: {
//        isFetching: false,
//    }
//});
/**
 *
 * @param data
 */
export const fetchSuccess = ( data ) => (
    {
        type   : types.FETCH_PROJECTS_SUCCESS,
        payload: {
            isFetching: true,
            items     : List( data )
        }
    }
);


export const fetchRolesAndUsersSuccess = ( data ) => (
    {
        type   : types.FETCH_MEMBERS_AND_ROLES_SUCCESS,
        payload: fromJS( {
            isFetching: true,
            ...data
        } )
    }
);


//export const fe

/**
 *
 * @param payload
 */
//export const createProject = ( payload ) => ({
//    type: types.CREATE_PROJECT,
//    payload
//});

/**
 *
 * @param payload
 */
export const createSuccess = ( payload ) => ({
    type   : types.CREATE_PROJECT_SUCCESS,
    payload: {
        item: Map( payload )
    }
});


export const addMemberSuccess = ( payload ) => ({
    type   : types.ADD_MEMBER_SUCCESS,
});
/**
 *
 * @param error
 */
//export const createProjectFailure = ( error ) => ({
//    type   : types.CREATE_PROJECT_FAILUR,
//    payload: {
//        error: new Error( error )
//    }
//});


/**
 *
 */
//export const updateProjectsList = () => ({
//    type   : types.UPDATE_PROJECT,
//    payload: {
//        isFetching: false
//    }
//});

/**
 *
 * @param item
 */
//export const updateComplete = ( item ) => ({
//    type   : types.UPDATE_PROJECTS_COMPLETE,
//    payload: {
//        isFetching: true,
//        item      : Map( item )
//    }
//});



