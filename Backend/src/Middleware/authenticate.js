import { getUserIdFromToken } from "../config/jwt.js"
import {findUserById,} from "../Services/user.service.js"

export const authenticate = async(req,res,next)=>{
    try{
        const token = req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(401).send({error:"token not found"})
        }

        const userId = getUserIdFromToken(token);
        const user = await findUserById(userId)
        req.user = user;

        next()
    }catch(error){
        return res.status(500).json({error:error.message})
    }
    
}
