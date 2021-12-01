import {combineReducers} from 'redux';
import mainReducer from './mainReducer';
const allReducers = combineReducers({
    mainReducer,
})

export default allReducers;