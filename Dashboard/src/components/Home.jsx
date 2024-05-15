import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../main'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Container, AppointmentSection } from './index'
import { Link } from 'react-router-dom'

function Home() {

  const Navigate = useNavigate()

  const { isAuthenticated, user } = useContext(Context)

  const [doctorsLength, setDoctorsLength] = useState(0)
  const [appointmentsLength, setAppointmentsLength] = useState(0)

  useEffect(() => {

    if (!isAuthenticated) {
      console.log('user is not authenticated');
      Navigate('/login')
    }

      ; (async () => {
        try {

          let res1 = await axios.get('http://localhost:3000/api/v1/users/get-doctors', {
            withCredentials: true
          })
          let res2 = await axios.get('http://localhost:3000/api/v1/appointment/all-appointments', {
            withCredentials: true
          })

          setDoctorsLength(res1.data.doctors.length)
          setAppointmentsLength(res2.data.appointments.length)

        } catch (error) {
          toast.error(error.response.data.message)
          // console.error(error.response.data.message)
        }
      }
      )()
  }, [])

  return (
    <Container>
      <div className='flex gap-2 justify-center flex-wrap max-mobile:flex-col'>
        <div className='w-full  h-[200px] border rounded-lg flex items-center justify-between p-2'>
          <img src={'/public/doc.png'} className='w-[200px] h-full max-mobile:h-[40vw] max-mobile:w-[38vw]' alt="" />
          <div className='min-w-1/2 max-mobile:text-[4vw]'>
            <h1 className='capitalize font-semibold'>hello, <span className='text-red-500'>{user.firstName} {user.lastName}</span></h1>
            <p className='leading-tight tracking-tighter max-mobile:text-[3vw]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero minus voluptatibus, iste soluta labore ea aperiam dolore corrupti maiores?</p>
          </div>
        </div >
        <div className='w-[45%] h-[200px] max-mobile:w-full max-mobile:h-[100px] border rounded-lg flex justify-center flex-col p-[5px]'>
          <h1 className='text-[22px] capitalize max-mobile:text-[18px]'>total appointments</h1>
          <h1 className='text-[18px] max-mobile:text-[15px]'>{appointmentsLength}</h1>
        </div>
        <div className='w-[45%] h-[200px] max-mobile:w-full max-mobile:h-[100px] border rounded-lg flex justify-center flex-col p-[5px]'>
          <Link to='/get-doctors'>
            <h1 className='text-[22px] capitalize max-mobile:text-[18px]'>registered doctors</h1>
          </Link>
          <h1 className='text-[18px] max-mobile:text-[15px]'>{doctorsLength}</h1>
        </div>
      </div>
      <AppointmentSection />
    </Container>
  )
}

export default Home
