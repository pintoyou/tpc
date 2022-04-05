import React from 'react'
import Image from 'next/dist/client/image'
import Man from '../assets/man.png'
export default function Card() {
  return (
    <div className=' bg-third shadow-xl lg:w-60'> 
    <div className='p-2 items-center flex justify-center'>
    <Image src={Man} className='rounded-xl   ' />
    </div>
    <div className='p-6 items-center flex justify-center text-card text-sm text-secondary'>
      <a> Lorem Ipsum is simply dok a galley ofcimen book.i</a>
    </div>
   
  </div>
  )
}
