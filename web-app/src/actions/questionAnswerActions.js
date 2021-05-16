import axios from 'axios';
import { GET_ERRORS } from './types';

export const addQuestionAnswer = (question_id, question_answer, history) => async dispatch =>{
    try{
    await axios.post(`/api/answers/${question_id}`,question_answer)
    history.push("/admin-dashboard")
    dispatch({type: GET_ERRORS, payload:{}})
    } catch(err){
        dispatch({type: GET_ERRORS, payload: err.response.data})
    }   
}