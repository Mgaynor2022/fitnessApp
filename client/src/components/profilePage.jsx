import React, {useEffect, useContext} from 'react'
import { UserContext } from '../context/userProvider'
import ExerciseList from './exerciseList'
import PostExercise from './postForm'
import UserExercises from './userExercises'
import VotesTracker from './votesTracker'
import { ExerciseContext } from '../context/exerciseProvider'


export default function UserProfile(){
    const {user: {username},
     exercises, 
     addExercise, 
     deleteExercise, 
     getUserExercise,
     likeExercise,
     dislikeExercise
     
    } = useContext(UserContext)

    

    useEffect(() => {
        getUserExercise()
    },[])
    
    return (
        <div>
            <PostExercise 
                addExercise={addExercise} 
                />
            <ExerciseList 
                exercises={exercises}
                deleteExercise={deleteExercise}
                likeExercise={likeExercise} 
                dislikeExercise={dislikeExercise}
                
            />
           
        </div>
    )
}
