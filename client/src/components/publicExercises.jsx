import React from 'react'

export default function PublicExercises(props){

    const { 
        name, 
        type, 
        muscle, 
        equipment, 
        difficulty,
         _id
        } = props

        return (
            <div key={_id} 
            class=" max-w-sm p-6 bg-white border-r-4 border  border-gray-200 rounded-lg ">
                <h1 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h1>
                <h2 class=" font-semibold text-gray-700 "> Type Of Exercise:</h2>
                <h3>{type}</h3>
                <h2 class=" font-semibold text-gray-700 ">Muscle Group:  {muscle}</h2>
                <h2 class=" font-semibold text-gray-700 "> Equipment Needed: {equipment}</h2>
                <h2 class=" font-semibold text-gray-700 "> Difficulty Level: {difficulty}</h2>
            </div>
            
        )
   
}
