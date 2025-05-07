import { api } from "../../config/axiosConfig"
import toast from "react-hot-toast"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./actionType"


export const getCart = ()=>async (dispatch)=>{
    dispatch({type:GET_CART_REQUEST})

    try{
        const {data}= await api.get("/api/cart/")

        dispatch({type:GET_CART_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_CART_FAILURE,payload:error.message})
    }
}

export const addItemToCart = (reqData)=>async (dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try{
        const {data}= await api.put("/api/cart/add",reqData)

        toast.success("Item added to cart")
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
    }catch(error){
        if(error.response && error.response.status === 500){
            toast.error("Login required. Please login to add items to cart.")
        } else {
            toast.error("Failed To Add")
        }
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
    }
}

export const removeCartItem = (cartItemId)=>async (dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})
    try{
        const {data} = await api.delete(`/api/cartItem/${cartItemId}`)
        toast.success("Item Removed Successfully")
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId})
    }catch(error){
        toast.error("Failed To Remove")
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
    }
}

export const updateCartItem = (reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try{
        const {data} = await api.put(`/api/cartItem/${reqData.cartItemId}`,reqData.data)
        toast.success("Item Updated Successfully")
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})
        dispatch(getCart())
    }catch(error){
        toast.error("Failed To Update")
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
    }
}
