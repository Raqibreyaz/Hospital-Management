import React from 'react'
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm.jsx'
import {Biography,Footer} from '../../components/home-components/index.js'

function Appointment() {
  return (
    <div className=''>
      <Biography imageUrl={'/public/whoweare.png'}/>
      <AppointmentForm/>
      <Footer/>
    </div>
  )
}

export default Appointment
