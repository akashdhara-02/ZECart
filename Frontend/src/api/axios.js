import axios from "axios";

// Central API instance
const api = axios.create({
  baseURL: "https://zecart.onrender.com/api",
});

// Add JWT token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
