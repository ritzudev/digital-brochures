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
  'https://drollivernunez.com/wp-content/uploads/2019/06/shutterstock_1025595721-1-1024x469.jpg',
  'https://drollivernunez.com/wp-content/uploads/2019/06/shutterstock_251399839-1024x681.jpg',
  'https://drollivernunez.com/wp-content/uploads/2019/06/shutterstock_734373247-1024x683.jpg'
]

export default function Carousel() {
  return (
    <Swiper
      className="h-72 w-full rounded-md"
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
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
