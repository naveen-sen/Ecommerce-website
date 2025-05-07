import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    phone:{
        type:Number,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInfo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"payment"
        }
    ],
    rating:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    review:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],

},{timestamps:true})

const User = mongoose.model("user",userSchema)
export default User