import React from 'react'
import StatusBox from '../components/Boxes/StatusBox'
import StatusBar from '../components/Bars/StatusBar'


export default function Status() {
  return (
    <div className='w-screen h-screen flex justify-between items-center'>
      <StatusBar />
      <StatusBox />
    </div>
  )
}
