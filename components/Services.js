import React from 'react'
import Image from 'next/image'
import Man from '../assets/man.png'
import Card from './Card'

export default function Services() {
  return (
  <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'> 
     
    
    
    <div className="w-full">
				<h2 id="work" className="font-bold justify-start items-center flex text-6xl pb-4">Our work</h2>
				  
				<div className="flex flex-wrap justify-center items-center  gap-6  pt-12 ">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       
        </div>
     
        
		</div>
     

     
  </div>
  )
}
