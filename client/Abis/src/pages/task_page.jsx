// rafce
import React from "react"
import TaskForm from "../components/forms/task_form"

const TaskPage = ({onClose, type, data}) =>{
    return (
        <main className="h-full w-full py-10">
           <div className="shadow-md py-3 px-4 min-h-120 min-w-120 rounded-md ">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Create Task</h1>
                
            </div>            
                <TaskForm data = {data} type = {type} onClose={onClose} />               
           </div>
        </main>
    )
}

export default TaskPage

// htmlFor : for which input the label is for
