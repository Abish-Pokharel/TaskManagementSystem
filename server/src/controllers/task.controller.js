import Task from "../models/task_model.js";

export const create_task = async (req, res, next) => {
  try {
    let { title, text, priority, user , pinned } = req.body;
    if (!title) throw new Error("Title is required");
    if (!text) throw new Error("Task text is required");
    if (!priority) throw new Error("Priority is required");
    if (!user) throw new Error("User is required");
    if (!pinned) throw new Error("Pinned is required");
    priority = priority.toLowerCase()
    const task = await Task.create({
      title,
      text,
      priority,
      user,
      pinned
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};


export const get_all = async(req , res , next) => {
    try{
        const user = req.user.id
        const tasks = await Task.find({user : user}).populate("user")
         res.status(200).json({
         message: "Tasks fetched",
         data: tasks,
         success: true,
  });

    }catch(error){
        next(error);
    }
}

export const get_by_id = async(req,res,next) => {
    try{
      const user = req.params.user;
      const task = await Task.findOne({user})
      
      if(!user){
    next({
      status :404,
      message : "User not Found"
    })
  }
  res.status(200).json({
    message: `Task of id ${user}`,
    data : task
  });
    }catch(error){
        next(error);
    }
}

export const delete_task = async(req , res , next) => {
  try{
  const user = req.params.user;
  const task = await Task.findOne({user : user});
  if(!user){
    next({
      message : "User task not found!",
      status:400
    })
    return
  }
  await task.deleteOne()

  res.status(200).json({
    message: `user: ${user}  tasks deleted`,
    data : null
  });
  }catch(error){
    next(error);
  }
}

export const update_task = async (req, res, next) => {
  try {
    const user = req.user.id; 
    const task = await Task.findOne({user : user});
    if (!task) {
      return next({
        message: "Task not found or unauthorized",
        status: 404
      });
    }
    const { title, text, priority , pinned } = req.body;
    if (title) task.title = title;
    if (text) task.text = text;
    if (priority) task.priority = priority.toLowerCase();
    if (pinned) task.pinned = pinned;

    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task
    });
  } catch (error) {
    next(error);
  }
};

export const pinned_task = async(req , res , next) => {
    try{
        const tasks = await Task.find()
        if(tasks.pinned == True){
         res.status(200).json({
         message: "Tasks fetched",
         data: tasks,
         success: true
         })
        }else{
          message : "No data in the pin"
         }
    }catch(error){
        next(error);
    }
}

