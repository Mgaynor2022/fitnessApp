import React, {useState, useContext, createContext} from "react"
import axios from "axios"
import { config } from "dotenv"

export const UserContext = createContext()
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, // checks localStorage for user data if not {}. use JSON.parse cus of JSON.Stringfy()
        token: localStorage.getItem("token") || "", // checks to see if the token is in localStorage if not ""
        exercises:[],
        comments:[],
        errMsg: ""
    }
    
    const [userState, setUserState] = useState(initState)
    
    function signUp(credentials){
        axios.post("http://localhost:3050/auth/signup", credentials)
        .then(res => {
            const {user,token} = res.data
            // // saving the token so when the page refresh data is saved 
            localStorage.setItem("token", token)
            // // if your saving complex data types objects or arrays you need use JSON.Stringfy()
            localStorage.setItem("user", JSON.stringify(user))
            setUserState((prevState) => ({ ...prevState, user, token }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }
  
    function login(credentials){
        axios.post("http://localhost:3050/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token) // saving token so it wont be lost when page refresh
            localStorage.setItem("user", JSON,stringify(user)) // if your saving complex data types
            // getUserData when user logs in there data will be displayed
            getUserExercise()
            setUserState((prevUserState) => ({ ...prevUserState, user, token }));
        })
        .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user:{},
            token:"",
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState =>({
            ...prevState,
            errMsg: ""
        }))
    }

    function addExercise(exercisePost){
        userAxios.post("http://localhost:3050/api/exercise", exercisePost)
        .then(res => {
            setUserState(prev => ({
                ...prev,
                exercises:[...prev.exercises, res.data]
            }))
        })
        .catch(err => console.log(err))
      }

      function likeExercise(exerciseId){
        userAxios.put(`http://localhost:3050/api/exercise/likes/${exerciseId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                exercises: prevState.exercises.map((prev) => 
                    exerciseId !== prev._id ? prev : res.data // if the condition is true keep the data if false add the new data 
                )
            }))
        })
        .catch(err => console.log(err)) 
    }

    function dislikeExercise(exerciseId){
        userAxios.put(`http://localhost:3050/api/exercise/dislikes/${exerciseId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                exercises: prevState.exercises.map((prev) => 
                    exerciseId !== prev._id ? prev : res.data // if the condition is true keep the data if false add the new data 
                )
            }))
        })
        .catch(err => console.log(err))
    }
    
      function deleteExercise(exerciseId){
        userAxios.delete(`http://localhost:3050/api/exercise/${exerciseId}`)
        .then(res => {
            setUserState(prev => ({
                ...prev,
                exercises: prev.exercises.filter(exercise => exercise._id !== exerciseId)
            }))
            
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
        
      }
  
      function addComments(commentPost){
        userAxios.post("http://localhost:3050/api/comments",commentPost)
        .then(res => {
            setUserState(prev({
                ...prev,
                comments:[...prev.comments, res.data]
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
      }

      function getUserExercise(){
        userAxios.get("http://localhost:3050/api/exercise/user")
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                exercises: res.data
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
      }

      function commentLikes(likeUpdate, commentId){
        userAxios.put(`http://localhost:3050/api/comments/likes/:commentId/${commentId}`,likeUpdate)
        

      }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signUp,
                login,
                logout,
                resetAuthErr,
                addExercise,
                addComments,
                getUserExercise,
                deleteExercise,
                likeExercise,
                dislikeExercise,
                userAxios
            }}>
                {props.children}
        </UserContext.Provider>
        
        
    )   
}
