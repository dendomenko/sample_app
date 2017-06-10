import { createRequest } from './../../actions/common';
import { fromJS } from 'immutable';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';


export const UPDATE_CARD = 'UPDATE_CARD';


const initialState = {
    isFetching: false,
    items     : {},
    error     : ''
};
/**
 *
 *
 * @deprecated
 * @param state
 * @param type
 * @param payload
 * @returns {any}
 */
const reducer = ( state = fromJS( initialState ), { type, payload } ) => {

    switch ( type ) {
        case FETCH_TASKS:
            return state.update( 'isFetching', val => !val );
        case FETCH_TASKS_SUCCESS:
            return state.merge( {
                isFetching: true,
                items     : payload
            } );
        default:
            return state;
    }
};

export  default reducer;