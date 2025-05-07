import {createUser,findUserByEmail} from "../Services/user.service.js"
import {generateToken} from "../config/jwt.js"
import bcrypt from "bcrypt"
import {createCart} from "../Services/cart.service.js"

export const signup = async(req,res)=>{
    try{

        if (!req.body || !req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password) {
            return res.status(400).json({
                error: "Missing required fields: FirstName, LastName, Email, Password"
            });
        }

        const { firstName, lastName, email, password } = req.body;
        
        const user = await createUser({
            firstName,
            lastName,
            email,
            password
        })
        const token = generateToken(user._id)

        await createCart(user._id)

        return res.status(201).send({user,token})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

export const signin = async(req,res)=>{
    const {email,password} = req.body
    try{
        let existingUser = await findUserByEmail(email)

        if(!existingUser){
            return res.status(400).json({error:"User not found"})
        }

        const isPasswordValid = await bcrypt.compare(password,existingUser.password)

        if(!isPasswordValid){
            return res.status(400).json({error:"Invalid Credentials"})
        }

        const token = generateToken(existingUser._id)

        return res.status(200).send({existingUser,token})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}
