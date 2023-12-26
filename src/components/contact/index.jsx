import React from 'react'
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 bg-gray-50 px-4 sm:py-[100px] py-[50px] '>
    <ContactOptions/>
    <ContactForm/>
      
    </div>
  )
}

export default Contact
