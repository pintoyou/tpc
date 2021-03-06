import React from 'react'
import Image from 'next/image'
import Bg from '../assets/man.png'

export default function HeroSection() {
  return (
    <div className="container  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
    <div className="flex flex-wrap md:flex-nowrap">


        <div className="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
            <a className='pt-2'> Küçük yazı</a>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Building beautiful web experiences.</h1>
            <span className='pt-4'> küçücük yazı</span>
            <div className="w-full flex justify-center md:justify-start">
                <button className="px-8 py-4 bg-secondary rounded-lg text-white font-bold mt-12 flex items-center space-x-3">
                   
                    <span>View my work.</span>
                </button>
            </div>
            
        </div>
        
    </div>
</div>
  )
}
