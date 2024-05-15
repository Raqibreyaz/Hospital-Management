import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { Login, Messages, AddNewAdmin, AddNewDoctor, Doctors, Sidebar, Home } from './components/index.js'
import { useCallback, useEffect } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import { Context } from './main.jsx';

function App() {

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context)

  useEffect(() => {

    (async () => {

      try {

        let res = await axios.get('http://localhost:3000/api/v1/users/admin/me', {
          withCredentials: true
        })

        setIsAuthenticated(true)
        setUser(res.data.user)
        toast.success(res.data.message)
      } catch (error) {
        setIsAuthenticated(false)
        setUser({})
        // toast.error(error.response.data.message)
      }
    }
    )()
  }, [])

  return (
    <div className='bg-blue-800 min-h-screen w-screen text-white flex max-sm:flex-col'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/add-admin' element={<AddNewAdmin />} />
          <Route path='/add-doctor' element={<AddNewDoctor />} />
          <Route path='/get-doctors' element={<Doctors />} />
        </Routes>
        <ToastContainer position='top-center' theme='dark' />
      </Router>
    </div>
  )
}

export default App
