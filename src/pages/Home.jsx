import React from 'react'
import whatssRemovedBg from '../assets/whatss-removedbg.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col justify-evenly items-center bg-[#464448]'>
      <img src={whatssRemovedBg} alt="Floating Image" className="w-100 h-100  object-cover animate-float" />
      <Link to='login' className='mb-20 px-30 py-3 rounded-xl text-[#464448] bg-gray-300'>login</Link>
    </div>
  )
}
