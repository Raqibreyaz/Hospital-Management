import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgLogIn } from 'react-icons/cg';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        nicOrAadhaar: '',
        dob: '',
        address: '',
        appointmentDate: '',
        department: '',
        doctor: '',
        gender: ''
    });

    const onSubmit = (data) => {
        console.log(data);
    }


    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()

    const inputs = [
        {
            type: 'text',
            name: "firstName"
        },
        {
            type: 'text',
            name: "lastName"
        },
        {
            type: 'email',
            name: "email"
        },
        {
            type: 'text',
            name: "nic"
        },
        {
            type: 'date',
            name: "dob"
        },
        {
            type: 'text',
            name: "address"
        },
        {
            type: 'date',
            name: "appointment_date"
        },
        {
            type: 'text',
            name: "department"
        },
    ]

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] bg-zinc-700 rounded-md p-[2vw] shadow-md'>
                <h1 className=' text-[2vw] w-full'><span className='mx-auto'>Appointment </span> </h1>
                <div className='flex flex-wrap gap-[2vw] w-full'>
                    {
                        inputs.map((inp) => (
                            <div key={Date.now()} className='w-[45%]'>
                                <label htmlFor={inp.name}>{inp.name} : </label>
                                <input type={inp.type} placeholder={inp.name} id={inp.name}  {...register(`${inp.name}`, { required: true })} className='border border-zinc-800 bg-transparent outline-none rounded-md p-[1vw] w-1/2' />
                            </div>
                        ))
                    }
                </div>
                <select className='bg-zinc-700 mt-[1vmax] border border-zinc-900 rounded'>
                    <option value="select doctor" className='bg-zinc-800'>select doctor</option>
                    <option value="select doctor" className='bg-zinc-800'>select doctor</option>
                </select>
                <button type='submit' disabled={isSubmitting} className='block mx-auto bg-blue-600 rounded-md py-[1vw] px-[2vw]'>submit</button>
            </form>
        </div>
    )
};

export default AppointmentForm;
