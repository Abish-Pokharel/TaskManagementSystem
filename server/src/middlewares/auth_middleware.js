import { verifyToken } from "../utils/jwt.utils.js"
import User from "../models/user.model.js"
export const authenticate = async(req , res , next) => {
    try{
    //   get access token from auth user
      const token = req.headers["authorization"]
      if(!token){
        next({
            message : "Unauthorized . Access denied",
            status : 401
        })
        return
      }
    //   check token validity
    const decoded_data = verifyToken(token)
    console.log(token)
    if(!decoded_data){
        next({
            message : "Invalid Token",
            status : 400
        })
        return
    }

    // token expiry
    if (decoded_data.exp * 1000 < Date.now()){
        next({
            status : 401 ,
            message : "Unauthorized access token required."
        }
        )
        return
    }
    const user = await User.findOne({_id : decoded_data.id , email : decoded_data.email})
    if(!user){
        next({
            status : 401 ,
            message : "Unauthorized user"
        })
    }
    req.user = {
        id : user._id,
        email : user.email,
    }
    next()
    }catch(error){
        next(error)
    }

}