import axios from "axios";
import { store } from "../redux/store";

const api = axios.create({
  baseURL: "https://ltw-cms-stg.herokuapp.com",
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (store.getState().user.token !== null)
      config.headers.Authorization = `Bearer ${store.getState().user.token}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
