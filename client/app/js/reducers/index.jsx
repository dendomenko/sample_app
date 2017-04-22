import {routerReducer as routing, createReducer} from "react-router-redux";
import {combineReducers} from "redux";
// import appState from "./appState"; import mapState from "./mapState"; import
// apartmentState from "./apartmentState"; import userState from "./userState";
// import compareState from "./compareState";
const user = {
    status: 'none'
};
const rootReducer = combineReducers({user, routing});

export default rootReducer;

// import {fromJS} from 'immutable'; import {combineReducers} from
// 'redux-immutable'; import {LOCATION_CHANGE} from 'react-router-redux'; const
// routeInitialState = fromJS({locationBeforeTransitions: null}); function
// routeReducer(state = routeInitialState, {type, payload}) {     switch (type)
// {         case LOCATION_CHANGE:             return
// state.merge({locationBeforeTransitions: payload});         default:   return
// state;     } } export default function createReducer() {     return
// combineReducers({route: routeReducer}); }