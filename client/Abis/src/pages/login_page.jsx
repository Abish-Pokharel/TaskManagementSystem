import React from 'react'
import LoginForm from '../components/forms/login_form'
import { Link } from 'react-router'

const LoginPage = () => {
  return (
    <main className="h-full w-full flex justify-center items-center ">
           <div className="shadow-md border-2 border-black py-3 px-4 min-h-120 min-w-120 rounded-md ">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <p className="mt-1 text-center text-[14px]">Login to access task</p>
            {
                <LoginForm/>
               }
            <div className="mt-1">
                <p className="text-center">Don't have account? 
                  <Link to = {"/register"}>
                  <span className="text-blue-600 bold font-semibold">Sign-up</span> </Link></p>

            </div>
           </div>
        </main>
  )
}

export default LoginPage