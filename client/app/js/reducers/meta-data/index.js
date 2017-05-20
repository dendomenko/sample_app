import * as types from './../../constants/MetaData';
import { fromJS } from 'immutable';


const initialState = {
    task : {
        isFetching: false
    },
    error: null
};


const reducer = ( state = fromJS( initialState ), { type, payload } ) => {

    switch ( type ) {
        case types.GET_TASK_META_SUCCESS:
            return state.merge( payload );
        case types.GET_TASK_META_FAILURE:
            return state.merge( payload );
        default:
            return state;
    }
};


export default reducer;