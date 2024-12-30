"use client";
import React from 'react'
import { useState } from 'react';

const values = ['Innovation at the forefront of technology.','Making quantum computing accessible',' Building a sustainable and scalable future']

const Aboutus = () => {
    const [image, setimage] = useState(0)

    function leftArrow(){
        if(image==0){
            setimage(2);
        } else{
            setimage((e)=>(e-1)%3);
        }

    }

    function rightArrow(){
        setimage((e)=>(e+1)%3);
    }

  return (
    <div className='h-screen w-full flex flex-col justify-evenly items-center' id='about'>
        <h1 className='text-5xl'>About Us</h1>
        <div className='w-4/5 h-2/3 rounded-xl flex items-center justify-center'>
            <img src="left-arrow.png" alt="la" className='h-6 cursor-pointer' onClick={leftArrow}/>
            <img src={`img${image}.jpg`} alt="image1" className='w-full h-full object-cover rounded-xl'/>
            <img src="right-arrow.png" alt="ra" className='h-6 cursor-pointer' onClick={rightArrow}/>
        </div>
        <div className='px-4 py-1 text-xl'>
            {values[image]}
        </div>
    </div>
  )
}

export default Aboutus