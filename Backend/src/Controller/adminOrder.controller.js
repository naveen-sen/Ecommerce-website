import {getAllOrders,confirmOrder,shippedOrder,deliveredOrder,cancelOrder,deleteOrder} from "../Services/order.service.js"

export const getAllOrder = async(req,res)=>{
    try{
        let orders = await getAllOrders()
        return res.status(200).send({orders})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const confirmOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = confirmOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const shippedOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = shippedOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const deliverOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = deliveredOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const cancelOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = cancelOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const deleteOrders = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = deleteOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
