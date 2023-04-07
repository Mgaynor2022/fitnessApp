import React, { useState, useContext } from 'react'
import AuthForm from './authForm.jsx'
import {UserContext} from "../context/userProvider.jsx"



export default function Auth(){

    const [inputs, setInputs] = useState({
        username:"",
        password:""
    })
    const [toggle, setToggle] = useState(false)

    const {signUp, login, resetAuthErr, errMsg} = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInput =>({
            ...prevInput,
            [name]:value
        }))
    }

    function toggleForm(){
        setToggle(prevToggle => !prevToggle)
        resetAuthErr()
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function handleSignUp(e){
        e.preventDefault()
        signUp(inputs)
    }
    return(
        <div >
            { !toggle ?
            <>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignUp}
                inputs={inputs}
                btnText= "Sign Up"
                errMsg={errMsg}
            />
                <p class="text-center underline cursor" onClick={toggleForm}>Already A Member?</p>
            </>
            :
            <>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
            />
            <p class="text-center underline cursor" onClick={toggleForm}>Not a Member</p>
            </>  
            }
        </div>
    )
}
// Whatever side the form is displaying login or signup the correct data will be transferred

