import React from 'react'
import PublicExercises from './publicExercises'
import VotesTracker from './votesTracker'


export default function PublicList(props){

    const {getPublicExercises, dislikeExercise, likeExercise, publicExercises,} = props

    return (
        <div class=" grid grid-cols-4 gap-4">
            {publicExercises.map( exercise =>
                <div>
                    <PublicExercises
                        {...exercise} 
                        publicExercises = {publicExercises}
                        likeExercise = {likeExercise} 
                        dislikeExercise = {dislikeExercise}
                    />
                    <VotesTracker
                        {...exercise} 
                        key={exercise._id}  
                        likeExercise={likeExercise}
                        dislikeExercise={dislikeExercise}
                    />

                </div>
                
            )}
        </div>
    )
}