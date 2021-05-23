import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import questionReducer from './questionReducer'
import questionAnswerReducer from './questionAnswerReducer'
import securityReducer from './securityReducer'

export default combineReducers({
    errors:errorReducer,
    question:questionReducer,
    questionAnswer:questionAnswerReducer,
    security: securityReducer

});