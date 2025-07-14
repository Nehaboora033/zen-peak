import React, { useState } from 'react';
import SubHeading from './common/SubHeading';
import backgroundImage from '../assets/webp/ourteam-bgimg.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Our_Team } from '../utils/helper';
import NormalText from './common/NormalText';
import LittleBold from './common/LittleBold';
import { AddOn, Subtract } from '../utils/icon';

const Ourteam = () => {
  const [activeBioIndex, setActiveBioIndex] = useState(null);

  const toggleBio = (index) => {
    setActiveBioIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      className='team bg-[#F7F3F0] bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1140px] mx-auto pb-[185px]'>
        <SubHeading className='text-[#5A5656]' StartItalicText='Meet' EndItalicText='Team' BoldText='With Our' />
        
        <Swiper slidesPerView={3} spaceBetween={24} loop={false}>
          {Our_Team.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative'>
                {/* === Image Container (Bio overlays here only) === */}
                <div className="relative rounded-[10px] overflow-hidden">
                  <img src={item.Image} alt="profile" className='w-full' />

                  {/* Toggle button over image */}
                  <div
                    className='flex items-center gap-3 absolute top-[14px] left-4 cursor-pointer z-20'
                    onClick={() => toggleBio(index)} >
                    <div
                      className={`w-[68px] h-[68px] flex items-center justify-center ${activeBioIndex === index
                        ? 'border-[3px] border-[#E4D9D5] bg-transparent rounded-[5px]'
                        : 'bg-[#A68272]'
                        }`}  >
                      {activeBioIndex === index ? <Subtract /> : <AddOn />}
                    </div>
                    <NormalText
                      className='font-medium text-white'
                      NormalText={activeBioIndex === index ? 'HIDE BIO' : 'SHOW BIO'}
                    />
                  </div>

                  {/* Bio overlay (only over image) */}
                  {activeBioIndex === index && (
                    <div className='absolute top-0 left-0 w-full h-full bg-[#A68272] bg-opacity-95 z-10 flex flex-col justify-center items-center text-center px-6 transition-all duration-300 ease-in-out'>
                      <LittleBold className='text-[#E4D9D5] mb-4' LittleBoldText='BIO' />
                      <NormalText
                        className='text-[#E4D9D5]'
                        NormalText={
                          item.bio ||
                          'ZenPeak Capital is a forward-thinking venture firm specializing in innovative investments within the realms of cryptocurrency and primary markets. With a keen eye on emerging trends and disruptive technologies, we are dedicated to identifying and nurturing high-potential opportunities that yield both financial returns and transformative impact.'
                        }
                      />
                    </div>
                  )}
                </div>
                {/* === Name & Role below image (always visible) === */}
                <div className='mt-4'>
                  <LittleBold className='text-[#0C0F26]' LittleBoldText={item.name || 'Jhone Doe'} />
                  <NormalText className='text-[#535363] mt-[5px]' NormalText={item.profession} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Ourteam;