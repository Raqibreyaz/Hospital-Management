import React, { useContext, useEffect } from "react"
import HomePage from "./pages/HomePage/Home.jsx"
import { Route, Routes, BrowserRouter as Router, useNavigate } from 'react-router-dom'
import Appointment from "./pages/AppointmentPage/Appointment.jsx"
import About from './pages/AboutusPage/About.jsx'
import Login from './pages/LoginPage/Login.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main.jsx"
import SignUpPage from "./pages/SignupPage/Signup.jsx"
import axios from "axios"

function App() {

  const { setIsAuthenticated, setUser } = useContext(Context)

  useEffect(() => {

    const fetchUser = async () => {

      try {

        let res = await axios.get('http://localhost:3000/api/v1/users/patient/me', {
          withCredentials: true,
        });

        if (Object.keys(res.data.user).length > 0) {
          setUser(res.data.user)
          setIsAuthenticated(true)
          toast.success(res.data.message)
        }

      } catch (error) {
        setUser({})
        setIsAuthenticated(false)
        // toast.error(error.response.data.message)
      }
    };

    fetchUser();
  }, []);


  return (
    <div className='font-["Neue_Montreal"] bg-zinc-800 text-white'>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>

    </div>
  )
}

export default App
