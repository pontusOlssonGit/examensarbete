import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import questionReducer from './questionReducer'

export default combineReducers({
    errors:errorReducer,
    question:questionReducer
});