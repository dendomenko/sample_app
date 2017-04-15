import { combineReducers } from 'redux';


const name = (state = '', action) => {
    switch (action.type) {
        case "HELLO_WORLD_NAME_UPDATE":
            return action.text;
        default:
            return state;
    }
};

const AppReducer = combineReducers({ name });

export default AppReducer;
