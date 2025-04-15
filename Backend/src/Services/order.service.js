const cartService = require("../Services/cart.service.js")
const Address = require("../Model/address.model.js")
const Order = require("../Model/order.model.js")
const User = require("../Model/user.model.js")


async function createOrder(userId,shippingAddress){
    let address

    if(shippingAddress._id){
        let isExist = await Address.findById(shippingAddress._id)
        address = isExist
    }
    else{
        address = new Address(shippingAddress)
        address.user = userId
        await address.save()

        user.addresses.push(address)
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id)
    const orderItems= []

    for(const item of cart.cartItems){
        const orderItem = new orderItems({
            product:item.product,
            size:item.size,
            quantity:item.quantity,
            price:item.price,
            discountedPrice:item.discountedPrice,
            userId:item.user._id
        })

        const createdOrderItem = await orderItem.save()
        orderItems.push(createdOrderItem)
    }

    const order = new Order({
        user:user._id,
        orderItems:orderItems,
        orderDate:new Date(),
        deliveryDate:new Date(),
        shippingAddress:address._id,
        totalPrice : cart.totalPrice,
        totalDiscountedPrice : cart.totalDiscountedPrice,
        shippingAddress:address,
    })

    const saveOrder = await order.save()

    return saveOrder
}

async function placeOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "placed"
    order.paymentDetail.status = "COMPLETED"

    await order.save()
    return order
}
async function confirmOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "CONFIRMED"
    await order.save()
    return order
}
async function shippedOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Shipped"
    await order.save()
    return order
}
async function deliveredOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Delivered"
    await order.save()
    return order
}
async function cancelOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Cancelled"
    await order.save()
    return order
}

async function findOrderById(orderId){
    const order = await Order.findById(orderId).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress")
    return order
}

async function getOrderHistory(userId){
    try{
        const orders = await Order.find({user:userId,orderStatus:"placed"}).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress").lean()

        return orders
    }catch(error){
        throw new Error(error.message)
    }
}

async function getAllOrders(){
    try{
        const orders = await Order.find().populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress").lean()
        return orders
    }catch(error){
        throw new Error(error.message)
    }
}

async function deleteOrder(orderId){
    try{
        const order = await findOrderById(orderId)
        await Order.findByIdAndDelete(order._id)
    }catch(error){
        throw new Error(error.message)
    }
}

module.exports = {
    createOrder,
    placeOrder,
    confirmOrder,
    shippedOrder,
    deliveredOrder,
    cancelOrder,
    findOrderById,
    getOrderHistory,
    getAllOrders,
    deleteOrder
}