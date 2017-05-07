import { Map, List } from 'immutable';
import  * as types  from 'constants/project/all-projects';


const initialState = {

    items     : List(),
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
            return {
                ...state,
                ...payload
            };
        case types.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                ...payload
            };

        case types.FETCH_PROJECTS_FAILURE:
            return {
                ...state,
                ...payload
            };
        case types.CREATE_PROJECT:
            return {
                ...state,
                ...payload
            };
        case types.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                ...payload
//                state.getitems.push(payload.item)

            };
        case types.CREATE_PROJECT_FAILURE:
            return {
                ...state,
                ...payload
            };
        case types.UPDATE_PROJECT:
            return {
                ...state,
                ...payload
            };
        case types.UPDATE_PROJECT_COMPLETE:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }

};

export default reducer;