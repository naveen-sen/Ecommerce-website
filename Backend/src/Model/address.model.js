import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },

    pincode:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    phone:{
        type:String,
        required:true
    }
})

const Address = mongoose.model("addresses",addressSchema)
export default Address
