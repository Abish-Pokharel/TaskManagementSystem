import  {hashPassword}  from "../utils/bcrypt.utils.js"
import { comparePassword } from "../utils/bcrypt.utils.js"
import User from "../models/user.model.js"
import { generateToken } from "../utils/jwt.utils.js"
// register user
export const register = async (req , res , next) =>{
    try{
    const {first_name , last_name , email , password} = req.body
    if(!first_name){
        throw new Error("First_name is required");
    }
    if(!last_name){
        throw new Error("last_name is required");
    }
    if(!email){
        throw new Error("email is required");
    }
    if(!password){
        next ({
           error : "Enter your password",
           status : 201
        })
    }
    const hashpass = await hashPassword(password)
    const user = await User.create({first_name , last_name , email , password:hashpass})
    res.status(201).json({
        message : "Account created"
     })
    }catch(error){
     res.status(500).json({
        message : error?.message || "something went wrong"
     })
     next(error)
}
}
// login
export const login = async(req,res , next) =>{
    try{
        const {email , password} = req.body;
        if(!email){
        throw new Error("email is required");
        }
        if(!password){
        throw new Error("password is required");
        }
        const user = await User.findOne({email:email})
        if(!user){
            throw new Error("Invalid email or password")
        }
        const is_pass_matched = await comparePassword(password , user.password)
        if(!is_pass_matched){
            throw new Error("Invalid email or password")
        }
        const access_token = generateToken({
            id : user._id,
            email : user.email,
            first_name : user.first_name,
            last_name : user.last_name
        })
        res.status(201).json({
            message : "Loggedin",
            data : user,
            access_token : access_token
        });
    }catch(error){
     res.status(500).json({
        message : error?.message || "something went wrong"
     });
     next(error)
}
}

// api(application programming interface) / controller



export const getUserDetail = async(req,res,next)=>{
    try {
        const id = req.user.id;
        const user = await User.findOne({_id:id})
        res.status(200).json({
            message: 'Profile fetched',
            data : user
        })
    } catch (error) {
        next(error)
    }
}