import React from 'react'
import CallBar from '../components/Bars/CallBar'
import PhoneCallBox from '../components/Boxes/PhoneCallBox'
import VidCallBox from '../components/Boxes/VidCallBox'

export default function Calls() {
  return (
    <div className='w-screen h-screen flex justify-between items-center'>
      <CallBar />
      <PhoneCallBox />
      {/* <VidCallBox /> */}
    </div>
  )
}
