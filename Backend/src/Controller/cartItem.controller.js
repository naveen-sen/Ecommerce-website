const cartItemService = require("../Services/cartItem.service.js")

const updateCartItem = async(req,res)=>{
    try{
        const updatedCartItem = await cartItemService.updateCartItem(req.user._id,req.params.cartItemId,req.body)
        return res.status(200).send({updatedCartItem})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const removeCartItem = async(req,res)=>{
    try{
        const removedCartItem = await cartItemService.removeCartItem(req.user._id,req.params.cartItemId)
        return res.status(200).send({message:"Item Removed Successfully"})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

module.exports = {
    updateCartItem,
    removeCartItem
}