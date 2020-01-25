import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from './data';
import area from './area';
import size from './size';

export default history => 
    combineReducers({
        router: connectRouter(history),
        data,
        area,
        size
});