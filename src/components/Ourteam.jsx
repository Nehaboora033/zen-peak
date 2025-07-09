import React from 'react'
import SubHeading from './common/SubHeading'
import backgroundImage from '../assets/webp/ourteam-bgimg.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Our_Team } from '../utils/helper';
import NormalText from './common/NormalText';


const Ourteam = () => {
  return (
    <div className='team bg-[#F7F3F0] bg-no-repeat bg-center' style={{ backgroundImage: `url(${backgroundImage}` }} >
      <div className='max-w-[1140px] mx-auto '>
        <SubHeading className='text-[#5A5656]' StartItalicText={'Meet'} EndItalicText={'Team'} BoldText={'With Our'} />
        <Swiper
          slidesPerView={3}
          loop={false}
          spaceBetween={24}
        >
          {Our_Team.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <img src={item.Image} alt="profile" />
                <NormalText NormalText={item.profession} className=''/>


              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default Ourteam