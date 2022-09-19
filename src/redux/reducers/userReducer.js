import { Auth } from "../actionTypes/auth";

const initialState = {
  token: null,
  user: null,
  loginError: false,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Auth.LOGIN:
      const { token, user } = action.payload;
      return {
        ...state,
        token: token,
        user: user,
        loginError: false,
      };
    case Auth.LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };
    default:
      return state;
  }
};
