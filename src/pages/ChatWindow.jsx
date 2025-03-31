import React from 'react'
import ChatBox from '../components/Boxes/ChatBox'
import ChatBar from '../components/Bars/ChatBar'
import { useState } from 'react'
import whatssRemovedBg from '../assets/whatss-removedbg.png'


export default function ChatWindow() {

  const [isDefault, setIsDefault] = useState(true);

  return (
    <div className='w-screen h-screen flex justify-between items-center'>
      <ChatBar changeDefault={()=> setIsDefault(false)} />
      {!isDefault?<ChatBox/>:
      <div className="w-full h-screen bg-[#302e32]">
        <div className="w-full flex flex-col justify-between h-screen items-center ">
          <img src={whatssRemovedBg} alt="Floating Image" className="w-100 h-100 mb-40 object-cover animate-float" />
        </div>
      </div>
      }
    </div>
  )
}
