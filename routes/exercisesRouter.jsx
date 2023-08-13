const express = require("express")
const exercisesRouter = express.Router()
const Exercise = require("../models/exerciseSchema.jsx")
const mongoose = require("mongoose")

//Get All
exercisesRouter.get("/", async (req, res, next) => {
    try {
        const allExercises = await Exercise.find({ exercise: req.body.exercise})
        return res.status(200).send(allExercises)
    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})
// Get user exercises 
exercisesRouter.get("/user", async (req, res, next) => {
    try {
        const userExercises = await Exercise.find(
            {user: req.auth._id}
        )
        return res.status(200).send(userExercises)

    } catch(err){
        res.status(500)
        return next(err)
    }
})     
// Post a exercise
exercisesRouter.post("/", async (req, res, next) => {
    try {
        req.body.user = req.auth._id
        const newExercise = new Exercise(req.body)
        const saveExercise = await newExercise.save()
        return res.status(201).send(saveExercise)
        
    } 
        catch (err){
        res.status(500)
        return next(err)
    }
   
})
// Update post 
exercisesRouter.put("/:exerciseId", async (req, res, next) => {
    try {
        const updatedExercise = await Exercise.findOneAndUpdate(
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
//Deleting exercise from database
exercisesRouter.delete("/:exerciseId", async (req, res, next) => {
    try {
        const deletedItem = await Exercise.findOneAndDelete(
            {_id: req.params.exerciseId},
            {user: req.auth._id}
        )
        return res.status(200).send(`This Item ${deletedItem} was deleted`)

    } 
        catch(err){
            res.status(500)
            return next(err)
    }
})
// Updating exercise likes 
exercisesRouter.put("/likes/:exerciseId", async (req, res, next) => {
    try {
        const updatedLikes = await Exercise.findByIdAndUpdate(
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
exercisesRouter.put("/dislikes/:exerciseId", async (req, res, next) => {
    try {
        const result = await Exercise.findByIdAndUpdate(
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


module.exports = exercisesRouter