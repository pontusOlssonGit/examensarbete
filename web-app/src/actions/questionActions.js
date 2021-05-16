import axios from 'axios';
import {GET_ERRORS, GET_QUESTIONS, GET_QUESTION, DELETE_QUESTION, GET_QUESTIONS_CATEGORY} from './types';

export const createQuestion = (question, history) => async dispatch => {
    try {
        await axios.post("/api/question", question)
        history.push("/admin-dashboard")
        dispatch({type: GET_ERRORS, payload:{}})
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err.response.data})
    }
}
export const getQuestions = () => async dispatch => {
    const res = await axios.get("/api/question/all")
    dispatch({type: GET_QUESTIONS, payload: res.data})
}
export const getQuestionsCategory = (category) => async dispatch => {

    const res = await axios.get(`/api/question/all/${category}`)
    dispatch({type: GET_QUESTIONS_CATEGORY, payload: res.data})
    
}
export const getQuestion = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/question/${id}`)
        dispatch({type: GET_QUESTION, payload: res.data});
    } catch (err) {
        history.push("/admin-dashboard")
    }
}
export const deleteQuestion = id => async dispatch =>{

    if(window.confirm("Are you sure you want to delete the question?")){
        await axios.delete(`/api/question/delete/${id}`)
        dispatch({type: DELETE_QUESTION, payload: id})
    }
 
    
} 