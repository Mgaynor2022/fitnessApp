import React, {useState, useContext, useEffect} from 'react'
import PublicList from './publicList.jsx'
import { UserContext } from '../context/userProvider.jsx'

export default function PublicPage(props){
    
    const {
        getPublicExercises,
        publicExercises,
        likeExercise,
        dislikeExercise
    } = useContext(UserContext)

    useEffect(() => {   
        getPublicExercises()
    }, [])

    return (
        <div class='m-10'>
            <PublicList 
                getPublicExercises = {getPublicExercises}
                likeExercise = {likeExercise}
                dislikeExercise = {dislikeExercise}
                publicExercises = {publicExercises}
            />
            
        </div>
    )
    



}