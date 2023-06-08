import React,{useState, createContext, useEffect } from 'react'
import axios from 'axios'



export const AllExerciseContext = createContext()

export default function AllExerciseProvider(props){

    const [exerciseData, setExerciseData] = useState([])

    function allExercises(){
        axios({
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
              'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
              'X-RapidAPI-Host': process.env.X-RapidAPI-Host
            }
          })
          .then(res => setExerciseData(res.data))
          .catch(err => console.log(err))
    }

    // useEffect(() => {
    //     allExercises()
    //     console.log("GET Request Complete")
    // }, [])

    return (
        <AllExerciseContext.Provider
        value={{allExercises, exerciseData}} >
            {props.children}
        </AllExerciseContext.Provider>
    )




}