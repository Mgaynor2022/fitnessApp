import React, { useState, useContext } from 'react'
import AuthForm from './authForm.jsx'
import {UserContext} from "../context/userProvider.jsx"
import LoginNavbar from './loginNavbar.jsx'

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
        <>
            <LoginNavbar />

        <div className="-mt-24 pt-24  h-screen bg-white flex flex-wrap">
			
			<div className="md:px-12 bg-white flex items-center justify-start md:justify-end">
				<div className="px-12 py-12 md:pl-0 md:pr-24 bg-white md:-mr-64 relative z-10">
					<div className=''>
            { !toggle ?
            <div className=''>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignUp}
                inputs={inputs}
                btnText= "Sign Up"
                errMsg={errMsg}
            />
                <p className=" text-center underline cursor-pointer" onClick={toggleForm}>Already A Member?</p>
            </div>
            :
            <div>
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
                errMsg={errMsg}
            />
            <p className="text-center underline cursor-pointer" onClick={toggleForm}>Not a Member</p>
            </div>
            }
        </div> 

					<span className="hidden md:block absolute top-0 right-0 w-48 h-4 bg-white -mr-24 mt-56"></span>
				</div>
			</div>
			
			<div id='loginImg' className="-mt-64 md:mt-0 w-full md:flex-1">
				<img src="https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?w=1400" className="w-full h-full object-fill" />
			</div>

		</div>


		<div id='aboutApp' className="bg-gray-50 px-12 py-24 flex items-center">

			<div className="hidden md:block w-3/12"></div>

			<div className="flex-1 relative">
				<h2 className="mb-8 uppercase text-gray-500 text-2xl font-bold tracking-widest">The Fitness App</h2>
				<p className="font-serif text-gray-500 text-base md:text-xl max-w-2xl leading-loose">
                Aims to allow users to view various exercises, with examples on how the exercise are performed.</p>

				<span className="absolute top-0 left-0 w-4 h-full bg-red-500 -ml-20"></span>
			</div>

		</div>


        </>
        
        
        )
    }
    // Whatever side the form is displaying login or signup the correct data will be transferred
    
