import User from '../Model/user.model.js'
import bcrypt from 'bcrypt'
import {getUserIdFromToken} from '../config/jwt.js'

export const createUser = async(user)=>{
    try{
        let {firstName,lastName,email,password} = user;

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

export const findUserById = async(userId)=>{
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

export const findUserByEmail = async(email)=>{
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

export const getUserProfileByToken = async(token)=>{
    try{
        let user = getUserIdFromToken(token)

        user = await User.findById(user).populate("address")

        if(!user){
            throw new Error("User not found",user);
        }

        return user;

    }catch(error){
        throw new Error(error.message);
    }
}

export const getAllUser = async()=>{
    try{
        const users = User.find();
        return users
    }catch(error){
        throw new Error(error.message);
    }
}
