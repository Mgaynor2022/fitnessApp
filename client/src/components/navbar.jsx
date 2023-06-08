import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {IoIosFitness} from 'react-icons/io'


export default function Navbar(props){

    const { logout } = props
    const [mobileNavbar,setMobileNavbar] = useState(false)
	const [mobileNavBg, setMobileNavBg] = useState(false)

	const toggle = () => {
		setMobileNavbar(!mobileNavbar)
		console.log(mobileNavbar)
	}

    return(
        <header className ="text-gray-700 font-semibold bg-white flex flex-shrink items-center justify-between p-8 mb-12  relative">
                <IoIosFitness id='logo' className='text-red-500 text-center mr-5' size='3rem' />
            <div id='logo' className="w-full md:w-auto">
				<h1 className="block md:text-2xl font-bold tracking-widest text-gray-700 text-center">Fitness App</h1>
			</div>
            <ul className ="flex-1 flex justify-center md:justify-end items-center ">
                <li className="mr-6">
                    <Link to="/publicPage"className=" hover:text-blue-800">Public</Link>
                </li>
                <li className="mr-6">
                    <Link to="/profilePage" className=" hover:text-blue-800">Profile</Link>
                </li>
                <li className="mr-6 ">
                  <button onClick={logout} className="px-5 py-2 bg-red-500 text-white font-semibold hover:bg-gray-700">Logout</button> 
                </li>
            </ul>
     
        </header>
    )

}
