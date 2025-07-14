import React from 'react'
import SubHeading from './common/SubHeading'
import backgroundImage from '../assets/webp/ourteam-bgimg.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Our_Team } from '../utils/helper';
import NormalText from './common/NormalText';
import LittleBold from './common/LittleBold';
import { AddOn } from '../utils/icon';


const Ourteam = () => {
  return (
    <div className='team bg-[#F7F3F0] bg-no-repeat bg-center' style={{ backgroundImage: `url(${backgroundImage}` }} >
      <div className='max-w-[1140px] mx-auto pb-[185px]'>
        <SubHeading className='text-[#5A5656] ' StartItalicText={'Meet'} EndItalicText={'Team'} BoldText={'With Our'} />
        <Swiper
          slidesPerView={3}
          loop={false}
          spaceBetween={24}>
          {Our_Team.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative'>
                <img src={item.Image} alt="profile" />
                <div className='flex items-center gap-3 absolute top-[14px] left-4'>
                  <div className='w-[68px] h-[68px] bg-[#A68272] flex items-center justify-center'>
                    <AddOn />
                  </div>
                  <NormalText className='font-medium text-white' NormalText={'SHOW BIO'} />
                </div>
                <LittleBold className='text-[#0C0F26] mt-4' LittleBoldText={'Jhone Doe'} />
                <NormalText NormalText={item.profession} className='text-[#535363] mt-[5px]' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Ourteam