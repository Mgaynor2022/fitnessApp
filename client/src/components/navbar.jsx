import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props

    return(
        <div>
            <ul class="flex">
                <li class="mr-6">
                    <Link to="/profilePage" class="text-blue-500 hover:text-blue-800">Profile</Link>
                </li>
                <li class="mr-6">
                    <Link to="/postForm"class="text-blue-500 hover:text-blue-800">Public</Link>
                </li>
                <li class="mr-6">
                    <button onClick={logout} class="text-blue-500 hover:text-blue-800">Logout</button>
                </li>
            </ul>
        </div>
    )

}