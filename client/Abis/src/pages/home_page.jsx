import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'
import Navbar from '../components/header/index.jsx'
import Card from '../components/tasks/card.jsx'
import { IoMdAdd } from 'react-icons/io'
import TaskPage from './task_page.jsx'
import Modal from 'react-modal'
import toast from 'react-hot-toast'
import { getUserDetail } from '../api/auth_api.js'
import { getAllTasks } from '../api/task_api.js'


const Homepage = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [tasks, setTasks] = useState(null)
  const navigate = useNavigate()

  const [modalState, setModalState] = useState({type:'add', data: null, isOpen: false})

  const openAddModal = ()=>{
    setModalState({type:'add', data: null, isOpen: true})
  }

  const onClose = ()=>{
    setModalState({type:'add', data: null, isOpen: false})
  }

  // get user Details
  const getProfile = async()=>{
    try {
      const response = await getUserDetail()
      setUserInfo(response.data)
      console.log(response)
    } catch (error) {
      toast.error(error?.message || "Something went wrong" )
      if (error?.status === 401){ {
        navigate('/login')}
        
      }
    }
  }

  const getTasks = async()=>{
    try{
      const response = await getAllTasks()
      console.log(response)
      setTasks(response.data)
    }catch(error){
      toast.error(error?.message || "Failed to fetch tasks")
    }
  }

  // fetch user details on page load 
  useEffect(()=>{
    getTasks()
    getProfile()
  },[])


  return (
    <main className='h-full w-full'>
        <Navbar  userInfo = {userInfo}/>
        {tasks &&  tasks.length > 0 && <div>
          {
            tasks.map((task)=>{
              return <Card key={task._id} task={task}/>
            })
          }
          </div>}
        
        <button onClick={openAddModal} title='Add new Task' className='fixed bottom-30 right-20 h-12 aspect-square rounded-md bg-blue-500 text-white font-bold cursor-pointer flex items-center justify-center'>
          <IoMdAdd size={25} className='font-bold' />
        </button>
        <Modal className={'w-[40%] h-fit mx-auto mt-16'} isOpen={modalState.isOpen} onRequestClose={onClose} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'}}}>
        <TaskPage data = {modalState.data} type = {modalState.type} onClose={onClose}/>
        </Modal>

    </main>
  )
}

export default Homepage