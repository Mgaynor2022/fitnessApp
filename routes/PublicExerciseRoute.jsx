const express = require("express")
const publicExercisesRouter = express.Router()
const PublicExercise = require("../models/PublicExerciseSchema.jsx")
const mongoose = require("mongoose")



//Get All
publicExercisesRouter.get("/", async (req, res, next) => {
    try {
        const allExercises = await PublicExercise.find({ exercise: req.body.exercise})
        return res.status(200).send(allExercises)
    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})

//Get by bodyPart of exercise 
publicExercisesRouter.get("/search/bodyPart", async (req, res, next) => {
    try {
        const searchFilter = await PublicExercise.find({bodyPart: req.query.bodyPart})
        return res.status(200).send(searchFilter)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})
publicExercisesRouter.get("/search/name", async (req, res, next) => {
    try {
        const searchName = await PublicExercise.find({name: req.query.name})
        return res.status(200).send(searchName)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

// Post a exercise
publicExercisesRouter.post("/", async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newExercise = new PublicExercise(req.body)
        const saveExercise = await newExercise.save()
        return res.status(201).send(saveExercise)
    } 
        catch (err){
        res.status(500)
        return next(err)
    }
})

// Update post 
publicExercisesRouter.put("/:exerciseId", async (req, res, next) => {
    try {
        const updatedExercise = await PublicExercise.findOneAndUpdate(
            {_id: req.params.exerciseId},
            {user: req.auth._id},
            {...req.body, user: req.auth._id}, //updates the object and bring in everything within the object
            {new: true} // sends back the updated version 
        )
        return res.status(200).send(updatedExercise)
    }
        catch(err){
            res.status(500)
            return next(err)
        }
})

// Updating exercise likes 
publicExercisesRouter.put("/likes/:exerciseId", async (req, res, next) => {
    try {
        const updatedLikes = await PublicExercise.findByIdAndUpdate(
            {_id: req.params.exerciseId, user: req.auth._id},
            // {user: req.auth._id},
            {
                $addToSet: {likes: req.auth._id},
                $pull: {dislikes: req.auth._id},
            },
            {new: true}
        )
        console.log(req.auth._id)
        console.log(updatedLikes, "Text Likes")
        return res.status(201).send(updatedLikes)

    } 
        catch (err){
            res.status(500)
            return next(err)
    }
})

// DisLiking a exercise post 
publicExercisesRouter.put("/dislikes/:exerciseId", async (req, res, next) => {
    try {
        const result = await PublicExercise.findByIdAndUpdate(
            {_id: req.params.exerciseId, user: req.auth._id},
            // {user: req.body.auth_id},
            {
                $addToSet: {dislikes: req.auth._id},
                $pull: {likes: req.auth._id},
            },
            {new: true}
        )
        console.log(result, "Text Likes")
        return res.status(201).send(result)

    } catch (err){
        res.status(500)
        return next(err)
    }


})


module.exports = publicExercisesRouter