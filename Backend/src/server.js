import app from "./index.js"
import {connectDb} from "./config/db.js"
import { config } from "dotenv"

config()

const PORT = process.env.PORT || 5000
app.listen(PORT,async ()=>{
    console.log(` Server is running on Port ${PORT}` );
    connectDb();
    
})