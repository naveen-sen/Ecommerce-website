import {findUserById} from "../Services/user.service.js"
import CartItem from '../Model/cartItem.model.js'

export async function updateCartItem(userId,cartItemId,cartItemData){
    try{
        let item = await CartItem.findById(cartItemId).populate("product");
        
        if(!item){
            throw new Error("Item not found",cartItemId);
        }

        const user =  await findUserById(item.userId)

        if(!user){
            throw new Error("User not found",userId)
        }
            if(user._id.toString() === userId.toString()){
                item.quantity = cartItemData.quantity
                item.price = item.quantity*item.product.price
                item.discountedPrice = item.quantity*item.product.discountedPrice
                const updatedCartItem = await item.save()
                return updatedCartItem 
            }
        }catch(error){
            throw new Error(error.message)
        }
    }
    


export async function removeCartItem(userId,cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
        return await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("You Can't Remove")
}

export async function findCartItemById(cartItemId){
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("Item not found")
    }
}
