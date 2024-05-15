import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Context } from '../main'

function Messages() {

  const [messages, setMessages] = useState([])

  const Navigate = useNavigate()

  const { isAuthenticated, user, setIsAuthenticated,setUser } = useContext(Context)

  useEffect(() => {

    
        (async () => {
          try {
            let res = await axios.get('http://localhost:3000/api/v1/message/get-messages', {
              withCredentials: true
            })

            const messages = res.data.messages;

            messages.reverse()

            setMessages(messages)
          } catch (error) {
            toast.error(error.response.data.message)
          }
        }
        )()
  }, [])

  useEffect(() => {
    console.log(messages)
  }, [messages])


  return (
    <Container>
      <div>
        <h1 className='text-[30px]  font-semibold text-blue-500 mb-4 sticky top-[0%] bg-zinc-950'>Messages</h1>
        <div className='capitalize flex flex-col gap-4 text-white'>
          {
            messages.map((message, index) => (
              <div key={index} className='border border-zinc-800 bg-zinc-900 p-[10px] rounded-md '>{
                [
                  {
                    name: 'firstName',
                    value: message.firstName
                  },
                  {
                    name: 'lastName',
                    value: message.lastName
                  },
                  {
                    name: 'email',
                    value: message.email
                  },
                  {
                    name: 'phone',
                    value: message.phone
                  },
                  {
                    name: 'message',
                    value: message.message
                  },
                  {
                    name: 'sentAt',
                    value: message.sentAt.slice(0, 10)
                  },
                ].map((field, index) => (
                  <h3 key={index}>{field.name}: {field.value}</h3>
                ))
              }

              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

export default Messages
