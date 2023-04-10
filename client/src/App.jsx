import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar'
import  { UserContext } from './context/userProvider'
import Auth from './components/auth'
import UserProfile from './components/profilePage'
import PostExercise from './components/postForm'
import PrivateRoute from './components/protectedRoute'
import './App.css'
import PublicPage from './components/publicPage'
import FilterForm from './components/filterForm'

export default function App() {
  const {token, logout} = useContext(UserContext)
  // If there is an token then show the navbar
  return (
    <div className="app">
      {token && <Navbar logout={logout} />} 
      <Routes>
        <Route
          path="/"
         element={token ? <Navigate to="/profilePage"/> : <Auth />}
         />
         <Route 
          path="/profilePage"
          element={<PrivateRoute token={token} redirectTo="/">
              <UserProfile />
              {/* <PublicPage /> */}
            </PrivateRoute>}
         />
         <Route 
         path ="/publicPage"
        //  path="/postForm"
         element={<PrivateRoute token={token} redirectTo="/">
            {/* <PostExercise/> */}
            <FilterForm />
            <PublicPage />
          </PrivateRoute>}
         />
      </Routes>
      
    </div>
  )
}

