import React, { useState } from 'react'
import { TbAsterisk } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import toast from 'react-hot-toast'
import { addNewTask, editTask } from '../../api/task_api'



const initialState = {
    title: '',
    text: '',
    priority: 'low',
    pinned: false
}

const TaskForm = ({onClose, type, data }) => {


    const [formData, setForm] = useState(initialState)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value =  e.target.value
        setForm((s) => ({ ...formData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (formData.title.trim()=== '') {
                setErrors({...errors, title: 'Title is Required'})
                return
            }
            if (formData.text.trim()=== '') {
                setErrors({...errors, text: 'Content is Required'})
                return
            }
            if (type === 'add') {
                const resp =  addNewTask({...formData , pinned: formData.pinned === 'on' ? true : false});
                toast.success("Task created successfully")
            }else {
                const resp =  editTask(data._id, formData)
                toast.success("Task updated successfully")
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.message || "Failed to create task")
        }
    }

    

    return (
        
        <div className="relative">
            <button onClick={onClose} className="absolute top-2 right-2 h-10 text-2xl text-red-500 hover:text-red-700 cursor-pointer">
                <IoClose />
            </button>
            <form onSubmit={handleSubmit} className="bg-white p-5 rounded-md">
            <div className="flex flex-col gap-1 px-2 py-2 rounded-md">
                <label className="text-[16px] font-semibold" htmlFor="title">Title <TbAsterisk className="inline text-red-500" size={12} /></label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded"
                    placeholder="Enter task title"
                    type="text"
                    required
                />
                {errors.title && <span className="text-red-600 text-sm">{errors.title}</span>}
            </div>  

            <div className="flex flex-col gap-1 px-2 py-2 rounded-md">
                <label className="text-[16px] font-semibold" htmlFor="text">Content <TbAsterisk className="inline text-red-500" size={12} /></label>
                <textarea
                    id="text"
                    name="text"                 
                    value={formData.text}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded"
                    placeholder="Enter task details"
                    required
                    rows={4}
                />
                {errors.text && <span className="text-red-600 text-sm">{errors.text}</span>}
            </div>

            <div className="flex flex-col gap-1 px-2 py-2 rounded-md">
                <label className="text-[16px] font-semibold" htmlFor="priority">Priority </label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded"
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                {errors.priority && <span className="text-red-600 text-sm">{errors.priority}</span>}
            </div>

            <div className="flex items-center gap-2 px-2 py-2">
                <input
                    id="pinned"
                    name="pinned"
                    type="checkbox"
                    checked={formData.pinned}
                    onChange={handleChange}
                    className="w-4 h-4"
                />
                <label htmlFor="pinned" className="font-medium">Pinned</label>
            </div>
            <p>
                {errors.text && <span className="text-red-600 text-sm">{errors.text}</span>}
            </p>
            <div className="w-full mt-2 px-2">
                <button className="w-full bg-blue-600 py-2 text-white font-bold rounded-sm" type="submit">Create Task</button>
            </div>
        </form>
        </div>
    )
}

export default TaskForm