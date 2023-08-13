const mongoose = require('mongoose')
const Schema = mongoose.Schema

const publicExerciseSchema = new Schema({
    bodyPart:String,
    equipment:String,
    gifUrl:String,
    id:String,
    name:String,
    target:String,

    likes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref:  "User"
    }],
    timestamp: {
        type: Date,
        default: Date.now,
      }
     
})

module.exports = mongoose.model("PublicExercise", publicExerciseSchema)