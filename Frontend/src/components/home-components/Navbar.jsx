import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../main'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

  const [show, setShow] = useState(false)

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

  return (
    <nav className={`sticky flex sm:justify-between items-center max-sm:items-start  max-sm:flex-col sm:px-[20px] ${show ? 'bg-zinc-800 max-sm:absolute max-sm:gap-[10vh]' : 'sticky'}  z-50 w-full `}>
      <div className='h-[100px] w-[150px]'>
        <img src="/public/logo.png" alt="" className='h-full w-full leading-tight tracking-tighter' />
      </div>
      {
        isAuthenticated && <div className={`flex gap-[20px] max-sm:flex-col ${show ? 'flex max-sm:px-[10px]' : 'max-sm:hidden '}`}>
          <Link to='/'>Home</Link>
          <Link to='/appointment'>Appointment</Link>
          <Link to='/about'>About Us</Link>
        </div>
      }
      <div className={`${show?'max-sm:py-[20px] max-sm:px-[10px]':''}`}>
        {
          isAuthenticated ?
            <div className={`${show ? 'block' : 'max-sm:hidden'}`}><button className='bg-red-500 rounded-[20px] px-[20px] py-[10px] font-semibold' onClick={handleLogout}>Logout</button></div> :
            <div className={`flex gap-[20px] max-sm:flex-col ${show ?'flex': 'max-sm:hidden'}`}>
              <button className='bg-white text-black px-[20px] py-[7px] rounded-[20px] font-semibold' onClick={()=>navigate('/signup')}>Sign Up</button>
              <button className='bg-white text-black px-[20px] py-[7px] rounded-[20px] font-semibold' onClick={()=>navigate('/login')}>Login</button>
            </div>
        }
      </div>
      <div className='sm:hidden absolute top-[30px] right-[20px] text-[30px]' onClick={() => setShow(!show)}>
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}


export default Navbar;
