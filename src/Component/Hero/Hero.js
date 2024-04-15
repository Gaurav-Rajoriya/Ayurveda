import React from 'react'
import './Hero.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '../Assets/Ayurvarta (1).png'
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='hero-slider'>
        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={banner1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://img.freepik.com/free-vector/matcha-tea-horizontal-banner-template_23-2148960760.jpg?t=st=1712837625~exp=1712841225~hmac=c333eed3be77336e9226976fb49ad069b7dc38d822600ccc4f936e1ff9530cb4&w=740" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://img.freepik.com/free-vector/matcha-tea-horizontal-banner-template_23-2148960760.jpg?t=st=1712837625~exp=1712841225~hmac=c333eed3be77336e9226976fb49ad069b7dc38d822600ccc4f936e1ff9530cb4&w=740" alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero