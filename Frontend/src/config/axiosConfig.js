import axios from 'axios'

export const BASE_URL = import.meta.env.MODE==="development" ? "http://localhost:3000" : "https://thetrendycart.onrender.com"

const token = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        "authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
    },
    withCredentials:true
})

api.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      console.log('API Request:', {
        url: config.url,
        method: config.method,
        baseURL: config.baseURL
      });
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );