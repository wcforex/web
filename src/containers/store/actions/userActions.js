import axios from "axios";
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_RESET,
    USER_LIST_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET,
    USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants";
import baseURL from '../url'

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

export const Signin = (userdata) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data } = await axios.post(baseURL + '/auth/login', userdata, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const signup = (userdata) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const { data } = await axios.post(baseURL + '/auth/register', userdata, config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: USER_LIST_RESET });
    // dispatch({ type: ORDER_LIST_RESET });
};

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });
        
        const { userLogin: { user} } = getState();
        const configR = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(baseURL + `/user/${id}`, configR)
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const updateUserProfile = (id, userdata) => async (dispatch, getState) => {
   try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const { userLogin: { user } } = getState();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
        },
    };

    const { data } = await axios.put(baseURL + `/user/${id}`, userdata, config);

    dispatch({
        type: USER_UPDATE_PROFILE_SUCCESS,
        payload: data,
    });
   } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
   }
}

