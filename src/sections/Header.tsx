'use client';
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-gray-200 flex justify-between items-center px-8 py-2 relative z-10'>
      <div>
        <img src="logo.jpg" alt="logo" className='w-10 rounded-full'/>
      </div>
      <div className='flex gap-5'> 
        <li className='list-none cursor-pointer hover:text-[#f0bc2e] duration-100 transition-all'><a href="#home">Home</a></li>
        <li className='list-none cursor-pointer hover:text-[#f0bc2e] duration-100 transition-all'><a href="#solution">Solutions</a></li>
        <li className='list-none cursor-pointer hover:text-[#f0bc2e] duration-100 transition-all'><a href="#about">About Us</a></li>
      </div>
    </div>
  )
}

export default Header