import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsList } from '../components/api/news-fetch-api'
import moment from 'moment'


const NewsDetail = () => {
  const [newsDetail, setnewsDetail] = useState({});
  const params = useParams()
  const { newsList } = useSelector((state) => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsList())
    setnewsDetail(newsList[params.id])

  }, [])
  return Object.keys(newsDetail || {}).length === 0 ? (
    <>
      <div className='text-center h-[400px] text-zinc-500 pt-[100px] mx-auto '>
        <h1 className='text-[30px] font-r'>Oops, something wrong.....</h1>
        <p>I think no. of api request exceeds.</p>
      </div>
    </>
  ) : (
    <>
      <div className='mt-5 mb-[100px] lg:mx-10'>
        <h1 className='sm:text-[32px] text-[28px] underline font-semibold text-slate-800 mb-10'>
          {newsDetail?.title ?? ''} :
        </h1>
        <img src={newsDetail?.image ?? ''} alt='newsImage' className='w-full' />

        <p className='text-right text-zinc-400 my-5 mx-5 underline text-[14px]'>
          Published at:{' '}
          {newsDetail?.publishedAt
            ? moment(newsDetail?.publishedAt).format('MMM Do YYYY')
            : ''}
        </p>
        <p className='px-6 my-5 leading-7 text-justify lg:px-9 text-zinc-500'>
          <span className='text-[30px] text-zinc-950'>{newsDetail?.content.charAt(0)}</span>
          {newsDetail?.content.substring(1) ?? ''}
        </p>
      </div>
    </>
  )
}

export default NewsDetail
