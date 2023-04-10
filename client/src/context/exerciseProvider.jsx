// import React, {useState, createContext, useContext} from 'react'
// import axios from "axios"
// import { UserContext } from "./userProvider"

// export const ExerciseContext = createContext()

// export default function ExerciseProvider(props) {

//     const [publicExercises, setPublicExercises] = useState([])

//     const {userAxios} = useContext(UserContext)

//     function getPublicExercises(){
//       userAxios.get("http://localhost:3050/api/public")
//       .then(res => setPublicExercises(res.data))
//       .catch(err => console.log(err))
//     }

//     function handleLikes(publicId){
//       userAxios.put(`http://localhost:3050/api/public/likes${publicId}`)
//       .then(res => {
//         setPublicExercises(prevState => [...prevState, prevState.map(
//           prev => publicId !== prev._id ? prev : res.data
//         )])
//       })
//       .catch(err => console.log(err))
//     }

//     function handleDislikes(publicId){
//       userAxios.put(`http://localhost:3050/api/public/dislikes${publicId}`)
//       .then(res => {
//         setPublicExercises(prevState => [...prevState, prevState.map(
//           prev => publicId !== prev._id ? prev : res.data
//         )])
//       })
//       .catch(err => console.log(err))
//     }

//       return (
//         <ExerciseContext.Provider
//         value={{
//           getPublicExercises,
//           handleLikes,
//           handleDislikes,
//           publicExercises
//         }}>
//           {props.children}
//         </ExerciseContext.Provider>
//       )

// }