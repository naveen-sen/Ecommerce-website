const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    discountPercent:{
        type:Number,
        required:true    
    },
    quantity:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    size:[
        {
            name:{type:String},
            quantity:{type:Number}
        }
    ],
    imageUrl:{
        type:String,
    },
    ratings:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId,ref:"ratings"},
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],

    },{timestamps:true})

    const Product = mongoose.model("product",productSchema)
    module.exports = Product