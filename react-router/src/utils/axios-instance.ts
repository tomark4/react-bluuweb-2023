import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = JSON.parse(localStorage.getItem("@state") || "{}");
    if (state.accessToken) {
      config.headers["Authorization"] = `Bearer ${state.accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
