import React from 'react'
import settingLogo from "../../assets/icons/servicelogo.jpg"
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ headingName, description }) => {
  return (
    <div className='bg-white hover:border-zinc-200 hover:border-[1px] flex flex-col cursor-pointer justify-between rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-8 px-7 h-full   text-left  sm:w-[95%] w-[90%] mx-auto'>
      <img
        src={settingLogo}
        alt='cardLogo'
        height={40}
        width={40}
        className='rounded-md'
      />
      <p className='text-[16px] font-bold py-4 text-zinc-700'>{headingName}</p>
      <p className='text-[13px] text-zinc-400'>
        {description.slice(0, 101).concat('...')}
      </p>
      <button className='flex flex-row items-center gap-3 pt-6 font-semibold text-left text-cyan-700'>
        <p className='text-[13px]'>Learn More</p> <FaArrowRight />
      </button>
    </div>
  )
}

export default ServiceCard
