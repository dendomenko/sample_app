import * as types from './../../constants/Team';
import { Map } from 'immutable';


export const createTeam = ( payload ) => ({
    type   : types.CREATE_TEAM_SUCCESS,
    payload: fromJS( payload )
});