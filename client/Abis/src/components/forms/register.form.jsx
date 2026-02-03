import React, { useState } from 'react'
import { register } from '../../api/auth_api'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const RegisterForm = () => {

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const onFormSubmit = async (e)=>{
        try {
            const {re_password, ...rest} = formData;
            e.preventDefault()
            const response = await register(rest)
            if (response) {
                toast.success(response.message || "Registration successful!")
                navigate('/login')
            }
            console.log(response)
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed!")
            console.log("Error:",error)
        }
    }

  return (
     <form onSubmit={onFormSubmit}>
                    {/* Frist name */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md "> 
                    <label className="text=[16px] font-semibold" htmlFor="First_name">FIrst Name</label>
                    <input 
                    className="border border-gray-400" 
                    id = 'First_name'
                    placeholder="Hari"
                    type = "text"
                    name = "first_name"
                    value = {formData.first_name}
                    onChange = {handleChange}
                    />
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    {/* label */}
                    <label className="text=[16px] font-semibold" htmlFor="Last_name">Last Name</label>
                    {/* input */}
                    <input 
                    className="border border-gray-400" 
                    id = 'Last_name' 
                    name='last_name'
                    placeholder = "Dalal"
                    type = "text"
                    value = {formData.last_name}
                    onChange = {handleChange}
                    />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    <label className="text=[16px] font-semibold" htmlFor="Email">Email</label>
                    <input 
                    className="border border-gray-400" 
                    id = 'Email' 
                    placeholder = "example@gmail.com"
                    type = "email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    <label className="text=[16px] font-semibold" htmlFor="Password">Password</label>
                    <input 
                    className="border border-gray-400" 
                    id = 'Password' 
                    placeholder = "Enter Password"
                    type = "password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* Re-Enter Password*/}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    <label className="text=[16px] font-semibold" htmlFor="Re-Password">Re-Type Password</label>
                    <input 
                    className="border border-gray-400" 
                    id = 'Re-Password' 
                    placeholder = "Enter Password"
                    type = "password"
                    name='re_password'
                    value={formData.re_password}
                    onChange={handleChange}
                    required
                    />
                </div>
                {/* Submit */}
                <div className="w-full mt-4">
                    <button onSubmit={onFormSubmit} className="w-full bg-blue-600 py-2 text-white font-bold rounded-sm cursor-pointer"  type = "submit">Create account</button>
                </div>
                </form>
            
  )
}

export default RegisterForm