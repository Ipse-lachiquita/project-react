import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import React from 'react'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

function More() {
  SwiperCore.use([Navigation, Pagination, Autoplay])
  return (
    <Swiper
      style={{ height: '90px' }}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default More
