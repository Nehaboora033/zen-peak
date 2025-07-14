import React from 'react'
import SubHeading from './common/SubHeading'
import Image from '../assets/webp/circle.webp'
import NormalText from './common/NormalText'
import Button from './common/Button'


const Primary = () => {
  return (
    <div className=' pb-[62px] pt-[80px] bg-[#A68272] '>
      <div className='max-w-[1140px] mx-auto px-3 '>
        <div className='flex  lg:flex-row flex-col -mx-3 items-center gap-[30px] '>
          <div className='lg:w-1/2 w-full px-3'>
            <Button className='rounded-[31px] px-5 py-[5px] max-w-[110px] mb-[10px] flex max-lg:mx-auto' ButtonText={'Abou us'} />
            <SubHeading className='text-white lg:max-w-[577px] max-lg:text-center ' StartItalicText={'Pioneering Crypto'} EndItalicText={'Ventures'} BoldText={'and Primary Market'} />
            <NormalText className='text-white mt-[15px] max-lg:text-center ' NormalText={'ZenPeak Capital is a forward-thinking venture firm specializing in innovative investments within the realms of cryptocurrency and primary markets. With a keen eye on emerging trends and disruptive technologies, we are dedicated to identifying and nurturing high-potential opportunities that yield both financial returns and transformative impact.'} />
            <NormalText className='text-white mt-[10px] max-lg:text-center lg:max-w-[577px]' NormalText={'At ZenPeak Capital, we harness strategic investment to fuel positive change and drive growth. Focusing on established crypto assets and emerging primary market ventures, our experienced team crafts a diversified portfolio primed for long-term success.'} />
          </div>
          <div className='lg:w-1/2 w-full px-3 flex lg:justify-end justify-center'>
            <img src={Image} alt="image" className='max-w-[471px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Primary