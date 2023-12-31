import React from 'react'
import { GoGoal } from 'react-icons/go'
import { FaDocker } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col lg:gap-5  mb-[80px] sm:mb-[80px]'>
        <div className='w-full md:w-1/2 '>
          <img
            src='https://aakashresearchlabs.com/assets/img/arl-logo.png'
            alt='aboutus'
            className='h-full'
          />
        </div>
        <div className='w-full pt-10 md:w-1/2 lg:px-4'>
          <h3 className='text-[16px] text-zinc-600 font-semibold text-left'>
            ABOUT US---
          </h3>
          <h1 className='text-[32px] text-left font-PlayFair font-bold tracking-wider '>
            <span className='leading-3 text-zinc-700'>
              Inspiring Businesses With
            </span>{' '}
            <span className='leading-3 text-cyan-600'>IT Solutions</span>
          </h1>
          <p className='pt-5 text-justify text-zinc-500'>
            Aakash Labs combines technology with business intelligence to
            catalyze change and deliver data driven results. We're a dynamic
            team of passionate people with technical, creative & digital
            expertise.Combining our unrivaled specialism in specific digital
            activities with a strategic & differentiated approach, Aakash Labs
            is able to meet the increasingly complex needs of clients in an
            effortless yet productive manner in the constantly evolving digital
            landscape.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-7'>
        <div className='sm:px-5 '>
          <div className=' flex flex-row gap-5 text-[22px] font-bold text-zinc-700 items-center  justify-center'>
            <GoGoal size={30} className='text-cyan-700' />
            <p>Our Mission</p>
          </div>
          <p className='text-zinc-500 py-3 text-justify  text-[14px]'>
            We directly approach our goal and prove to be best with our clients
            by evaluating their resources in the best possible way. We are in
            the developing stage but never showcase it as our limitations. Our
            business empowers you and your company in the right manner so that
            there is a long-term relationship between clients, employees, and
            other stakeholders
          </p>
        </div>
        <div className='sm:px-5 '>
          <div className=' flex flex-row gap-5 text-[22px] font-bold text-zinc-700 items-center  justify-center'>
            <FaDocker size={30} className='text-cyan-700' />
            <p>Our Vision</p>
          </div>
          <p className='text-zinc-500 py-3 text-justify text-[14px]'>
            Our effort is endless to make Aakashlabs a systematic and
            qualitative company in the IT sector. Every business requires
            digital identification in todays era. Digital marketing is not a
            luxury but a necessity for your brand identification. Website is the
            most reliable tool for digital marketing which is even suggested by
            legal authorities in the case of Nepal.
          </p>
        </div>
        <div className='sm:px-5 '>
          <div className=' flex flex-row gap-5 text-[22px] font-bold text-zinc-700 items-center  justify-center'>
            <GoGoal size={30} className='text-cyan-700' />
            <p>Our Values</p>
          </div>
          <p className='text-zinc-500 py-3 text-justify text-[14px]'>
            We directly approach our goal and prove to be best with our clients
            by evaluating their resources in the best possible way. We are in
            the developing stage but never showcase it as our limitations. Our
            business empowers you and your company in the right manner so that
            there is a long-term relationship between clients, employees, and
            other stakeholders
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
