import React from 'react'
import { GoSearch } from 'react-icons/go'
import UserProfile from './user_profile'

const Navbar = ({userInfo}) => {
  return (
    <nav className="flex w-full justify-between items-center border-b border-gray-200 px-2 py-3">
      
      {/* Logo */}
      <div className="font-bold  tracking-widest text-xl text-blue-500">
        Task App
      </div>

      {/* Search */}
      <div className="flex items-center w-80 border border-gray-300 px-3 py-1 rounded-md ">
        <button>
            <GoSearch className="w-full h-full outline-none text-sm text-gray-600mr-2" />
        </button>
        <input
        className= "w-full h-full outline-none text-sm text-gray-500"
          type="text"
          placeholder="Search tasks..."
        />
      </div>

      {/* User Profile */}
      <UserProfile userInfo = {userInfo}/>

    </nav>
  )
}

export default Navbar
