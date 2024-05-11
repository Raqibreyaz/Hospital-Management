import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='flex justify-between p-[2vw] flex-wrap  max-sm:text-[13px] gap-4 border-t border-zinc-500'>
            <div>
                <img src="/public/logo.png" alt="" className='w-[250px]'/>
            </div>
            <div className='flex flex-col'>
                <h3 className='font-semibold text-[20px] mb-3'>Quick Links</h3>
                <Link to='/'>Home</Link>
                <Link to='/appointment'>Appointment</Link>
                <Link to='/about'>About Us</Link>
            </div>
            <ul>
                <div className='font-semibold text-[20px] mb-3'>Hours</div>
                {
                    [
                        {
                            day:'monday',
                            time:'9:00 am - 11:00 pm'
                        },
                        {
                            day:'tuesday',
                            time:'9:00 am - 11:00 pm'
                        },
                        {
                            day:'wednesday',
                            time:'9:00 am - 11:00 pm'
                        },
                        {
                            day:'thursday',
                            time:'9:00 am - 11:00 pm'
                        },
                        {
                            day:'friday',
                            time:'9:00 am - 11:00 pm'
                        },
                        {
                            day:'saturday',
                            time:'9:00 am - 11:00 pm'
                        }
                    ].map((date,index)=>(
                        <li key={index}>{date.day} {date.time}</li>
                    ))
                }
            </ul>
            <div className='flex flex-col'>
                <h3 className='font-semibold text-[20px] mb-3'>Contact</h3>
                <div><span>phone: </span>xxxxxxxxxx</div>
                <div><span>email: </span>zeecare@gmail.com</div>
                <div><span>location: </span>varanasi, india</div>
            </div>
        </div>
    )
}

export default Footer
