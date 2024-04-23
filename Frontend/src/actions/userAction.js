import { types } from "react-alert";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
  } from "../constants/userConstants";
  import axios from "axios";
  
  // Login
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v1/user/login`,
        { email, password },
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
  // Register
  export const register = (userData) => async (dispatch) => {
    try {
      console.log("user Data",userData)
      dispatch({ type: REGISTER_USER_REQUEST });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(`/api/v1/user/new`, userData, config);
  
      console.log("Data ",data)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Load User
// Load User
export const loadUser = () => async (dispatch) => {
  try {
    
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/v1/me`);

    console.log("User Data",data)

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

//logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/user/logout`);

  dispatch({type : LOGOUT_SUCCESS})
  } catch (error) {
    dispatch({type : LOGOUT_SUCCESS , payload : error.response.data.message})
  }
}


  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };