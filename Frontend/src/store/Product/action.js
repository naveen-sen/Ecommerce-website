import { api } from "../../config/axiosConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./actionType";

export const findProducts = (reqData)=> async (dispatch)=>{
    const {color,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = reqData;
    dispatch({type:FIND_PRODUCTS_REQUEST})
    try{
        const {data} = await api.get(`/api/product/?color=${color}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}&category=${category}&sizes=${sizes}`)


        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})	
    }
}
export const findProductById = (productId)=>async (dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    try{
        const {data} = await api.get(`/api/product/${productId.toString()}`)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})

        

    }catch(error){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})	
    }
}

export const getProducts = (category)=>async (dispatch)=>{
    try{
        const response= await api.get(`/api/product/?category=${category}`)
        return response.data.content;
    }catch(error){
        throw error
    }
}
