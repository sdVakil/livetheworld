import api from "../api/api";

export const srvAuthenticate = (email, password) => {
  return api.post("/auth/local", {
    identifier: email,
    password: password,
  });
};
