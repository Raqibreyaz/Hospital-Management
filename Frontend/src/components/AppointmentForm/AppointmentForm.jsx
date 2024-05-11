import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../../main'
import { CgLogIn } from 'react-icons/cg';
import axios from 'axios';
import { toast } from 'react-toastify';

const AppointmentForm = () => {

    const { user } = useContext(Context)

    const [allDoctors, setAllDoctors] = useState([])

    const [depart, setDepart] = useState('')

    const onSubmit = async (data) => {

        const [doctor_firstname, doctor_lastname] = data.doctor.split(" ")

        const appointment = {
            doctor_firstname,
            doctor_lastname,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            dob: user.dob,
            nic: user.nic,
            appointment_date: data.appointment_date,
            department: data.department,
            hasVisited: Boolean(data.hasVisited),
            address: data.address
        }

        try {

            let res = await axios.post('http://localhost:3000/api/v1/appointment/appoint',

                { ...appointment },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            )

            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()

    useEffect(() => {

        const fetchUser = async () => {
            try {

                const { data } = await axios.get('http://localhost:3000/api/v1/users/get-doctors', {
                    withCredentials: true
                })

                setAllDoctors(data.doctors)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        fetchUser();
    }, [])

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[50%] max-sm:w-[90%] bg-zinc-700 rounded-md p-[20px] shadow-md'>
                <h1 className=' text-[30px] text-center capitalize mb-[20px]'>appointment</h1>
                {/* address */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='w-full flex flex-col gap-2 rounded-md overflow-hidden'>
                        <textarea rows={3} placeholder='address goes here' className='resize-none outline-none bg-transparent border border-zinc-900 p-[5px]' {...register('address', { required: true })}></textarea>
                        {errors['address'] && <span className='text-red-500'>*address is required</span>}
                        <div className='flex flex-col border border-zinc-900 rounded-md p-[5px]'>
                            <span>Appointment date</span>
                            <input {...register('appointment_date', { required: true })} type="date" className='bg-transparent outline-none' />
                        </div>
                        {errors.appointment_date && <span className='text-red-500'>*Appointment Date is Required</span>}
                    </div>
                    {/* department */}
                    <div>
                        <select className='bg-transparent border border-zinc-900 rounded-md p-[5px] capitalize' {...register('department', { required: true })} onChange={(e) => setDepart(e.target.value)}>
                            <option className='bg-zinc-800'>select department</option>
                            {
                                [
                                    'pediatrics',
                                    'orthopadics',
                                    'cardiology',
                                    'radiology',
                                    'neurology',
                                    'onco logy',
                                    'physical therapy',
                                    'dermatology',
                                    'ent'
                                ].map((department, index) => (
                                    <option key={index} className='bg-zinc-800' value={department}>{department}</option>
                                ))
                            }
                        </select>
                        {errors.department && <span className='text-red-500'>*department is required</span>}
                    </div>

                    {/* select doctors */}
                    <select disabled={!depart} className='bg-zinc-700 border border-zinc-900 rounded capitalize p-[5px] w-auto' {...register('doctor',{required:true})}>
                        <option value="select doctor" >select doctor</option>
                        {
                            allDoctors.filter((doctor) => (doctor.doctorDepartment === depart)).map((doctor, index) => (
                                < option key={index} value={`${doctor.firstName} ${doctor.lastName}`}>
                                    {doctor.firstName} {doctor.lastName}
                                </option>
                            ))
                        }
                    </select>
                    {errors.doctor && <span className='text-red-500'>*doctor is required</span>}

                    {/* visited checkbox */}
                    <div className='flex gap-2'>
                        <label htmlFor='checkbox' className='capitalize'>visited before?</label>
                        <input type="checkbox" id='checkbox' {...register('hasVisited')} />
                    </div>

                    <button type='submit' disabled={isSubmitting} className='
                    mx-auto bg-blue-600 w-[200px] max-sm:w-[50%] rounded-[20px] py-[10px] px-[30px] flex items-center justify-center'>submit</button>
                </div>
            </form >
        </div >
    )
};

export default AppointmentForm;
