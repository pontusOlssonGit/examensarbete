import {GET_QUESTION_ANSWERS, DELETE_QUESTION_ANSWER} from '../actions/types'


const initialState = {
    questionAnswers: [],
    questionAnswer: {}
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_QUESTION_ANSWERS:
            return {
                ...state,
                questionAnswers:action.payload
            };
        case DELETE_QUESTION_ANSWER:
            return{
                ...state,
                questionAnswers:state.questionAnswer.filter(questionAnswer => questionAnswer.id !== action.payload)
            };
        default:
            return state;
    }
}