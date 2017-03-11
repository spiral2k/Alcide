import { combineReducers } from 'redux';
import LockInputReducer from './sidebarReducer';
import SearchReducer from './searchReducer';
import homeReducer from './homeReducer';
import inputReducer from './inputReducer';
import popupReducer from './popupReducer';

const reducers = combineReducers({
    sidebar: LockInputReducer,
    images: SearchReducer,
    home: homeReducer,
    input: inputReducer,
    popup: popupReducer
});

export default reducers;