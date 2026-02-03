import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <main className='h-full w-full'>
        <div>
            <h1>Page Not Found</h1>
            <p>404 Not Found</p>
            <Link className="w-50 py-3 bg-blue-500 text-white font-bold rounded-md" to = {'/'}>Go Home</Link>
        </div>
    </main>
  )
}

export default NotFound