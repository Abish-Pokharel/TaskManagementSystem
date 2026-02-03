import React from 'react'
import { replace, useNavigate } from 'react-router';

const UserProfile = ({userInfo}) => {
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/login',replace=true);
  }
  return (
    <div className='flex items-center gap-2'>
        <div className='h-10 aspect-square border border-gray-800 flex items-center justify-center rounded-full'>
            <span className='font-bold text-xl text-gray-700'>{userInfo?.first_name?.charAt(0)+ userInfo?.last_name?.charAt(0) || "ID"}</span>
        </div>
        <div>
            <p className='text-lg text-gray-900 font-semibold'>{userInfo?.first_name + ' ' + userInfo?.last_name || "John Doe"}</p>
            <p onClick={logout} className='text-sm underline cursor-pointer w-fit text-red-500 font-semibold'>Log Out</p>
        </div>
    </div>
  )
}

export default UserProfile