import moment from 'moment'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'


const NewsCard = ({title,imageUrl,date}) => {
  return (
    <div className='rounded-2xl cursor-pointer hover:border-zinc-200 hover:border-[2px] shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.3)]  h-full   text-justify  w-[95%] mx-auto'>
      <div className=''>
        <img
          src={imageUrl}
          alt='newsphoto'
          className='h-[250px] w-full rounded-t-2xl'
        />
      </div>
      <div className='py-8 px-7'>
        <h4 className='font-semibold text-zinc-800 text-[18px]'>
          {title.slice(0, 70).concat('.....')}
        </h4>
        <p className='text-zinc-400 text-[12px] '>{moment(date).format('MMM Do YYYY')}</p>
        <button className='flex flex-row items-center gap-3 pt-6 font-semibold text-left text-cyan-700'>
          <p className='text-[13px]'>Learn More</p> <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default NewsCard
