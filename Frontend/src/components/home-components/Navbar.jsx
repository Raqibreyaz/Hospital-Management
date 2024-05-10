// Navbar.js
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../main'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function Navbar() {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    await axios.get('http://localhost:3000/api/v1/users/patient/logout', { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message)
        setIsAuthenticated(false)
      })
      .catch((error) => { toast.error(error.response.data.message) })
  }

  const goToLogin = (e) => {
    navigate('/login')
  }


  useEffect(() => {
    console.log('inside navbar and value of authentication is ', isAuthenticated);
  }, [isAuthenticated])

  return (
    <nav className=" relative z-20 w-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between px-[2vw]">
          <div className="flex items-center">
            <img src="/public/logo.png" alt="" className='h-[7vw] w-[20vw] invert' onClick={() => navigate('/')} />
          </div>
          {
            isAuthenticated ?
              <div className="flex items-center gap-[10vw]">
                <ul className="flex justify-end">
                  {
                    [
                      { address: '/', content: 'home' },
                      { address: '/appointment', content: 'appointment' },
                      { address: '/about', content: 'about us' },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link to={link.address}
                          className="block py-2 px-4 capitalize text-white hover:text-gray-100"
                        >
                          {link.content}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                <button className='capitalize bg-red-600 px-[2vw] py-[0.5vw] rounded-[2vw] font-semibold' onClick={handleLogout}>logout</button>
              </div> : <button className='capitalize bg-white text-black px-[2.5vw] rounded-[2.5vw] py-[0.5vw] font-semibold' onClick={goToLogin}>login</button>
          }
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
