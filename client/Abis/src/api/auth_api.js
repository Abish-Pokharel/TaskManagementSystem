import api from './index'

export const login = async (formData)=>{
    try {
        const response = await api.post('/auth/login',formData)
        return response.data
    } catch (e) {
        console.log("Error",e)
        throw e
    }
}

// register
export const register = async(formData)=>{
    try {
        const response = await api.post('/auth/register',formData)
        return response.data
    } catch (error) {
        console.log("Error:",error)
        throw error
    }
}


// task form validation
export const getUserDetail = async(formData)=>{
    try {
        const response = await api.get('/auth/getuser')
        return response.data        
    } catch (error) {
        throw error.response
        console.log(error)
    }
}





