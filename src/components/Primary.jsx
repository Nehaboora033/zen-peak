import React from 'react'
import SubHeading from './common/SubHeading'
import Image from '../assets/webp/circle.webp'
import NormalText from './common/NormalText'
const Primary = () => {
  return (
    <div className='bg-[#A68272] pb-[62px] pt-[80px]'>
      <div className='max-w-[1140px] mx-auto px-3 '>
        <div className='flex flex-wrap -mx-3 items-center '>
          <div className='w-1/2 px-3'>
            <SubHeading className='text-white max-w-[577px]' StartItalicText={'Pioneering Crypto'} EndItalicText={'Ventures'} BoldText={'and Primary Market'} />
            <NormalText className='text-white mt-[15px]' NormalText={'ZenPeak Capital is a forward-thinking venture firm specializing in innovative investments within the realms of cryptocurrency and primary markets. With a keen eye on emerging trends and disruptive technologies, we are dedicated to identifying and nurturing high-potential opportunities that yield both financial returns and transformative impact.'} />
            <NormalText className='text-white mt-[10px] max-w-[577px]' NormalText={'At ZenPeak Capital, we harness strategic investment to fuel positive change and drive growth. Focusing on established crypto assets and emerging primary market ventures, our experienced team crafts a diversified portfolio primed for long-term success.'} />
          </div>
          <div className='w-1/2 px-3 flex justify-end'>
            <img src={Image} alt="image" className='max-w-[471px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Primary