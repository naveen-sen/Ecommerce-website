import mongoose from 'mongoose'
import Cart from '../Model/cart.model.js'
import CartItem from '../Model/cartItem.model.js'
import Product from '../Model/product.model.js'



export const createCart = async(userId)=>{
    try{
        const cart = new Cart({user: new mongoose.Types.ObjectId(userId)})
        await cart.save()
        return cart
    }catch(error){
        throw new Error(error.message)
    }
}

export async function findUserCart(userId){
    try{

        let cart = await Cart.findOne({user:userId});

        if(!cart){
            cart = new Cart({
                user:userId,
                cartItems:[],
                totalPrice:0,
                totalItems:0,
                discount:0
            })
            await cart.save()
        }

        let cartItems = await CartItem.find({cart:cart._id}).populate("product");

        
        let totalPrice = 0
        let totalDiscountedPrice = 0
        let totalItem = 0

        for(let cartItem of cartItems){
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;	
        }
        cart.cartItems = cartItems;
        cart.totalPrice = totalPrice;
        cart.totalItems = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        await cart.save()
        return cart
    }catch(error){
        throw new Error(error.message)
    }
}

export async function addCartItem(userId,req){
    try{

        let cart = await Cart.findOne({user:new mongoose.Types.ObjectId(userId)}); 

        const product = await Product.findById(new mongoose.Types.ObjectId(req.productId))

        if(!product){
            throw new Error("Product not found")
        }

        
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
            cart.cartItems.push(createdCartItem._id)
            await cart.save()
    
            return "Item Added Successfully"
        }
        }catch(error){
            throw new Error(error.message)
    }
}

