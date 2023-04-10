import React, {useContext} from 'react'
import { UserContext } from '../context/userProvider.jsx'

export default function FilterForm(){

    const {searchFilter} = useContext(UserContext)

    return (
        <div class='m-10'>
            <h4>Filter By Type Of Exercises</h4>
            <select onChange= {searchFilter}>
                <option value="reset"> -All Exercises- </option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="stretching">Stretching</option>
                <option value="strongman">Strongman</option>
                <option value="plyometrics">Plyometrics</option>
                <option value="powerlifting">Powerlifting</option>
            </select>
        </div>
    )
}