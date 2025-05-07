import jwt from "jsonwebtoken"
import { config } from "dotenv"

config()

const JWT_SECRET = process.env.JWT_SECRET
export const generateToken = (id) => {
    const token =  jwt.sign({id}, JWT_SECRET, {
        expiresIn:"2d"
    })

    return token
}

export const getUserIdFromToken = (token) => {
    try{
        const user = jwt.verify(token,JWT_SECRET)
        return user.id
    }catch(error){
        throw new Error(error.message)
    }
}

