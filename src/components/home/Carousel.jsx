import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '../../index.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img
            src='https://media.licdn.com/dms/image/C561BAQGl8dPbFB7DyA/company-background_10000/0/1585218734203/aakash_labs_cover?e=2147483647&v=beta&t=LLKqmmHS3ZAl8OFp1aKqKAMaUm57aufRxQgNyIt5fcM'
            alt='carouselphoto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://play-lh.googleusercontent.com/qATZVHZta735DrAKBNqmsJWypN7G6NLItb2iOWaM-8StRM9bIDZKzyzNJk1qs5rWbihZ=w3840-h2160-rw'
            alt='carouselphoto'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
