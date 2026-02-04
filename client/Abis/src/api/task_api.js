import api from "."

export const addNewTask = async(data)=>{
    try {
        const response = await api.post('/task',data) 
       return response.data
    } catch (error) {
        throw error.response?.data || error.message
    }
}

export const editTask = async(id,data)=>{
    try {
        const response = await api.put(`/task/${id}`,data) 
       return response.data
    } catch (error) {
        throw error.response?.data || error.message
    }
}


export const getAllTasks = async(id,data)=>{
    try {
        const response = await api.get('/task')
        return response.data
    } catch (error) {
        throw error.response?.data || error.message
    }
}



export const deleteTask = async(id)=>{
    try {
        const response = await api.delete(`/task/${id}`) 
       return response.data
    } catch (error) {
        throw error.response?.data || error.message
    }
}
