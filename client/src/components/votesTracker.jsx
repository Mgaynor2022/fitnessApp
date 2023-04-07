import React, {useContext} from 'react'
import { UserContext } from '../context/userProvider'

export default function VotesTracker(props){

    const {user} = useContext(UserContext)

    const {likes, dislikes, _id, likeExercise, dislikeExercise, exerciseId} = props

    function handleLikes(){
        likeExercise(_id)
    }
    function handleDislikes(){
        dislikeExercise(_id)
    }

    return (
        <div>
            <h3>Likes{likes.length}</h3>
            <button onClick={handleLikes}>Likes</button>
        
            <h3>DisLikes{dislikes.length}</h3>
            <button onClick={handleDislikes}>DisLike</button>
            
        </div>
        

    )

    



}