import { api } from "../../config/axiosConfig"
import toast from "react-hot-toast"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS } from "./actionType"



export const createOrder = (reqData)=>async (dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST})

    try{
        const {data} = await api.post("/api/order/",reqData.address)

        if(data && data.createdOrder){
            reqData.navigate({search:`step=2&orderId=${data.createdOrder._id}`})
        }
        toast.success("Address Saved Successfully")
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})

    }catch(error){
        toast.error("Failed To Create Order")
        dispatch({type:CREATE_ORDER_FAILURE,payload:error.message})
    }
}
export const getOrderById = (orderId)=>async (dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST})

    try{
        const {data} = await api.get(`/api/order/${orderId}`)

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})

    }catch(error){
        toast.error("Failed to Get Order")
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error.message})
    }
}
export const getOrderHistory = ()=>async (dispatch)=>{
    dispatch({type:GET_ORDER_HISTORY_REQUEST})

    try{
        const {data} = await api.get(`/api/order/user`)

        console.log("Data",data)

        dispatch({type:GET_ORDER_HISTORY_SUCCESS,payload:data})

    }catch(error){
        toast.error("Failed to Get Order History")
        dispatch({type:GET_ORDER_HISTORY_FAILURE,payload:error.message})
    }
    }