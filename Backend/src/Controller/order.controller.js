const orderService = require("../Services/order.service.js")
const userService = require("../Services/user.service.js")

const createOrder = async(req,res)=>{
    const user = req.user
    try{
        let createdOrder = await orderService.createOrder(user,req.body)
        return res.status(200).send({createdOrder})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const findOrderById = async(req,res)=>{
    const orderId = req.user
    try{
        let order = await orderService.findOrderById(orderId)
        return res.status(200).send({order})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

const orderHistory = async(req,res)=>{
    const user = req.user
    try{
        let orders = await orderService.getOrderHistory(user._id)
        return res.status(200).send({orders})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}