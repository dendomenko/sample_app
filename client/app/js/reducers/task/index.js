import * as types from './../../constants/Task';
import { fromJS } from 'immutable';


const initialState = {
    items     : {},
    columns   : {},
    errors    : null,
    isFetching: false
};

const reducer = ( state = fromJS( initialState ), { type, payload } ) => {

    switch ( type ) {

        case types.FETCH_ALL_TASKS_SUCCESS:
            return state.merge( payload );

        case types.MOVE_TASK:

            return state.withMutations( record => {

                const { newType, oldType, task } = payload;

                record.updateIn( [ 'items', newType ], item => item.push( task ) );
                record.updateIn( [ 'items', oldType ], item => item.filter(
                    props => props.get( 'id' ) !== task.get( 'id' ) )
                );


            } );

        default:
            return state;
    }
};


export default reducer;