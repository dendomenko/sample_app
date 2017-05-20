import * as types from './../constants';
import { fromJS, Map } from 'immutable';

const initialState = {
    id         : null,
    name       : null,
    task_name  : null,
    description: null,
    tasks      : [],
    team       : [],
    error      : null,
    isFetching : false,
    slug       : null
};


export default ( state = fromJS( initialState ),
                 { type, payload } ) => {
    switch ( type ) {
        case types.FETCH_PROJECT:
            return state.merge( Map( {
                isFetching: false
            } ) );
        case  types.FETCH_PROJECT_SUCCESS:
            return state.merge( payload );
        case types.FETCH_PROJECT_FAILURE:
            return state.merge( payload );
        default:
            return state;
    }
};
