import { Map, List } from 'immutable';
import  * as types  from 'constants/project/all-projects';


const initialState = {

    items     : List( [] ),
    isFetching: false,
    error     : null

};

/**
 *
 *  TODO: Should to rework
 */

const reducer = ( state = Map( initialState ), { type, payload } ) => {

    switch ( type ) {
        case types.FETCH_PROJECTS:
            return state.update( 'isFetching', val => payload.isFetching );
//            return {
//                ...state,
//                ...payload
//            };
        case types.FETCH_PROJECTS_SUCCESS:
            return state.merge( Map( {
                isFetching: payload.isFetching,
                items     : payload.items
            } ) );
        case types.FETCH_PROJECTS_FAILURE:
            return state.merge( Map( {
                isFetching: payload.isFetching,
                error     : payload.error
            } ) );
        case types.CREATE_PROJECT:
            return {
                ...state,
                ...payload
            };
        case types.CREATE_PROJECT_SUCCESS:
            return state.merge( Map( {
                items: payload.item
            } ) );

        case types.CREATE_PROJECT_FAILURE:
            return state.merge( Map( {
                error: payload.error
            } ) );

        case      types.UPDATE_PROJECT     :
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