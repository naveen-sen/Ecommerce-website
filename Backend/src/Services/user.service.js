const User = require("../Model/user.model.js")
const bcrypt = require("bcrypt");
const jwt = require("../config/jwt.js")

const createUser = async(user)=>{
    try{
        const {firstName,lastName,email,password} = user;

        const isUserExist = await User.findOne({email});

        if(isUserExist){
            throw new Error("User already exist",email);
        }

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);

        const newUser = await User.create({firstName,lastName,email,password})

        return newUser;
    }catch(error){
        throw new Error(error.message);
    }
}

const findUserById = async(userId)=>{
    try{
    const user = await User.findById(userId).populate("address")

        if(!user){
            throw new Error("User not found");
        }

        return user;
    }catch(error){
        throw new Error(error.message);
    }
}

const findUserByEmail = async(email)=>{
    try{
        const user = await User.findOne({email:email})

        if(!user){
            throw new Error("Email not found");
        }

        return user;
    }catch(error){
        throw new Error(error.message);
    }
}

const getUserProfileByToken = async(token)=>{
    try{
        let user = jwt.getUserIdFromToken(token)

        user = await User.findById(user)

        if(!user){
            throw new Error("User not found",user);
        }

        return user;

    }catch(error){
        throw new Error(error.message);
    }
}

const getAllUser = async()=>{
    try{
        const users = User.find();
        return users
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createUser,findUserById,findUserByEmail,getUserProfileByToken,getAllUser}