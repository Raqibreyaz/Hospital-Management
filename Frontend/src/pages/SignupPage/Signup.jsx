import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {

  const { register, handleSubmit, formState: { errors, isSubmitting }
  } = useForm();

  const {isAuthenticated, setIsAuthenticated, setUser } = useContext(Context)

  const Navigate = useNavigate()

  if(isAuthenticated)
    return Navigate('/')


  const onSubmit = async (data) => {

    console.log(data);

    try {
      let res = await axios.post('http://localhost:3000/api/v1/users/patient/register', {
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        phone: data.phone,
        email: data.email,
        nic: data.nic,
        gender: data.gender,
        password: data.password,
        role: "patient"
      }, {
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
      console.log(error);
      toast.error(error.response.data.message)
      setUser({})
      setIsAuthenticated(false)
    }
  };

  return (
    <div className='w-full text-[3vmin] min-h-screen flex justify-center items-center text-gray-300'>
      <form onSubmit={handleSubmit(onSubmit)} className='max-sm:w-[90%] bg-zinc-900 px-[5vmin] py-[20px] rounded-[3vmin]'>
        <h1 className='text-[30px] max-sm:text-[20px] text-center mb-2'>Register</h1>
        <div className='flex max-sm:flex-col sm:gap-[7vmin] gap-[2vmin]'>
          <div className='flex flex-col sm:gap-[5vmin] gap-[2vmin]'>
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
                    className='p-[2vmin] bg-zinc-800 rounded outline-none max-sm:w-full'
                  />
                  {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                </div>
              ))
            }
          </div>
          <div className='flex sm:gap-[5vmin] gap-[2vmin] flex-col' >
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
                    className='p-[2vmin] bg-zinc-800 rounded outline-none max-sm:w-full'
                  />
                  {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                </div>
              ))
            }
            <select name="gender" className='bg-zinc-800 border-zinc-800 p-[2vmin] rounded' {...register('gender', { required: '*Gender is required' })}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
          </div>
        </div>
        <div className='text-center mt-3'>Already Have an account? <Link to='/login' className='text-blue-500'>Login</Link></div>
        <button type="submit" disabled={isSubmitting} className='bg-blue-500 mt-[4vmin] mx-auto block  px-[4vmin] py-[1vmin] rounded-[3vmin] text-white'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

