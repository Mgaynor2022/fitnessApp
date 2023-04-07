const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    name: String,
    type: String,
    muscle: String,
    equipment: String,
    difficulty: String,

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
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
})

module.exports = mongoose.model("Exercise", exerciseSchema)