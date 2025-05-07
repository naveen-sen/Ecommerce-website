import toast from "react-hot-toast"
import { api } from "../../config/axiosConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./actionType"

export const createPayment = (orderId)=>async (dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})

    try{
        const {data} = await api.post(`/api/payment/${orderId}`,{})
    
        if(data.payment_link_url){
            window.location.href = data.payment_link_url
        }
        
    }catch(error){
        toast.error("Failed To Create Payment")
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}

export const updatePayment = (reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})

    try{
        // Fix malformed URL for update payment API call
        const {data} = await api.get(`/api/payment?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`)

        toast.success("Payment Updated Successfully")

        dispatch({type:UPDATE_PAYMENT_SUCCESS,payload:data})
    }catch(error){
        toast.error("Failed To Update Payment")
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.message})
    }
}
    