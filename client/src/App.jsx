import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar'
import  { UserContext } from './context/userProvider'
import Auth from './components/auth'
import UserProfile from './components/profilePage'
import PrivateRoute from './components/protectedRoute'
import './App.css'
import PublicPage from './components/publicPage'
import FilterForm from './components/filterForm'
import SearchExercise from './components/searchExercise'
import Pagination from './components/pagination'

export default function App() {
  const {token, logout} = useContext(UserContext)
  // If there is an token then show the navbar
  return (
    <div className="app min-h-screen">
      {token && <Navbar logout={logout} />} 
      <Routes>
        <Route
          path="/"
         element={token ? <Navigate to="/publicPage"/> : <Auth />}
         />
         <Route 
          path="/profilePage"
          // element={token ? <PublicPage /> : <Navigate replace to ="/" />}
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
            <SearchExercise />
            <FilterForm />
            <Pagination />
            <PublicPage />
          </PrivateRoute>}
         />
      </Routes>
      
    </div>
  )
}

