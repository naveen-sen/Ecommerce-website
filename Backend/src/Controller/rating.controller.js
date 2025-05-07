import {createRating,getAllRating} from "../Services/rating.service.js"

export const createRatings = async(req,res)=>{
    const user = req.user;
    try{
        const rating = await createRating(req.body,user);
        return res.status(201).json(rating)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const getAllRatings = async(req,res)=>{
    const productId = req.params.productId
    try{
        const ratings = await getAllRating(productId);
        return res.status(200).json(ratings)
    }catch(error){
        return res.status(500).json({message:error.message})
    }
}
