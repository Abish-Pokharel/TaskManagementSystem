import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title content is required"],
      minlength: 7
    },
    text: {
      type: String,
      required: [true, "Task text content is required"],
      minlength: 12
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "low"
    },
    pinned:{
      type : Boolean,
      required : true , 
      default : false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"]
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("task", taskSchema);
export default Task;
