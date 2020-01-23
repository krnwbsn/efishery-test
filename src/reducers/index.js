import { combineReducers } from 'redux';
import list from './list.js';
import area from './area';
import size from './size';

export default combineReducers({
    list,
    area,
    size
})