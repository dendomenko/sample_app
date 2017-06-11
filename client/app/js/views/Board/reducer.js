import { createRequest } from './../../actions/common';
import { fromJS } from 'immutable';


export const FETCH_PROJECT_TEAM = 'FETCH_PROJECT_TEAM';
export const FETCH_PROJECT_TEAM_SUCCESS = 'FETCH_PROJECT_TEAM_SUCCESS';
export const FETCH_PROJECT_TEAM_FAILURE = 'FETCH_PROJECT_TEAM_FAILURE';


const initialState = {
    isFetching: false,
    team      : [],
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
        case FETCH_PROJECT_TEAM_SUCCESS:
            return state.merge( payload );
        default:
            return state;
    }
};


export const fetchMemberSuccess = ( payload ) => ({
    type   : FETCH_PROJECT_TEAM_SUCCESS,
    payload: fromJS( payload )
});

export  default reducer;