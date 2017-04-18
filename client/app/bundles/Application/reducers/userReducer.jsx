const initialState = {
    status  : null,
    uid     : null,
    email   : null,
    name    : null,
    surname : null,
    fetch   : false,
    error   : null,
    isAuth  : false
}


export default function userReducer(state = initialState,{type,payload})
{
    return state;
}
// export default function userState ( state = initialState, { type, payload } ) {

//     switch ( type ) {

//         case USER_AUTH:
//             return {
//                 ...state,
//                 ...payload
//             }

//         case  USER_NOT_AUTH:
//             return {
//                 ...state,
//                 ...payload
//             }

//         case USER_REQUEST:
//             return {
//                 ...initialState
//             }

//         case USER_FAILURE:
//             return {
//                 ...state,
//                 ...payload
//             }

//         case USER_LOGOUT:
//             return {
//                 ...state,
//                 ...payload
//             }

//         default:
//             return state
//     }

// }