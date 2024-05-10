import React, { useContext, useState } from 'react';
import { Context } from '../../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Login = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context)

  const Navigate = useNavigate()

  if (isAuthenticated)
    return Navigate('/')

  const onSubmit = async (e) => {
    console.log(e);
    try {

      let res = await axios.post('http://localhost:3000/api/v1/users/login', { email: e.email, password: e.password, role: 'patient' }, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res);
      toast.success(res.data.message)
      console.log('inside login and changing the value of authentication from ', isAuthenticated);
      setIsAuthenticated(true)
      Navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm bg-gray-100 rounded-lg px-4 py-8 shadow-lg">
        <h2 className="text-center mb-4 text-lg font-medium text-gray-800">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address:</label>
          <input type="email" {...register('email', { required: true })} className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" autoFocus />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
          <input type="password" {...register('password', { required: true, minLength: 8 })} className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
          {errors.password && <span className='text-red-500'>*password should be at least 8 characters</span>}
        </div>
        <div className="mb-4">
          <button type="submit" disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;