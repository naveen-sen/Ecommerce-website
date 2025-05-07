import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
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
    sizes:[
        {
            name:{type:String},
            quantity:{type:Number}
        }
    ],
    imageUrl:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
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

    const Product = mongoose.model("products",productSchema)
    export default Product