const reviewService = require("../Services/review.service.js")

const createReview = async(req,res)=>{
    try{
        const user = req.user;
        const reqData = req.body;
        const review = await reviewService.createReview(reqData,user)
        return res.status(200).send(review)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const getAllReviews = async(req,res)=>{
    const productId = req.params.productId
    try{
        const reviews = await reviewService.getAllReview(productId)
        return res.status(200).send(reviews)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports = {
    createReview,
    getAllReviews
}