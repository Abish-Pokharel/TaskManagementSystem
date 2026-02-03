import mongoose from "mongoose"
export const connectDb = async() =>{
    await mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("Database connected successfully.")
    })
    .catch((err) => {
        console.log("Database connection error")
        console.log(err)
    })
}