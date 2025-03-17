import React from 'react'
import { Link } from 'react-router-dom'
import Settings from './svgs/Settings'
import ChatSVG from './svgs/ChatSVG'
import StatusSVG from './svgs/StatusSVG'
import PhoneIcon from './svgs/PhoneIcon'
import { useLocation } from 'react-router-dom'
import whatss from '../assets/whatss.jpeg'

export default function Sidebar() {
  const location = useLocation();

  return (
  <div className='max-w-44 font-semibold border-l-[1.5px] border-gray-300 bg-gray-50 h-screen flex flex-col justify-between items-center '>
    <div className='border-b-[1.5px] border-gray-300 w-full flex justify-center py-7'>
      <h1 className='uppercase text-3xl '>whatss</h1>
    </div>
    <div className='flex flex-col w-full justify-between items-center gap-5 font-normal pb-24'>
      <Link to="/chats" className={`w-full flex items-center pr-5 py-3 text-[19px] ${location.pathname=="/chats"?'bg-[#464448] text-gray-50':''}`}><ChatSVG />الدردشة</Link>
      <Link to="/calls" className={`w-full flex items-center py-3 pr-5 text-[19px] ${location.pathname=="/calls"?'bg-[#464448] text-gray-50':''} gap-2`}><PhoneIcon/> المكالمات</Link>
      <Link to="/status" className={`w-full flex items-center py-3 pr-5 text-[19px] ${location.pathname=="/status"?'bg-[#464448] text-gray-50':''}`}><StatusSVG />الحالات</Link>
    </div>
    <div className='flex flex-col justify-between items-center gap-3 font-normal pb-7'>
      <div className='w-full gap-4 flex items-center'>
        <img src={whatss} alt='no image' className='w-9 h-9 rounded-full mr-[-5px]' />
        <p>الحساب</p>
      </div>
      <button
        className='w-full flex gap-4 py-3 cursor-pointer'>
          <Settings />
        الاعدادات
      </button>
    </div>
  </div>
  )
}
