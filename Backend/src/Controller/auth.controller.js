const userService = require("../Services/user.service.js")
const jwt = require("../config/jwt.js")
const bcrypt = require("bcrypt")
const cartService = require("../Services/cart.service.js")

const signup = async(req,res)=>{
    try{

        if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
            return res.status(400).json({
                error: "Missing required fields: firstName, lastName, email, password"
            });
        }

        const { firstName, lastName, email, password } = req.body;

        console.log(req.headers['content-type'])
        
        const user = await userService.createUser({
            firstName,
            lastName,
            email,
            password
        })
        const token = jwt.generateToken(user._id)

        await cartService.createCart(user._id)

        return res.status(201).send({user,token})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const signin = async(req,res)=>{
    const {email,password} = req.body
    try{
        let existingUser = await userService.findUserByEmail(email)

        if(!existingUser){
            return res.status(404).send({error:"User not found"})
        }

        const isPasswordValid = await bcrypt.compare(password,existingUser.password)

        if(!isPasswordValid){
            return res.status(401).send({error:"Invalid password"})
        }

        const token = jwt.generateToken(existingUser._id)

        return res.status(200).send({existingUser,token})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports = {signup,signin}