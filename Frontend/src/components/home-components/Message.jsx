// MessageForm.js

import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgLogIn } from 'react-icons/cg';
import { SiPanasonic } from 'react-icons/si';
import { toast } from 'react-toastify';

const MessageForm = () => {

  const onSubmit = async (e) => {
    try {

      await axios.post('http://localhost:3000/api/v1/message/send',
        {
          firstName: e.firstName,
          lastName: e.lastName,
          email: e.email,
          phone: e.MobileNumber,
          message: e.message
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then((res) => { toast.success(res.data.message) })
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  return (
   
    <form onSubmit={handleSubmit(onSubmit)} className="gap-2 flex flex-col p-4 rounded-lg shadow-md  bg-inherit">
      <h1 className='text-[3vw]'>Send us a message</h1>
      <div className="flex gap-[1vw] max-sm:flex-col">
        <input
          type="text"
          className="w-full p-2 rounded border border-zinc-700 focus:outline-none focus:border-blue-500 bg-inherit"
          placeholder='First Name'
          {...register('firstName', { required: true })}
        />
        <input
          type="text"
          className="w-full p-2  rounded border border-zinc-700 focus:outline-none focus:border-blue-500 bg-inherit"
          placeholder="Last Name"
          {...register('lastName', { required: true })}
        />
      </div>
      <div className='flex gap-[1vw] max-sm:flex-col'>
        <input
          type="email"
          className="w-full p-2 rounded border border-zinc-700 focus:outline-none focus:border-blue-500 bg-inherit"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <input
          type="text"
          className="w-full p-2 rounded border border-zinc-700 focus:outline-none focus:border-blue-500 bg-inherit"
          placeholder="Mobile Number"
          {...register('MobileNumber', { required: true, minLength: 10 })}
        />
      </div>
      {errors.MobileNumber && <span className='text-red-500'>*mobile number should be of 10 digits</span>}
      <textarea
        className="w-full p-2  rounded border border-zinc-700 focus:outline-none focus:border-blue-500 resize-none bg-inherit"
        rows={4}
        placeholder="Type your message here..."
        {...register('message', { required: true, minLength: 10 })}
      />
      {errors.message && <span className='text-red-500'>*message should contain at least 10 characters</span>}
      <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white px-[2vw] py-[1vw] max-sm:text-[3vw] rounded-md hover:bg-blue-600 w-1/2 mx-auto">
        Send Message
      </button>
    </form >
  );
};

export default MessageForm;
