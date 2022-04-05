import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import Bg from '../assets/man.png'
import HeroSection from './HeroSection'
import Services from './Services'

export default function Navbar() {
  return (
     
    
     <nav className='py-6'>

        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold">
                <Image src={Logo}  width={244} height={80} />
            </div>
            <div className="hidden md:flex space-x-12 items-center text-white">
                <a href="#" className="text-selected-text">Home</a>
                <a href="#work">My work</a>
                <a href="#clients">Clients</a>
                <a href="#hire"><button className="px-6 py-2 bg-primary font-bold">Hire me</button></a>
            </div>
            <div className="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>
        </div>
        <HeroSection />
    </nav>
    


  )
}
