import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      // console.log("action.psyload -----", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
      // console.log(action.payload.data.token);
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        error: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
