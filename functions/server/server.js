const express = require("express")
const morgan = require("morgan")
const cors =require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const taskRouter = require("./routes/taskRoute")
const authRoute = require('./routes/authRoute')

const app =express()
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("Connected to Mongoose"))
.catch((err)=>console.log(err))
//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.use('/api',taskRouter)
app.use('/api',authRoute)



const port=process.env.PORT||8080
app.listen(port,()=>console.log(`start server in port ${port}`)).addListener