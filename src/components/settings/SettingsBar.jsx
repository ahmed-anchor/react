import React from 'react'

export default function SettingsBar() {
  return (
    <div className='flex absolute hidden right-3 bottom-3 z-50'>
        <div className='flex flex-col bg-[#464448] p-11 pl- h-[550px] w-[300px] gap-4 justify-start items-start rounded-r-lg'>
            <button className='rounded-lg w-[180px] font-light text-md flex gap-4 py-3 px-12 cursor-pointer text-white focus:outline-1 border-white'>عام</button>
            <button className='rounded-lg w-[180px] font-light text-md flex gap-4 py-3 px-12 cursor-pointer text-white focus:outline-1 border-white'>الدردشات</button>
            <button className='rounded-lg w-[180px] font-light text-md flex gap-4 py-3 px-12 cursor-pointer text-white focus:outline-1 border-white'>الاشعارات</button>
            <button className='rounded-lg w-[180px] font-light text-md flex gap-4 py-3 px-12 cursor-pointer text-white focus:outline-1 border-white'>التخزين</button>
            <button className='rounded-lg w-[180px] font-light text-md flex gap-4 py-3 px-12 cursor-pointer text-white focus:outline-1 border-white'>المساعدة</button>
        </div>
    </div>
  )
}
