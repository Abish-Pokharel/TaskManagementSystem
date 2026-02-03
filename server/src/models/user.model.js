import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    first_name:{
        type : String,
        required : [true , "first name is required"]
    },
    last_name:{
        type : String,
        required : [true , "first name is required"] 
    },
    email:{
        type : String,
        required : [true , "last name is required"],
        unique : [true , "user already exists with provided email"]
    },
    password:{
        type : String,
        minLength : 6,
        required : [true , "Password is required"]
    }
},{timestamp:true})

// model
 const User = mongoose.model("User" , userSchema)
 export default User