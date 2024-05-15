import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './Container';
import ReactLoading from 'react-loading'

function Signup() {

  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const { isAuthenticated } = useContext(Context)

  const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={50} width={100} />
  );


  const { register, handleSubmit, formState: { errors, isSubmitting }
  } = useForm();

  const [preview, setPreview] = useState('/public/docHolder.jpg')


  const onSubmit = async (data) => {

    try {

      let formData = new FormData();

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          formData.append(key, element instanceof FileList ? element[0] : element)
        }
      }

      setLoading(true)

      let response = await axios.post('http://localhost:3000/api/v1/users/doctor/addnew', formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      toast.success(response.data.message)
      setLoading(false)
      Navigate('/get-doctors')
    } catch (error) {
      toast.error(error.response.data.message)
      setLoading(false)
    }

  };

  useEffect(() => {
    if (!isAuthenticated)
      Navigate('/login')
  }, [])


  return (
    <Container>
      {

        loading && <div className='top-0 left-0   absolute h-full w-full  flex items-center justify-center '>
          <div className='h-full w-full absolute opacity-50 bg-black'></div>
          <Example type='spin' color='rgb(6, 242, 163)' className='relative z-50 ' />
        </div>
      }
      <form onSubmit={handleSubmit(onSubmit)} className=' rounded-[3vmin]'>
        <h1 className='text-[30px] font-semibold max-sm:text-[20px] text-center mb-2'>Add New Doctor</h1>
        <div className='flex gap-2 max-sm:gap-4 max-sm:flex-col w-full'>
          <div className='w-[40%] max-sm:w-[100%]  object-cover'>
            <img src={preview} alt="Doctor Avatar " className=' w-[100%] h-2/3 max-sm:h-[300px] border mb-2 rounded-[20px]' />
            <input type="file" className='' {...register('doctorAvatar', { required: true })} onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))} />
            {errors.doctorAvatar && <span className='text-red-500 block'>*avatar is required</span>}
          </div>
          <div className='flex flex-col  gap-[2vmin] w-full'>
            <div className='flex flex-col  gap-[2vmin] w-full'>
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
                      className='p-[2vmin] bg-zinc-900 rounded outline-none w-full'
                    />
                    {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                  </div>
                ))
              }
            </div>
            <div className='flex gap-[2vmin] flex-col w-full' >
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
                      className='p-[2vmin] bg-zinc-900 rounded outline-none w-full'
                    />
                    {errors[input.name] && <span className='block text-red-500'>*{input.name} is required</span>}
                  </div>
                ))
              }
              <select {...register('doctorDepartment', { required: '*department is required' })} className='p-[2vmin] rounded bg-zinc-900 capitalize' >
                <option value="">select department</option>
                {
                  [
                    'pediatrics',
                    'orthopadics',
                    'cardiology',
                    'radiology',
                    'neurology',
                    'oncology',
                    'physical therapy',
                    'dermatology',
                    'ent'
                  ].map((department, index) => (
                    <option key={index} className='bg-zinc-800' value={department}>{department}</option>
                  ))
                }
                {errors.department && <span className='block text-red-500'>*department is required</span>}
              </select>
              <select className='bg-zinc-900 border-zinc-800 p-[2vmin] rounded' {...register('gender', { required: '*Gender is required' })}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
            </div>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className='bg-blue-500 mt-[4vmin] text-center mx-auto block  px-[4vmin] py-[1vmin] rounded-[3vmin] text-white w-1/3 max-sm:w-[150px]'>Add Doctor</button>
      </form>
    </Container>

  );
}

export default Signup;

