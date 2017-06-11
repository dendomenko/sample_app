import { createRequest } from './../../actions/common';
import { fromJS } from 'immutable';


export const FETCH_PROJECT_TEAM = 'FETCH_PROJECT_TEAM';
export const FETCH_PROJECT_TEAM_SUCCESS = 'FETCH_PROJECT_TEAM_SUCCESS';
export const FETCH_PROJECT_TEAM_FAILURE = 'FETCH_PROJECT_TEAM_FAILURE';

export const FETCH_INFO_ABOUT_PROJECT = 'FETCH_INFO_ABOUT_PROJECT';
export const FETCH_INFO_ABOUT_PROJECT_SUCCESS = 'FETCH_INFO_ABOUT_PROJECT_SUCCESS';
export const FETCH_INFO_ABOUT_PROJECT_FAILURE = 'FETCH_INFO_ABOUT_PROJECT_FAILURE';

const initialState = {
    isFetching : false,
    team       : [],
    infoProject: {},
    error      : ''
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
        case FETCH_INFO_ABOUT_PROJECT_SUCCESS:
            return state.merge( payload );
        default:
            return state;
    }
};


export const fetchMemberSuccess = ( payload ) => ({
    type   : FETCH_PROJECT_TEAM_SUCCESS,
    payload: fromJS( payload )
});

export const fetchInfoSuccess = ( payload ) => ({
    type   : FETCH_INFO_ABOUT_PROJECT_SUCCESS,
    payload: fromJS( {
        infoProject: payload
    } )
});

export  default reducer;