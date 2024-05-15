import React, { useContext, useEffect, useState } from 'react'
import { Container } from './index'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Context } from '../main'
import { useNavigate } from 'react-router-dom'


function Doctors() {

  const [doctors, setDoctors] = useState([])

  const { isAuthenticated } = useContext(Context)

  const Navigate = useNavigate()

  useEffect(() => {

    if (!isAuthenticated)
      Navigate('/login')

        ; (async () => {
          try {
            let res = await axios.get('http://localhost:3000/api/v1/users/get-doctors', {
              withCredentials: true
            })
            setDoctors(res.data.doctors)
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }
        )()

  }, [])

  useEffect(() => {
    console.log(doctors);
  }
    , [doctors])

  return (
    <Container>
      <div>
        <h1 className='text-blue-500 text-[35px] max-sm:text-[25px] sticky top-0 mb-4 bg-zinc-950 max-mobile:py-[10px] max-mobile:text-center'>
          Doctors
        </h1>
        <div className='flex gap-2 flex-wrap text-gray-200'>
          {
            doctors.map((doctor, index) => (
              <div key={index} className='border border-zinc-700 p-[10px] rounded-[10px] shadow-lg  max-mobile:w-full  gap-[10vh] text-[2vw] max-mobile:text-[3.2vw]'>
                <div className='sm:h-[25vw] sm:w-[25vw] h-[38vw] w-[38vw] max-mobile:h-[60vw] max-mobile:w-[60vw] rounded-full overflow-hidden object-cover mx-auto'>
                  <img src={doctor.doctorAvatar.url} alt="doctor" className='h-full w-full' />
                </div>
                <h2 className='capitalize font-bold text-[3vw] max-mobile:text-[5vw] text-center my-4'>{doctor.firstName} {doctor.lastName}</h2>
                <div>
                  {
                    [
                      {
                        key: 'email:  ',
                        value: doctor.email
                      },
                      {
                        key: 'phone:  ',
                        value: doctor.phone
                      },
                      {
                        key: 'dob:  ',
                        value: doctor.dob.slice(0, 10)
                      },
                      {
                        key: 'department:  ',
                        value: doctor.doctorDepartment
                      },
                      {
                        key: 'nic:  ',
                        value: doctor.nic
                      },
                      {
                        key: 'gender:  ',
                        value: doctor.gender
                      },
                    ].map((pair, index) => (
                      <div key={index} className='flex gap-2'>
                        <h3 className='font-semibold capitalize'>{pair.key}</h3>
                        <span>{pair.value}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Container >
  )
}

export default Doctors
