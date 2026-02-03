import React, { useState } from 'react'
import { TbAsterisk } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'

const initialState = {
    title: '',
    text: '',
    priority: 'low',
    pinned: false,
    user: ''
}

const TaskForm = ({ onSubmit, onClose }) => {
    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
    }

    const validate = () => {
        const errs = {}
        if (!form.title || form.title.trim().length < 7) errs.title = 'Title must be at least 7 characters.'
        if (!form.text || form.text.trim().length < 12) errs.text = 'Text must be at least 12 characters.'
        if (!['high', 'medium', 'low'].includes(form.priority)) errs.priority = 'Invalid priority.'
        if (!form.user || form.user.trim().length === 0) errs.user = 'User id is required.'
        return errs
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                    value={form.title}
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
                 
// register   value={form.text}
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
                    value={form.priority}
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
                    checked={form.pinned}
                    onChange={handleChange}
                    className="w-4 h-4"
                />
                <label htmlFor="pinned" className="font-medium">Pinned</label>
            </div>

            <div className="flex flex-col gap-1 px-2 py-2 rounded-md">
                <label className="text-[16px] font-semibold" htmlFor="user">User ID</label>
                <input
                    id="user"
                    name="user"
                    value={form.user}
                    onChange={handleChange}
                    className="border border-gray-400 p-2 rounded"
                    placeholder="User ObjectId"
                    type="text"
                    required
                />
                {errors.user && <span className="text-red-600 text-sm">{errors.user}</span>}
            </div>

            <div className="w-full mt-2 px-2">
                <button className="w-full bg-blue-600 py-2 text-white font-bold rounded-sm" type="submit">Create Task</button>
            </div>
        </form>
        </div>
    )
}

export default TaskForm