import React, { useEffect, useState } from 'react'
import Hero from '../components/news/Hero'
import NewsCard from '../components/news/NewsCard'
import { getNewsList } from '../components/api/news-fetch-api'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../components/common/Pagination'


const News = () => {
   const dummynewslist = [
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
     {
       title: 'dummy1',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
       publishedAt: '2021-09-30',
       image:
         'https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8',
     },
   ]
  const dispatch = useDispatch()
  const { newsList } = useSelector((state) => state.news)

  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage =4

  const lastPostIndex = currentPage * newsPerPage
  const firstPostIndex = lastPostIndex - newsPerPage
  const currentnews = dummynewslist.slice(firstPostIndex, lastPostIndex)

  
  useEffect(() => {
    dispatch(getNewsList())
    
  }, []);

 
  return (
    <div>
      <Hero />
      <h2 className='py-4  sm:text-[32px] text-[24px] text-cyan-950 font-bold my-5  tracking-wide'>
        Check out our latest news
      </h2>
      {dummynewslist.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 xl:px-20 sm:px-10 px-2  my-8'>
          {currentnews.map((news, i) => {
            return (
              <Link key={i} className='' to={`/news/${i}`}>
                {/* id not available and after refresh each time it will provide new array of news. so i used array index as id here  */}
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
        <div className='text-center h-[100px] text-zinc-500'>
          Oops, something wrong... I think no. of api request exceeds.
        </div>
      )}
      <Pagination
        totalnews={dummynewslist.length}
        newsPerPage={newsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default News
