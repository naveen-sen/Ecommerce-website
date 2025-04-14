const express = require('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const authRouter = require("./Routes/auth.route.js")
const userRouter = require("./Routes/user.route.js")



app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to e-commerce backend"})
})

app.use("/auth",authRouter)
app.use("/api/user",userRouter)


module.exports = app