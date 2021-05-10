import axios from 'axios';
import { GET_ERRORS } from './types';

export const createQuestion = (question, history) => async dispatch => {
    try{
        const res = await axios.post("http://localhost:8080/api/question", question)
        history.push("/admin-dashboard")
    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}