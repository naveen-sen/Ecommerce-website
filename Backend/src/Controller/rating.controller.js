const ratingService = require("../Services/rating.service.js")

const createRating = async(req,res)=>{
    const user = req.user;
    try{
        const rating = await ratingService.createRating(req.body,user);
        return res.status(201).json(rating)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

const getAllRatings = async(req,res)=>{
    const productId = req.params.productId
    try{
        const ratings = await ratingService.getAllRating(productId);
        return res.status(200).json(ratings)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
module.exports = {
    createRating,
    getAllRatings
}