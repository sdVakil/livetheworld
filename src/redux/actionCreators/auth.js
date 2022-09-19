import { srvAuthenticate } from "../../services/srvAuth";
import { Auth } from "../actionTypes/auth";
import { AsyncGetUserTrips } from "./activity";

export const Login = (token, user) => {
  return { type: Auth.LOGIN, payload: { token, user } };
};

export const LoginError = () => {
  return { type: Auth.LOGIN_ERROR };
};

export const AsyncLogin = (credentials) => {
  return async (dispatch) => {
    try {
      const { email, password } = credentials;
      const auth = await srvAuthenticate(email, password);
      const { jwt, user } = auth.data;
      dispatch(AsyncGetUserTrips());
      dispatch(Login(jwt, user));
    } catch (err) {
      dispatch(LoginError());
    }
  };
};
