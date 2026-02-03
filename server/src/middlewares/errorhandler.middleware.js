// middleware
export const errorHandler = (error ,  req ,res,next) => {
    console.log("error handler", error)
    res.status(500).json({
        message:error?.message || "Interval server error"
    })
}

// const middleware3 = (req , res , next) => {
//     // logic
//     console.log("middleware3" , req.user)
//     res.status(200).json({
//         message : "response from middleware"
//     })
//     next()
// }
// using app level middleware
// const middleware = (req,res , next) => {
//     // logic
//     console.log("middleware");
//     req.user = {
//         name : "amir"
//     }
//     next(12)
// }


// middleware
// function => request object , response object and next function
// why?
// - if multiple controller have repeated logic then we can define middleware to reuse it
// - can implement custom logic
// - end request response cycle
// - call next middleware
// - can modify req res object

// Types:
// 1. Application level
// 2. Route level
// 3. Error handler -> err , 

// server req -> middle -> api