import actions from "./actions";
import { DataService } from "../../config/dataService/dataService";
import { setItem, removeItem } from "../../utility/localStorageControl";

const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
} = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post("/auth/login", values);
      if (response.data.errors) {
        dispatch(loginErr(response.data.errors));
      } else {
        setItem("access_token", response.data.data.accessToken);
        setItem("refresh_token", response.data.data.refreshToken);
        setItem("loggedIn", true);
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const fbLogin = (callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      setItem("loggedIn", true);
      dispatch(loginSuccess(true));
      callback();
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const register = (values) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post("/auth/register", values);
      if (response.data.errors) {
        dispatch(loginErr("Registration failed!"));
      } else {
        dispatch(loginSuccess(response));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      removeItem("loggedIn");
      removeItem("access_token");
      removeItem("refresh_token");
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut, register, fbLogin };
