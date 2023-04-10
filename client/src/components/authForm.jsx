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
        <section>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
                  <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                      <input  
                      onChange={handleChange}
                      name="username"
                      value={username}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="userName" 
                      required=""
                      />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      type="text"
                      onChange={handleChange}
                      value={password}
                      name="password" 
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""/>
                  </div>
            
                  <div class="flex items-center justify-center">
                    <button class=" block w-40 bg-black text-white rounded">{btnText}</button>
                      
                  </div>
                    <p class="text-red-600 text-center">{errMsg}</p>
                  {/* <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                   */}
              </form>
          </div>
      </div>
  </div>
</section>
        
    )
}

           


{/* <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    
<div>
    <input 
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                            type="text"
    onChange={handleChange}
    name="username"
    value={username}
    placeholder="username"
    />
</div>
    
<div>
    <input
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    type="text"
    onChange={handleChange}
    name="password"
    value={password}
    placeholder="password"
    />
    <button>{btnText}</button>
</div> 
</form> */}