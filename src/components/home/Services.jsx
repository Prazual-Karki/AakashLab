import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const serviceList = [
    {
      id: 1,
      headingName: 'Social Media Marketing',
      description:
        'The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework',
    },
    {
      id: 2,
      headingName: 'Website Development',
      description:
        'We build websites of all types as per the requirements of our clients. We don’t only build websites that look',
    },
    {
      id: 3,
      headingName: 'Search Engine Marketing',
      description:
        'We focus on strategies to increase the visibility of a website in search engine results pages (SERPs). SEO (Search',
    },
    {
      id: 4,
      headingName: 'Chat Bots Development',
      description:
        'Aakash Labs is the official Agency Partner with Manychat. Develop Chatbots with client specific needs o',
    },
    {
      id: 5,
      headingName: 'Graphic & UI-UX Design',
      description:
        'User experience (UX) and interface (UI) design goes beyond the appearance of a product. It addresse',
    },
    {
      id: 6,
      headingName: 'Search Engine Optimization',
      description:
        'We optimize your website and its content so that search engines show it as a top result for the searches of a',
    },
    {
      id: 7,
      headingName: 'Content Marketing',
      description:
        'We curate content in text, image, web and video that resonates with the target audience specifically. Creating',
    },
    {
      id: 8,
      headingName: 'Database Segmentation',
      description:
        'Database segmentation refers to the organization of that data in a way that can then influence outreach such',
    }
    
  ]
  return (
    <div className='mt-6 mb-10 '>
      <h2 className='py-4  text-[30px] text-cyan-950 font-bold '>Our Services</h2>
      <div className='grid grid-cols-1 px-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 xl:px-20 sm:px-6 sm:gap-x-6 lg:gap-x-4'>
        {serviceList.map((service, i) => {
          return (
            <div key={i}>
              <ServiceCard
                headingName={service.headingName}
                description={service.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
