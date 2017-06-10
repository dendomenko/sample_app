import * as types from './../../constants/Task';
import { fromJS } from 'immutable';
import { createRequest } from './../common';


export const fetchAll = ( project_id ) => createRequest( types.FETCH_ALL_TASKS, { project_id } );


export const fetchAllSuccess = ( payload ) => ({
    type   : types.FETCH_ALL_TASKS_SUCCESS,
    payload: fromJS( {
        items     : payload,
        isFetching: true
    } )
});

/**
 *
 */
export const createTaskSuccess = ( response ) => ({
    type   : types.CREATE_TASK_SUCCESS,
    payload: fromJS( response )
});


/**
 *
 * @param payload
 */
export const updateTask = ( payload ) => ({
    type: types.UPDATE_TASK,
    payload
});


/**
 *
 */
export const updateTaskSuccess = ( {} ) => ({
    type   : types.CREATE_TASK_SUCCESS,
    payload: fromJS( {} )
});


export const moveTask = ( type, task ) => ({
    type   : types.MOVE_TASK,
    payload: {
        type,
        task
    }
});