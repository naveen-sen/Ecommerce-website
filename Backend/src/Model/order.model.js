import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    orderItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"orderItems"
        }
    ],
    orderDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },
    paymentDetails:{
        paymentMethod:{
            type:String,
        },
        transactionId:{
            type:String,
        },
        paymentId:{
            type:String
        },
        paymentStatus:{
            type:String
        },
    },
    totalPrice:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    totalItems:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:false,
        default: 0
    },
    orderStatus:{
        type:String,
        required:true
    }
},{timestamps:true})

const Order = mongoose.model("orders",orderSchema);
export default Order






