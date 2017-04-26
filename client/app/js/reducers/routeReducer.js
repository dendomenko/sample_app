import {Map} from 'immutable';
import {LOCATION_CHANGE, INIT} from 'react-router-redux';
const initialState = {
    locationBeforeTransitions: null,
    current_location: null
};

const routeReducer = (state = Map(initialState), {type, payload}) => {

    // debugger;
    if (type === LOCATION_CHANGE) {
        console.log(payload);
        return state.merge({locationBeforeTransitions: payload});
    }
    if (type == INIT) {
        console.log(payload);
        return state.merge({locationBeforeTransitions: payload});
    }
    return state;
};

export default routeReducer;