import React from 'react'

type cardProps = {
    title: string,
    desc: string,
}

const Card = ({ title, desc }: cardProps) => {
    return (
        <div className='relative w-2/3 lg:w-4/5 z-10 border-[#333333] border-2 p-3 rounded-lg cursor-pointer shadow-md sm:rounded-lg sm:shadow-none sm:p-6 before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-[#333333] before:scale-x-0 before:transition-transform before:duration-300 before:ease-in before:-z-10 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:rounded-lg'>
            <h1 className='text-[#f0bc2e] text-[23px] font-bold md:text-[37px]'>{title}</h1>
            <p className='text-[#B0B0B0] text-[14px] md:text-[23px]'>{desc}</p>
        </div>
    )
}

export default Card
