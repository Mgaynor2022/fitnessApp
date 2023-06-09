import React, { useState, useContext } from "react";
import {UserContext} from "../context/userProvider";
import PublicPage from "./publicPage";


export default function PostExercise(props){

    const {addExercise} = props

    const [exercisePost, setExercisePost] = useState(
        {
        name:"",
        type:"",
        muscle:"",
        equipment:"",
        difficulty:"",
    
    })

    function handleChange(e){
        const {name,value} = e.target
        setExercisePost(prevPost => ({
            ...prevPost,
            [name]:value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addExercise(exercisePost)
        setExercisePost(exercisePost)
    }
    const {name, type, muscle, equipment, difficulty} = exercisePost

        return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <p className='p-10'>Post Some of your favorite exercises you like to do for 
                a particular muscle group or for any particular training style you like. </p>
                <div lass="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                    <label>Name of Exercise</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                    <label>Type of Exercise</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="type"
                        type="text"
                        value={type}
                        onChange={handleChange}
                    />
                    <label>Muscles Worked</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="muscle"
                        type="text"
                        value={muscle}
                        onChange={handleChange}
                    />
                    <label>Equipment Needed</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="equipment"
                        type="text"
                        value={equipment}
                        onChange={handleChange}
                    />      
                    <label>Exercise Difficulty</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="difficulty"
                        type="text"
                        value={difficulty}
                        onChange={handleChange}
                    />
                    <div className='w=full h-full m-5' >
                        <button className="bg-black text-white w-full rounded">Post Exercise</button>
                    </div>          
                </form>
                </div>
            </div>
            
        )
    
}