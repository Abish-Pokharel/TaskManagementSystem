// rafce
import React from "react"
import RegisterForm from "../components/forms/register.form"
import { Link } from "react-router"

const RegisterPage = () =>{
    return (
        <main className="h-full w-full flex justify-center items-center ">
           <div className="shadow-md border-2 border-black py-3 px-4 min-h-120 min-w-120 rounded-md ">
            <h1 className="text-3xl font-bold text-center">Create Account</h1>
            <p className="mt-1 text-center text-[14px]">To create account fill the form below</p>
            {
                <RegisterForm/>
               }
            <div className="mt-1">
                <p className="text-center">Already have account? 
                    <Link to = {"/login"}>
                    <span className="text-blue-600 italic font-semibold">login</span> 
                    </Link>
                    </p>
            </div>
           </div>
        </main>
    )
}

export default RegisterPage

// htmlFor : for which input the label is for
