import React, {useState, useEffect,  createContext} from "react"
import axios from "axios"


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
        // comments:[],
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
            localStorage.setItem("user", JSON.stringify(user)) // if your saving complex data types
            // getUserData when user logs in there data will be displayed
            setUserState((prevUserState) => ({ ...prevUserState, user, token }));
            // getUserExercise()
        })
        // .catch(err => console.log(err))
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
        // function for the profilePage
        function getUserExercise(){
          userAxios.get("http://localhost:3050/api/exercises/user")
          .then(res => {
              setUserState(prevState => ({
                  ...prevState,
                  exercises: res.data
              }))
          })
          .catch(err => handleAuthErr(err.response.data.errMsg))
        }

 
    function addExercise(exercisePost){
      userAxios.post("http://localhost:3050/api/exercises", exercisePost)
      .then(res => {
          setUserState(prev => ({
              ...prev,
              exercises:[...prev.exercises, res.data]
          }))
      })
      .catch(err => console.log(err))
  }
    
    function deleteExercise(exerciseId){
      userAxios.delete(`http://localhost:3050/api/exercises/${exerciseId}`)
      .then(res => {
          setUserState(prev => ({
              ...prev,
              exercises: prev.exercises.filter(exercise => exercise._id !== exerciseId)
          }))
          
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
      
    }

    // Function for the public
    const [searchData, setSearchData] = useState({
      name:""
    })

    function handleChange (e){
      const {name, value} = e.target
      setSearchData(prevData=> {
        return {
          ...prevData,
          [name]:value
        }
      })
    }
  
function searchFilter(e){
  if(e.target.value === 'reset'){
      getExerciseData()
      // searchGifUrl(e)
  } else {
  userAxios({
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${e.target.value}`,
      headers: {
        'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  })
  .then(res => setExerciseData(res.data))
    .catch(err => console.log(err))
  }
 
}   
function searchExercise(e){
  e.preventDefault()
  userAxios(
    {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${searchData.name}`,
      headers: {
        'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    }
  )
  .then(res => setExerciseData(res.data))
  .catch(err => console.log(err))
}
 
      function likeExercise(exerciseId){
        userAxios.put(`http://localhost:3050/api/test/likes/${exerciseId}`)
        .then(res => {
          setExerciseData(prevState => [...prevState, prevState.map(
            prev => exerciseId !== prev._id ? prev : res.data
          )])
        })
        .then(() => getExerciseData())
        .catch(err => console.log(err))
      }
  
      function dislikeExercise(exerciseId){
        userAxios.put(`http://localhost:3050/api/test/dislikes/${exerciseId}`)
        .then(res => {
          setExerciseData(prevState => [...prevState, prevState.map(
            prev => exerciseId !== prev._id ? prev : res.data
          )])
        })
        .then(() => getExerciseData())
        .catch(err => console.log(err))
      }
    
      // function addComments(commentPost){
      //   userAxios.post("http://localhost:3050/api/comments",commentPost)
      //   .then(res => {
      //       setUserState(prev({
      //           ...prev,
      //           comments:[...prev.comments, res.data]
      //       }))
      //   })
      //   .catch(err => handleAuthErr(err.response.data.errMsg))
      // }


      // function commentLikes(likeUpdate, commentId){
      //   userAxios.put(`http://localhost:3050/api/comments/likes/:commentId/${commentId}`,likeUpdate)
        
      // }
      const [exerciseData, setExerciseData] = useState([])

      function getExerciseData(){
        // userAxios.get("http://localhost:3050/api/test")
        // .then(res => setExerciseData(res.data))
        // .catch(err => console.log(err))
        userAxios({
              method: 'GET',
              url: 'https://exercisedb.p.rapidapi.com/exercises',
              headers: {
                'X-RapidAPI-Key': 'c07807c78emsh2a199158940a00cp15690cjsn0434460128cf',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
            })
            .then(res => setExerciseData(res.data))
            .catch(err => console.log(err))
      }
   
          // Building a Pagination feature 
          const [currentPage, setCurrentPage] = useState(1)
          const [numberPerPage, setNumberPerPage] = useState(50)
          const dataLength = exerciseData.length

          const lastPostIndex = currentPage * numberPerPage
          const firstPostIndex = lastPostIndex - numberPerPage
          const currentPost = exerciseData.slice(firstPostIndex, lastPostIndex)

    return (
        <UserContext.Provider
            value={{
                ...userState,
                getExerciseData,
                exerciseData,
                signUp,
                login,
                logout,
                resetAuthErr,
                addExercise,
                getUserExercise,
                deleteExercise,
                likeExercise,
                dislikeExercise,
                handleChange,
                searchData,
               searchExercise,
                searchFilter,
                 currentPost,
                 setCurrentPage,
                 lastPostIndex,
                 firstPostIndex,
                 dataLength,
                 numberPerPage,
                 currentPage,
               
                
            
            }}>
                {props.children}
        </UserContext.Provider>
        
        
    )   
}
