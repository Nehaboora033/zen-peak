import React, { useState, useRef } from 'react';
import SubHeading from './common/SubHeading';
import backgroundImage from '../assets/webp/ourteam-bgimg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Our_Team } from '../utils/helper';
import NormalText from './common/NormalText';
import LittleBold from './common/LittleBold';
import { AddOn, LeftArrow, RightArrow, Subtract } from '../utils/icon';

const Ourteam = () => {
  const [activeBioIndex, setActiveBioIndex] = useState(null);
  const swiperRef = useRef(null); // ✅ Step 1: Swiper ref

  const toggleBio = (index) => {
    setActiveBioIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      className='team bg-[#F7F3F0] bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1140px] mx-auto pb-[104px] sm:pb-[185px]'>
        <SubHeading className='text-[#5A5656] max-sm:!text-[34px] max-sm:text-center' StartItalicText='Meet' EndItalicText='Team' BoldText='With Our' />

        {/* ✅ Step 2: Attach onSwiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={false}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {Our_Team.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative p-4'>
                <div className="relative rounded-[10px] overflow-hidden">
                  <img src={item.Image} alt="profile" className='w-full' />
                  <div
                    className='flex items-center gap-3 absolute top-[14px] left-4 cursor-pointer z-20'
                    onClick={() => toggleBio(index)} >
                    <div
                      className={`lg:w-[68px] lg:h-[68px] w-[50px] h-[50px] flex items-center justify-center ${activeBioIndex === index
                        ? 'border-[3px] border-[#E4D9D5] bg-transparent'
                        : 'bg-[#A68272]'
                        }`}>
                      {activeBioIndex === index ? <Subtract /> : <AddOn />}
                    </div>
                    <NormalText
                      className='font-medium text-white'
                      NormalText={activeBioIndex === index ? 'HIDE BIO' : 'SHOW BIO'}
                    />
                  </div>

                  {activeBioIndex === index && (
                    <div className='absolute top-0 left-0 w-full h-full bg-[#A68272] bg-opacity-95 z-10 flex flex-col justify-center items-center text-center px-6 transition-all duration-300 ease-in-out'>
                      <LittleBold className='text-[#E4D9D5] mt-5 mb-1 lg:mb-4' LittleBoldText='BIO' />
                      <NormalText
                        className='text-[#E4D9D5] lg:text-[16px] text-[14px]'
                        NormalText={
                          item.bio ||
                          'ZenPeak Capital is a forward-thinking venture firm specializing in innovative investments within the realms of cryptocurrency and primary markets. With a keen eye on emerging trends and disruptive technologies, we are dedicated to identifying and nurturing high-potential opportunities that yield both financial returns and transformative impact.'
                        }
                      />
                    </div>
                  )}
                </div>

                <div className='mt-4'>
                  <LittleBold className='text-[#0C0F26]' LittleBoldText={item.name || 'Jhone Doe'} />
                  <NormalText className='text-[#535363] mt-[5px]' NormalText={item.profession} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Step 3: Make arrows control the swiper */}
        <div className='flex justify-between mt-6'>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <LeftArrow />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;