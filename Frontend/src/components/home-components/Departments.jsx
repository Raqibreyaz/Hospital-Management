import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Departments() {

  const responsive = {
  
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1
    }
  };

  const departmensArr = [
    {
      name: 'cardio',
      image: '/departments/cardio.jpg'
    },
    {
      name: 'derma',
      image: '/departments/derma.jpg'
    },
    {
      name: 'ent',
      image: '/departments/ent.jpg'
    },
    {
      name: 'neuro',
      image: '/departments/neuro.jpg'
    },
    {
      name: 'onco',
      image: '/departments/onco.jpg'
    },
    {
      name: 'ortho',
      image: '/departments/ortho.jpg'
    },
    {
      name: 'pedia',
      image: '/departments/pedia.jpg'
    },
    {
      name: 'radio',
      image: '/departments/radio.jpg'
    },
    {
      name: 'therapy',
      image: '/departments/therapy.jpg'
    },
  ]

  return (
    <div className='p-[3vw]'>
      <h1 className=' sm:text-[3vw] text-[5vw] mb-2'>Departments</h1>
      <div className=''>
        <Carousel responsive={responsive} removeArrowOnDeviceType={['mobile']}>
          {
            departmensArr.map((department, index) => (
              <div key={index} className='lg:h-[50vw] lg:w-[30vw] sm:h-[50vw] sm:w-[40vw] h-[90vw] w-[90vw] overflow-hidden rounded-lg relative '>
                <div className='sm:text-[2vw] text-[3.5vw] uppercase absolute bg-indigo-800 bottom-[5%] left-[50%] translate-x-[-50%] sm:px-[3vw] sm:py-[0.5vw] sm:rounded-[2vw] px-[6vw] py-[1vw] rounded-[3vw]'>{department.name}</div>
                <img src={department.image} alt="" className='h-full w-full ' />
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Departments
