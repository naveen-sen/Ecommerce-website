import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import {connectDb} from "./src/config/db.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const _dirname = path.resolve()

const corsOptions = {
    origin:['http://localhost:5173'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



import authRouter from "./src/Routes/auth.route.js"
import userRouter from "./src/Routes/user.route.js"
import customerProductRouter from "./src/Routes/customerProduct.route.js"
import orderRouter from "./src/Routes/order.route.js"
import cartRouter from "./src/Routes/cart.route.js"
import cartItemRouter from "./src/Routes/cartItem.route.js"
import reviewRouter from "./src/Routes/review.route.js"
import ratingRouter from './src/Routes/rating.route.js'
import adminRouter from "./src/Routes/admin.route.js"
import adminProductRouter from "./src/Routes/adminProduct.route.js"
import productRouter from "./src/Routes/product.route.js"
import paymentRouter from "./src/Routes/payment.route.js"


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
app.use("/api/product/",productRouter)

app.use("/api/payment",paymentRouter) 

if(process.env.NODE_ENV=="production"){
    app.use(express.static(path.join(_dirname,"../Frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(_dirname,"../Frontend","dist","index.html"))
    })
}



app.listen(PORT,async ()=>{
    console.log(` Server is running on Port ${PORT}` );
    connectDb();
    
})