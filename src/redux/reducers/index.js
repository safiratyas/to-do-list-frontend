import { combineReducers } from 'redux';
import { getListUserReducer } from './getUser';
import { getlistIdReducer } from './getList';
import { getCreateListReducer } from './createList';

export default combineReducers({
    getListUserReducer,
    getlistIdReducer,
    getCreateListReducer
});