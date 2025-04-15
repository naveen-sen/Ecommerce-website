const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const authRouter = require("./Routes/auth.route.js")
const userRouter = require("./Routes/user.route.js")
const customerProductRouter = require("./Routes/customerProduct.route.js")
const orderRouter = require("./Routes/order.route.js")
const cartRouter = require("./Routes/cart.route.js")
const cartItemRouter = require("./Routes/cartItem.route.js")
const reviewRouter = require("./Routes/review.route.js")
const ratingRouter = require("./Routes/rating.route.js")
const adminRouter = require("./Routes/admin.route.js")
const adminProductRouter = require("./Routes/adminProduct.route.js")




app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to e-commerce backend"})
})

app.use("/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/product",customerProductRouter)
app.use("/api/order",orderRouter)
app.use("/api/cart",cartRouter)
app.use("/api/cartItem",cartItemRouter)
app.use("/api/review",reviewRouter)
app.use("/api/rating",ratingRouter)
app.use("/api/admin",adminRouter)
app.use("/api/admin/product",adminProductRouter)


module.exports = app