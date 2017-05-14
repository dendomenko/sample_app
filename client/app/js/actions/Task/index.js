import * as types from './../../constants/Task';
import { Map } from 'immutable';


/**
 *
 * @param payload
 */
export const createTask = ( payload ) => ({
    type: types.CREATE_TASK,
    payload
});

/**
 *
 */
export const createTaskSuccess = ( {} ) => ({
    type   : types.CREATE_TASK_SUCCESS,
    payload: Map( {} )
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
    payload: Map( {} )
});




