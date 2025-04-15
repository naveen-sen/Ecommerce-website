const userService = require("../Services/user.service.js")

async function updateCartItem(userId,cartItemId,cartItemData){
    try{
        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error("Item not found",cartItemId);
        }

        const user = await userService.findUserById(item.userId)

        if(!user){
            throw new Error("User not found",userId)
            if(user._id === userId.toString){
                item.quantity = cartItemData.quantity
                item.price = item.quantity*item.product.price
                item.discountedPrice = item.quantity*item.product.discountedPrice
                const updatedCartItem = await item.save()
                return updatedItem
            }
        }
    }catch(error){
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem = await findCartITemById(cartItemId);
    const user = await userService.findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("You Can't Remove")
}

async function findCartItemById(cartItemId){
    const cartItem = await findCartItemById(cartItemId);

    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("Item not found")
    }
}

module.exports ={
    updateCartItem,
    removeCartItem,
    findCartItemById
} 