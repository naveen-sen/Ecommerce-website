const orderService = require("../Services/order.service.js")

const getAllOrders = async(req,res)=>{
    try{
        let orders = await orderService.getAllOrders()
        return res.status(200).send({orders})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const confirmOrder = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = orderService.confirmOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const shippedOrder = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = orderService.shippedOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const deliverOrder = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = orderService.deliverOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const cancelOrder = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = orderService.cancelOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const deleteOrder = async(req,res)=>{
    const orderId = req.params.orderId
    try{
        const order = orderService.deleteOrder(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports = {
    getAllOrders,
    confirmOrder,
    shippedOrder,
    deliverOrder,
    cancelOrder,
    deleteOrder
}
