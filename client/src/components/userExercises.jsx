import React, {useContext} from 'react'
import { UserContext } from '../context/userProvider'
import VotesTracker from './votesTracker'


export default function UserExercises(props){

    const { 
        _id,
        name, 
        type, 
        muscle, 
        equipment, 
        difficulty, 
        deleteExercise

    } = props



    return (
        <div>
            <div key={_id}>
                <h1>{name}</h1>
                <h2> Type Of Exercise: {type}</h2>
                <h2> Targeted Muscle Group: {muscle}</h2>
                <h2> Equipment Needed: {equipment}</h2>
                <h2> Difficulty Level: {difficulty}</h2>
                <div>
                    <button onClick={() => deleteExercise(_id)}>Delete</button>
                </div>
            </div>
        </div>
    )

}

