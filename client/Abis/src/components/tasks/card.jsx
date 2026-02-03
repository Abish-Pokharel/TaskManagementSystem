import React from 'react'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const Card = () => {
  return (
    <div className='border border-gray-300 py-3 px-4 rounded-md shadow flex flex-col gap-3'>
        <div className='flex justify-between'>
            <p className='text-lg font-bold text-gray-800'>Task</p>
            <BsFillPinAngleFill size={20} className='text-gray-500' />
        </div>
        <div className='bg-yellow-600 w-25 rounded-md text-center text-white font-bold text-sm py-0.5'>
            High
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-[18px] font-semibold text-gray-500 line-clamp-1'>Task Title</p>
        </div>
        <p className='text-[14px] text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse amet ipsa nisi deserunt incidunt mollitia.</p>
        <div className='flex justify-end gap-2 mt-1'>
            <FaEdit title='Edit Task' size={22} className='text-blue-500 hover:text-blue-700 cursor-pointer'/>
            <FaTrash title='Delete Task'  size={22} className='text-red-500 hover:text-red-700 cursor-pointer'/>
        </div>

    </div>
  

  )
}

export default Card