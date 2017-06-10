import * as types from './../../constants/Task';
import { fromJS } from 'immutable';


const initialState = {
    items     : [],
    errors    : null,
    isFetching: false
};

const reducer = ( state = fromJS( initialState ), { type, payload } ) => {

    switch ( type ) {

        case types.FETCH_ALL_TASKS_SUCCESS:
            return state.merge( payload );

        case types.MOVE_TASK:
            debugger;
            return state.merge( payload );

        default:
            return state;
    }
};


export default reducer;