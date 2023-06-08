import React, {useEffect, useContext} from 'react'
import { UserContext } from '../context/userProvider'
import ExerciseList from './exerciseList'
import PublicExercises from './publicExercises'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {MdOutlineFavorite} from 'react-icons/md'


// import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


export default function UserProfile(){
    const {user: {username},
     exercises, 
     addExercise, 
     deleteExercise, 
     getUserExercise

    } = useContext(UserContext)

    useEffect(() => {
        getUserExercise()
    },[])

    return (
        <div className='p-10'>
            <ExerciseList
                addExercise = {addExercise}
                exercises = {exercises}
                deleteExercise = {deleteExercise}
            />


        </div>
       
       
    )
}
	 