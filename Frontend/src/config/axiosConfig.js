import axios from 'axios'

export const BASE_URL = import.meta.env.MODE==="development" ? "http://localhost:5000" : import.meta.env.VITE_API_URL

const token = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        "authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
    }
})