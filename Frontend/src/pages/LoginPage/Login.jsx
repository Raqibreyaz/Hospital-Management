import React, { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context)

  const Navigate = useNavigate()

  if (isAuthenticated)
    return Navigate('/')

  const onSubmit = async (e) => {

    try {

      let res = await axios.post('http://localhost:3000/api/v1/users/login', { email: e.email, password: e.password, role: 'patient' }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })

      toast.success(res.data.message)
        setUser(res.data.user)
        setIsAuthenticated(true)

      Navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] max-sm:w-[90vw] bg-zinc-900 rounded-[3vmin] p-[20px] shadow-lg ">
        <h2 className="text-center mb-4 text-[30px] font-medium ">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email Address:</label>
          <input type="email" id='email' {...register('email', { required: true })} className="appearance-none border bg-transparent border-zinc-800 rounded w-full p-[20px]  leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" autoFocus />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block  mb-2">Password:</label>
          <input type="password" id='password' {...register('password', { required: true, minLength: 8 })} className="appearance-none border border-zinc-800 bg-transparent rounded w-full p-[20px]  leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
          {errors.password && <span className='text-red-500'>*password should be at least 8 characters</span>}
        </div>
        <div className='text-center mb-4'>
          Don&apos;t have an account <Link to='/signup' className='text-blue-500'>Signup</Link>
        </div>
        <div className="mb-4 flex justify-center">
          <button type="submit" disabled={isSubmitting} className="w-[200px] mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-[20px] focus:outline-none focus:shadow-outline font-semibold text-[20px]">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;