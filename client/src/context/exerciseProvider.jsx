import React, {useState, createContext} from 'react'
import axios from 'axios'

export const ExerciseContext = createContext()

export default function ExerciseProvider(props) {

    const [publicExercises, setPublicExercises] = useState([])

    const {userAxios} = props

    function getPublicExercises(){
      axios.get("http://localhost:3050/public")
      .then(res => setPublicExercises(res.data))
      .catch(err => console.log(err))
    }

    function handleLikes(publicId){
      userAxios.put(`http://localhost:3050/public/likes${publicId}`)
      .then(res => {
        setPublicExercises(prevState => [...prevState, prevState.map(
          prev => publicId !== prev._id ? prev : res.data
        )])
      })
      .catch(err => console.log(err))
    }

    function handleDislikes(publicId){
      userAxios.put(`http://localhost:3050/public/dislikes${publicId}`)
      .then(res => {
        setPublicExercises(prevState => [...prevState, prevState.map(
          prev => publicId !== prev._id ? prev : res.data
        )])
      })
      .catch(err => console.log(err))
    }

      return (
        <ExerciseContext.Provider
        value={{
          getPublicExercises,
          handleLikes,
          handleDislikes,
          publicExercises
        }}>
          {props.children}
        </ExerciseContext.Provider>
      )

}