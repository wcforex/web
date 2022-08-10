import { useState } from 'react'
import { HiLockClosed } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Signin() {
    const [userData, setUserData] = useState()

    // const handleChange = (e) = {
    //     setUserData({...userData, [e.target.name] : e.target.value})
    // }

  return (
    <>
      <div className=''>
      <div className="text-center text-gray-800 pt-[8rem]">
        <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline w-5 h-5 stroke-current">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
      </svg>
      <span className="ml-4 font-semibold text-center">Paperclip</span>
      </div>
      <h1 className="mt-6 text-4xl font-bold text-center text-gray-900">Welcome back, signin</h1>
        </div>

        <form className="mt-6 sm:w-96 w-[38rem] my-0 mx-auto">
          <input type="email" id="email" className="block w-full h-10 px-3 mt-1 text-sm bg-gray-50 border border-gray-300 rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500 shadow-sm" placeholder="Email address"/>
          {/* <input type="text" id="username" className="block w-full h-10 px-3 mt-2 text-sm bg-gray-50 border border-gray-300 rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500 shadow-sm" placeholder="Username" autoComplete="username"/> */}
          <input type="password" id="password-1" className="block w-full h-10 px-3 mt-2 text-sm bg-gray-50 border border-gray-300 rounded-md ring-gray-300 ring-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500 shadow-sm" placeholder="Password" autoComplete="current-password"/>
       
          <div className="flex flex-col mt-6">
            <label className="inline-flex items-center text-sm">
              <input type="checkbox" className="w-4 h-4"/>
              <span className="ml-2 text-gray-700">I agree with <a href="#" className="underline">Terms of Service</a></span>
              </label>
              <label className="inline-flex items-center mt-2 text-sm">
                <input type="checkbox" className="w-4 h-4"/>
                <span className="ml-2 text-gray-700">I want to receive the newsletter</span>
                </label>
                <button className="w-full h-10 px-20 py-2 mt-6 text-sm font-bold text-white bg-yellow-500 rounded-md hover:bg-opacity-90">Start your trial</button>
                </div>
                <div className="mt-5 text-sm text-center">Don't have an account? <a href="#" className="text-yellow-900">Sign up</a>
                </div>
        </form>
      </div>
    </>
  )
}
