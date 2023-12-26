import React from 'react'
import settingLogo from "../../assets/icons/servicelogo.jpg"
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ headingName, description }) => {
  return (
    <div className='bg-white flex flex-col cursor-pointer justify-between rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-8 px-7 h-full   text-left xl:w-[350px] sm:w-[270px] w-[90%] mx-auto'>
      <img
        src={settingLogo}
        alt='cardLogo'
        height={40}
        width={40}
        className='rounded-md'
      />
      <p className='text-[16px] font-bold py-4 text-zinc-700'>{headingName}</p>
      <p className='text-[13px] text-zinc-400'>{description}</p>
      <button className=' text-cyan-700 font-semibold text-left pt-6 items-center flex flex-row gap-3'>
        <p className='text-[13px]'>Learn More</p> <FaArrowRight />
      </button>
    </div>
  )
}

export default ServiceCard
