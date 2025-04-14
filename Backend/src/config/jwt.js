const jwt = require("jsonwebtoken");

const JWT_SECRET = "ckuySDfafkuyjbckvaKUdw"
const generateToken = (id) => {
    const token =  jwt.sign({id}, JWT_SECRET, {
        expiresIn:"2d"
    })

    return token
}

const getUserIdFromToken = (token) => {
    try{
        const user = jwt.verify(token,JWT_SECRET)
        return user.id
    }catch(error){
        throw new Error(error.message)
    }
}

module.exports = {generateToken, getUserIdFromToken}