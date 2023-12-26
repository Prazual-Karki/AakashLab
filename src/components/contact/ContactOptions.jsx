import React from 'react'
import ContactHead from './ContactHead'
import ContactDetails from './ContactDetails'
import { BsTelephoneForward } from 'react-icons/bs'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

const ContactOptions = () => {
    const contactList = [
      {
        icon: <SlLocationPin size={24} />,
        contactName: 'Office Address',
        contactDetail: 'Laxmi Plaza, Putalisadak',
      },
      {
        icon: <BsTelephoneForward size={24} />,
        contactName: 'Phone Number',
        contactDetail: '+977-980000000',
      },
      {
        icon: <MdOutlineAttachEmail size={24} />,
        contactName: 'For General Enquiry',
        contactDetail: 'info@aakashlab.com',
      },
      {
        icon: <MdOutlineAttachEmail size={24} />,
        contactName: 'To Join Our Team',
        contactDetail: 'career@aakashlab.com',
      },
    ]
  return (
    <div className='mx-4'>
      <ContactHead/>
      {contactList.map((contact,i)=>{
        return(
            <div key={i}>
                <ContactDetails icon={contact.icon} contactName={contact.contactName} contactDetail={contact.contactDetail}/>
            </div>
        )
      })}

    </div>
  )
}

export default ContactOptions
