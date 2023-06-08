import React from 'react'
import PublicExercises from './publicExercises'
import {MdOutlineFavoriteBorder} from 'react-icons/md'


export default function PublicList(props){

    const {
        dislikeExercise,
         likeExercise,
         getExerciseData,
         exerciseData,
         currentPost,
         _id,
         addExercise,
         

       
        } = props
    
    
    return (
        <div key={_id} className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {currentPost && currentPost.map( exercise =>
                <div className='relative'>
                    <MdOutlineFavoriteBorder className='absolute cursor-pointer hover:text-blue-500 'onClick={() => addExercise(exercise)} size='2rem' />
                    <PublicExercises
                        {...exercise} 
                        likeExercise = {likeExercise} 
                        dislikeExercise = {dislikeExercise}
                        getExerciseData = {getExerciseData}
                        
                    />
                </div>
                
            )}
        </div>
    )
}