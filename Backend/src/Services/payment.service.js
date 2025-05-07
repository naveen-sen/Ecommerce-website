import razorpay from '../config/razorpayClient.js'
import {findOrderById} from '../Services/order.service.js'
import * as orderService from './order.service.js'

export const createPaymentLink = async(orderId)=>{
    try{
        const order = await findOrderById(orderId)

        if(!order){
            throw new Error("Order not found")
        }

        if(!order.user){
            throw new Error("User information missing in order")
        }

        const { firstName, lastName, phone, email } = order.user;

        if(!lastName || !email){
            throw new Error("Incomplete user information: lastName and email are required")
        }

        const paymentLinkRequest={
            amount:order.totalDiscountedPrice*100,
            currency:"INR",
            customer:{
                name:(firstName ? firstName : "") + " " + lastName,
                contact:phone ? phone : "",
                email:email
            },
            notify:{
                sms:true,
                email:true
            },
            reminder_enable:true,
            callback_url:`http://localhost:5173/payment-success/${orderId}`,callback_method:"get"
        }

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest)

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url,
            status: paymentLink.status
        }
        return resData
    }catch(error){
        throw new Error(error.message)
    }
    
}

export const updatePaymentInfo = async (reqData)=>{
    const paymentId = reqData.payment_id;
    const orderId = reqData.order_id;

    if(!paymentId || !orderId){
        throw new Error("Missing payment_id or order_id")
    }

    try{
        const order = await orderService.findOrderById(orderId)
        const payment = await razorpay.payments.fetch(paymentId)

        if(payment.status==="captured"){
            order.paymentDetails.paymentId = paymentId
            order.paymentDetails.status = "COMPLETED"
            order.orderStatus = "PLACED"
            await order.save()
        }

        const resData = {message:"Your order is placed",success:true}
        return resData
    }catch(error){
        throw new Error(error.message)
    }
}

