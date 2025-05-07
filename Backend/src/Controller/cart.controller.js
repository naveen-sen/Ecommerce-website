import {findUserCart,addCartItem} from "../Services/cart.service.js"


export const findUserCarts = async(req,res)=>{
    const user = req.user
    try{
        const cart = await findUserCart(user._id)
        return res.status(200).send(cart)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

export const addToCart = async(req,res)=>{
    const user = req.user
    try{
        const cartItem = await addCartItem(user._id,req.body)
        return res.status(200).send({cartItem})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }
    
