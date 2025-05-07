import {getUserProfileByToken,getAllUser} from "../Services/user.service.js"

export const getUserProfile = async(req,res)=>{
    try{
        const jwt = req.headers.authorization?.split(" ")[1];

    if(!jwt){
        return res.status(401).send({error:"Unauthorized"});
    }
    const userProfile = await getUserProfileByToken(jwt);
    return res.status(200).send(userProfile);
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}

export const getAllUsers = async(req,res)=>{
    try{
        let users = await getAllUser()
        return res.status(200).send({users})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

    