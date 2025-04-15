const Rating = require("../Model/rating.model.js")
const productService = require("./product.service.js")

async function createRating(reqData,user){
    const product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        product:product._id,
        user:user._id,
        rating:reqData.rating,
        createdAt:new Date()
    })

    return await rating.save()
}

async function getAllRating(productId){
    return await Rating.find({product:product._id}).populate("user").lean()
}

module.exports = {
    createRating,
    getAllRating
}