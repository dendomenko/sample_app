import * as types from './../../constants/project/single';
import { Map, List } from 'immutable';

const initialState = {
    id         : null,
    name       : null,
    task_name  : null,
    description: null,
    role       : null,
    tasks      : List( [] ),
    error      : null,
    isFetching : false
};


export default ( state = Map( initialState ), { type, payload } ) => {
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
