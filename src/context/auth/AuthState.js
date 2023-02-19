import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import jwtDecode from "jwt-decode";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    //    user: localStorage.getItem("user"),
    user: null,
    error: null,
    // loggedIn : localStorage.getItem('isLoggedin') || false
  };
  const localState = JSON.parse(localStorage.getItem("user"));

  const [state, dispatch] = useReducer(authReducer, localState || initialState);
  // LOAD USER
  const loadUser = async () => {
    const decoded = jwtDecode(localStorage.token);
    if (decoded.exp < Date.now() / 1000) {
      return dispatch({ type: AUTH_ERROR });
    }
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth`, {
        headers: { Authorization: localStorage.token },
        user: localStorage.getItem("user"),
      });
      const dataUser = res.data.data.user;
      localStorage.setItem("user", JSON.stringify(dataUser));
      // console.log("LOOOGGINN", res);
      dispatch({
        type: USER_LOADED,
        payload: res.data.data.user,
        // payload: res.data,
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // LOGIN USER
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/signin`,
        formData,
        config
      );
      if (res.data.status === "error") {
        return dispatch({
          type: LOGIN_FAIL,
          payload: res.data,
        });
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.message,
      });
      // enqueueSnackbar(err.message, { variant: "error" });
      // return false;
    }
  };

  // LOGIN FAILED
  const clearFailed = () => dispatch({ type: CLEAR_ERROR });

  // LOGOUT
  const logout = () => dispatch({ type: LOGOUT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        error: state.error,
        login,
        logout,
        loadUser,
        clearFailed,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
