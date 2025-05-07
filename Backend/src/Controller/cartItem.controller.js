import {updateCartItem,removeCartItem} from "../Services/cartItem.service.js"

export const updateCartItems = async(req,res)=>{
    try{
        const updatedCartItem = await updateCartItem(req.user._id,req.params.id,req.body)
        return res.status(200).send(updatedCartItem)
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export const removeCartItems = async(req,res)=>{
    try{
        const removedCartItem = await removeCartItem(req.user._id,req.params.id)
        return res.status(200).send({message:"Item Removed Successfully"})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }
