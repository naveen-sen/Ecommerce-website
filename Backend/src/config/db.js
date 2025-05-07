import mongoose from "mongoose"
import { config } from "dotenv"

config()

const mongoUrl = process.env.MONGODB_URL

export const connectDb = async ()=>{
    return await mongoose.connect(mongoUrl).then(() => console.log("DATABASE CONNECTED"))
}


