// mongoUrl = "mongodb+srv://naveennapit:rJoxeflFfhJFLX4l@cluster0.zgm40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require('mongoose')

// Oxo550d8V1vMP4rY

mongoUrl = "mongodb+srv://naveennapit:Oxo550d8V1vMP4rY@cluster0.e7s0nlc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = async ()=>{
    return await mongoose.connect(mongoUrl).then(console.log("DATABASE CONNECTED"))
}

module.exports = {connectDb}
