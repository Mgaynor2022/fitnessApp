import React, {useState, useEffect, createContext} from "react"
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
    // Function for the public
    const [publicExercises, setPublicExercises] = useState([])

      function getPublicExercises(){
        userAxios.get("http://localhost:3050/api/public")
        .then(res => setPublicExercises(res.data))
        .catch(err => console.log(err))
      }

      function searchFilter(e){
        if(e.target.value === 'reset'){
            getPublicExercises()
        } else {
        userAxios.get(`http://localhost:3050/api/public/search/type?type=${e.target.value}`)
        .then(res => setPublicExercises(res.data))
        .catch(err => console.log(err))
        }
      }
  
      function likeExercise(publicId){
        userAxios.put(`http://localhost:3050/api/public/likes/${publicId}`)
        .then(res => {
          setPublicExercises(prevState => [...prevState, prevState.map(
            prev => publicId !== prev._id ? prev : res.data
          )])
        })
        .then(() => getPublicExercises())
        .catch(err => console.log(err))
      }
  
      function dislikeExercise(publicId){
        userAxios.put(`http://localhost:3050/api/public/dislikes/${publicId}`)
        .then(res => {
          setPublicExercises(prevState => [...prevState, prevState.map(
            prev => publicId !== prev._id ? prev : res.data
          )])
        })
        .then(() => getPublicExercises())
        .catch(err => console.log(err))
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

      useEffect(() => {
        getPublicExercises()
      }, [])

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
                getPublicExercises,
                publicExercises,
                searchFilter
            
            }}>
                {props.children}
        </UserContext.Provider>
        
        
    )   
}
