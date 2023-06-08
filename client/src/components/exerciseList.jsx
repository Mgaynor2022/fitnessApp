import React from 'react'
import PublicExercises from './publicExercises'
import {TiDeleteOutline} from 'react-icons/ti'

export default function ExerciseList(props){
    const {exercises, deleteExercise} = props

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {exercises && exercises.map(exercise =>

             <div className='relative'>
                 <TiDeleteOutline className='absolute cursor-pointer hover:text-red-500' onClick={() => deleteExercise(exercise._id)} size='2.5rem'/>
                 <PublicExercises
                 {...exercise}
                 
                 />
             </div>

        )}     
   
    </div>
    )

}