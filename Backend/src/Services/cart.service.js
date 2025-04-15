const Cart = require('../Model/cart.model.js')	
const CartItem = require('../Model/cartItem.model.js')
const Product = require('../Model/product.model.js')
const mongoose = require('mongoose')



const createCart = async(userId)=>{
    try{
        console.log('user:', userId);
        console.log('typeof user:', typeof userId);

        const cart = new Cart({user: new mongoose.Types.ObjectId(userId)})
        console.log('cart:', cart);
    await cart.save()
    return cart
    }catch(error){
        throw new Error(error.message)
    }
}

async function findUserCart(userId){
    try{

        console.log('userId:', userId);
        console.log('typeof userId:', typeof userId);

        let cart = await Cart.findOne({user:userId});

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
        cart.totalItems = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart
    }catch(error){
        throw new Error(error.message)
    }
}

async function addCartItem(userId,req){
    try{

        console.log('userId:', userId);
        console.log('typeof userId:', typeof userId);

        let cart = await Cart.findOne({user:new mongoose.Types.ObjectId(userId)}); 

        const product = await Product.findById(new mongoose.Types.ObjectId(req.productId))

        if(!product){
            throw new Error("Product not found")
        }

        
        console.log(userId);
        
        const isPresent = await CartItem.findOne({cart:cart._id,product:product._id,userId:new mongoose.Types.ObjectId(userId)})

        if(!isPresent){
            const cartItem = new CartItem({
                product:product._id,
                cart:cart._id,
                userId,
                quantity:1,
                price:product.price,
                discountedPrice:product.discountedPrice,
                size:req.size
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
