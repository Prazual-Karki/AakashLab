import React from 'react'

const AakashInfo = () => {
  return (
    <>
      <div className='w-full grid sm:grid-cols-2 grid-cols-1 sm:py-3  my-10 gap-14'>
        <div className=' lg:px-14 sm:px-7 px-6 w-full h-full flex flex-col gap-10  '>
          <div className=''>
            <p className='lg:text-[35px] sm:text-[30px] text-[25px] text-cyan-950 font-bold py-4'>
              Grow Your Business With Us
            </p>
            <p className='py-6 sm:py-2 text-zinc-600'>
              Aakash Labs combines technology with business intelligence to
              catalyze change and deliver data driven results. We're a dynamic
              team of passionate people with technical, creative & digital
              expertise.
            </p>
          </div>
          <div className='py-5  '>
            <p className='sm:py-4 py-1 text-zinc-600'>
              Where technology meets marketing
            </p>
            <button className='text-white mx-auto h-[45px] w-[200px] text-[14px] rounded-3xl bg-blue-500 text-center items-center my-4'>
              Get Free Consultation
            </button>
          </div>
        </div>
        <div className=' w-full  h-full '>
          <img
            src='https://aakashlabs.com/_nuxt/img/2.d32967b.jpg'
            alt='sidephoto'
            className='h-full'
          />
        </div>
      </div>
    </>
  )
}

export default AakashInfo
