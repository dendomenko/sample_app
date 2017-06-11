import * as types from './../constants';
import { fromJS, Map } from 'immutable';

const initialState = {
    id         : null,
    name       : null,
    task_name  : null,
    description: null,
    team       : [],
    error      : null,
    isFetching : false,
    slug       : null,
    activity   : []
};

/**
 * TODO SHOULD ADD ERROR HANDLER
 * @param state
 * @param type
 * @param payload
 * @returns {any}
 */
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

        case types.FETCH_ACTIVITY_SUCCESS:
            return state.merge( payload );
        case  types.FETCH_ACTIVITY_FAILURE:
            return state.merge( payload );


        case types.REMOVE_MEMBER_SUCCESS:
            return state.update(
                'team',
                items => items.filter(
                    item => item.get( 'id' ) !== payload.id ) );

        case types.ADD_MEMBER_SUCCESS:
            return state.update( 'team', team => team.push( payload ) );

        default:
            return state;
    }
};
