import React from 'react'
import Image from 'next/dist/client/image'
import Man from '../assets/man.png'
export default function Card() {
  return (
    <div className=' rounded-xl bg-third lg:w-60'> 
    <div className='p-2 items-center flex justify-center'>
    <Image src={Man} className='rounded-xl   ' />
    </div>
    <div className='p-6 items-center flex justify-center text-card text-sm text-secondary'>
      <a> Lorem Ipsum is simply dok a galley ofcimen book.i</a>
    </div>
    <div className='p-6 items-center flex justify-center text-card text-sm text-secondary'>
    <button className='bg-primary rounded-full text-third font-manrope justify-center items-center mb-2 w-40 h-10'> Contact</button>
    </div>
 
   
  </div>
  )
}
