import * as types from './../../constants/Task';
import { fromJS } from 'immutable';



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



