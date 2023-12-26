import React from 'react'

const ContactDetails = ({ icon, contactName, contactDetail }) => {
  return (
    <div className='flex flex-row items-center border-b-[1px] border-cyan-900 p-5 gap-5 '>
      <div className='text-cyan-800 border-[1px] border-cyan-900 p-4'>
        {icon}
      </div>
      <div>
        <p className='font-bold text-[16px] text-zinc-700 text-left'>
          {contactName}
        </p>
        <p className='text-zinc-400 text-left font-medium  text-[14px]'>
          {contactDetail}
        </p>
      </div>
    </div>
  )
}

export default ContactDetails
