import React from 'react'
import UserExercises from './userExercises'
import VotesTracker from './votesTracker'


export default function ExerciseList(props){
    const {exercises, deleteExercise, likeExercise, dislikeExercise, handleSubmit} = props

    return (
        <div>
            {exercises.map(exercise => 
            <>
                <UserExercises 
                {...exercise} 
                key={exercise._id} 
                deleteExercise={deleteExercise} 
                />

                {/* <VotesTracker 
                {...exercise} 
                key={exercise._id}  
                likeExercise={likeExercise}
                dislikeExercise={dislikeExercise}
                /> */}

            </>
            
            )}
                
        </div>
    )

}