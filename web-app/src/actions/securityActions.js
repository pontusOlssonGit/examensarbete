import axios from 'axios';
import setToken from '../utils/setToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwtDecode from 'jwt-decode';

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

export const login = (loginReq,history) => async dispatch => {

    try{
        const res = await axios.post("/api/users/login", loginReq);
        const {token} = res.data;

        localStorage.setItem("token",token);
        setToken(token);
        const decodedToken = jwtDecode(token);
        dispatch({
            type: SET_CURRENT_USER,
            payload: decodedToken
        });
        history.push("/category-view")
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const logout = () => dispatch =>{
    localStorage.removeItem("token");
    setToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}