import { createRequest } from './../../actions/common';
import { fromJS } from 'immutable';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const MOVE_CARD = 'MOVE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';


export const fetchTasks = ( projectID ) => createRequest( FETCH_TASKS, { projectID } );
export const fetchTasksSuccess = ( payload ) => createRequest( FETCH_TASKS_SUCCESS, payload );

export const moveCard = ( card ) => createRequest( FETCH_TASKS, { card } );


const initialState = {
    isFetching: false,
    items     : {},
    error     : ''
};
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