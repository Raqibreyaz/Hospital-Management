import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from './Container';

function Signup() {

  const { register, handleSubmit, formState: { errors, isSubmitting }
  } = useForm();

  const { isAuthenticated } = useContext(Context)

  const Navigate = useNavigate()


  const onSubmit = async (data) => {

    try {
      let res = await axios.post('http://localhost:3000/api/v1/users/admin/addnew', {
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        phone: data.phone,
        email: data.email,
        nic: data.nic,
        gender: data.gender,
        password: data.password,
      }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })

      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  useEffect(() => {

    if (!isAuthenticated)
      Navigate('/login')

  }, [])


  return (
    <Container>
      <div className='mb-3'>
        <img src={'/logo.png'} alt="" className='mx-auto h-[25vmin] invert' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='max-sm:w-[100%] bg-zinc-900 px-[5vmin] py-[50px] rounded-[3vmin] mx-auto'>
        <h1 className='text-[30px] max-sm:text-[20px] text-center mb-2 font-semibold'>Add an Admin</h1>
        <div className='flex max-sm:flex-col sm:gap-[7vmin] gap-[2vmin]'>
          <div className='w-full flex flex-col sm:gap-[5vmin] gap-[2vmin]'>
            {
              [
                {
                  type: 'text',
                  name: 'firstName'
                },
                {
                  type: 'text',
                  name: 'lastName'
                },
                {
                  type: 'email',
                  name: 'email'
                },
                {
                  type: 'date',
                  name: 'dob'
                },
              ].map((input, index) => (
                <div className='w-full' key={index}>
                  <input type={input.type} placeholder={input.name}
                    {...register(input.name, { required: true })}
                    className='p-[2vmin] bg-zinc-800 rounded outline-none w-full'
                  />
                  {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                </div>
              ))
            }
          </div>
          <div className='w-full flex sm:gap-[5vmin] gap-[2vmin] flex-col' >
            {
              [
                {
                  type: 'text',
                  name: 'nic'
                },
                {
                  type: 'password',
                  name: 'password'
                },
                {
                  type: 'text',
                  name: 'phone'
                },
              ].map((input, index) => (
                <div className='w-full' key={index}>
                  <input type={input.type} placeholder={input.name}
                    {...register(input.name, { required: true })}
                    className='p-[2vmin] bg-zinc-800 rounded outline-none w-full'
                  />
                  {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                </div>
              ))
            }
            <select name="gender" className='bg-zinc-800 border-zinc-800 p-[2vmin] rounded' {...register('gender', { required: '*Gender is required' })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className='bg-blue-500 w-1/4 max-sm:w-1/2 mt-[4vmin] mx-auto block  px-[4vmin] py-[1vmin] rounded-[3vmin] text-white'>Add</button>
      </form>
    </Container >
  );
}

export default Signup;

