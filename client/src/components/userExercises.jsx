import React, {useContext} from 'react'
import { UserContext } from '../context/userProvider'
import VotesTracker from './votesTracker'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


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
        <div class='inline-block p-2 m-4 cursor-pointer  transition duration-0 hover:scale-110'>
            <div key={_id} >
                <h1>{name}</h1>
                <h2> Type Of Exercise: {type}</h2>
                <h2> Targeted Muscle Group: {muscle}</h2>
                <h2> Equipment Needed: {equipment}</h2>
                <h2> Difficulty Level: {difficulty}</h2>
            </div>
                <div>
                    <button class="bg-black text-white w-40 rounded"
                    onClick={() => deleteExercise(_id)}>Delete</button>
                </div>
        </div>
    )

}


