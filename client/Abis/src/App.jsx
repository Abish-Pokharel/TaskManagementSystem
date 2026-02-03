import './App.css'
import {Toaster} from 'react-hot-toast'
import RegisterPage from './pages/register.page.jsx'
import LoginPage from './pages/login_page.jsx'
import TaskPage from './pages/task_page.jsx'
import {BrowserRouter, Routes, Route} from 'react-router'
import Homepage from './pages/home_page.jsx'
import NotFound from './pages/not_found_page.jsx'


function App() {

  return (
        <main className = "h-screen min-w-full tracking-wider">
          <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/task" element={<TaskPage />} />
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={< NotFound />} />
            {/* <Route path="/product/:id" element={ <div>Product Page</div>} /> */}
            </Routes>
          </BrowserRouter> 
          <Toaster/>         
          </main>
  )
}



export default App

