const mongoose = require('mongoose')
const Schema = mongoose.Schema

const publicSchema = new Schema({
    name: String,
    type: String,
    muscle: String,
    equipment: String,
    difficulty: String,
    instructions: String,

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
      },
})

module.exports = mongoose.model("Public", publicSchema)