const app = require(".");
const {connectDb} = require("./config/db.js");

const PORT = process.env.PORT || 5000
app.listen(PORT,async ()=>{
    console.log(` Server is running on Port ${PORT}` );
    connectDb();
    
})