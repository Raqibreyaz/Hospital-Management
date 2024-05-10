import React, { useContext, useEffect } from "react"
import HomePage from "./pages/HomePage/Home.jsx"
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom'
import Appointment from "./pages/AppointmentPage/Appointment.jsx"
import About from './pages/AboutusPage/About.jsx'
import Login from './pages/LoginPage/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main.jsx"

function App() {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context)

  // const Navigate = useNavigate()

  useEffect(() => {

    const fetchUser = async () => {
      try {
        let res = await axios.get('http://localhost:3000/api/v1/users/patient/me', {
          withCredentials: true,
        })
        // console.log('response got ',res);
        setUser(res.data.user)
        console.log('inside app and value of authentication is ', isAuthenticated);
        // setIsAuthenticated(true)
        // Navigate('/')
      } catch (error) {
        setUser({})
        // setIsAuthenticated(false)
      }
    }

    fetchUser()
  }
    , [isAuthenticated])

  return (
    <div className='font-["Neue_Montreal"] bg-zinc-800 '>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>

    </div>
  )
}

export default App
