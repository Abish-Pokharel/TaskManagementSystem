import axios from "axios";

// axious instance

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export default api;


// interceptors to add token to request headers

api.interceptors.request.use((config)=>{
    const access_token = localStorage.getItem("access_token")
    if (access_token) {
        config.headers.Authorization = access_token
    }
    return config
}, (error)=>{
    return Promise.reject(error)
})
