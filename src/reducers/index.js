import { combineReducers } from 'redux';
import LockInputReducer from './sidebarReducer';

const reducers = combineReducers({
    sidebar: LockInputReducer
});

export default reducers;