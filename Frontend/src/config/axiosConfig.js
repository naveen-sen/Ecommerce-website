import axios from 'axios'

export const BASE_URL = "http://localhost:5000"

const token = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL: import.meta.env.MODE === "development" ? BASE_URL : "/",
    headers:{
        "authorization":`Bearer ${token}`,
        "Content-Type":"application/json"
    }
})