const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
var { expressjwt: jwt } = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

app.use(cors({
    origin: true
  }))

mongoose.connect('mongodb://localhost:27017/fitnessData',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//Routes 
// app.use("/exercises", require("./routes/exercisesRouter.jsx"))
app.use("/auth", require("./routes/authRouter.jsx"))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/exercise', require('./routes/exercisesRouter.jsx'))
app.use("/api/comments", require("./routes/commentRouter.jsx"))
app.use("/api/public", require("./routes/publicRouter.jsx"))

//Error Handling 
app.use((err,req,res,next) =>{
    console.log(err)
    return res.send({errMsg:err.message})
  })

  app.listen(3050, () => {
    console.log("Server Is Running")
})