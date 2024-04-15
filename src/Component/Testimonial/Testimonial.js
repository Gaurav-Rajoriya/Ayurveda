import React from 'react'
import './Testimonial.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
  return (
    <section className='testimonial-section'>
          <div className='product-heading'>
                    <h4>Testimonial</h4>
                    <span>OUR Clients</span>
            </div>
        <div className='testimonial-container'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={Autoplay}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='testimonial-box'>
                <div className="testimonial-text">
                    <p>Exceptional quality and service! Their herbal supplements have truly transformed my health. With their expertise and commitment to excellence, I've achieved remarkable results. Highly recommend!</p>
                </div>

                <div className='testimonial-detail'>
                    <div className='testimonial-img'>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1712993328~exp=1712996928~hmac=cfbaeb6c96cd75f31fd3e5706628181feb49fda018671022f2a46391deaa93f9&w=740" alt="" />
                    </div>
                   <div className="clint-name">
                        <h4>Manish</h4>
                        <p><span></span><i class="ri-star-fill"></i><span></span></p>
                   </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial-box'>
                <div className="testimonial-text">
                    <p>Outstanding quality and service! These herbal supplements have revolutionized my health. Thanks to their expertise and dedication, I've seen incredible improvements. Highly recommended!</p>
                </div>

                <div className='testimonial-detail'>
                    <div className='testimonial-img'>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?w=740&t=st=1713173683~exp=1713174283~hmac=9f7a718d310008f69d67aa73e968608ee2375c5a171ccd2cb64e43a10afe5dea" alt="" />
                    </div>
                   <div className="clint-name">
                        <h4>Rahul</h4>
                        <p><span></span><i class="ri-star-fill"></i><span></span></p>
                   </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial-box'>
                <div className="testimonial-text">
                    <p>Exceptional service and top-notch quality! These herbal supplements have been a game-changer for my health. Their expertise and dedication shine through, delivering remarkable results. Highly recommended!</p>
                </div>

                <div className='testimonial-detail'>
                    <div className='testimonial-img'>
                        <img src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?t=st=1713173659~exp=1713177259~hmac=445b6b5424f9c490fd665b6da66be4f05e7d3a1f08c3defb9b2c18ae69d83e74&w=740" alt="" />
                    </div>
                   <div className="clint-name">
                        <h4>Harsh</h4>
                        <p><span></span><i class="ri-star-fill"></i><span></span></p>
                   </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default Testimonial