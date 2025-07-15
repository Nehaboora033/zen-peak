import React from 'react'
import { company } from '../utils/helper';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const Companies = () => {
  return (
    <div className='pb-[64px] pt-[64px] sm:pb-[162px] bg-[#F7F3F0]'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        freeMode={true}
        speed={6000}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }}
      >
        {company.map((item, index) => (
          <SwiperSlide key={index} >
            <div className='flex items-center justify-center'>
              <img src={item.image} alt={item.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  )
}

export default Companies