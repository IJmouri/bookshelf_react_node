import Axios from 'axios';
import jwtDecode from 'jwt-decode';
import * as Types from './types';
import setAuthToken from '../../utils/setAuthToken';

export const register = (user, history) => dispatch => {
    Axios.post('http://localhost:3000/users', user) 
    .then(res => {
        console.log(res)
        dispatch({
            type: Types.USERS_ERROR,
            payload:{
                error: {}
            }
        })
        history.push('/login')
    })
    .catch(error => {
        // console.log(error)
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}

export const login = (user, history) => dispatch => {
    Axios.post('http://localhost:3000/users/login', user)
    .then(res => {
        // console.log(res.data.token);
        let token = 'Bearer '+res.data.token
        localStorage.setItem('auth_token', token)
        setAuthToken(token);
        let decode = jwtDecode(token)
        console.log(decode);
        dispatch({
            type:Types.SET_USER,
            payload:{
                user: decode
            }
        })
        history.push('/dashboard')
    })
    .catch(error => {
        dispatch({
            type: Types.USERS_ERROR,
            payload: {
                error: error.response.data
            }
        })
    })
}

export const logout = history => {
    localStorage.removeItem('auth_token')
    history.push('/login')
    return {
        type: Types.SET_USER,
        payload: {
            user: {}
        }
    }
}