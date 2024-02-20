import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

const images = [
  'https://a.storyblok.com/f/95455/1350x1080/3ef7748922/p5240368.jpg',
  'https://a.storyblok.com/f/95455/1350x1080/231d2407ea/p4030184.jpg',
  'https://a.storyblok.com/f/95455/1350x1080/4aee2a00f4/p5240221.jpg'
]

export default function Carousel() {
  return (
    <Swiper
      className="h-60 w-full"
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-full object-cover" src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
