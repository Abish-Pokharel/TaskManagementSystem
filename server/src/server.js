// npm init for package
// npm i express 
import express from 'express'
import http from 'http'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import taskRoutes from "./routes/task.routes.js"
import {connectDb} from "./config/db.config.js"
import {errorHandler} from "./middlewares/errorhandler.middleware.js"
// express app instance
const app = express()

app.use(express.json()) 

app.use(cors({
    origin:'*'
}))

// database connection
connectDb()

// http server
const server = http.createServer(app)

// using users
app.use('/users',userRoutes)
// using auth
app.use('/auth',authRoutes)
// using task
app.use("/task",taskRoutes)

server.listen(5000 , ()=>{
    console.log("server is running at http://localhost:5000")
})
// req.body => data
// req.params <= object

app.use(errorHandler)
