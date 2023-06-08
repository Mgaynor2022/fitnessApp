import React from 'react'
import {MdOutlineFitnessCenter} from 'react-icons/md'


export default function LoginNavbar(){

    return(
        <div className="relative z-10 w-full h-24 px-12 bg-white flex justify-between">
        	<h1  className="h-full w-20 flex items-center text-lg md:text-2xl font-bold tracking-widest text-gray-700 ">The FitnessApp</h1>
        	<div className="relative block px-3 h-32 bg-red-500  pt-8 pb-6 flex flex-col items-center justify-between ">
				<div className="flex items-end justify-center">
					<span className="block h-5 w-1 bg-gray-50"></span>
					<span className="block h-8 w-1 bg-gray-50 mx-1"></span>
					<span className="block h-5 w-1 bg-gray-50"></span>
				</div>
       		</div>
        </div>
    )



}