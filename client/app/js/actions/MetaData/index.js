import * as types from './../../constants/MetaData';
import { fromJS } from 'immutable';

export const getTaskMetaSuccess = ( payload ) => ({
    type   : types.GET_TASK_META_SUCCESS,
    payload: {
        task: fromJS( {
            ...payload,
            isFetching: true
        } ),
    }
});

