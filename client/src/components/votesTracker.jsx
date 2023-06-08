import React, {useContext} from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa' 

export default function VotesTracker(props){

    const {likes, dislikes, _id,  likeExercise, dislikeExercise} = props
   

    function handleLikes(){
        likeExercise(_id)
    }
    function handleDislikes(){
        dislikeExercise(_id)
    }

    return (
        <div id='votesTracker' className=" flex flex-row justify-center m-5" >
                <FaThumbsUp className='cursor-pointer'
                    onClick={handleLikes}
                    size="1.5rem"
                    
                />
                <h3 className='block text-black mr-5'>{likes?.length}</h3>         

                <FaThumbsDown className='cursor-pointer'
                    onClick={handleDislikes}
                    size="1.5rem"
                    
                />
                <h3>{dislikes?.length}</h3>            

            
        </div>

    )

    



}