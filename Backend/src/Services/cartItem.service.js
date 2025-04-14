const userService = require("../Services/user.service.js")

async function updateCartItem(userId,cartItemId,cartItemData){
    try{
        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error("Item not found",cartItemId);
        }
        const user = await userService.findUserById(item.userId)

        if(!user){
            throw new Error("User not found",userId);

            if(user._id === userId.toString){
                item.quantity = cartItemData.quantity
                Item.price = Item.quantity*item.product.price
                item.discountedPrice = item.quantity*item.product.discountedPrice
                const updatedCartItem = await item.save()
                return updatedItem
            }
        }
    }catch(Error){
        throw new Error(error.message);
    }
}