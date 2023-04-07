import React from 'react'
import PublicPage from './publicPage'

export default function PublicList(props){

    const {publicExercises,} = props

    // Sorting the array by type

    const sortedArray = publicExercises.sort((a,b) => {
        if(a.type < b.type){
            return -1
        }
        if(a.type > b.type){
            return 1
        }
        return 0
    })

    const displayPublicData = sortedArray.map(array => {
        return (
            <div>
                <h1>{array.name}</h1>
                <h2> Type Of Exercise: {array/type}</h2>
                <h2> Targeted Muscle Group: {array.muscle}</h2>
                <h2> Equipment Needed: {array.equipment}</h2>
                <h2> Difficulty Level: {array.difficulty}</h2>
                <p>{array.instructions}</p>
            </div>
        )
    })

    return (
        <div>
            {displayPublicData}
        </div>
    )
}
