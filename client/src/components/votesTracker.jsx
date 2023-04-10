import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons'


export default function VotesTracker(props){

    const {likes, dislikes, _id,  likeExercise, dislikeExercise} = props
   

    function handleLikes(){
        likeExercise(_id)
    }
    function handleDislikes(){
        dislikeExercise(_id)
    }

    return (
        <div class="flex flex-row justify-center m-5 " >
                <FontAwesomeIcon 
                    icon={faThumbsUp}
                    onClick={handleLikes}
                    size="xl"
                    fixedWidth
                />
                <h3>{likes?.length}</h3>         

                <FontAwesomeIcon
                    icon={faThumbsDown}
                    onClick={handleDislikes}
                    size="xl"
                    fixedWidth
                />
                <h3>{dislikes?.length}</h3>            

            
        </div>

    )

    



}