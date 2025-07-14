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
        <div className='max-w-[838px] mx-auto px-[42px] py-[38px] mt-[93px] border-[3px] bg-[#FFFFFF] border-[#A68272] rounded-[17px] '>
          <div className='grid grid-cols-2 gap-x-[25px] gap-y-[35px]'>
            {Crypto_World_Data.map((item, index) => (
              <div key={index} className='flex gap-[23px] items-center py-5 px-[23px] border border-[#000000] rounded-[16px] max-w-[365px] '>
                <div className='w-[73px] h-[73px] bg-[#A68272] rounded-[14px] flex items-center justify-center shadow '>
                  <item.image />
                </div>
                <div >
                  <LittleBold className='text-[#0C0F26] !text-2xl ' LittleBoldText={item.title} />
                  <NormalText className='text-[#707070] ' NormalText={item.info} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cryptoworld