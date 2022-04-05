import React from 'react'
import Image from 'next/image'
import OpZep from '../assets/openzeppelin.png'
import Morp from '../assets/morp.png'
import Oracle from '../assets/oracle.png'
import Samsung from '../assets/samsung.png'
import Segment from '../assets/segment.png'
import Monday from '../assets/monday.png'

export default function Partners() {
  return (
    <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'> 
     
    
    
    <div className="w-full">
				<h2 id="work" className="font-bold justify-start items-center flex text-6xl pb-4 pt-12">Partners</h2>
				  
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-6 pt-12">

        <Image src={OpZep} width={150} height={35} />
        <Image src={Morp} width={137} height={35} />
        <Image src={Oracle} width={137} height={35} />
        <Image src={Samsung} width={137} height={35} />
        <Image src={Segment} width={137} height={35} />
        <Image src={Monday} width={137} height={35} />
       
        </div>
     
        
		</div>
     

     
  </div>
  )
}
