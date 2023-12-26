import React from 'react'
import logo from "../assets/icons/aakashlogo.png"
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { BsTelephoneForward } from 'react-icons/bs'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className='  sm:px-15 px-3 pt-12 pb-5  bg-slate-100 rounded-2xl mt-8'>
      <div className='grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3 pb-10'>
        <div className='flex flex-col sm:gap-7 gap-1 mx-auto  '>
          <img
            src={logo}
            alt='aakashlogo'
            height={60}
            width={180}
            className='mx-auto'
          />
          <p className='text-[#919191] text-[14px]'>
            AakashLabs implements advanced digital technologies in areas that
            are crucial to meeting your business objectives. Connect with us for
            details.
          </p>
        </div>
        <div className='flex flex-col sm:gap-7 gap-4 mx-auto'>
          <p className='text-[20px] font-extrabold text-cyan-950 tracking-wider'>
            Connect With Us:
          </p>
          <div className='grid grid-cols-3'>
            <FaFacebook
              size={30}
              className='text-zinc-400 cursor-pointer hover:text-blue-400'
            />
            <FaInstagramSquare
              size={30}
              className='text-zinc-400 cursor-pointer hover:text-blue-400'
            />
            <FaLinkedin
              size={30}
              className='text-zinc-400 cursor-pointer hover:text-blue-400'
            />
          </div>
        </div>
        <div className='flex flex-col sm:gap-7 gap-2 mx-auto'>
          <p className='text-[20px] font-extrabold text-cyan-950 tracking-wider'>
            Contact Us:
          </p>
          <div className='flex flex-col gap-2 text-zinc-400 text-[14px] font-medium'>
            <div className='flex flex-row items-center gap-2'>
              <BsTelephoneForward size={18} />
              <p>+977-0000000</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <MdOutlineAttachEmail size={18} />
              <p>info@aakashlabs.com</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <SlLocationPin size={18} />
              <p>Laxmi Plaza, Putali Sadak</p>
            </div>
          </div>
        </div>
      </div>
      <div className='block text-center text-zinc-400 text-[12px]'>
        © 2024 All Rights Reserved Prazual Karki
      </div>
    </footer>
  )
}

export default Footer
