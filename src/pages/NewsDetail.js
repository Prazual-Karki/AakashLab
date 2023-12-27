import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getNewsList } from '../components/api/news-fetch-api'
import moment from 'moment'
import { type } from '@testing-library/user-event/dist/type'


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
      <div className='lg:mx-10  my-5'>
        <h1 className='sm:text-[32px] text-[28px] font-semibold text-slate-800 mb-10'>
          {newsDetail?.title ?? ''}
        </h1>
        <img src={newsDetail?.image ?? ''} alt='newsImage' className='w-full' />

        <p className='text-right text-zinc-400 my-5 mx-5 underline text-[14px]'>
          Published at:{' '}
          {newsDetail?.publishedAt
            ? moment(newsDetail?.publishedAt).format('MMM Do YYYY')
            : ''}
        </p>
        <p className='lg:px-9 px-6 my-5 text-justify leading-7 text-zinc-500'>
          {newsDetail?.content ?? ''}
        </p>
      </div>
    </>
  )
}

export default NewsDetail
