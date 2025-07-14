import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import { Portfolio_Data } from '../utils/helper'
import LittleBold from './common/LittleBold'
import NormalText from './common/NormalText'
import backgroundImage from './../assets/webp/portfolio-bg.webp'

const Portfolio = () => {
  const [isOpen, SetIsOpen] = useState(0);
  return (
    <div className='bg-[#F7F3F0]  bg-no-repeat bg-center bg-contain' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1140px] px-3 mx-auto'>
        <SubHeading className='text-[#5A5656] max-w-[738px] text-center mx-auto ' StartItalicText={'Invest'} EndItalicText={'Portfolio'} BoldText={'cryptocurrency'} />
          <div className='border-[3px] mt-[44px] rounded-[17px] border-[#A68272] py-[10px] px-[13px] sm:py-[21px] sm:px-[25px] bg-[#DFBCA6] max-w-[636px] mx-auto'>
            {Portfolio_Data.map((item, index) => (
              <div key={index} className={`max-w-[584px]  bg-white p-[10px] sm:px-[30px] sm:py-[20px] mb-[10px] sm:mb-6 ${isOpen === index ? 'rounded-[16px]' : 'rounded-[120px]'}`}>
                <button
                  className={`flex gap-[8px] sm:gap-[30px] w-full cursor-pointer transition-all duration-200 ${isOpen === index ? 'items-start' : 'items-center'
                    }`}onClick={() => SetIsOpen(isOpen === index ? null : index)}>
                  <img src={item.image} alt="image" className={`w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] transition-all ease-in-out duration-200 ${isOpen === index ? 'scale-130' : 'scale-100'} ${isOpen === index ? 'max-w-full' : 'max-w-[50px]'}`} />
                  <div>
                    <LittleBold className='text-[#3D3F51] text-start text-base sm:!text-xl' LittleBoldText={item.title} />
                    <p className={`transition-all duration-150 max-w-[419px] max-sm:text-[12px] ease-in-out text-start ${isOpen === index ? 'sm:max-h-[100px] max-h-[250px] mt-[7px]  sm:mt-[14px]  opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{item.info} </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Portfolio            