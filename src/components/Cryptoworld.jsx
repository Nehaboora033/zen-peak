import React from 'react'
import backgroundImage from './../assets/webp/crypto world-bg.webp'
import SubHeading from './common/SubHeading'
import NormalText from './common/NormalText'
import { Crypto_World_Data } from '../utils/helper'
import LittleBold from './common/LittleBold'

const Cryptoworld = () => {
  return (
    <div className='pb-[170px] pt-[139px] bg-no-repeat bg-center bg-contain  bg-[#F7F3F0]' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='max-w-[1140px] mx-auto px-3'>
        <SubHeading className='max-w-[735px] w-full mx-auto text-[#5A5656] text-center' StartItalicText={'Let’s together'} EndItalicText={'great!'} BoldText={'make the crypto world'} />
        <NormalText className='text-[#6E6D6C] max-w-[675px] text-center mx-auto mt-[15px]' NormalText={'Pretium id amet at iaculis sit orci enim. Fames in eget neque vitae iaculis diam. Malesuada adipiscing integer tempor natoque accumsan et.'} />
        <div className='max-w-[862px] px-3 mx-auto'>
          <div className='max-w-[838px] max-[620px]:justify-center max-[620px]:flex mx-auto md:px-[42px] md:py-[38px] mt-[93px] md:border-[3px] min-[620px]:bg-[#FFFFFF] md:border-[#A68272] rounded-[17px] '>
            <div className='grid min-[620px]:grid-cols-2  gap-x-[25px] gap-y-[25px] md:gap-y-[35px]'>
              {Crypto_World_Data.map((item, index) => (
                <div key={index} className='flex gap-[18px] max-md:bg-[#FFFFFF] md:gap-[23px] items-center py-4 px-[16px] md:py-5 md:px-[23px] border border-[#000000] rounded-[16px] max-w-[365px] '>
                  <div className='w-[73px] h-[73px] bg-[#A68272] rounded-[14px] flex items-center justify-center shadow '>
                    <item.image />
                  </div>
                  <div >
                    <LittleBold className='text-[#0C0F26] sm:!text-2xl text-base ' LittleBoldText={item.title} />
                    <NormalText className='text-[#707070] max-sm:text-[14px] ' NormalText={item.info} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cryptoworld