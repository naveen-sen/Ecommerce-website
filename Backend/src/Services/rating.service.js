import Rating from "../Model/rating.model.js"
import {findProductById} from "./product.service.js"

export async function createRating(reqData,user){
    const product = await findProductById(reqData.productId);

    const rating = new Rating({
        product:product._id,
        user:user._id,
        rating:reqData.rating,
        createdAt:new Date()
    })

    return await rating.save()
}

export async function getAllRating(productId){
    return await Rating.find({product:productId._id}).populate("user").lean()
}