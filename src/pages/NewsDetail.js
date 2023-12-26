import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsList } from '../components/api/news-fetch-api'

const NewsDetail = () => {
    const params = useParams()
    const { newsList } = useSelector((state) => state.news)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getNewsList())
    }, [])
  return (
    <div className='sm:mx-10  my-5'>
      <h1 className='sm:text-[32px] text-[28px] font-semibold text-slate-800 mb-10'>
        {'Tourists to Kenya can go visa-free in 2024'}
      </h1>
      <img
        src='https://www.imagdisplays.co.uk/wp-content/uploads/2021/04/PHOTO-2020-08-13-16-07-05.jpg'
        alt='newsImage'
        className='w-full'
      />

      <p className='text-right text-zinc-400 my-5 mx-5 underline text-[14px]'>
        Published at: {'Dec 22 2023'}
      </p>
      <p className='sm:px-9 px-6 my-5 text-justify leading-7 text-zinc-500'>
        As the Indian government has announced to provide 95,000 tonnes of rice
        to Nepal on quota basis after imposing a ban on the export of
        non-basmati rice, the Nepal government has asked the private importers
        to coordinate with the Indian supplier. All Nepali companies should
        import rice from the state-owned National Cooperative Exports of India.
        On October 18, the Indian government permitted the export of 95,000
        tonnes of non-basmati white rice to Nepal following a ban on July 20. On
        Sunday, the Ministry of Industry, Commerce and Supplies published a
        notice requesting the importers to send their details to the Indian
        state-owned supplier to import rice. As per the notice, each Nepali
        private-sector importer firm will be allowed to bring in up to 5,000
        tonnes of rice on a first-come, first-served basis. “We have already
        requested the Indian government to provide 5,000 tonnes of rice to each
        Nepali private firm or company. The private sector can directly contact
        the National Cooperative Export of India and import rice by reaching an
        agreement on price and quality between the buyer and seller,” said Ram
        Chandra Tiwari, joint secretary of the Ministry of Industry, Commerce
        and Supplies. “To prevent cartelling, we have set a quota of up to 5,000
        tonnes for each private firm or company,” said Tiwari
      </p>
    </div>
  )
}

export default NewsDetail
