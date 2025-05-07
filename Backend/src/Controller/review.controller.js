import {createReview,getAllReview} from "../Services/review.service.js"

export const createReviews = async(req,res)=>{
    try{
        const user = req.user;
        const reqData = req.body;
        const review = await createReview(reqData,user)
        return res.status(200).send(review)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const getAllReviews = async(req,res)=>{
    const productId = req.params.productId
    try{
        const reviews = await getAllReview(productId)
        return res.status(200).send(reviews)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
