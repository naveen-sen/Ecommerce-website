const userService = require("../Services/user.service.js")

const getUserProfile = async(req,res)=>{
    try{
        const jwt = req.headers.authorization?.split(" ")[1];

    if(!jwt){
        return res.status(401).send({error:"Unauthorized"});
    }
    const user = await userService.getUserProfileByToken(jwt);
    return res.status(200).send({user});
    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers = async(req,res)=>{
    try{
        let users = await userService.getAllUser()
        return res.status(200).send({users})
    }catch(error){
        return res.status(500).send({error:error.message})
    }
    }

    module.exports = {getUserProfile,
        getAllUsers
    }