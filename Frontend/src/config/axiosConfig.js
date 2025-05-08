import axios from 'axios'

const token = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: import.meta.env.MODE==="development" ? "http://localhost:3000" : "https://thetrendycart.onrender.com",
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