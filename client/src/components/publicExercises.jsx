
import React, {useContext} from 'react'
import VotesTracker from './votesTracker'
import { UserContext } from '../context/userProvider'


export default function PublicExercises(props){

    const { 
        name, 
        equipment, 
         _id,
         bodyPart,
         target,
         likes, 
         dislikes,
        likeExercise, 
        dislikeExercise,
        gifUrl,
        
       
        } = props

//         const {imgUrl} =  useContext(UserContext)

// console.log(imgUrl)

        return (
            <div id='exercises' key={_id} className="h-full bg-white border-red-500 border-t-4  rounded-lg shadow ">
                <img className="rounded-t-lg" src={gifUrl} alt="exerciseImg" />
                <h1 className='text-center capitalize text-lg mb-5'>{name}</h1>
                <div id='card-container' className="flex justify-center text-xs md:text-sm">
                    <button id='card--btn' className='capitalize md:p-2.5 mr-5  w-auto  bg-blue-500  text-white font-bold py-2 px-4  rounded-full '>{bodyPart}</button>
                    <button id='card--btn' className='capitalize md:p-2.5 mr-5 bg-blue-500  text-white font-bold py-2 px-4  rounded-full'>{target}</button>
                    <button id='card--btn' className='capitalize md:p-2.5 bg-blue-500  text-white font-bold py-2 px-4  rounded-full'>{equipment}</button>
                </div>
                    <VotesTracker
                    _id = {_id} 
                    likes = {likes}
                    dislikes = {dislikes}
                    likeExercise = {likeExercise}
                    dislikeExercise = {dislikeExercise}
                    />
   
            </div>
            
        )
   
}
