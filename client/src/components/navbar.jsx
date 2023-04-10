import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props

    return(
        <header class ="flex flex-wrap items-center justify-between px-12 relative">
            <div class="w-full md:w-auto">
				<h1 class="block text-center text-black text-lg ">Fitness App</h1>
			</div>
            <ul class ="flex-1 flex justify-center md:justify-end list-reset">
                <li class="mr-6">
                    <Link to="/profilePage" class=" hover:text-blue-800">Profile</Link>
                </li>
                <li class="mr-6">
                    <Link to="/publicPage"class=" hover:text-blue-800">Public</Link>
                </li>
                <li class="mr-6">
                  <button onClick={logout} class=" hover:text-blue-800">Logout</button> 
                </li>
            </ul>
        </header>
    )

}
//to="/postForm"