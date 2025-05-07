import {createOrder,findOrderById,getOrderHistory} from "../Services/order.service.js"

export const createOrders = async(req,res)=>{
    const user = req.user
    try{
        let createdOrder = await createOrder(user,req.body)
        return res.status(200).send({createdOrder})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const findOrdersById = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        let order = await findOrderById(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

export const orderHistory = async(req,res)=>{
    const user = await req.user
    try{
        let orders = await getOrderHistory(user._id)
        return res.status(200).send({orders})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

