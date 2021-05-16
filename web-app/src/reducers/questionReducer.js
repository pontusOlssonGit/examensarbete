import { DELETE_QUESTION, GET_QUESTION, GET_QUESTIONS, GET_QUESTIONS_CATEGORY } from '../actions/types';

const initialState = {
    questions: [],
    question: {}
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_QUESTIONS:
            return {
                ...state,
                questions:action.payload
            };
        case GET_QUESTIONS_CATEGORY:
            return{
                ...state,
                questions:action.payload
            }
        case GET_QUESTION:
            return{
                ...state,
                question:action.payload
            };
        case DELETE_QUESTION:
            return{
                ...state,
                questions:state.questions.filter(question => question.id !== action.payload)
            }
        default:
            return state;
    }
}