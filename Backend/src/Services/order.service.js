import mongoose from 'mongoose'
import Address from '../Model/address.model.js'
import Order from '../Model/order.model.js'
import OrderItems from '../Model/orderItem.model.js'
import { findUserCart } from '../Services/cart.service.js'



export async function createOrder(user, shippingAddress) {
    let address;

    if (shippingAddress._id) {
        let isExist = await Address.findById(new mongoose.Types.ObjectId(shippingAddress._id)).populate("carts");
        address = isExist;
    } else {
        address = new Address(shippingAddress);
        address.user = user._id;
        await address.save();

        user.address.push(address);
        await user.save();
    }

    const cart = await findUserCart(new mongoose.Types.ObjectId(user._id));

    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItems({
            product: item.product,
            size: item.size,
            quantity: item.quantity,
            price: item.price,
            discountedPrice: item.discountedPrice,
            userId: item.userId
        });

        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem._id);
    }

    const totalItems = cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const orderDate = new Date();
    const deliveryDate  = new Date()
    deliveryDate.setDate(deliveryDate.getDate() + 7)
    const discount = cart.totalPrice - cart.totalDiscountedPrice;

    const order = new Order({
        user: user._id,
        orderItems: orderItems,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        shippingAddress: address._id,
        totalPrice: cart.totalPrice,
        discountedPrice: cart.totalDiscountedPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: discount,
        totalItems: totalItems,
        orderStatus: "PENDING"
    });

    const saveOrder = await order.save();

    return saveOrder;
}

export async function placeOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "placed"
    order.paymentDetails.status = "COMPLETED"

    await order.save()
    return order
}
export async function confirmOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "CONFIRMED"
    await order.save()
    return order
}
export async function shippedOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Shipped"
    await order.save()
    return order
}
export async function deliveredOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Delivered"
    await order.save()
    return order
}
export async function cancelOrder(orderId){
    const order = await findOrderById(orderId)
    order.orderStatus = "Cancelled"
    await order.save()
    return order
}

export async function findOrderById(orderId){
    const order = await Order.findById(orderId).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress")
    return order
}

export async function getOrderHistory(userId){
    try{
        const orders = await Order.find({user:userId}).populate("user").populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress")

        return orders
    }catch(error){
        throw new Error(error.message)
    }
}

export async function getAllOrders(){
    try{
        const orders = await Order.find().populate({path:"orderItems",populate:{path:"product"}}).populate("shippingAddress").lean()
        return orders
    }catch(error){
        throw new Error(error.message)
    }
}

export async function deleteOrder(orderId){
    try{
        const order = await findOrderById(orderId)
        await Order.findByIdAndDelete(order._id)
    }catch(error){
        throw new Error(error.message)
    }
}

