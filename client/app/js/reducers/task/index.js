import * as types from './../../constants/Task';
import { List, Map } from 'immutable';


const initialState = Map( {} );

const reducer = ( state = initialState, { type, payload } ) => {

    switch ( type ) {
        default:
            return state;
    }
};


export default reducer;