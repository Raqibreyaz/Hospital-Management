import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdHome as HomeSvg } from "react-icons/io";
import { FaUserDoctor as DoctorsSvg } from "react-icons/fa6";
import { MdAddModerator as AddAdminSvg } from "react-icons/md";
import { IoPersonAdd as AddDoctorSvg } from "react-icons/io5";
import { AiFillMessage as MessagesSvg } from "react-icons/ai";
import { BiSolidLogOut as LogoutSvg } from "react-icons/bi";
import { toast } from 'react-toastify';
import axios from 'axios';

function Sidebar() {

  const Navigate = useNavigate()

  async function handleLogout() {
    try {
      let res = await axios.get('http://localhost:3000/api/v1/users/admin/logout',
        {
          withCredentials: true
        }
      )

      toast.success(res.data.message)
      Navigate('/login')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='sm:h-screen sm:w-14 px-[15px] py-[10px]'>
      <div className='flex sm:gap-4 gap-[3vw] sm:flex-col justify-center h-full'>
        {
          [
            {
              name: 'Home',
              to: '/',
              svg: <HomeSvg />,
            },
            {
              name: 'Doctors',
              to: '/get-doctors',
              svg: <DoctorsSvg />,
            },
            {
              name: 'Add New Admin',
              to: '/add-admin',
              svg: <AddAdminSvg />,
            },
            {
              name: 'Add New Doctor',
              to: "add-doctor",
              svg: <AddDoctorSvg />,
            },
            {
              name: 'Messages',
              to: "/messages",
              svg: <MessagesSvg />,
            },
          ].map((sidelink, index) => (
            <Link key={index} className='text-[30px] max-sm:text-[25px]' to={sidelink.to} >
              {sidelink.svg}
            </Link>
          ))
        }
        <span className='text-[30px] max-sm:text-[25px]' onClick={handleLogout}>
          <LogoutSvg />
        </span>
      </div>
    </div>
  )
}

export default Sidebar
