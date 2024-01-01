import React, { useEffect, useState } from 'react'
import Hero from '../components/news/Hero'
import NewsCard from '../components/news/NewsCard'
import { getNewsList } from '../components/api/news-fetch-api'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../components/common/Pagination'

const News = () => {
  
  const dispatch = useDispatch()
  const { newsList } = useSelector((state) => state.news)

  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 4

  const lastNewsIndex = currentPage * newsPerPage
  const firstNewsIndex = lastNewsIndex - newsPerPage
  const currentnews = newsList.slice(firstNewsIndex, lastNewsIndex)

  useEffect(() => {
    // dispatch(getNewsList())
  }, [])

  return (
    <div>
      <Hero />
      <h2 className='py-4  sm:text-[32px] text-[24px] text-cyan-950 font-bold my-5  tracking-wide'>
        Check out our latest news
      </h2>
      {newsList.length > 0 ? (
        <div className='grid grid-cols-1 px-2 my-8 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 2xl:px-20 sm:px-5'>
          {currentnews.map((news, i) => {
            return (
              <Link
                key={i}
                className=''
                to={`/news/${(currentPage - 1) * newsPerPage + i}`}
              >
                {/* id not available for news array and after refresh each time it will provide new array of news. so i used array index as id here  */}
                <NewsCard
                  title={news.title}
                  imageUrl={news.image}
                  date={news.publishedAt}
                />
              </Link>
            )
          })}
        </div>
      ) : (
        <div className='text-center h-[400px] text-zinc-500 pt-[100px] mx-auto '>
          <h1 className='text-[30px] font-r'>Oops, something wrong...</h1>
          <p>I think no. of api request exceeds.</p>
        </div>
      )}
      <Pagination
        totalnews={newsList.length}
        newsPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default News
