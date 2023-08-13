const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
var { expressjwt: jwt } = require("express-jwt")

app.use(express.json())
app.use(morgan("dev"))

app.use(cors({
    origin: true
  }))



//Routes 
// app.use("/exercises", require("./routes/exercisesRouter.jsx"))
app.use("/local/auth", require("./routes/authRouter.jsx"))
app.use('/api', jwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/exercises', require('./routes/exercisesRouter.jsx'))
app.use("/api/comments", require("./routes/commentRouter.jsx"))
app.use("/api/public", require("./routes/publicRouter.jsx"))
app.use("/api/test", require("./routes/PublicExerciseRoute.jsx"))


//Error Handling 
app.use((err,req,res,next) =>{
    console.log(err)
    return res.send({errMsg:err.message})
  })

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to database');

        app.listen(3050, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log('Server is Successfully Running, and App is listening on port ' + 3050);
        });
    })
    .catch(err => {
        console.error(err);
    });

