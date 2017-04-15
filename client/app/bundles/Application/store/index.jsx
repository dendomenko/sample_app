import { createStore } from 'redux';
import appReducer from '../reducers/';

const configureStore = (railsProps) => (
    createStore(appReducer, railsProps)
);

export default configureStore;
