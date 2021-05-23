import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (newUser, history) => async dispatch =>{
    try{
        await axios.post("/api/users/register", newUser);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}