import axios from "axios";
import { getAccessToken } from "../util/local-storage";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
