const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    review:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
},{timestamps:true})

const Review = mongoose.model("reviews",ratingSchema);

module.exports = Review