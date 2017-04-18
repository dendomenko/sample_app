import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers/';

// const configureStore = (railsProps) => (
//     createStore(appReducer, railsProps)
// );


const configureStore = railsProps => {
    const store = createStore (
        rootReducer,
        railsProps,
        compose (
            composeWithDevTools (
                applyMiddleware (
                    thunk,
                    createLogger (),
                ),
            )
        )
    )
    return store
}


export default configureStore;
