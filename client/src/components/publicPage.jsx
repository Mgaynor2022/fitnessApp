import React, {useState, useContext, useEffect} from 'react'
import { ExerciseContext } from '../context/exerciseProvider.jsx'
import PublicList from './publicList.jsx'
import axios from 'axios'



export default function PublicPage(props){
    
    const {

        getPublicExercises,
          handleLikes,
          handleDislikes,
          publicExercises

    } = useContext(ExerciseContext)

    useEffect(() => {   
        getPublicExercises()
    })

    return (
        <div>
            <PublicList 
                getPublicExercises = {getPublicExercises}
                handleLikes = {handleLikes}
                handleDislikes = {handleDislikes}
                publicExercises = {publicExercises}
            />
        </div>
    )
    



}