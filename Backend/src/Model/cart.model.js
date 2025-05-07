import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    cartItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems"
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0
    },
    totalItems:{
        type:Number,
        required:true,
        default:1
    },
    discountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discount:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    }
})

const Cart = mongoose.model("carts",cartSchema)
export default Cart