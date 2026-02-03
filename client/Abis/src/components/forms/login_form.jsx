import React, { useState } from 'react'
import { login } from '../../api/auth_api'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const LoginForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ""
    })

    const handleChange = (e) =>{
        console.log(e.target)
        console.log(e.target.value, e.target.name)

        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    

    
     
    // const [email, setEmail] = useState("");
    // const onEmailChange= (e)=>{
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    // console.log('state',email)


    // const [password, setPassword] = useState("");
    // const onPasswordChange= (e)=>{
    //     console.log(e.target.value)
    //     setPassword(e.target.value)
    // }
    // console.log('state',password)

    const onFormSubmit = async (e)=>{
        try{
            e.preventDefault()
            const response = await login(formData)
            console.log(response)
            if(response.data && response.access_token){
                localStorage.setItem('access_token', response.access_token)
                toast.success("Login Successful!")
                navigate('/',{replace:true})
                console.log("Login successful")
            }
        } catch(e){
            console.log("Error",e)
        }
    }

  return (
     <form onSubmit={onFormSubmit}>    
                {/* Email */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    
                    <label className="text=[16px] font-semibold" htmlFor="Email">Email</label>
                    <input 
                    className="border border-gray-400" 
                    onChange={handleChange}
                    value={formData.email}
                    id = 'Email' 
                    placeholder = "example@gmail.com"
                    type = "email"
                    name='email'
                    required
                    />
                </div>
                {/* Password */}
                <div className="flex flex-col gap-1 px-2 py-2 rounded-md ">
                    <label className="text=[16px] font-semibold" htmlFor="Password">Password</label>
                    <input 
                    className="border border-gray-400" 
                    onChange={handleChange}
                    value={formData.password}
                    id = 'Password' 
                    placeholder = "Enter Password"
                    type = "password"
                    name="password"
                    required
                    />
                </div>
                
                {/* Submit */}
                <div className="w-full mt-4">
                    <button onSubmit={onFormSubmit} className="w-full bg-blue-600 py-2 text-white font-bold rounded-sm cursor-pointer"  type = "submit">Login</button>
                </div>
                </form>
            
  )
}

export default LoginForm