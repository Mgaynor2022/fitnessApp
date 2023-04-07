const express = require('express')
const commentRouter = express.Router()
const Comment = require("../models/commentSchema.jsx")

// Get All Request
commentRouter.get("/", async (req, res, next) => {
    try {
        const allComments = await Comment.find({ comment: req.body.comment})
        return res.status(200).send(allComments)
    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})
// Get user Comment
commentRouter.get("/user", async (req, res, next) => {
    try {
        const userComments = await Comment.find(
            {user: req.auth._id}
        )
        return res.status(200).send(userComments)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})
// Post to Database and relating the comment to the user
commentRouter.post("/", async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newComment = new Comment(req.body)
        const saveComment = await newComment.save()
        return res.status(201).send(saveComment)

    } catch (err){
        res.status(500)
        return next(err)
    }
})
// Delete from database
commentRouter.delete("/:commentId", async (req, res, next) => {
    try {
        const deleteComment = await Comment.findByIdAndDelete(
            {_id: req.params.commentId}
        )
        return res.status(200).send(`The item ${deleteComment} was deleted`)

    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})
// Updating likes
commentRouter.put("/likes/:commentId", async (req, res, next) => {
    try {
        const result = await Comment.findByIdAndUpdate(
            {_id: req.params.exerciseId, user: req.auth._id},

           {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id}
           },
           {new: true}
        )
        return res.status(201).send(result)

    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})
//Updating dislikes
commentRouter.put("/dislikes/:commentId", async (req, res, next) => {
    try {
        const result = await Comment.findByIdAndUpdate(
            {_id: req.params.exerciseId, user: req.auth._id},

           {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id}
           },
           {new: true}
        )
        return res.status(201).send(result)
        
    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})

module.exports = commentRouter