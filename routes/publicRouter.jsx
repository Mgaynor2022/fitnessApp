const express = require("express")
const publicRouter = express.Router()
const Public = require("../models/publicSchema.jsx")
const mongoose = require("mongoose")

//Get All public exercises
publicRouter.get("/", async (req,res,next) => {
    try {
        const allPublic = await Public.find({exercise: req.body.exercise})
        return res.status(200).send(allPublic)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

//Get by type of exercise 
publicRouter.get("/search/type", async (req, res, next) => {
    try {
        const searchFilter = await Public.find({type: req.query.type})
        return res.status(200).send(searchFilter)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})


publicRouter.post("/", async (req,res,next) => {
    try {
            const publicExercise = new Public(req.body)
            const savePublicExercise = await publicExercise.save()
            return res.status(201).send(savePublicExercise)
    }
        catch(err){
            res.status(500)
            return next(500)
        }
})

// Liking public exercises
publicRouter.put("/likes/:publicId", async (req,res,next) => {
    try {
        const updateLikes = await Public.findByIdAndUpdate(
            {_id: req.params.publicId, user: req.auth._id},
            {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id},
            },
            {new: true}
        )
        console.log(updateLikes)
        return res.status(201).send(updateLikes)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})
// Disliking public exercises
publicRouter.put("/dislikes/:publicId", async (req,res,next) => {
    try {
        const updateDislikes = await Public.findByIdAndUpdate(
            {_id: req.params.publicId, user: req.auth._id},
            {
                $addToSet: {dislikes: req.auth._id},
                $pull: {likes: req.auth._id},
            },
            {new: true}
        )
        return res.status(201).send(updateDislikes)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})
module.exports = publicRouter