import React from 'react'

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs:{
            username,
            password
        }
    } = props

    return(
  <div className=" flex flex-col items-center justify-center ">
      <div id='mobileLogin' className=" md:w-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                      <input  
                      onChange={handleChange}
                      name="username"
                      value={username}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="userName" 
                      required=""
                      />
                  </div>
                  <div>
                      <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      type="text"
                      onChange={handleChange}
                      value={password}
                      name="password" 
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""/>
                  </div>
            
                  <div className="flex items-center justify-center">
                    <button className=" block w-40 bg-black hover:bg-gray-500 text-white rounded">{btnText}</button>
                      
                  </div>
                    <p className="text-red-600 text-center">{errMsg}</p>
                  {/* <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                   */}
              </form>
          </div>
      </div>
  </div>

        
    )
}

           

