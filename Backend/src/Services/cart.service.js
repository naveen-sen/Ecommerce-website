const Cart = require('../Model/cart.model.js')	
const createCart = async(user)=>{
    try{
        const cart = new Cart({user})
    await cart.save()
    return cart
    }catch(error){
        throw new Error(error.message)
    }
}

async function findUserCart(userId){
    try{
        let cart = await Cart.findOne({user:user});

        let cartItems = await CartItem.find({cart:cart._id}).populate("product");

        cart.cartItems = cartItems;

        let totalPrice = 0
        let totalDiscountedPrice = 0
        let totalItem = 0

        for(let cartItem of cart.cartItems){
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;	
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart
    }catch(error){
        throw new Error(error.message)
    }
}

async function addCartItem(userId,req){
    try{
        const cart = await Cart.findOne({user:userId}); 
        const product = await Product.findOne(req.productId)

        const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId})

        if(!isPresent){
            const cartItem = await CartItem.create({
                product:product._id,
                cart:cart._id,
                userId,
                quantity:1,
                price:product.price,
                discountedPrice:product.discountedPrice
            })

            const createdCartItem = await cartItem.save()
            cart.cartItems.push(createdCartItem)

            await cart.save()
            return "Item Added Successfully"
        }
        }catch(error){
            throw new Error(error.message)
    }
}

module.exports = {
    createCart,findUserCart,addCartItem
}
