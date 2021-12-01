import {combineReducers} from 'redux';
import mainReducer from './mainReducer';
import userReducer from './userReducer';
const allReducers = combineReducers({
    mainReducer,
    userReducer,
})

export default allReducers;