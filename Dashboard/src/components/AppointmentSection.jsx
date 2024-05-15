import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Context } from '../main'
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel, MdDeleteForever } from "react-icons/md";

function Appointments() {

    const [appointments, setAppointments] = useState([])
    const [appointmentState, setAppointmentState] = useState(false)

    const { isAuthenticated } = useContext(Context)

    const Navigate = useNavigate()

    const handleAppointmentUpdate = (appointmentId, e) => {
        (async () => {
            try {
                const res = await axios.post(`http://localhost:3000/api/v1/appointment/update/${appointmentId}`, {
                    status: e.target.value
                }, {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                toast.success(res.data.message)
                setAppointmentState(!appointmentState)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        )()
    }

    const handleAppointmentDelete = async (appointmentId) => {
        try {
            let res = await axios.post(`http://localhost:3000/api/v1/appointment/delete/${appointmentId}`, {}, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            toast.success(res.data.message)
            setAppointmentState(!appointmentState)
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    useEffect(() => {

        try {
            (async () => {
                let res = await axios.get('http://localhost:3000/api/v1/appointment/all-appointments', {
                    withCredentials: true
                });

                res.data.appointments.reverse()

                setAppointments(res.data.appointments);
            }
            )()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }, [appointmentState])


    return (
        <div className='border mt-[20px] border-zinc-800 bg-zinc-900 rounded-lg'>
            <h1 className='capitalize text-[30px] max-sm:text-[20px] p-2 text-blue-500 max-sm:text-center sticky top-0'>appointments</h1>
            <div className='overflow-x-auto'>
                <table className='w-full '>
                    <tbody className='overflow-auto'>
                        <tr className='text-[20px] max-sm:text-[17px]'>
                            {
                                [
                                    'patient',
                                    'date',
                                    'doctor',
                                    'departments',
                                    'status',
                                    'visited'
                                ].map((heading, index) => (
                                    <th key={index} className='font-semibold capitalize '>{heading}</th>
                                ))
                            }
                        </tr>
                        {
                            appointments.map((appointment) => (
                                <tr key={appointment._id} className=' sm:text-[2vw] '>
                                    {
                                        [
                                            {
                                                key: `${appointment.firstName} ${appointment.lastName}`
                                            },
                                            {
                                                key: appointment.appointment_date.slice(0, 10)
                                            },
                                            {
                                                key: `${appointment.doctor.firstName} ${appointment.doctor.lastName}`
                                            },
                                            {
                                                key: appointment.department
                                            },
                                            {
                                                key: <select value={appointment.status} onChange={(e) => (
                                                    handleAppointmentUpdate(appointment._id, e)
                                                )} className={`bg-zinc-950 border border-zinc-950 rounded p-[0.5vw] outline-none`} style={
                                                    {
                                                        color: { "pending": "yellow", "accepted": "green", "rejected": "red" }[appointment.status]
                                                    }
                                                }>
                                                    <option value="pending" className=' text-yellow-500'>pending</option>
                                                    <option value="accepted" className='text-green-500'>accepted</option>
                                                    <option value="rejected" className='text-red-500'>rejected</option>
                                                </select>
                                            },
                                            {
                                                key: appointment.hasVisited ? <FaCheckCircle className='sm:text-[2.5vw] text-[20px] text-center text-green-500' /> : <MdCancel className='sm:text-[2.5vw] text-[20px] text-center text-red-400' />
                                            },
                                            {
                                                key: <MdDeleteForever className='text-[25px] text-red-700' onClick={() => {
                                                    handleAppointmentDelete(appointment._id)
                                                }} />
                                            }
                                        ].map((obj, index) => (
                                            <td className='px-[1vw] p-1 text-white whitespace-nowrap' key={index}>{obj.key}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
            </div>
        </div>
    )
}

export default Appointments
