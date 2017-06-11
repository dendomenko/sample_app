import { fromJS } from 'immutable';
import  * as types  from './../constants';


const initialState = {

    items     : [],
    isFetching: false,
    error     : null

};

/**
 *
 *  TODO: Should to rework
 */

const reducer = ( state = fromJS( initialState ), { type, payload } ) => {

    switch ( type ) {
        case types.FETCH_PROJECTS:
            return state.update( 'isFetching', val => payload.isFetching );
        case types.FETCH_PROJECTS_SUCCESS:
            return state.merge( payload );
        case types.FETCH_PROJECTS_FAILURE:
            return state.merge( fromJS( {
                isFetching: payload.isFetching,
                error     : payload.error
            } ) );
        case types.CREATE_PROJECT_SUCCESS:
            return state.update( 'items', items => items.push( payload.item ) );
        case types.CREATE_PROJECT_FAILURE:
            return state.udpate( 'error', error => payload.error );
        case types.UPDATE_PROJECT :
            return {
                ...state,
                ...payload
            };
        case
        types.UPDATE_PROJECT_COMPLETE
        :
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }

}
;

export default reducer;