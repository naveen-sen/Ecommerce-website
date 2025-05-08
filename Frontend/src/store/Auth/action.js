import axios from "axios"
import toast from "react-hot-toast"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const registerRequest = ()=>({type:REGISTER_REQUEST});
const registerSuccess = (user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure = (error)=>({type:REGISTER_FAILURE,payload:error});

const BaseUrl = import.meta.env.MODE==="development" ?"http://localhost:3000" : "/"

export const register = (userData)=>async (dispatch)=>{
    dispatch(registerRequest())
    try{
        const response = await axios.post(`${BaseUrl}/auth/signup`,userData)
        const user = response.data;
        if(user?.token){
            localStorage.setItem("jwt",user.token)

            await dispatch(getUser(user.token))
        }
        
        toast.success("Registered Successfully")
        dispatch(registerSuccess(user));
        return user
        
    }catch(error){
        const errorMessage=error.response?.data?.error
        toast.error(errorMessage)
        dispatch(registerFailure(errorMessage))

    }
}

const loginRequest = ()=>({type:LOGIN_REQUEST});
const loginSuccess = (user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure = (error)=>({type:LOGIN_FAILURE,payload:error.message});

export const login = (userData)=>async (dispatch)=>{
    dispatch(loginRequest())
    try{
        const response = await axios.post(`${BaseUrl}/auth/signin`,userData)
        const user = response.data;
        if(user?.token){
            localStorage.setItem("jwt",user.token)
            await dispatch(getUser(user.token))
        }

        toast.success("Logged In Successfully")
        dispatch(loginSuccess(user)); 
        return user
    }catch(error){
        const errorMessage = error.response?.data?.error || "Login failed"
        toast.error(errorMessage)
        dispatch(loginFailure(errorMessage))
    }
}


const getUserRequest = ()=>({type:GET_USER_REQUEST});
const getUserSuccess = (user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure = (error)=>({type:GET_USER_FAILURE,payload:error.message});
export const getUser = (token)=>async (dispatch)=>{
    dispatch(getUserRequest())
    try{

        const authToken = token || localStorage.getItem("jwt")

        if(!authToken){
            toast.error("No AuthenticationToken not found")
            throw new Error("No AuthenticationToken not found")	
        }
        const response = await axios.get(`${BaseUrl}/api/user/profile`,{
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })

        const user = response.data;
        
        dispatch(getUserSuccess (user)); 
        return user
    }catch(error){
        toast.error("Internal Server Error")
        dispatch(getUserFailure(error.message))
    }
}

export const logout = ()=>async (dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    toast.success("Logout Successful")
}