import React, {useContext, useEffect} from 'react'
import PublicList from './publicList.jsx'
// import SearchExercise from './searchExercise.jsx'
import { UserContext } from '../context/userProvider.jsx'

export default function PublicPage(props){
    
    const {
        publicExercises,
        likeExercise,
        dislikeExercise,
        getExerciseData,
        exerciseData,
        handleChange,
        searchData,
        currentPost,
        addExercise,
        exercises,
        imgUrl,
        getGifUrl
       
    } = useContext(UserContext)

    useEffect(() => {
        // getPublicExercises()
        getExerciseData()
       
        console.log("loaded")
      }, [])

    return (
        <div className='p-10'>
            <PublicList 
                likeExercise = {likeExercise}
                dislikeExercise = {dislikeExercise}
                publicExercises = {publicExercises}
                getExerciseData = {getExerciseData}
                exerciseData = {exerciseData}
                currentPost = {currentPost}
                addExercise = {addExercise}
                exercises = {exercises}
                imgUrl ={imgUrl}
               
               
            />
            
        </div>
    )
    



}