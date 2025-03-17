import React from 'react'
import ChatBox from '../components/Boxes/ChatBox'
import ChatBar from '../components/Bars/ChatBar'


export default function ChatWindow() {
  return (
    <div className='w-screen h-screen flex justify-between items-center'>
      <ChatBar />
      <ChatBox />
    </div>
  )
}
